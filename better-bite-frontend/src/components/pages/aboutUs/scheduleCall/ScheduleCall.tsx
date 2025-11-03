import Image from "next/image";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";

interface iConsultationData {
  image: string;
  title: string;
  description: string;
  subTitle: string;
  time: string;
}

const ScheduleCall = ({
  consultationData,
}: {
  consultationData: iConsultationData[];
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {consultationData.map((data, index) => (
        <div key={index} className="">
          <div className="h-[200px] md:h-[250px] lg:h-[300px] w-full rounded-t-2xl overflow-hidden">
            <Image
              src={data.image}
              alt=""
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className=" flex flex-col gap-2 border-x border-b border-lightGray shadow rounded-b-2xl p-6">
            <h3 className="text-primary text-xl md:text-2xl font-semibold">
              {data.title}
            </h3>
            <div className="my-4 md:max-h-[50px] lg:max-h-[55px]">
              <p className="text-gray text-sm md:text-base">
                {data.description}
              </p>
            </div>
            <div className="md:flex gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 text-black">
                <IoVideocamOutline className="mt-1 text-black text-xl" />
                <p>{data.subTitle}</p>
              </div>
              <span className="hidden md:block border border-lightGray my-1"></span>
              <div className="flex items-center gap-2 text-black">
                <MdOutlineWatchLater className="mt-[1px] text-black text-lg" />
                <p>{data.time}</p>
              </div>
            </div>
            <div className="mt-4">
              <button className="text-primary hover:text-secondary text-xs md:text-sm font-semibold border border-primary hover:border-secondary rounded-lg py-3 px-6 transition duration-500">
                Select date and time
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleCall;
