interface IValueData {
  class: string;
  image: string;
  title: string;
  description: string;
}

const OurValues = ({ valuesData }: { valuesData: IValueData[] }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-y-8 lg:gap-x-8 w-full mb-20">
      {valuesData.map((data, index) => (
        <div
          key={index}
          className={`${data.class} border border-lightGray shadow rounded-3xl group relative overflow-hidden`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:opacity-100 lg:opacity-0 brightness-50"
            style={{ backgroundImage: `url(${data.image})` }}
          ></div>

          {/* Content */}
          <div className="relative z-10 p-5 md:p-6 bg-opacity-50 group-hover:bg-opacity-100 transition-all duration-700">
            <h3 className="lg:text-primary text-white lg:group-hover:text-white text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
              {data.title}
            </h3>
            <p className="lg:group-hover:text-white text-gray text-sm">
              {data.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurValues;
