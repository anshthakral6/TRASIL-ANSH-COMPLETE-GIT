// Simple group planner mock
let groups = [];

function createGroup(name, members) {
  groups.push({ name, members, itinerary: [] });
}

function addToItinerary(groupName, activity) {
  const group = groups.find(g => g.name === groupName);
  if (group) {
    group.itinerary.push(activity);
  }
}

// Example
createGroup('Paris Squad', ['Alice', 'Bob']);
addToItinerary('Paris Squad', 'Eiffel Tower');
console.log(groups);
