const isImage = (type: string) => type.includes("image");
const isVideo = (type: string) => type.includes("video");

//create array of 15 avatars
export const avatars = Array.from({ length: 15 }).map(
    (_, i) => `https://i.pravatar.cc/150?img=${i + 1}`,
);

export const user = [
    {
        id: 1,
        username: "Alice Johnson",
        displayName: "Alice",
        avatar: "https://i.pravatar.cc/150?img=1",
        email: "alice.johnson@demo.net",
    },
    {
        id: 2,
        username: "John Doe",
        displayName: "Alice",
        avatar: "https://i.pravatar.cc/150?img=32",
        email: "johndoe@example.com",
    },
    {
        id: 3,
        username: "Michael Brown",
        displayName: "Alice",
        avatar: "https://i.pravatar.cc/150?img=3",
        email: "michael.brown@demo.net",
    },
];

export const not_connected = [
    {
        id: "12",
        username: "Not connected",
        displayName: "Alice",
        avatar: "https://i.pravatar.cc/150?img=12",
        email: "not.connected@demo.net",
    },
    {
        id: "13",
        username: "Emma Walker",
        displayName: "Alice",
        avatar: "https://i.pravatar.cc/150?img=13",
        email: "emma.walker@example.com",
    },
];

export const chat = [
    {
        id: 1,
        user: user[1],
        messages: [
            {
                id: 1,
                sender: user[1],
                message:
                    "Hi, I need help with setting up Tailwind CSS in my project.",
                attachment: null,
                metadata: null,
                createAt: "2025-01-21T10:00:00Z",
            },
            {
                id: 2,
                sender: user[0],
                message:
                    "Sure, I can help with that! Are you using a framework like React or just plain HTML?",
                attachment: null,
                metadata: null,
                createAt: "2025-01-21T10:01:00Z",
            },
            {
                id: 3,
                sender: user[1],
                message:
                    "I'm using React. I want to integrate Tailwind for styling components.",
                attachment: null,
                metadata: null,
                createAt: "2025-01-21T10:02:00Z",
            },
            {
                id: 4,
                sender: user[0],
                message:
                    "Great! You can install Tailwind CSS using npm. Run npm install -D tailwindcss postcss autoprefixer, then create a Tailwind configuration file with npx tailwindcss init. Would you like the steps for configuring your React project as well?",
                attachment: null,
                metadata: null,
                createAt: "2025-01-21T10:03:00Z",
            },
            {
                id: 5,
                sender: user[0],
                message:
                    "Great! You can install Tailwind CSS using npm. Run npm install -D tailwindcss postcss autoprefixer, then create a Tailwind configuration file with npx tailwindcss init. Would you like the steps for configuring your React project as well?",
                attachment: null,
                metadata: null,
                createAt: "2025-01-21T10:03:00Z",
            },
            {
                id: 6,
                sender: user[0],
                message: "https://www.digitalocean.commmm/ visit this website",
                attachment: {
                    id: 23231,
                    fileUrl:
                        "https://test-messender.sgp1.cdn.digitaloceanspaces.com/ct4.mp4",
                    fileType: "video/mp4",
                    fileName: "movie.mp4",
                    fileSize: 123,
                },
                metadata: {
                    id: 2,
                    url: "https://www.digitalocean.commmm",
                    title: "",
                    image: "",
                },
                createAt: "2025-01-21T10:04:00Z",
            },
            {
                id: 7,
                sender: user[1],
                message: "https://www.digitalocean.com/ visit this website",
                attachment: null,
                metadata: {
                    id: 1,
                    url: "https://www.digitalocean.com",
                    title: "DigitalOcean | Cloud Infrastructure for Developers",
                    image: "https://www.digitalocean.com/_next/static/media/social-share-default.e8530e9e.jpeg",
                },
                createAt: "2025-01-21T10:04:00Z",
            },
            {
                id: 8,
                sender: user[1],
                message: "",
                attachment: {
                    id: 123132,
                    fileUrl:
                        "https://test-messender.sgp1.cdn.digitaloceanspaces.com/Rick%20Roll.mp4",
                    fileType: "video/mp4",
                    fileName: "movie.mp4",
                    fileSize: 123,
                },
                metadata: null,
                createAt: "2025-01-21T10:00:00Z",
            },
            {
                id: 9,
                sender: user[0],
                message: "",
                attachment: {
                    id: 5123,
                    fileUrl:
                        "https://test-messender.sgp1.cdn.digitaloceanspaces.com/237-4032x3024.jpg",
                    fileType: "image/jpg",
                    fileName: "lorem.jpg",
                    fileSize: 123,
                },
                metadata: null,
                createAt: "2025-01-21T10:01:00Z",
            },
            {
                id: 10,
                sender: user[1],
                message: "",
                attachment: {
                    id: 1,
                    fileUrl:
                        "https://cdn.fbsbx.com/v/t59.2708-21/475331341_511448854817445_8895421833669516899_n.json/openapi.json?_nc_cat=106&ccb=1-7&_nc_sid=2b0e22&_nc_ohc=ovRBw20dXpsQ7kNvgFZjVFp&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=AfIQL5HtW11ZvrO27mxKUDP&oh=03_Q7cD1gHH4p_F9vx7cooJqm0YLR6dh88Iuakp9uwaswXmtgFcHw&oe=67A18CCE&dl=1",
                    fileType: "application/json;charset=utf-8",
                    fileName: "file-from-messenger.json",
                    fileSize: 123,
                },
                metadata: null,
                createAt: "2025-01-21T10:02:00Z",
            },
            {
                id: 11,
                sender: user[0],
                message: "",
                attachment: {
                    id: 2,
                    fileUrl:
                        "https://test-messender.sgp1.cdn.digitaloceanspaces.com/poly-bridge.m4a",
                    fileType: "audio/mp4",
                    fileName: "audio.m4a",
                    fileSize: 123,
                },
                metadata: null,
                createAt: "2025-01-21T10:04:00Z",
            },
            {
                id: 12,
                sender: user[0],
                message: "",
                attachment: {
                    id: 3,
                    fileUrl:
                        "https://test-messender.sgp1.cdn.digitaloceanspaces.com/openapi.json",
                    fileType: "application/json;charset=utf-8",
                    fileName: "openapi.json",
                    fileSize: 123,
                },
                metadata: null,
                createAt: "2025-01-21T10:03:00Z",
            },
            {
                id: 13,
                sender: user[1],
                message: "",
                attachment: {
                    id: 4,
                    fileUrl:
                        "https://test-messender.sgp1.cdn.digitaloceanspaces.com/ct4.mp4",
                    fileType: "video/mp4",
                    fileName: "movie.mp4",
                    fileSize: 123,
                },
                metadata: null,
                createAt: "2025-01-21T10:04:00Z",
            },
            {
                id: 14,
                sender: user[1],
                message: "hello hello hello hello",
                attachment: {
                    id: 5,
                    fileUrl:
                        "https://test-messender.sgp1.cdn.digitaloceanspaces.com/piclorem.jpg",
                    fileType: "image/jpg",
                    fileName: "lorem.jpg",
                    fileSize: 123,
                },
                metadata: null,
                createAt: "2025-01-21T10:04:00Z",
            },
        ],
    },
    // {
    //     id: 2,
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
    //     id: 3,
    //     user: user[3],
    //     messages: [],
    // },
    // {
    //     id: 4,
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
    //     id: 5,
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
    //     id: 6,
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
    //     id: 7,
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
    //     id: 8,
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
    //     id: 9,
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
        id: 10,
        user: user[10],
        messages: [
            {
                id: 15,
                sender: user[10],
                message:
                    "What is the difference between React and React Native?",
                attachment: null,
                metadata: null,
                createAt: "2025-01-21T19:00:00Z",
            },
            {
                id: 16,
                sender: user[0],
                message:
                    "React is for web apps, and React Native is for mobile apps.",
                attachment: null,
                metadata: null,
                createAt: "2025-01-21T19:01:00Z",
            },
        ],
    },
];

