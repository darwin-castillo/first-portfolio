const Footer = () => {
    return (
        <footer id="contacto" className="py-20 border-t border-gray-800 mt-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-accent">¿Tienes una idea?</h2>
                    <p className="text-gray-400 mt-2 text-sm sm:text-base">Hablemos sobre cómo construirla.</p>
                </div>
                <div className="flex flex-col gap-2 md:text-right w-full md:w-auto">
                    <a href="mailto:darwin.c5@gmail.com" className="text-lg sm:text-xl font-medium text-white hover:text-accent transition-colors break-all">darwin.c5@gmail.com</a>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Based in Latam</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;