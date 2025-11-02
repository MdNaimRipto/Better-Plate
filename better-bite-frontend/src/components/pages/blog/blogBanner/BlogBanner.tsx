import img from "@/assets/blog/119A6654-18259.jpg";
import Image from "next/image";

const BlogBanner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 pt-10 pb-20 max-w-[624px] lg:max-w-[100%] m-auto">
      <div className="flex flex-col gap-6 order-2 lg:order-1">
        <div className="flex gap-4 items-center">
          <span className="bg-primary/10 text-primary uppercase text-xs font-semibold rounded-full px-4 py-3">
            Nutrition 🥗
          </span>
          <span className="text-gray text-sm">April 30, 2025</span>
        </div>
        <h2 className="text-coal text-3xl lg:text-5xl font-medium">
          Healthy Eating Strategies and Tips to Boost You Daily Health
        </h2>
        <p className="text-black">
          Healthy Eating StrategiesHow can getting nutrition advice help you
          avoid disease? Fast Food Healthy Eating It can be hard to stick to
          healthy eating, especially with so many fast food options and all
          sorts of unhealthy snacks. Studies show that only one in 10 adults
          gets the recommended daily amount of...
        </p>
        <div>{/* <CommonButton title={"Read more"} /> */}</div>
      </div>
      <div className="rounded-[32px] overflow-hidden order-1 lg:order-2">
        <Image
          className="rounded-[32px] hover:scale-110 transition-all duration-500"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default BlogBanner;
