import VariableExpression from 'VariableExpression'
import OrExpression from 'OrExpression'
import AndExpression from 'AndExpression'
import Constant from 'Constant'
import NotExpression from 'NotExpression'
import Context from 'Context'

const p = new VariableExpression('p')
const q = new VariableExpression('q')

// Expression: "(true AND p) OR (q AND NOT p)"
const expr = new OrExpression(
  new AndExpression(new Constant(true), p),
  new AndExpression(q, new NotExpression(p))
)

const context = new Context()
context.assign(p, true)
context.assign(q, true)
console.log(`(p=true, q=true) The result is: ${expr.evaluate(context)}`)

context.assign(p, true)
context.assign(q, false)
console.log(`(p=true, q=false) The result is: ${expr.evaluate(context)}`)

context.assign(p, false)
context.assign(q, true)
console.log(`(p=false, q=true) The result is: ${expr.evaluate(context)}`)

context.assign(p, false)
context.assign(q, false)
console.log(`(p=false, q=false) The result is: ${expr.evaluate(context)}`)
