'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
  },

  down: async (queryInterface, Sequelize) => {
    // Si vous souhaitez annuler la suppression de la colonne dans une migration de désactivation
    await queryInterface.addColumn('user', 'role', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    });
  }
};
