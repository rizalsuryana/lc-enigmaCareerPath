interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "danger" | "sidebar" | "sidebar-active" | "login";
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  label,
  icon,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth = false,
  className = "",
}: ButtonProps) {
  const baseStyle =
    "cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1";
  const widthStyle = fullWidth ? "w-full" : "";

  const variantStyle = {
    primary: "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-400",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-400",
    sidebar:
      "text-gray-300 hover:bg-gray-700/80 hover:text-white text-left w-full justify-start",
    "sidebar-active": "bg-gray-700 text-white text-left w-full justify-start",
    login:
      "bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-800 hover:to-gray-600 text-white focus:ring-gray-400",
  }[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${widthStyle} ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{label}</span>
    </button>
  );
}
