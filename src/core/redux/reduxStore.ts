import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { createSelectorHook, TypedUseSelectorHook, useDispatch } from "react-redux";
import { UIReducer } from "./slices/UISlice";

const RootReducer = combineReducers({
  UI: UIReducer,
});

const ActionAppTypeResetStore = "RESET_APP_REDUX_STORE";

export const ActionApp = {
  ResetStore: (): AnyAction => ({ type: ActionAppTypeResetStore }),
};

const AppReducer: (...param: Parameters<typeof RootReducer>) => ReturnType<typeof RootReducer> = (state, action) => {
  if (action.type === ActionAppTypeResetStore) {
    state = undefined;
  }
  return RootReducer(state, action);
};

export const AppStore = configureStore({
  reducer: AppReducer as typeof RootReducer,
  // Enalbe Dev Tools only on development environment
  devTools: process.env.NODE_ENV === "development",
});

export type MovieflixAppState = ReturnType<typeof RootReducer>;
export type MovieflixAppDispatch = typeof AppStore.dispatch;
export const useAppDispatch = () => useDispatch<MovieflixAppDispatch>();
export const useAppSelector = createSelectorHook() as TypedUseSelectorHook<MovieflixAppState>;
