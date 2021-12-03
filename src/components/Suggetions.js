import Suggestion from './Suggestion'

const suggestions = [{ name: 'bad.vibes.memes', newUser: 0 }, { name: 'chibirdart', newUser: 0 }, { name: 'razoesparaacreditar', newUser: 1 }, { name: 'adorableanimals', newUser: 0 }, { name: 'smallcutecats', newUser: 0 }]

export default function Suggestions() {
  return (
    <div class="suggestions">
      <div class="container-suggestions">
        <p class="suggestion-title">Sugestões para você</p>
        <p class="suggestion-expand">Ver tudo</p>
      </div>

      {suggestions.map(suggestion => <Suggestion name={suggestion.name} newUser={suggestion.newUser} />)}
    </div>
  )
}