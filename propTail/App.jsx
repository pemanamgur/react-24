
import './App.css'
import Card from './Component/card' 

function App() {
 

  let names = ["Pema" , "Namgur", "Tamang"];

  let myObj2 = {
    name1 : "Pema",
    name2 : "Ram"
  }

  return (
    
    <>
    
     <h1 className=' bg-slate-500 text-2xl'>Component are created for reuseability</h1>
           {/* <Card name="Pema" myArr={["Pema","Ram"]} myObj={{name: "Pema" , name2: "Hero"}} />  */}
           {/* <Card  name="Pema" myName={names} anotherObj={myObj2} />  */}
          <Card  name="Ram" address="Ayodha"/>
          {/* <Card  name="Pema" address="Humla"/> */}
          <Card  name="Pema" />
    </>
  )
}

export default App
