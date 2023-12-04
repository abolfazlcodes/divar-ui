interface IHighlightProps {
  children: React.ReactNode;
}

const Highlight: React.FC<IHighlightProps> = ({ children }) => {
  return <span className="text-[##a62626]">{children}</span>;
};

export default Highlight;
