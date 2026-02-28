import React from 'react';
import { MapPin, Mail, Phone, Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { Icon: Twitter, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" },
  ];

  const quickLinks = [
    "Residential Projects",
    "Corporate Spaces",
    "Industrial Estates",
    "Investment Advisory",
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded bg-[#1d4e89] flex items-center justify-center">
                  <ArrowUpRight className="text-[#72bf44]" size={20} />
               </div>
               <h2 className="text-xl font-black text-white uppercase tracking-tighter">Aarambh</h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Redefining excellence in corporate and high-end residential real estate with a commitment to integrity.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#1d4e89] hover:text-white transition-all duration-300 border border-slate-800"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Services</h4>
            <ul className="flex flex-col gap-4 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#72bf44] transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#72bf44] mr-0 group-hover:mr-2 transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Company</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="#" className="hover:text-[#72bf44] transition-colors">About Our Vision</a></li>
              <li><a href="#" className="hover:text-[#72bf44] transition-colors">Leadership Team</a></li>
              <li><a href="#" className="hover:text-[#72bf44] transition-colors">Legal & Compliance</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Get In Touch</h4>
            <ul className="flex flex-col gap-5 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-[#72bf44] shrink-0" />
                <span>Level 14, Birla Tower, Nariman Point, Mumbai - 400021</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-[#72bf44] shrink-0" />
                <a href="mailto:consult@aarambh.com" className="hover:text-white transition-colors">consult@aarambh.com</a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-[#72bf44] shrink-0" />
                <a href="tel:+912245678900" className="hover:text-white transition-colors">+91 22 4567 8900</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[2px]">
            © {new Date().getFullYear()} Aarambh Properties. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;