// Import the Firebase compat libraries
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfAutYAuNDhqnshGCqEBbNyiPkkT82ap0",
    authDomain: "pushnoti-638d3.firebaseapp.com",
    projectId: "pushnoti-638d3",
    storageBucket: "pushnoti-638d3.appspot.com",
    messagingSenderId: "905692401258",
    appId: "1:905692401258:web:c77b2acc0f1282c6adc413",
    measurementId: "G-7CYSFDDZHJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('Background Message received:', payload);
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };
    self.registration.showNotification(payload.notification.title, notificationOptions);
});
