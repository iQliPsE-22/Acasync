import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [url, setUrl] = useState("https://acasync.vercel.app/student/login"); // Replace with your actual domain
  return (
    <div className="flex flex-col items-center p-4">
      {url && <QRCode value={url} />}
      <span className="mt-4">{url}</span>
    </div>
  );
};

export default QRCodeGenerator;
