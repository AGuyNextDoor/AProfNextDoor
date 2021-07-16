# Consigne : HandsOn Keras

## Description

Le but de l’exercice est de découvrir et manipuler la librairie **`Keras`** construite par dessus **`TensorFlow`** pour construire des réseaux neuronaux de machine learning.

Pour cela, un jeu de données est disponible contenant des descriptions détaillées de maisons ainsi que leurs prix de ventes.
Votre hypothèse est de prédire le prix de vente d’une maison grâce à des réseaux neuronaux.

## Specs

Plusieurs étapes sont à suivre :

1. Importer le jeu de données et l’explorer.

   - Le dataset `df_dataset` est nettoyés et prêt à être implémentés.
   - Votre notebook doit contenir une rapide analyses du jeu de données `df_dataset`.

2. Importer les librairies nécéssaires :

   - VOici une liste minimal de librairies a importer pour réaliser l'exercice :
     - `matplotlib`
     - `numpy`
     - `pandas`
     - `tensorflow` (version 2)
     - `keras` de `tensorflow`
     - `plot_model` de `keras`
     - `visualizer` de `keras_visualizer`

3. Diviser votre jeu de données en un _set d'entraînement_ et un _set de test_.

   - Il faut mélanger `df_dataset` avant de le séparer.
   - Le _set de test_ doit représenter 10% de `df_dataset`.
   - Une fois que vous avez les deux sets d'entrainement et de test, il faut retirer la colonne des prix `SalePrice` qui est l'output (y) que l'on veut prédire.

   - A la fin vous devez avoir 4 dataframes :
       1. `data_train_X` : qui contient toutes les valeurs d'entrainements sans le prix des maisons;
       2. `data_train_y` : qui contient les prix de toutes les valeurs d'entrainements;
       3. `data_test_X` : qui contient toutes les valeurs de tests sans le prix des maisons;
       4. `data_test_y` : qui contient les prix de toutes les valeurs de tests;

   - Vous pouvez le faire la divison à la main, mais il est recommandé d'utiliser l'outil `train_test_split` de `sklearn`.

4. Normaliser chaques colonnes du dataset `df_dataset` :

   1. Deux outils sont à explorer pour la normalisation :
      - [ScikitLearn preprocessing : Normalizer](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.Normalizer.html#sklearn.preprocessing.Normalizer)
      - [Keras preprocessing : Normalization](https://www.tensorflow.org/api_docs/python/tf/keras/layers/experimental/preprocessing/Normalization)

   - Pour **Scikit Learn**, l'utilisation est simplement de l'exploration, vous devez utiliser une copie de `df_dataset` pour creer un dataframe normalisé.
   - Pour **Keras**, vous devez créer une couche `normalizer` dont vous vous servirez ensuite pour créer vos réseaux neuronaux.
  
5. Créer des réseaux neuronaux avec Keras

   1. Une régression linéaire DIY

      Créer l'équivalent d'une régression linéaire avec :
      - Une couche de normalisation
      - une couche `Dense` d'une unité (output y)

   2. Une modèle neuronale profond

      Créer un réseau neuronale de plusieurs couches :
      - Une couche de normalisation
      - Une couche `Dense` de 64 noeuds
      - Une couche `Dense` de 64 noeuds
      - Une couche `Dense` de 32 noeuds
      - Une couche `Dense` de 1 unité (output y)

   Pour ces deux modèles, il faut : 
      - imprimer un résumé du modèle avec : `model.summary()` 
      - entrainer sur le dataset d'entrainement
      - que la taille de validation soit la meme que la taille du dataset de test
      - entrainer avec un nombre suffisant d'epochs (cette quantitée doit etre déduite a partir du graphique du `loss`)
      - générer un graph avec la fonction `plot_loss` pour visualiser la `loss` du modèle
      - analyser rapidement les perfomances du modèle sur les prédictions sur le dataset de test

   **Bonus** : Vous pouvez tenter de mettre l'entrainement dans une boucle et faire 5 epochs d'entrainement par boucle. A chaque itération, récupérez le loss de la validation. Si il augmente 3 itérations à la suite, arretez la boucle.

6. Utiliser la sauvegarde de checkpoints pendant l'entrainement

   - Vous pouvez sauvergarder les poids et certaines étapes de l'entrainements grace à un `callback` de keras : `ModelCheckpoint`.
   - Créez un réseau neuronale de plusieurs couches :
      - Une couche de normalisation
      - Une couche `Dense` de 64 noeuds
      - Une couche `Dense` de 1 unité (output y)
   - Ajoutez le callback `ModelCheckpoint` lors de l'entrainement du modèle pour sauvergarder les poids du modèles

7. Utiliser le Tuner d'hyperparamètre de Keras

   - Importez la librairie `keras-tuner`.
   - Créez 2 listes d'hyperparametre à optimiser :
     1. Le nombre de neurone dans une couche: `hp.Int('units', min_value = 16, max_value = 128, step=4)`
     2. Le learning rate : `hp.Choice('learning_rate', values=[1e-1, 1e-2, 5e-2, 1e-3])`
   - Faire une recherche de la meilleure combinaison d'hyperparamètre avec les memes conditions que pour les modèles de la section 5.

Note :

   - N'hésitez pas à mettre un maximum de commentaires ou de cellules de textes pour expliquer votre code ou votre analyse de résultats.

## Résultat à soumettre

Vous devez envoyer par mail un dossier zip contenant :

1. Votre **notebook jupyter complet** contenant toutes les étapes des **specs**.
   - Un maximum de textes et de commentaires présent sur votre notebook permettent d'expliquer chaque cellules de code, votre intention et votre interpretation.

L’envoi du mail doit se faire à l’adresse mail suivante :

- contact.aguynextdoor@gmail.com

## Ressources

1. Dossier d’exercice (Google Drive)

   - https://drive.google.com/drive/folders/1NKANenuBPaX508mFuQ0C50MrUwbAEnTo?usp=sharing

2. How to export CSV with Pandas

   - https://towardsdatascience.com/how-to-export-pandas-dataframe-to-csv-2038e43d9c03#:~:text=Exporting%20the%20DataFrame%20into%20a,a%20CSV%20format%20like%20string.&text=sep%3A%20Specify%20a%20custom%20delimiter,the%20default%20is%20a%20comma.
