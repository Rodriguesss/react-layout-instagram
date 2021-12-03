export default function PostComment() {
  return (
    <div class="comment-container-input">
      <div class="comment-items">
        <ion-icon name="happy-outline" class="icon-smile"></ion-icon>
        <input type="text" placeholder="Adicionar um comentário" class="input-comment" />
      </div>
      <button type="button" class="comment-button">Publicar</button>
    </div>
  )
}