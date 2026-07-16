import React from "react";

const CharacterCounter = ({sendText}) => {
    
  return (
    <div className="absolute text-xs text-white mt-1 right-0 top-0 mr-1 ">
      Characters: {sendText.length}
    </div>
  );
};

export default CharacterCounter;
