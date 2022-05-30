import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const darkModeAtom = atomWithStorage("darkMode", false);

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  return {
    darkMode,
    toggleDarkMode: () => setDarkMode(!darkMode),
  };
};
