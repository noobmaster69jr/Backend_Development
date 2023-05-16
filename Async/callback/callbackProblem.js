function fetchCustom(url, fn) {
  console.log("starting download");
  setTimeout(function process() {
    let response = "successful";
    fn(response);
  }, 1000);
}

function writeFile(data, fn) {
  setTimeout(function process() {
    console.log("Started writing");
    fn("output.txt");
  }, 2000);
}

function uploadFile(filename, newurl, fn) {
  setTimeout(function process() {
    console.log("The file ", filename, " has been started to upload");
    fn(newurl);
  }, 3000);
}

fetchCustom("www.google.com", function download(response) {
  console.log("the response is ", response);
  writeFile(response, function writeCallback(filename) {
    console.log("Finished writing ", filename);
    uploadFile(filename, "yahoo.com", function uploadCallback(newUrl) {
      console.log("The file has been successfully uploaded to ", newUrl);

      console.log("Execution completed");
    });
  });
});
