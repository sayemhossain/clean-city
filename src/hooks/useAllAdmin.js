import { useEffect, useState } from "react";

const useAllAdmin = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetch(`https://secure-wildwood-53933.herokuapp.com/alladmin`)
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, []);
  return [admins];
};
export default useAllAdmin;
