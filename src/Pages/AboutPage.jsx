import React from "react";
import {
  Rocket,
  Eye,
  Quote,
  ShieldCheck,
  Gem,
  Users,
} from "lucide-react";

const PRIMARY = "#1A365D";
const ACCENT = "#005691";

const MissionVisionCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-10 rounded-2xl shadow-lg shadow-slate-200 border border-slate-100">
    <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-[#005691]">
      <Icon size={28} />
    </div>
    <h2 className="text-3xl font-bold mb-4 text-[#1A365D]">{title}</h2>
    <p className="text-slate-600 leading-relaxed text-lg">
      {description}
    </p>
  </div>
);

const CoreValueCard = ({ icon: Icon, title, description }) => (
  <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005691] flex items-center justify-center mb-6">
      <Icon size={24} />
    </div>
    <h4 className="text-xl font-bold mb-3 text-[#1A365D]">{title}</h4>
    <p className="text-slate-500 leading-relaxed">
      {description}
    </p>
  </div>
);

const AboutPage = () => {
  return (
    <main className="flex-1 mx-auto w-full md:px-16 px-6 py-16 font-display bg-[#F4F6F9]">

      {/* Hero Section */}
      <section className="mb-24">
        <div
          className="relative w-full h-[420px] overflow-hidden rounded-3xl"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(26,54,93,0.85), rgba(26,54,93,0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBP6l67C69udvcKB_HELU4kvAGJlXilyfIAieMoB_LlVKONfqpHVorRvfSzl0Pq5kSGL_2nbtrH-0ZMF64vD-0qccRrxP0bs006fomzevrPBSOH2rsyRjjDu6CaG5UOneoyO-B9QtYV1MCUXyTpGIbKpm9gx3Dti2BBv-pjI3Ifuk4ULo1TgjCUYlVKi5le1J6l7n1F0_I0RoS--dwg8pscsdW44y420u-1Nujy5hZM9te25LrwNY3wLAPDAxD4nY5MPAVm7zBqRgE")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
            <span className="text-[#4CAF50] font-bold tracking-widest uppercase text-sm mb-4">
              Our Legacy
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Crafting Spaces <br /> Defining Luxury
            </h1>
            <p className="max-w-xl text-lg text-slate-200">
              Aarambh Properties stands as a beacon of excellence in the premium
              real estate market, transforming landscapes and lives through
              visionary design.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12 mb-28">
        <MissionVisionCard
          icon={Rocket}
          title="Our Mission"
          description="To redefine luxury living through commitment, transparency, and architectural excellence."
        />
        <MissionVisionCard
          icon={Eye}
          title="Our Vision"
          description="To be the most trusted and innovative name in real estate, setting benchmarks for excellence."
        />
      </section>

      {/* Founder Section */}
      <section className="mb-28 flex flex-col lg:flex-row items-center gap-16 bg-white rounded-3xl p-16 shadow-lg shadow-slate-200 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl"></div>

        <div className="w-full lg:w-1/3 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt="Founder"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB64rtJETknDZ7sXuHAdAH8YhS4tBfYGnoJWLcIEGQwHPm4afsIcbXECv6KCqY41xcEhggF8TpAcDnNAC1qe_Op8M8PhlvpHdCfso_-u6f5UIJstRbuW-wsjWCh3yOjrZHOdLFtUSppjumIPtiPDKozgSR2gnARJrR3rYuLmNx5W1itxmba25T16ayf7K-FKqi9HvyQCyouFoP-HLUDL0iPH8g4AxYVlgVBmayVUubiQwMlQX23cc4gGEHxYN-rVd9O349shnUC7oc"
            />
          </div>
        </div>

        <div className="w-full lg:w-2/3">
          <Quote className="text-blue-200 w-16 h-16 mb-4" />
          <h3 className="text-3xl font-bold mb-6 text-[#1A365D]">
            A Message from the Founder
          </h3>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed italic">
            <p>
              "Real estate is about building trust and creating legacies. Our
              goal has always been to make luxury seamless and sophisticated."
            </p>
            <p>
              "Every square foot reflects our passion for excellence and
              transparency."
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#1A365D]">
            Our Core Values
          </h2>
          <div className="h-1.5 w-24 bg-[#005691] mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CoreValueCard
            icon={ShieldCheck}
            title="Integrity"
            description="Honesty and transparency are at the heart of everything we do."
          />
          <CoreValueCard
            icon={Gem}
            title="Excellence"
            description="We strive for perfection in every architectural detail."
          />
          <CoreValueCard
            icon={Users}
            title="Client-First"
            description="Your aspirations guide our creation and execution."
          />
        </div>
      </section>

      {/* Timeline */}
   <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Milestones that mark our growth from a small consultancy to a regional real estate leader.</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-800"></div>
          
          {/* Milestone 1 */}
          <div className="relative flex items-center justify-between mb-16 w-full">
            <div className="w-[45%] pr-8 text-right">
              <p className="text-blue-600 font-bold text-2xl mb-1">2010</p>
              <h5 className="text-lg font-bold mb-2">The Inception</h5>
              <p className="text-sm text-slate-500">Aarambh Properties founded with a small team and big dreams.</p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 z-10 shadow-lg"></div>
            <div className="w-[45%] pl-8"></div>
          </div>

          {/* Milestone 2 */}
          <div className="relative flex items-center justify-between mb-16 w-full">
            <div className="w-[45%] pr-8"></div>
            <div className="absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 z-10 shadow-lg"></div>
            <div className="w-[45%] pl-8 text-left">
              <p className="text-blue-600 font-bold text-2xl mb-1">2015</p>
              <h5 className="text-lg font-bold mb-2">First Major Project</h5>
              <p className="text-sm text-slate-500">Completed "Aarambh Heights," a 200-unit luxury residential complex.</p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative flex items-center justify-between mb-16 w-full">
            <div className="w-[45%] pr-8 text-right">
              <p className="text-blue-600 font-bold text-2xl mb-1">2018</p>
              <h5 className="text-lg font-bold mb-2">Award for Innovation</h5>
              <p className="text-sm text-slate-500">Recognized as the 'Most Innovative Developer' at the National Real Estate Awards.</p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 z-10 shadow-lg"></div>
            <div className="w-[45%] pl-8"></div>
          </div>

          {/* Milestone 4 */}
          <div className="relative flex items-center justify-between w-full">
            <div className="w-[45%] pr-8"></div>
            <div className="absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 z-10 shadow-lg"></div>
            <div className="w-[45%] pl-8 text-left">
              <p className="text-blue-600 font-bold text-2xl mb-1">Today</p>
              <h5 className="text-lg font-bold mb-2">Expanding Horizons</h5>
              <p className="text-sm text-slate-500">Managing over 5 million sq. ft. across three major metro cities.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;