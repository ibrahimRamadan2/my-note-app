import React, { useState } from "react";
import classes from "./CreateNote.module.css";
import NoteTextArea from "../NoteTextArea/NoteTextArea";
function CreateNote() {
  const [notebody, setNoteBody] = useState({'body':''});
  const [title, setTitle] = useState("");
  const [creatationDate, setCreatationDate] = useState();
  const [touched, setTouched] = useState(false);

  const isInValidTitle = title.length === 0 && touched;
  const isValidDate = !(creatationDate === undefined);
  const isValidForm = touched && !isInValidTitle && isValidDate ;

  
  const titleTouchHandler = async (e) => {
    setTouched(true);
    setTitle(prev => e.target.value)
   
  };
  
  const submitHandler= async(e)=>{
    e.preventDefault();
    
    const result = fetch('http://127.0.0.1:8000/api/note/create', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          'title':title , 
          'body':notebody.body, 
          'created':creatationDate 
        }),
    }).then((response)=>{
        console.log([title,notebody.body,creatationDate])
        console.log(response) ;
        return ; 
    })
  }

  return (
    <div className={classes["create"]}>
      <div className={classes["container"]}>
        <form onSubmit={submitHandler} >
          <label> Title</label>
          <input onChange={titleTouchHandler} type={"text"} />
          <label> Body</label>
          <div className={classes["text-area"]}>
            <NoteTextArea setNoteBody={setNoteBody} notebody={notebody} />
          </div>
          <label> creatation Date</label>
          <input onChange={(e)=>{setCreatationDate(e.target.value) ; } } type={"date"} />
          <button className={`${ !isValidForm ? classes['disabled']:''}`} disabled={!isValidForm}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
