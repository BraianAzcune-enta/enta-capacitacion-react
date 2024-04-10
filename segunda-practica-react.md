En la segunda practica de react realizaremos uso de los hooks (useEffect, useMemo, useCallback) ademas de la primera implementacion de un store con redux.
Para la segunda practica de react ademas de manejar datos sencillos con redux empezaremos el uso de hooks y peticiones utilizando una api cualquiera como la PokeApi()
pueden instalar axios o usar el fetch de Javascript hay libertad por ese lado.

La funcion finalizada debe ser que en el componente padre se mostrara lo que obtendran de la peticion ademas de que el drawer debe tener un buscador con el cual puedan filtrar mejor los datos
debe ser utilizado con un formulario (React Final Form) puede ser tan complejo como ustedes lo desean.

El componente padre debe tener un boton que sea capaz de abrir el drawer y un espacio para el contenido.
El componente Drawer estara generado y solo tendran que llamarlo para hacer uso del mismo.

- Librerias de React:
  # redux - https://redux.js.org/
  # react hooks - https://www.youtube.com/watch?v=jaLl4ErmU44&t=31s
  # pokeApi (url para api-rest de practicas) - https://pokeapi.co/
  # react-final-form - https://final-form.org/react
  # tambien pueden revisar el archivo Implementacion-Redux para una explicacion mas breve del redux

Hay libertad de estilos y pueden utilizar css unico.
La llamada de las peticiones thunk para la api debe estar en un useEffect.
Deben manejar los casos de error y los datos.

    # 1.- Se debe generar una carpeta dentro de /capacitacion-react/src llamada:
    # 2.- En el cual se debe generar la feature con el siguiente orden de carpetas.
        # 1.- componentes // carpeta que contiene elementos que conforman la feature
        # 2.- model // carpeta que contiene archivo para exportar los datos del tipeado de los modelos usado para el feature
        # 3.- rest // carpeta que contiene uso de peticiones api
        # 4.- hooks // carpeta que contiene funciones hooks para el feature solamente
        # 5.- common // carpeta que contiene ruta, datos constantes, ...etc, de uso para el feature
        # 6.- store // carpeta para manejo de estado //en el caso de usar redux.
    # 3.- en los Elementos se debe separar los archivos que exportan el elemento visual de sus acciones en archivos.
        # 1.- [descripcion feature]-composite.tsx // Exportar el conjunto de elementos que conforma el feature.
        # 2.- [descripcion archivo]-container.tsx // Contiene funciones y peticiones que se realizan sobre el elemento visual.
        # 3.- [descripcion archivo].tsx // Contiene el elemento visual exportado
    # 4.- Reemplazar '<h1>Bienvenido!!</h1>'  del archivo "capacitacion-react\src\common\components\layout\Content.tsx" con tu feature-composite.tsx
    # 5.- La nueva Carpeta debe llamarse drawer-filtro y debe estar dentro de la carpeta componentes del modulo
        # 1.- drawer-filtro-composite.tsx // Union de los archivos Visuales aqui se debe llamar el archivo EntaDrawer y como children el form.
        # 2.- drawer-filtro-container.tsx // Contiene funciones y peticiones que se realizan sobre el elemento visual.
        # 3.- form.tsx // Contiene el elemento visual exportado
