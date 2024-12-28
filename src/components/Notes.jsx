// import React from 'react'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteCard from "./NoteCard";
import { removeFromNotes } from "../redux/noteSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const notes = useSelector((state) => state.note.notes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (noteId) => {
    dispatch(removeFromNotes(noteId));
  };

  const handleShare = async (title, content, id) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Note: ${title}`,
          text: content,
          url: `${window.location.href}/${id}`, // Optional: Share the current URL
        });
        toast.success("Note shared successfully!");
      } catch (error) {
        toast.error("Failed to share the note.");
        console.error("Sharing error:", error);
      }
    } else {
      toast.error("Web Share API not supported in this browser.");
    }
  };

  const navigate = useNavigate();

  console.log(notes);
  return (
    <div>
      <input
        className="p-2 rounded-lg border border-gray-400 mt-4 min-w-[30rem]"
        type="search"
        placeholder="Search Note"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 mt-2">
        {filteredData.length > 0 &&
          filteredData.map((note) => {
            return (
              <div key={note.id}>
                <NoteCard
                  title={note?.title}
                  content={note?.content}
                  createdAt={note?.createdAt}
                  onDelete={() => handleDelete(note?.id)}
                  onCopy={() => {
                    navigator.clipboard.writeText(note?.content);
                    toast.success("Content copied to clipboard");
                  }}
                  onView={() => {
                    navigate(`/notes/${note?.id}`);
                  }}
                  onEdit={() => {
                    navigate(`/?noteId=${note?.id}`);
                  }}
                  onShare={() => handleShare(note?.title, note?.content,note?.id)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Notes;
