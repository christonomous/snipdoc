
## Node Package Manager

### Global Packages
Finding out which node-packages are installed globaly. 

`npm list -g --depth 0`

## NodeJS Errors

### No Space Left

```events.js:167
      throw er; // Unhandled 'error' event
      ^

Error: ENOSPC: no space left on device, watch 'PATH'
```

Run the below command to avoid ENOSPC:
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` 

Sysctl
`sysctl --system`
> This will also persist across reboots.

*- Ref: [Increasing Amount of Inotify Watchers](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details)*

