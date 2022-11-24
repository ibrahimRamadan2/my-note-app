import React from 'react'
import classes from './NoteTextArea.module.css'
function NoteTextArea({notebody , setNoteBody}) {
  return (
    <div className={classes['text-area-container']}>
        <textarea
          value={notebody ? notebody.body : "loading..."}
          onChange={(e) => {
            setNoteBody((prev)=> {return {...prev , 'body':e.target.value}} );
          }}
        />
    </div>
  )
}

export default NoteTextArea