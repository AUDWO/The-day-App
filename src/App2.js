import React, { useState, useEffect, useRef } from "react";

const ReactComponent = () => {
  const areaRef = useRef(null);
  const areaRef2 = useRef(null);
  const initalValue = false;
  const [show, setShow] = useState(initalValue);

  useEffect(() => {
    if (show) {
      const handleClick = (e) => {
        if (
          !areaRef.current.contains(e.target) &&
          !areaRef2.current.contains(e.target)
        ) {
          setShow(!show);
        }
      };

      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [show]);

  return (
    <div>
      <button
        className="area"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#4574bb",
          margin: "auto",
        }}
        ref={areaRef}
        onClick={() => {
          setShow(!show);
        }}
      ></button>
      {show && <div ref={areaRef2}>안녕하세요</div>}
    </div>
  );
};

export default ReactComponent;
