"use client";

interface IAuthBtnProps {
  title: string;
  isLoading: boolean;
}

const AuthBtn = ({ title, isLoading }: IAuthBtnProps) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`w-full sm:w-auto px-8 py-2.5 font-semibold text-base rounded-lg transition-all duration-300 text-white bg-primary flex items-center justify-center gap-2`}
    >
      {isLoading ? (
        <>
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          Loading...
        </>
      ) : (
        <span>{title}</span>
      )}
    </button>
  );
};

export default AuthBtn;
