import React, { useRef } from "react";

const CopyToClipboard = ({ text, children, fn }) => {
  const textArea = useRef();

  const copy = () => {
    fn();
    textArea.current.style.display = "block";
    textArea.current.select();
    document.execCommand("copy");
    textArea.current.style.display = "none";
  };

  return (
    <>
      <button onClick={copy}>{children}</button>
      <textarea readOnly ref={textArea} value={text} style={{ display: "none" }} />
    </>
  );
};

export default CopyToClipboard;
