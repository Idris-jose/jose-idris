import background from "./assets/background.png";

export default function Section3() {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-12 gap-8"
    >
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold">
          Let's work together
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Let’s connect and
          create something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 pt-6">
          <button className="px-6 py-2 bg-[#4F46E5] text-white font-medium rounded-full shadow-md hover:bg-[#4338CA] transition">
            Hire me
          </button>
          <button className="px-6 py-2 bg-black text-white font-medium rounded-full shadow-md hover:bg-gray-800 transition">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
