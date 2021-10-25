import rq from "request-promise";

// Cette URL va chercher une blague aléatoire
rq("https://api.chucknorris.io/jokes/random", (err, response) => {
  
// On utilise JSON.parse pour pouvoir lire la réponse de l'API. La blague se trouve a la clé `value`.
  console.log( JSON.parse(response.body).value )
})
