'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('user', 'createdAt');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('user', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    });
  }
};
