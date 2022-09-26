const router = require('express').Router();
const { User, Post, Comment  } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all posts
router.get('/', (req, res) => {
    Post.findAll({
            attributes: ['id', 'title', 'name', 'post_text', 'user_id', 'post_id' ],
            order: [
                ['created_at', 'DESC']
            ],
            include: [{
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'comment_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['name'],
                    },
                },
            ],
        })
        .then((PostData) => res.json(PostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create a post
router.post('/', withAuth, (req, res) => {
    console.log('Creating Post');
    Post.create({
            title: req.body.title,
            post_text: req.body.post_text,
            user_id: req.session.user_id
            // date created????************
        })
        .then((PostData) => res.json(PostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update a post
router.put('/:id', withAuth, (req, res) => {
    Post.update({
            title: req.body.title,
            post_text: req.body.post_text,
        }, {
            where: {
                id: req.params.id,
            },
        })
        .then((PostData) => {
            if (!PostData) {
                res.status(404).json({
                    message: 'No post found with this id'
                });
                return;
            }
            res.json(PostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Delete a post
router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((PostData) => {
            if (!PostData) {
                res.status(404).json({
                    message: 'No post found with this id'
                });
                return;
            }
            res.json(PostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;