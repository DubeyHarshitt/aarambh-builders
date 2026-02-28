import React from 'react';
import { Search, MapPin, ArrowRight, ShieldCheck, Briefcase, BarChart3, Users } from 'lucide-react';
import { 
  Handshake, 
  Award, 
  Star, 
  Quote 
} from 'lucide-react';

const PropertyCard = ({ name, location, price, image, tag }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-slate-100 transition-all hover:shadow-2xl">
    <div className="aspect-[4/3] overflow-hidden relative">
      <img 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        src={image} 
        alt={name} 
      />
      <div className="absolute top-4 left-4 bg-[#1d4e89]/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
        {tag}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-1 group-hover:text-[#1d4e89] transition-colors">{name}</h3>
      <p className="text-slate-500 text-sm mb-4 flex items-center gap-1">
        <MapPin size={14} /> {location}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
        <span className="text-lg font-black text-[#1d4e89]">
          {price} <span className="text-xs font-normal text-slate-400">Onwards</span>
        </span>
        <span className="text-[#72bf44] font-bold text-sm cursor-pointer flex items-center gap-1">
          Details <ArrowRight size={14} />
        </span>
      </div>
    </div>
  </div>
);

const Home = () => {
  const properties = [
    { name: "Aarambh Corporate Park", location: "Worli, South Mumbai", price: "₹14.5 Cr", tag: "New Launch", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000" },
    { name: "Skyline Residency", location: "Banjara Hills, Hyderabad", price: "₹8.2 Cr", tag: "Exclusive", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000" },
    { name: "Emerald Heights", location: "Magarpatta City, Pune", price: "₹5.9 Cr", tag: "Ready to Occupy", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000" }
  ];

  return (
    <main className="bg-[#f8fafc]">
      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent z-10"></div>
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" alt="Corporate Office" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#72bf44]/20 text-[#72bf44] border border-[#72bf44]/30 w-fit">
              <ShieldCheck size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Defining Modern Excellence</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Your Trusted Partner in <span className="text-[#72bf44]">Real Estate</span> Excellence
            </h1>
            <p className="text-lg text-slate-200 max-w-lg leading-relaxed">
              Curating a portfolio of premium corporate spaces and bespoke residential estates.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 h-14 bg-[#1d4e89] text-white rounded-lg font-bold hover:translate-y-[-2px] transition-all shadow-xl shadow-blue-900/20 flex items-center gap-2">
                View All Projects <ArrowRight size={18} />
              </button>
              <button className="px-8 h-14 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-bold hover:bg-white/20 transition-all">
                Consult an Expert
              </button>
            </div>
          </div>

          {/* SEARCH BOX */}
          <div className="hidden lg:block bg-white p-8 rounded-2xl shadow-2xl border border-slate-100">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
              <Search className="text-[#1d4e89]" size={20} /> Find Your Ideal Space
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Location</label>
                <input className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#1d4e89] outline-none" placeholder="Mumbai, Pune, Bangalore..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <select className="h-12 bg-slate-50 border border-slate-200 rounded-lg px-2 text-sm">
                  <option>Corporate Office</option>
                  <option>Luxury Villa</option>
                </select>
                <select className="h-12 bg-slate-50 border border-slate-200 rounded-lg px-2 text-sm">
                  <option>₹5Cr - ₹10Cr</option>
                  <option>₹10Cr+</option>
                </select>
              </div>
              <button className="w-full h-14 bg-[#1d4e89] text-white rounded-lg font-bold hover:bg-[#1d4e89]/90 transition-all">
                Search Listings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-30">
        <div className="bg-white rounded-2xl shadow-xl grid grid-cols-2 md:grid-cols-4 p-8 border border-slate-100">
          {[
            { label: 'Years Experience', val: '15+', color: 'text-[#1d4e89]' },
            { label: 'Properties Sold', val: '450+', color: 'text-[#72bf44]' },
            { label: 'Sq Ft Managed', val: '1.2M', color: 'text-[#1d4e89]' },
            { label: 'Client Retention', val: '98%', color: 'text-[#72bf44]' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center border-r last:border-0 border-slate-100 p-4">
              <span className={`text-3xl font-black ${stat.color}`}>{stat.val}</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Our <span className="text-[#1d4e89]">Featured</span> Masterpieces
            </h2>
            <p className="text-slate-500 leading-relaxed font-medium border-l-4 border-[#72bf44] pl-6">
              Handpicked collection of prime real estate assets.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#1d4e89] font-bold hover:text-[#72bf44] transition-colors">
            View All <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p, i) => <PropertyCard key={i} {...p} />)}
        </div>
      </section>
      <Features/>
      <Testimonials/>
      <Newsletter/>
    </main>
  );
};

export default Home;

const Features = () => {
  const points = [
    { title: "Verified Assets", desc: "Every property in our portfolio undergoes a rigorous 50-point quality and legal audit.", Icon: ShieldCheck, color: "text-green-500", bg: "bg-green-500/10" },
    { title: "Market Intelligence", desc: "Data-driven insights to help you identify high-yield growth corridors before they peak.", Icon: BarChart3, color: "text-blue-500", bg: "bg-blue-500/10" },
    { title: "End-to-End Support", desc: "From site selection to final legal handover and facility management transition.", Icon: Handshake, color: "text-green-500", bg: "bg-green-500/10" },
    { title: "Premium Network", desc: "Gain access to off-market listings and exclusive pre-launch opportunities.", Icon: Award, color: "text-blue-500", bg: "bg-blue-500/10" },
  ];

  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <img 
            className="rounded-3xl shadow-2xl relative z-10 border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700" 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000" 
            alt="Corporate Handshake" 
          />
          <div className="absolute -bottom-8 -right-8 bg-white text-slate-900 p-8 rounded-2xl shadow-xl z-20 hidden md:block border-l-4 border-[#72bf44]">
            <p className="text-4xl font-black text-[#1d4e89]">2.5k+</p>
            <p className="text-sm font-bold text-slate-500">Trusted Corporate Partners</p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-4xl font-extrabold mb-4 leading-tight">
              Why Industry Leaders Choose <span className="text-[#72bf44]">Aarambh</span>
            </h2>
            <p className="text-slate-400 leading-relaxed font-medium">
              We transcend traditional real estate brokerage by offering strategic asset management and investment advisory services tailored for corporate growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {points.map((p, i) => (
              <div key={i} className="flex gap-4 group">
                <div className={`size-12 shrink-0 ${p.bg} ${p.color} flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform`}>
                  <p.Icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{p.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Rajesh Malhotra",
      role: "CEO, TechVantage India",
      text: "Aarambh Properties redefined our corporate real estate strategy. Their expertise in the Mumbai market helped us secure a prime office location that perfectly matches our brand identity.",
      isDark: false,
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
    },
    {
      name: "Ananya Deshmukh",
      role: "Director, Heritage Group",
      text: "The transparency and professionalism displayed by the team are unmatched. They didn't just sell us a house; they helped us secure a family legacy in Skyline Residency.",
      isDark: true,
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4 text-slate-900">Voice of Trust</h2>
        <div className="w-24 h-1.5 bg-[#72bf44] mx-auto rounded-full"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {reviews.map((r, i) => (
          <div 
            key={i} 
            className={`flex-1 p-10 rounded-3xl shadow-xl transition-all hover:-translate-y-2 border ${
              r.isDark ? 'bg-[#1d4e89] text-white' : 'bg-white text-slate-600 border-slate-100'
            }`}
          >
            <div className="flex text-[#72bf44] mb-6 gap-1">
              {[...Array(5)].map((_, star) => <Star key={star} size={18} fill="currentColor" />)}
            </div>
            <p className="text-lg italic leading-relaxed mb-8">"{r.text}"</p>
            <div className="flex items-center gap-4">
              <img className="size-14 rounded-full border-2 border-[#72bf44]/30" src={r.img} alt={r.name} />
              <div>
                <h5 className={`font-bold ${r.isDark ? 'text-white' : 'text-slate-900'}`}>{r.name}</h5>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Newsletter = () => (
  <section className="max-w-7xl mx-auto px-6 mb-24">
    <div className="bg-gradient-to-br from-[#1d4e89] via-[#0072bc] to-slate-900 rounded-[2.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="relative z-10">
        <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight">Stay Ahead of the Market</h2>
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
          Subscribe to our exclusive 'Investor Insights' newsletter for early access to premium listings and expert market analysis.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            className="flex-1 h-14 rounded-xl px-6 bg-white/10 backdrop-blur-md border border-white/20 placeholder:text-blue-200 text-white focus:ring-2 focus:ring-[#72bf44] outline-none" 
            placeholder="Your corporate email address" 
            type="email" 
            required
          />
          <button className="h-14 px-10 bg-[#72bf44] hover:bg-[#72bf44]/90 transition-all text-white font-bold rounded-xl shadow-lg active:scale-95">
            Join Elite List
          </button>
        </form>
      </div>
    </div>
  </section>
);

// Add <Features />, <Testimonials />, and <Newsletter /> inside your main Home component