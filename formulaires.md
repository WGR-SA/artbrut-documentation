# 🧩 1. Créer un formulaire dans Strapi

## 1.1. Accéder au Content Manager

-   Aller dans **Content Manager** → **Form**.
-   Chaque entrée représente un formulaire distinct.

## 1.2. Structure d'un formulaire

Un formulaire contient : - **name** --- identifiant technique (ex :
`adherez`) - **title** --- titre affiché -
**description** --- texte explicatif affiché sur le site - **input
(repeatable)** --- liste dynamique des champs du formulaire -
**notifications (repeatable)** --- configuration des e-mails envoyés
après soumission

------------------------------------------------------------------------

# 🧩 2. Configurer les champs du formulaire (Inputs)

Chaque champ est une entrée dans la liste **input**.

## 2.1. Propriétés d'un champ (input)

### - `name`

Clé technique transmise au backend\
Uniquement minuscules, sans accents, avec tirets\
Exemples :

    prenom
    nom
    email
    type-inscription

### - `label`

Nom affiché sur le front\
Exemples :

    Prénom
    Téléphone
    Type d'inscription

### - `type`

Type du champ, parmi :

    "text", 
    "textarea", 
    "select", 
    "checkbox", 
    "radio",
    "tel",
    "date",
    "datetime",
    "time",
    "email",
    "newsletter", // inscription newsletter
    "seats", // champ nombre de place pour événement
    "hidden"

### - `required`

Définit si le champ est obligatoire.

### - `placeholder` (optionnel)

Texte d'aide pour le front.

### - `value`

Valeur par défaut.

### - `options` (si `select`, `radio`, etc.)

Liste de : - `key` (ex : `solo`) - `value` (ex : `Solo 50 CHF`)

------------------------------------------------------------------------

# 🧩 3. Configurer les notifications e-mail

Chaque formulaire peut envoyer une ou plusieurs notifications
automatiques.

## 3.1. Ajouter une notification

Une notification comporte les champs suivants :

### - `from`

Adresse e-mail d'envoi.

### - `to`

Adresse fixe :

    web@wgr.ch

OU nom d'un champ du formulaire :

    email

### - `subject`

Objet de l'e-mail.

### - `template` (optionnel)

Contenu de l'e-mail (HTML ou texte).\
Supporte les variables dynamiques :

    Bonjour {{prenom}} {{nom}},
    Nous avons bien reçu votre demande.

## 3.2 Exemples

### Notification par défaut

    from: noreply@artbrut.ch
    to: web@wgr.ch
    subject: Demande documentation
    template:
      # Nouveau contact depuis le formulaire Comment consulter les archives

      ## Détails de la requête:

      - nom: Grossfeld
      - prenom: Damien
      - formulaire: Comment consulter les archives
      - page: Centre de documentation de la collection de l'Art Brut
      - email: grossfeld@wgr.ch
      - adresse: Etiam Fermentum Sit
      - extrait: Cras mattis consectetur purus sit amet fermentum.
      - telephone: +32 45 342 53 24
      ...

### Notifcation personnalisée

    from: noreply@artbrut.ch
    to: email
    subject: Confirmation demande
    template:
      Bonjour {{prenom}} {{nom}},
      Nous avons bien reçu votre demande...
