"use client";

import { useState } from "react";

const PromoCode = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  return (
    <div className="relative my-5 h-[70px] w-full">
      <div className="flex items-center h-[50px] mb-3 gap-3">
        <input
          className="w-[75%] h-full border border-lightGray focus:outline-1 focus:outline-primary/70 rounded-2xl px-3 text-sm"
          placeholder="Enter your promo code"
          onChange={(e) => {
            setError(false);
            setCode(e.target.value);
          }}
        />
        <button
          className="bg-primary text-white w-[25%] h-[92%] rounded-2xl disabled:bg-lightGray"
          disabled={code.length ? false : true}
          onClick={() => setError(true)}
        >
          Apply
        </button>
      </div>
      {error && (
        <p className="text-sm ml-2 font-normal text-primary">
          Invalid Promo Code!
        </p>
      )}
    </div>
  );
};

export default PromoCode;
