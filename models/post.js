const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

class Post extends Model {}

const Post = connection.define('post', {
// Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        // allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'user',
            key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        reference:{
            model:'post',
            key:'id'
        }
    }
},
    {
        sequelize: connection,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',

    })


module.exports = Post;