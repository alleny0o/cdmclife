import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
type MegaMenuContextType = {
  megaMenuColor: "clear" | "white";
  setMegaMenuColor: (color: "clear" | "white") => void;
};

// Create the context with a default value
const MegaMenuContext = createContext<MegaMenuContextType | undefined>(undefined);

// Create a provider component
export const MegaMenuProvider = ({ children }: { children: ReactNode }) => {
  const [megaMenuColor, setMegaMenuColor] = useState<"clear" | "white">("clear");

  return (
    <MegaMenuContext.Provider value={{ megaMenuColor, setMegaMenuColor }}>
      {children}
    </MegaMenuContext.Provider>
  );
};

// Custom hook for consuming the context
export const useMegaMenu = () => {
  const context = useContext(MegaMenuContext);
  if (!context) {
    throw new Error("useMegaMenu must be used within a MegaMenuProvider");
  }
  return context;
};
