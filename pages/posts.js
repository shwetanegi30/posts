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





import { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

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
      <Card key={post.id} sx={{ marginBottom: '20px', backgroundColor:'#48556a', border:'1px solid #ccc', borderRadius: '15px', height:'96%', width:'50%',display:'flex',justifyContent:'center',alignContent:'center' }}>
        <CardMedia
          component="img"
          height="200"
          image={post.image}
          alt={post.title}
          sx={{width:'50%'}}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Rating: {post.rating.rate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Count: {post.rating.count}
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
