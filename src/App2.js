import React, { useEffect, useRef } from "react";

const ReactComponent = () => {
  const areaRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (!areaRef.current.contains(e.target)) {
        alert("영역 밖입니다.");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <div
        className="area"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#4574bb",
          margin: "auto",
        }}
        ref={areaRef}
      ></div>
    </div>
  );
};

export default ReactComponent;
