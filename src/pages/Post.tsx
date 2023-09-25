import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AxiosData } from "../type/DataType";
import axios from "axios";

const Post = () => {
  const [post, setPost] = useState<AxiosData>();
  const { postId } = useParams();

  useEffect(() => {
    const getPost = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(res.data);
    };
    getPost();
  },[]);

  return (
    <>
        <p>ID:{post?.id}</p>
        <p>タイトル:{post?.title}</p>
        <p>内容:{post?.body}</p>
    </>
  )
}

export default Post