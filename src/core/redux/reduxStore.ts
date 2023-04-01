import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  createSelectorHook,
  TypedUseSelectorHook,
  useDispatch,
} from "react-redux";
import { StorageBreif } from "../localStorage/StorageBreif";
import { UIReducer } from './slices/UISlice';

const RootReducer = combineReducers({
  UI: UIReducer,
});

type ReducerParams = Parameters<typeof RootReducer>;
type ReducerReturn = ReturnType<typeof RootReducer>;

const ActionAppTypeResetStore = "RESET_APP_REDUX_STORE";

export const ActionApp = {
  ResetStore: (): AnyAction => ({ type: ActionAppTypeResetStore }),
};

const AppReducer = (...arg: ReducerParams): ReducerReturn => {
  const [, action] = arg;
  if (action.type === ActionAppTypeResetStore) {
    StorageBreif.Clear();
    return RootReducer(undefined, action);
  }
  return RootReducer(...arg);
};

export const RegBreifAppStore = configureStore({
  reducer: AppReducer,
  devTools: process.env.NODE_ENV !== "production",
});

// export type RegBreifAppState = ReturnType<typeof RootReducer>;
// export type RegBreifAppDispatch = typeof RegBreifAppStore.dispatch;
export const useAppDispatch = () => useDispatch<RegBreifAppDispatch>();
export const useAppSelector =
  createSelectorHook() as TypedUseSelectorHook<RegBreifAppState>;
