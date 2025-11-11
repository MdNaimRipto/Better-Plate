import Image from "next/image";
import { menuData } from "@/components/pages/home/ourFlavorfulMenus/OurFlavorfulMenus";

const MenuCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 py-10">
      {menuData.map((data, index) => (
        <div key={index} className="flex flex-col gap-2 p-2 shadow">
          <div className="relative w-full max-h-[280px] object-contain overflow-hidden rounded-[32px] hover:rounded-[48px]">
            <span className="absolute left-4 top-8 -translate-y-1/3 bg-white/90 text-black px-3 py-1 rounded-xl shadow-md text-xs font-semibold">
              {data.calory} kcal
            </span>
            <div className="w-full h-full overflow-hidden">
              <Image
                src={data.img}
                alt={data.productName}
                // height={500}
                // width={500}
                // unoptimized={true}
                className="w-full h-full object-none hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>
          <p className="text-lg font-semibold text-black">{data.productName}</p>
          <div className="flex items-center gap-3 md:gap-4 text-[10px] xl:text-xs">
            <span className="flex items-center gap-1.5">
              <CommonDot bg="bg-success" />
              <span>{data.protein}g Protein</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CommonDot bg="bg-secondary" />
              <span>{data.carbs}g Carbs</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CommonDot bg="bg-primary/80" />
              <span>{data.fat}g Fat</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;

const CommonDot = ({ bg }: { bg: string }) => {
  return <span className={`w-2 h-2 rounded-full block ${bg}`} />;
};
