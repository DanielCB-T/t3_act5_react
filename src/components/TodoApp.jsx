import { useState } from "react";//Hook de eventos

function TodoApp(){ //Se le pasa el parametro entre corchetes
    //constante que almacena un arreglo de objetos tipo notas
    const notass =   [{
        id: crypto.randomUUID(),
            text: "soy la nota 1",
            completada: false,
        },
        {
            id: crypto.randomUUID(),
            text: "soy la nota 2",
            completada: false,
    }]; 

    //notas es la variable, setNotas el metodo para cambiar su valor
    //useState permite almacenar y recordar datos dinamicos en un comoponente.
   const [notas, setNotas] = useState(notass); 

   //texto guarda lo que el usuario va escribiendo en el input
   //es un componente controlado: React siempre sabe cual es su valor actual
   const [texto, setTexto] = useState("");

   //se ejecuta cada vez que el usuario escribe en el input
   function handleChange(event){
       setTexto(event.target.value);
   }

   //se ejecuta al enviar el formulario (click en "Agregar" o Enter)
   function handleSubmit(event){
       event.preventDefault(); //evita que la pagina se recargue

       //si el input esta vacio (o solo tiene espacios) no se agrega nada
       if(texto.trim() === "") return;

       const nuevaNota = {
           id: crypto.randomUUID(),
           text: texto,
           completada: false,
       };

       //se crea un nuevo arreglo con las notas anteriores + la nueva
       //nunca se modifica el arreglo original directamente
       setNotas([...notas, nuevaNota]);

       //se limpia el input despues de agregar la nota
       setTexto("");
   }

   //recibe el id de la nota que se quiere eliminar
   function handleEliminar(id){
       //filter regresa un nuevo arreglo con todas las notas EXCEPTO la del id recibido
       const nuevasNotas = notas.filter(nota => nota.id !== id);
       setNotas(nuevasNotas);
   }

   //recibe el id de la nota que se quiere marcar/desmarcar como completada
   function handleCompletada(id){
       const nuevasNotas = notas.map(nota =>
           nota.id === id
               ? { ...nota, completada: !nota.completada } //se invierte el valor
               : nota //el resto de notas no cambia
       );
       setNotas(nuevasNotas);
   }

    return (
        <>
            <h1 className="titulo">Lista de tareas</h1>

            <form className="formularioTarea" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Escribe una nueva tarea"
                    value={texto}
                    onChange={handleChange}
                />
                <button type="submit">Agregar</button>
            </form>

            <ul className="listaTareas">
                {notas.map(nota => (
                    <li key={nota.id} className={nota.completada ? "completada" : ""}>
                        <span onClick={() => handleCompletada(nota.id)}>
                            {nota.text}
                        </span>
                        <button onClick={() => handleEliminar(nota.id)}>✕</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default TodoApp; //exportacion del componente
//props propiedades