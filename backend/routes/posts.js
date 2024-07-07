const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const { writeDataToFile, readDataFromFile } = require("../utils/functions");
const router = express.Router();
const dbPath = path.join(__dirname, '../db/db.json');
  const {posts} = readDataFromFile(dbPath);
  router.get("/", (req, res) => {
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
    res.send({status:200, data:(posts?.length ? posts : [])});
  });
  
  router.get("/:id", (req, res) => {
      const id = parseInt(req.params.id);
      const filteredPosts = posts.filter(post => post.id === id);
      res.send(filteredPosts.length ? filteredPosts : {message: 'Post is not found !'});
  });

  router.post('/', (req, res) => {
        if(req.body) {
            req.body.id = uuidv4();
            posts.push(req.body);
            writeDataToFile(posts, dbPath);
            res.json({status: 201, data: posts});
            return;
        }

        res.send({error: "Something went wrong !"})
  });

  router.put('/:id', (req, res) => {
        if(req.body) {
             const id = req.params?.id;
             const {posts} = readDataFromFile(dbPath);
             const foundPost = posts.find((post) => post.id === id);
             if(foundPost) {
                foundPost.title = req.body.title;
                foundPost.desc = req.body.desc;
                writeDataToFile(posts, dbPath);
                res.status(200).json({status: 200, data: posts});
             }else {
                res.status(400).json({error: "Post is not found !", status: 400});
             }
        }
  });

module.exports = router;