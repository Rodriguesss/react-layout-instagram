export default function Story(props) {
  const { name } = props;
  return (
    <div class="story">
      <div class="border-story">
        <img src={`./assets/img/${name}.png`} alt="" width="56" height="56" />
      </div>
      <p class="name-story">{name}</p>
    </div>
  )
}