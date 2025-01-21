export const user = [
    {
        userId: 1,
        name: "Root",
        avatar: "/avatar.png",
        email: "yjoczm.jamguzvp@demo.net",
    },
    {
        userId: 2,
        name: "John Doe",
        avatar: "/avatar.png",
        email: "johndoe@example.com",
    },
    {
        userId: 3,
        name: "Qnayic Kipcmaop",
        avatar: "/avatar.png",
        email: "qnayic.kipcmaop@demo.net",
    },
    {
        userId: 4,
        name: "Pzqnbs Qjlwsupc",
        avatar: "/avatar.png",
        email: "pzqnbs.qjlwsupc@example.com",
    },
    {
        userId: 5,
        name: "Zpcqjg Lwonflev",
        avatar: "/avatar.png",
        email: "zpcqjg.lwonflev@mail.com",
    },
    {
        userId: 6,
        name: "Lseuqp Iigyavke",
        avatar: "/avatar.png",
        email: "lseuqp.iigyavke@demo.net",
    },
    {
        userId: 7,
        name: "Sqhccw Wrqfvaop",
        avatar: "/avatar.png",
        email: "sqhccw.wrqfvaop@mail.com",
    },
    {
        userId: 8,
        name: "Qtfvff Jdnngort",
        avatar: "/avatar.png",
        email: "qtfvff.jdnngort@demo.net",
    },
    {
        userId: 9,
        name: "Nmihce Yuvcpqwj",
        avatar: "/avatar.png",
        email: "nmihce.yuvcpqwj@test.org",
    },
    {
        userId: 10,
        name: "Mdcttk Crgddeed",
        avatar: "/avatar.png",
        email: "mdcttk.crgddeed@test.org",
    },
    {
        userId: 11,
        name: "Qlrxix Umgkgohu",
        avatar: "/avatar.png",
        email: "qlrxix.umgkgohu@test.org",
    },
    {
        userId: 12,
        name: "Ziuezj Lmmgzrfm",
        avatar: "/avatar.png",
        email: "ziuezj.lmmgzrfm@demo.net",
    },
    {
        userId: 13,
        name: "Tupejv Cijtmuhu",
        avatar: "/avatar.png",
        email: "tupejv.cijtmuhu@example.com",
    },
    {
        userId: 14,
        name: "Ebmkxh Homeotvq",
        avatar: "/avatar.png",
        email: "ebmkxh.homeotvq@demo.net",
    },
    {
        userId: 15,
        name: "Jwqelx Awzmnzuq",
        avatar: "/avatar.png",
        email: "jwqelx.awzmnzuq@demo.net",
    },
];

export const chat = {
    user: user[1],
    messages: [
        {
            sender: user[1],
            message:
                "Hi, I need help with setting up Tailwind CSS in my project.",
            createAt: "2025-01-21T10:00:00Z",
        },
        {
            sender: user[0],
            message:
                "Sure, I can help with that! Are you using a framework like React or just plain HTML?",
            createAt: "2025-01-21T10:01:00Z",
        },
        {
            sender: user[1],
            message:
                "I'm using React. I want to integrate Tailwind for styling components.",
            createAt: "2025-01-21T10:02:00Z",
        },
        {
            sender: user[0],
            message:
                "Great! You can install Tailwind CSS using npm. Run `npm install -D tailwindcss postcss autoprefixer`, then create a Tailwind configuration file with `npx tailwindcss init`. Would you like the steps for configuring your React project as well?",
            createAt: "2025-01-21T10:03:00Z",
        },
        {
            sender: user[0],
            message:
                "Great! You can install Tailwind CSS using npm. Run `npm install -D tailwindcss postcss autoprefixer`, then create a Tailwind configuration file with `npx tailwindcss init`. Would you like the steps for configuring your React project as well?",
            createAt: "2025-01-21T10:03:00Z",
        },
        {
            sender: user[1],
            message: "Yes, that would be helpful. Thanks!",
            createAt: "2025-01-21T10:04:00Z",
        },
        {
            sender: user[1],
            message: "Yes, that would be helpful. Thanks!",
            createAt: "2025-01-21T10:04:00Z",
        },
    ],
};

