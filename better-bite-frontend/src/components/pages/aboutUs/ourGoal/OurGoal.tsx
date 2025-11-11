import Image from "next/image";
import img from "@/assets/about-us/our-goal.jpg";

interface IOurGoal {
  icon: string;
  title: string;
  description: string;
}

const OurGoal = ({ ourGoalData }: { ourGoalData: IOurGoal[] }) => {
  return (
    <div className=" mx-auto  pt-10 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
        <div className="w-full lg:order-1 h-full rounded-[32px] overflow-hidden">
          <Image
            className="w-full rounded-[32px] h-full object-cover hover:scale-110 transition-all duration-500"
            src={img}
            alt=""
            priority
          />
        </div>
        <div>
          <div>
            <h3 className="text-coal text-4xl xl:text-5xl font-medium leading-tight">
              Our goal is a world where healthy living is simple, easy and
              accessible to everyone.
            </h3>
            <p className="text-base leading-loose my-6 text-black">
              Kalu&apos;s social responsibility program is rooted in all our
              values and our commitment to making a difference in the lives of
              others. Together, we foster a culture of health, wellness, care
              and compassion. Join us in making a positive impact in our
              communities. At Kalu - we empower individuals and improve
              communities! 🌟
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {ourGoalData.map((data, index) => (
              <div key={index} className="flex items-start gap-4  ">
                <span className="text-3xl leading-none">{data.icon}</span>
                <div
                  className={`${
                    index === 0 || index === 1
                      ? "border-b border-lightGray pb-6"
                      : ""
                  } flex flex-col items-start gap-6`}
                >
                  <h3 className="text-coal text-2xl font-semibold">
                    Health is a global problem
                  </h3>
                  <p className="text-gray">
                    Worldwide, obesity rates have tripled since 1975. In 2020,
                    obesity rates rose by 83% in men and 72% in women, according
                    to the World Health Organization.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoal;
