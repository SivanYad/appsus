import { utilService } from '../../../services/util-service.js'
import { storageServices } from '../../../services/async-storage-service.js'

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

const gEmails = [
  {
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
  },
]

const gRecievedMails = [
  {
    id: 'e201',
    subject: 'Headache',
    body: 'I have a headache, please assist',
    isRead: false,
    sentAt: 1656677568426,
    from: 'sivan@sivanmail.com',
    labels: ['critical', 'family'],
  },
  {
    id: 'e202',
    subject: 'food',
    body: 'Candy sesame snaps sweet roll marshmallow carrot cake dessert. Oat cake icing jelly sweet cookie macaroon gummi bears icing jujubes. Cake sugar plum bear claw chupa chups bonbon oat cake bonbon.',
    isRead: false,
    sentAt: 1656677568326,
    from: 'ktitza@sivanmail.com',
    labels: ['spam', 'friends'],
  },
  {
    id: 'e203',
    subject: ' MORE FOOD',
    body: 'Tiramisu biscuit sweet roll danish cake cupcake sesame snaps jelly. Jelly beans donut sesame snaps icing candy canes halvah bear claw.',
    isRead: false,
    sentAt: 1656677568326,
    from: 'ktitza@amitmail.com',
    labels: ['memories', 'friends'],
  },
  {
    id: 'e204',
    subject: 'Get jinxed',
    body: 'Chupa chups sweet roll tart muffin tiramisu cheesecake ice cream toffee lollipop.',
    isRead: false,
    sentAt: 1656677568326,
    from: 'jinx@amitmail.com',
    labels: ['romantic'],
  },
]

const EMAIL_KEY = 'email'
const RECIEVED_KEY = 'recievedMails'
_createEmails()

function query(criteria = { status: 'all' }) {
  return storageServices.query(EMAIL_KEY).then((emails) => {
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
  return storageServices.get(EMAIL_KEY, emailId)
}

function save(email) {
  if (email.id) return storageServices.put(EMAIL_KEY, email)
  else return storageServices.post(EMAIL_KEY, email)
}

function _createEmails() {
  let emails = utilService.loadFromStorage(EMAIL_KEY)
  if (!emails || !emails.length) {
    emails = [...gEmails, ...gRecievedMails]
    utilService.saveToStorage(EMAIL_KEY, emails)
  }
  return emails
}
