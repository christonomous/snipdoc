module.exports = {
  title: 'Snippet Documentation',
  description: 'Documentation Snippets, Tuts and Infos',
  themeConfig: {
    search: false,
    sidebar: 'auto',
   nav: [
    { text: 'Home', link: '/' },
    { text: 'Linux',
        items: [
          { text: 'Basic Git', link: '/linux/basic-git.md' },
          { text: 'Pacman PGP', link: '/linux/pacman-pgp.md' },
          { text: 'SMB Installation and Config', link: '/linux/SMB_Linux.md' },
        ]},
    { text: 'JavaScript/NodeJS',
        items: [
          { text: 'Learning JavaScript', link: '/javascript/learningjs.md' },
          { text: 'VueJS from Scratch', link: '/javascript/vuejs_from_scratch.md' },
          { text: 'Dev Vuepress', link: '/javascript/vuepress-from-scratch.md' },
          { text: 'Dev Electron', link: '/javascript/electron-from-scratch.md' },
        ]},
    { text: 'Android',
        items: [
          { text: 'Flash/Root OnePlus 3T', link: '/android/How-to-flash-and-root-OnePlus-3T-on-Linux.md' },
        ]}
   ]
 }
}
