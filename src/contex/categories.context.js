import { createContext, useEffect, useState } from "react";

// import SHOP_DATA from "../shop-data.js";
import { getCollectionAndDocRef } from "../utilis/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMaps] = useState({});
  const value = { categoriesMap };

  useEffect(() => {
    const doc = async () => {
      const res = await getCollectionAndDocRef();
      setCategoriesMaps(res);
    };

    doc();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
