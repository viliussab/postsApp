import React from 'react';
import {useNavigate} from "react-router-dom";
import {Table} from 'reactstrap';

const PostsTable = ({posts}) => {
    const navigate = useNavigate();

    return (
        <Table>
            <TableHeader/>
            <TableBody posts={posts} navigate={navigate}/>
        </Table>
    );
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
    )
}

const TableBody = ({posts, navigate}) => {
    return (
        <tbody>
            {posts.map(
                (post) =>
                    <TableItem
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        navigate={navigate}
                    />
            )}
        </tbody>
    )
}

const TableItem = ({ title, body, id, navigate}) => {
    return (
        <tr onClick={() => navigate(`/post/${id}`)}>
            <td>{title}</td>
            <td>{body}</td>
        </tr>
    )
}

export default PostsTable;