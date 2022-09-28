
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";

function App() {
  const onDelete = () => {
    console.log('I am deleted')
  }
  let todos = [
    {
      sno: 1,
      title: "go to market",
      desc:"go to market to get this job done"
    },
    {
      sno: 2,
      title: "go to shop",
      desc:"go to market to get this job done"
    },
    {
      sno: 3,
      title: "go to mall",
      desc:"go to market to get this job done"
    }
  ]
  return ( 
    <>
      <Header title="My Todos List" />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
