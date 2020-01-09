# How it works

Set the fragment identifier (#) to display the Wifi credentials like so:
`network name|<-n|p->|password` (`|<-n|p->|`) is the a seperator.
Parameters need to be URL encoded.

## Example
Parameter: `Hello World|<-n|p->|789-6ia-Ua6-83H`  
Encoded URL: `https://christianlerke.github.io/WiFi-Landing-Page/#Hello%20World%7C%3C-n%7Cp-%3E%7C789-6ia-Ua6-83H`

![Example](https://github.com/christianlerke/WiFi-Landing-Page/raw/master/Example.jpg)

## NFC Tag Usecase
iOS devices don't yet support Wifi credentials on NFC tags.
So as a second item you can put a url on your tag.
That way devices with support for NFC Wifi crenditals will get prompted to join the network and devices without will be asked to visit this page.
