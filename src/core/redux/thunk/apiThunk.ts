import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addAllMoviesData: any = createAsyncThunk("movie/addAllMoviesData", async (fakeData, { rejectWithValue }) => {
  try {
    const response = await fetch("https://mern-movieflix-server-production.up.railway.app/addAllData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeData),
    });

    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getAllMoviesInfo: any = createAsyncThunk("movie/getAllMoviesInfo", async ({}, { rejectWithValue }) => {
  try {
    const response = await fetch("https://mern-movieflix-server-production.up.railway.app/showMoviesInfo").then((res) => res.json());

    return response.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const updateSeatStatus: any = createAsyncThunk("movie/updateSeatStatus", async (seatStatus, { rejectWithValue }) => {
  try {
    const response = await fetch("https://mern-movieflix-server-production.up.railway.app/updateStatus", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(seatStatus),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const addBookings: any = createAsyncThunk("movie/addBookings", async (newBooking, { rejectWithValue }) => {
  try {
    const response = await fetch("https://mern-movieflix-server-production.up.railway.app/addBookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBooking),
    }).then((res) => res.json());

    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});

const movieApISlice: any = createSlice({
  name: "movie",
  initialState: {
    tour: {},
    tours: [],
    userTours: [],
    tagTours: [],
    relatedTours: [],
    currentPage: 1,
    numberOfPages: null,
    error: "",
    loading: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [addAllMoviesData.pending]: (state: any, action: any) => {
      state.loading = true;
    },
    [addAllMoviesData.fulfilled]: (state: any, action: any) => {
      state.loading = false;
      state.tours = [action.payload];
    },
    [addAllMoviesData.rejected]: (state: any, action: any) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getAllMoviesInfo.pending]: (state: any, action: any) => {
      state.loading = true;
    },
    [getAllMoviesInfo.fulfilled]: (state: any, action: any) => {
      state.loading = false;
      state.userTours = action.payload;
    },
    [getAllMoviesInfo.rejected]: (state: any, action: any) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [updateSeatStatus.pending]: (state: any, action: any) => {
      state.loading = true;
    },
    [updateSeatStatus.fulfilled]: (state: any, action: any) => {
      state.loading = false;
      //   const {
      //     arg: { id },
      //   } = action.meta;
      //   if (id) {
      //     state.userTours = state.userTours.map((item) => (item._id === id ? action.payload : item));
      //     state.tours = state.tours.map((item) => (item._id === id ? action.payload : item));
      //   }
    },
    [updateSeatStatus.rejected]: (state: any, action: any) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [addBookings.pending]: (state: any, action: any) => {
      state.loading = true;
    },
    [addBookings.fulfilled]: (state: any, action: any) => {
      state.loading = false;
      state.tours = [action.payload];
    },
    [addBookings.rejected]: (state: any, action: any) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setCurrentPage } = movieApISlice.actions;

export const ApiReducer = movieApISlice.reducer;
