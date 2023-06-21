import Head from "next/head";
import Sidebar from "./Sidebar";
import Posts from "./posts";
import "../public/globals.css";

const Index = () => (
  <>
    <Head>
      <title>My Post</title>
    </Head>

    <div style={{ display: "flex" }}>
      <Sidebar />
      <Posts />
    </div>
  </>
);

export default Index;
