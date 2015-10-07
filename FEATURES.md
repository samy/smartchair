# Fonctionnalités

La réalisation de ce projet a été aussi l'occasion de jeter quelques idées sur les fonctionnalités de la centrale intelligente qui équiperait le fauteuil.

## Portail applicatif / application mobile
- Afficher un indicateur batterie avec une petite icône vite identifiable
- Indiquer la répartiion de l'énergie entre les batteries

## Production d'énergie
L'idée initiale était d'utiliser des batteries (type batteries de secours pour téléphones portables), mais d'autres sources sont possibles.

- Production par panneaux solaires installés sur le fauteuil
- Par une dynamo sur la roue


## Eye-tracking
Une partie de l'équipe a effectué des recherches sur de l'analyse d'images pour être à même de suivre le regard de l'utilisateur, par exemple pour activer d'un coup d'oeil la centrale (et surtout contrôler facilement celle-ci lorsqu'on est dans une situation de handicap touchant les membres supérieurs).

## Eclairage
Nous sommes ici dans un contexte "faible énergie" (avec les batteries), mais la consommation des LED nous permet d'envisager leur utilisation dans ce projet.

- Prévention : afficher un message dans le dos du fauteuil, pour prévenir de loin de la présence de celui-ci
- Luminaire (sur les roues) : pour éclairer la route, ou indiquer leur présence

## Domotique
La présence d'un système informatique (Raspbian dans le prototype) dans la centrale nous permet d'envisager des interactions avec des systèmes complexes comme de la domotique.

- Réglage automatique des lumières et allumage à distance lors de l'arrivée du fauteuil
- Verrouillage à distance de l'habitation depuis le smartphone

## Géolocalisation
Avec des batteries et un emplacement assez important derrière le fauteuil, nous pouvons imaginer également l'intégration d'un système GPS puissant (en regard de ceux présents dans les smartphones).

Fonctionnalités possibles :

- Traces GPS, vitesse moyenne/jour (avec historique)
- Couplage avec des mesures environnementales (dans l'esprit du projet [Crowdsourcing-box](https://github.com/samy/crowdsourcing-box))

## Chromecast, vidéo distante
Il avait été cité un exemple : lors d'une conférence, l'utilisateur d'un fauteuil n'a pas toujours la possibilité de poser son ordinateur sur le pupitre dédié aux orateurs, et cela limite sa possibilité de commander sa présentation.
La centrale pourrait donc inclure :

- un Chromecast pour renvoyer l'image à un périphérique tiers
- une sortie VGA/HDMI pour pouvoir se relier à un vidéo-projecteur, et par exemple, commander les slides depuis le smartphone

## Caméra de recul
Cette fonctionnalité est présente dans le prototype, elle permet par exemple au possesseur de l'équipement de pouvoir reculer/sortir d'un ascenceur à reculons en toute sécurité sans craindre de percuter quelqu'un