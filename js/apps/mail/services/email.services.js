import { utilService } from '../../../services/util-service.js';
import { storageServices } from '../../../services/async-storage-service.js';



export const emailService = {
    query,
    remove,
    get,
    save,
    
}

const loggedinUser = {
  email: 'user@appsus.com',
  fullname: 'Mahatma Appsus',
}

const gEmails = [{
  id: 'e101',
  subject: 'Miss you!',
  body: 'Would love to catch up sometimes',
  isRead: false,
  sentAt: 1551133930594,
  to: 'momo@momo.com',
},
{
  id: 'e102',
  subject: 'I want pasta!',
  body: 'Would love to eat?',
  isRead: true,
  sentAt: 1551133930575,
  to: 'charm@lion.com',
}]

const EMAIL_KEY = 'email';
_createEmails()

function query() {
    return storageServices.query(EMAIL_KEY).then(emails => {
        // if (!emails || !emails.length) {
        //     emails = _createEmails()
        // }
        return emails
    })
}

function remove(emailId) {
    return storageServices.remove(EMAIL_KEY, emailId)
}

function get(emailId) {
    return storageServices.get(emailId, emailId)
}

function save(email) {
    if (email.id) return storageServices.put(EMAIL_KEY, email)
    else return storageServices.post(EMAIL_KEY, email)
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAIL_KEY);
    if (!emails || !emails.length) {

        utilService.saveToStorage(EMAIL_KEY,gEmails)
    }
    return emails
}
