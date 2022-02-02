import * as Navigation from './components/navigation'
import { getRandomWord } from './library/getRandomWord'
import about from './constants/aboutSection.json'
import './App.css'

import { RepoIcon, SyncIcon } from '@primer/octicons-react'
import { useEffect, useState } from 'react'

export const App = () => {
  const [word, setWord] = useState('')

  const setNewWord = () => setWord(getRandomWord())

  useEffect(() => {
    setNewWord()
  }, [])

  return (
    <div className="App h-screen flex text-default">
      <nav className="bg-default flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>

        <Navigation.MenuSection sectionName="Game">
          <Navigation.Button onClick={setNewWord} icon={SyncIcon}>
            Choose a new word
          </Navigation.Button>
        </Navigation.MenuSection>

        <Navigation.MenuSection sectionName="About">
          <Navigation.Link href={about.repoURL} icon={RepoIcon}>
            GitHub
          </Navigation.Link>
        </Navigation.MenuSection>
      </nav>
      <main className="bg-secondary p-4 flex-grow">
        <h1 className="text-4xl font-bold">Hello!</h1>
        <p>The word is {word}</p>
      </main>
    </div>
  )
}
