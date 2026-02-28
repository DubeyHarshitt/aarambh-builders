import React from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const ContactInfo = ({ Icon, title, detail, colorClass }) => (
  <div className="flex items-start gap-6 group">
    <div
      className={`w-14 h-14 shrink-0 ${colorClass} flex items-center justify-center rounded-2xl transition-all duration-300 shadow-sm`}
    >
      <Icon size={26} />
    </div>
    <div>
      <h4 className="font-bold text-lg mb-1 text-[#1A365D]">{title}</h4>
      <p className="text-slate-500 whitespace-pre-line leading-relaxed">
        {detail}
      </p>
    </div>
  </div>
);

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Sent");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#F4F6F9] font-display"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A365D] mb-4 tracking-tight">
            Let's Connect
          </h2>
          <div className="w-16 h-1.5 bg-[#4CAF50] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto italic font-medium">
            "Built on Trust. Driven by Results."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Contact Form Card */}
          <div className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl shadow-slate-200 border border-slate-100">
            <h3 className="text-2xl font-bold mb-8 text-[#1A365D] tracking-tight">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 focus:ring-2 focus:ring-[#1A365D] focus:bg-white focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 tracking-wide">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-5 py-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 focus:ring-2 focus:ring-[#1A365D] focus:bg-white focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium"
                    required
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 tracking-wide">
                  Subject
                </label>
                <select className="w-full px-5 py-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 focus:ring-2 focus:ring-[#1A365D] focus:bg-white outline-none transition-all cursor-pointer font-medium">
                  <option>Corporate Leasing</option>
                  <option>Residential Investment</option>
                  <option>Asset Management</option>
                  <option>Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 tracking-wide">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help you today?"
                  className="w-full px-5 py-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 focus:ring-2 focus:ring-[#1A365D] focus:bg-white focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-400 font-medium"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#1A365D] hover:bg-[#163052] text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                Send Inquiry <Send size={18} />
              </button>

            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center lg:pt-4">

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-10 bg-[#4CAF50] rounded-full"></div>
                <span className="text-[#4CAF50] font-bold uppercase tracking-[0.2em] text-xs">
                  Our Presence
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A365D] mb-6 tracking-tight">
                Corporate Headquarters
              </h2>

              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-medium">
                Strategically located in the heart of Mumbai's financial district,
                Nariman Point, to serve our partners with maximum efficiency.
              </p>
            </div>

            <div className="space-y-10">

              <ContactInfo
                Icon={MapPin}
                title="Registered Office"
                detail="Level 14, Birla Tower, Nariman Point, Mumbai - 400021, India"
                colorClass="bg-blue-50 text-[#1A365D]"
              />

              <ContactInfo
                Icon={Mail}
                title="Email Us"
                detail={`consult@aarambhproperties.com\nsupport@aarambhproperties.com`}
                colorClass="bg-green-50 text-[#4CAF50]"
              />

              <ContactInfo
                Icon={Phone}
                title="Call Support"
                detail={`+91 22 4567 8900\n+91 22 4567 8901`}
                colorClass="bg-blue-50 text-[#1A365D]"
              />

            </div>

            {/* Brand Card */}
            <div className="mt-16 p-10 rounded-[2rem] bg-gradient-to-br from-[#1A365D] via-[#244E7C] to-[#2C5E94] text-white shadow-2xl">
              <h4 className="text-2xl font-bold mb-3 tracking-tight">
                Aarambh Properties
              </h4>

              <p className="text-blue-100 font-medium leading-relaxed mb-8 text-lg">
                Excellence in Corporate Real Estate.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Integrity", "Excellence", "Growth"].map((val) => (
                  <span
                    key={val}
                    className="text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-2 bg-white/10 rounded-full border border-white/10"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;