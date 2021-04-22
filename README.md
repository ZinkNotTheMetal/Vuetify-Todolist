# Vuetify Todo list
## Technologies
1. Vue 2.x
2. Vuetify
3. Jest - javascript unit testing framework

# Prerequisits
## Creating the app
1.  Node.js (with NPM)   
    a. For Linux Installation
    ```bash
    $ sudo apt install nodejs npm
    ```
    b. For Windows Installation   
    Go to [Node.js](https://nodejs.org/en/) Website then install the .msi
2.  Vue-CLI
    ```bash
    $ npm install -g @vue/cli
    ```
# How to run

## Within Node
### Development
```bash
$ npm run serve
```
### Production
```bash
$ npm run build
```

## Within Docker
This will be in production mode
```bash
$ docker build -t vuetify-todolist:latest . 
$ docker run -p 5000:80 vuetify-todolist:latest
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
