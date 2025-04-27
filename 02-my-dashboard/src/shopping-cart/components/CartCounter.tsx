"use client";
import { useState } from "react";

interface Props {
  value?: number;
}
export const CartCounter = ({ value = 10 }: Props) => {
  const [counter, setCounter] = useState(value);
  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex gap-2">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] disabled:opacity-50"
          disabled={counter === 0}
          onClick={() => setCounter((state) => state - 1)}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
          onClick={() => setCounter((state) => state + 1)}
        >
          +1
        </button>
      </div>
    </>
  );
};
