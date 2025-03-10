"use client";

import { io } from "socket.io-client";

const socket = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`, {
    withCredentials: true,
    path: "/socket.io/"
});

export default socket;
