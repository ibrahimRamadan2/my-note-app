import React, { useState, useEffect } from "react";
import classes from "./NotesList.module.css";
import NoteListItem from "../NoteListItem/NoteListItem";
import { Link, useNavigate } from "react-router-dom";
function NotesList() {
  const [noteList, setNoteList] = useState([]);
  const Navigate = useNavigate();
  const handleDeleteNote = async (noteId) => {
    await fetch(`http://127.0.0.1:8000/api/note/${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((x) => {
      getNoteList();
    });
  };

  const getNoteList = async () => {
    const response = await fetch("/api/notes/");
    const notes = await response.json();

    setNoteList(notes);
  };
  useEffect(() => {
    getNoteList();
  }, []);

  return (
    <div className={classes["notes-list"]}>
      <div className={classes["container"]}>
        <h1> List Notes</h1>
        <div className={classes["note-list-header"]}>
          <div>
            <i className="fa-solid fa-list-ul"></i>
            <h3>Notes</h3>
          </div>
          <p className={classes["notes-count"]}>{noteList.length} Notes</p>
        </div>
        <div className={classes["list"]}>
          {noteList?.map((note, index) => {
            return (
              <div key={index} className={classes["main-card"]}>
                <div>
                  <Link
                    key={index}
                    to={`note/${note.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <NoteListItem key={index} note={note} name={"hima"} />
                  </Link>
                </div>
                <div
                  onClick={() => {
                    handleDeleteNote(note.id);
                  }}
                  className={classes["delete-btn"]}
                >
                  <i className="fa-solid fa-trash"></i>
                </div>
              </div>
            );
          })}
        </div>
        <Link to={'note/create/'}>
          <div className={classes["create-btn"]}>
            <i className="fa-solid fa-plus"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NotesList;
