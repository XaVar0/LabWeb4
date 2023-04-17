import { useState } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import  {useLoader, Form} from 'react-router-dom'
function IndexForm(props){

  const addPostToIndexedDB = (newPost) => {
    const request = window.indexedDB.open('blogDatabase', 1);
    
    request.onsuccess = function(event) {
      const db = event.target.result;
      const transaction = db.transaction(['posts'], 'readwrite');
      const objectStore = transaction.objectStore('posts');
      const addRequest = objectStore.add(newPost);
  
      addRequest.onsuccess = function(event) {
        console.log('Post ajouté à IndexedDB');
      };
  
      addRequest.onerror = function(event) {
        console.log('Erreur lors de l\'ajout du post à IndexedDB');
      };
    };
    
    request.onupgradeneeded = function(event) {
      const db = event.target.result;
      db.createObjectStore('posts', { keyPath: 'id', autoIncrement:true });
    };
  };

  const [picture, setPicture] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const pictureChange = (e) => {
    setPicture(e.target.value);
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const authorChange = (e) => {
    setAuthor(e.target.value);
  };

  const contentChange = (e) => {
    setContent(e.target.value);
  };

  const submitAction = () => {
    const date = new Date().toLocaleDateString(); 

    const newPost = {
      picture: picture,
      title: title,
      author: author,
      date: date,
      contain: content
    };
    if (window.confirm('Êtes-vous sûr de vouloir ajouter cette publication ?')) {
      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      })
      .then(response => response.json())
      .then(data => {
        alert('Publication ajoute avec succes !');
      })
      .catch(error => {
        console.error(error);
      });
      addPostToIndexedDB(newPost);
    }
  };

  return (
    <div>
      <Header />
      <div className="container" style={{width: '30rem'}}>
        <Form id="addPostForm" className="mt-4" method="post" action='/Process'>
          <div className="mb-3">
            <label htmlFor="pictureInput" className="form-label">Image</label>
            <input type="text" className="form-control" id="pictureInput" required onChange={pictureChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="titleInput" className="form-label">Titre</label>
            <input type="text" className="form-control" id="titleInput" required onChange={titleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="authorInput" className="form-label">Auteur</label>
            <input type="text" className="form-control" id="authorInput" required onChange={authorChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="contentInput" className="form-label">Description</label>
            <textarea className="form-control" id="contentInput" rows="5" required onChange={contentChange}></textarea>
          </div>
          <div className="position-relative">
            <button className="btn btn-dark my-2 my-sm-0 position-absolute end-0" type="button" onClick={submitAction}>Submit</button>
          </div>
        </Form>
      <br/><br/>
      <Footer/>
      </div>
    </div>
);
}
export default IndexForm;