// Import the Firebase libraries using ES modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js";

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
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);

            if (registration.active) {
                console.log('Service Worker is active.');
                // Now that the service worker is registered, you can request permission for notifications
                requestNotificationPermission();
            } else {
                console.log('Service Worker is not yet active.');
                // Retry after a short delay if the Service Worker is not yet active
                setTimeout(requestNotificationPermission, 1000);
            }
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
} else {
    console.error('Service Workers are not supported in this browser.');
}

// Request notification permission
function requestNotificationPermission() {
    Notification.requestPermission()
        .then((permission) => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');

                // Get the FCM registration token
                return getToken(messaging, { vapidKey: 'BBmWacXHwZXUF5sUvi8-tYzy3zL63T4PlzhUUaoErzMMUqwaLAjfcYwg0h-1RQKA3y32Nl4yle-TibekXkFKDhM' });
            } else {
                console.error('Notification permission denied.');
            }
        })
        .then((currentToken) => {
            if (currentToken) {
                console.log('Token received:', currentToken);

                // Send the token to your server
                sendTokenToServer(currentToken);
            } else {
                console.warn('No registration token available.');
            }
        })
        .catch((err) => {
            console.error('An error occurred while retrieving token:', err);
        });
}

// Function to send the token to the server
function sendTokenToServer(token) {
    fetch('https://localhost:7011/api/notifications/save-token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: token })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Token successfully sent to server:', data);
        })
        .catch((error) => {
            console.error('Error sending token to server:', error);
        });
}

// Handle incoming messages
onMessage(messaging, (payload) => {
    console.log('Message received:', payload);

    // Example processing for notifications
    const { title, body, icon } = payload.notification;
    if (Notification.permission === 'granted') {
        new Notification(title, {
            body: body,
            icon: icon
        });
    }
});