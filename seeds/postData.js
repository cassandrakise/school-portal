[
{
    "name": "Juan",
    "post": "Parent Teacher conferences",
    "description": "Hi, when will information be sent out to parents regarding the data of fall parent and teacher conferences??",
    "urgent": "No"
},
{
    "name": "Howard",
    "post": "Spring Textbooks",
    "description": "Hello faculty! For the spring semester, will textbooks be provided for Algebra I or will we need to buy/rent Lori a copy?",
    "urgent": "No"
},
{
    "name": "Ziyan",
    "post": "Cyberbullying",
    "description": "I recently found out my child is experiencing some cyberbullying. Can someone please call me or provide me with a direct line to the school therapist? Thanks!!!!",
    "urgent": "Yes"
}
]

const seedPosts = () => User.bulkCreate(postData);

module.exports = seedPosts;