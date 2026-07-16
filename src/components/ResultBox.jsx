import React, { useRef, useState } from "react";
import { Volume1, Copy, Pointer } from "lucide-react";

const ResultBox = ({ Text, speak }) => {
  const [copied, setCopied] = useState(false);
  const textRef = useRef(null);

  const handleCopy = async () => {
    if (!textRef.current) return;

    try {
      await navigator.clipboard.writeText(textRef.current.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert("failed to copy text");
    }
  };

  return (
    <div className="">
      <section>
        <div
          ref={textRef}
          className="min-h-50 p-3 border border-grey-300 shadow-sm focus:ring-2 text-white mt-3 rounded-xl "
        >
          {Text}
        </div>
      </section>
      <section className="text-white mt-3 px-3">
        <div className="flex relative h-8 gap-3 py-2">
          <div
            onClick={speak}
            className=" speakkBtn  select-none h-8 w-auto flex gap-1 cursor-pointer  pr-2 pl-2  items-center justify-center bg-white text-black dark:text-white dark:bg-[#0077b6] active:bg-[#006d77] rounded transition-transform duration-300 ease-in-out border
            hover:scale-110 "
          >
            <Volume1 strokeWidth={1.75} size={19} /> speak
          </div>
          <div
            onClick={handleCopy}
            className=" copyBtn select-none h-8 w-auto cursor-pointer gap-1 flex pr-2 pl-2  items-center justify-center  bg-white text-black dark:text-white dark:bg-[#0077b6] active:bg-[#006d77] rounded transition-transform duration-300 ease-in-out border 
            hover:scale-110"
          >
            <Copy size={19} strokeWidth={1.75} />{" "}
            {copied ? "Copied! ✅" : "Copy 📋"}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultBox;
