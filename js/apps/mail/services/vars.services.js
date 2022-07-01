
const gEmails = {
    sent: [
        {
            id: 'e101',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com',
            status: 'sent'
          },
          {
            id: 'e102',
            subject: 'I want pasta!',
            body: 'Would love to eat?',
            isRead: true,
            sentAt: 1551133930575,
            to: 'charm@lion.com',
            status: 'sent'
          },

    ],
    inbox: [
        {
            id: 'e201',
            subject: 'Headache',
            body: 'I have a headache, please assist',
            isRead: false,
            sentAt: 1656677568426,
            from: 'sivan@sivanmail.com',
            labels: ['critical', 'family'],
            status: 'inbox'
          },
          {
            id: 'e202',
            subject: 'food',
            body: 'Candy sesame snaps sweet roll marshmallow carrot cake dessert. Oat cake icing jelly sweet cookie macaroon gummi bears icing jujubes. Cake sugar plum bear claw chupa chups bonbon oat cake bonbon.',
            isRead: false,
            sentAt: 1656677568326,
            from: 'ktitza@sivanmail.com',
            labels: ['spam', 'friends'],
            status: 'inbox'
          },
          {
            id: 'e203',
            subject: ' MORE FOOD',
            body: 'Tiramisu biscuit sweet roll danish cake cupcake sesame snaps jelly. Jelly beans donut sesame snaps icing candy canes halvah bear claw.',
            isRead: false,
            sentAt: 1656677568326,
            from: 'ktitza@amitmail.com',
            labels: ['memories', 'friends'],
            status: 'inbox'
          },
          {
            id: 'e204',
            subject: 'Get jinxed',
            body: 'Chupa chups sweet roll tart muffin tiramisu cheesecake ice cream toffee lollipop.',
            isRead: false,
            sentAt: 1656677568326,
            from: 'jinx@amitmail.com',
            labels: ['romantic'],
            status: 'inbox'
          }

    ],
    trash: [

    ],
    star: [

    ]
}

export const gVars  = {
    gEmails
}