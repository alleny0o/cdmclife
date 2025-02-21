import { ReactNode } from "react";

type H3Props = {
  children: ReactNode;
  className?: string;
};

export function H3({ children, className }: H3Props) {
  return (
    <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold text-deepBlack md:leading-[1.3] ${className || ""}`}>
      {children}
    </h3>
  );
}