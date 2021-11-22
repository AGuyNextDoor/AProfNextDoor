# Hands on Express

## Instruction

Codez votre premiere application Express !

Utiliser le package Express et la base de donnée fourni dans le dossier pour faire cela.

## Specs

1. Initialiser votre application au port 3000

Votre application doit etre accessible à l'URL : http://localhost:3000

2. Le path d'acceuil "/" doit afficher un message de bienvenue

Verbe : get
Pathname : /
Reponse : Afficher un message de bienvenue

3. Le path "/persons" doit afficher toutes les personnes dans la base de donnée

Verbe : get
Pathname : /persons
Reponse : Afficher toute la database

4. Le path "/persons-contact" doit afficher seulement les noms, le numéro de téléphone et l'email de chaque personne

  Verbe : get
  Pathname : /persons-contact
  Reponse : Afficher seulement les noms, numero de telephone et email de chaque personne

5. Le path "/active" doit afficher seulement les personnes active

Verbe : get
Pathname : /active
Reponse : doit afficher seulement les personnes active. L'information est dans la clé `isActive`

6. Le path "/persons-contact/:id" doit afficher seulement la personne avec l'id renseigné

Verbe : get
Pathname : /persons-contact/:id
Reponse : 

- Afficher seulement la personne avec l'id renseigné.
- Si l'id n'est pas bon, doit afficher un message d'erreur.

7. Le path "/persons-contact/:id/friends" doit afficher la personne avec l'id renseigné et l'information de ses amis

Verbe : get
Pathname : /persons-contact/:id/friends
Reponse : 

- Afficher la personne avec l'id renseigné.
- Afficher l'information complete de tout les amis de la personne avec l'id renseigné.
- Si l'id n'est pas bon, doit afficher un message d'erreur.
- Si la personne n'a pas d'amis, doit afficher un message le renseignant.
 