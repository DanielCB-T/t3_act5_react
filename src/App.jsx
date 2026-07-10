
import './App.css'
import TodoApp from './components/TodoApp';

// <h1>$(nombre)</h1>
//<></> Fragment

//Pasar Props

function App() {

  return (
    //El section contiene la importacion al archivo TodoApp
    //se le llama al objeto notas (arreglo de notas) y se obtiene el contenido (el arreglo)
      <section className='containerTodoApp'>
        <TodoApp/>
      </section>
  );
}

export default App
