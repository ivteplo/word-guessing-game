import * as Navigation from './components/navigation'
import { getRandomWord } from './library/getRandomWord'
import about from './constants/aboutSection.json'
import './App.css'

import { RepoIcon, SyncIcon } from '@primer/octicons-react'
import {
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react'
import { InputGrid } from './components/game/InputGrid'

const maxGuessesCount = 5

export const App = () => {
  const [word, setWord] = useState('')
  const [input, setInput] = useState('')
  const [guesses, setGuesses] = useState<string[]>([])
  const textFieldRef = useRef<HTMLInputElement>(null)

  const setNewWord = () => setWord(getRandomWord())

  const focusOnInput = () => textFieldRef.current?.focus()

  const onInput = () => {
    let value = textFieldRef.current?.value ?? ''
    value = value.slice(0, word.length)

    textFieldRef.current!.value = value

    if (value.length < word.length) {
      value += ' '.repeat(word.length - value.length)
    }

    setInput(value)
  }

  const onGuess: FormEventHandler = (event) => {
    event.preventDefault()

    if (input.trim().length !== word.length) {
      return
    }

    const guess = input
    setGuesses([...guesses, guess])

    if (input === guess) {
      // TODO: show 'you won'
    } else if (guesses.length > maxGuessesCount) {
      // TODO: show 'you lose'
    }

    textFieldRef.current!.value = ''
    onInput()
  }

  useEffect(() => {
    focusOnInput()
    setNewWord()
  }, [])

  useEffect(() => {
    if (textFieldRef.current) {
      textFieldRef.current.value = ''
    }

    onInput()
  }, [word])

  return (
    <div className="App h-screen flex text-default select-none">
      <nav className="bg-default flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>

        <Navigation.MenuSection sectionName="Game">
          <Navigation.Button
            onClick={setNewWord}
            icon={SyncIcon}
          >
            Choose a new word
          </Navigation.Button>
        </Navigation.MenuSection>

        <Navigation.MenuSection sectionName="About">
          <Navigation.Link
            href={about.repoURL}
            icon={RepoIcon}
          >
            GitHub
          </Navigation.Link>
        </Navigation.MenuSection>
      </nav>
      <main
        className="bg-secondary p-4 flex-grow"
        onClick={focusOnInput}
      >
        <h1 className="text-4xl font-bold">Hello!</h1>

        {guesses.map((guess, index) => (
          <InputGrid
            diff
            input={guess}
            expected={word}
            className="my-4"
            key={guess + index}
          />
        ))}

        <InputGrid input={input} className="mt-4 mb-8" />

        <form onSubmit={onGuess} className="sr-only">
          <input
            type="text"
            ref={textFieldRef}
            onInput={onInput}
            title="Type your guess here"
          />
          <button type="submit">Submit your guess</button>
        </form>
      </main>
    </div>
  )
}
