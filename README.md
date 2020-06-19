Autor: Ing. Martin Acosta - 2020
# Proyecto Final DAW
## Introducción 🚀
El siguiente repositorio es la presentación del trabajo final de la asignatura Desarrollo de Aplicaciones Web, para la Carrera de Especialización en Internet de las Cosas de la Facultad de Ingeniería de la Universidad de Buenos Aires (CEIoT - FIUBA).
## Descripción 📋
El proyecto es un prototipo de panel de control para un sistema de domótica, implementado mediante una SPA (Single-Page Application). La aplicación cuenta con switches para encender y apagar los dispositivos, así como también posee botones para filtrar la vista por tipo de dispositivo.
## Captura de la aplicación 📸
![alt text](https://i.ibb.co/mz9Pd0w/smarthome1.png)
## Pre-requisitos 📦
Para ejecutar el proyecto es necesario tener instalado Docker y Docker Compose. En caso de no ser así, puede encontrar una introducción a [Docker](https://iot-es.herokuapp.com/post/details/2) y [Docker Compose](https://iot-es.herokuapp.com/post/details/5), asi como también sus respectivos procesos de instalación.
## Correr la aplicación 🔧
Para correr la aplicación deberá clonar o descargar el repositorio e ingresar a la carpeta del proyecto:
```sh
git clone https://github.com/javosmar/daw_tp_final.git
cd daw_tp_final
```
Una vez dentro de la carpeta, ejecutar el siguiente comando:
```sh
docker-compose up
```
Luego de que los contenedores estén corriendo, deberá ingresar desde su navegador a la siguiente dirección.
```sh
http://localhost:8000
```
En caso de que al ingresar a la dirección anterior se despliegue una ventana sin contenido, deberá esperar unos segundos hasta que los contenedores estén completamente desplegados.
## Construido con 🛠️
* [Materializze](https://materializecss.com/)
* [Typescript](https://www.typescriptlang.org/)
* [NodeJS](https://nodejs.org/)
* [Docker](https://www.docker.com/)
## Contribuir 🖇️
Para contribuir realizar un pull request con las sugerencias.
## Licencia 📄
GPL