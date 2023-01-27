const { v4 } = require('uuid');
const fs = require('fs/promises');
const listContacts = require('./getAll');
const contactsPath = require('../db/contactsPath')();

const addContact = async (name, email, phone) => {
  const data = await listContacts();
  const newContact = { id: v4(), name, email, phone };
  data.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(data));
  return newContact;
};

module.exports = addContact;
