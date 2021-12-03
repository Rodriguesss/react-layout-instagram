export default function Suggestion(props) {
  const { name, newUser } = props;

  return (
    <div class="suggestion">
      <img src={`./assets/img/${name}.png`} alt="" />
      <div class="suggestion-hashtag">
        <div class="suggestion-name">
          <p>{name}</p>
          <span>{newUser === 0 ? `Segue você` : `Novo no Instagram`}</span>
        </div>
        <div class="suggestion-follow">Seguir</div>
      </div>
    </div>
  )
}