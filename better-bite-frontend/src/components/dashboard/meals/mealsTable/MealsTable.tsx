import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

interface IMeals {
  title: {
    en: string;
    ban: string;
  };
  image: string;
  protein: number;
  craps: number;
  fat: number;
}

const MealsTable = ({ mealsData }: { mealsData: IMeals[] }) => {
  return (
    <div className="max-h-[70vh] overflow-y-auto rounded shadow-md">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-primary text-white">
          <tr>
            <th className="py-3 px-4 font-medium">Image</th>
            <th className="py-3 px-4 font-medium">Title</th>
            <th className="py-3 px-4 font-medium">Carbs</th>
            <th className="py-3 px-4 font-medium">Protein</th>
            <th className="py-3 px-4 font-medium">Fat</th>
            <th className="py-3 px-4 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mealsData.map((data, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-lightGray"
              } hover:bg-gray/10 transition-colors`}
            >
              <td className="py-3 px-4">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image
                    src={data.image}
                    alt={data.title.en}
                    fill
                    className="object-cover"
                  />
                </div>
              </td>
              <td className="py-3 px-4">{data.title.en}</td>
              <td className="py-3 px-4">{data.craps}</td>
              <td className="py-3 px-4">{data.protein}</td>
              <td className="py-3 px-4">{data.fat}</td>
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

export default MealsTable;
