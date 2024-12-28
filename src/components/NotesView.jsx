// import React from 'react'

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const NotesView = () => {
  const { id } = useParams();
  console.log("ID:", id);
  const allNotes = useSelector((state) => state.note.notes);
  console.log(allNotes);
  const note = allNotes.find((n) => n.id === id);
  console.log("Note:::", note);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 justify-between mt-4">
        <input
          type="text"
          disabled
          value={note?.title}
          className="border border-gray-400 p-2 rounded-lg w-[67%]"
        />
        <button className="p-2 rounded-lg w-[33%]">Note</button>
      </div>

      <div>
        <textarea
          className="rounded-xl border border-gray-400 p-2 min-w-[35rem]"
          disabled
          value={note?.content}
          rows={20}
        />
      </div>
    </div>
  );
};

export default NotesView;
