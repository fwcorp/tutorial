/*function getData() {
		return new Promise(function(resolve, reject){
				var data = 100;
				if(true){
						resolve(data);
				}
				reject(new Error("Request failed"));
		});
}

getData().then(function(resolvedData){
		console.log(resolvedData);
});
*/

/*
new Promise(function(resolve, reject){
  setTimeout(function() {
    resolve(1);
  }, 2000);
})
.then(function(result) {
  console.log(result); // 1
  return result + 10;
})
.then(function(result) {
  console.log(result); // 11
  return result + 20;
})
.then(function(result) {
  console.log(result); // 31
});
*/

function parseValue(){
		return new Promise(function(resolve,reject){
				resolve(3);
		});
}

function auth(result){
		return new Promise(function(resolve,reject){
				console.log("result is : " + result);
				resolve(1);
		});
}

parseValue()
.then(auth)
