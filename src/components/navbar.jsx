import logo from '@/assets/logo.svg';
export function Navbar() {
    return (
      <header className="px-4 lg:px-6 h-22 flex items-center border-b border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 sticky top-0 z-50">
        <a className="flex items-center justify-center" href="/">
          <img src={logo} className="h-20 w-20 mr-2 text-[#5386e4] dark:text-blue-400" />
          <span className="font-bold text-2xl text-[#5386e4] dark:text-blue-300">NicaraoSat</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-[#5386e4] dark:hover:text-blue-400 transition-colors" href="/">Inicio</a>
          <a className="text-sm font-medium hover:text-[#5386e4] dark:hover:text-blue-400 transition-colors" href="/map">Mapa Interactivo</a>
        </nav>
      </header>
    );
  }
  