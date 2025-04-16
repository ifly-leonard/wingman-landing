"use client"
import { useEffect } from "react";

const pageTitle = "Password Reset";

export default function PolicyPage() {
    
    useEffect(() => {
        window.open("https://www.wingmanlog.com/password_reset/", "_blank");
    }, []);
    
    return (
        <>            
            <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 p-6">
                <div className="flex w-full max-w-sm flex-col gap-6">
                    <h3 className="text-center text-3xl font-extrabold tracking-tighter">                        
                        {pageTitle}
                    </h3>
                    <div className="text-center d-flex items-center justify-center gap-2">                                                
                        <div>Opening password reset page in a new tab. </div>
                        <div className="text-blue-500 font-bold cursor-pointer">
                            <a href="https://www.wingmanlog.com/password_reset" target="_blank">https://www.wingmanlog.com/password_reset</a>
                        </div>
                    </div>              
                </div>
            </div>
        </>
    );
}