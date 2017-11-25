# Minimal Youtube Playlist Player

----
# About
Here's a frameless and always-on-top electron app to watch Youtube playlists. Change the playlist by editing the playlist id input field

----
## usage
1. Install electron: 
``` npm install electron -g ```
2. Run script to launch app: ``` npm start ```

----
## build app
To create .exe or .app to run the app in the future without using cmdline, use electron-packager to compile into executables

1. Install electron packager: ``` npm install electron-packager -g ```
2. Run packager: 
 * win32: ``` electron-packager . "Youtube App" --platform=win32 --arch=x64 ```
  * mac: ``` electron-packager . "Youtube App" --platform=mas --arch=x64 ```

----
## thanks
* [Responsive YouTube Player with Playlist (RYPP) v2.22](https://github.com/carloscabo/responsive-youtube-player-with-playlist)
