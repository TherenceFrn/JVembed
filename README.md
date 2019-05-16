# JVembed

JVembed est un script qui permet d'intégrer dans la page tous les liens vers des images ( png, jpg, jpeg, gif) et vers des webm.


![Alt Text](https://i.imgur.com/o8um8Fd.png)

![Alt Text](https://i.imgur.com/sgpFDLs.gif)

![Alt Text](https://i.imgur.com/sgpFDLs.gif)


## Installation

Il vous faut une extension qui permet d'installer des script
exemple :

- Chrome :
-[TamperMonkey]([https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=fr](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=fr))
-[Chrome User Script]([https://chrome.google.com/webstore/detail/chrome-user-script-handle/dofpeochehjcckohddplnekbcndhcoid?hl=fr](https://chrome.google.com/webstore/detail/chrome-user-script-handle/dofpeochehjcckohddplnekbcndhcoid?hl=fr))

- Firefox :
-[TamperMonkey](https://addons.mozilla.org/fr/firefox/addon/tampermonkey/)
-[Grease Monkeydons](https://addons.mozilla.org/fr/firefox/addon/greasemonkey/)

- Opera
-[TamperMonkey](https://addons.opera.com/fr/extensions/details/tampermonkey-beta/?display=en)

- Safari
-[TamperMonkey](https://tampermonkey.net/?browser=safari)

- Android ( seulement sur firefox )
-[Firefox]( https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=fr )
et et le plugin 'USI' : https://addons.mozilla.org/fr/android/addon/userunified-script-injector/?src=search
(Si vous utilisez un autre navigateur cherchez un plugin de type Tampermonkey/greasemonkey sur Google et avec un peu de chance vous trouverez)

ensuite il vous suffit de cliquer [ici](https://google.fr)
le script est sur [https://openuserjs.org/](https://openuserjs.org/)

## Modifier le script

### Imgur/4Chan

Si vous ne souhaitez pas que toutes les images et webm soient intégrés,
et que seulement le contenu provenant d'Imgur/4Chan le soit

Il vous suffit de remplacer les lignes 8 et 9:

```js
var anywebM = /http[s]*:\/\/.+.\/.+.(webm)/; //Webm
var anyimage = /http[s]*:\/\/.+.\/.+.(jpg|gif|png)/; //Webm
```

par

```js
var anywebM;
var anyimage;
```

### Taille du contenu


Il vous suffit de modigier la ligne 12:

```js
var taille = "25%";
```

et de mettre par exemple

```js
var taille = "150px";
```

## Contact

Si vous souhaitez me contacter pour me demander des informations
ou pour faire un rapport de bug,

Vous pouvez me contacter ici :

[twitter](https://twitter.com/littletherence)
[mail](mailto:therence.ferron@gmail.com)
