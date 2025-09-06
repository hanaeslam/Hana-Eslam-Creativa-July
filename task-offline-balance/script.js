var users = [];

function showUsersCount() {
  console.log("Total users " + users.length);
}

function addUser() {
  var name = prompt("Enter user name");
  var id = prompt("Enter user ID");
  var balance = Number(prompt("Enter user balance"));
  users.push({  name,id,  balance });
  console.log("User added");
}

function editBalance() {
  var id = prompt("Enter user ID to update balance");
  var user = users.find(function(u) { return u.id === id; });
  if (user) {
    user.balance = prompt("Enter new balance");
    console.log("Balance updated");
  } else {
    console.log("User not found");
  }
}

function deleteUser() {
  var id = prompt("Enter user ID to delete");
  var index = users.findIndex(function(u) { return u.id === id; });
  if (index !== -1) {
    users.splice(index, 1);
    console.log("User deleted");
  } else {
    console.log("User not found");
  }
}

addUser();
showUsersCount();
editBalance();
deleteUser();
showUsersCount();
