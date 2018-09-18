/* 
Express.js (https://expressjs.com/) es un framework para implementar ReST.
Debemos descargarlo usando un manejador de módulos como npm o yarn antes de tratar de correr nuestro programa.
Una vez descargado el módulo, este se encuentra en una carpeta llamada node_modules en la raiz de nuestro proyecto.

Lo ideal para estos casos es:
a) Inicializar nuestro proyecto, solo es necesario hacerlo una vez. Esto crea un archivo package.json inicial el cual podremos
   ir personalizando a la par que avancemos con el proyecto.
   
$ npm init -y

b) Descargar los módulos que necesitemos y asegurarnos que sean anotados en package.json. El modificados --save indica a npm que
   descargue el módulo y luego lo agregue al apartado "dependencies", así cuando llevemos nuestro proyecto a otro ambiente solo
   debemos indicarle que instale los módulos de "dependencies".

# instalamos el módulo express
$ npm install --save express

# instalamos todos los módulos anotados en "dependencies"
$ npm install 

*/

const express = require('express')

const app = express()

// indicamos que contestar cuando alguien accede a la raiz de nuestro sitio por el método GET
app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.get('/miruta', function (req, res) {
  res.send('Esta es una ruta');
});

app.post('/json', function (req, res) {
    var a = {
        q: 1,
        f: 'atributo'
    };
  res.json(a);
});

app.post('/', function(req, res){
    res.send('Hola mundo por POST');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
