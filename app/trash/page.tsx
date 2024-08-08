"use client";
import React from "react";
import Layout from "../components/Layout";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const trashData = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    author: "John Doe",
    authorAvatar: "https://github.com/shadcn.png",
    date: "25th July 2024",
    status: "Discarded",
    statusCode: "discarded",
    categories: ["Category 1", "Category 2"],
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor Sit Amet",
    author: "John Doe",
    authorAvatar: "https://github.com/shadcn.png",
    date: "25th July 2024",
    status: "Discarded",
    statusCode: "discarded",
    categories: ["Category 3"],
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor Sit Amet",
    author: "John Doe",
    authorAvatar: "https://github.com/shadcn.png",
    date: "25th July 2024",
    status: "Discarded",
    statusCode: "discarded",
    categories: ["Category 2", "Category 3"],
  },
  {
    id: 4,
    title: "Lorem Ipsum Dolor Sit Amet",
    author: "John Doe",
    authorAvatar: "https://github.com/shadcn.png",
    date: "25th July 2024",
    status: "Discarded",
    statusCode: "discarded",
    categories: ["Category 1"],
  },
];

const getStatusColor = (statusCode: string) => {
  switch (statusCode) {
    case "discarded":
      return "#F88082";
    default:
      return "#000";
  }
};

const Trash = () => {
  return (
    <Layout>
      <div className="mb-4">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4">
          <Input placeholder="Search..." className="w-full md:w-auto" />
          <div className="w-full md:w-auto">
            <Select onValueChange={(value) => console.log(value)}>
              <SelectTrigger className="w-full md:w-auto">
                <SelectValue placeholder="Sort by Title (asc)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Title (asc)</SelectItem>
                <SelectItem value="desc">Title (desc)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-auto">
            <Select onValueChange={(value) => console.log(value)}>
              <SelectTrigger className="w-full md:w-auto">
                <SelectValue placeholder="Select Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="category1">Category 1</SelectItem>
                <SelectItem value="category2">Category 2</SelectItem>
                <SelectItem value="category3">Category 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-auto">
            <Select onValueChange={(value) => console.log(value)}>
              <SelectTrigger className="w-full md:w-auto">
                <SelectValue placeholder="Select Tags" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tag1">Tag 1</SelectItem>
                <SelectItem value="tag2">Tag 2</SelectItem>
                <SelectItem value="tag3">Tag 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="text-gray-700 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-2">
          <div>Author</div>
          <div>Title</div>
          <div>Date</div>
          <div>Status</div>
        </div>
        <div className="space-y-4">
          {trashData.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 items-center">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src={item.authorAvatar} alt={item.author} />
                    <AvatarFallback>{item.author[0]}</AvatarFallback>
                  </Avatar>
                  <span>{item.author}</span>
                </div>
                <div>{item.title}</div>
                <div>
                  <div className="text-sm text-gray-500">Last updated at:</div>
                  <div className="text-sm">{item.date}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: getStatusColor(item.statusCode) }}
                  ></span>
                  <span>{item.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Trash;
