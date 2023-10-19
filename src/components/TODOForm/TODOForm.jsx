import React, { useState } from "react";

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
    <form>
      <div>
        <input type="text" name="" placeholder={"Things to do..."} onChange={(e) => setUserInput(e.target.value)} />
      </div>
      <div>
        <button>Cancel</button>
        <button type="submit" onClick={handleSubmit}>Create TODO</button>
      </div>
    </form>
  );
}

export default TODOForm;
