import React from "react";


const Sample = () => {
  return (
    <div className="flex">
      <div className="basis-1/2	w-[800px]  top-[133px] left-[64px] p-[100px] gap-10	">
        <h6 className="font-semibold	text-[28px] leading-10	 text-[#454242]">
          Our Services
        </h6>
        <h1 className="text-[100px] font-semibold leading-[94px] tracking-[-5px] text-[#454242]">
          Development that drives stability
        </h1>
      </div>
      <div className="basis-1/2 mt-[100px] top-[14.75rem] left-[84rem]">
      <div className="w-[24.25rem] gap-[2.4375rem] left-[12.875rem] top-[1px]	h-[40.25rem]
">
        <img src="/vector.png" alt="" />
        <h2 className="font-semibold text-6xl	leading-[51.6px] tracking-[-5px]">Productive</h2>
        <h2 className="font-light	italic	text-6xl	leading-[60.6px] tracking-[-8px] ">Engineering</h2>
        <span className="font-normal	text-sm	leading-[30px] text-[#16554E]
">Retail decisions are complicated! And we provide technology to simplify complex retail decisions</span>
</div>
      </div>
    </div>
  );
};

export default Sample;
