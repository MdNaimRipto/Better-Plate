import Link from "next/link";
import MenuCard from "./menuCard/MenuCard";

const OurMealsMain = () => {
  const blogButtons = [
    { title: "All" },
    {
      title: "⚖️ Balanced",
    },
    {
      title: "🍖 High Protein",
    },
    {
      title: "🥦 Vegetarian",
    },

    {
      title: "🏋️ Custom Macros",
    },
  ];

  return (
    <div className="container my-20">
      {/* Heading */}
      <div className={"flex flex-col gap-4 py-10"}>
        <h2
          className={"text-3xl md:text-4xl lg:text-5xl text-coal font-medium"}
        >
          Check out our amazing menu
        </h2>
        <p className={"md:text-lg text-gray"}>
          Here&apos;s a taste of what&apos;s included when you subscribe to
          Better Plate
        </p>
        <Link href="/plansAndPackages" className="mt-4">
          <button className="text-primary hover:text-secondary text-xs md:text-sm font-semibold border border-primary hover:border-secondary rounded-lg py-3 px-6 transition duration-500">
            Order now
          </button>
        </Link>
      </div>
      {/* Filter buttons */}
      <div className="flex flex-wrap items-center gap-3">
        {blogButtons.map((menu, index) => (
          <button
            key={index}
            className={`${
              menu.title === "All"
                ? "text-primary bg-primary/10 border border-primary/10"
                : "text-primary border"
            } hover:text-secondary hover:border-secondary text-sm font-semibold capitalize rounded-[200px] py-2 px-6 transition duration-300`}
          >
            {menu.title}
          </button>
        ))}
      </div>
      {/* Menu Cards */}
      <MenuCard />
    </div>
  );
};

export default OurMealsMain;
