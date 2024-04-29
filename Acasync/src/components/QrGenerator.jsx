import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [text, setText] = useState("GOT your attendance for today.");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="date"
        value={text}
        onChange={handleChange}
        placeholder="Enter Date"
      />
      {text && <QRCode value={text} />}
    </div>
  );
};

export default QRCodeGenerator;
