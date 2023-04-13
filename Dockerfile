FROM arm64v8/node:19-alpine3.16

#Crea el directorio de trabajo
WORKDIR /app

#Copia los archivos de la aplicacion al contenedor
COPY package*.json ./

#Instala las dependencias
RUN npm install

COPY . .

RUN npx prisma generate

#Expone el puerto 3000
EXPOSE 3000

#Inicia la aplicacion
CMD ["npm","start"]