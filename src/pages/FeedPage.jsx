import React, { useState, useEffect } from "react";

function FeedPage() {
  const [posts, setPosts] = useState([]);
  const token = {
    token_type: "Bearer",
    access_token: import.meta.env.VITE_ACCESS_TOKEN, 
  };

  useEffect(() => {
    const userId = "someUserId"; 
    fetch(`http://20.244.56.144/evaluation-service/users/${userId}/posts`, {
      headers: {
        Authorization: `${token.token_type} ${token.access_token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Failed to fetch posts:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Real-Time Feed</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-white shadow rounded">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedPage;