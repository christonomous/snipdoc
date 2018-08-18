
## Configuration

`git config --global user.name "NAME"`
`git config --global user.email "EMAIL"`

## Repo Organization
`git init`
`git add`
`git commit -a`
`git status`
`git push`


## Update Repository

If you haven't made any changes locally, you can use git pull to bring down any new commits and add them to your master.

`git pull origin master`

If you have made changes, and you want to avoid adding a new merge commit, use git pull --rebase.

`git pull --rebase origin master`

`git pull --rebase`

will work even if you haven't made changes and is probably your best call.
