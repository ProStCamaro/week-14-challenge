const blogView = {
    renderPosts: function (posts) {
      const postList = document.getElementById('post-list');
      postList.innerHTML = '';
  
      posts.forEach((post) => {
        const postItem = document.createElement('div');
        postItem.classList.add('post');
        postItem.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.content}</p>
          <small>${post.timestamp}</small>
        `;
        postList.appendChild(postItem);
      });
    },
  
    clearForm: function () {
      document.getElementById('title').value = '';
      document.getElementById('content').value = '';
    },
  };