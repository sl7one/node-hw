const fs = require('fs/promises');
const listContacts = require('./getAll');
const contactsPath = require('../db/contactsPath')();

const removeById = async id => {
  const data = await listContacts();
  const contactToReturn = data.filter(el => el.id === id);

  if (!contactToReturn.length) {
    throw new Error(`There is no contact ${id} to remove`);
  }

  const contactsToRewrite = data.filter(el => el.id !== id);
  await fs.writeFile(contactsPath, JSON.stringify(contactsToRewrite));
  return contactToReturn;
};

module.exports = removeById;
