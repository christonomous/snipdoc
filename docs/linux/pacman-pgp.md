# Pacman Troubleshooting
> PGP Error

1. Remove old (and possibly broken) keys by entering this command:

`sudo rm -r /etc/pacman.d/gnupg`

2. Reinstall keyrings including the latest keys:

`sudo pacman -Sy gnupg archlinux-keyring manjaro-keyring`

3. Initialize the pacman keyring:

`sudo pacman-key --init`

4. Load the signature keys:

`sudo pacman-key --populate archlinux manjaro`

5. Refresh and update the signature keys:

`sudo pacman-key --refresh-keys`

6. Clear out the software packages downloaded during the aborted installation (optional):

`sudo pacman -Sc`
