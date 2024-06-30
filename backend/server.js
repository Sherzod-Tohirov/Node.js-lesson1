const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;
// set up static folder

app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const posts = [
  {
    id: 1,
    title: "Node.js",
    desc: "Node. js is a server-side platform based on the JavaScript Engine in Google Chrome. It was created by Ryan Dahl in 2009, and the most recent version is v0. 10.36. This is a cross-platform runtime environment for developing server-side and networking applications that are open source.",
  },
  {
    id: 2,
    title: "Express.js",
    desc: "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.",
  },
  {
    id: 3,
    title: "Nodemon",
    desc: "Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node .",
  },
  {
    id: 4,
    title: "MERN STACK",
    desc: "The MERN stack is a collection of technologies that help developers build robust and scalable web applications using JavaScript. The acronym “MERN” stands for MongoDB, Express, React, and Node. js, with each component playing a role in the development process.",
  },
];

app.get("/api/posts", (req, res) => {
  const query = req.query;
  if(query?.limit) {
    const limit = parseInt(query.limit);
    if(isNaN(limit) || limit <= 0) {
        res.send({message: 'Please provide valid query !'})
        return;
    };
    
    if(posts.length > limit) {
      res.send(posts.slice(0, limit));
      return;
    }
  }
  res.send(posts);
});

app.get("/api/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const filteredPosts = posts.filter(post => post.id === id);
    res.send(filteredPosts.length ? filteredPosts : {message: 'Post is not found !'});
});

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// app.get('/about', (req, res) => {
//   res.send('About page')
// });
app.listen(8000, () => {
  console.log(`Server is running on port ${port}`);
});
