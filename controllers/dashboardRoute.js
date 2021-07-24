const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Post }, { model: Comment }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
        ...user,
        logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


//fill in here
router.get("/edit/:id", withAuth, async (req, res) =>{
    try {
        const postData = await Post.findOne(
            {
                where: {
                    id: req.params.id
                },
                attributes: [ "id", "post_title", "post_body"],
                include: [
                    {
                        model: Comment, attributes: ["id", "comment_text", "user_id", "post_id"],
                        include: {
                            model: User, attributes: ["user_name"]
                        }
                    }
                ]
            }
        )
        res.status(200).json(postData)

    } catch (err) {
        res.status(400).json(err)
    }
})



module.exports = router;