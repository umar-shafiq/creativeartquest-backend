'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NFTs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      drop_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      collection_name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING,
        defaultValue:null
      },
      pixels: {
        type: Sequelize.STRING
      },
      particle_angle: {
        type: Sequelize.STRING,
        defaultValue:null
      },
      fps: {
        type: Sequelize.STRING,
        defaultValue:null
      },
      particles: {
        type: Sequelize.STRING,
        defaultValue:null
      },
      frames: {
        type: Sequelize.STRING,
        defaultValue:null
      },
      thumbnail: {
        type: Sequelize.STRING,
        defaultValue:null
      },
    
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('NFTs');
  }
};


