import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleNoteContainer from "../Componants/SingleNoteContainer/SingleNoteContainer";
function SingleNote() {
  const [note, setNote] = useState(null);
  const { noteId } = useParams();
  const getNode = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/note/${noteId}`);
    const data = await response.json();
    setNote(data);
  };
  useEffect(() => {
    getNode();
  }, [noteId]);
  
  return (
    <div
      style={{
        backgroundColor: "#1D2123",
        padding: "40px 0px",
        height: "100vh",
      }}
    > 
    <SingleNoteContainer note={note}/>
    </div>
  );
}

export default SingleNote;
