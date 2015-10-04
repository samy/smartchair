# Smartchair
Projet de portail destiné au concept SmartChair dans le cadre de l'atelier Objets Connectés du 3 octobre 2015

La problématique initiale était liée à un besoin quotidien d'un des participants, Alex, en fauteuil roulant : pouvoir utiliser son smartphone en "mains libres".




# Installation NodeJS

	sudo apt-get install nodejs git

# Diffusion vidéo


### Essai avec MJPEG Streamer


#### Installation couche logicielle caméra
##### Installation SVN
	sudo apt-get subversion
##### Tutoriel d'installation
http://blog.miguelgrinberg.com/post/how-to-build-and-run-mjpg-streamer-on-the-raspberry-pi

Résultat :

- lag léger à cause de MJPEG
- qualité faible	

### Essai avec VLC
	sudo apt-get install vlc
	raspivid -o - -t 0 -hf -b 1000000 -w 640 -h 480 -fps 24 |cvlc -vvv stream:///dev/stdin --sout '#standard{access=http,mux=ts,dst=:8160}' :demux=h264

Résultat : belle image mais très gros lag (2s)


