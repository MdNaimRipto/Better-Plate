import img1 from "@/assets/howItWorks/app.jpg";
import img2 from "@/assets/howItWorks/chef.jpg";
import img3 from "@/assets/howItWorks/leanna-myers-YB9VU4necQo-unsplash.jpg";
import Image from "next/image";
const HowItWorks = () => {
  const infos = [
    {
      img: img1,
      title: "Find your perfect plan",
      desc: "We personalise your menu around your lifestyle, goals and food preferences.",
    },
    {
      img: img2,
      title: "You choose, we cook",
      desc: "We prep, cook and portion your meals daily to match your goals.",
    },
    {
      img: img3,
      title: "Enjoy daily fresh deliveries",
      desc: "We deliver fresh meals every day. Just heat, eat and enjoy.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container py-16">
        <div className="flex flex-col items-center justify-center gap-3 mb-5">
          <h4 className="text-4xl font-semibold text-black">How it works</h4>
          <p className="text-black">
            Hit your health goals effortlessly with 3 simple steps
          </p>
        </div>
        <div className="grid grid-cols-3 gap-0">
          {infos.map((info, i) => (
            <div key={i}>
              <div className="relative w-[400px] h-[400px] overflow-hidden rounded-3xl">
                <span className="absolute w-[60px] h-[60px] flex items-center justify-center  top-0 left-0 bg-white rounded-full z-50">
                  <span className="bg-primary text-white w-[80%] h-[80%] rounded-full flex items-center justify-center text-xl">
                    {i + 1}
                  </span>
                </span>
                <Image
                  src={info.img}
                  alt="banner"
                  className="rounded-[50px] p-6 w-full h-full object-cover brightness-90 absolute z-0"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button className="border border-primary text-primary cursor-pointer px-6 py-3 hover:text-white hover:bg-primary duration-300">
            View all plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
