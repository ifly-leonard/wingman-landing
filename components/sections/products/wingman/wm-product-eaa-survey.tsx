import Image from "next/image";

export function WingmanProductEAASurvey() {
    const logoBoxStyle = "inline-flex items-center mx-2 shadow bg-gray-50 p-4 rounded-3xl border border-gray-200 hover:rotate-0 cursor-pointer align-middle";
    
    return (
        <div className="rounded-lg px-2 py-2 w-full flex justify-center mt-10">    
            <div className="text-2xl mt-10 text-gray-500 max-w-4xl text-center">
                <p className="flex flex-wrap items-center justify-center">
                    Well, you are not alone. In a survey done by 
                    <span className={`${logoBoxStyle} transition-transform duration-100 rotate-3`}>
                        <Image 
                            src="/images/survey-logos/eaa-logo.png" 
                            alt="EAA Logo" 
                            width={160}
                            height={72}
                            className="h-10 w-auto"
                        />
                    </span>
                    <span className="font-bold underline underline-offset-4 mx-2 text-red-500">80% of pilots</span> admit they <span className="font-bold underline underline-offset-4 mx-2 text-red-500">procrastinate</span> or <span className="font-bold underline underline-offset-4 mx-2 text-red-500">avoid</span> updating their logbooks regularly.
                </p>
                
                <p className="flex flex-wrap items-center justify-center mt-8">
                    This is backed by countless threads on
                    <span className={`${logoBoxStyle} transition-transform duration-150 -rotate-2`}>
                        <Image 
                            src="/images/survey-logos/pprune-logo.gif" 
                            alt="PPRune Logo" 
                            width={160}
                            height={72}
                            className="h-10 w-auto"
                        />
                    </span> and 
                    <span className={`${logoBoxStyle} transition-transform duration-200 rotate-6`}>
                        <Image 
                            src="/images/survey-logos/reddit-logo.png" 
                            alt="Reddit Logo" 
                            width={160}
                            height={72}
                            className="h-10 w-auto"
                        />
                    </span>
                </p>
            </div>
        </div>
    );
} 