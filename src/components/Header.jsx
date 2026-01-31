import buildingLogo from '../assets/building.svg';
const Header = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 py-12 px-6 rounded-2xl shadow-2xl">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                <a href="/" className="inline-block mb-6 transform hover:scale-110 transition-transform duration-300">
                    <img src={buildingLogo} className="h-32 w-32 drop-shadow-lg" alt="Building logo" />
                </a>
                <a className="text-xl font-bold text-white mb-2 block text-center">
                    Building Something Amazing
                </a>
                <a className="text-base font-semibold text-blue-100 block text-center hover:text-white transition-colors duration-300">
                    Website in progress 🚧
                </a>
            </div>
        </div>
    );
};

export default Header;