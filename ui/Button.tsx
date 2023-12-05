import { CSSProperties, ReactElement, ReactNode, cloneElement } from "react";

interface IButtonProps {
  icon?: ReactElement;
  children: ReactNode;
  styles?: CSSProperties;
  type?: "primary" | "secondary";
  changeOrder?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  icon,
  children,
  type = "secondary",
  styles,
  changeOrder = false,
}) => {
  return (
    <button
      className={`flex items-center text-sm gap-1 px-4 py-3 rounded-[4px] transition-all group duration-150 ease-linear ${
        type === "primary"
          ? "bg-[#a62626] hover:bg-[#be3737] focus:bg-[#be3737] text-white hover:text-white"
          : "hover:bg-gray-100 text-[#0000008f]"
      }`}
      style={styles}
    >
      {icon &&
        cloneElement(icon, {
          className: `text-[#0000008f] text-sm group-hover:text-black duration-150 ease-linear ${
            changeOrder && "order-1"
          } `,
          "data-testid": "button-icon-element",
        })}
      <span
        className={`${
          type === "primary"
            ? "group-hover:text-white"
            : "group-hover:text-black"
        } duration-150 ease-linear font-semibold`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
