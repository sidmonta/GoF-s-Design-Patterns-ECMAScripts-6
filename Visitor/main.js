import VisitableString from 'VisitableString'
import VisitableFloat from 'VisitableFloat'
import WatcherVisitor from 'WatcherVisitor'

const untidyObjectCase = []
untidyObjectCase.push(new VisitableString('A string'))
untidyObjectCase.push(new VisitableFloat(1))

const aVector = [
  new VisitableString('Another string'),
  new VisitableFloat(12)
]

untidyObjectCase.push(aVector)
untidyObjectCase.push(new VisitableFloat(1))
untidyObjectCase.push(7)

const browser = new WatcherVisitor()
browser.visit(untidyObjectCase)
