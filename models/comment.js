const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const connection = require('../config/connection');

// var DataTypes = require('sequelize/lib/data-types');

class Comment extends Model { }

// const Comment = connection.define('comment',{
Comment.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment_text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    reference: {
      model: 'user',
      key: 'id'
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: 'post',
        key: 'id'
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