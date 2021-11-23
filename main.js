const firebaseConfig = {
  apiKey: "AIzaSyDmeLsHn8_K3CBSkZ3xJi0-Yov93EO4s6w",
  authDomain: "let-s-chat-1a084.firebaseapp.com",
  projectId: "let-s-chat-1a084",
  storageBucket: "let-s-chat-1a084.appspot.com",
  messagingSenderId: "787661394936",
  appId: "1:787661394936:web:15d1622eb5239dfb493c0d"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding user"   
      });
  }
