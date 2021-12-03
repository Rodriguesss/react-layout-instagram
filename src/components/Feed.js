import Post from './Post';

const arrayComments1 = [{ name: "barked", message: "Fofo!" }, { name: "barked", message: "Lindo!" }, { name: "meowed", message: "Obrigado!" }]
const arrayComments2 = [{ name: "respondeai", message: "lindão ;)" }, { name: "meowed", message: "au au :3" }, { name: "meowed", message: "Linduh" }]
const arrayComments3 = [{ name: "meowed", message: "Hahahah engraçado!" }, { name: "barked", message: "Não achei graça '-'" }, { name: "barked", message: "Ha Ha.." }]

const posts = [
  { name: "meowed", someoneProfile: "respondeai", amountLike: "100.245", postTime: "1 DAY AGO", array: arrayComments1 },
  { name: "barked", someoneProfile: "adorableanimals2", amountLike: "99.159", postTime: "2 DAY AGO", array: arrayComments2 },
  { name: "respondeai", someoneProfile: "meowed", amountLike: "259.548", postTime: "1 DAY AGO", array: arrayComments3 },
];

export default function Feed() {
  return (
    <div class="feed">
      {posts.map(post => <Post name={post.name} someoneProfile={post.someoneProfile} amountLike={post.amountLike} postTime={post.postTime} arrayComments={post.array} />)}
    </div>
  )
}
