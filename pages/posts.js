// import { useEffect, useState } from 'react';
// import { Container, Typography } from '@mui/material';

// const Posts = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products/')
//       .then((response) => response.json())
//       .then((data) => setPosts(data));
//   }, []);

//   return (
//     <Container>

//       <Typography>
//         Available Posts
//       </Typography>
//       {posts.map((post) => (
//         <Typography key={post.id}>
//           {post.title}
//         </Typography>
//       ))}
//     </Container>
//   );
// };

// export default Posts;

import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch(`https://fakestoreapi.com/products?limit=5&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts((prevPosts) => [...prevPosts, ...data]);
        setPage((prevPage) => prevPage + 1);
        setHasMore(data.length > 0);
      })
      .catch((error) => console.log(error));
  };

  const renderPosts = () => {
    return posts.map((post) => (
      <Card
        key={post.id}
        sx={{
          marginBottom: "20px",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "15px",
          height: "96%",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <CardMedia
          component="img"
          height="210"
          image={post.image}
          alt={post.title}
          sx={{ width: "50%" }}
        />
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            sx={{
              color: "grey",
              lineHeight: "1.3",
              fontSize: "13px",
              margin: "auto",
            }}
          >
            {post.category}
          </Typography>
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            sx={{
              lineHeight: "1.3",
              fontSize: "22px",
              margin: "auto",
              fontWeight: "700",
              margin: "7px 0 7px 0",
            }}
          >
            {post.title}
          </Typography>
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{
              color: "grey",
              lineHeight: "1.3",
              fontSize: "12px",
              marginTop: "9px",
            }}
          >
            {post.description}
          </Typography>
          <Typography component="div"
           sx={{
              display: "flex",
              alignItems:"center",
              gap: "75px",
              fontSize: "12px",
              marginTop: "20px",
            }}
            >
          <Typography
            variant="body2"
            component="span"
            gutterBottom
            SX={{
              fontSize: "17px",
              fontWeight: "500",
             color: 'hsl(158, 36%, 37%)',
              paddingRight: "20px",
            }}
          >
            Rating: {post.rating.rate}
          </Typography>
          <Typography variant="body2"
          component="span"
           SX={{
              fontSize: "17px",
              fontWeight: "500",
              color: "hsl(158, 36%, 37%)",
              paddingRight: "20px",
            }}
            >
            Count: {post.rating.count}
          </Typography>
          </Typography>
        </CardContent>
      </Card>
    ));
  };

  return (
    <Container>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<Typography variant="body1">No more posts</Typography>}
      >
        {renderPosts()}
      </InfiniteScroll>
    </Container>
  );
};

export default Posts;
