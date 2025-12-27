
interface StaticThemeButtonProps {
  label: string;
}

export default function StaticThemeButton ({ label }: StaticThemeButtonProps) {
  return (
    <button className="flex items-center cursor-pointer px-4 py-2 rounded-md bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
      {label}
    </button>
  );
};
