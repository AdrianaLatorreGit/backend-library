"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("users", "image", {
            type: Sequelize.STRING,
            allowNull: false,
            after: "email",
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn("users", "image");
    },
};
