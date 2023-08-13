import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useResturantMenu = (resId) => {
  const [restInfo, setrestInfo] = useState(null);
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        let data = await fetch(MENU_API + resId);

        const json = await data.json();

        setrestInfo(json.data);
      } catch (error) {
        console.error("Error fetching data :", error);
      }
    };

    fetchMenu();
  }, [resId]);

  return restInfo;
};

export default useResturantMenu;
