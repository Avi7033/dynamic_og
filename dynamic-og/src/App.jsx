import React, {useState} from 'react';
import './App.css'
import PostForm from './components/PostForm';
import PostPreview from './components/PostPreview';
import html2canvas from 'html2canvas';

function App() {
   const [post, setPost] = useState({title:"", content:"", image:null});
  
  const handleFormSubmit =  (formData) => {
    setPost(formData);
  }
  const generateOgImage = async() => {
    const postElement = document.getElementById('post-preview');
    const canvas = await html2canvas(postElement);
    const imgData = canvas.toDataURL('image/png');
    console.log('Generated OG Image data URL:', imgData);
  }
  c
  return (
    <>
      <h1>Dynamic OG</h1>
      <PostForm onFormSubmit={handleFormSubmit}/>
      <PostPreview title={post.title} content={post.content} image={post.image}/>
      <button onClick={generateOgImage}>Generate OG Image</button>

    </>
  )
}

export default App
