import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import TopUsersPage from "./pages/TopUsersPage";
import TrendingPostsPage from "./pages/TrendingPostsPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/top-users" element={<TopUsersPage />} />
          <Route path="/trending-posts" element={<TrendingPostsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;