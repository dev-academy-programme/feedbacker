import test from 'ava'
import Question from '../src/server/Question.js'

test('Queston extracts designator and title from raw', t => {
  const raw = {
    userEnteredValue: {
      stringValue: '1.0 Who flung dung?'
    }
  }
  const actual = Question(raw)
  t.is('1.0', actual.designator)
  t.is('Who flung dung?', actual.title)
})
