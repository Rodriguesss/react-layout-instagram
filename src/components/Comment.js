export default function Comment(props) {
  return (
    <div class="comment-container">
      <div class="comments">
        <div class="user-comment"><strong class="bold">{props.name}</strong></div>
        <div class="comment">{props.message}</div>
      </div>
      <ion-icon name="heart-outline" class="icon-comment-like"></ion-icon>
    </div>
  )
}