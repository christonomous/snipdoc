# VuePress from Scratch

> You can find the hole vuepress-documentation [here](https://vuepress.vuejs.org/).

In this documentation for getting vuepress initialized we need to work with yarn, because npm doesnt handle required dependencies that well yet. We'll update that later.

 > ### Requirements
 > [yarn](https://yarnpkg.com/lang/en/docs/install/) installed



## Preparing and Initializing Project
First we need a project directory we can work on. So create a folder, name it as you want and get into that direction. After that we need to prepare some other files and dependecies.

### Install as a Local Dependency
This installs all vuepress dependencies and modules.

`yarn add -D vuepress`

### Create a docs Directory
We need now a directory where we can store our documentation.

`mkdir docs`

### Create a Markdown File
Let's create the first markdown file as the index of our documentation.

`echo '# VuePress Snippet Documentation' > docs/README.md`

### Initializing Scripts
Now, we need to add these scripts below into the `package.json`, which has been created by installing vuepress dependecies. With these scripts we can start the dev mode or build our project.

```js
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
> Keep in mind the form of `package.json`. Later is has to look something like this:
```js
{
  "devDependencies": {
    "vuepress": "^0.13.1"
  },
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

### Run dev
Lets check out, if our vuepress works.

`yarn docs:dev`

---

## Configuration
So vuepress is running right now, so far so good. But we may want to improve vuepress way more, so we need a `config.js` file.

### Config file
We need to make a hidden directory `.vuepress` in which we can create the file `config.js`.

The folder structure should look like this:
```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```
Now we need to export an JavaScript object. Insert the fallowing into the `config.js`

```js
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```

### Navigation
The navigation will be activated, if we add the fallowing snippet into the `.vuepress/config.js` file.
> Keep in mind the form - remember, we already added the function `module.export`.

```js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
```

### Sidebar
The sidebar will be activated, if we add the fallowing snippet into the `.vuepress/config.js` file.
> Keep in mind the form - remember, we already added the function `module.export`.

```js
module.exports = {
  themeConfig: {
    sidebar: 'auto',
  }
}
```
