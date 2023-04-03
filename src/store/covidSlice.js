import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "countries/getCountries",
  async (format = "summary") => {
    const res = await axios(`https://api.covid19api.com/${format}`);
    return res.data;
  }
);

const covidSlice = createSlice({
  name: "covid",
  initialState: {
    countries: [],
    selectedCountry: {},
    status: "idle",
  },
  reducers: {
    getCountryDetails: (state, { payload, type }) => {
      state.selectedCountry = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, { payload, type }) => {
      state.status = "loading";
    });
    builder.addCase(fetchData.fulfilled, (state, { payload, type }) => {
      state.status = "succeeded";
      state.countries = payload;
    });
    builder.addCase(fetchData.rejected, (state, { payload, type }) => {
      state.status = "failed";
    });
  },
});

export const { getCountries, getCountryDetails } = covidSlice.actions;
export default covidSlice.reducer;
