const mongoose = require('mongoose')
const Chat = require('./models/chat.js')

main().then(() => {
    console.log('connection successful.')
}).catch((err) => {
    console.log(err)
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/demo_whatsapp');
}

const allChats = [
    {
        from: "suraj",
        to: "ravi",
        msg: "Hello, How are you.",
        created_at: new Date()
    },
    {
        from: "ravi",
        to: "suraj",
        msg: "I'm good, thanks! How about you?",
        created_at: new Date()
    },
    {
        from: "rahul",
        to: "amit",
        msg: "Are you coming to the meeting?",
        created_at: new Date()
    },
    {
        from: "amit",
        to: "rahul",
        msg: "Yes, I'll be there.",
        created_at: new Date()
    },
    {
        from: "nisha",
        to: "kiran",
        msg: "Did you finish the report?",
        created_at: new Date()
    },
    {
        from: "kiran",
        to: "nisha",
        msg: "Almost done, just a few more edits.",
        created_at: new Date()
    },
    {
        from: "priya",
        to: "vikas",
        msg: "Can we reschedule our call?",
        created_at: new Date()
    },
    {
        from: "vikas",
        to: "priya",
        msg: "Sure, how about tomorrow?",
        created_at: new Date()
    },
    {
        from: "anita",
        to: "rahul",
        msg: "Happy Birthday!",
        created_at: new Date()
    },
    {
        from: "rahul",
        to: "anita",
        msg: "Thank you!",
        created_at: new Date()
    },
    {
        from: "sneha",
        to: "karthik",
        msg: "Did you check the latest updates?",
        created_at: new Date()
    },
    {
        from: "karthik",
        to: "sneha",
        msg: "Yes, I did. Looks good.",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "deepa",
        msg: "Can you send me the files?",
        created_at: new Date()
    },
    {
        from: "deepa",
        to: "rohit",
        msg: "Sure, sending them now.",
        created_at: new Date()
    },
    {
        from: "alok",
        to: "meena",
        msg: "Let's catch up later.",
        created_at: new Date()
    },
    {
        from: "meena",
        to: "alok",
        msg: "Sounds good, see you!",
        created_at: new Date()
    },
    {
        from: "sunita",
        to: "akash",
        msg: "Are you free for a quick call?",
        created_at: new Date()
    },
    {
        from: "akash",
        to: "sunita",
        msg: "Yes, I am. Give me 5 minutes.",
        created_at: new Date()
    },
    {
        from: "vishal",
        to: "neha",
        msg: "Can you review my code?",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "vishal",
        msg: "Sure, I'll look at it today.",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);
