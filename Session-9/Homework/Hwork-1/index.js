let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Promise is da best"), 5000);
  });
  promise.then(// resolve runs the first function in .then
    result => alert(result), // shows "done!" after 1 second
    error => alert(error)// doesn't run
  );
 
  async function test() {
      return abc = await new Promise(function(resolve, reject) {
        setTimeout(() => resolve("Promise is da best 1"), 6000);
      });
  }
  
  test().then(alert);
