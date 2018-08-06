# How to flash and root OnePlus 3T on Linux

### Requirements

> **Disclaimer:** I've already done those kind of install on different phones and I'm familiar with the steps. So be sure to read the resources to get an understanding of what happens.

* [ ] battery are `>60%` ;
* [ ] **know what you are doing?**
* [ ] remember that version used worked **for me**.


## Flashing Recovery to TWRP

> Flashing require to do a factory reset. Backup your data.

### Prepare Phone and Computer

1. **enable `Developer Options`**
  1. in `Settings` -> `About Phone` -> `Build Number` (at the bottom)
  1. by tap on it for 5-7 times to enable Developer Options
1. enable `USB Debugging`
  1. in `Settings` -> `Developer Options` -> `USB Debugging.`
1. enable `OEM Unlocking` (in the same list).

1. Download 'Android-Platform-Tools' from [Developer.Android.com](https://developer.android.com/studio/releases/platform-tools)
1. Move into the folder 'Android-Platform-Tools
        

### Install Recovery

1. Reboot to bootloader either with <s>`adb reboot bootloader`</s> or through power button ;
1. Unlock the bootloader:

        sudo fastboot oem unlock

1. Download the [latest TWRP image](https://dl.twrp.me/oneplus3t/) to flash ;

1. Flash the recovery with `TWRP`:

        sudo fastboot flash recovery "$image_to_flash"

1. Reboot to recovery to _wipe cache_ ;
1. Reboot to recovery to _mount_ the device ;

## Rooting with Magisk

> The rooting procedure given here is not a data-loss process but it won’t hurt to have a backup of your smartphone’s personal data.

Download the fallowing Files:

- [Magisk](https://github.com/topjohnwu/Magisk/releases/download/v16.0/Magisk-v16.0.zip) 
- [Magisk Manager](https://github.com/topjohnwu/MagiskManager/releases/download/v5.7.0/MagiskManager-v5.7.0.apk)


1.    Download and transfer both the Magisk zip and Magisk Manager apk files from the download link above to your device’s storage.
1.    Boot your device into TWRP recovery.
1.    Tap on Install and select the Magisk zip file that you transferred to your device in Step 1.
1.    After selecting the .zip file, do Swipe to Confirm Flash on the bottom of screen to begin the flashing process.
1.    Once Magisk is flashed, you’ll get Reboot System option, select it.
1.    Once your device reboots, open a file manager app » go to the folder where transferred the Magisk Manager apk file in Step     1 above, and install it.
1.    Open the Magisk Manager app and check for your device’s root status.


#### :warning: Troubleshooting

* No write access to storage in TWRP? Wipe data/cache (≠ format data)
* Rom not booting? Reinstall recovery and ROM…

## Resources

* [How to Root the OnePlus 3T](https://theunlockr.com/2017/01/20/root-oneplus-3t/)
* [How To Flash TWRP Recovery And Root OnePlus 3T](http://freeandroidroot.com/root-oneplus-3t/) - freeandroidroot ;
* [How to root opt using Linux](https://forums.oneplus.net/threads/how-to-root-opt-using-linux.417046/) - forums.oneplus.net ;
* [OnePlus 3T: How to Unlock Bootloader | Flash TWRP | Root](https://devs-lab.com/oneplus-3t-unlock-bootloader-twrp-root.html) - devs-lab.com ;
* [`@edouard-lopez`](https://gist.github.com/edouard-lopez/44d14602e9c30490513b9f5aa12300fb) - How to flash and root OnePlus 3T on Linux.
* [`@topjohnwu` - Magisk GitHub Repository](https://github.com/topjohnwu/Magisk/)
* [`@topjohnwu` - Magisk Manager GitHub Repository](https://github.com/topjohnwu/MagiskManager/)
