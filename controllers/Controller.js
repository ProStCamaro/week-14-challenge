const blogController = {
    init: function () {
      this.addEventListeners();
      this.updateView();
    },
  
    addEventListeners: function () {
      const addButton = document.getElementById('add-button');
      addButton.addEventListener('click', this.handleAddPost.bind(this));
    },
  
    handleAddPost: function () {
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
  
      if (title && content) {
        blogModel.addPost(title, content);
        blogView.clearForm();
        this.updateView();
      }
    },
  
    updateView: function () {
      const posts = blogModel.getPosts();
      blogView.renderPosts(posts);
    },
  };
  
  // Initialize the app
  blogController.init();