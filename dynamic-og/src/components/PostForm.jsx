import React,{useState} from "react";

const PostForm = ({onFormSubmit}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null);
  
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4139154973.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2700040864.
  const handleSubmit =  (e) => {
    e.preventDefault();
    onFormSubmit({title, content, image});
  }
  
      return (
        <div  >
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button type="submit">Create Post</button>
        </form>
        </div>
      )
}
 export default PostForm;