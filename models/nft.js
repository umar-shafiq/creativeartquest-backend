'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NFT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  
  };
  NFT.init({
    drop_name: DataTypes.INTEGER,
    description: DataTypes.STRING,
    collection_name: DataTypes.STRING,
    pixels: DataTypes.STRING,
    particle_angle: DataTypes.STRING,
    fps: DataTypes.STRING,
    particles: DataTypes.STRING,
    frames: DataTypes.STRING,
    image: DataTypes.STRING,
    thumbnail:DataTypes.STRING,
    
    
    
  }, {
    sequelize,
    modelName: 'NFT',
  });
  return NFT;
};