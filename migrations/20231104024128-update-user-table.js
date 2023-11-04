'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'createdAt');
  },

  down: async (queryInterface, Sequelize) => {
    // Si vous souhaitez annuler la suppression de la colonne dans une migration de désactivation
    await queryInterface.addColumn('users', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    });
  }
};
