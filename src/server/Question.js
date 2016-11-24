export default function Question (raw) {
  if (raw.hasOwnProperty('userEnteredValue')) {
    const [_, designator, title] = /(\d.\d) (.*)/.exec(raw.userEnteredValue.stringValue)
    return { designator, title }
  }
  return null
}
