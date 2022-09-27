const {Post} = require('../models');
const postData = [
{
    title: "Parent Teacher conferences",
    post_text: "Hi, when will information be sent out to parents regarding the data of fall parent and teacher conferences??",
    user_id: 3
},
{
    title: "Spring Textbooks",
    post_text: "Hello faculty! For the spring semester, will textbooks be provided for Algebra I or will we need to buy/rent Lori a copy?",
    user_id: 1
},
{
    title: "Cyberbullying",
    post_text: "I recently found out my child is experiencing some cyberbullying. Can someone please call me or provide me with a direct line to the school therapist? Thanks!!!!",
    user_id: 2
}
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;