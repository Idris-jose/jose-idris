import pfp from "./assets/pfp.jpg";
import background from "./assets/background.png";

export default function Section1() {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 gap-10"
    >
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src={pfp}
          alt="Profile"
          className="w-40 h-56 sm:w-52 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-[420px] rounded-2xl object-cover shadow-xl"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col w-full max-w-3xl space-y-4 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          Hi, I'm Idris Jose
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-100">
          Frontend Developer
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
          I build responsive, interactive, and visually stunning digital experiences
          — from websites to full-scale web applications. My focus is on creating
          seamless user interfaces that work beautifully across all devices.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
          <button className="px-5 py-2 sm:px-7 sm:py-3 bg-[#4F46E5] text-white text-sm sm:text-base md:text-lg font-medium rounded-full shadow-md hover:bg-[#4338CA] transition">
            Hire me
          </button>
          <button className="px-5 py-2 sm:px-7 sm:py-3 bg-black text-white text-sm sm:text-base md:text-lg font-medium rounded-full shadow-md hover:bg-gray-800 transition">
            Github Profile
          </button>
        </div>
      </div>
    </section>
  );
}
