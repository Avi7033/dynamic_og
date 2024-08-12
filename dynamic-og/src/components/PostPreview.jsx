import React from "react";

const PostPreview = ({title, content, image}) => {
    return (
        <div id="post-preview">
            <h1>{title}</h1>
            <p>{content}</p>
            {image && <img src={URL.createObjectURL(image)} alt="Post" />}
        </div>
    )
}
export default PostPreview;