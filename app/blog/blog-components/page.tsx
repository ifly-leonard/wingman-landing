import DisqusComments from "@/components/sections/blog/disqus";
import BlogImage from "@/components/sections/blog/image-with-modal";
import SectionHeader from "@/components/ui/section-header";
import Link from "next/link";

export default function BlogStyleGuide() {
    return (
        <>
            <SectionHeader header="Blog Style Guide" subheader="Showcasing All Components" />

            <div className="w-full max-w-screen-md mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4">Blog Style Guide</h1>
                <p className="mb-4">This page displays all the different style components possible in a blog.</p>
                
                <ol className="list-decimal pl-6 space-y-4">
                    <li>
                        <h2 className="text-2xl font-semibold">Headers</h2>
                        <h1 className="text-3xl font-bold">H1 Header</h1>
                        <h2 className="text-2xl font-semibold">H2 Header</h2>
                        <h3 className="text-xl font-medium">H3 Header</h3>
                    </li>
                    <li>
                        <h2 className="text-2xl font-semibold">Paragraph Styles</h2>
                        <p className="mb-4">This is a normal paragraph.</p>
                        <p className="italic">This is an italic paragraph.</p>
                        <p className="font-bold">This is a bold paragraph.</p>
                    </li>
                    <li>
                        <h2 className="text-2xl font-semibold">Quotes</h2>
                        <blockquote className="border-l-4 border-gray-500 pl-4 italic">This is a blockquote.</blockquote>
                    </li>
                    <li>
                        <h2 className="text-2xl font-semibold">Images</h2>
                        <BlogImage src="https://ik.imagekit.io/fe0pnysrfn/wingman/image.png" />
                    </li>
                    <li>
                        <h2 className="text-2xl font-semibold">Badges</h2>
                        <div className="bg-blue-500 px-3 py-1 text-white rounded-md inline-block">#Badge</div>
                    </li>
                    <li>
                        <h2 className="text-2xl font-semibold">Lists</h2>
                        <ul className="list-disc pl-6">
                            <li>Unordered list item</li>
                            <li>Another list item</li>
                        </ul>
                        <ol className="list-decimal pl-6">
                            <li>Ordered list item</li>
                            <li>Another ordered item</li>
                        </ol>
                    </li>
                    <li>
                        <h2 className="text-2xl font-semibold">Links</h2>
                        <Link href="#" className="text-blue-600 underline">This is a link</Link>
                    </li>
                    <li>
                        <h2 className="text-2xl font-semibold">Code Snippets</h2>
                        <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
                            <code>console.log("Hello World");</code>
                        </pre>
                    </li>
                    <li>
                        <h2 className="text-2xl font-semibold">Related Articles</h2>
                        <div className="group border-2 border-gray-300 hover:border-gray-500 transition duration-300 cursor-pointer p-3 rounded-md w-full text-gray-500">
                            <h3 className="text-md font-bold">Example Related Article</h3>
                        </div>
                    </li>                    
                </ol>
            </div>
        </>
    );
}
