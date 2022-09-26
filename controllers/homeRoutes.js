const router = require('express').Router();
const { User, Post, Comment  } = require('../models');
const withAuth = require('../utils/auth');

// withAuth middleware, get all userdata, post, and comments, 
// *** add calendar ????????
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/// GET Post 
// **** check attributes (created_at)
router.get('/post', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{
        model: Comment,
        attributes: ['id', 'name', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
            model: User,
            attributes: ['name']
        }
    },
    {
        model: User,
        attributes: ['name']
    }
]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      ...posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;
