import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addToNotes: (state, action) => {},
    updatetoNotes: (state, action) => {},
    resetAllNotes: (state, action) => {},
    removeFromNotes: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addToNotes, updatetoNotes, resetAllNotes,removeFromNotes } = noteSlice.actions;

export default noteSlice.reducer;