export const previews = [
    // {
    //     chatId: 1,
    //     user: {
    //         userId: 1,
    //         name: "Yjoczm Jamguzvp",
    //         avatar: "/avatar.png",
    //         email: "yjoczm.jamguzvp@demo.net",
    //     },
    //     lastMessage: "Looking forward to it.",
    // },
    {
        chatId: 2,
        user: user[1],
        lastMessage: chat.messages[chat.messages.length - 1].message,
    },
    {
        chatId: 3,
        user: {
            userId: 3,
            name: "Qnayic Kipcmaop",
            avatar: "/avatar.png",
            email: "qnayic.kipcmaop@demo.net",
        },
        lastMessage: "Happy to help!",
    },
    {
        chatId: 4,
        user: {
            userId: 4,
            name: "Pzqnbs Qjlwsupc",
            avatar: "/avatar.png",
            email: "pzqnbs.qjlwsupc@example.com",
        },
        lastMessage: "What's your plan for today?",
    },
    {
        chatId: 5,
        user: {
            userId: 5,
            name: "Zpcqjg Lwonflev",
            avatar: "/avatar.png",
            email: "zpcqjg.lwonflev@mail.com",
        },
        lastMessage: "What do you think about this?",
    },
    {
        chatId: 6,
        user: {
            userId: 6,
            name: "Lseuqp Iigyavke",
            avatar: "/avatar.png",
            email: "lseuqp.iigyavke@demo.net",
        },
        lastMessage: "I'll call you later.",
    },
    {
        chatId: 7,
        user: {
            userId: 7,
            name: "Sqhccw Wrqfvaop",
            avatar: "/avatar.png",
            email: "sqhccw.wrqfvaop@mail.com",
        },
        lastMessage: "What do you think about this?",
    },
    {
        chatId: 8,
        user: {
            userId: 8,
            name: "Qtfvff Jdnngort",
            avatar: "/avatar.png",
            email: "qtfvff.jdnngort@demo.net",
        },
        lastMessage: "Let me know when you're free.",
    },
    {
        chatId: 9,
        user: {
            userId: 9,
            name: "Nmihce Yuvcpqwj",
            avatar: "/avatar.png",
            email: "nmihce.yuvcpqwj@test.org",
        },
        lastMessage: "What do you think about this?",
    },
    {
        chatId: 10,
        user: {
            userId: 10,
            name: "Mdcttk Crgddeed",
            avatar: "/avatar.png",
            email: "mdcttk.crgddeed@test.org",
        },
        lastMessage: "Can you send me the file?",
    },
    {
        chatId: 11,
        user: {
            userId: 11,
            name: "Qlrxix Umgkgohu",
            avatar: "/avatar.png",
            email: "qlrxix.umgkgohu@test.org",
        },
        lastMessage: "What's your plan for today?",
    },
    {
        chatId: 12,
        user: {
            userId: 12,
            name: "Ziuezj Lmmgzrfm",
            avatar: "/avatar.png",
            email: "ziuezj.lmmgzrfm@demo.net",
        },
        lastMessage: "See you tomorrow!",
    },
    {
        chatId: 13,
        user: {
            userId: 13,
            name: "Tupejv Cijtmuhu",
            avatar: "/avatar.png",
            email: "tupejv.cijtmuhu@example.com",
        },
        lastMessage: "Thanks a lot!",
    },
    {
        chatId: 14,
        user: {
            userId: 14,
            name: "Ebmkxh Homeotvq",
            avatar: "/avatar.png",
            email: "ebmkxh.homeotvq@demo.net",
        },
        lastMessage: "Let's catch up soon!",
    },
    {
        chatId: 15,
        user: {
            userId: 15,
            name: "Jwqelx Awzmnzuq",
            avatar: "/avatar.png",
            email: "jwqelx.awzmnzuq@demo.net",
        },
        lastMessage: "Sure, no problem!",
    },
];
