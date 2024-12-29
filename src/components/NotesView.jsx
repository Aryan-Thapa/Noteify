// import React from 'react'

import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const NotesView = () => {
  const { id } = useParams();
  const allNotes = useSelector((state) => state.note.notes);
  const note = allNotes.find((n) => n.id === id);
  console.log(note)
  const handleCopy = () => {
    navigator.clipboard.writeText(note?.content);
    toast.success("Content copied to clipboard");
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 justify-between mt-4 px-28">
        <input
          type="text"
          disabled
          value={note?.title}
          className="border border-gray-400 p-2 rounded-lg w-[100%]"
        />
      </div>

      <div className="border rounded-xl mx-28 flex flex-col gap-2 overflow-hidden">
        <div className="flex place-content-between p-2">
          <span>Content</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={handleCopy}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
            />
          </svg>
        </div>
        <textarea
          className="p-2 border-t-2 min-w-[100%] resize-none overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-500 focus:outline-none"
          disabled
          value={note?.content}
          rows={20}
        />
      </div>
    </div>
  );
};

export default NotesView;
