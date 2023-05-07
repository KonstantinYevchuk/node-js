const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");
const contacts = require('./db/contacts.json')
const contactsPath = require('./contacts.js');
// console.log(contactsPath);

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
      case "list":
        const allContacts = await contactsPath.listContacts(); 
        return console.log(allContacts)
  
      case "getById":
        const contactId = await contactsPath.getContactById(id)
        return console.log(contactId);
        
      case "add":
        const addContact = await contactsPath.addContact({ name, email, phone })
        return console.log(addContact)
  
      case "remove":
        const deleteContactById = await contactsPath.removeContact(id)
        return console.log(deleteContactById)
      case "update":
        const updateContactById = await contactsPath.updateContact(id, {
            name,
            email,
            phone,
          })
          return console.log(updateContactById)
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  }
//   invokeAction({action: 'list'})
// invokeAction({ action: 'getById', id: 'AeHIrLTr6JkxGE6SN-0Rw' })

const arr = hideBin(process.argv);

const {argv} = yargs(arr);
invokeAction(argv);