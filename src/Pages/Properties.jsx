import React from 'react';
import { 
  Search, 
  ChevronRight, 
  LayoutGrid, 
  List, 
  RotateCcw, 
  Banknote, 
  BedDouble, 
  Building2, 
  ShieldCheck, 
  MapPin, 
  Maximize2, 
  Car, 
  Heart,
  Map,
  ChevronLeft
} from 'lucide-react';

const PropertyCard = ({ property }) => (
  <div className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 flex flex-col">
    <div className="relative h-64 overflow-hidden">
      <img 
        alt={property.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        src={property.image} 
      />
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
          {property.listingType}
        </span>
        {property.tag && (
          <span className="bg-white/90 backdrop-blur text-slate-900 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
            {property.tag}
          </span>
        )}
      </div>
      <button className="absolute top-4 right-4 size-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-red-500 transition-all">
        <Heart size={20} />
      </button>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
          {property.title}
        </h3>
        <div className="text-right">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">
            {property.priceLabel}
          </p>
          <p className="text-lg font-extrabold text-blue-600">{property.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-6 text-sm">
        <MapPin size={16} />
        <span>{property.location}</span>
      </div>
      <div className="grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-800 pt-6 mt-auto">
        {property.specs.map((spec, i) => (
          <div key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <spec.icon size={16} />
            <span className="text-xs font-bold">{spec.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const BrowseProperties = () => {
  const properties = [
    {
      title: "Skyline Heights Penthouse",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPcVesWUL4Qfbb5yeJ3xQYMaWrhQLtk5Tm9JiLaoAJcvGwn_Uj2T73-LgErQ6DGHJdIy84sRLLXlFJGZJO03effRVHGZ4FdUF_674bazqFCWsCw3NB8MmJbetUb64OtKuJ-kYcE69edEaKokVDOW00Ug6Z4B5sR1K0sLbDIZWEFWUDv0qMrJjydKjJCtS3ch35Ujlof2AbxGmlnECfSXPcXVuh8pkCUYRwTiwPmnhf6t2o9r6n9RGAu91qICP2I73sICuUPYacwjQ",
      listingType: "For Sale",
      tag: "New Launch",
      priceLabel: "Starting at",
      price: "₹12.5 Cr",
      location: "Worli, South Mumbai",
      specs: [
        { icon: BedDouble, label: "4 BHK" },
        { icon: Maximize2, label: "4,200 sqft" },
        { icon: Car, label: "3 Parking" }
      ]
    },
    {
      title: "The Hub Business Center",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEatcj5uFDxubPLwlO8WmRdMkgg-ejCp7qcj5Vdh7M_c-dNMG8IKYnh1DTCAd0aZcVN9z7n6uTTOnuaedp45YE8e-ipwU0Y-uuI0E-j57dTkkkSwThmqJxx942GdIhEdL_-UqsPEr2VRZdcYbsShjU7W0UsOxHvUrzt0Xh8J42DK3T5pr1Rv1rvQFrY_oPsrg0rwxxF-YwLV0pxJAfPzPCUpG0BBghmb7Iy45IEitU7zMeBy6wV96srb1F5wFfqffHr4xryhOquyo",
      listingType: "For Lease",
      tag: "Commercial",
      priceLabel: "Lease price",
      price: "₹85K /mo",
      location: "BKC, Mumbai",
      specs: [
        { icon: Building2, label: "Grade A" },
        { icon: Maximize2, label: "1,850 sqft" },
        { icon: List, label: "6 Cabins" }
      ]
    }
    // Add more properties as needed
  ];

  return (
    <main className="max-w-[1440px] mx-auto px-6 lg:px-10 py-10 font-display">
      
      {/* Breadcrumbs & Header */}
      <div className="mb-10">
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-widest mb-4">
          <a className="hover:text-blue-600" href="/">Home</a>
          <ChevronRight size={12} />
          <span className="text-blue-600">Properties & Projects</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
              Premium Listings
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
              Discover elite residential and commercial investments in prime metropolitan hubs, vetted for high capital appreciation.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-1.5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <button className="p-2 rounded-lg bg-blue-600 text-white shadow-md">
              <LayoutGrid size={20} />
            </button>
            <button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 transition-all">
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="sticky top-32 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Filters</h3>
              <button className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
                <RotateCcw size={12} /> Reset All
              </button>
            </div>

            {/* Price Filter */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Banknote size={18} />
                <span className="text-sm font-bold">Price Range</span>
              </div>
              <input type="range" className="w-full h-1.5 bg-slate-200 rounded-lg accent-blue-600 cursor-pointer" />
              <div className="flex justify-between text-xs font-medium text-slate-500">
                <span>₹50L</span>
                <span>₹10Cr+</span>
              </div>
            </div>

            {/* Property Types */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Building2 size={18} />
                <span className="text-sm font-bold">Property Type</span>
              </div>
              <div className="space-y-2">
                {["Residential Apartments", "Commercial Office", "Villas & Penthouses"].map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
                    <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 transition-colors">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-lg text-sm font-bold shadow-lg hover:shadow-xl transition-all">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* Grid Content */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {properties.map((p, i) => (
              <PropertyCard key={i} property={p} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <button className="size-10 rounded-lg flex items-center justify-center border border-slate-200 text-slate-400 hover:text-blue-600 transition-all">
              <ChevronLeft size={20} />
            </button>
            {[1, 2, 3].map((num) => (
              <button key={num} className={`size-10 rounded-lg flex items-center justify-center font-bold ${num === 1 ? 'bg-blue-600 text-white shadow-md' : 'border border-slate-200 text-slate-600 hover:text-blue-600 transition-all'}`}>
                {num}
              </button>
            ))}
            <span className="px-2 text-slate-400">...</span>
            <button className="size-10 rounded-lg flex items-center justify-center border border-slate-200 text-slate-600 hover:text-blue-600 transition-all">
              12
            </button>
            <button className="size-10 rounded-lg flex items-center justify-center border border-slate-200 text-slate-400 hover:text-blue-600 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Map CTA Section */}
      <section className="mt-20">
        <div className="bg-slate-900 rounded-3xl overflow-hidden relative min-h-[400px] flex items-center">
          <div className="absolute inset-0 opacity-40 grayscale pointer-events-none">
            <img 
              alt="City Map" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR8PE9PwCfHalaIcMl53VvBBjcV1RIO4IhLtzOSCV_OOvLcT0v55muMfeCTwzDg1vX-m8q5T30HjGguE7KQWfpZ_OyWLIfvLOEm_ayqxuPz2u9yauyeRiNQp7UV6zf8NynFZovqcz8BeEAX3ORpxIYZwnHh0NTKeP_g-4MyMOZ9GNwqZ2pubbRWQOtNs2yfriJj0Lf51cmwgD2QW6Bu_MBYb6jUJSajgOAN6VPQ2-blOrvI2hM4vMuaFTuRfEpRsvKzk7d7tYfXeI" 
            />
          </div>
          <div className="relative z-10 px-12 lg:px-24 max-w-2xl">
            <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">Explore properties on an interactive map.</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">Visualize locations, nearby infrastructure, and upcoming developments to make data-driven investment decisions.</p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-2xl">
              <Map size={20} />
              Launch Map Explorer
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrowseProperties;