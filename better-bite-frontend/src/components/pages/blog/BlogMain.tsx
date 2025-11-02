import img from "@/assets/blog/image_newsletter.jpg";
import BlogBanner from "./blogBanner/BlogBanner";
import BlogMenuButton from "./blogMenuButton/BlogMenuButton";
import BlogCard from "./blogCard/BlogCard";
import BlogFooter from "./blogFooter/BlogFooter";
const BlogMain = () => {
  const blogButtons = [
    { title: "All" },
    {
      title: "Fitness & wellness 💪",
    },
    {
      title: "Nutrition 🥗",
    },
    {
      title: "Weight management ⚖️",
    },
    {
      title: "Health awareness",
    },

    {
      title: "Healthy habits",
    },
    {
      title: "Nutritional supplements and vitamins",
    },
  ];
  const blogData = [
    {
      image: img.src,
      link: "one",
      title: "Learn about the causes of insomnia and solutions",
      category: "Health awareness",
      date: "December 17, 2024",
    },
    {
      image: img.src,
      link: "two",
      title: "Discover the most important fat burning exercises",
      category: "Weight management ⚖️",
      date: "December 19, 2024",
    },
    {
      image: img.src,
      link: "three",
      title: "What are the basic benefits of magnesium for the body?",
      category: "Health awareness",
      date: "December 30, 2024",
    },
    {
      image: img.src,
      link: "four",
      title: "Learn the difference between cortisone and cortisol",
      category: "Health awareness",
      date: "December 1, 2024",
    },
    {
      image: img.src,
      link: "five",
      title: "How do you find foods that gain weight in healthy ways?",
      category: "Weight management ⚖️",
      date: "December 8, 2024",
    },
    {
      image: img.src,
      link: "six",
      title: "Amazing benefits of Omega 3 for the body",
      category: "Health awareness",
      date: "December 15, 2024",
    },
  ];
  return (
    <div className="container my-20">
      <BlogBanner />
      <BlogMenuButton menuData={blogButtons} />
      <BlogCard blogData={blogData} />
      <BlogFooter />
    </div>
  );
};

export default BlogMain;
