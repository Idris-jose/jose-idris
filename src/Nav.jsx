


export default function Nav() {
    return (
        <nav className="sticky top-0 bg-black  shadow z-50">
            <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
                <div className="flex items-center gap-6">
                    <a href="#home" className="text-white hover:text-black font-medium transition">Home</a>
                    <a href="#projects" className="text-white hover:text-black font-medium transition">Projects</a>
                    <a href="#contact" className="text-white hover:text-black font-medium transition">Contact</a>
                    <a
                        href="/cv.pdf"
                        download
                        className="px-6 py-2 bg-black text-white font-medium rounded-full shadow-md hover:bg-gray-800 transition"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </nav>
    );
}