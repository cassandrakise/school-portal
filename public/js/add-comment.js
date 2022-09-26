async function commentFormHandler(event) {
  event.preventDefault();
  const comment_name = document.querySelector('#comment_name').value;
  const comment_text = document.querySelector('#comment_text').value;

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];
  // Send fetch request to add a new comment
  const response = await fetch(`/api/comment`, {
    method: 'POST',
    body: JSON.stringify({
      post_id,
      comment_name,
      comment_text,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if the comment is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add comment');
  }
}

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);