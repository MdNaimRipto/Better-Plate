import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <p>
        <span className="text-xl">Oops!</span> We can&apos;t seem to find the
        page you&apos;re looking for.
      </p>
      <Link href={"/"}>
        <button className="text-primary hover:text-secondary text-xs md:text-sm font-semibold border border-primary hover:border-secondary rounded-lg py-3 px-6 transition duration-500">
          Go back to home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
