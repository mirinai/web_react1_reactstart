//backgroundColor: 마음대로
//padding: 10px 20px
//borderRaidius: 8px

import { CSSProperties } from "react";

//버튼
const LargeButton = () => {
  const buttonStyle: CSSProperties = {
    backgroundColor: "yellow",
    padding: "10px 20px",
    borderRadius: "8px",
  };
  return (
    <>
      <button style={buttonStyle}>버튼</button>
    </>
  );
};
export default LargeButton;
