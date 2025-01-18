"use client"

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {useState} from "react";

export default function Home() {
    const [state] = useState(true);
    return (
        <div className="flex flex-grow px-8 py-5 bg-secondary">
            <div
                className="2xl:container 2xl:mx-auto w-full">
                <div className={`grid w-full h-full gap-4 ${state ? "grid-cols-4" : "grid-cols-3"}`}>
                    {/*<div className={"shadow-lg border rounded-lg bg-background"}></div>*/}
                    <Card>
                        {/*<CardHeader>*/}
                        {/*    <CardTitle>Card Title</CardTitle>*/}
                        {/*    <CardDescription>Card Description</CardDescription>*/}
                        {/*</CardHeader>*/}
                        {/*<CardContent>*/}
                        {/*    <p>Card Content</p>*/}
                        {/*</CardContent>*/}
                        {/*<CardFooter>*/}
                        {/*    <p>Card Footer</p>*/}
                        {/*</CardFooter>*/}
                    </Card>

                    <Card className="col-span-2">
                    </Card>
                    {/*<div className={"col-span-2 shadow-lg border rounded-lg bg-background"}></div>*/}
                    {state ? (
                        <Card>
                        </Card>
                    ) : null}
                </div>
            </div>
        </div>

    );
}
