import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full p-4 space-y-8">
      <h1 className="text-3xl font-bold">PROJECTS</h1>
      <div className="flex justify-center flex-wrap gap-8">
        <Link href="/blogs">
          <Card className="shadow-lg cursor-pointer">
            <CardHeader>
              <img
                src="/website.png"
                alt="Website"
                className="w-full h-48 object-cover rounded-t-md"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
            </CardHeader>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">Website</h2>
              <a href="#" className="block text-sm text-blue-500">
                https://www.relphacare.com/
              </a>
              <p className="text-sm text-muted-foreground">3 days ago</p>
            </CardContent>
          </Card>
        </Link>
        <Card className="shadow-lg">
          <CardHeader>
            <img
              src="/placeholder.svg"
              alt="The App"
              className="w-full h-48 object-cover rounded-t-md"
              width="300"
              height="200"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
          </CardHeader>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold">The App</h2>
            <a href="#" className="block text-sm text-blue-500">
              https://www.relphacare.com/
            </a>
            <p className="text-sm text-muted-foreground">14th July 2024</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <img
              src="/placeholder.svg"
              alt="IHP"
              className="w-full h-48 object-cover rounded-t-md"
              width="300"
              height="200"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
          </CardHeader>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold">IHP</h2>
            <a href="#" className="block text-sm text-blue-500">
              https://relpha-pod.vercel.app/
            </a>
            <p className="text-sm text-muted-foreground">6th April 2024</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center flex-wrap gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <img
              src="/placeholder.svg"
              alt="EPP"
              className="w-full h-48 object-cover rounded-t-md"
              width="300"
              height="200"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
          </CardHeader>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold">EPP</h2>
            <p className="text-sm text-muted-foreground">Coming Soon...</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <img
              src="/placeholder.svg"
              alt="EMP"
              className="w-full h-48 object-cover rounded-t-md"
              width="300"
              height="200"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
          </CardHeader>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold">EMP</h2>
            <p className="text-sm text-muted-foreground">Coming Soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
