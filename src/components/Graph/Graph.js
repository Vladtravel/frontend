import React from "react";
import { useState } from "react";
import MultiAxisLine from "./MultiAxisLine";
import s from "./Graph.module.css";
import Modal from "./MultiAxisLine";


const Graph = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
    
    return (
        <>
      <div className = {s.container}>  
      <button className = {s.butn} 
       onClick={toggleModal}
          aria-label="open graph">
{showModal && (
        <Modal onClose={toggleModal}>
          <button
            onClick={toggleModal}
            className={s.graphBtn}
            aria-label="close"
          >
            
          </button>
          <MultiAxisLine toggleModal={toggleModal} />
          
        </Modal>
      )}
            </button>
      </div>
      
        
        
      
      </>
    );
  };
  
  export default Graph;