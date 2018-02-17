import ObservableSubject from 'ObservableSubject'
import Watcher from 'Watcher'
import Psychologist from 'Psychologist'

const subject = new ObservableSubject()
const watcher = new Watcher()
const psychologist = new Psychologist()

subject.attach(watcher)
subject.attach(psychologist)

for (let i = 0; i <= 10; i++) {
  console.log(`Main: Do you like the number ${i}?`)
  subject.receveValue(i)
}

console.log(`The Watcher has changed ${watcher.changes} times the internal value`)
console.log(`The Psychologist options is ${psychologist.options()}`)
