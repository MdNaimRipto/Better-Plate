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
      productName: "Dressed Herring Salad",
      img: fImg1,
      desc: "Potatoes, carrots, beet roots, chopped onions and mayonnaise",
    },
    {
      id: 2,
      productName: "Gado-gado",
      img: fImg2,
      desc: "Potato, bean sprouts, spinach, chayote, bitter gourd, corn",
    },
    {
      id: 3,
      productName: "Tom Yum Soup",
      img: fImg3,
      desc: "Loaded with bacon, stuffed with two kinds of cheese",
    },
    {
      id: 4,
      productName: "Chicken Pizza",
      img: fImg4,
      desc: "Loaded with bacon, stuffed with two kinds of cheese",
    },
    {
      id: 5,
      productName: "Cobb Salad",
      img: fImg5,
      desc: "Stuffed with chicken, bacon, avocado, eggs and cheese",
    },
    {
      id: 6,
      productName: "Cheesy Macaroni",
      img: fImg6,
      desc: "Onion, tomato, masala, cheese",
    },
    {
      id: 7,
      productName: "Risotto",
      img: fImg7,
      desc: "White wine, arborio rice, parmesan cheese, butter cheese",
    },
    {
      id: 8,
      productName: "Potato Croquettes",
      img: fImg8,
      desc: "Loaded with bacon, stuffed with two kinds of cheese",
    },
    {
      id: 9,
      productName: "Spaghetti Bolognese",
      img: fImg9,
      desc: "Lean ground beef, red wine, tomato sauce, beef broth",
    },
    {
      id: 10,
      productName: "Garganelli",
      img: fImg10,
      desc: "Portobello mushrooms, white wine, arborio rice, chicken",
    },
    {
      id: 11,
      productName: "Chicken Escalope",
      img: fImg11,
      desc: "Bbq sauce, american garden, chicken breasts, coleslaw",
    },
    {
      id: 12,
      productName: "Waldorf Salad",
      img: fImg12,
      desc: "Fresh apples, celery and walnuts, dressed in mayonnaise",
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
                <div className="block md:flex items-center">
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
