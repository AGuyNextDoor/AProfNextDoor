# Consigne

## Description

Le but de l'exercice est de decrypter des messages codé à travers l'analyse de fréquence.

## Specs

### Première Partie

Deux fonctions : 
- `encryptMessage`
- `decryptMessage`

Permettent d'encrypter et de decrypter des messages de facon similaire au code de César.
Vous pouvez analyser les fonctions, ainsi qu'un exemple d'implementation vous est fourni.

Un message anglais crypté est donné à décrypter. Pour le décrypter, il faut trouver la clé!

Le but n'est pas de faire du brute-force mais d'utiliser l'analyse de fréquence pour trouver le clé.
Pour cela, un discours anglais vous est fourni pour faire une première analyse de fréquence de chaque lettre. Cette première analyse vous servira de modèle pour la décryption.

Une fois que vous avez calculé la fréquence de chaque lettres vous pouvez faire la meme chose avec le message crypté !
Vous devriez pouvoir comparer les frequences entre les deux messages. Les symboles avec les meme frequences ont du grandes chances d'etre les meme! Cela vous permettra de trouver le nombre de décalage de l'encryption et donc la clé d'encryption!

Vous pouvez vérifier cela avec la fonction `decryptMessage`.

### Deuxième Partie

Deux fonctions : 
- `encryptMessageRand`
- `decryptMessageRand`

permettent d'encrypter et de decrypter des messages mais cette fois ci en mélangeant l'alphabet aléatoirement.

Le nombre de possibilité et de clé est donc bien plus important! Presque impossible à craquer dans l'analyse de fréquence.
Vous pouvez refaire l'analyse de fréquence, matchant un caractère à la fois!


## Résultat à soumettre

Vous devez envoyer par mail un dossier zip contenant :

1. Votre code complet de la résolution de l'exercice.
2. Un fichier texte avec les deux messages codé traduit.
3. Une photo de vos graphs générés.

L’envois du mail doit se faire a l’adresse mail suivante :

- contact.aguynextdoor@gmail.com

Codez l'exercice dans votre langage préféré.

## Ressources

1. Dossier de l'exercice (Google Drive)

- https://drive.google.com/file/d/1dMzBXs3QXjUnr5UJa5SOhyDKTo74zthY/view?usp=sharing
