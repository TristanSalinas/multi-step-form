I've done this mini-project to further practice working with react and typescript and particularly to use react routes and try tailwind.

review :
Tu peux supprmier output.css
Faut trouver une solution pour ton problème de 404 (faut chercher au niveau de react router :))
Au niveau de l'url on va préférer soit un pattern /steps/1 ou alors un get ?step=1 (je pref le get)
Une fois que tu auras réflé la 404, faudra que tu pense a ce cas la : J'ouvre mon navigateur et je tape l'url suivante :
https://tristansalinas.github.io/multi-step-form/subscription?step=3
Il se passe quoi ? On est redirigé vers la step 1 ? On peut quand même commencer a partir de la 3 ? Comment tu gère tes erreurs sur les autres pages qui sont vident du coup ?

Pareil régule les concat et template litterals (je pref template literal)
Pareil régule les auto return et return pour les .map, .filter etc (je pref les auto return)
Revoir ta logique autour du formData, préférer l'initialiser avec des valeurs par défaut plutôt qu'a undefined ça va te faciliter pas mal de chose

subscription_page.tsx

use_form_context

Le message d'erreur est pas bon dans le throw
Le isStepValid est pas très lisible mais c'est subjectif

subscription_nav
ligne 4 prefère la destructuration

step_2

Pourquoi faire un state billing alors que c'est stocker dans ton formData ?

step_3

Préfère écrire tes const qui sont pas dépandant du contenu de ton composant en dehors du composant (ligne84)

step_4

Tu peux jouer un p'tit peux avec typescript pour mieux typer tes addons et éviter de faire ca as ligne 61

Bon j'ai surement louper pleins de trucs vu que j'ai fait pas mal d'aller retour entre les fichiers et ce que j'écrivais, mais c'est beaucoup de p'tit truc et 2 gros sujet, le routing et ton formData :)
