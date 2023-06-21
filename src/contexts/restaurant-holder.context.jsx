import { createContext, useState } from "react";

export const RestaurantHolderContext = createContext({});

export const RestaurantHolderProvider = ({ children }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const variableHolder = { selectedRestaurant, setSelectedRestaurant };
  
  return (
    <RestaurantHolderContext.Provider value={variableHolder}>
      {children}
    </RestaurantHolderContext.Provider>
  );
};
