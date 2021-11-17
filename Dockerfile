FROM node:14.15.3

RUN apt-get update && apt-get install -y sudo gdebi-core unixodbc unixodbc-dev freetds-bin freetds-dev tdsodbc

###RUN apk add freetds-dev

WORKDIR /app

COPY package*.json ./

RUN npm install

##RUN sudo npm install tedious

COPY . .

COPY ./dist ./dist



CMD ["npm", "run", "start:dev"]
