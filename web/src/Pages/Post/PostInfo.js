import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {Container} from "reactstrap";
import PostInfoCard from "../../Components/Post/PostInfoCard";
import {POSTS_API_URL} from "../../config";

const PostInfo = () => {
    const { id } = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        const url = `${POSTS_API_URL}/${id}`
        axios.get(url).then(
            response => {
                console.log(response);
                setPost(response.data);
            }
        );
    }, [id]);
    return (
        <Container>
            <PostInfoCard title={post.title} body={post.body}/>
        </Container>
    );
}

export default PostInfo;