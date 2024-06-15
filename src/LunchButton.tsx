import { CSSProperties } from "react";

const LunchButton = () => {
  const buttonStyle: CSSProperties = {
    //h1 태그 색깔은 하늘색, 폰트사이즈 20px
    //h1 태그 내용 오늘점심
    backgroundColor: "pink",
    padding: "10px",
  };
  const h1Style: CSSProperties = {
    backgroundColor: "skyblue",
    padding: "10px",
  };
  return (
    <>
      <button style={buttonStyle}>버튼임</button>
      <h1 style={h1Style}>오늘 점심 내용</h1>
    </>
  );
};
export default LunchButton;
