## SMB-Server

First we need to install the fallowing components/services:

- samba 
- samba-common 
- smbclient

## Status Server

```
sudo service smbd status
sudo service nmbd status
```

## Basic Configuration

```
sudo mv /etc/samba/smb.conf /etc/samba/smb.conf_alt
sudo nano /etc/samba/smb.conf
```

File should look like this:

```
[global]
workgroup = WORKGROUP
security = user
encrypt passwords = yes
```

### Test SMB Config

```
testparm
```

## User Directorys

#### users
```
sudo mkdir /home/shares/users
sudo chown root:users /home/shares/users/
sudo chmod 770 /home/shares/users/
```

#### pi
```
sudo mkdir /home/shares/pi
sudo chown pi:pi /home/shares/pi/
sudo chmod 700 /home/shares/pi/
```

### Adding paths to Config
```
sudo nano /etc/samba/smb.conf
```

File should look similar to this
```
[SambaTest]
comment = Samba-Test-Freigabe
path = /home/shares/test
read only = no

[SambaUsers]
comment = Samba-Users-Freigabe
path = /home/shares/users
read only = no

[SambaPi]
comment = Samba-Pi-Freigabe
path = /home/shares/pi
read only = no
```

#### Restart Service
```
sudo service smbd restart
sudo service nmbd restart
```
