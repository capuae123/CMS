"use client";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const blogData = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    author: "John Doe",
    authorAvatar: "https://github.com/shadcn.png",
    date: "25th July 2024",
    status: "Published",
    statusCode: "published",
    categories: ["Category 1", "Category 2"],
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor Sit Amet",
    author: "Jane Doe",
    authorAvatar: "https://github.com/shadcn.png",
    date: "25th July 2024",
    status: "Saved",
    statusCode: "saved",
    categories: ["Category 3"],
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor Sit Amet",
    author: "Alice Smith",
    authorAvatar: "https://github.com/shadcn.png",
    date: "25th July 2024",
    status: "Discarded",
    statusCode: "discarded",
    categories: ["Category 2", "Category 3"],
  },
  {
    id: 4,
    title: "Lorem Ipsum Dolor Sit Amet",
    author: "Bob Johnson",
    authorAvatar: "https://github.com/shadcn.png",
    date: "25th July 2024",
    status: "Scheduled",
    statusCode: "scheduled",
    categories: ["Category 1"],
  },
];

const getStatusColor = (statusCode: string) => {
  switch (statusCode) {
    case "published":
      return "#78D569";
    case "saved":
      return "#A0A0A0";
    case "discarded":
      return "#F88082";
    case "scheduled":
      return "#AF8EFF";
    default:
      return "#000";
  }
};

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("no-filter");
  const [selectedCategory, setSelectedCategory] = useState("no-filter");
  const [selectedTag, setSelectedTag] = useState("no-filter");
  const [selectedStatus, setSelectedStatus] = useState("no-filter");
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);

  useEffect(() => {
    let filtered = blogData;

    if (searchTerm) {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "no-filter") {
      filtered = filtered.filter((blog) =>
        blog.categories.includes(selectedCategory)
      );
    }

    if (selectedTag !== "no-filter") {
      // Add logic for filtering by tags if available in blog data
    }

    if (selectedStatus !== "no-filter") {
      filtered = filtered.filter((blog) => blog.statusCode === selectedStatus);
    }

    if (sortOrder === "asc") {
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "desc") {
      filtered = filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredBlogs(filtered);
  }, [searchTerm, sortOrder, selectedCategory, selectedTag, selectedStatus]);

  return (
    <Layout>
      <div className="mb-4">
        <Button className="bg-[#7265E3] text-white mb-4">+ New Blog</Button>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4">
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-auto"
          />
          <div className="w-full md:w-auto">
            <Select onValueChange={(value) => setSortOrder(value)}>
              <SelectTrigger className="w-full md:w-auto">
                <SelectValue placeholder="Sort by Title (asc)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no-filter">No Filter</SelectItem>
                <SelectItem value="asc">Title (asc)</SelectItem>
                <SelectItem value="desc">Title (desc)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-auto">
            <Select onValueChange={(value) => setSelectedCategory(value)}>
              <SelectTrigger className="w-full md:w-auto">
                <SelectValue placeholder="Select Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no-filter">No Filter</SelectItem>
                <SelectItem value="category1">Category 1</SelectItem>
                <SelectItem value="category2">Category 2</SelectItem>
                <SelectItem value="category3">Category 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-auto">
            <Select onValueChange={(value) => setSelectedTag(value)}>
              <SelectTrigger className="w-full md:w-auto">
                <SelectValue placeholder="Select Tags" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no-filter">No Filter</SelectItem>
                <SelectItem value="tag1">Tag 1</SelectItem>
                <SelectItem value="tag2">Tag 2</SelectItem>
                <SelectItem value="tag3">Tag 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-auto">
            <Select onValueChange={(value) => setSelectedStatus(value)}>
              <SelectTrigger className="w-full md:w-auto">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no-filter">No Filter</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="saved">Saved</SelectItem>
                <SelectItem value="discarded">Discarded</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
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
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="bg-white p-4 rounded-lg shadow">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 items-center">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src={blog.authorAvatar} alt={blog.author} />
                    <AvatarFallback>{blog.author[0]}</AvatarFallback>
                  </Avatar>
                  <span>{blog.author}</span>
                </div>
                <div>{blog.title}</div>
                <div>
                  <div className="text-sm text-gray-500">Last updated at:</div>
                  <div className="text-sm">{blog.date}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: getStatusColor(blog.statusCode) }}
                  ></span>
                  <span>{blog.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
