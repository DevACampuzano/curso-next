"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface TabBarProps {
    currentTap?: number;
    tabOptions?: number[];
}
export const TabBar: React.FC<TabBarProps> = ({ currentTap = 1, tabOptions = [1, 2, 3, 4] }) => {
    const [selected, setSelected] = useState(currentTap);
    const router = useRouter();
    const onTabChange = (tab: number) => {
        setSelected(tab);
        setCookie("selectedTab", tab.toString());
        router.refresh();
    }
    return (
        <div className={`grid w-full space-x-2 rounded-xl bg-gray-200 p-2 ${"grid-cols-" + tabOptions.length}`}>

            {
                tabOptions.map((option) => (
                    <div key={option}>
                        <input
                            checked={selected === option}
                            type="radio"
                            id={option.toString()}
                            className="peer hidden"
                            name="tab"
                            onChange={() => { }}
                        />
                        <label
                            onClick={() => onTabChange(option)}
                            htmlFor={option.toString()}
                            className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                            {option}
                        </label>
                    </div>
                ))
            }

        </div>
    )
}
