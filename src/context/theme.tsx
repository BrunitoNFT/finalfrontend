import { createContext, useEffect, useReducer } from "react";

type AppState = {
  theme: boolean;
};

type AppAction = { type: "toggle" } | { type: "dark" } | { type: "light" };

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "toggle":
      return { ...state, theme: !state.theme };
    case "dark":
      return { ...state, theme: true };
    case "light":
      return { ...state, theme: false };
    default:
      return state;
  }
}

interface ThemeContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

export const themeContext = createContext<ThemeContextType>({
  state: { theme: false },
  dispatch: () => null,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    theme: localStorage.getItem("theme") === "true",
  });

  useEffect(() => {
    console.log("state.theme");
    if (state.theme === true) {
      document.body.className = "dark";
      localStorage.setItem("theme", "true");
    } else {
      document.body.className = "";
      localStorage.setItem("theme", "false");
    }
    console.log("document.body.className: ", document.body.className);
  }, [state.theme]);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};
