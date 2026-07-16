import React from "react";

const TextArea = ({ receiveText, sendText }) => {
  return (
    <div>
      <textarea
        name=""
        id="source-text"
        value={sendText}
        onChange={(e) => {
          receiveText(e.target.value);
        }}
        cols=""
        rows="6"
        placeholder="Entre your text..."
        className="w-full h-50 p-3 border border-grey-300 shadow-sm focus:ring-2 text-white mt-3 resize-none rounded-xl"
      ></textarea>
    </div>
  );
};

export default TextArea;
