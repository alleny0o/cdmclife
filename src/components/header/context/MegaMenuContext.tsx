import { createContext, useContext, useState, ReactNode } from "react";

type MegaMenuContextType = {
  megaMenuColor: "clear" | "white";
  setMegaMenuColor: (color: "clear" | "white") => void;
  isTransparent: boolean;
};

const MegaMenuContext = createContext<MegaMenuContextType | undefined>(undefined);

export const MegaMenuProvider = ({
  children,
  isTransparent = false,
}: {
  children: ReactNode;
  isTransparent?: boolean;
}) => {
  const [megaMenuColor, setMegaMenuColor] = useState<"clear" | "white">("clear");

  return (
    <MegaMenuContext.Provider value={{ megaMenuColor, setMegaMenuColor, isTransparent }}>
      {children}
    </MegaMenuContext.Provider>
  );
};

export const useMegaMenu = () => {
  const context = useContext(MegaMenuContext);
  if (!context) {
    throw new Error("useMegaMenu must be used within a MegaMenuProvider");
  }
  return context;
};
