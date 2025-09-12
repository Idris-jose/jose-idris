import pfp from "./assets/pfp.jpg"
import background from "./assets/background.png"

export default function Section1() {
  return (
    <div 
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      className="flex flex-col md:flex-row items-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-6 sm:py-8 md:py-10 gap-6 sm:gap-8 md:gap-10"
    >
      {/* Profile Image */}
      <img
        src={pfp}
        alt="Profile"
        className="w-48 h-72 sm:w-60 sm:h-80 md:w-72 md:h-96 lg:w-[292px] lg:h-[438px] rounded-2xl object-cover shadow-lg"
      />

      {/* Text Section */}
      <div className="flex flex-col w-full max-w-2xl space-y-4 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold">
          Hi, I'm Idris Jose
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-[33px] font-medium">
          Frontend Developer
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          I build responsive, interactive, and visually stunning digital experiences
          from websites to full-scale web applications. My focus is on creating 
          seamless user interfaces that work beautifully across all devices.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          <button className="px-4 py-2 sm:px-6 sm:py-2 bg-[#4F46E5] text-white text-sm sm:text-base font-medium rounded-full shadow-md hover:bg-[#4338CA] transition">
            Hire me
          </button>
          <button className="px-4 py-2 sm:px-6 sm:py-2 bg-black text-white text-sm sm:text-base font-medium rounded-full shadow-md hover:bg-gray-800 transition">
            Github Profile
          </button>
        </div>
      </div>
    </div>
  )
}