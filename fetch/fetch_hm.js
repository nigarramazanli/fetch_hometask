let maindiv = document.querySelector('.common-comments');
   fetch('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=6')
     .then(res => res.json())
     .then(data => data.forEach(item => {
       let div =
       ` <div class="user-message">
       <p class="title">Name:${item.name}"</p>
       <p class="user-email">Email:${item.email}"</p>
       <p class="user-comment">Body:${item.body}"</p>
     </div>
     `
       maindiv.innerHTML += div;


    }));