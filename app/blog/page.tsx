"use client" 

import DisqusComments from "@/components/sections/blog/disqus";
import BlogImage from "@/components/sections/blog/image-with-modal";
import Link from "next/link"
import { ProgressBar } from '@nadfri/react-scroll-progress-bar';
import {ShareSocial} from 'react-share-social' 

export default function PolicyPage() {


      
    return (
        <>
            <ProgressBar color1="white" color2="#4387F6" height="10px" position="sticky" />                    
            {/* <SectionHeader header="POLICY" subheader="Privacy" /> */}


            {/*     
                - Related articles 
            */}
            <ol className="flex items-center whitespace-nowrap mt-10 mb-10 border hover:border-gray-300 transition duration-250 border-gray-100 cursor-pointer rounded-md px-3 py-1">
                <li className="inline-flex items-center">
                    <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="#">
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
                    <Link className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/policy">
                        Blogs
                    </Link>
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
                <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate" aria-current="page">
                    [Slug]
                </li>
            </ol>


            <div className="w-full max-w-screen-md">

                <section id="header" className="p-12 bg-gradient-to-r from-blue-500 to-blue-500/90 rounded-2xl">
                    <div className="text-white text-left">
                        <h2 className="text-4xl font-bold">The Flight to ATPL: Conquering Paperwork and Soaring High</h2>
                        <div className="flex mt-4 space-x-3 text-sm">
                            <div className="bg-zinc-700 px-3 py-1 text-white hover:bg-zinc-900 cursor-pointer transition duration-500 rounded-md">
                                #tag1
                            </div>
                            <div className="bg-zinc-700 px-3 py-1 text-white hover:bg-zinc-900 cursor-pointer transition duration-500 rounded-md">
                                #tag2
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex gap-3 items-center justify-between mt-5 px-10 text-gray-500">
                    <div className="">
                        Author: <strong>Monica G</strong>
                    </div>
                    <div>
                        Last updated: <strong>8 FEB 2025</strong>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto p-6 text-gray-900">
                    <h1 className="text-3xl font-bold mb-4">Unlocking the ATPL Dream</h1>
                    <p className="mb-4">Good evening, everyone! Hope you’re ready to laugh because tonight, we’re diving into the world of aviation paperwork. Yeah, the kind of stuff that makes you go, "Do I really need to fly? Maybe I’ll just stick to bicycles."</p>

                    <h2 className="text-2xl font-semibold mt-6">ATPL - The Big Kahuna</h2>
                    <p className="mb-4">So, ATPL—the Airline Transport Pilot License. It’s the crown jewel for pilots. It’s the Big Kahuna, the golden ticket to flying those fancy NSOP charter planes. But here’s the catch: before you touch that cockpit, you have to conquer... </p>
                    <blockquote className="border-l-4 border-gray-500 pl-4 italic">Mount Paperwork</blockquote>
                    <p className="mb-4">And let me tell you, it’s no ordinary mountain. It’s Everest, but with staplers, forms, and a DGCA official at every base camp saying, “Sorry, sir, one document is missing.”</p>

                    <BlogImage src="https://ik.imagekit.io/fe0pnysrfn/wingman/image.png" />

                    <h2 className="text-2xl font-semibold mt-6">The Logbook Saga</h2>
                    <p className="mb-4">First, you’ve got the logbook. Oh, this thing is your life story. It’s like a diary but without the juicy secrets.</p>
                    <blockquote className="border-l-4 border-gray-500 pl-4 italic">"Dear Diary, today I flew 3.2 hours, performed 2 landings, and didn’t spill my coffee ONCE. Truly living the dream."</blockquote>
                    <p className="mb-4">But miss one entry, and the DGCA’s like,</p>
                    <blockquote className="border-l-4 border-gray-500 pl-4 italic">"No license for you! Go back and count your hours like a good little pilot."</blockquote>

                    <h2 className="text-2xl font-semibold mt-6">Medical Drama</h2>
                    <p className="mb-4">Next, there’s the Class I Medical Certificate. Pilots know this drill too well. You show up, and they poke, prod, and question every cell in your body.</p>
                    <blockquote className="border-l-4 border-gray-500 pl-4 italic">“Sir, do you have any allergies?” <br /> “Yes. To paperwork.” <br /> “Ah, well, you’re in the wrong profession then.”</blockquote>
                    <p className="mb-4">It's basically a health check-up but with the vibe of a CIA interrogation.</p>

                    <h2 className="text-2xl font-semibold mt-6">The Wingman Way</h2>
                    <p className="mb-4">If you’re an aspiring pilot dreaming of NSOP skies, remember the ATPL quest is a rite of passage. It’s tough, but it’s also transformative.</p>
                    <p className="mb-4">If you’re wondering how to start or where to go from here, don’t do it alone. <strong>Wingman Pilot Logbook</strong> makes documentation feel like a breeze, and our blog is your map to conquering skies—one checklist at a time.</p>

                    <h2 className="text-2xl font-semibold mt-6">Help Me with my ATPL Application</h2>
                    <p className="mb-4">And how do you reach us at Wingman? Write to us at <a href="mailto:support@wingman.zohodesk.com" className="text-blue-600 underline">support@wingman.zohodesk.com</a> or <a href="mailto:info@wingmanlog.com" className="text-blue-600 underline">info@wingmanlog.com</a>, and someone from our team will answer all your ATPL queries and quote you for the process, customized to your needs.</p>

                    <h2 className="text-2xl font-semibold mt-6">Ready for Takeoff?</h2>
                    <p className="mb-4">Whether you’re a pilot, passenger, or just someone who dreams of the clouds, there’s something for everyone here at Wingman.</p>

                    <div className="mt-12">
                        <div className="mb-2">
                            <p className="text-center italic">
                                Related articles
                            </p>
                        </div>
                        <div className="flex justify-between gap-3">
                            <div className="group border-2 border-gray-300 hover:border-blue-500 transition duration-300 cursor-pointer p-3 rounded-md w-full text-gray-500">
                                <h2 className="text-md font-bold">The Flight to ATPL: Conquering Paperwork and Soaring High</h2>
                                <div className="flex mt-4 space-x-3 text-sm">
                                    <div className="bg-zinc-700 px-3 py-1 text-white hover:bg-zinc-900 cursor-pointer transition duration-500 rounded-md">
                                        #tag1
                                    </div>
                                    <div className="bg-zinc-700 px-3 py-1 text-white hover:bg-zinc-900 cursor-pointer transition duration-500 rounded-md">
                                        #tag2
                                    </div>
                                </div>
                            </div>
                            <div className="group border-2 border-gray-300 hover:border-gray-500 transition duration-300 cursor-pointer p-3 rounded-md w-full text-gray-500">
                                <h2 className="text-md font-bold">The Flight to ATPL: Conquering Paperwork and Soaring High</h2>
                                <div className="flex mt-4 space-x-3 text-sm">
                                    <div className="bg-zinc-700 px-3 py-1 text-white hover:bg-zinc-900 cursor-pointer transition duration-500 rounded-md">
                                        #tag1
                                    </div>
                                    <div className="bg-zinc-700 px-3 py-1 text-white hover:bg-zinc-900 cursor-pointer transition duration-500 rounded-md">
                                        #tag2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <div className="flex justify-center items-center mx-auto">
                            <ShareSocial 
                                // title={"This is a test"}
                                url={window.location.href}
                                socialTypes={['facebook','twitter','linkedin', 'whatsapp', 'telegram']}
                                onSocialButtonClicked={ data => console.log('Social button clicked! Should we log this? - LS' + data)}    
                            />
                        </div>

                        <DisqusComments />
                    </div>
                </div>
            </div>
        </>
    );
}