interface MenuButtonProps {
  menuData: {
    title: string;
  }[];
}

const BlogMenuButton = ({ menuData }: MenuButtonProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {menuData.map((menu, index) => (
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
  );
};

export default BlogMenuButton;
