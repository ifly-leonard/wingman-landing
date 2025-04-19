import Link from 'next/link';

export default function NotFound() {

  
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 p-6">
        <div className="flex w-full max-w-sm flex-col gap-6">          
            <h1 className="text-4xl font-bold mb-4">            
              Whoops
            </h1>        
            <p className="text-xl mb-8">
              This page is a work in progress.
            </p>                           
        </div>
      </div>
    </>
  );
} 