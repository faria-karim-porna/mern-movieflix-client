import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnumPageView, EnumSubPageView } from "../../enums/EnumPageView";
import { ArchiveDataType, ArchiveMonthlyDataType } from "../../types/ArchiveComponentTypes";
import { ContentDataType } from "../../types/ContentDataTypes";

interface UIState {
  pageView?: EnumPageView;
  subPageView?: EnumSubPageView[];
  pastBriefingYear?: number;
  pastBriefingMonth?: string;
  pastBriefingYearlyData?: ArchiveDataType[];
  pastBriefingMonthlyData?: ArchiveMonthlyDataType;
  pastBriefType?: string;
}

const initialState: UIState = {
  pageView: EnumPageView.myBriefings,
  subPageView: [],
};

const UISlice = createSlice({
  initialState,
  name: "sliceUI",
  reducers: {
    setPageView(state, action) {
      state.pageView = action.payload;
    },
    setSubPageView(state, action: PayloadAction<EnumSubPageView>) {
      state.subPageView?.push(action.payload);
    },
    backSubPageView(state) {
      state.subPageView?.pop();
    },
    setPastBriefingYear(state, action: PayloadAction<{ year?: number; pastBriefingYearlyData?: ArchiveDataType[] }>) {
      state.pastBriefingYear = action.payload.year;
      state.pastBriefingYearlyData = action.payload.pastBriefingYearlyData;
    },
    setPastBriefingMonthly(
      state,
      action: PayloadAction<{ view: EnumSubPageView; pastBriefingMonthlyData?: ArchiveMonthlyDataType; pastBriefType?: string }>
    ) {
      if (state.subPageView) {
        state.subPageView = [...state.subPageView, action.payload.view];
      } else {
        state.subPageView = [action.payload.view];
      }
      state.pastBriefingMonthlyData = action.payload.pastBriefingMonthlyData;
      state.pastBriefType = action.payload.pastBriefType;
    },
    setPastBriefingMonth(state, action: PayloadAction<string | undefined>) {
      state.pastBriefingMonth = action.payload;
    },
  },
});
export const UIReducer = UISlice.reducer;
export const UIAction = UISlice.actions;
