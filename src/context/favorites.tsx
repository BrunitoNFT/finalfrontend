import { createContext, useEffect, useReducer } from "react";

type AppState = {
  favorites: string[];
};

type AppAction = { type: "toggleFav"; payload: string };

function reducer(state: AppState, action: AppAction): AppState {
  console.log("RED");
  switch (action.type) {
    case "toggleFav":
      //If I have the id I delete it, if not I add it
      console.log("true -1", state.favorites);
      if (Array.isArray(state.favorites)) {
        console.log("true 1");
        const index = state.favorites.includes(action.payload);
        if (index) {
          console.log("true 2");

          return {
            ...state,
            favorites: state.favorites.filter((id) => id !== action.payload),
          };
        } else {
          return {
            ...state,
            favorites: [...state.favorites, action.payload],
          };
        }
      }
      return state;
    default:
      return state;
  }
}

interface FavoritesContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

export const favoriteContext = createContext<FavoritesContextType>({
  state: { favorites: [] },
  dispatch: () => null,
});

export const FavoriteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, {
    favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <favoriteContext.Provider value={{ state, dispatch }}>
      {children}
    </favoriteContext.Provider>
  );
};
