## Documentation

Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

Node.js (version 16 ou plus recommandée)

npm (fourni avec Node.js) ou yarn

MongoDB (en local ou via un service cloud comme MongoDB Atlas)

## Server

### Installation du projet

#### Cloner le projet

`git clone https://github.com/L0F0/Technical-test-ASN`

`cd Technical-test-ASN/server`

#### Installer les dépendances

`npm install`
ou
`yarn install`

#### Créer un fichier .env

```
NODE_PORT=3000
NODE_ENV=development


DB_URL=mongodb://localhost:27017
DB_NAME=mini-project-database
```

#### Lancer le projet

`npm start`
ou
`yarn start`

## Client

#### Installer les dépendances

`npm install`
ou
`yarn install`

#### Editer le fichier d'environement si nécessaire

`client/src/environments/environment.ts`

#### Lancer le projet

`npm start`
ou
`yarn start`
