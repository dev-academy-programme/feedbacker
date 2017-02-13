import R from 'ramda'

//import sheet from 'google-forms-reader'
const sheet = {
  get ({ studentList, unitList }) {
    return {
      students: ['foo', 'bar', 'baz']
        .filter(student => studentList.search.includes(student))
        .map(student => ({ github: student })),
      units: ['wombat', 'aardvark', 'kinkajou']
        .filter(unit => unitList.search.includes(unit))
        .map(unit => ({ designator: unit }))
    }
  }
}

const students = sheet => args => {
  console.log(sheet.get(args))
  return sheet.get(args)
}

export default R.applySpec({ students })(sheet)
