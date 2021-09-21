# Consigne : Hands On Machine Learning

## Description

Le but de l’exercice est de faire votre première implémentation d’un modèle de Machine Learning en utilisant un modèle de régression linéaire disponible dans la librairie de `sklearn`.

Pour cela, un jeu de données est disponible contenant des descriptions détaillées de maisons ainsi que leurs prix de ventes.
Votre hypothèse est de prédire le prix de vente d’une maison grâce à une régression linéaire.

## Specs

Plusieurs étapes sont à suivre :

1. Importer le jeu de données et l’explorer.

   - Le dataset `dataset.csv` et `data_to_predict_and_submit.csv` sont nettoyés et prêt à être implémentés.
   - Votre notebook doit contenir une rapide analyses du jeu de données `df_dataset`.

2. Il faut diviser votre jeu de données en un _set d'entraînement_ et un _set de test_.

   - Il faut mélanger `df_dataset` avant de le séparer.
   - Le _set de test_ doit représenter 10% de `df_dataset`.
   - Une fois que vous avez les deux sets d'entrainement et de test, il faut retirer la colonne des prix `SalePrice` qui est l'output (y) que l'on veut prédire.

   - A la fin vous devez avoir 4 dataframes :
       1. `data_train_X` : qui contient toutes les valeurs d'entrainements sans le prix des maisons;
       2. `data_train_y` : qui contient les prix de toutes les valeurs d'entrainements;
       3. `data_test_X` : qui contient toutes les valeurs de tests sans le prix des maisons;
       4. `data_test_y` : qui contient les prix de toutes les valeurs de tests;

3. Il faut entraîner plusieurs modèles de régression linéaire de la librairie `sklearn` :

   1. un modèle de régression linéaire classique `linearRegression`.
      - [scikit linearRegression](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html)
   2. un modèle de régression linéaire classique `Lasso`.
      - [scikit Lasso](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lasso.html)
   3. un modèle de régression linéaire classique `ElasticNet`.
      - [scikit ElasticNet](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ElasticNet.html)

   - Pour chaque modèles, il faut tester plusieurs paramétrages de vos modèles, si il y en de disponible.
  
4. Évaluer et analyser les performances de chacun de vos modèles.

   - Évaluer la performance du modèle entrainé sur les données d'entrainement.
   - Prédire les prix de maison sur vos données de test
   - Évaluer la performance de ces prédictions.

Note :

   - Votre analyse, évaluation et vos commentaires doivent comparer la performance de vos trois modèles.
   - Si des paramètres sont disponibles pour certains modèles, comparer les performances du modèle pour plusieurs valeurs de ces paramètres.
   - Plusieurs métriques d'évaluations et comportements doivent être utilisés (overfitting, underfitting, mesure, MEA, MSE, variance, ...)
     - [Quelques méthodes à la section 'Regression'](https://scikit-learn.org/stable/modules/model_evaluation.html)
   - Vous êtes encouragé à écrire au plus dans des commentaires ou dans des cellules de textes pour expliquer votre code, votre démarche et vos analyses.

1. Proposer des suggestions d'améliorations.

   Une fois ces étapes finies et votre modèle prêt, vous devez utiliser le dataset `data_to_predict_and_submit` qui contient des nouvelles données de maison mais pas leurs prix de ventes `"SalePrice"`.

2. Utilisez votre modèle le plus performants pour prédire le prix de ces maisons.
3. Exportez ces prédictions dans un fichier csv intitulé `submit.csv` qui contient deux colonnes : `[Id, SalePrice]`
   - Vous pouvez vous inspirer du fichier `sample_submission.csv` qui vous montre le format de donnée du fichier à soumettre.
   - La colonne `SalePrice` doit contenir les prédictions de votre modèle le plus performant.

## Résultat à soumettre

Vous devez envoyer par mail un dossier zip contenant :

1. Votre **notebook jupyter complet** contenant toutes les étapes des **specs**.
   - Un maximum de textes et de commentaires présent sur votre notebook permettent d'expliquer chaque cellules de code, votre intention et votre interpretation.
2. un fichier `submit.csv` contenant vos prédiction pour les données du fichier `data_to_predict_and_submit.csv` .
   - Le format de ce fichier doit respecter le format du fichier `sample_submission.csv`.

L’envoi du mail doit se faire à l’adresse mail suivante :

- contact.aguynextdoor@gmail.com

## Ressources

1. Dossier d’exercice (Google Drive)

   - https://drive.google.com/drive/folders/1NKANenuBPaX508mFuQ0C50MrUwbAEnTo?usp=sharing

2. How to export CSV with Pandas

   - https://towardsdatascience.com/how-to-export-pandas-dataframe-to-csv-2038e43d9c03#:~:text=Exporting%20the%20DataFrame%20into%20a,a%20CSV%20format%20like%20string.&text=sep%3A%20Specify%20a%20custom%20delimiter,the%20default%20is%20a%20comma.