export const previews = chat.map((chat) => ({
    id: chat.id,
    user: chat.user,
    lastMessage:
        chat.messages.length > 0
            ? chat.messages[chat.messages.length - 1].message
            : "No messages",
    // lastMessageTime: chat.messages.length > 0 && chat.messages[chat.messages.length - 1].createAt,
}));

export const FindChatById = (id: string) => {
    return chat.find((c) => c.id.toString() === id);
};

//Find all photos and videos in id
export const FindMediaInChat = (id: string) => {
    const chat = FindChatById(id);
    if (!chat) return [];
    return chat.messages
        .filter(
            (m) =>
                m.attachment &&
                (isImage(m.attachment.fileType) ||
                    isVideo(m.attachment.fileType)),
        )
        .map((m) => m.attachment);
};

//Find all files in id
export const FindFilesInChat = (id: string) => {
    const chat = FindChatById(id);
    if (!chat) return [];
    return chat.messages
        .filter(
            (m) =>
                m.attachment &&
                !isImage(m.attachment.fileType) &&
                !isVideo(m.attachment.fileType),
        )
        .map((m) => m.attachment);
};

export const FindLinksInChat = (id: string) => {
    const chat = FindChatById(id);
    if (!chat) return [];
    return chat.messages.filter((m) => m.metadata).map((m) => m.metadata);
};
