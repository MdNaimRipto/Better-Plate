import Image from "next/image";
import paper from "@/assets/Common/paper-design.webp";

const Reviews = () => {
  return (
    <div className="relative overflow-hidden backdrop-blur-[2px]">
      <div className="absolute w-full h-full -z-20 brightness-50 bg-black/50 top-0 left-0"></div>
      <div className="container flex flex-col items-center justify-center h-[1000px] gap-12">
        <div className="flex flex-col gap-6 items-center justify-center text-white">
          <h6 className="uppercase text-xs font-extralight tracking-widest">
            Tasty And Crunchy
          </h6>
          <h2 className="text-5xl font-medium tracking-wide">
            What People Say
          </h2>
          <p className="text-sm max-w-[600px] text-center leading-6 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm
            reminusto doeiusmod tempor incidition ulla mco laboris nisi ut
            aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 w-full">
          {[1, 2, 3].map((review, i) => (
            <div
              key={i}
              className="bg-white w-full h-[380px] flex flex-col gap-8 items-center justify-center p-10"
            >
              <p className="leading-6 text-sm text-center text-black">{`“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque lauatium.”`}</p>
              <span className="block w-full h-[.6px] bg-gray/20"></span>
              <div className="flex items-center gap-2">
                <div className="w-14 h-14 rounded-full border border-gray/30 flex items-center justify-center">
                  <div className="w-[90%] h-[90%] bg-gray/30 rounded-full"></div>
                </div>
                <div className="flex flex-col gap-3 text-sm">
                  <p>Marta Williams</p>
                  <p className="text-gray/60 text-xs">FOUNDER</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 justify-items-center gap-4">
          {[1, 2, 3, 4, 5].map((dot, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                i === 1 ? "bg-primary" : "bg-white"
              }`}
            ></span>
          ))}
        </div>
      </div>
      <Image
        src={paper}
        alt="Paper Design"
        className=" w-full -z-10 absolute -top-[40px] 2xl:-top-[80px] hidden md:block"
      />
      <Image
        src={paper}
        alt="Paper Design"
        className=" w-full z-50 absolute -bottom-[40px] 2xl:-bottom-[80px] hidden md:block"
      />
    </div>
  );
};

export default Reviews;
