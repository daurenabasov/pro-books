import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const data = createSlice({
  name: "data/data",
  initialState,
  reducers: {},
});

export const {} = data.actions;

export const { reducer } = data;
