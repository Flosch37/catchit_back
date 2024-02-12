'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Modifier la colonne userId dans la table Collections
    await queryInterface.changeColumn('Collections', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // nom de la table référencée
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });


    await queryInterface.changeColumn('Reviews', 'itemId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Items', // nom de la table référencée
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });


     await queryInterface.changeColumn('Reviews', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // nom de la table référencée
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    // Modifier la colonne userId dans la table UserItemOwned
    await queryInterface.changeColumn('UserItemOwneds', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // nom de la table référencée
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });


    await queryInterface.changeColumn('UserItemOwneds', 'itemId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Items', // nom de la table référencée
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.changeColumn('Items', 'collectionId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Collections', // nom de la table référencée
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

     



  async down (queryInterface, Sequelize) {
    // Revenir à la version précédente pour Collections
    await queryInterface.changeColumn('Collections', 'userId', {
    type: Sequelize.INTEGER,
    allowNull: true // Mettre 'false' si la colonne était 'NOT NULL' avant la migration
    // Supprimer les références si elles ont été ajoutées dans `up`
  });

  // Revenir à la version précédente pour Reviews pour objectId
  await queryInterface.changeColumn('Reviews', 'itemId', {
    type: Sequelize.INTEGER,
    allowNull: true // Mettre 'false' si la colonne était 'NOT NULL' avant la migration
    // Supprimer les références si elles ont été ajoutées dans `up`
  });

  // Revenir à la version précédente pour Reviews pour userId
  await queryInterface.changeColumn('Reviews', 'userId', {
    type: Sequelize.INTEGER,
    allowNull: true // Mettre 'false' si la colonne était 'NOT NULL' avant la migration
    // Supprimer les références si elles ont été ajoutées dans `up`
  });

  // Revenir à la version précédente pour UserObjectOwneds pour userId
  await queryInterface.changeColumn('UserItemOwneds', 'userId', {
    type: Sequelize.INTEGER,
    allowNull: true // Mettre 'false' si la colonne était 'NOT NULL' avant la migration
    // Supprimer les références si elles ont été ajoutées dans `up`
  });

  // Revenir à la version précédente pour UserObjectOwneds pour objectId
  await queryInterface.changeColumn('UserItemOwneds', 'itemId', {
    type: Sequelize.INTEGER,
    allowNull: true // Mettre 'false' si la colonne était 'NOT NULL' avant la migration
    // Supprimer les références si elles ont été ajoutées dans `up`
  });

  await queryInterface.changeColumn('Items', 'collectionId', {
    type: Sequelize.INTEGER,
    allowNull: true // Mettre 'false' si la colonne était 'NOT NULL' avant la migration
    // Supprimer les références si elles ont été ajoutées dans `up`
  });
}
,}
