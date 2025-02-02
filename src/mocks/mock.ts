import { ChatType } from "@/lib/type";

//create array of 15 avatars
export const avatars = Array.from({ length: 15 }).map(
    (_, i) => `https://i.pravatar.cc/150?img=${i + 1}`,
);

export const user = [
    {
        userId: 1,
        name: "Alice Johnson",
        avatar: "https://i.pravatar.cc/150?img=1",
        email: "alice.johnson@demo.net",
    },
    {
        userId: 2,
        name: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=32",
        email: "johndoe@example.com",
    },
    {
        userId: 3,
        name: "Michael Brown",
        avatar: "https://i.pravatar.cc/150?img=3",
        email: "michael.brown@demo.net",
    },
    {
        userId: 4,
        name: "Sarah Davis",
        avatar: "https://i.pravatar.cc/150?img=4",
        email: "sarah.davis@example.com",
    },
    {
        userId: 5,
        name: "David Wilson",
        avatar: "https://i.pravatar.cc/150?img=5",
        email: "david.wilson@mail.com",
    },
    {
        userId: 6,
        name: "Emily Taylor",
        avatar: "https://i.pravatar.cc/150?img=31",
        email: "emily.taylor@demo.net",
    },
    {
        userId: 7,
        name: "James Anderson",
        avatar: "https://i.pravatar.cc/150?img=33",
        email: "james.anderson@mail.com",
    },
    {
        userId: 8,
        name: "Olivia Martinez",
        avatar: "https://i.pravatar.cc/150?img=8",
        email: "olivia.martinez@demo.net",
    },
    {
        userId: 9,
        name: "Daniel Thomas",
        avatar: "https://i.pravatar.cc/150?img=9",
        email: "daniel.thomas@test.org",
    },
    {
        userId: 10,
        name: "Sophia Clark",
        avatar: "https://i.pravatar.cc/150?img=10",
        email: "sophia.clark@test.org",
    },
    {
        userId: 11,
        name: "Matthew Lewis",
        avatar: "https://i.pravatar.cc/150?img=11",
        email: "matthew.lewis@test.org",
    },
];

