export const fetchTopUsers = async () => {
  const response = await fetch("http://20.244.56.144/evaluation-service/users");
  const posts = await response.json();

  const userCommentCounts = posts.reduce((acc, post) => {
    const userId = post.userId;
    const commentCount = post.comments.length;

    if (!acc[userId]) {
      acc[userId] = { userId, totalComments: 0 };
    }

    acc[userId].totalComments += commentCount;
    return acc;
  }, {});

   const topUsers = Object.values(userCommentCounts)
    .sort((a, b) => b.totalComments - a.totalComments) 
    .slice(0, 5); 

  return topUsers;
};