import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieType } from "../../types/moviesType";

interface UIState {
  showModal?: boolean;
  selectedMovieInfo?: MovieType;
}

const initialState: UIState = {
  showModal: false,
};

const UISlice = createSlice({
  initialState,
  name: "sliceUI",
  reducers: {
    setModalView(state, action: PayloadAction<boolean>) {
      state.showModal = action.payload;
    },
    setSelectedMovie(state, action: PayloadAction<MovieType>) {
      state.selectedMovieInfo = action.payload;
    },
  },
});
export const UIReducer = UISlice.reducer;
export const UIAction = UISlice.actions;
