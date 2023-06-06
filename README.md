# Contrôle et Projet Programmation Distribuée

Ce projet est un système distribué basé sur les micro-services, conçu pour gérer et automatiser le processus des infractions liées aux dépassements de vitesses détectés par des radars automatiques. Il se compose de trois micro-services : Radar, Immatriculation et Infraction.

## Architecture technique

L'architecture technique du projet est basée sur les micro-services. Chaque micro-service possède sa propre fonctionnalité et interagit avec les autres pour former le système distribué.

Les micro-services inclus dans ce projet sont :

- **RadarService** : Gère les radars, avec des fonctionnalités telles que la récupération d'un radar par ID, la création d'un nouveau radar, la mise à jour d'un radar existant et la suppression d'un radar.

- **ImmatriculationService** : Gère les propriétaires et les véhicules. Permet de créer, récupérer, mettre à jour et supprimer des propriétaires et des véhicules.

- **InfractionService** : Gère les infractions, y compris la création d'une nouvelle infraction, la récupération de toutes les infractions et la récupération des infractions associées à un propriétaire spécifique.

## Diagramme de classe

Un diagramme de classe global du projet a été établi pour illustrer les relations entre les différents micro-services et entités. 

## Développement du micro-service Immatriculation

Le micro-service Immatriculation gère les propriétaires et les véhicules. Il utilise des entités JPA pour représenter les données et des interfaces JpaRepository basées sur Spring Data pour accéder aux données.

Les fonctionnalités du micro-service Immatriculation sont exposées via les web services suivants :
- REST : Utilisez les points de terminaison REST pour effectuer des opérations CRUD sur les propriétaires et les véhicules.
- GraphQL : Utilisez les requêtes et mutations GraphQL pour interroger et modifier les données des propriétaires et des véhicules.
- SOAP : Accédez aux services SOAP pour interagir avec les propriétaires et les véhicules via des opérations SOAP.
- gRPC : Utilisez les services gRPC pour communiquer avec les propriétaires et les véhicules via RPC (Remote Procedure Call).

