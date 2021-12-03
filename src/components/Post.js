import PostComment from './PostComment'
import Comment from './Comment';

export default function Post(props) {
  const { name, someoneProfile, amountLike, postTime, arrayComments } = props;
  return (
    <div class="post">
      <div class="header">
        <div class="profile-header">
          <img src={`./assets/img/${name}.png`} alt="" width="32" height="32" />
          <h3 class="profile-name-header">{name}</h3>
        </div>
        <ion-icon name="ellipsis-horizontal" class="icon-header"></ion-icon>
      </div>

      {name === 'respondeai' ?
        <video autoplay loop>
          <source src="./assets/movie/video.mp4" type="video/mp4" />
          <source src="./assets/movie/video.ogv" type="video/ogg" />
          Seu navegador não suporta vídeos.
        </video> : <img src={`./assets/img/${name}-image.png`} alt="" class="post-img" />}

      <div class="interactions">
        <div>
          <ion-icon name="heart-outline" class="icon-interaction"></ion-icon>
          <ion-icon name="chatbubble-outline" class="icon-interaction"></ion-icon>
          <ion-icon name="paper-plane-outline" class="icon-interaction"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline" class="icon-interaction"></ion-icon>
        </div>
      </div>
      <div class="likes">
        <img src={`./assets/img/${someoneProfile}.png`} alt="" width="20" height="20" />
        <p class="likes-description">Curtido por <strong class="bold">{someoneProfile}</strong> e <strong
          class="bold">outras {amountLike} {amountLike === '1' ? `pessoa` : `pessoas`}</strong></p>
      </div>

      {
        arrayComments.map(item => <Comment name={item.name} message={item.message} />)
      }

      <div class="date">{postTime}</div>

      <PostComment />
    </div>
  )
}
