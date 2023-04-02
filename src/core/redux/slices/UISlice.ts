import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  showModal?:boolean;
  selectedMovieName?:string;
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
    setSelectedMovie(state, action: PayloadAction<string>) {
      state.selectedMovieName = action.payload;
    },
    // setSubPageView(state, action: PayloadAction<EnumSubPageView>) {
    //   state.subPageView?.push(action.payload);
    // },
    // backSubPageView(state) {
    //   state.subPageView?.pop();
    // },
    // setPastBriefingYear(state, action: PayloadAction<{ year?: number; pastBriefingYearlyData?: ArchiveDataType[] }>) {
    //   state.pastBriefingYear = action.payload.year;
    //   state.pastBriefingYearlyData = action.payload.pastBriefingYearlyData;
    // },
    // setPastBriefingMonthly(
    //   state,
    //   action: PayloadAction<{ view: EnumSubPageView; pastBriefingMonthlyData?: ArchiveMonthlyDataType; pastBriefType?: string }>
    // ) {
    //   if (state.subPageView) {
    //     state.subPageView = [...state.subPageView, action.payload.view];
    //   } else {
    //     state.subPageView = [action.payload.view];
    //   }
    //   state.pastBriefingMonthlyData = action.payload.pastBriefingMonthlyData;
    //   state.pastBriefType = action.payload.pastBriefType;
    // },
    // setPastBriefingMonth(state, action: PayloadAction<string | undefined>) {
    //   state.pastBriefingMonth = action.payload;
    // },
  },
});
export const UIReducer = UISlice.reducer;
export const UIAction = UISlice.actions;
