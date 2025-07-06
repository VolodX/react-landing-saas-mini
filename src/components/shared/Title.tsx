interface TitleProps {
  children: React.ReactNode;
	className?: string;
}

export const Title = ({ children, className = '' }: TitleProps) => {
  return (
    <h2 className={`text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl ${className}`}>
      {children}
    </h2>
  );
};
