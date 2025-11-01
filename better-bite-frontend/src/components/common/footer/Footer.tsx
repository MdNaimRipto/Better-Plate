import { IoMdHome as HomeIcon } from "react-icons/io";
import { MdEmail as EmailIcon } from "react-icons/md";
import { FaPhoneAlt as PhoneIcon } from "react-icons/fa";
import { MdOutlineWatchLater as AccessTimeIcon } from "react-icons/md";
import { FaFacebookSquare as FacebookIcon } from "react-icons/fa";
import { FaSquareXTwitter as TwitterIcon } from "react-icons/fa6";
import { FaInstagramSquare as InstagramIcon } from "react-icons/fa";
import play1 from "@/assets/1.webp";
import play2 from "@/assets/2.webp";
import play3 from "@/assets/3.webp";
import pmntImg from "@/assets/pmnt.png";
import footerBg from "@/assets/footer.jpg";
import Image from "next/image";

const Footer = () => {
  const footerCols = [
    {
      id: 1,
      title: "Help",
      content: [
        { id: 1, item: "Search" },
        { id: 2, item: "Help" },
        { id: 3, item: "Information" },
        { id: 4, item: "Privacy Policy" },
        { id: 5, item: "Shipping Details" },
      ],
    },
    {
      id: 2,
      title: "Support",
      content: [
        { id: 1, item: "Contact" },
        { id: 2, item: "About" },
        { id: 3, item: "Refund" },
        { id: 4, item: "Delivery" },
      ],
    },
    {
      id: 3,
      title: "Information",
      content: [
        { id: 1, item: "Search Term" },
        { id: 2, item: "Advanced Search" },
        { id: 3, item: "Faqs and Help" },
        { id: 4, item: "Store Location" },
      ],
    },
  ];
  return (
    <footer
      style={{
        backgroundImage: `url(${footerBg.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
      className="relative py-20"
    >
      <div className="container mx-auto px-14">
        <div className="md:flex  justify-center gap-6">
          {footerCols.map((col) => (
            <div className="w-full md:w-6/12 lg:w-3/12 mt-2" key={col.id}>
              <h2 className="mb-4 text-xl font-semibold text-[#f7f7f7] capitalize dark:text-white">
                {col.title}
              </h2>
              {col.content.map((mItem) => (
                <ul
                  key={mItem.id}
                  className="text-white flex flex-col gap-y-1 text-[16px] font-normal capitalize mb-4"
                >
                  <li>
                    <a className="hover:underline">{mItem.item}</a>
                  </li>
                </ul>
              ))}
            </div>
          ))}

          <div className="w-full md:w-6/12 lg:w-3/12">
            <ul className="text-white text-left gap-y-1 text-[16px] font-normal capitalize mb-4">
              <li className="flex  gap-4 mb-4 ">
                <span className="text-2xl">
                  <HomeIcon />
                </span>
                <span className="">
                  No: 58 A, East Madison Street, Baltimore, MD, USA 4508
                </span>
              </li>
              <li className="flex  gap-4 mb-4">
                <span className="text-xl">
                  <EmailIcon />
                </span>
                <span className="">mail@example.com</span>
              </li>
              <li className="flex  gap-4 mb-4">
                <span>
                  <PhoneIcon />
                </span>
                <span className="">0000 - 123456789</span>
              </li>
              <li className="flex  gap-4 mb-4">
                <span className="text-xl">
                  <AccessTimeIcon />
                </span>
                <span className="">9.30AM - 7.30PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* footer second row */}
        <div className="md:flex items-center justify-between">
          <div>
            <h3 className="text-white text-xl font-medium mb-4">
              Connect with us{" "}
            </h3>
            <div className="flex items-center ">
              <span className="text-white text-lg mr-5">
                <FacebookIcon />
              </span>
              <span className="text-white text-lg mr-5">
                <TwitterIcon />
              </span>
              <span className="text-white text-lg mr-5">
                <InstagramIcon />
              </span>
            </div>
          </div>
          <div className="mt-14">
            <h3 className="text-white text-xl font-medium mb-4">
              Download Our App{" "}
            </h3>
            <div className="flex items-center justify-between gap-3">
              <Image src={play1} alt="" className="w-[94px]" />
              <Image src={play2} alt="" className="w-[94px]" />
              <Image src={play3} alt="" className="w-[94px]" />
            </div>
          </div>
        </div>

        {/* footer bottom */}
        <hr className="border-[#999] my-4" />
        <div className="md:flex items-center justify-between">
          <span className="text-lg text-white ">
            All Right Reserved © 2023,
          </span>
          <div>
            <Image src={pmntImg} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
