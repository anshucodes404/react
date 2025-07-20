import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>
      <h1 className="text-center">Introduction to Tailwind and Props</h1>
      <main className="flex mt-4 gap-4 justify-center">
        <Card
          heading="Tailwind CSS"
          desc="This is a CSS library which is utility based"
          CTA="Visit Site"
          link="https://tailwindcss.com/"
        />
        <Card
          heading="Props"
          desc="Props is nothing but properties that is passed in a component"
          CTA="View Docs"
          link="https://react.dev/learn/passing-props-to-a-component"
        />
      </main>
    </>
  );
}

export default App
