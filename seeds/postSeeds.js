const {
    Post
} = require('../models');

const postData = [{
        title: 'Test 0',
        content: 'This is test 0 because it is zero indexed.',
        user_id: 1

    },
    {
        title: 'Test 1',
        content: 'This is test 1 because it is zero indexed.',
        user_id: 2
    },
    {
        title: 'Test 2',
        content: 'This is test 2 because it is zero indexed.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;