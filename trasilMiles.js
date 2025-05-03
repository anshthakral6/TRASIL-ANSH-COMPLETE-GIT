// Trasil Miles Rewards System
let users = {
  user1: { name: 'Alice', miles: 1200 },
  user2: { name: 'Bob', miles: 950 }
};

function addMiles(userId, amount) {
  if (users[userId]) {
    users[userId].miles += amount;
  }
}

addMiles('user1', 300);
console.log(users);
