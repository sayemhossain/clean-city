import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "contant-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          setToken(data);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
