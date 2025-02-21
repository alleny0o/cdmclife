type ItalicsPProps = {
  children: React.ReactNode;
  className?: string;
};

export function ItalicsP({ children, className }: ItalicsPProps) {
  return (
    <p className={`font-handlee font-semibold text-deepBlack text-base sm:text-lg ${className || ""}`}>
      {children}
    </p>
  );
}
