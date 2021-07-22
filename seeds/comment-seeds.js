const { Comment } = require("../models");

const commentData = [
    {
        comment_text: "Oh wow! What a cool post!",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: "More cool things!",
        user_id: 1,
        post_id: 2,
    },
    {
        comment_text: "This post is bitchin!",
        user_id: 3,
        post_id: 4,
    },
    {
        comment_text: "You post too much!",
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: "Look at this comment!",
        user_id: 3,
        post_id: 3,
    },
    {
        comment_text: "Your stuff is bannanas!",
        user_id: 5,
        post_id: 1,
    },
    {
        comment_text: "This post it the coolest!",
        user_id: 2,
        post_id: 3,
    },
    {
        comment_text: "I learned so much from this post!",
        user_id: 5,
        post_id: 2,
    },
    {
        comment_text: "I love you Jesus is a bop",
        user_id: 4,
        post_id: 2,
    },
    {
        comment_text: "I love you moses deserved a grammy",
        user_id: 4,
        post_id: 5,
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;