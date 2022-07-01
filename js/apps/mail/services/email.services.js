import { utilService } from '../../../services/util-service.js'
import { storageServices } from '../../../services/async-storage-service.js'
import { gVars } from './vars.services.js'

export const emailService = {
  query,
  remove,
  get,
  save,
}



const EMAIL_KEY = 'email'

_createEmails()



function query(criteria) {

  return storageServices.query(EMAIL_KEY).then((emails) => {
    emails = emails[criteria.status]
    return emails
  })
}

function remove(emailId) {
  return storageServices.remove(EMAIL_KEY, emailId)
}

function get(emailId) {
  return storageServices.get(EMAIL_KEY, emailId)
}

function save(email) {
  if (email.id) return storageServices.put(EMAIL_KEY, email)
  else return storageServices.post(EMAIL_KEY, email)
}

function _createEmails() {
  let emails = utilService.loadFromStorage(EMAIL_KEY)
  if (!emails || !emails.length) {
    console.log(gVars.gEmails)
    emails = gVars.gEmails
    utilService.saveToStorage(EMAIL_KEY, emails)
  }
  return emails
}
