"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  decrement,
  increment,
  initCounterState,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";
// import { useState } from "react";

interface Props {
  value?: number;
}

interface CounterResponse {
  count: number;
  method: string;
}

const getApiConuter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());
  return data;
};

export const CartCounter = ({}: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  // const [counter, setCounter] = useState(value);
  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiConuter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex gap-2">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] disabled:opacity-50"
          disabled={count === 0}
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
      </div>
    </>
  );
};
