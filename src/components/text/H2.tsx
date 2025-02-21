type H2Props = {
    children: React.ReactNode;
    className?: string;
  };
  
  export function H2({ children, className }: H2Props) {
    return (
      <h2 className={`mb-4 text-3xl md:text-4xl font-bold ${className || "text-deepBlack"}`}>
        {children}
      </h2>
    );
  }
  