'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
  },

  down: async (queryInterface, Sequelize) => {
    // Si vous souhaitez annuler la suppression de la colonne dans une migration de désactivation
    await queryInterface.addColumn('user', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.fn('NOW'),
    });
    await queryInterface.addColumn('user', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.fn('NOW'),
    });
  }
};
