module.exports = app => {
  const customerWalletsDB = require('../data/customer-wallets.json');
  const controller = {};

  controller.listCustomerWallets = (req, res) => res.status(200).json(customerWalletsDB);

  return controller;
}