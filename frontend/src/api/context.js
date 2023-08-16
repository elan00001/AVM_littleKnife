import { useState,useContext,createContext } from "react";
import React from "react";

const WS_URL=process.env.NODE_ENV==="production"?
    window.location.origin.replace(/^http/,"ws"):
    "ws://localhost:5000";
let client=new WebSocket(WS_URL);

const ChatContext = createContext({
    stat:'',
    task:'',
    sup:'',
    mat:'',
    val:'',
    valType:'',
    setMat:()=>{}, //fot material inventory
    setSup:()=>{}, // for suppliers
    setStat:()=>{}, //for account settings
    setTask:()=>{}, //for value target 3 categories
    setVal:()=>{}, //for value targets
    setValType:()=>{},
    

});

const ChatProvider = (props) => {
    const [task, setTask] = useState("");
    const [stat, setStat] = useState(null);
    const [sup, setSup] = useState(null)
    const [mat, setMat] = useState("")
    const [val, setVal] = useState(null)
    const [valType, setValType] = useState("")

    return (
        <ChatContext.Provider
            value={{
                // val,
                task,
                setTask,
                stat,
                setStat,
                sup,
                setSup,
                mat,
                setMat,
                val, 
                setVal,
                valType, 
                setValType,
            }}
            {...props}
        />
    );
};
const useChat = () => useContext(ChatContext);
export { ChatProvider, useChat , client };
// export default ChatContext
