import MultiInput from "./MultiInput";
import { dropdownData } from "../Data/JobsData";
import { Divider, RangeSlider } from "@mantine/core";
import { useState } from "react";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return (
        <div className="flex px-2 md:px-8 py-8 bg-blueblack2 rounded-2xl shadow-lg gap-4 items-center">
            {dropdownData.map((item, index) => (
                <div key={index} className="w-1/5 min-w-[120px]">
                    <div className="bg-bluegrey3 rounded-lg border border-bluegrey2 shadow-sm">
                        <MultiInput {...item} />
                    </div>
                </div>
            ))}
            <div className="w-1/5 min-w-[160px] flex flex-col gap-2">
                <div className="flex text-sm justify-between text-bluegrey2 font-semibold mb-1">
                    <div>Salary</div>
                    <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
                </div>
                <div className="bg-bluegrey3 rounded-lg border border-bluegrey2 shadow-sm px-2 py-1">
                    <RangeSlider
                        size="sm"
                        color="bluegrey2"
                        value={value}
                        labelTransitionProps={{ transition: 'skew-down', duration: 150, timingFunction: 'linear' }}
                        onChange={setValue}
                        className="[&_.mantine-Slider-label]:!translate-y-10"
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;