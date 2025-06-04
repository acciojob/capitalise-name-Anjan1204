// Function to convert input to uppercase on blur
document.getElementById("fname").addEventListener("blur", function() {
  this.value = this.value.toUpperCase();
});
