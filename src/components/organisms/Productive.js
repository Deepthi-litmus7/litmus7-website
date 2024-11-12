import React from "react";
import Text from "@/components/atoms/Text";

const Productive = () => {
  return (
    <div className="flex">
      <div className="basis-1/2	w-[800px]  top-[133px] left-[64px] p-[100px] gap-10	">
        <h6 className="font-semibold	text-[28px] leading-10	 text-[#454242]">
          Our Services
        </h6>
        <Text
          header="Development that drives stability"
          classNameHeader="text-[100px] font-semibold leading-[94px] tracking-[-5px] text-[#454242]"
        />
      </div>

      <div className="basis-1/2 mt-[100px] top-[14.75rem] left-[84rem]">
        <div className="w-[24.25rem] gap-[2.4375rem] left-[12.875rem] top-[1px]	h-[40.25rem]">
          <img src="/vector.png" alt="" />
          <Text
            header="Productive"
            classNameHeader="font-semibold text-6xl	leading-[51.6px] tracking-[-5px]"
            Subheader="Engineering"
            classNameSubHeader="text-[3.75rem] italic text-teal-700 font-merriweather"
          />
          <Text
            header="Retail decisions are complicated! And we provide technology to
            simplify complex retail decisions"
            classNameHeader="font-normal	text-sm	leading-[30px] text-[#16554E]"
          />
        </div>
      </div>
    </div>
  );
};

export default Productive;
