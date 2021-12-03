import Story from './Story';

const stories = [{ name: '9gag' }, { name: 'meowed' }, { name: 'barked' }, { name: 'nathanwpyle' }, { name: 'wawawiwac...' }, { name: 'respondeai' }, { name: 'filomoderna' }, { name: 'memeriago...' }]

export default function Stories() {
  return (
    <div class="stories-arrow-story">
      <div class="stories-overflow">
        <div class="stories">
          {
            stories.map(item => <Story name={`${item.name}`} />)
          }
        </div>
      </div>
      <ion-icon name="chevron-forward-circle-sharp" class="icon-story"></ion-icon>
    </div>
  )
}