import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    if (typeof window !== "undefined") {
      const storedUserData = localStorage.getItem("userData");
      return storedUserData
        ? JSON.parse(storedUserData)
        : {
            profilePicture: null,
            firstName: "",
            lastName: "",
            email: "",
            roll: "",
            college: "",
            course: "",
            stream: "",
            semester: "",
          };
    } else {
      return {
        profilePicture: null,
        firstName: "",
        lastName: "",
        email: "",
        roll: "",
        college: "",
        course: "",
        stream: "",
        semester: "",
      };
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
    console.log(userData);
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useStudent = () => useContext(UserContext);
