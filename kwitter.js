function addUser(){
    user_name = document.getElementById("UserName").value;

    localStorage.setItem("username", user_name);

    window.location = "kwitter_room.html";
}