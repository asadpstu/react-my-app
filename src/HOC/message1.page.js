import AlertMessage from "./alert";

const Message2 = ({sendMessage,message}) =>{
    return (<div style={{margin:"10px"}}>
        <button onClick={()=>sendMessage("Hello There 1")}>Message 1</button>
        {message && <span> Message : {message}</span>}
    </div>)
}
export default AlertMessage(Message2);