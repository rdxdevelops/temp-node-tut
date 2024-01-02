const { readFile, writeFile } = require("fs");

console.log("start");
//the below code doesn't contain 'utf8' argument, so it gives a buffer as the result
// readFile("./content/first.txt", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
// });

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task");
