# Developing Simple Electron and Angular App from Scratch

In this Gist I node down all snippets and steps, which have to be done to build an Electron and Angular App from Scratch. 

#### Preparing and Initializing

Requirements
- latest Node.JS installed
- Editor like Atom
- Terminal

Make a working/root direction for the app. Get into that folder and open the terminal from this direction. 

### Installing Electron

At first, we need to initialize .JSON-Files and "node-modules"

``` npm install electron ``` 

## Initializing Index

Create a `main.js` and a `index.html` file. (In this example we are going to do this in the root-directory of that project)

### main.js

Insert this Code below into the `main.js` file. 
``` 
const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let win = new BrowserWindow({width:900, height:600})
  win.loadURL(`file://${__dirname}/index.html`)
})
```

### index.html

Insert this Code below into the `index,html` file. 
 
``` 
<!doc html>
<html>
  <head>
    <title>My App</title>
  </head>
  <body>
    <h1>Electron from Scratch</h1>
  </body>
</html>

```

### Edit Package.JSON

Next we need to edit the JSON-File like add scripts etc. 

