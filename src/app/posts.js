import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => setPosts(data));
      console.log(data)
  }, []);

  return (
    <Container>
      <Typography>
        Available Posts
      </Typography>
      {posts.map((post) => (
        <Typography key={post.id} variant="h5" component="h2" gutterBottom>
          {post.title}
        </Typography>
      ))}
    </Container>
  );
};

export default Posts;
