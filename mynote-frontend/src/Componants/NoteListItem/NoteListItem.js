import React from "react";
import classes from "./NoteListItem.module.css";
function NoteListItem({ note }) {

  

  return (
    <div className={classes["note-item"]}>
      <div>
        <h2> {note.title}</h2>
        <p>{note.body.substring(0, 50)}</p>
      </div>
      
    </div>
  );
}

export default NoteListItem;
