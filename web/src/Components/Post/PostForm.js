import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import {POSTS_API_URL} from "../../config";

const PostForm = () => {
    const [title, setTitle] = useState("");
    const [titleValid, setTitleValid] = useState(true);

    const [body, setBody] = useState("");
    const [bodyValid, setBodyValid] = useState(true);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValid()) {
            postToApi().then(() => navigate('/post'))
        }
    }

    const formValid = () => {
        return titleValid && bodyValid;
    }

    const postToApi = async() => {
        const post = {title, body};
        await axios.post(POSTS_API_URL, post);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                        required
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Post name"
                        value={title}
                        invalid={!titleValid}
                        onChange={(e) =>{
                            setTitleValid(e.target.value !== "")
                            setTitle(e.target.value);
                        }}
                    />
                    <FormFeedback>
                        Title is mandatory
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="body">Body</Label>
                    <Input
                        required
                        type="textarea"
                        name="body"
                        id="body"
                        placeholder="Post description"
                        value={body}
                        invalid={!bodyValid}
                        onChange={(e) =>{
                            setBodyValid(e.target.value !== "")
                            setBody(e.target.value);
                        }}
                    />
                    <FormFeedback>
                        Body should not be empty
                    </FormFeedback>
                </FormGroup>
                <Button color="primary" className="mt-2">Submit</Button>
            </Form>
        </>
    );
}

export default PostForm;
