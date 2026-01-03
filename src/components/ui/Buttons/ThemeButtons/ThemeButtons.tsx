"use client";

import { useTheme } from "next-themes";
import ThemeButton from "./ThemeButton";
import StaticThemeButton from "./StaticThemeButton";
import { ThemeOption, themes } from "./theme-buttons.utils";

export default function ThemeButtons() {
  const { setTheme, resolvedTheme } = useTheme();

  if (!resolvedTheme) {
    return (
      <div className="flex flex-col gap-4">
        {themes.map((themeOption: ThemeOption) => (
          <StaticThemeButton key={themeOption.id} label={themeOption.label} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {themes.map((themeOption: ThemeOption) => (
        <ThemeButton
          key={themeOption.id}
          themeName={themeOption.id}
          currentTheme={resolvedTheme}
          onClick={() => setTheme(themeOption.id)}
          label={themeOption.label}
        />
      ))}
    </div>
  );
}
