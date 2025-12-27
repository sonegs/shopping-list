export interface ThemeOption {
  id: string;
  label: string;
}

export const themes: ThemeOption[] = [
  { id: "light", label: "Light Mode" },
  { id: "dark", label: "Dark Mode" },
  { id: "custom", label: "Custom Mode" },
  { id: "pastel", label: "Pastel Mode" },
];