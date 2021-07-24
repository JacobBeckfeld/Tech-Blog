const router = require('express').Router();
const { Post, User } = require('../models');


router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['user_name'],
                },
            ],
        });
        // console.log(postData)
    const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts)
    res.render('homepage', { 
        posts, 
        logged_in: req.session.logged_in 
    });
    } catch (err) {
    res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                model: User,
                attributes: ['user_name'],
                },
            ],
        });

    const post = postData.get({ plain: true });

    res.render('post', {
        ...post,
        logged_in: req.session.logged_in
    });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {

    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;