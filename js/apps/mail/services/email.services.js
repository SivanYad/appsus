import { utilService } from '../../../services/util-service.js'
import { storageServices } from '../../../services/async-storage-service.js'
import { gVars } from './vars.services.js'

export const emailService = {
  query,
  remove,
  get,
  save,
  changeArray
}



const EMAIL_KEY = 'email'

_createEmails()




function query(criteria) {


  return storageServices.query(EMAIL_KEY).then((emails) => {
 
        const regex = new RegExp(criteria.txtSearch, 'i')
        emails = emails.filter((email) =>{
            if(criteria.isRead === undefined) {
            return regex.test(email.body) && email.status === criteria.status
                
            } else {
                console.log(criteria)
            return regex.test(email.body) &&
            email.isRead.toString() === criteria.isRead &&
            email.status === criteria.status
            }
            
        
        })
        return emails
    })
  }
// }

function changeArray(email, newArr) {
    console.log(gVars.gEmails)
    return storageServices.putArray(EMAIL_KEY, email, newArr)
}

function remove(emailId) {
    console.log('You are in remove')
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
    // console.log(gVars.gEmails)
    emails = gVars.gEmails
    utilService.saveToStorage(EMAIL_KEY, emails)
  }
  return emails
}
