import Link from "next/link";

const BlogFooter = () => {
  return (
    <div className="bg-lightGray/50 border-2 border-primary w-full lg:w-3/4 xl:w-2/3 mx-auto rounded-3xl p-4 md:p-10 lg:p-16">
      <div className="text-primary">
        <p className="text-2xl md:text-3xl font-semibold mb-6">
          Sign up to receive our latest news
        </p>
        <div className="bg-white p-1 rounded flex justify-between md:gap-4">
          <input
            type="email"
            className="p-2 md:ps-4 focus:outline-none placeholder:text-sm"
            placeholder="Enter your email address"
          />
          <button className="hidden md:block text-sm md:text-base font-semibold capitalize transition py-[10px] md:py-[14px] px-[14px] md:px-[18px] bg-primary text-white rounded">
            Subscribe
          </button>
        </div>
        <div className="flex justify-center mt-4 md:hidden">
          <button className="text-sm md:text-base font-semibold capitalize transition py-[10px] md:py-[14px] px-[14px] md:px-[18px] bg-primary rounded text-white">
            Subscribe
          </button>
        </div>
        <p className="mt-4 text-xs md:text-sm">
          By clicking &quot;Subscribe&quot;, you agree to our{" "}
          <Link href={"/"} className="underline font-semibold">
            Privacy Policy
          </Link>{" "}
          {""}
          and{" "}
          <Link href={"/"} className="underline font-semibold">
            Terms and Conditions
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogFooter;
