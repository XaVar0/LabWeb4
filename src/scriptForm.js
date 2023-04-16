$(document).ready(function() {
    $('#addPostForm').submit(function(event) {
      event.preventDefault(); 
      const picture = document.getElementById('pictureInput').value;
      const title = document.getElementById('titleInput').value;
      const author = document.getElementById('authorInput').value;
      const content = document.getElementById('contentInput').value;
      const date = new Date().toLocaleDateString(); 
      
      const newPost = {
        picture: picture,
        title: title,
        author: author,
        date: date,
        contain: content
      };
      if (confirm('Êtes-vous sûr de vouloir ajouter cette publication ?')) {
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
          alert('Erreur lors de l\'ajout de la publication');
          console.error(error);
        });
      }
      window.location.href = 'http://localhost:3001'; 
    });
});

  