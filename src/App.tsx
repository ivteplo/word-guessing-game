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
import { Alert } from './components/Alert'
import { Button } from './components/controls/Button'

const maxGuessesCount = 5

export const App = () => {
  const [word, setWord] = useState('')
  const [input, setInput] = useState('')
  const [guesses, setGuesses] = useState<string[]>([])
  const [status, setStatus] = useState<'' | 'won' | 'lost'>(
    ''
  )
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

    const guess = input.trim()

    if (guess.length !== word.length) {
      return
    }

    const updatedGuesses = [...guesses, guess]
    setGuesses(updatedGuesses)

    if (
      guess === word ||
      updatedGuesses.length >= maxGuessesCount
    ) {
      setStatus(guess === word ? 'won' : 'lost')
    }

    textFieldRef.current!.value = ''
    onInput()
  }

  const onAlertClose = () => {
    setStatus('')
  }

  const onAlertTransitionEnd = () => {
    setNewWord()
    focusOnInput()
  }

  useEffect(() => {
    focusOnInput()
    setNewWord()
  }, [])

  useEffect(() => {
    if (textFieldRef.current) {
      textFieldRef.current.value = ''
    }

    setGuesses([])
    onInput()
  }, [word])

  return (
    <div className="App h-screen flex flex-col-reverse lg:flex-row text-default select-none">
      <nav className="bg-secondary lg:bg-default flex flex-col items-center justify-center lg:items-start lg:justify-start p-4">
        <h2 className="text-2xl font-bold mb-4 hidden lg:visible">
          Menu
        </h2>

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
            target="_blank"
            referrerPolicy="no-referrer"
          >
            GitHub
          </Navigation.Link>
        </Navigation.MenuSection>
      </nav>

      <main
        className="bg-secondary p-4 flex-grow flex flex-col items-center justify-center"
        onClick={focusOnInput}
      >
        <section className="mb-8 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-2">
            Guess the word
          </h1>

          <p className="text-lg text-default opacity-75">
            Just start typing. After filling all the blanks
            for letters, press <code>Enter</code>. You have
            5 tries
          </p>
        </section>

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

      <Alert
        isOpen={!!status}
        title={
          'You ' +
          (guesses.slice(-1)[0] === word ? 'won' : 'lost')
        }
        onClose={onAlertClose}
        showCloseButton={false}
        onLeaveTransition={onAlertTransitionEnd}
        buttons={
          <>
            <Button
              className="filled"
              autoFocus
              onClick={onAlertClose}
            >
              Start a new game
            </Button>
          </>
        }
      >
        <p className="flex flex-col items-center">
          <span>The word was:</span>
          <b className="text-2xl">{word}</b>
        </p>
      </Alert>
    </div>
  )
}
