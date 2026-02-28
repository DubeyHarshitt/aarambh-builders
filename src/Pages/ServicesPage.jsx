import React from "react";
import {
  Home,
  Building2,
  BarChart3,
  UserCheck,
  ArrowRight,
} from "lucide-react";

const PRIMARY = "#1A365D";
const ACCENT = "#005691";
const GOLD = "#C5A059";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group flex flex-col p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#C5A059]/60 transition-all duration-300 shadow-sm hover:shadow-xl">
    <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all">
      <Icon size={28} />
    </div>

    <h4 className="text-[#1A365D] text-xl font-bold mb-3">
      {title}
    </h4>

    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
      {description}
    </p>

    <a
      className="inline-flex items-center gap-2 text-[#005691] font-bold text-sm group-hover:text-[#C5A059] transition-colors"
      href="#"
    >
      Learn More <ArrowRight size={16} />
    </a>
  </div>
);

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <p className="text-4xl lg:text-5xl font-black text-[#1A365D] mb-2">
      {value}
    </p>
    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
      {label}
    </p>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Sales",
      description:
        "Luxury homes and premium apartments curated for the discerning lifestyle, featuring exclusive off-market listings.",
    },
    {
      icon: Building2,
      title: "Commercial Leasing",
      description:
        "Strategic workspaces and retail locations optimized for growth, efficiency, and brand prestige.",
    },
    {
      icon: BarChart3,
      title: "Investment Advisory",
      description:
        "Data-driven insights and market analytics to maximize the long-term value of your real estate portfolio.",
    },
    {
      icon: UserCheck,
      title: "Property Management",
      description:
        "End-to-end management services ensuring peace of mind while maximizing tenant satisfaction.",
    },
  ];

  return (
    <main className="flex-1 font-display bg-[#F4F6F9]">

      {/* Hero Section */}
      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#005691] text-xs font-bold uppercase tracking-widest w-fit">
              <span className="w-2 h-2 rounded-full bg-[#005691]"></span>
              Premium Corporate Real Estate
            </div>

            <h1 className="text-[#1A365D] text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Elevating Global <br />
              <span className="text-[#005691]">Real Estate</span> Standards
            </h1>

            <p className="text-slate-600 text-lg lg:text-xl leading-relaxed max-w-xl">
              Aarambh Properties delivers premium corporate solutions tailored for excellence — from strategic investment to luxury asset management.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="min-w-[160px] h-14 px-8 bg-[#005691] text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 transition-all">
                View Portfolio
              </button>

              <button className="min-w-[160px] h-14 px-8 border-2 border-slate-200 text-[#1A365D] font-bold rounded-xl hover:bg-slate-100 transition-all">
                Our Methodology
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              className="w-full aspect-square bg-center bg-cover rounded-3xl shadow-2xl relative z-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKoX6Z1RZ9fjAIZGuAE4SOkodvny5wUCTHWjwuq5Y9jB_b41TVyP6uTiH8tNJQeqQTdOmWxoYHecXVRGJno5UvhD7Mu0l22NdFvdkOGPd4-_f1vRhAk2cr3lEr2JbF7DCbxs7aCvddJZZZILBj_WimPsYv0ayLob-gfLxmhxg7OAfoH57tl2FBw4LerIVlNTydJbDwACEEH_bYet39R_K2u4_W7kqNCu9od8MFSTLAtbZxL3bU5h_nEgkQBFZMLV7KFZAm7vKTjN4")',
              }}
            ></div>

            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#C5A059]/20 rounded-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full"></div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 lg:px-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">

          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-[#C5A059] font-bold text-sm tracking-[0.2em] uppercase mb-4">
              Our Expertise
            </h2>

            <h3 className="text-[#1A365D] text-3xl lg:text-4xl font-bold mb-6">
              Comprehensive Property Solutions
            </h3>

            <p className="text-slate-600 text-lg">
              A full spectrum of high-end real estate services designed for high-net-worth individuals and corporate entities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 lg:px-20 bg-gradient-to-br from-[#1A365D] via-[#005691] to-[#003B66] text-white">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl lg:text-5xl font-black leading-tight">
            Ready to discuss your requirements?
          </h2>

          <p className="bg-white/20 px-6 py-2 rounded-full text-white text-sm font-medium backdrop-blur-sm">
            Schedule a confidential consultation with our advisors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="min-w-[200px] h-14 px-8 bg-white text-[#005691] font-bold rounded-xl shadow-xl hover:bg-slate-100 transition-all">
              Contact Our Experts
            </button>

            <button className="min-w-[200px] h-14 px-8 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
              Request Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-28 px-6 lg:px-20 grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <StatItem value="$4.2B+" label="Assets Managed" />
        <StatItem value="15+" label="Global Offices" />
        <StatItem value="500+" label="Premium Projects" />
        <StatItem value="98%" label="Client Retention" />
      </section>

    </main>
  );
};

export default ServicesPage;