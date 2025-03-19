export default function SectionHeader({ header = 'Default Header', subheader = 'Default Subheader' }) {
    return (
        <div className="text-center space-y-4 pb-10">
            <h2 className="text-sm text-blue-500 font-mono font-semibold tracking-wider uppercase">
                {header}
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold lowercase tracking-tighter leading-tight text-gray-900">
                <div dangerouslySetInnerHTML={{ __html: subheader }}></div>
            </h3>
        </div>
    )
}