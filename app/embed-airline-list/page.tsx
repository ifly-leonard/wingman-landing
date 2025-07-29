"use client"

import { useState, useMemo, useEffect } from "react"
import { getAirlines, Airline } from "@/lib/api/airlinesApi"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { RainbowButton } from "@/components/ui/rainbow-button"

// Custom section header for dark theme
const EmbedSectionHeader = ({ header, subheader }: { header: string; subheader: string }) => (
    <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">{header}</h1>
        <p className="text-xl text-gray-300">{subheader}</p>
    </div>
)

// Loading spinner component
const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
)

// Error message component
const ErrorMessage = ({ message, onRetry }: { message: string; onRetry: () => void }) => (
    <div className="text-center py-12">
        <p className="text-xl text-red-400 mb-4">{message}</p>
        <button 
            onClick={onRetry}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
            Try Again
        </button>
    </div>
)

export default function EmbedAirlineListPage() {
    const [airlines, setAirlines] = useState<Airline[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [search, setSearch] = useState("")
    const [filterSystem, setFilterSystem] = useState<string>("all")
    const [sortBy, setSortBy] = useState<"name" | "iata">("name")

    // Fetch airlines data on component mount
    useEffect(() => {
        loadAirlines()
    }, [])

    const loadAirlines = async () => {
        try {
            setLoading(true)
            setError(null)
            const airlinesData = await getAirlines()
            setAirlines(airlinesData)
        } catch (err) {
            setError('Failed to load airlines data. Please try again.')
            console.error('Error loading airlines:', err)
        } finally {
            setLoading(false)
        }
    }

    // Get unique roster systems for filtering
    const rosterSystems = useMemo(() => {
        return [...new Set(airlines.map(airline => airline.roster_system))].sort()
    }, [airlines])

    // Quick access array with essential airline information
    const quickAirlinesList = useMemo(() => {
        return airlines.map(airline => ({
            name: airline.name,
            iata: airline.iata,
            system: airline.roster_system
        }))
    }, [airlines])

    // Common airline search terms for typing animation
    const searchSuggestions = useMemo(() => {
        if (quickAirlinesList.length === 0) return []
        return quickAirlinesList.slice(0, 8).map(airline => airline.name).concat([
            quickAirlinesList.find(a => a.name.includes("Indigo"))?.iata || "6E",
            quickAirlinesList.find(a => a.name.includes("British Airways"))?.iata || "BA",
        ])
    }, [quickAirlinesList])

    // Filter and sort airlines based on search and filters
    const filteredAirlines = useMemo(() => {
        return airlines
            .filter(airline => {
                // Filter by search term
                const searchMatch =
                    airline.name.toLowerCase().includes(search.toLowerCase()) ||
                    airline.iata.toLowerCase().includes(search.toLowerCase()) ||
                    airline.icao.toLowerCase().includes(search.toLowerCase())

                // Filter by roster system
                const systemMatch = filterSystem === "all" || airline.roster_system === filterSystem

                return searchMatch && systemMatch
            })
            .sort((a, b) => {
                if (sortBy === "name") {
                    return a.name.localeCompare(b.name)
                } else {
                    return a.iata.localeCompare(b.iata)
                }
            })
    }, [airlines, search, filterSystem, sortBy])

    // Group airlines by first letter for alphabetical segmentation
    const alphabeticalGroups = useMemo(() => {
        const groups: Record<string, Airline[]> = {}

        filteredAirlines.forEach(airline => {
            const firstLetter = airline.name.charAt(0).toUpperCase()
            if (!groups[firstLetter]) {
                groups[firstLetter] = []
            }
            groups[firstLetter].push(airline)
        })

        return groups
    }, [filteredAirlines])

    // Get alphabet for jump links
    const alphabet = Object.keys(alphabeticalGroups).sort()

    return (
        <div style={{ backgroundColor: '#16181D', minHeight: '100vh', color: 'white' }}>
            <div className="container mx-auto py-8 px-4">                
                <p className="text-center text-gray-300 mb-8 -mt-5">
                    {loading ? 'Loading...' : `${airlines.length} airlines, ${rosterSystems.length} roster systems, across the 🌏`}
                </p>

                {/* Loading State */}
                {loading && <LoadingSpinner />}

                {/* Error State */}
                {error && <ErrorMessage message={error} onRetry={loadAirlines} />}

                {/* Main Content - only show when not loading and no error */}
                {!loading && !error && (
                    <>
                        <div className="max-w-xl mx-auto mt-12 mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full px-4 py-3 rounded-3xl border transition focus:shadow-lg duration-300 border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder=""
                                />

                                {/* Typing animation for search suggestions */}
                                {!search && searchSuggestions.length > 0 && (
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <TypeAnimation
                                            sequence={searchSuggestions.flatMap(term => [term, 1000, ''])}
                                            wrapper="span"
                                            speed={50}
                                            repeat={Infinity}
                                            cursor={true}
                                        />
                                    </div>
                                )}

                                <svg
                                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    style={{ cursor: 'pointer' }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Search and filter controls */}
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
                            <div className="flex flex-wrap gap-3 w-full md:w-auto">
                                <select
                                    className="flex-1 md:flex-none px-4 py-2.5 border border-gray-600 rounded-lg bg-gray-800 text-white shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 appearance-none"
                                    value={filterSystem}
                                    onChange={(e) => setFilterSystem(e.target.value)}
                                >
                                    <option value="all">All roster systems</option>
                                    {rosterSystems.map(system => (
                                        <option key={system} value={system}>{system}</option>
                                    ))}
                                </select>

                                <select
                                    className="flex-1 md:flex-none px-4 py-2.5 border border-gray-600 rounded-lg bg-gray-800 text-white shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 appearance-none"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as "name" | "iata")}
                                >
                                    <option value="name">Sort by airline name</option>
                                    <option value="iata">Sort by IATA code</option>
                                </select>
                            </div>
                        </div>

                        {/* Alphabet jump links */}
                        {alphabet.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6 justify-center">
                                {alphabet.map(letter => (
                                    <a
                                        key={letter}
                                        href={`#section-${letter}`}
                                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-blue-400 font-medium hover:bg-blue-500/20 hover:scale-105 transition duration-400"
                                    >
                                        {letter}
                                    </a>
                                ))}
                            </div>
                        )}

                        {/* Airline list grouped alphabetically */}
                        {Object.entries(alphabeticalGroups).sort().map(([letter, airlinesInGroup]) => (
                            <div key={letter} id={`section-${letter}`} className="mb-10 max-w-5xl mx-auto">
                                <h2 className="text-2xl font-bold border-b-2 border-blue-500 mb-4 pb-2 text-white">{letter}</h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    {airlinesInGroup.map((airline) => (
                                        <div
                                            key={airline.icao}
                                            className="border border-gray-600 bg-white rounded-lg p-4 flex flex-col items-center hover:shadow-lg hover:border-blue-500 hover:scale-105 cursor-pointer transition duration-200 hover:shadow-blue-500"
                                        >
                                            <div className="h-16 flex items-center justify-center mb-3">
                                                <Image
                                                    src={`https://content.airhex.com/content/logos/airlines_${airline.iata}_701_200_r.png`}
                                                    alt={airline.name}
                                                    width={200}
                                                    height={70}
                                                    className="max-h-16 max-w-full object-contain"
                                                />
                                            </div>

                                            <h3 className="font-semibold text-center mb-1 text-gray-900">{airline.name}</h3>

                                            <div className="flex gap-2 mt-2 text-sm">
                                                <span className="px-2 py-1 bg-blue-600 text-blue-100 rounded">{airline.iata}</span>
                                                <span className="px-2 py-1 bg-gray-600 text-gray-200 rounded">{airline.roster_system}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* CTA section styled like product-cta component */}
                        <section className="p-5 my-12 bg-gradient-to-r from-blue-600 to-blue-700 flex flex-col md:flex-row justify-between items-center rounded-2xl md:p-10 w-full max-w-5xl mx-auto">
                            <div className="text-white text-left mb-4 md:mb-0">
                                <h2 className="text-2xl font-bold text-white">Can&apos;t find your airline?</h2>
                                <p className="text-gray-100">We&apos;re always adding new airlines to our roster. Let us know what you need!</p>
                            </div>
                            
                            <Link href="https://support.wingmanlog.in/portal/en/newticket" target="_blank" className="inline-block mt-4">
                                <RainbowButton>
                                    Open a support ticket, we&apos;ll make it happen
                                </RainbowButton>
                            </Link>
                        </section>

                        {/* No results CTA */}
                        {!filteredAirlines.length && airlines.length > 0 && (
                            <div className="text-center py-12">
                                <p className="text-xl text-gray-300">
                                    Looks like we don&apos;t support this airline yet.
                                </p>
                                <Link href="https://support.wingmanlog.in/portal/en/newticket" target="_blank" className="inline-block mt-4">
                                    <RainbowButton>
                                        Open a support ticket, we&apos;ll make it happen
                                    </RainbowButton>
                                </Link>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
} 