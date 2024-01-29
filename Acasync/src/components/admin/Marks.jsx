import React, { useEffect, useState } from "react";

const Marks = ({ roll }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    try {
      const response = await fetch("http://localhost:8080/student");
      const data = await response.json();
      setList(data);
    } catch (error) {
      console.error("Error fetching list data:", error);
    }
  };
  return (
    <div>
      <strong>
        <h1>iQlipse University</h1>
      </strong>
      {list
        .filter((item) => item.roll === roll)
        .map((item) => (
          <div key={item.roll}>
            <h2>{item.roll}</h2>
            <h2>
              {item.firstName} {item.lastName}
            </h2>
            <h2>{item.email}</h2>
            <h2>{item.college}</h2>
          </div>
        ))}
    </div>
  );
};

export default Marks;
