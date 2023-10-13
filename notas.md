LINUX
- npm --version (si no tiene)   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash,  source ~/.bashrc, nvm install 14.18.1 // Node LTS
- nvm install 18.16.1
- node --version (si no instalarlo)


WINDOWS
- Instalar nvm desde la web
- nvm install vX.Y.Z  (instalar version que se quiera de node)
- nvm use vX.Y.Z (para usar la version mode)


CONFIGURAR JSON-SERVER
(Mirar readme de json-server)
- npm init -y  (package.json)
- Agregar type module (debajo de main en package.json)
- npm -E -D install json-server (/node_modules, package-lock.json)
- Crear db.json (base de datos)
- Cambiar scripts por: dev: json-server --watch db.json --port +5000 --host +127.0.0.1  (en package.json)
- npm run dev
- npm i (instalar dependencias sino funciona, borrar node_modules y despues ejecutar el comando)

.gitignore (para ocultrarlos y no subirlos al repositorio)

---

- pv3 113
- daniel@ip
- cedula

- nohup npm run dev &

- sudo lsof -i :5010
- sudo kill -9 PID

- https://gndx.dev/blog/instalar-nvm-en-ubuntu-20-04/

- https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-20-04

- https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-20-04-es

- https://blog.ahierro.es/archivos-y-permisos-de-usuario-en-apache-y-linux/
