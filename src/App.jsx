import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import AvailableModel from './components/Model/AvailableModel'
import Navbar from './components/Navbar/Navbar'

const modelPromise = async ()=>
{
  const res= await fetch("/models.json");
  const data=res.json();
  return data;
}
// declare that way does not need any suspense but into the app declaration need suspense

// const modelPromiseData=await modelPromise();
// console.log(modelPromiseData);
function App() {
  const modelPromiseData = modelPromise();
//  console.log(modelPromiseData);

  return (
    <>
     <header>
    <Navbar/>
    <Banner/>
     </header>
     <main>
    <Suspense fallback={
      <div className='flex justify-center items-center scale-150'>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    }>
      <AvailableModel modelPromiseData={modelPromiseData}/>
    </Suspense>
     </main>

     <footer>

     </footer>

  
    </>
  )
}

export default App
