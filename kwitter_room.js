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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("username");
document.getElementById("welcomeName").innerHTML = "Welcome "+ user_name + "  !!!!!!!";

function addRoom(){
      room_name = document.getElementById("Room_Name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Just adding the room names"
      });

    localStorage.setItem("room_name", room_name );

    window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectRoom(this.id)' > "+Room_names+"</div> <hr>";
console.log(row)
document.getElementById("output").innerHTML += row;
      //End code
      });});}

getData();


function redirectRoom(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}