import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'Properties', 'Services', 'About Us', 'Insights', 'Contact'];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
            <img src="/src/assets/logo.png" alt="Aarambh Logo" className="object-contain" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg md:text-xl font-extrabold tracking-tight text-[#1d4e89] uppercase leading-none">Aarambh Properties</h2>
            <p className="text-[8px] md:text-[10px] text-[#72bf44] font-bold tracking-widest uppercase mt-1">Built on Trust. Driven by Results.</p>
          </div>
        </div>

        {/* Desktop Navigation */}
       <nav className="hidden md:flex items-center gap-8">
  {navLinks.map((item) => (
    <Link
      key={item}
      to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
      className="text-sm font-bold text-slate-600 hover:text-[#1d4e89] transition-colors border-b-2 border-transparent hover:border-[#1d4e89] py-1"
    >
      {item}
    </Link>
  ))}
</nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:block px-6 py-2.5 bg-[#1d4e89] text-white rounded-lg font-bold text-sm hover:bg-[#1d4e89]/90 transition-all shadow-lg shadow-blue-900/20">
            List Property
          </button>
          <div className="hidden sm:block w-10 h-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-[#72bf44]/30">
            <img alt="Profile" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Harshit" />
          </div>
          <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-x-0 top-20 bg-white shadow-2xl border-t border-slate-100 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((item) => (
                <Link key={item} to={`/${item.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setIsOpen(false)} className="text-xl font-bold text-slate-800 flex justify-between items-center group active:text-[#1d4e89]">
                  {item}
                  <ArrowUpRight className="text-[#72bf44]" size={20} />
                </Link>
              ))}
              <div className="mt-4 pt-8 border-t border-slate-100 flex flex-col gap-6">
                <button className="w-full py-4 bg-[#1d4e89] text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-transform">
                  List Property
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;