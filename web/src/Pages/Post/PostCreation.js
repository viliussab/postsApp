import React from 'react';
import {Card, CardTitle, Container} from "reactstrap";
import PostForm from "../../Components/Post/PostForm";

const PostCreation = () => {
    return (
        <Container>
            <Card body className="mt-4">
                <CardTitle tag="h4" className="mb-4">
                    Create a new post
                </CardTitle>
                <PostForm />
            </Card>
        </Container>
    );
}

export default PostCreation;