const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const connection = require('../config/connection');

// var DataTypes = require('sequelize/lib/data-types');

class Comment extends Model {}

const Comment = connection.define('comment',{
// Comment.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        reference:{
           model:'user',
           key:'id'
        },
      comment_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        reference:{
            model:'comment',
            key:'id'
        }
        }
      }
    },
      {
        sequelize: connection,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
      
})


module.exports = Comment;