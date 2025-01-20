"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function Home() {
    const [state] = useState(false);
    const params = useParams<{ slug: string }>();

    return (
        <div className="card col-span-3 flex items-center justify-center">
            <p className={"text-2xl font-bold"}>{params.slug}</p>
        </div>
    );
}
