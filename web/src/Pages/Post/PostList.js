import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card, Container} from "reactstrap";
import PostsTable from "../../Components/Post/PostsTable";
import {POSTS_API_URL} from "../../config";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(POSTS_API_URL).then(
            response => {
                console.log(response);
                setPosts(response.data);
            }
        );
    }, []);

    return (
        <Container>
            <Card body className="mt-4">
                <PostsTable posts={posts}/>
            </Card>
        </Container>
    );
}

export default PostList;