export const not_connected = [
    {
        userId: 12,
        name: "Not connected",
        avatar: "https://i.pravatar.cc/150?img=12",
        email: "not.connected@demo.net",
    },
    {
        userId: 13,
        name: "Emma Walker",
        avatar: "https://i.pravatar.cc/150?img=13",
        email: "emma.walker@example.com",
    },
    {
        userId: 14,
        name: "Christopher Hall",
        avatar: "https://i.pravatar.cc/150?img=14",
        email: "christopher.hall@demo.net",
    },
    {
        userId: 15,
        name: "Ava Allen",
        avatar: "https://i.pravatar.cc/150?img=15",
        email: "ava.allen@demo.net",
    },
    {
        userId: 16,
        name: "Joseph Young",
        avatar: "https://i.pravatar.cc/150?img=16",
        email: "joseph.young@demo.net",
    },
    {
        userId: 17,
        name: "Mia Hernandez",
        avatar: "https://i.pravatar.cc/150?img=17",
        email: "mia.hernandez@demo.net",
    },
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
                attachment: null,
                createAt: "2025-01-21T10:00:00Z",
            },
            {
                sender: user[0],
                message:
                    "Sure, I can help with that! Are you using a framework like React or just plain HTML?",
                attachment: null,
                createAt: "2025-01-21T10:01:00Z",
            },
            {
                sender: user[1],
                message:
                    "I'm using React. I want to integrate Tailwind for styling components.",
                attachment: null,
                createAt: "2025-01-21T10:02:00Z",
            },
            {
                sender: user[0],
                message:
                    "Great! You can install Tailwind CSS using npm. Run npm install -D tailwindcss postcss autoprefixer, then create a Tailwind configuration file with npx tailwindcss init. Would you like the steps for configuring your React project as well?",
                attachment: null,
                createAt: "2025-01-21T10:03:00Z",
            },
            {
                sender: user[0],
                message:
                    "Great! You can install Tailwind CSS using npm. Run npm install -D tailwindcss postcss autoprefixer, then create a Tailwind configuration file with npx tailwindcss init. Would you like the steps for configuring your React project as well?",
                attachment: null,
                createAt: "2025-01-21T10:03:00Z",
            },
            {
                sender: user[1],
                message: "Yes, that would be helpful. Thanks!",
                attachment: null,
                createAt: "2025-01-21T10:04:00Z",
            },
            {
                sender: user[1],
                message: "Thanks",
                attachment: null,
                createAt: "2025-01-21T10:04:00Z",
            },
            {
                sender: user[1],
                message:
                    "Hi, I need help with setting up Tailwind CSS in my project.",
                attachment: null,
                createAt: "2025-01-21T10:00:00Z",
            },
            {
                sender: user[0],
                message:
                    "Sure, I can help with that! Are you using a framework like React or just plain HTML?",
                attachment: null,
                createAt: "2025-01-21T10:01:00Z",
            },
            {
                sender: user[1],
                message: "",
                attachment: {
                    attachmentId: 2,
                    fileUrl:
                        "https://cdn.fbsbx.com/v/t59.2708-21/475331341_511448854817445_8895421833669516899_n.json/openapi.json?_nc_cat=106&ccb=1-7&_nc_sid=2b0e22&_nc_ohc=ovRBw20dXpsQ7kNvgFZjVFp&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=AfIQL5HtW11ZvrO27mxKUDP&oh=03_Q7cD1gHH4p_F9vx7cooJqm0YLR6dh88Iuakp9uwaswXmtgFcHw&oe=67A18CCE&dl=1",
                    fileType: "application/json;charset=utf-8",
                    fileName: "file-from-messenger.json",
                    fileSize: 123,
                },
                createAt: "2025-01-21T10:02:00Z",
            },
            {
                sender: user[0],
                message: "",
                attachment: {
                    attachmentId: 3,
                    fileUrl:
                        "https://test-messender.sgp1.cdn.digitaloceanspaces.com/poly-bridge.m4a",
                    fileType: "audio/mp4",
                    fileName: "audio.m4a",
                    fileSize: 123,
                },
                createAt: "2025-01-21T10:04:00Z",
            },
            {
                sender: user[0],
                message: "",
                attachment: {
                    attachmentId: 2,
                    fileUrl:
                        "https://test-messender.sgp1.cdn.digitaloceanspaces.com/openapi.json",
                    fileType: "application/json;charset=utf-8",
                    fileName: "openapi.json",
                    fileSize: 123,
                },
                createAt: "2025-01-21T10:03:00Z",
            },
            {
                sender: user[1],
                message: "",
                attachment: {
                    attachmentId: 3,
                    fileUrl:
                        "https://test-messender.sgp1.cdn.digitaloceanspaces.com/KICK%20BACK%20-%20Chainsaw%20Man%20OP%20%5BPiano%5D%20%E2%A7%B8%20Kenshi%20Yonezu.mp4",
                    fileType: "video/mp4",
                    fileName: "movie.mp4",
                    fileSize: 123,
                },
                createAt: "2025-01-21T10:04:00Z",
            },
            {
                sender: user[1],
                message: "",
                attachment: {
                    attachmentId: 1,
                    fileUrl:
                        "https://test-messender.sgp1.cdn.digitaloceanspaces.com/piclorem.jpg",
                    fileType: "image/jpg",
                    fileName: "lorem.jpg",
                    fileSize: 123,
                },
                createAt: "2025-01-21T10:04:00Z",
            },
        ],
    },
    // {
    //     chatId: 2,
    //     user: user[2],
    //     messages: [
    //         {
    //             sender: user[0],
    //             message: "How can I reset my password?",
    //             createAt: "2025-01-21T11:00:00Z",
    //         },
    //         {
    //             sender: user[2],
    //             message:
    //                 "You can reset it by clicking on 'Forgot Password' on the login page.",
    //             createAt: "2025-01-21T11:01:00Z",
    //         },
    //     ],
    // },
    // {
    //     chatId: 3,
    //     user: user[3],
    //     messages: [],
    // },
    // {
    //     chatId: 4,
    //     user: user[4],
    //     messages: [
    //         {
    //             sender: user[4],
    //             message: "Can you explain how to use useState in React?",
    //             createAt: "2025-01-21T13:00:00Z",
    //         },
    //         {
    //             sender: user[0],
    //             message:
    //                 "Sure! `useState` lets you add state to functional components.",
    //             createAt: "2025-01-21T13:01:00Z",
    //         },
    //     ],
    // },
    // {
    //     chatId: 5,
    //     user: user[5],
    //     messages: [
    //         {
    //             sender: user[5],
    //             message: "What is the best way to center a div in CSS?",
    //             createAt: "2025-01-21T14:00:00Z",
    //         },
    //         {
    //             sender: user[0],
    //             message:
    //                 "You can use Flexbox with `justify-content: center` and `align-items: center`.",
    //             createAt: "2025-01-21T14:01:00Z",
    //         },
    //     ],
    // },
    // {
    //     chatId: 6,
    //     user: user[6],
    //     messages: [
    //         {
    //             sender: user[6],
    //             message: "How do I update Node.js to the latest version?",
    //             createAt: "2025-01-21T15:00:00Z",
    //         },
    //         {
    //             sender: user[0],
    //             message:
    //                 "You can use `nvm` to install and manage Node.js versions.",
    //             createAt: "2025-01-21T15:01:00Z",
    //         },
    //     ],
    // },
    // {
    //     chatId: 7,
    //     user: user[7],
    //     messages: [
    //         {
    //             sender: user[7],
    //             message:
    //                 "What is the difference between `let` and `const` in JavaScript?",
    //             createAt: "2025-01-21T16:00:00Z",
    //         },
    //         {
    //             sender: user[0],
    //             message:
    //                 "`let` is mutable, while `const` is used for constants.",
    //             createAt: "2025-01-21T16:01:00Z",
    //         },
    //     ],
    // },
    // {
    //     chatId: 8,
    //     user: user[8],
    //     messages: [
    //         {
    //             sender: user[8],
    //             message: "How do I deploy a React app to production?",
    //             createAt: "2025-01-21T17:00:00Z",
    //         },
    //         {
    //             sender: user[0],
    //             message:
    //                 "You can build the app using `npm run build` and host it on platforms like Vercel.",
    //             createAt: "2025-01-21T17:01:00Z",
    //         },
    //     ],
    // },
    // {
    //     chatId: 9,
    //     user: user[9],
    //     messages: [
    //         {
    //             sender: user[9],
    //             message: "Can I use Tailwind CSS with Next.js?",
    //             createAt: "2025-01-21T18:00:00Z",
    //         },
    //         {
    //             sender: user[0],
    //             message:
    //                 "Yes, it's fully compatible. Follow the setup guide in the Tailwind docs.",
    //             createAt: "2025-01-21T18:01:00Z",
    //         },
    //     ],
    // },
    {
        chatId: 10,
        user: user[10],
        messages: [
            {
                sender: user[10],
                message:
                    "What is the difference between React and React Native?",
                attachment: null,
                createAt: "2025-01-21T19:00:00Z",
            },
            {
                sender: user[0],
                message:
                    "React is for web apps, and React Native is for mobile apps.",
                attachment: null,
                createAt: "2025-01-21T19:01:00Z",
            },
        ],
    },
];

export const previews = chat.map((chat) => ({
    chatId: chat.chatId,
    user: chat.user,
    lastMessage:
        chat.messages.length > 0
            ? chat.messages[chat.messages.length - 1].message
            : "No messages",
    // lastMessageTime: chat.messages.length > 0 && chat.messages[chat.messages.length - 1].createAt,
}));

export const findChatById = (chatId: string) => {
    return chat.find((c) => c.chatId.toString() === chatId);
};
