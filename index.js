const operations = require('./contacts/operations.js');

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const data = await operations.getAll();
      console.table(data);
      break;

    case 'get':
      const contact = await operations.getById(id);
      if (!contact) {
        throw new Error(`Can not find contact by ${id}`);
      }
      console.log(contact);
      break;

    case 'add':
      const contactToAdd = await operations.addContact(name, email, phone);
      console.log('Contact has been succsessefull added', contactToAdd);
      break;

    case 'remove':
      const contactToRemove = await operations.removeById(id);
      console.log('Contact has been succsessefull removed', contactToRemove);
      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
