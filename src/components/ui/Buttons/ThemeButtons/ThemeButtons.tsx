"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeButton from "./ThemeButton";
import StaticThemeButton from "./StaticThemeButton";
import { ThemeOption, themes } from "./theme-buttons.utils";

export default function ThemeButtons() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !theme) {
      const systemTheme =
        resolvedTheme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");

      setTheme(systemTheme);
    }
  }, [mounted, theme, resolvedTheme, setTheme]);

  if (!mounted) {
    return (
      <div className="flex flex-col gap-4">
        {themes.map((themeOption: ThemeOption) => (
          <StaticThemeButton key={themeOption.id} label={themeOption.label} />
        ))}
      </div>
    );
  }

  const effectiveTheme = resolvedTheme || theme;

  return (
    <div className="flex flex-col gap-4">
      {themes.map((themeOption: ThemeOption) => (
        <ThemeButton
          key={themeOption.id}
          themeName={themeOption.id}
          currentTheme={effectiveTheme}
          onClick={() => setTheme(themeOption.id)}
          label={themeOption.label}
        />
      ))}
    </div>
  );
};