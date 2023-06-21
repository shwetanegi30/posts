import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import "./styles.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);



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
  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = () => {
    return posts.map((post) => (
      <Card
        key={post.id}
        sx={{
          marginBottom: "20px",
          backgroundColor: "#f3f3f6",
          border: "1px solid #ccc",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "421px",
          height: "316px",
        }}
      >
        <CardMedia
          component="img"
          height="210"
          image={post.image}
          alt={post.title}
          sx={{
            width: "50%",
            marginTop: "50px",
          }}
        />
        <CardContent sx={{ paddingBottom: "0" }}>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            sx={{
              color: "grey",
              lineHeight: "1.3",
              fontSize: "13px",
              margin: "auto",
              marginTop: "8px",
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
              fontSize: "18px",
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
          <Typography
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              fontSize: "12px",
              marginTop: "20px",
            }}
          >
            <Typography
              variant="body2"
              component="span"
              gutterBottom
              style={{
                color: "hsl(158, 36%, 37%)",
                fontSize: "15px",
                fontWeight: "500",
                paddingRight: "20px",
              }}
            >
              Rating: {post.rating.rate}
            </Typography>
            <Typography
              variant="body2"
              component="span"
              style={{
                fontSize: "15px",
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
    <Container className="custom-container">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<Typography variant="body1">No more posts</Typography>}
      >
        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
          }}
        >
        
          {renderPosts()}
        </div>
      </InfiniteScroll>
    </Container>
  );
};

export default Posts;
