import React, { useEffect, useState } from "react";
import TODOCard from "./components/TODOCard/TODOCard";
import TODOCounter from "./components/TODOCounter/TODOCounter";
import TODOForm from "./components/TODOForm/TODOForm";
import TODOSearch from "./components/TODOSearch/TODOSearch";
import Modal from "./common/Modal/Modal";

import { PlusCircleIcon } from "@heroicons/react/24/outline";

import "./App.css"

function App() {
  const [userInput, setUserInput] = useState("");
  const [TODOs, setTODOs] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const savedTODOs = localStorage.getItem("TODOs_V1");
    if(savedTODOs){
      setTODOs(JSON.parse(savedTODOs));
    } else {
      localStorage.setItem("TODOs_V1", JSON.stringify([]));
    }
  }, [])

  const searchedTODOs = TODOs.filter((todo) =>
    todo.text.toLowerCase().includes(userInput.toLowerCase())
  );

  const deleteTODO = (TODOtext) => {
    const newTODOs = TODOs.filter((todo) => todo.text !== TODOtext);
    setTODOs(newTODOs);
    localStorage.setItem("TODOs_V1", JSON.stringify(newTODOs));
  };

  const completeTODO = (TODOtext) => {
    const completedTODOIndex = TODOs.findIndex(
      (todo) => todo.text === TODOtext
    );

    const newTODOs = [...TODOs];

    if (TODOs[completedTODOIndex].isCompleted === false) {
      newTODOs[completedTODOIndex].isCompleted = true;
    } else {
      newTODOs[completedTODOIndex].isCompleted = false;
    }

    setTODOs(newTODOs);
    localStorage.setItem("TODOs_V1", JSON.stringify(newTODOs));
  };

  return (
    <>
      <div>
        <TODOCounter TODOs={TODOs} />
        <TODOSearch setUserInput={setUserInput} />
        <div className="TODOs-container">
        {searchedTODOs.map((todo, index) => {
          return (
            <TODOCard
              TODO={todo}
              key={index}
              deleteTODO={deleteTODO}
              completeTODO={completeTODO}
            />
          );
        })}
        </div>
        <div onClick={() => setModalOpen(true)}>
          <PlusCircleIcon className="PlusCircle-icon" />
        </div>
      </div>
      {
        isModalOpen 
          ? <Modal>
              <TODOForm TODOs={TODOs} setTODOs={setTODOs} setModalOpen={setModalOpen} />
            </Modal> 
          : null
      }
    </>
  );
}

export default App;
