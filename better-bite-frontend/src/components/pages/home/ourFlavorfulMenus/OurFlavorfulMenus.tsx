import Image from "next/image";
import fImg1 from "@/assets/flavorful_menu/1.jpg";
import fImg2 from "@/assets/flavorful_menu/2.jpg";
import fImg3 from "@/assets/flavorful_menu/3.jpg";
import fImg4 from "@/assets/flavorful_menu/4.jpg";
import fImg5 from "@/assets/flavorful_menu/5.jpg";
import fImg6 from "@/assets/flavorful_menu/6.jpg";
import fImg7 from "@/assets/flavorful_menu/7.jpg";
import fImg8 from "@/assets/flavorful_menu/8.jpg";
import fImg9 from "@/assets/flavorful_menu/9.jpg";
import fImg10 from "@/assets/flavorful_menu/10.jpg";
import fImg11 from "@/assets/flavorful_menu/11.jpg";
import fImg12 from "@/assets/flavorful_menu/12.jpg";

const OurFlavorfulMenus = () => {
  const fMenus = [
    {
      id: 1,
      productName: "Waldorf Salad	",
      price: "$2.95",
      img: fImg1,
      desc: "Loaded with bacon, stuffed with two kinds of cheese",
    },
    {
      id: 2,
      productName: "Waldorf Salad	",
      price: "$2.95",
      img: fImg2,
      desc: "Loaded with bacon, stuffed with two kinds of cheese",
    },
    {
      id: 3,
      productName: "Waldorf Salad	",
      price: "$2.95",
      img: fImg3,
      desc: "Loaded with bacon, stuffed with two kinds of cheese",
    },
    {
      id: 4,
      productName: "Waldorf Salad	",
      price: "$2.95",
      img: fImg4,
      desc: "Loaded with bacon, stuffed with two kinds of cheese",
    },
    {
      id: 5,
      productName: "Waldorf Salad	",
      price: "$2.95",
      img: fImg5,
      desc: "Loaded with bacon, stuffed with two kinds of cheese",
    },
    {
      id: 6,
      productName: "Waldorf Salad	",
      price: "$2.95",
      img: fImg6,
      desc: "Loaded with bacon, stuffed with two kinds of cheese",
    },
    {
      id: 7,
      productName: "Waldorf Salad	",
      price: "$2.95",
      img: fImg7,
      desc: "Loaded with bacon, stuffed with two kinds of cheese",
    },
    {
      id: 8,
      productName: "Waldorf Salad	",
      price: "$2.95",
      img: fImg8,
      desc: "Loaded with bacon, stuffed with two kinds of cheese",
    },
    {
      id: 9,
      productName: "Waldorf Salad	",
      price: "$2.95",
      img: fImg9,
      desc: "Loaded with bacon, stuffed with two kinds of cheese",
    },
    {
      id: 10,
      productName: "Waldorf Salad	",
      price: "$2.95",
      img: fImg10,
      desc: "Loaded with bacon, stuffed with two kinds of cheese",
    },
    {
      id: 11,
      productName: "Waldorf Salad	",
      price: "$2.95",
      img: fImg11,
      desc: "Loaded with bacon, stuffed with two kinds of cheese",
    },
    {
      id: 12,
      productName: "Waldorf Salad	",
      price: "$2.95",
      img: fImg12,
      desc: "Loaded with bacon, stuffed with two kinds of cheese",
    },
  ];
  return (
    <div className="py-10 lg:py-10 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-black font-semibold text-3xl lg:text-[32px] mb-5">
            Our Flavorful Menus
          </h2>
          <p className="text-base text-black px-2 lg:px-[267px]">
            Odio Morbi Quis Commodo Odio Aenean Sed Adipiscing. Neque Ornare
            Aenean Euismod Elementum Nisi Quis.
          </p>
        </div>
        <div className="flex flex-wrap">
          {fMenus.map((menu) => (
            <div className="w-full lg:w-6/12" key={menu.id}>
              <div className="mx-4 mb-10 lg:mb-14 fmenu_card">
                <div className="block md:flex items-center justify-center">
                  <Image
                    src={menu.img}
                    alt=""
                    className="mx-auto md:mx-0 mb-6 lg:mb-0"
                  />
                  <div className="ml-5 ">
                    <div className="flex items-center ">
                      <h3 className="text-[1rem] lg:text-xl lg:font-medium font-semibold text-primary mb-4">
                        {menu.productName}
                      </h3>
                    </div>
                    <p className="text-base text-black ">{menu.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFlavorfulMenus;
