const Footer = () => {
    return (
        <footer id="contacto" className="py-20 border-t border-gray-100 mt-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h2 className="text-3xl font-semibold text-gray-900">¿Tienes una idea?</h2>
                    <p className="text-gray-500 mt-2">Hablemos sobre cómo construirla.</p>
                </div>
                <div className="flex flex-col gap-2 text-right">
                    <a href="mailto:tuemail@ejemplo.com" className="text-xl font-medium hover:underline">tuemail@ejemplo.com</a>
                    <p className="text-sm text-gray-400 uppercase tracking-tighter">Based in Latam</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;