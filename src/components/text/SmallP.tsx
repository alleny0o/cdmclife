type SmallPProps = {
  children: React.ReactNode;
  className?: string;
};

function SmallP({ children, className }: SmallPProps) {
  return (
    <p className={`text-sm ${className || "text-deepBlack"}`}>{children}</p>
  );
}

export default SmallP;
