const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");
//get all comments
router.get("/", async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.get("/:id", async (req, res) => {
    try {
        const commentData = await Comment.findAll(
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.post("/", withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.put("/:id", withAuth, async, (req, res) => {
    try {
        const updateComment = await Comment.update(
            {
            comment_text: req.body.comment_text
            },
        where: 
        {
            id: req.params.id
        });
        res.status(200).json(updateComment)
    }
})

