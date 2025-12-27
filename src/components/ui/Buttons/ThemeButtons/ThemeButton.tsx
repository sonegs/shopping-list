
interface ThemeButtonProps {
  themeName: string;
  currentTheme: string | undefined;
  onClick: () => void;
  label: string;
}

export default function ThemeButton({
  themeName,
  currentTheme,
  onClick,
  label,
}: ThemeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center cursor-pointer px-4 py-2 rounded-md transition-colors ${
        currentTheme === themeName
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
      }`}
    >
      {label}
    </button>
  );
};