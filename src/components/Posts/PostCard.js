"use client";

import { useState, useEffect } from "react";

export default function PostCard() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchPosts() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/posts?limit=${limit}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to fetch posts");
      } else {
        setPosts(data);
      }
    } catch {
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="border p-6 rounded w-full max-w-2xl flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Posts List</h2>
      <div className="flex gap-2 items-center">
        <label>Limit:</label>
        <input
          type="number"
          min="1"
          max="20"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          className="border rounded px-3 py-2 w-20"
        />
        <button
          onClick={fetchPosts}
          className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
        >
          Load
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex flex-col gap-3 mt-2">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-sm mt-1">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
