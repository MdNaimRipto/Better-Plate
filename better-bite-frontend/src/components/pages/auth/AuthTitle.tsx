import { IoIosHome } from "react-icons/io";
import Link from "next/link";

const AuthTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-2 items-center mb-5">
      <h2 className="titleFont text-3xl text-black font-medium">{title}</h2>
      <Link href="/">
        <IoIosHome className="text-xl" />
      </Link>
    </div>
  );
};

export default AuthTitle;
