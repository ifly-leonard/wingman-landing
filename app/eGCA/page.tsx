const pageTitle = "eGCA";

export default function PolicyPage() {
    return (
        <>            
            <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 p-6">
                <div className="flex w-full max-w-sm flex-col gap-6">
                    <h3 className="text-center text-3xl font-extrabold tracking-tighter">                        
                        {pageTitle}
                    </h3>
                    <p className="text-center flex items-center justify-center gap-2">
                        <div className="text-center">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v4" /><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" /><path d="M12 16h.01" /></svg>
                        </div>                        
                        <div>                            
                            <p>
                                This page is a work-in-progress.
                            </p>
                        </div>
                    </p>              
                </div>
            </div>
        </>
    );
}