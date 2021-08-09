//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB0qImnxvWHARi6ITe7NZpzH_1VQBgaKlg",
      authDomain: "practice-activity-c---94.firebaseapp.com",
      databaseURL: "https://practice-activity-c---94-default-rtdb.firebaseio.com",
      projectId: "practice-activity-c---94",
      storageBucket: "practice-activity-c---94.appspot.com",
      messagingSenderId: "1064857354035",
      appId: "1:1064857354035:web:f7366b26b7cca4bcb0c846",
      measurementId: "G-JB6CBYLLWK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("username");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function Send(){
      msg = document.getElementById("Message_input").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message : msg,
            like : 0
      });
}