const fs = require('fs/promises');
const contactsPath = require('../db/contactsPath')();

const listContacts = async () => {
  const dataString = await fs.readFile(contactsPath, 'utf-8');

  const data = JSON.parse(dataString);
  return data;
};

module.exports = listContacts;
