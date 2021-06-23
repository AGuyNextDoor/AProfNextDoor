# Consigne

## Description

Le but de l’exercice est de faire une implémentation et exploration d'un set de donnée.
Le dataset contient des informations sur les passagers du titanic. L'hypothèse est de prédire si un passager survivra ou non à la catastrophe.
Une implémentation d'un modèle de forêt aléatoire `RandomForestClassifier` est déjà préparé et vous devez améliorer les performances de votre modèles en analysant, corrigeant et modifiant les données présente dans le fichier `dataset.csv`.
## Specs

Pour cela, plusieurs étapes sont à suivre :

1. Importer le jeu de données.

   - Le dataset `dataset.csv` et `data_to_predict_and_submit.csv` doivent être importé.

2. L'exploration et analyse de données

- Vous devez faire une exploration profonde de votre dataset.
- Plusieurs étapes sont ensuite a suivre :
  - Gérer les valeurs `null`, manquantes ou erronées.
  - Analyser la distribution de chaque feature.
  - Comprendre cette distribution à travers des outils de visualisations.
  - Calculer et analyser les corrélations entre chaque feature.

3. Feature engineering et transformation

   - Proposer une solutions pour gérer les features qui ont trop de valeurs uniques et les regroupes en catégories.
   - Gérer les valeurs categoriques en encodant à la main ou en utilisant le `one-hot-encoding`.
   - Une fois toutes les features manipulées, vous devez faire une mise à l'échelle des caractéristiques (feature scaling) et une normalisation de la moyenne (mean normalisation).

Une fois ces étapes finies et votre donnée prête à être mise en place pour le modèle, vous pouvez utiliser l'implémentation du modèle et voir si les performances augmentes.

1. Utilisez votre donnée pour entrainer le modèle de forêt aléatoire afin de prédire si les passagers vont survivre ou non a la catastrophe.
2. Une fois que vous êtes satisfait avec votre modèle, faite les mêmes transformations pour les données présentes dans le fichier `data_to_predict_and_submit.csv` et utilisez votre modèle pour creer des prédictions.
3. Exportez ces prédictions dans un fichier csv intitulé `submit.csv` qui contient deux colonnes : `[PassengerId, Survived]`
   - Vous pouvez vous inspirer du fichier `sample_submission.csv` qui vous montre le format de donnée du fichier à soumettre.
   - La colonne `Survived` doit contenir les prédictions de votre modèle.

## Résultat à soumettre

Vous devez envoyer par mail un dossier zip contenant :

1. Votre notebook jupyter complet contenant toutes les étapes des **specs**.
2. un fichier `submit.csv` contenant vos prédiction pour les données du fichier `data_to_predict_and_submit.csv` .
   - Le format de ce fichier doit respecter le format du fichier `sample_submission.csv`.

L’envois du mail doit se faire a l’adresse mail suivante :

- contact.aguynextdoor@gmail.com

## Ressources

1. Dossier d’exercice (Google Drive)

- https://drive.google.com/drive/folders/1NKANenuBPaX508mFuQ0C50MrUwbAEnTo?usp=sharing

2. Importer des CSV dans **google collab**

- https://towardsdatascience.com/3-ways-to-load-csv-files-into-colab-7c14fcbdcb92

3. How to export CSV with Pandas

- https://towardsdatascience.com/how-to-export-pandas-dataframe-to-csv-2038e43d9c03#:~:text=Exporting%20the%20DataFrame%20into%20a,a%20CSV%20format%20like%20string.&text=sep%3A%20Specify%20a%20custom%20delimiter,the%20default%20is%20a%20comma.
