import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  notes: localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addToNotes: (state, action) => {
      const note = action.payload;
      state.notes.push(note);
      localStorage.setItem("notes", JSON.stringify(state.notes));
      toast.success("Note added successfully");
    },
    updatetoNotes: (state, action) => {
      const note = action.payload;
      const index = state.notes.findIndex((n) => n.id === note.id);
      if (index!==-1) {
        state.notes[index] = note;
        localStorage.setItem("notes", JSON.stringify(state.notes));
      }
      toast.success("Note updated successfully");
    },
    resetAllNotes: (state, action) => {
      state.notes= [];
      localStorage.removeItem("notes");
    },
    removeFromNotes: (state, action) => {
      const noteId = action.payload;
      //removed the note with the given id
      const newNotes = state.notes.filter((note) => note.id !== noteId);
      state.notes = newNotes;
      localStorage.setItem("notes", JSON.stringify(state.notes));
      toast.success("Note removed successfully");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToNotes, updatetoNotes, resetAllNotes,removeFromNotes } = noteSlice.actions;

export default noteSlice.reducer;
