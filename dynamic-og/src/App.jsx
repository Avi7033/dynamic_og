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

    //wait for the image to load before capturing
    const img = postElement.querySelector('img');
    if(img && !img.complete){
      await new Promise((resolve) => {
        img.onload = resolve;
      });
    }
    const canvas = await html2canvas(postElement);
    const imgData = canvas.toDataURL('image/png');
    console.log('Generated OG Image data URL:', imgData);
  }
  
  return (
    <div className='App'>
      <h1>Dynamic OG</h1>
      <PostForm onFormSubmit={handleFormSubmit}/>
      <PostPreview title={post.title} content={post.content} image={post.image}/>

      <button onClick={generateOgImage}>Generate OG Image</button>

    </div>
  )
}

export default App
