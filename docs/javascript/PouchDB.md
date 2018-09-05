# PouchDB
> PouchDB Server needs to run HTTP, so prepare the fallowing: 
For more infos visit (PouchDBs Getting Started)[https://pouchdb.com/getting-started.html]

```
$ cd pouchdb-getting-started-todo
$ python -m SimpleHTTPServer  # for Python 2
$ python -m http.server       # for Python 3
```


## Console Commands

define Variable
```
var mydb = new PouchDB('todos')
```

define log-function
```
function log(x) {console.log(x)}
```

show Database entries
```
mydb.info().then(log)
```
