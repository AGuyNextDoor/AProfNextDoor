# Consigne : Hands On Pytorch

## Description

Le but de l’exercice est de découvrir et manipuler la librairie **`PyTorch`** pour construire des réseaux neuronaux convolutionnel capable d'analyser et faire des prédictions à partir de photos.

Pour cela, nous allons récupérer un jeu de données disponible d'une librairie de google images contenant des photos de chiens et de chats.
Votre hypothèse est de prédire si la photo est un chien ou un chat en entrainant réseaux neuronaux convolutionnel (**CNN**).

## Specs

Plusieurs étapes sont à suivre :


1. Importer les librairies nécéssaires :

   - VOici une liste minimal de librairies a importer pour réaliser l'exercice :
     - `torch`
     - `numpy`
     - `torchvision`
     - `matplotlib`
     - `PIL`
     - Installer et importer `fiftyone`
         - `!pip install fiftyone`
     - 

2. Importer et préparer le jeu de données.

   - Les functions permettant de récuperer les photos sont déjà préparées.
   - Il faut indiquer la taille de nos datasets d'entrainement, de validation et de test :
       - Entrainement : 372 images
       - Validation : 64 images
       - Test : 64 images
   - Une fois téléchargé, vous pouvez visualiser un de vos dataset en éxecutant la fonction suivante :
       - `fo.launch_app(votre_dataset)`
   - Ensuite il faut répartir et uploader vos 6 datasets avec la structure suivante pour etre proprement importé par `PyTorch`

   |-train\
   |   |-Dog\
   |   |-Cat\
   |-validation\
   |   |-Dog\
   |   |-Cat\
   |-test\
   |   |-Dog\
   |   |-Cat\

   (Un dossier `train`, contenant un dossier `Dog` et un dossier `Cat`)
   (Un dossier `validation`, contenant un dossier `Dog` et un dossier `Cat`)
   (Un dossier `test`, contenant un dossier `Dog` et un dossier `Cat`)

3. Importer vos datasets avec `PyTorch`

   - Votre dataset est créé à partir de vos 3 dossiers `train`, `validation`, `test`.
   - Utilisez la fonction [`datasets.ImageFolder`](https://pytorch.org/vision/stable/datasets.html?highlight=imagefolder#torchvision.datasets.ImageFolder)
   - Pour le moment, le seul arguments a utiliser avec cette fonction est `root`.


   - Bonus : Vous pouvez utiliser la fonction `create_dataset(folder_name)` pour créer rapidement votre dataset pytorch

4. Analyser votre dataset d'un rapide coup d'oeil :

   - Créez une fonction permettant d'afficher 9 photos aléatoire de votre dataset
   - Chaques photos doit etre accompagnés de son label
  
5. Créer des transformations à appliquer sur les datasets

   1. Créer une série de transformations par dataset :
      1. train :
         - RandomResizedCrop(224)
         - RandomHorizontalFlip()
         - ToTensor()
         - Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
      2. validation :
         - RandomResizedCrop(256)
         - CenterCrop(224)
         - ToTensor()
         - Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
      3. test :
         - RandomResizedCrop(256)
         - CenterCrop(224)
         - ToTensor()
         - Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])


   2. Appliquer les transformations sur un nouveau datasets créé à partir de vos 3 dossiers `train`, `validation`, `test`.
         - Pour cela il faut créer une nouvelle fonction à partir de la fonction `create_dataset(folder_name)` pour qu'elle prenne en compte les transformations que vous avez créé.

6. Faire du Transfer Learning

   - Importez deux modèles CNN **pré-entrainé** depuis la librairie `torchvision` :
       - resnet18
       - resnet50

   - Pour chaques modèles, certains changement sont a faire :
     - Nous voulons prédire pour 2 classes, il faut donc changer la couche `fc` du modèle a deux outputs.
     - Un learning rate de 0.001
     - Un momentum de 0.9
     - Un nombre d'epochs de 6

   - Entrainer les deux modèles grace à la fonction `train_model(model, criterion, optimizer, scheduler, num_epochs)`

7. Evaluer vos modèles
   
   - Pour chacun des modèles entrainés, créer une fonction permettant d'évaluer les performances de classifications de vos modèles.

**Note** :

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
