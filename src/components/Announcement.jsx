import { useState, useEffect } from "react";
import Accordian from "./Accordian";

const Announcement = () => {
  const [formData, setFormData] = useState({
    subject: "",
    announcement: "",
    file: null,
  });
  const [show, setShow] = useState(false);
  const path = window.location.pathname;
  const [fetchData, setFetchData] = useState([]);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: file,
    }));
  };

  const handleAnnouncement = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("subject", formData.subject);
    formDataToSubmit.append("announcement", formData.announcement);
    formDataToSubmit.append("file", formData.file);

    try {
      const response = await fetch("https://backend-acasync.vercel.app/announcement", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);

      setFormData({
        subject: "",
        announcement: "",
        file: null,
      });

      handleFetchAnnouncement();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const handleFetchAnnouncement = async () => {
    try {
      const response = await fetch("https://backend-acasync.vercel.app/announcement");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFetchData(data);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  useEffect(() => {
    handleFetchAnnouncement();
    setShow(path === "/student/announcements");
  }, [path]);

  return (
    <div className="flex flex-col items-center min-h-dvh h-fit w-dvw bg-[#121212]">
      <h1 className="bg-[#9072ca] p-4 text-white text-xl w-screen">Announcements</h1>
      {!show && (
        <div className="flex flex-col w-screen items-center">
          <form className="flex flex-col w-screen items-center" onSubmit={handleAnnouncement}>
            <input
              type="text"
              className="w-1/2 border-2 p-2 border-black text-center rounded border-none outline-none m-1"
              name="subject"
              placeholder="Subject"
              onChange={(e) => setFormData((prevFormData) => ({ ...prevFormData, subject: e.target.value }))}
              value={formData.subject}
            />
            <textarea
              className="h-40 w-1/2 border-2 border-black text-center rounded border-none outline-none mb-1"
              name="announcement"
              placeholder="Announcement"
              onChange={(e) => setFormData((prevFormData) => ({ ...prevFormData, announcement: e.target.value }))}
              value={formData.announcement}
            />
            <input
              type="file"
              className="block text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-lg file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              name="file"
              onChange={handleProfilePictureChange}
            />
            <input type="submit" value="Submit" className="w-1/2 p-2 rounded bg-violet-700 text-white" />
          </form>
        </div>
      )}
      <div className="mt-4">
        {!show && <h1 className="bg-[#9072ca] text-white p-4 text-xl w-screen">Previous Announcements</h1>}
        <div className="mt-2">
          {fetchData.map((data, index) => (
            <div className="w-screen" key={index}>
              <Accordian key={index} subject={data.subject} announcement={data.announcement} file={data.file} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
