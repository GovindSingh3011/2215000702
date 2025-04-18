import React, { useState, useEffect } from "react";
import { fetchTopUsers } from "../services/api";

function TopUsersPage() {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const getTopUsers = async () => {
      try {
        const data = await fetchTopUsers();
        setTopUsers(data);
      } catch (error) {
        console.error("Failed to fetch top users:", error);
      }
    };

    getTopUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Top 5 Users</h1>
      <ul className="space-y-2">
        {topUsers.map((user) => (
          <li key={user.id} className="p-4 bg-white shadow rounded">
            <h2 className="font-bold">{user.name}</h2>
            <p>Total Comments: {user.totalComments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopUsersPage;