import React from "react";
import {
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail,
} from "lucide-react";

const PRIMARY = "#1A365D";
const ACCENT = "#005691";

const CategoryButton = ({ label, active = false }) => (
  <button
    className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${
      active
        ? "bg-[#005691] text-white"
        : "bg-slate-200 hover:bg-slate-300 text-slate-700"
    }`}
  >
    {label}
  </button>
);

const ArticleCard = ({
  category,
  title,
  excerpt,
  date,
  readTime,
  image,
}) => (
  <article className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow">
    <div className="aspect-video relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold uppercase text-[#005691] shadow">
        {category}
      </span>
    </div>

    <div className="p-6">
      <h4 className="text-xl font-bold text-[#1A365D] mb-3 hover:text-[#005691] cursor-pointer transition-colors leading-tight">
        {title}
      </h4>

      <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
        {excerpt}
      </p>

      <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
        <span>{date}</span>
        <span className="flex items-center gap-1">
          <Clock size={14} /> {readTime}
        </span>
      </div>
    </div>
  </article>
);

const InsightsPage = () => {
  const categories = [
    "All Posts",
    "Market Trends",
    "Investment Guide",
    "Commercial Leasing",
    "ESG Compliance",
  ];

  const posts = [
    {
      category: "Market Trends",
      title: "Hybrid Work Models: Transforming Asset Utilization",
      excerpt:
        "As companies finalize their long-term workplace strategies, commercial landlords are finding new ways to monetize underutilized square footage.",
      date: "Jan 24, 2024",
      readTime: "5 min read",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAIrFiigmA-JvWIQJAnpNwjJbt0P9HlVVDFo-afYG0Fa2JgCYFZhcFtBAHO0eJVwr90D97TALL5CG-VunCq3olHrxX6hBC6jofnJqDsJimSajx-K8hEQH1Um2dB0UUmmyQ-Rmy9K-fi_sx8qwu5HcS_zlictcCODtBKA7xaKdB9XH4Duo0uwLahTbbmKfVyfQwlwG_HgL2T2WIqHHIatFjZc9mMGUZNr9SQpbZ62jhDGihXf02KlpGJMx1Lh_JM66QTPTtfhmHP0Mg",
    },
    {
      category: "Investment Guide",
      title: "Yield Compression in Tier-2 Growth Corridors",
      excerpt:
        "Investors are looking beyond major hubs. We analyze the top emerging cities for industrial and logistics property investment.",
      date: "Jan 22, 2024",
      readTime: "12 min read",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDf7hjAbEgiUzcmVTgp0go2meLjROUyG3o2_KRwxvDUD_3DmV3gGTLtytQq3RtuhCNSrMk1fk9uTH0cqVXnMTRUnvbBEtKCjkoeG-RsBgzP52_KsGoiewfYvvx0shsg1qdnAn7GNxZWNt9hvn81UKFouaXKiPqU09PxDEqaOheKirTNIMy5wrk2Xv_JSbuwAYywzHRBJoc9WRfegGrFpnU8ZuXWsXctODZROIuyc3F3Rb8vCTesc8sFMKmPaagfXWJbxJOUtcXWWK8",
    },
    {
      category: "Leasing",
      title: "Navigating New Compliance in Commercial Leases",
      excerpt:
        "Stay ahead of the latest regulatory changes affecting commercial landlord-tenant responsibilities.",
      date: "Jan 18, 2024",
      readTime: "6 min read",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAZyXGl7jlweJT1Kd7GtGDMYOwAcN3zxpMqkoCR1CHmf2x3XvRGTlpRpi6lP2otD9lmyGnUCu767Wcmj2Hv9AzY9sE-_cBriPkGeKia6u26dU9NeoR1HcRdXmunlBtyAYyu4Z7tltXIW6OvQT4kDNDMKTIS5C7CN2CuuY516ctNncB-HRyl1cTGFx0R7Qz8TYCfqOGddXUNOcmgzPENfjZB1y0jDrC2XtdY-9TfLPXU5-1VNsh6Kw8WR-Ew4YXrH7xkHoUyZPsgHFc",
    },
  ];

  return (
    <main className=" mx-auto md:px-14 px-6 py-16 w-full font-display bg-[#F4F6F9]">

      {/* Hero Header */}
      <div className="mb-16">
        <h2 className="text-5xl font-extrabold tracking-tight text-[#1A365D] mb-4">
          Market Insights & Blog
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
          Expert analysis, regulatory updates, and emerging trends in the corporate real estate landscape.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-14 border-b border-slate-200 pb-8">
        {categories.map((cat, i) => (
          <CategoryButton key={cat} label={cat} active={i === 0} />
        ))}
      </div>

      {/* Featured Article */}
      <section className="mb-24">
        <div className="group relative flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/60">
          <div className="lg:w-3/5 h-[420px] overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8uykvFr2wRoDjgIdb75qaft7CVt9XE15HCKy-UVNn1xOmmjC2VM6-bUnRSXZ4u6OPkpm-odBB0EVM6DcDFImtNVABV9TJ8T4mVYZpKH8emEdRIwK_X-hpQtLPN5SoiMc_octXkSQ1EmQ5SQnkBvpRKR8eTSQ-ABjtqxGro-nosccv4zcuaUKnKtVKdvke3ywkOmASl5-A47udGxU8Zt-YUr0IWMqRqgaTUZnUaGDx4nCqXeZVndXsPidMYSVCN0RxDmYD0eYsmIM"
              alt="Featured"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="lg:w-2/5 p-12 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 bg-[#005691]/10 text-[#005691] text-xs font-bold uppercase tracking-widest rounded mb-6 w-fit">
              Featured Article
            </span>

            <h3 className="text-3xl font-bold text-[#1A365D] mb-4 leading-tight">
              The Future of Sustainable Corporate Spaces in 2024
            </h3>

            <p className="text-slate-600 mb-8 text-lg leading-relaxed font-medium">
              Discover how green building initiatives are reshaping the commercial landscape and driving long-term investment value.
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Clock size={16} /> 8 min read
              </div>

              <button className="flex items-center gap-2 text-[#005691] font-bold hover:gap-3 transition-all">
                Read Full Article <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-[#1A365D] tracking-tight">
            Latest Updates
          </h2>
          <div className="h-px flex-grow bg-slate-200 mx-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <ArticleCard key={index} {...post} />
          ))}

          {/* Newsletter Card */}
          <div className="bg-gradient-to-br from-[#1A365D] via-[#005691] to-[#003B66] rounded-2xl p-10 flex flex-col justify-center text-white relative overflow-hidden shadow-2xl max-w-7xl">
            <h4 className="text-2xl font-bold mb-4 relative z-10">
              Stay Informed
            </h4>
            <p className="text-blue-100 mb-8 text-sm leading-relaxed relative z-10 font-medium">
              Subscribe to our monthly newsletter and get insights delivered to your inbox.
            </p>

            <form
              className="space-y-3 relative z-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm placeholder:text-white/60 focus:ring-2 focus:ring-white/30 focus:outline-none"
                placeholder="Email Address"
                type="email"
              />
              <button className="w-full bg-white text-[#005691] font-bold py-3 rounded-lg text-sm hover:bg-slate-100 transition-colors">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <div className="mt-20 flex items-center justify-center gap-4">
        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 cursor-not-allowed">
          <ChevronLeft size={20} />
        </button>

        <button className="w-10 h-10 rounded-full bg-[#005691] text-white font-bold flex items-center justify-center">
          1
        </button>

        {[2, 3].map((num) => (
          <button
            key={num}
            className="w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center font-semibold text-slate-600 transition-colors"
          >
            {num}
          </button>
        ))}

        <button className="w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
    </main>
  );
};

export default InsightsPage;