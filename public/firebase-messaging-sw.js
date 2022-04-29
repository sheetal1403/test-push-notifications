importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDL84FdmK2TG5tapQbzSEC7GEnHgpjr39Q",
    authDomain: "test-notification-bce5b.firebaseapp.com",
    projectId: "test-notification-bce5b",
    storageBucket: "test-notification-bce5b.appspot.com",
    messagingSenderId: "192196118396",
    appId: "1:192196118396:web:c444998ebfbc63f2ae06f9",
    measurementId: "G-LWWNS6BEX5",
    vapidKey:
      "BBNrNNP6rb6xF2AzowEioDh4Rmc_v8titndEyX_Cf2uwwYAhB4pyteAMc4aXiy3BIaAtnWpSviyk368YK6-t_Ng",
  });

  const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});