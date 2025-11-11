import OurGoal from "./ourGoal/OurGoal";
import valueImg from "@/assets/blog/119A6654-18259.jpg";
import OurValues from "./ourValues/OurValues";
import scheduleImgOne from "@/assets/about-us/portrait-of-smiling-man.jpg";
import scheduleImgTwo from "@/assets/about-us/woman-talking-phone-office.jpg";
import ScheduleCall from "./scheduleCall/ScheduleCall";

const AboutUsMain = () => {
  const ourGoalData = [
    {
      icon: "🌏",
      title: "Health is a global problem",
      description:
        "Worldwide, obesity rates have tripled since 1975. In 2020, obesity rates rose by 83% in men and 72% in women, according to the World Health Organization.",
    },
    {
      icon: "💚",
      title: "Better food... happier people",
      description:
        "Of the body&apos;s supply of serotonin (the happy hormone), mood control and 95% of the digestive system&apos;s regulating hormone is linked to gut health. A healthy diet directly contributes to people&apos;s happiness and health.",
    },
    {
      icon: "💸",
      title: "Healthy living is not within reach",
      description:
        "Many people strive for a healthy and balanced life, but it is difficult for them to achieve it.",
    },
  ];
  const valuesData = [
    {
      image: valueImg.src,
      title: "🌿 We learn every day",
      description:
        "Humility is a quality and a way of working. We believe that there is always someone better than us, or someone with a better way than us, or someone with a more appropriate style than us, and this gives us space to learn more, understand better, and develop faster.",
      class: "col-span-3",
    },
    {
      image: valueImg.src,
      title: "💚 We love to hear",
      description:
        "People's opinions are a gift that we love to hear and take into consideration. Honest and constructive criticism is one of the most important factors that help us grow and develop.",
      class: "col-span-3",
    },
    {
      image: valueImg.src,
      title: "🧘‍♂️ We are constantly evolving",
      description:
        "We believe that there is something new to learn from everything around us and that there are always new ways and methods that make us grow and become more empowered every day.",
      class: "col-span-2",
    },
    {
      image: valueImg.src,
      title: "🏎️ We move fast",
      description:
        "We believe that the clearer the vision, the simpler and faster the implementation. This is our way of thinking, planning and implementing: a clear vision and simple and quick steps that serve a great goal.",
      class: "col-span-2",
    },
    {
      image: valueImg.src,
      title: "💪 We strive sincerely",
      description:
        "Loyalty is a value and a method that is passed on from one person to another and moves us from one goal to another in a clear and simple way. It is the thing that encourages us to continue on our path day after day.",
      class: "col-span-2",
    },
    {
      image: valueImg.src,
      title: "🚀 We believe that the impossible can",
      description:
        "We look for ways to amaze ourselves and those around us every day. We always aspire and work to exceed expectations.",
      class: "col-span-3",
    },
    {
      image: valueImg.src,
      title: "👞 We put ourselves in the other person's place",
      description:
        "Our understanding of the other person is part of our vision and personality. We always imagine ourselves in the other person's place before any step we take.",
      class: "col-span-3",
    },
  ];

  const consultationData = [
    {
      title: "Schedule a call with our team now 🤙",
      image: scheduleImgOne.src,
      description:
        "Do you have additional questions? Let us contact you and we will help you with all your questions.",
      subTitle: "Call details provided upon confirmation",
      time: "minutes 30",
    },
    {
      title: "Book a call with a nutritionist 👩‍🔬",
      image: scheduleImgTwo.src,
      description:
        "Book an appointment with a nutritionist they will you need to choose diet plan for you.",
      subTitle: "Call details provided upon confirmation",
      time: "minutes 20",
    },
  ];
  return (
    <div className="container my-20">
      <OurGoal ourGoalData={ourGoalData} />

      {/* Our Values Header */}
      <div className={"mb-10 flex flex-col gap-4"}>
        <h2
          className={
            "text-coal text-3xl md:text-4xl xl:text-5xl font-medium leading-tight"
          }
        >
          Our values
        </h2>
        <p className={"md:text-lg text-gray"}>
          The shared values ​​that we all live, lead and work by here at Kalu.
        </p>
      </div>
      <OurValues valuesData={valuesData} />
      <div className={"mb-10 flex flex-col gap-4"}>
        <h2
          className={"text-3xl md:text-4xl lg:text-5xl text-coal font-medium"}
        >
          Schedule a call with our team now!
        </h2>
        <p className={"md:text-lg text-gray"}>
          Need to contact us? Let us arrange it for you.
        </p>
      </div>
      <ScheduleCall consultationData={consultationData} />
    </div>
  );
};

export default AboutUsMain;
