const blogModel = {
    posts: [],
    addPost: function (title, content) {
      const newPost = {
        title,
        content,
        timestamp: new Date().toLocaleString(),
      };
      this.posts.push(newPost);
    },
    getPosts: function () {
      return this.posts;
    },
  };