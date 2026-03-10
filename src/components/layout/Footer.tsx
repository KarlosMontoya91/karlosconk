export const Footer = () => {
    return (
        <footer className="py-12 border-t border-gray-800 bg-[#0a0a0a]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-xl tracking-tight text-white">
                            Karlos<span className="text-accent-coral">Montoya</span>
                        </span>
                        <span className="text-gray-500 text-sm ml-2">© {new Date().getFullYear()}</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/Karlosmontoya91" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-sky transition-colors font-sans font-medium">
                            GitHub
                        </a>
                        <a href="https://karlosmontoya91.github.io/Karlos_Montoya_CV/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-lilac transition-colors font-sans font-medium">
                            Portfolio
                        </a>
                        <a href="#blog" className="text-gray-400 hover:text-accent-mint transition-colors font-sans font-medium">
                            Blog
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
