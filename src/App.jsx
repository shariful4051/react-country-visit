
import { Suspense } from 'react';
import './App.css'
import Countries from './assets/Countries/Countries'

const countryFetch = async()=>{
  const res = await fetch("https://openapi.programming-hero.com/api/all")
  return res.json();
}
const countryPromise = countryFetch()

function App() {
  

  return (
    <>
     <Suspense fallback={<p>countries are coming...</p>}>
      <Countries countryPromise={countryPromise}></Countries>
     </Suspense>
    </>
  )
}

export default App
