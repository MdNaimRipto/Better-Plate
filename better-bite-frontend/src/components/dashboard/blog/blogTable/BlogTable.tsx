import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

interface IBlogs {
  //   category: blogCategoryEnums;
  title: string;
  image: string;
  description: string;
}

const BlogTable = ({ blogData }: { blogData: IBlogs[] }) => {
  return (
    <div className="max-h-[70vh] overflow-y-auto rounded shadow-md">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-primary text-white">
          <tr>
            <th className="py-3 px-4 font-medium">Image</th>
            <th className="py-3 px-4 font-medium">Title</th>
            <th className="py-3 px-4 font-medium">Category</th>
            <th className="py-3 px-4 font-medium">Description</th>
            <th className="py-3 px-4 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogData.map((blog, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-lightGray"
              } hover:bg-gray/10 transition-colors`}
            >
              <td className="py-3 px-4">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </td>
              <td className="py-3 px-4 font-semibold text-black">
                {blog.title}
              </td>
              <td className="py-3 px-4 text-primary font-medium">Category</td>
              {/* <td className="py-3 px-4 text-primary font-medium">
                      {blog.category}
                    </td> */}
              <td className="py-3 px-4 text-gray truncate max-w-xs">
                {blog.description}
              </td>
              <td className="pr-4">
                <div className="flex justify-end gap-3">
                  <button className="text-success text-lg">
                    <FaRegEdit />
                  </button>
                  <button className="text-error text-xl">
                    <MdDeleteForever />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;
