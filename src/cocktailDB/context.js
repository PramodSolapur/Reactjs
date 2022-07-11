import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const AppProvider = ({ children }) => {
  const [cocktailList, setCocktailList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const fetchCocktails = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const { drinks } = await response.json();
      const cocktails = drinks.filter(({ strDrink }) =>
        strDrink.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCocktailList(cocktails);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCocktails();
  }, [searchTerm]);
  return (
    <AppContext.Provider
      value={{ isLoading, cocktailList, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
