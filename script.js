document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');

    // Dummy blog post data
    const blogPosts = [
        { title: 'First Post', content: 'This is the content of the first post.' },
        { title: 'Second Post', content: 'This is the content of the second post.' },
        // Add more posts as needed
    ];

    // Render blog posts
    blogPosts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        content.appendChild(article);
    });

    // Dummy advertisements
    const advertising = document.getElementById('advertising');
    advertising.innerHTML = `
        <div>Advertisement 1</div>
        <div>Advertisement 2</div>
    `;
});
