import { useState } from "react";

const AlertMessage = (OriginalComponent) =>{
   function NewComponent(){
      const [message, setMessage] = useState(null)
      const generateNewMessage = (message) =>{
        setMessage(Math.random())
        alert(`Generating for [${message}] New Random number : " ${Math.random() * 10}`)
      }

      return <OriginalComponent sendMessage={generateNewMessage} message={message}/>
   }
   return NewComponent;
}

export default AlertMessage;