/**
 * Promise consumption solves the problem of inversion of control.
 * promise returns a promise object which can used as javascript object.
 * once the promise is resolved and we want to execute some functions we can
 * use the .then() method
 * .then() method returns a promise
 *  */
function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started downloading from", url);
    setTimeout(function processDownloading() {
      let data = "Dummy data";
      console.log("Download completed");
      resolve(data);
      console.log("hello");
      // resolve("sanket");// these lines will not be executed as promise is fulfilled only once
      // resolve(12345);
    }, 7000);
  });
}

function writeFile(data) {
  return new Promise(function (resolve, reject) {
    console.log("Started writing ", data, " in a file");
    setTimeout(function processWriting() {
      let filename = "result.txt";
      console.log("File written successfully");
      resolve(filename);
    }, 3000);
  });
}

function uploadData(file, url) {
  return new Promise(function (resolve, reject) {
    console.log("Upload started on url", url, "filename is", file);
    setTimeout(function processUpload() {
      let result = "SUCCESS";
      console.log("Uploading done");
      resolve(result);
    }, 5000);
  });
}

console.log("Start");
let downloadPromise = fetchData("www.datadrive.com");
downloadPromise
  .then(function processDownload(value) {
    console.log("donwloading done with following value", value);
    return value;
  })
  .then(function processWrite(value) {
    return writeFile(value);
  })
  .then(function processUpload(value) {
    return uploadData(value, "www.drive.google.com");
  })
  .then(function process() {
    console.log("done");
  });

console.log("Ended");