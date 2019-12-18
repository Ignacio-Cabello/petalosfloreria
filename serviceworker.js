//Instalacion e interceptacion

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/static/core/css/estilos.css',
    '/static/core/img/logo2.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request)
        .then(function(result){
            return caches.open(CACHE_NAME)
            .then(function(c){
                c.put(event.request.url, result.clone());
                return result;
            })
        })
        .catch(function(e){
            return caches.match(event.request)

        })

    );
});

//codigo para notificaciones push
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyC0I7j4C_53cOUb4A7xuG0iMuVsFZF3HXk",
    authDomain: "petalos-37a7c.firebaseapp.com",
    databaseURL: "https://petalos-37a7c.firebaseio.com",
    projectId: "petalos-37a7c",
    storageBucket: "petalos-37a7c.appspot.com",
    messagingSenderId: "734262390059",
    appId: "1:734262390059:web:1e6496867c5e3e65ed696e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let messaging = firebase.messaging();

  messaging.setBackgroundMessageHandler(function (payload) {
      console.log("ha llegado notificacion");      
      let title = payload.notification.title;

      let options = {
          body:payload.notification.body,
          icon:payload.notification.icon
      }
        self.registration.showNotification(title, options);

  });