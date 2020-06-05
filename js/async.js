let axios = require('axios');

// basic async await usage
/*
function fetchItems(){
		return new Promise(function(resolve, reject){
				setTimeout(function(){
				var items = [1,2,3];
				resolve(items);
				},3000);
		});
}

async function logItems(){
		var resultItems = await fetchItems();
		console.log(resultItems);
}

logItems()
*/


// function becomes ASYNC because of the AWAITs inside.
/*
function fetchUser() {
  var url = 'https://jsonplaceholder.typicode.com/users/1'
  return axios.get(url).then(function(response) {
    return response;
  });
}

function fetchTodo() {
  var url = 'https://jsonplaceholder.typicode.com/todos/1';
  return axios.get(url).then(function(response) {
    return response;
  });
}

async function logTodoTitle() {
  var user = await fetchUser();
  if (user.id === 1) {
    var todo = await fetchTodo();
    console.log(todo.title); // delectus aut autem
  }
}

logTodoTitle()
*/
