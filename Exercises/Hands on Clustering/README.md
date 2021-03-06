# Consigne : Hands On Clustering

## Description

Le but de l’exercice est de faire votre première implémentation de modèles de Clustering en utilisant un modèle non-supervisé disponible dans la librairie de `sklearn`.

Pour cela, un jeu de données est disponible contenant des descriptions détaillées de fleures. Malheuresement.. Nous ne connaissons pas la race de ces fleures! Comment les regrouper?

Le but de l'exercice est d'arriver a classer les fleures grace a des méthodes de clustering non-supervisé.

## Specs

Plusieurs étapes sont à suivre :

1. Importer le jeu de données et l’explorer.

   - Le dataset `df_iris` est nettoyé et prêt à être importé!
   - Votre notebook doit contenir une rapide analyses de chaques colonne de  `df_iris`.

2. Il faut utiliser la méthode de réduction de dimension [PCA](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html), pour pouvoir visualiser les données sur un graph en deux dimensions.

   - Il faut utiliser l'algorithme de PCA avec 2 components.
   - Il est conseillé de d'abord transformer vos données avec un StardardScaler [StandardScaler](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html) avant le PCA.
   - Vous devez générer un graph en deux dimensions, sur chacun des components généré par votre PCA.

3. Il faut utiliser et fit, deux modèles de clustering :

   1. un modèle de clustering `kMeans`.
      - [kmeans](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html?highlight=kmeans#sklearn.cluster.KMeans)
   2. un modèle de clustering avancé `HDBSCAN`.
      - [hdbscan](https://hdbscan.readthedocs.io/en/latest/basic_hdbscan.html#the-simple-case)

   - Pour chaque modèles, il faut tester plusieurs paramétrages de vos modèles, si il y en de disponible.
   - Utilisez votre graphe de PCA en associant une couleur par cluster trouvé par vos algorithmes de clustering.
  
4. Un dataset avec les vrais labels pour pouvoir comparer vos clustering.

   - Comparer chacun de vos clusterings avec les vrais classes du modèle de donnée.
   - Bonus : Essayez de jouer avec les paramètres du HDBSCAN, pour essayer de classer le plus proche possible vos données des vrais labels.

## Résultat à soumettre

Vous devez envoyer par mail un dossier zip contenant :

1. Votre **notebook jupyter complet** contenant toutes les étapes des **specs**.
   - Un maximum de textes et de commentaires présent sur votre notebook permettent d'expliquer chaque cellules de code, votre intention et votre interpretation.

L’envoi du mail doit se faire à l’adresse mail suivante :

- contact.aguynextdoor@gmail.com
