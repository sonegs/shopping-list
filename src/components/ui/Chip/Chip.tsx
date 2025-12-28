type SelectableChipProps = {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function Chip({
  label,
  isSelected,
  onClick,
}: SelectableChipProps) {
  const selected = isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200';

  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-sm font-medium transition ${selected}`}>
      {label}
    </button>
  );
}
