# DOM 1

Guided project for **DOM 1** Module.

In this project we will learn how to create a very simple Web API using `Node.js` and `Express`, and cover the basics of `server-side routing` and using global `middleware`.

The code for the guided project will be written in a single file for simplicity. We'll see ways to structure an API to make it more maintainable in upcoming lectures.

## Prerequisites

- [Insomnia](https://insomnia.rest) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

The [starter code](https://github.com/LambdaSchool/node-api1-guided) for this project is configured to run the server by typing `npm run server`. The server will restart automatically on changes.

Data for the API will be stored in memory using an array.

## How to Contribute

- clone the [starter code](https://github.com/LambdaSchool/node-api1-guided).
- create a solution branch: `git checkout -b solution`.
- add this repository as a remote: `git remote add solution https://github.com/LambdaSchool/node-api1-guided-solution`
- pull from this repository's `master` branch into the `solution` branch in your local folder `git pull solution master:solution --force`.

A this point you should have a `master` branch pointing to the student's repository and a `solution` branch with the latest changes added to the solution repository.

When making changes to the `solution` branch, commit the changes and type `git push solution solution:master` to push them to this repository.

When making changes to the `master` branch, commit the changes and use `git push origin master` to push them to the student's repository.

## Introduce Node and Express

Open Training Kit and do a quick introduction to Node and Express.

## Add .gitignore

Use `npx gitignore node` to generate a `.gitignore` file.

Explain what `npx` does.

Alternative the `gitignore` package can be installed globally with `npm i -g gitignore` and used without `npx`.

Add `.DS_Store` to the generated `.gitignore` for Mac users.

## Generate package.json

Use `npm init -y` to generate a fresh `package.json`. Explain what it does.

## Create Basic Express Server

Add an `index.js` file to the root folder with the following code:

```js
// introduce the `CommonJS` way of importing packages as you _require_ `express`.
const express = require("express"); // npm module, needs to be installed
// equivalent to import express from 'express';

const server = express(); // creates an http web server

const PORT = 5000;
// makes the web server listen for incoming traffic on port 5000
server.listen(PORT, () => {
  // this callback function runs after the server starts sucessfully
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
```

1. use npm to install `express`.
1. add `start` script using `node index.js`.
1. run the server with `npm start`.
1. note the logged message in the terminal.
1. navigate to `http://localhost:5000` in a browser.
1. note server responds `Cannot GET /`.
1. stop the server. Explain how to stop the server with `ctrl + c`.
1. refresh the browser window. Note that the response is different, there is no server responding to requests on that address.
1. start the server and refresh the browser window. The server is trying to process the request, but we haven't written any code to send a response, we'll do that next.

Keep the server running.

## Add `GET /` Endpoint

Add the following lines after `const server = express();`:

```js
// Endpoints

// introduce `routing` and explain how requests are routed to the correct
// `request handler function` based on the URL and HTTP verb on the request.
// Explain what `req` and `res` are.
server.get("/", (req, res) => {
  // name is not important (could be request, response), position is.
  res.json({ hello: "world" }); // explain .json()
});
```

Refresh browser. Same error, the server didn't restart.

## Make server restart on changes

- add `nodemon` as a dev dependency.
- add `server` script using `nodemon index.js`.
- stop the server.
- run the server using `npm run server`.
- make a `GET` to `/`.

**any questions?**

Time for students to practice what they have learned.

### You Do (estimated 5m to complete)

Ask students to write another _endpoint_ that will handle GET requests to `/hello` and send back the following JSON object:

```json
{ "hello": "Lambda School" }
```

One of many possible solutions:

```js
server.get("/hello", (req, res) => {
  res.json({ hello: "Lambda School" });
});
```

**time for a break, take 5 minutes**

Next, we'll learn how to add (the `C` in CRUD) a new hub.

## Add `POST /api/hubs` Endpoint

This endpoint expects an object with the `name` for the hub and returns the newly created hub. The API will generate an `id` automatically.

```js
server.post("/api/hubs", (req, res) => {
  // one way a client can send information is in the request body
  // axios.post(url, data) << the data will show up as req.body on the server
  const hubInfo = req.body; // needs use express.json() middleware

  // validate the data before saving it.
  hubInfo.id = shortid.generate();

  hubs.push(hubInfo);

  res.status(201).json(hubInfo);
});
```

1. add `let hubs = [];` array after creating the server. This array will hold our data.
1. add the `shortid` npm package.

Explain how to make POST requests using postman. Remember to **set body to raw and select JSON from the body type dropdown**, it defaults to TEXT.

Make a POST request to `/api/hubs`.

```json
{
  "lessonId": 1,
  "name": "node_intro",
  "cohort": "web 27",
  "messages": []
}
```

1. the error is because express doesn't know how to parse JSON from the body.
1. add `express.json()` middleware and explain what it does. Tell students we'll know more about how `middleware` works in the _middleware module_.
1. make the POST request again. Note that the hub we get back includes the `id`.

### You Do (estimated 5m to complete)

Ask students to create and test the endpoint to add a Lesson.

**any questions?**

Next, we'll learn how to retrieve (the `R` in CRUD) a list of hubs.

## Add `GET /api/hubs` Endpoint

This endpoint will return a list of hubs as a JSON formatted array.

```js
server.get("/api/hubs", (req, res) => {
  res.status(200).json(hubs);
});
```

Make a GET request to `/api/hubs` in Postman.

### You Do (estimated 5m to complete)

Ask students to create and test the endpoint to retrieve a list of Lessons.

**time for a break, take 5 minutes**

Next, we'll learn how to remove (the `D` in CRUD) a hub.

## Add `DELETE /api/hubs/:id` Endpoint

```js
server.delete("/api/hubs/:id", (req, res) => {
  const { id } = req.params; // explain req.params

  const deleted = hubs.find(hub => hub.id === id);

  if (deleted) {
    hubs = hubs.filter(hub => hub.id !== id);

    res.status(200).json(deleted);
  } else {
    res
      .status(404)
      .json({ message: "I cannot find the hub you are looking for" });
  }
});
```

1. make a `GET` request to `/api/hubs`, show the list of existing hubs.
1. try deleting with id `abc`. Should fail with a `404`.
1. use a valid `id` to delete a hub
1. make a `GET` request to `/api/hubs`. Note that the hub was deleted.

### You Do (estimated 5m to complete)

Ask students to create and test the endpoint to delete a Lesson.

At this point we have seen how to read information from the request `body` and `url parameters`.

Next, we'll bring it all together to update (the `U` in CRUD) a hub.

## Add `PATCH /api/hubs/:id` Endpoint

```js
server.patch("/api/hubs/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  let found = hubs.find(hub => hub.id === id);

  if (found) {
    Object.assign(found, changes);

    res.status(200).json(found);
  } else {
    res
      .status(404)
      .json({ message: "I cannot find the hub you are looking for" });
  }
});
```

Test the endpoint passing an updated name for the Hub. Note that the `messages` property is still there.

### You Do (estimated 5m to complete)

Ask students to create and test the endpoint to patch a Lesson.

## Add `PUT /api/hubs/:id` Endpoint

Explain the difference between `PATCH` and `PUT`. We'll use a `PUT` to update a hub and remove the extra `messages` property. **Remember to pass the id**.

```js
server.put("/api/hubs/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  let index = hubs.findIndex(hub => hub.id === id);

  if (index !== -1) {
    hubs[index] = changes;

    res.status(200).json(hubs[index]);
  } else {
    res
      .status(404)
      .json({ message: "I cannot find the hub you are looking for" });
  }
});
```

Test the endpoint passing a Hub without the messages. Notice it's the messages property is removed.

### You Do (estimated 5m to complete)

Ask students to create and test the endpoint to update a Lesson.

### Optional You Do (estimated 5m to complete)

Ask students to create and test an endpoint to retrieve the details of a Hub.

One possible solution:

```js
server.get("/api/hubs/:id", (req, res) => {
  const found = hubs.find(hub => hub.id === id);

  if (found) {
    res.status(200).json(found);
  } else {
    res
      .status(404)
      .json({ message: "I cannot find the hub you are looking for" });
  }
});
```

Test the endpoint.

## For Next Lesson

- review promises.
