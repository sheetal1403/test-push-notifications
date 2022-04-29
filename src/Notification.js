import React, {useState, useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { getReqToken, onMessageListener } from "./firebase"

function Notification() {
//     const [notification, setNotification] = useState({title: '', body: ''});
//   const notify = () =>  toast(<ToastDisplay/>); 
//   function ToastDisplay() {
//     return (
//       <div>
//         <p><b>{notification?.title}</b></p>
//         <p>{notification?.body}</p>
//       </div>
//     );
//   }

//     useEffect(() => {
//         if (notification?.title ){
//          notify()
//         }
//       }, [notification])

      
    getReqToken()

    onMessageListener().then(payload => {
        console.log({payload});
    }).catch(err => console.log(err))

    return <div>HII</div>
}

export default Notification