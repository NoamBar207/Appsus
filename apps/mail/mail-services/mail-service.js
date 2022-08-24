import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const mailService = {
    query,
    updateReadState,
    updateStarredState,
    deleteMail,
    addMail,
    getById,
    ReadPrecentage,
    sort,
    updateMailStatus,
    updateMailCategory
}


const MAIL_KEY = 'mailsDB'

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const gMails = [
    {
        id: 'e130',
        subject: '#Fullstack Bootcamp',
        body: 'You have a new mention in Coding Academy sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Slack',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: []
    },
    {
        id: 'e131',
        subject: 'Weeklt study reminder',
        body: 'Bellow is a list of all studies that are currently available. dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'TAU Psychology',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['promotions']
    },
    {
        id: 'e132',
        subject: 'Introducing shapes',
        body: 'Earlier this year, we launched Flows to make building user flows easier. You told us you love the snap connectors and locked screens. This month, we made Flows even better! Now, you have the ability to show conditional flows, alternate branches, and actions in Zeplin. Read more about our April product updates, including: Shapes.',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Zeplin Crew',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['promotions']
    },
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimesipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Rachel Green',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['friends']
    },
    {
        id: 'e102',
        subject: 'how you doinggg!',
        body: 'Would love to catch up sometimesipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'joey tribbiani',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['friends']
    },
    {
        id: 'e109',
        subject: 'join us for 99$',
        body: 'Would you like to join dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Netflix',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['Promotions']
    },
    {
        id: 'e110',
        subject: 'Sahbak',
        body: 'we got jobs for you. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Sahbak',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['spam']
    },
    {
        id: 'e112',
        subject: 'Sahbak',
        body: 'we got jobs for you. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Sahbak',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['spam']
    },
    {
        id: 'e111',
        subject: 'Sahbak',
        body: 'we got jobs for you. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Sahbak',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['spam']
    },
    {
        id: 'e103',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimesipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: true,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Monica Geller',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['friends']
    },
    {
        id: 'e104',
        subject: 'lets push and commit!',
        body: 'Would love to catch up sometimesipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Noam Bar',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['friends', 'family']
    },
    {
        id: 'e105',
        subject: 'Sale- only today!',
        body: '50% off on all sometimesipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium ',
        isRead: true,
        isStarred: false,
        sentAt: 1251132930294,
        from: 'Adika',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['promotions','spam']
    },
    {
        id: 'e106',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimeipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: 1551133930594,
        from: 'pheobe buffay',
        to: 'user@appsus.com',
        status: 'sent',
        labels: []
    },
    {
        id: 'e121',
        subject: 'your order has been shipped',
        body: 'your order is up sometime i psum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: 1551133930594,
        from: 'Ali Express',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['promotions,spam']
    },
    {
        id: 'e122',
        subject: 'weekly study reminder',
        body: 'new study arrived i psum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: 1551133930594,
        from: 'Tau Psychology',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['promotions,spam']
    },
    {
        id: 'e123',
        subject: 'National Security',
        body: 'hello, up sometime i psum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: 1551133930594,
        from: 'National Security',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['promotions,spam']
    },
    {
        id: 'e124',
        subject: 'invite to GitHub',
        body: 'Would love to catch up sometime i psum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: true,
        sentAt: 1551133930594,
        from: 'Bar Ivri',
        to: 'barevry@gmail.com',
        status: 'sent',
        labels: ['friends']
    }
 

]

const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
    isRead: true,
    sentAt: 1551133930594,
    from: 'user@appsus.com',
    to: 'momo@momo.com',
    status: 'sent'
}

function updateReadState(mailToUpdate) {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    mailToUpdate.isRead = !mailToUpdate.isRead
    mails = mails.map(mail => mail.id === mailToUpdate.id ? mailToUpdate : mail)
    storageService.saveToStorage(MAIL_KEY, mails)
}


function query(critirea) {
    let mails
    mails = storageService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = gMails
        storageService.saveToStorage(MAIL_KEY, mails)
    }
    if (critirea.isStarred){
        mails = mails.filter(mail => mail.isStarred)
        return Promise.resolve(mails)
    } 
    mails = mails.filter(mail => mail.status === critirea.status && (mail.body.includes(critirea.txt) ||
        mail.subject.includes(critirea.txt) || mail.from.includes(critirea.txt)))
    if (critirea.category) mails=mails.filter(mail=>mail.labels.includes(critirea.category))
    if (critirea.isRead !== null && critirea.isRead !== 'all') {
        mails = mails.filter(mail => {
            return mail.isRead + '' === critirea.isRead
        })
    }

    return Promise.resolve(mails)
}

function _createMail(to, subject, body, statusDraft) {
    const id = utilService.makeId()
    let status
    if (!statusDraft) status = to + '' === 'user@appsus.com' ? 'inbox' : 'sent'
    else status = statusDraft
    const from = 'Lee Sadot'
    const sentAt = Date.now()
    const mail = {
        from,
        subject,
        body,
        isRead: false,
        isStarred: false,
        sentAt,
        to,
        status,
        id: id,
        removedAt: ''
    }
    return mail
}

function updateStarredState(mailToUpdate) {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    mailToUpdate.isStarred = !mailToUpdate.isStarred
    mails = mails.map(mail => mail.id === mailToUpdate.id ? mailToUpdate : mail)
    storageService.saveToStorage(MAIL_KEY, mails)
}

function deleteMail(mailToDelete) {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    const idx = mails.findIndex(mail => mail.id === mailToDelete.id)
    mails.splice(idx, 1)
    storageService.saveToStorage(MAIL_KEY, mails)
}

function addMail(to, subject, body, status) {
    const mail = _createMail(to, subject, body, status)
    let mails = storageService.loadFromStorage(MAIL_KEY)
    mails.unshift(mail)
    storageService.saveToStorage(MAIL_KEY, mails)
}

function getById(mailId) {
    const mails = storageService.loadFromStorage(MAIL_KEY)
    const mail = mails.find(_mail => _mail.id === mailId)
    return Promise.resolve(mail)
}

function ReadPrecentage() {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    if (!mails) mails = gMails
    const readMails = mails.reduce(function (acc, mail) {
        if (mail.isRead && mail.status === 'inbox') acc++
        return acc
    }, 0)
    const readQuant = readMails
    const precentage = (readQuant / mails.length) * 100
    return precentage
}

function sort(sortBy) {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    if (sortBy === 'date') {
        mails.sort((mail1, mail2) => mail2.sentAt - mail1.sentAt)
    }

    if (sortBy === 'subject') {
        mails.sort(function (mail1, mail2) {
            const subject1 = mail1.subject.toUpperCase();
            const subject2 = mail2.subject.toUpperCase();
            if (subject1 < subject2) {
                return -1;
            }
            if (subject1 > subject2) {
                return 1;
            }
            return 0;

        })
    }
    storageService.saveToStorage(MAIL_KEY, mails)
}

function updateMailStatus(mailToUpdate, status) {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    mailToUpdate.status = status
    mails = mails.map(mail => mail.id === mailToUpdate.id ? mailToUpdate : mail)
    storageService.saveToStorage(MAIL_KEY, mails)
}

function updateMailCategory(mailToUpdate,category){
    let mails = storageService.loadFromStorage(MAIL_KEY)
    mailToUpdate.labels.push(category)
    mails = mails.map(mail => mail.id === mailToUpdate.id ? mailToUpdate : mail )
    storageService.saveToStorage(MAIL_KEY, mails)
}