import { useState } from 'react'
import './App.css'

import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import Services from "./components/Services.tsx"

function App() {
  return (
    <>
      <Header />
      <Services />
      <h1>Hello World</h1>
      <Footer />
    </>
  );
}

export default App
