import words from '../constants/words.json'
import { random } from '../helpers/random'

export const getRandomWord = () =>
  words[random(0, words.length)]
