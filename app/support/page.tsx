"use client"
import Link from "next/link"
import { useState, useEffect, useMemo } from "react";
import { TypeAnimation } from 'react-type-animation';
import { RainbowButton } from "@/components/ui/rainbow-button";

// FAQ data that will be used for the typing animation
const COMMON_QUESTIONS = [
    "How do I import flights from eGCA?",
    "Can I manually enter flight data?",
    "How do I split long-haul flights with split duty?",
    "How can I set my default verifier or operator?",    
    "How do I back up or export my logbook?",
    "Can I log simulator flights?",
    "How do I enable auto-logging for flights?",
    "What if my hours don't match the total?",
    "How do I reset my password or recover my account?"
  ];

export default function SupportPage() {
    const [indiaTime, setIndiaTime] = useState("");
    const [isOnline, setIsOnline] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [waitTime, setWaitTime] = useState("");

    // Generate typing animation sequence from questions
    const typingSequence = useMemo(() => {
        const sequence: (string | number)[] = [];
        
        COMMON_QUESTIONS.forEach((question, index) => {
            // Add question
            sequence.push(question);
            // Wait time
            sequence.push(1000);
            // Delete question
            sequence.push('');
            // Wait before next question
            if (index < COMMON_QUESTIONS.length - 1) sequence.push(500);
        });
        
        return sequence;
    }, []);

    useEffect(() => {
        // Update time every minute
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = { 
                timeZone: 'Asia/Kolkata', 
                hour: '2-digit' as const, 
                minute: '2-digit' as const,
                hour12: false 
            };
            setIndiaTime(now.toLocaleTimeString('en-US', options));

            // Create a date object for India time
            const indiaDate = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
            const dayOfWeek = indiaDate.getDay(); // 0 is Sunday, 1 is Monday, etc.
            const indiaHour = indiaDate.getHours();
            const indiaMinutes = indiaDate.getMinutes();
            
            // Check if support is online (Monday-Saturday, 10:00-19:00)
            setIsOnline(
                dayOfWeek >= 1 && dayOfWeek <= 6 && // Monday to Saturday
                indiaHour >= 10 && indiaHour < 19 // 10:00 to 19:00
            );

            // setIsOnline(true);

            // Calculate time until next support session
            if (!isOnline) {
                const nextSupportTime = new Date(indiaDate);
                
                // Case 1: After hours on weekday (Mon-Fri)
                if (dayOfWeek >= 1 && dayOfWeek <= 5 && (indiaHour >= 19 || indiaHour < 10)) {
                    if (indiaHour >= 19) {
                        // After 7pm, next day at 10am
                        nextSupportTime.setDate(nextSupportTime.getDate() + 1);
                    }
                    nextSupportTime.setHours(10, 0, 0, 0);
                }
                // Case 2: After hours on Saturday
                else if (dayOfWeek === 6 && (indiaHour >= 19 || indiaHour < 10)) {
                    if (indiaHour >= 19) {
                        // After 7pm Saturday, skip to Monday at 10am
                        nextSupportTime.setDate(nextSupportTime.getDate() + 2);
                    }
                    nextSupportTime.setHours(10, 0, 0, 0);
                }
                // Case 3: Sunday (any time)
                else if (dayOfWeek === 0) {
                    // Skip to Monday at 10am
                    nextSupportTime.setDate(nextSupportTime.getDate() + 1);
                    nextSupportTime.setHours(10, 0, 0, 0);
                }
                // Case 4: Before hours on a support day (Mon-Sat)
                else if (indiaHour < 10) {
                    nextSupportTime.setHours(10, 0, 0, 0);
                }
                
                // Calculate difference in hours and minutes
                const diffMs = nextSupportTime.getTime() - indiaDate.getTime();
                const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
                const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
                
                if (diffHrs > 0) {
                    setWaitTime(`${diffHrs} hour${diffHrs !== 1 ? 's' : ''}`);
                } else {
                    setWaitTime(`${diffMins} minute${diffMins !== 1 ? 's' : ''}`);
                }
            }
        };

        updateTime();
        const interval = setInterval(updateTime, 60000); // Update every minute
        
        return () => clearInterval(interval);
 
    }, [isOnline]);

    const handleSearchKnowledgeBase = () => {
        if (searchQuery.trim()) {
            // Redirect to knowledge base search results with target="_blank" to open in new tab
            window.open(`https://support.wingmanlog.in/portal/en/kb/search/${encodeURIComponent(searchQuery)}`, '_blank');
        } else {
            // Redirect to knowledge base main page in new tab
            window.open("https://support.wingmanlog.in", '_blank');
        }
    };

    const handleTalkToHuman = () => {
        // Open chat support or redirect to contact form
        // window.location.href = "/contact";
        window.open("https://support.wingmanlog.in/portal/en/newticket", '_blank');
    };
    
    return (
        <>
            {/* <SectionHeader header="POLICY" subheader="Privacy" /> */}

            <ol className="flex items-center whitespace-nowrap mt-10 mb-10">
                <li className="inline-flex items-center">
                    <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/">
                        Home
                    </a>
                    <svg
                        className="shrink-0 mx-2 size-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </li>
                <li className="inline-flex items-center">
                    <Link className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/support">
                        Support
                    </Link>
                </li>
            </ol>

            <section>
                <p className="text-center text-gray-600 text-3xl mt-5 mb-3 max-w-3xl">
                    Hi Captain, how can we help you today?
                </p>     

                <div className="max-w-5xl mx-auto mt-12 mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            // placeholder="Search our knowledge base instantly"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearchKnowledgeBase()}
                            className="w-full px-4 py-3 rounded-3xl border transition focus:shadow-lg duration-300 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                        {/* Typing animation that shows inside the input field as placeholder text */}
                        <div 
                            className={`absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 ${searchQuery ? 'hidden' : ''}`}
                            aria-hidden="true"
                        >
                            <TypeAnimation
                                sequence={typingSequence}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                cursor={true}
                            />
                        </div>
                        
                        <svg
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            onClick={handleSearchKnowledgeBase}
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

                <p className="text-center text-gray-600 -mt-5 text-lg">
                    There are currently <span className="bg-blue-500 px-2 py-1 text-white">1230* articles</span> in our knowledge base. 
                    <br/><br/> Resolution time: Instant 🔥
                </p>
                
            </section>
         

            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-8 bg-gray-300 border-2" />
                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2">or</span>
            </div>


            <section className="text-center mt-4 text-lg">

                <div className="flex justify-center mb-3">
                    <RainbowButton onClick={handleTalkToHuman}>
                        Open a support ticket
                    </RainbowButton>                    
                </div>

                {isOnline && <span className="text-gray-500">Average response time: 18 minutes ⌛</span>}
                {!isOnline && <span className="text-gray-500">Earliest response in {waitTime} ⌛</span>}


                <p className="text-md mt-5">
                    It&apos;s {indiaTime} in India 🇮🇳, our support team is currently
                    <span className={`px-3 py-1 border-2 rounded-3xl ml-1 ${isOnline ? 'border-green-500 text-green-600 bg-green-500/20' : 'border-gray-500 text-gray-600 bg-gray-500/20'}`}>
                        {isOnline ? 'online 🤗' : 'offline 😴'}
                    </span>
                </p>
                {!isOnline && <p className="mt-3 text-sm text-gray-500">
                    Support watch hours: <u>Monday</u> to <u>Saturday</u>, 10:00 to 19:00 GMT+5:30 (India Standard Time)
                </p>}
            </section>
         
        </>
    );
}