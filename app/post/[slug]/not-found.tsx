import Link from 'next/link';
//TODO Make this aviation themed. 
export default function BlogPostNotFound() {
  return (
    <>

      <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 p-6">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <span className="text-5xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 9v4" />
                <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                <path d="M12 16h.01" />
            </svg>
          </span>
            <h1 className="text-4xl font-bold mb-4">            
              Pan-pan, pan-pan, pan-pan
            </h1>
            
            <p className="text-xl mb-8">The page that you&apos;re looking for, looks like it&apos;s vanished. Maybe the link has changed? Try using the &quot;search&quot; function.</p>
            
            <Link href="/post" className="bg-red-600 hover:bg-red-700 text-center text-white font-medium py-2 px-4 rounded-md transition-colors">
              View other blogs
            </Link>          
        </div>
      </div>



    </>

  );
} 