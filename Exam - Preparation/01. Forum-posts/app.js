window.addEventListener("load", solve);

function solve() {
  const input = {
      title: document.getElementById('post-title'),
      category: document.getElementById('post-category'),
      content: document.getElementById('post-content')
  };
  const lists = {
      review: document.getElementById('review-list'),
      published: document.getElementById('published-list')
  };
  document.getElementById('publish-btn').addEventListener('click', publish);
  document.getElementById('clear-btn').addEventListener('click', clear);

  function publish(event) {
      event.preventDefault();

      // read input fields
      const title = input.title.value;
      const category = input.category.value;
      const content = input.content.value;

      // validate input
      if (title == '' || category == '' || content == '') {
          return;
      }

      // create list item 
      const li = document.createElement('li');
      li.className = 'rpost';
      li.innerHTML = `<article>
          <h4>${title}</h4>
          <p>Category: ${category}</p>
          <p>Content: ${content}</p>
      </article>
      <button class="action-btn edit">Edit</button>
      <button class="action-btn approve">Approve</button>`;

      // * add functionality to buttons
      const editBtn = li.querySelector('.edit');
      const approveBtn = li.querySelector('.approve');
      editBtn.addEventListener('click', edit);
      approveBtn.addEventListener('click', approve);

      // append to first list
      lists.review.appendChild(li);

      // clear input fields
      input.title.value = '';
      input.category.value = '';
      input.content.value = '';

      function edit() {
          // populate input fields with values
          input.title.value = title;
          input.category.value = category;
          input.content.value = content;

          // remove list item from list
          li.remove();
      }

      function approve() {
          // move list item from first list to second list
          lists.published.appendChild(li);
          // remove action buttons
          editBtn.remove();
          approveBtn.remove();
      }
  }

  function clear() {
      // set second list HTML to empty string
      lists.published.innerHTML = '';
  }
}







function solve2() {
  const titleInputEl = document.getElementById("post-title");
  const categoryInputEl = document.getElementById("post-category");
  const contentInputEl = document.getElementById("post-content");
  const reviewUlEl = document.getElementById("review-list");
  const publishedUlEl = document.getElementById("published-list");
  const reviewMessage = document.getElementById("reviewed-msg");
  const uploadedMessage = document.getElementById("approved-msg");
  document.getElementById("clear-btn").addEventListener("click", clearPosts);

  const submitButtonEl = document
    .getElementById("publish-btn")
    .addEventListener("click", (ev) => {
      if (
        titleInputEl.value !== "" &&
        categoryInputEl.value !== "" &&
        contentInputEl.value !== ""
      ) {
        addPost(
          ev,
          titleInputEl.value,
          categoryInputEl.value,
          contentInputEl.value
        );
        clearInputFileds();
      }
    });

  function addPost(ev, titleInputEl, categoryInputEl, contentInputEl) {
    // ev.preventDefault();

    const li = elGenerator("li");
    li.setAttribute("class", "rpost");
    const article = elGenerator("article", "", li);
    elGenerator("h4", `${titleInputEl}`, article);
    elGenerator("p", `Category: ${categoryInputEl}`, article);
    elGenerator("p", `Content: ${contentInputEl}`, article);

    const approveBtn = elGenerator("button", "Approve", li);
    approveBtn.setAttribute("class", "action-btn approve");
    // approveBtn.setAttribute("class", "approve");
    const editBtn = elGenerator("button", "Edit", li);
    editBtn.setAttribute("class", "action-btn edit");
    // editBtn.setAttribute("class", "edit");

    reviewUlEl.appendChild(li);

    if (reviewUlEl.children.length !== 0) {
      reviewMessage.style.display = "none";
    }

    approveBtn.addEventListener("click", (ev) => approvePost(ev, article));
    editBtn.addEventListener("click", (ev) =>
      editPost(ev, titleInputEl, categoryInputEl, contentInputEl)
    );
  }

  function editPost(ev, _titleInputEl, _categoryInputEl, _contentInputEl) {
    ev.target.parentNode.remove();

    titleInputEl.value = _titleInputEl;
    categoryInputEl.value = _categoryInputEl;
    contentInputEl.value = _contentInputEl;
  }

  function approvePost(ev, articleEl) {
    ev.target.parentNode.remove();

    const publishedLiEl = document.createElement("li");
    publishedLiEl.className = "rpost";
    publishedLiEl.appendChild(articleEl);
    publishedUlEl.appendChild(publishedLiEl);

    if (publishedUlEl.children.length !== 0) {
      uploadedMessage.style.display = "none";
    }

    if (reviewUlEl.children.length == 0) {
      reviewMessage.style.display = "block";
    }
  }

  function clearPosts() {
    // if (publishedUlEl.children.length > 0) {
    //   publishedUlEl.innerHTML = "";
    //   uploadedMessage.style.display = "block";
    // }
    let postsArray = Array.from(publishedUlEl.children);
    postsArray.forEach((post) => {
      post.remove();
    });
    if (publishedUlEl.children.length == 0) {
      uploadedMessage.style.display = "block";
    }
  }

  function clearInputFileds() {
    titleInputEl.value = "";
    categoryInputEl.value = "";
    contentInputEl.value = "";
  }

  function elGenerator(type, content, parent) {
    const element = document.createElement(type);
    element.textContent = content;

    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}

