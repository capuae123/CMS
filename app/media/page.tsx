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

const mediaData = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    author: "John Doe",
    image: "/website.png",
    categories: ["Category 1", "Category 2"],
    date: "25th July 2024",
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor Sit Amet",
    author: "John Doe",
    image: "/website.png",
    categories: ["Category 2", "Category 3"],
    date: "25th July 2024",
  },
  // Add more media items here
];

const Media = () => {
  return (
    <Layout>
      <div className="mb-4">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4">
          <Input placeholder="Search..." className="w-full md:w-auto" />
          <div className="w-full md:w-auto">
            <Select onValueChange={(value) => console.log(value)}>
              <SelectTrigger className="w-full md:w-auto">
                <SelectValue placeholder="Sort by Tile (asc)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Tile (asc)</SelectItem>
                <SelectItem value="desc">Tile (desc)</SelectItem>
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
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mediaData.map((media) => (
            <div
              key={media.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={media.image}
                alt={media.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{media.title}</h2>
                <p className="text-sm text-gray-500">{media.author}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {media.categories.map((category, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-200 rounded-full px-2 py-1"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">{media.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Media;
