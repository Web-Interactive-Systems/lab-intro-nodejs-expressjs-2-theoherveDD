import todos from '../data/todos.json' assert { type: 'json' };
import express from 'express';
const app = express();

// Todo import `todos` from `../data/todos.json`
// todos will be used as an array of data

app.get("/ping", (req, res) => {
  res.json("pong");
});

// Todo: Implement an endpoint that handles two query parameters: 'limit' and 'search'
// Here are some examples:
//  /api/todos/?limit=30
//  /api/todos/?search='totam'
//  /api/todos/?limit=30&search='totam'
// The endpoint should filter and return todos based on 'limit' and 'search'
// limit: should limit the number of todos returned to the client to the value of limit
// search: should return only the todos that contains search text value in the title

app.get("/api/todos/", (req, res) => {
  console.log(req.query.limit);
  console.log(req.query.search);

  const { limit, search } = req.query;

  let todo = todos;

  if (limit) {
    const limitInt = +limit;
    // const lilitInt = parseInt(limit);
    if (typeof limitInt === 'number' && !isNaN(limitInt)) {
      todo = todo.slice(0, limitInt);
  }
}
  
if (search) {
  todo = todo.filter((e) => { return e.title.includes(search);});
}

    res.json(todo);

});

app.listen(3000, () => {
  console.log("Server is listening on port 3000....");
});
