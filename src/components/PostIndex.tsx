import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { AxiosData } from "../type/DataType";

const PostIndex = () => {
  const [ posts, setPosts] = useState<AxiosData[]>([]);

  useEffect(() => {
    const getData = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(res.data);
    };
    getData();
  },[]);

  return (
    <ul>
        {
            posts.map(post => <li key={post.id}><Link to={`/posts/${post.id}`}>{post.id}:{post.title}</Link></li>)
        }
    </ul>
  )
}

export default PostIndex