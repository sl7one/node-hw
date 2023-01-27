const listContacts = require('./getAll');

const getById = async id => {
  const contacts = await listContacts();

  const contact = contacts.find(el => el.id === id);

  return contact || null;
};

module.exports = getById;
