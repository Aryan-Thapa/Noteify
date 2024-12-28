import React from "react";

const NoteCard = ({
  title,
  content,
  createdAt,
  onEdit,
  onView,
  onDelete,
  onCopy,
  onShare,
}) => {
  return (
    <div className="border flex justify-between p-4 rounded-lg shadow-xl min-w-[40rem]">
      <div>
        <div>{title}</div>
        <div>{content}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <button onClick={onEdit}>Edit</button>
          <button onClick={onView}>View</button>
          <button onClick={onCopy}>Copy</button>
          <button onClick={onDelete}>Delete</button>
          <button onClick={onShare}>Share</button>
        </div>
        <div>{createdAt}</div>
      </div>
    </div>
  );
};

export default NoteCard;
