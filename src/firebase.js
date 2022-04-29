import {initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";


  initializeApp({
    apiKey: "AIzaSyDL84FdmK2TG5tapQbzSEC7GEnHgpjr39Q",
    authDomain: "test-notification-bce5b.firebaseapp.com",
    projectId: "test-notification-bce5b",
    storageBucket: "test-notification-bce5b.appspot.com",
    messagingSenderId: "192196118396",
    appId: "1:192196118396:web:c444998ebfbc63f2ae06f9",
    vapidKey:
      "BBNrNNP6rb6xF2AzowEioDh4Rmc_v8titndEyX_Cf2uwwYAhB4pyteAMc4aXiy3BIaAtnWpSviyk368YK6-t_Ng"
  });

  const messaging = getMessaging();

export const getReqToken = (setTokenFound) => {
    return getToken(messaging, {
        vapidKey: "BBNrNNP6rb6xF2AzowEioDh4Rmc_v8titndEyX_Cf2uwwYAhB4pyteAMc4aXiy3BIaAtnWpSviyk368YK6-t_Ng",
      })
      .then((currentToken) => {
        if (currentToken) {
          console.log("current token for client: ", currentToken);
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });
  };

  export const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
    });