import BinanceLogo from '../images/binance-logo.png';

export default function Header() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-[#181A20]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={BinanceLogo} className="h-8" alt="Logo Crypto App" />
        </a>
        <div className="hidden w-full md:block md:w-auto text-lg font-semibold text-teal-50 " id="navbar-default">
          <a href="/">Hola, Usuario!</a>
        </div>
      </div>
    </nav>
  );
}