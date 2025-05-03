// Travel Twin Matching (basic logic)
const users = [
  { name: 'Alice', preferences: ['Paris', 'Museums'], id: 1 },
  { name: 'Bob', preferences: ['Paris', 'Nightlife'], id: 2 },
  { name: 'Charlie', preferences: ['Tokyo', 'Technology'], id: 3 }
];

function findTwins(userPref) {
  return users.filter(user =>
    user.preferences.some(pref => userPref.includes(pref))
  );
}

// Example
console.log('Matched Travel Twins:', findTwins(['Paris']));
