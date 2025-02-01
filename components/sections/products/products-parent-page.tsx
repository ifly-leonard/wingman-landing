export default function ProductParentPage({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="p-5 text-center bg-gray-500">
                This is a layout component
            </div>
            
            {children}
        </div>
    )
}