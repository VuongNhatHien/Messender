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
    // {
    //     userId: 12,
    //     name: "Ziuezj Lmmgzrfm",
    //     avatar: "/avatar.png",
    //     email: "ziuezj.lmmgzrfm@demo.net",
    // },
    // {
    //     userId: 13,
    //     name: "Tupejv Cijtmuhu",
    //     avatar: "/avatar.png",
    //     email: "tupejv.cijtmuhu@example.com",
    // },
    // {
    //     userId: 14,
    //     name: "Ebmkxh Homeotvq",
    //     avatar: "/avatar.png",
    //     email: "ebmkxh.homeotvq@demo.net",
    // },
    // {
    //     userId: 15,
    //     name: "Jwqelx Awzmnzuq",
    //     avatar: "/avatar.png",
    //     email: "jwqelx.awzmnzuq@demo.net",
    // },
];

export const chat = [
    {
        chatId: 1,
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
                    "Great! You can install Tailwind CSS using npm. Run npm install -D tailwindcss postcss autoprefixer, then create a Tailwind configuration file with npx tailwindcss init. Would you like the steps for configuring your React project as well?",
                createAt: "2025-01-21T10:03:00Z",
            },
            {
                sender: user[0],
                message:
                    "Great! You can install Tailwind CSS using npm. Run npm install -D tailwindcss postcss autoprefixer, then create a Tailwind configuration file with npx tailwindcss init. Would you like the steps for configuring your React project as well?",
                createAt: "2025-01-21T10:03:00Z",
            },
            {
                sender: user[1],
                message: "Yes, that would be helpful. Thanks!",
                createAt: "2025-01-21T10:04:00Z",
            },
            {
                sender: user[1],
                message: "Thanks",
                createAt: "2025-01-21T10:04:00Z",
            },
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
                    "Great! You can install Tailwind CSS using npm. Run npm install -D tailwindcss postcss autoprefixer, then create a Tailwind configuration file with npx tailwindcss init. Would you like the steps for configuring your React project as well?",
                createAt: "2025-01-21T10:03:00Z",
            },
            {
                sender: user[0],
                message:
                    "Great! You can install Tailwind CSS using npm. Run npm install -D tailwindcss postcss autoprefixer, then create a Tailwind configuration file with npx tailwindcss init. Would you like the steps for configuring your React project as well?",
                createAt: "2025-01-21T10:03:00Z",
            },
            {
                sender: user[1],
                message: "Yes, that would be helpful. Thanks!",
                createAt: "2025-01-21T10:04:00Z",
            },
            {
                sender: user[1],
                message: "Thanks",
                createAt: "2025-01-21T10:04:00Z",
            },
        ],
    },
    {
        chatId: 2,
        user: user[2],
        messages: [
            {
                sender: user[0],
                message: "How can I reset my password?",
                createAt: "2025-01-21T11:00:00Z",
            },
            {
                sender: user[2],
                message:
                    "You can reset it by clicking on 'Forgot Password' on the login page.",
                createAt: "2025-01-21T11:01:00Z",
            },
        ],
    },
    {
        chatId: 3,
        user: user[3],
        messages: [

        ],
    },
    {
        chatId: 4,
        user: user[4],
        messages: [
            {
                sender: user[4],
                message: "Can you explain how to use useState in React?",
                createAt: "2025-01-21T13:00:00Z",
            },
            {
                sender: user[0],
                message:
                    "Sure! `useState` lets you add state to functional components.",
                createAt: "2025-01-21T13:01:00Z",
            },
        ],
    },
    {
        chatId: 5,
        user: user[5],
        messages: [
            {
                sender: user[5],
                message: "What is the best way to center a div in CSS?",
                createAt: "2025-01-21T14:00:00Z",
            },
            {
                sender: user[0],
                message:
                    "You can use Flexbox with `justify-content: center` and `align-items: center`.",
                createAt: "2025-01-21T14:01:00Z",
            },
        ],
    },
    {
        chatId: 6,
        user: user[6],
        messages: [
            {
                sender: user[6],
                message: "How do I update Node.js to the latest version?",
                createAt: "2025-01-21T15:00:00Z",
            },
            {
                sender: user[0],
                message:
                    "You can use `nvm` to install and manage Node.js versions.",
                createAt: "2025-01-21T15:01:00Z",
            },
        ],
    },
    {
        chatId: 7,
        user: user[7],
        messages: [
            {
                sender: user[7],
                message:
                    "What is the difference between `let` and `const` in JavaScript?",
                createAt: "2025-01-21T16:00:00Z",
            },
            {
                sender: user[0],
                message:
                    "`let` is mutable, while `const` is used for constants.",
                createAt: "2025-01-21T16:01:00Z",
            },
        ],
    },
    {
        chatId: 8,
        user: user[8],
        messages: [
            {
                sender: user[8],
                message: "How do I deploy a React app to production?",
                createAt: "2025-01-21T17:00:00Z",
            },
            {
                sender: user[0],
                message:
                    "You can build the app using `npm run build` and host it on platforms like Vercel.",
                createAt: "2025-01-21T17:01:00Z",
            },
        ],
    },
    {
        chatId: 9,
        user: user[9],
        messages: [
            {
                sender: user[9],
                message: "Can I use Tailwind CSS with Next.js?",
                createAt: "2025-01-21T18:00:00Z",
            },
            {
                sender: user[0],
                message:
                    "Yes, it's fully compatible. Follow the setup guide in the Tailwind docs.",
                createAt: "2025-01-21T18:01:00Z",
            },
        ],
    },
    {
        chatId: 10,
        user: user[10],
        messages: [
            {
                sender: user[10],
                message:
                    "What is the difference between React and React Native?",
                createAt: "2025-01-21T19:00:00Z",
            },
            {
                sender: user[0],
                message:
                    "React is for web apps, and React Native is for mobile apps.",
                createAt: "2025-01-21T19:01:00Z",
            },
        ],
    },
];

export const previews = chat.map((chat) => ({
    chatId: chat.chatId,
    user: chat.user,
    lastMessage: chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].message : "No messages",
    // lastMessageTime: chat.messages.length > 0 && chat.messages[chat.messages.length - 1].createAt,
}));

export const findChatById = (chatId: string) => {
    return chat.find((c) => c.chatId.toString() === chatId);
};
