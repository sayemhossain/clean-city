import { useEffect, useState } from "react";

const useAllAdmin = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/admin`)
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, [admins]);
  return [admins];
};
export default useAllAdmin;
