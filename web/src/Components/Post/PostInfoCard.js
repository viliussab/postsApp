import React from 'react';
import {Card, CardText, CardTitle} from "reactstrap";

const PostInfoCard = ({title, body}) => {
    return (
        <Card body className="mt-4">
            <CardTitle tag="h4" className="mb-4">
                {title}
            </CardTitle>
            <CardText>
                {body}
            </CardText>
        </Card>
    );
}

export default PostInfoCard;
