# Consigne

## Description

Le but de l’exercice est de faire votre première implémentation d’un modèle de Machine Learning en utilisant un modèle de régression linéaire disponible dans la librairie de `sklearn`.

Pour cela, un jeu de données est disponible contenant des description détaillée de maisons ainsi que leurs prix de ventes.
Votre hypothèse est de prédire le prix d’une maison grâce à une régression linéaire.

## Specs

Pour cela, plusieurs étapes sont à suivre :

1. Importer le jeu de données et l’explorer.

   - Votre notebook doit contenir une rapide analyses du jeu de donnees.
   - Le dataset `train.csv` et `data_to_predict_and_submit.csv` sont nettoyés et pret a etre implémentés.

2. Il faut diviser votre jeu de données en un _set d'entraînement_ et un _set de test_. Le set de test doit représenter 10% de votre donnée totale.

   - Votre set de test ne doit pas contenir le prix final de la maison lors de l'évaluation.

3. Entraîner plusieurs modèles de regression lineaire de la librairie `sklearn` :

   1. un modèle de régression linéaire classique `linear_model`.
   2. un modèle de régression linéaire classique `lasso`.
   3. un modèle de régression linéaire classique `elastic net`.

4. Prédire des prix de maison pour chaque modèles sur vos données de test.

5. Évaluer et analyser vos résultats à l’aide des vrais prix des maisons.

   - L'evaluation doit comparer la performance de vos trois modèles.
   - Si des parametres sont disponibles pour certains modèles, comparer les performances du modèles pour plusieurs valeurs de ces parametres.
   - Plusieurs metriques d'evaluations et comportements doivent etre utilisés (overfitting, underfitting, mesure, ...)

6. Proposer des suggestions d'améliorations.

Une fois ces étapes finies et votre modèle prêt, vous devez importer le fichier `data_to_predict_and_submit.csv` qui contient des nouvelles données de maison mais sans leurs prix de ventes.

1. Utilisez votre modèle pour prédire le prix de ces maisons.
2. Exportez ces prédictions dans un fichier csv intitulé `submit.csv` qui contient deux colonnes : `[Id, SalePrice]`
   - Vous pouvez vous inspirer du fichier `sample_submission.csv` qui vous montre le format de donnée du fichier à soumettre.
   - La colonne `SalePrice` doit contenir les prédictions de votre modèle.

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
