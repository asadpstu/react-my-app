import AlertMessage from "./alert";

const Message1 = ({sendMessage,message}) =>{
    return (<div style={{margin:"10px"}}>
        <button onClick={()=>sendMessage("Hello There 2")}>Message 2</button>
        {message && <span> Message : {message}</span>}
    </div>)
}
export default AlertMessage(Message1);