const User = require('./User');
const Post = require('./post');
const Comment = require('./comment');


User.hasMany(post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'

})
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'

})
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'

})
Post.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'

})
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
Comment.belongsTo(post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

module.exports = { User, Post, Comment };
