type PProps = {
  children: React.ReactNode;
  className?: string;
};

export function P({ children, className }: PProps) {
  return (
    <p className={`text-sm md:text-base text-deepBlack ${className || ""}`}>
      {children}
    </p>
  );
}
