![Proyecto Harry Potter](https://raw.githubusercontent.com/raquelgm88/modulo-3-evaluacion-final-raquelgm88/main/src/images/logo.png)

# Buscador de personajes del universo Harry Potter

¡Hola! esta aplicación web es el resultado del ejercicio de evaluación final del módulo tres del **bootcamp de Programación Web** de **Adalab**, de la promoción **Salas**.

## Cómo funciona la aplicación

### Estructura

Al entrar en la aplicación tenemos un header con el logo de Harry Potter.

Debajo de él hay un formulario para buscar a los personajes. Tiene cuatro componentes:

- Un filtro para buscar a un personaje por su nombre.
- Un filtro tipo select para buscar a los personajes según a la casa de Hogwarts a la que pertenezcan.
- Otro filtro de tipo select para buscar por género: masculino, femenino o todos los personajes.
- Un botón de reset que restablece la búsqueda y pone la aplicación con sus valores iniciales.

Situado bajo el formulario, está el listado de los personajes.

El fondo de toda la página es un vídeo puesto como fondo, que se reproduce en bucle automáticamente.

La estructura de la aplicación está dividida en un componente App.js principal, y cinco componentes hijas.

### Búsqueda

En la barra de búsqueda por personaje podemos escribir el nombre de un personaje o parte de él. La búsqueda es aútomática, se realiza el filtado según vamos escribiendo. De esta manera se muestra el listado de todos los personajes que cumplan los requisitos de la búsqueda. La información que se muestra de cada personaje es su foto, nombre, género y especie.

Podemos aplicar el filtro por casa y/o por género. Se puede buscar utilizando uno, dos o los tres criterios de búsqueda.

Si quieremos buscar otra personaje podemos clicar en el botón **"Reset"** para borrar el campo de búsqueda y poner las opciones seleccionadas por defecto, o directamente borrar de forma manual lo que tengamos escrito y realizar una nueva búsqueda.

### Ver detalles de cada personaje

Cuando queramos conocer más detalles de algún personaje, clicaremos sobre la tarjeta del mismo. De esta manera navegaremos a una url diferente asignada a cada personaje, y en ella veremos su foto, casa a la que pertenece, especie, género, estatus (vivo/a o muerto/a) y nombres alternativos en el caso de que los tenga.

Además, hay un botón de **"Volver"**, y clicando sobre él volveremos a la url de la página principal. Los valores establecidos en los filtros de búsqueda seguirán siendo los mismos que había antes de clicar sobre la ficha de personaje.

## Herramientas utilizadas

- HTML5
- CSS3, SCSS
- React JS
- React Router
- Prop-types
- npm
- NodeJS
- Gulp
- Git
- APIs:
  - https://hp-api.onrender.com/api/characters/house/gryffindor
  - https://hp-api.onrender.com/api/characters/house/ravenclaw
  - https://hp-api.onrender.com/api/characters/house/hufflepuff
  - https://hp-api.onrender.com/api/characters/house/slytherin

## Cómo arrancar el proyecto

Necesitas tener instalado [Node JS](https://nodejs.org/en) para poder arrancar este proyecto.

1. Instala las dependecias locales ejecutando en la terminal el comando:

```
npm install
```

2. Instala el paquete del enrutador React Router DOM:

```
npm install react-router-dom
```

3. Instala la librería para validar las props:

```
npm install prop-types
```

4. Instala por último el paquete para SASS:

```
npm install node-sass
```

5. Arranca el proyecto ejecutando a continuación en la terminal:

```
npm start
```

Se abrirá [http://localhost:3000 ](http://localhost:3000)para ver el proyecto en el navegador en modo desarrollo.
