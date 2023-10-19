import React, { useState } from "react";

import "./TODOForm.css"

function TODOForm({ TODOs, setTODOs, setModalOpen }) {

  const [ userInput, setUserInput ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTODO = {
      text: userInput,
      isCompleted: false,
    }
    const newTODOs = [...TODOs, newTODO];
    setTODOs(newTODOs);
    localStorage.setItem("TODOs_V1", JSON.stringify(newTODOs));
    setModalOpen(false);
  }
  return (
    <form className="TODOForm-container">
      <div>
        <p>What do you gonna do next!?</p>
      </div>
      <div className="input-container">
        <textarea type="text" name="" placeholder={"Things to do..."} onChange={(e) => setUserInput(e.target.value)} />
      </div>
      <div className="buttons-container">
        <button>Cancel</button>
        <button type="submit" onClick={handleSubmit}>Create</button>
      </div>
    </form>
  );
}

export default TODOForm;
