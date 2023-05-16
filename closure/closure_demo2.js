function todo(task) {
  console.log("started");
  setTimeout(function fun() {
    console.log("completed ", task);
  }, 1000);
  task = "work"
  console.log("ended");
}

console.log("Starting");
todo("assignments");
console.log("Ending");


