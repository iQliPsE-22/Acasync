import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const today = new Date();

  const [text, setText] = useState(`GOT your attendance for ${today}.`);
  return (
    <div className="ml-auto mr-auto">
      {text && <QRCode value={text} />}
    </div>
  );
};

export default QRCodeGenerator;
