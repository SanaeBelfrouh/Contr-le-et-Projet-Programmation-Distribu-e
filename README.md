# Contrôle et Projet Programmation Distribuée

Ce projet est un système distribué basé sur les micro-services, conçu pour gérer et automatiser le processus des infractions liées aux dépassements de vitesses détectés par des radars automatiques. Il se compose de trois micro-services : Radar, Immatriculation et Infraction.

## Table des matières
- [Architecture technique](#architecture-technique)
- [Diagramme de classe](#diagramme-de-classe)
- [Services Backend](#services-backend)
    - [Service d'Immatriculation](#service-dimmatriculation)
    - [Service Radar](#service-radar)
    - [Service Infractions](#service-infractions)
    - [Service Eureka Discovery](#service-eureka-discovery)
    - [Service Gateway](#service-gateway)
    - [Radar service application ](#radar-service-app)
- [Frontend avec Angular](#frontend-avec-angular)

## Architecture technique

L'architecture technique du projet est basée sur les micro-services. Chaque micro-service possède sa propre fonctionnalité et interagit avec les autres pour former le système distribué.
![Gateway](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/217907d1-79ac-4821-bcb3-f7b2c7eefbab)


Les micro-services inclus dans ce projet sont :

- **RadarService** : Gère les radars, avec des fonctionnalités telles que la récupération d'un radar par ID, la création d'un nouveau radar, la mise à jour d'un radar existant et la suppression d'un radar.

- **ImmatriculationService** : Gère les propriétaires et les véhicules. Permet de créer, récupérer, mettre à jour et supprimer des propriétaires et des véhicules.

- **InfractionService** : Gère les infractions, y compris la création d'une nouvelle infraction, la récupération de toutes les infractions et la récupération des infractions associées à un propriétaire spécifique.

## Diagramme de classe

Un diagramme de classe global du projet a été établi pour illustrer les relations entre les différents micro-services et entités. 
![image](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/48ef5fdc-0917-43fd-a2cd-d66da68613ae)


## 3. Micro-service Immatriculation

### a. Entités JPA et Interface JpaRepository

Le micro-service Immatriculation gère les propriétaires et les véhicules. Les entités JPA correspondantes ont été développées pour représenter les données :

- `Owner` : représente un propriétaire avec un identifiant, un nom, une date de naissance, un email et une liste de véhicules.
- `Vehicle` : représente un véhicule avec un identifiant, un numéro de matricule, une marque, une puissance fiscale et un modèle.

L'interface JpaRepository basée sur Spring Data a été implémentée pour permettre l'accès aux données des propriétaires et des véhicules.

### b. Web services REST, GraphQL, SOAP et gRPC

Le micro-service Immatriculation expose les fonctionnalités suivantes via différents web services :

- REST : Utilisez les points de terminaison REST pour effectuer des opérations CRUD sur les propriétaires et les véhicules.
- GraphQL : Utilisez les requêtes et mutations GraphQL pour interroger et modifier les données des propriétaires et des véhicules.
- SOAP : Accédez aux services SOAP pour interagir avec les propriétaires et les véhicules via des opérations SOAP.
- gRPC : Utilisez les services gRPC pour communiquer avec les propriétaires et les véhicules via RPC (Remote Procedure Call).

### c. Tester les 4 web services
### REST

[ownerrest.webm](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/27955dc1-d08c-41b6-a1f1-61587fa61730)

[restvehi.webm](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/9dd9331a-6ab2-43fa-9c9a-373808da1e43)


![1-h2-console](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/5de8d10a-8a8a-4d12-8b22-938b2516e5a5)
![2-h2-owner](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/8a72b388-564c-407e-bf70-c563c7c3d481)
![h2-vehicle](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/102c7950-2a2c-478c-83bb-f408a5e03683)

### GraphQL
[graphicql1.webm](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/3e0b8450-cc95-4650-b860-d05c6ce29805)

[farah.webm](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/4e72fc73-23ee-48c9-b206-26db475d4dbf)

![farahowner](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/f46376fb-a16e-4fec-a5c7-56c9e1548028)

[getvehiclgraph.webm](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/81122f41-2e38-4319-a9f2-7b9bf8293995)

![vehicule-graph](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/fab88ede-a09e-423d-b64b-6c2968be3131)


![vehicles-web](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/6e1df1a1-1640-4465-b833-ab3e6b02a91f)

### grpc

[grpc-bloom-immatriculation.webm](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/016dd1c9-e9a8-4bdc-89d4-59aab458759a)

[grpc-vehu.webm](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/47280fa5-96d9-446c-948e-eb934b0fa13d)

### soap:
![soap2](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/1c535f6d-eeb2-44d2-93d0-73834dbb20e8)
![soap3](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/4c801052-94c9-4a6f-b803-a4881ba72fb4)


## 4. Micro-service Infractions

Le micro-service Infractions gère les infractions liées aux dépassements de vitesses. Il permet de créer de nouvelles infractions et de récupérer les infractions existantes.

![infraction](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/ce6c4043-ec36-4ff6-bf5f-8a0b4a3ffa07)

[infraction-r.webm](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/e434d8b2-3607-41af-9f6a-f01f51e07302)

![infractionweb](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/2ebc6ab6-7126-4b18-b726-35062b275632)



## 5. Micro-service Radar

Le micro-service Radar gère les radars et génère de nouvelles infractions lorsqu'un dépassement de vitesse est détecté. Ce service communique avec le micro-service Immatriculation pour obtenir les informations sur le propriétaire du véhicule et fait appel au micro-service Infractions pour générer une nouvelle infraction. La communication entre les services peut se faire via REST, SOAP, gRPC ou GraphQL.

![radardb](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/e937102a-2b2f-482c-875d-8e1cc28786cc)

![radar-h2](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/2e75cae4-757d-4cfc-a5fa-7155de8e20ac)

[radars-web.webm](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/e48cc6d2-e1b5-48e2-99a4-7ed06b978337)
## 7. Mettre en place les services techniques de l’architecture micro-service (Gateway,
Eureka Discovery service)
![eureka](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/85545835-5ee6-4f1c-8e71-c1c355b79695)

## 8. Développer votre application Frontend avec Angular ou React

[demoangu.webm](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/e73b9f6b-596d-4373-980a-6c5847531a70)

