import React from "react";
import Header from "../Componants/Header/Header";
import NotesList from "../Componants/NotesList/NotesList";
function Home() {
  return (
    <div style={{backgroundColor:'#1D2123' ,padding:'40px 0px' , height:'100vh'}}>
      <NotesList />
    </div>
  );
}

export default Home;
