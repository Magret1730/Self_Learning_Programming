// const express = require('express');
import express from 'express';
const router = express.Router();

// app.get('/', (req, res) => {
// //     res.send('Hello World...');
//     res.sendFile(path.join(__dirname, 'public', 'index.html')); // It takes in an absolute file
// });

// app.get('/about', (req, res) => {
//     // res.send('About...');
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'}
];

// GET all posts
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);

    // if (!isNaN(limit) && limit > 0) {
    //     res.status(200).json(posts.slice(0, limit));
    // } else {
    //     res.status(200).json(posts);
    // }

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    } 
    res.status(200).json(posts);
});

// GET single post
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // res.status(200).json(posts.filter((post) => post.id === id));
    const post = posts.find((post) => post.id === id);

    // if (!post) {
    //     res.status(404).json({msg: `A post with the id of ${id} was not found`});
    // } else {
    //     res.status(200).json(post);
    // }

    if (!post) {
        return res
            .status(404)
            .json({msg: `A post with the id of ${id} was not found`});
    }
    res.status(200).json(post);
});

// Create new posts
router.post('/', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    if (!newPost.title) {
        return res.status(400).json({ msg: 'Add title'});
    }

    posts.push(newPost);
    res.status(201).json(posts);
});

// Update posts
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res
            .status(404)
            .json({msg: `A post with the id of ${id} was not found`});
    }

    post.title = req.body.title;
    res.status(200).json(posts);
});

// Delete posts
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res
            .status(404)
            .json({msg: `A post with the id of ${id} was not found`});
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
});

// module.exports = router;
export default router;
