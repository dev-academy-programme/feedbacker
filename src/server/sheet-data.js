import R from 'ramda'

//import sheet from 'google-forms-reader'
const sheet = {
  get (students) {
    return ['foo', 'bar', 'baz'].filter(student => students.search.includes(student))
  }
  //units: ['wombat', 'aardvark', 'kinkajou'],
  //questions: ['kumquat', 'durian', 'caperberry']
}

const all = sheet => ({ students }) => sheet.get(students)

export default R.applySpec({ all })(sheet)
