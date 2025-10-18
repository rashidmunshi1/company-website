
import img from '../../assets/images/Home/who-we-are.jpg';
const highlights = [
  {
    icon: "🌟",
    title: "Mission:",
    desc: "To help brands connect, communicate, and grow through strategic creativity.",
  },
  {
    icon: "🧠",
    title: "What Makes Us Different:",
    desc: "We merge storytelling with digital performance — every design decision has a purpose",
  },
];

const AgencyHero = () => (
  <section className="min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center p-6 md:p-20 bg-white">
    <div className="w-full md:w-2/5 flex justify-center md:justify-end mb-10 md:mb-0">
        <img src={img} alt="Lightning Bolt" />
    </div>
    <div className="w-full md:w-3/5 flex flex-col md:pl-16">
      <span className="text-yellow-500 font-bold text-lg mb-2">* Who We Are</span>
      <h1 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
        Design-Driven Thinkers. Brand Builders. Digital Expert
      </h1>
      <p className="text-gray-500 mb-5">
        We’re a creative agency with a passion for building powerful brand identities, high-converting websites, and performance-based marketing strategies. Our team blends strategic insight with bold design to help businesses grow, scale, and stand out in the digital world.
      </p>
      <div className="mb-6">
        <span className="text-xl font-bold text-yellow-500 block mb-2">Mini Highlights</span>
        <ul className="space-y-2">
          {highlights.map(({ icon, title, desc }) => (
            <li key={title} className="flex items-center">
              <span className="mr-2">{icon}</span>
              <span className="text-gray-600">
                <span className="font-semibold text-gray-800">{title}</span> {desc}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full transition-colors w-fit"
      >
        Read More
      </button>
    </div>
  </section>
);

export default AgencyHero;
