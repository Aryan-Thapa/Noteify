// import React from 'react'

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
4;
import { useDispatch, useSelector } from "react-redux";
import { addToNotes, updatetoNotes } from "../redux/noteSlice";

const HomePage = () => {
  const [title, setTitle] = useState("");
  const [value, setValues] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});
  const noteId = searchParams.get("noteId");
  const dispatch = useDispatch();
  const allNotes = useSelector((state) => state.note.notes);

  function handleAddNote() {
    const note = {
      title: title,
      content: value,
      id: noteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if (noteId) {
      //update note
      dispatch(updatetoNotes(note));
    } else {
      //create note
      dispatch(addToNotes(note));
    }
    //after creation or updation
    setTitle("");
    setValues("");
    setSearchParams({});
  }

  useEffect(() => {
    if (noteId) {
      const note = allNotes.find((n) => n.id === noteId);
      setTitle(note.title);
      setValues(note.content);
    }
  }, [noteId]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 justify-between mt-4">
        <input
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-400 p-2 rounded-lg w-[67%]"
        />
        <button onClick={handleAddNote} className="p-2 rounded-lg w-[33%]">
          {noteId ? "Update Note" : "Create Note"}
        </button>
      </div>

      <div>
        <textarea
          className="rounded-xl border border-gray-400 p-2 min-w-[35rem]"
          value={value}
          placeholder="Enter note here"
          onChange={(e) => setValues(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default HomePage;
