import Image from "next/image";
import Link from "next/link";

interface BlogData {
  link: string;
  image: string;
  category: string;
  title: string;
  date: string;
}

const BlogCard = ({ blogData }: { blogData: BlogData[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-16 gap-x-6 my-20">
      {blogData.map((data, index) => (
        <Link
          href={`blog/${data.link}`}
          key={index}
          className="flex flex-col gap-6"
        >
          <div className="w-full max-h-[248px] overflow-hidden rounded-[32px] hover:rounded-[48px]">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
              src={data.image}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <span className="bg-primary/10 text-primary uppercase text-xs font-bold rounded-full px-4 py-3">
                {data.category}
              </span>
            </div>
            <h3 className="text-2xl font-semibold">{data.title}</h3>
            <span className="text-gray text-sm">{data.date}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
