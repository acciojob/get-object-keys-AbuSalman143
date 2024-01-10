//your JS code here. If required.
// Create a student object with a name property
const student = {
  name: "John Doe"
};

// Add getKeys method to the Object prototype
Object.prototype.getKeys = function() {
  // Get all the keys of the current object
  return Object.keys(this);
};

// Test the getKeys method on the student object
const keysArray = student.getKeys();

// Display the result
console.log(keysArray);

