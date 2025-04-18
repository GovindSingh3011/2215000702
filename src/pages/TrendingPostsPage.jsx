import React, { useState, useEffect } from "react";

function TrendingPostsPage() {
  const [posts, setPosts] = useState([]);
  const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

  useEffect(() => {
    fetch("http://20.244.56.144/evaluation-service/posts/:postid/comments", {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const sortedPosts = data.sort((a, b) => b.comments.length - a.comments.length); 
        const topTrendingPosts = sortedPosts.slice(0, 5);
        setPosts(topTrendingPosts);
      })
      .catch((error) => console.error("Failed to fetch trending posts:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Top 5 Trending Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-white shadow rounded">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <p className="text-sm text-gray-500">Comments: {post.comments.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingPostsPage;