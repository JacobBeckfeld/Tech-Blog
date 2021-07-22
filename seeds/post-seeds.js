const { Post } = require("../models");

const postData = [
    {
        post_title: "An awsome post!",
        post_body: "Awsome things have been posted here.",
        user_id: 1
    },
    {
        post_title: "Cool things under here",
        post_body: "I wrote some of the coolest text ever...",
        user_id: 2
    },
    {
        post_title: "A dull and boring post",
        post_body: "I'm a dull and boring person!",
        user_id: 3
    },
    {
        post_title: "Life is great!",
        post_body: "Wow I just love living!",
        user_id: 4
    },
    {
        post_title: "Wow this blog has a lot of weird posts!",
        post_body: "Man whoever wrote these posts need to rethink their life choices...",
        user_id: 5
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;