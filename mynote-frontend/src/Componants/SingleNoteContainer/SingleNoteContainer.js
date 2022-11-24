import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SingleNoteContainer.module.css";
import NoteTextArea from "../NoteTextArea/NoteTextArea";
function SingleNoteContainer({ note }) {
  const [notebody, setNoteBody] = useState(note);
  useEffect(() => {
    setNoteBody(note);
  }, [note]);

  const handleNoteUpdate = async () => {
     
   await fetch(`http://127.0.0.1:8000/api/note/${note.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notebody),
    });
  };

  return (
    <div className={classes["single-page"]}>
      <div className={classes["container"]}>
        <Link to="/">
          <i
           onClick={handleNoteUpdate}
            className="fa-solid fa-chevron-left"
          ></i>
        </Link>
        <h2>{note?.title}</h2>
        <NoteTextArea setNoteBody={setNoteBody} notebody={notebody} />
        <p>Created at : {notebody?.created}</p>
        <p>Last Update at : {notebody?.updated}</p>
      </div>
    </div>
  );
}

export default SingleNoteContainer;
