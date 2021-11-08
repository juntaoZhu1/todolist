import Parse from 'parse';

const TodoItem = Parse.Object.extend('TodoItem');
const MovieItem = Parse.Object.extend('MovieItem');

export async function addTodoItem(params = {}) {
  const { name, completed, date } = params;
  console.log("APIparams:", params);
  const todoItem = new TodoItem({
    name: name,
    completed: completed,
    date: date,
  });

  console.log("api todoItem:", todoItem);
  return todoItem
        .save()
        .then(() => {
          console.log("saved");
        });
}

export async function deleteTodoItem(params = {}) {
  const { objectId } = params;

  const query = new Parse.Query(TodoItem);
  return query.get(objectId)
        .then((item) => {
          return item.destroy();
        });
}

export async function toggleTodoItem(params = {}) {
  const { objectId } = params;

  const query = new Parse.Query(TodoItem);
  return query.get(objectId)
        .then((item) => {
          return item.save("completed", !item.get("completed"));
        });
}


export async function getTodoItems(params = {}) {
  const { completed } = params;

  const query = new Parse.Query(TodoItem);

  if( completed ){
    query.equalTo('completed', completed);
  }
  return query.find().then(data => {
    return data.map(parseObj => parseObj.toJSON());
  });
}

export async function searchMovies(params = {}) {
  const { title, pagination } = params;
  // const { pageSize, currentPage } = pagination;
  const request="http://www.omdbapi.com/?apikey=9c02b03f&s=" + title;

  return fetch(request)
    .then((response) => {
      // console.log("response:", response);
      return response.json();
    })
    .then((data) => {
       return data;
     });
}

export async function getMovie(params = {}) {
  const { imdbId } = params;
  // const { pageSize, currentPage } = pagination;
  const request="http://www.omdbapi.com/?apikey=9c02b03f&i=" + imdbId;

  return fetch(request)
    .then((response) => {
      // console.log("response:", response);
      return response.json();
    })
    .then((data) => {
       return data;
     });
}




