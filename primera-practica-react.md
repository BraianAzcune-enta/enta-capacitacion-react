En la primera practica de react realizaremos una calculadora.
la aplicacion utiliza React Bootstrap como base de estilos. --> // https://react-bootstrap.netlify.app/docs/getting-started/introduction
Utilizar lo aprendido del video --> // https://youtu.be/7iobxzd_2wY?si=YPiDvt3NvAaip1fK
Hay libertad de estilos y pueden utilizar css unico.
Debe validar solo numeros, hacer la operacion y dar el resultado.


    # 1.- Se debe generar una carpeta dentro de /capacitacion-react/src llamada: calculadora
    # 2.- En el cual se debe generar la feature con el siguiente orden de carpetas.
        # 1.- componentes // carpeta que contiene elementos que conforman la feature 
        # 2.- model // carpeta que contiene archivo para exportar los datos del tipeado de los modelos usado para el feature
        # 3.- api // carpeta que contiene uso de peticiones api
        # 4.- hooks // carpeta que contiene funciones hooks para el feature solamente 
        # 5.- common // carpeta que contiene ruta, datos constantes, ...etc, de uso para el feature
        # 6.- store // carpeta para manejo de estado //en el caso de usar redux.
    # 3.- en los Elementos se debe separar los archivos que exportan el elemento visual de sus acciones en archivos.
        # 1.- [descripcion feature]-composite.tsx // Exportar el conjunto de elementos que conforma el feature.
        # 2.- [descripcion archivo]-container.tsx // Contiene funciones y peticiones que se realizan sobre el elemento visual.
        # 3.- [descripcion archivo].tsx // Contiene el elemento visual exportado
    # 4.- Reemplazar '<h1>Bienvenido!!</h1>'  del archivo "capacitacion-react\src\common\components\layout\Content.tsx" con tu feature-composite.tsx
