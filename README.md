# Lista de Tareas — React + Vite

## Descripción del proyecto

Este proyecto es una **aplicación de lista de tareas (To-Do List)** construida con **React** y **Vite**, desarrollada como parte de una actividad práctica del curso de React desde cero.

La aplicación permite:

- **Agregar** nuevas tareas escribiéndolas en un input y enviando el formulario.
- **Marcar como completada** una tarea al hacer clic sobre su texto (se muestra tachada).
- **Eliminar** una tarea individual con el botón `✕`.

### Estructura principal

```
src/
├── App.jsx              # Componente raíz, renderiza TodoApp dentro de un <section>
├── App.css               # Estilos del formulario y la lista de tareas
├── index.css             # Estilos globales (reset, tema oscuro)
└── components/
    └── TodoApp.jsx        # Lógica y UI de la lista de tareas
```

El componente `TodoApp` guarda las tareas como un arreglo de objetos en el estado (`notas`), cada uno con la forma:

```js
{ id: crypto.randomUUID(), text: "texto de la tarea", completada: false }
```

A partir de ahí, `map`, `filter` y el spread operator (`...`) se usan para agregar, actualizar y eliminar tareas sin mutar directamente el estado original, tal como lo pide el patrón de trabajo de React.

### Cómo correrlo localmente

```bash
npm install
npm run dev
```

---

## Preguntas de la actividad

### a) ¿Qué diferencia hay entre props y state en React?

Las **props** son datos que un componente **recibe desde su componente padre**. Son de solo lectura: el componente que las recibe no puede modificarlas directamente, solo mostrarlas o usarlas. Sirven para comunicar información "hacia abajo" en el árbol de componentes.

El **state**, en cambio, es un dato que **vive dentro del propio componente** y que este mismo puede modificar (usando su función `set`, como `setNotas`). Cuando el state cambia, React vuelve a renderizar el componente para reflejar ese cambio.

En resumen: las props son como parámetros que le pasan a un componente desde afuera, y el state es la memoria interna y dinámica del componente.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La `key` le permite a React **identificar de forma única cada elemento de una lista**. Gracias a ella, React puede saber exactamente qué elemento se agregó, cuál se eliminó o cuál cambió de posición, y así actualizar solo esos elementos en el DOM en lugar de volver a renderizar toda la lista completa.

Si no se usa una `key` (o se usa el índice del arreglo como key), React puede confundirse al reordenar, agregar o eliminar elementos, provocando errores visuales o de comportamiento (por ejemplo, que el input equivocado pierda el foco o que se borre el elemento incorrecto). Por eso en este proyecto cada tarea se crea con un `id` único (`crypto.randomUUID()`) que se usa como `key`.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación

`useState` es un **Hook de React** que permite que un componente funcional **guarde y recuerde datos que pueden cambiar con el tiempo**. Devuelve un arreglo con dos elementos: la variable con el valor actual, y una función para actualizar ese valor. Cada vez que se llama a esa función, React vuelve a renderizar el componente con el nuevo valor.

En mi aplicación lo usé de dos formas:

```js
// Guarda el arreglo de tareas
const [notas, setNotas] = useState(notass);

// Guarda lo que el usuario va escribiendo en el input
const [texto, setTexto] = useState("");
```

Por ejemplo, cada vez que el usuario escribe en el input, se llama `setTexto(event.target.value)`, lo que actualiza el estado `texto` y hace que React vuelva a renderizar el input con el nuevo valor escrito. Y cuando se agrega una tarea nueva, se llama `setNotas([...notas, nuevaNota])`, lo que actualiza la lista completa de tareas y React vuelve a dibujar la `<ul>` con la tarea agregada.

### d) Enlace de mi repositorio de GitHub

https://github.com/DanielCB-T/t3_act5_react

### e) Enlace de mi proyecto desplegado en GitHub Pages

https://danielcb-t.github.io/t3_act5_react/
