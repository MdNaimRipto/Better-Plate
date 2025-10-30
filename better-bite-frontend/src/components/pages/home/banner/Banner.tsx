import banner01 from "@/assets/banner/banner01.jpg";
import ScrollAnimation from "@/components/animation/ScrollAnimation";
import OpacityTransition from "@/components/animation/OpacityTransition";
import TranslatedText from "@/components/common/language/TranslatedText";
import PlansLink from "./PlansLink";

const Banner = () => {
  const banner = {
    videoSrc: "https://travel-buddy-demo.vercel.app/videos/Banner001.mp4",
    img: banner01.src,
    title: "Explore the Serenity of the Mountains",
  };

  return (
    <div className="relative z-20 overflow-hidden px-4 h-screen pt-4">
      <div
        className={`absolute w-full h-full top-0 left-0 transition-opacity duration-[2.5s] ease-in-out`}
      >
        <video
          poster={banner.img}
          src={banner.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full bg-lightGray h-full object-cover absolute z-0 brightness-[.65]`}
          preload="metadata"
        />
        <OpacityTransition>
          <div className="z-10 w-full container flex flex-col items-center justify-center h-full lg:h-4/5 pt-40 md:pt-[50px] lg:pt-96">
            <ScrollAnimation>
              <div
                className={`bg-white/80 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-center gap-8 py-12 relative mt-24`}
              >
                <p className="text-primary flex items-center justify-center gap-2">
                  <span className="text-4xl xl:text-5xl font-bold">10 M</span>
                  <span className="text-4xl xl:text-5xl font-bold mb-1">+</span>
                  <span className="text-lg font-bold mt-1 xl:mt-2">
                    <TranslatedText en="Meal Served" ban="وجبة مقدمة" />
                  </span>
                </p>
                <PlansLink />
              </div>
            </ScrollAnimation>
          </div>
        </OpacityTransition>
      </div>
    </div>
  );
};

export default Banner;
