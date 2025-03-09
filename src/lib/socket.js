"use client";

import { io } from "socket.io-client";

const socket = io(`${process.env.NEXT_PUBLIC_BACKEND_URL}:4444`, {
    withCredentials: true,
});

export default socket;
