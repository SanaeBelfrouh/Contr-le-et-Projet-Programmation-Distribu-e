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
 <pre>
    ├───main
│   ├───java
│   │   └───org
│   │       └───sid
│   │           └───immatriculation
│   │               │   RegistrationServiceApplication.java
│   │               │   
│   │               ├───dto
│   │               │       OwnerRequest.java
│   │               │       VehicleRequest.java
│   │               │       
│   │               ├───entities
│   │               │       Owner.java
│   │               │       Vehicle.java
│   │               │       
│   │               ├───repositories
│   │               │       OwnerRepository.java
│   │               │       VehicleRepository.java
│   │               │       
│   │               └───web
│   │                   ├───graphql
│   │                   │       GraphQLOwnerController.java
│   │                   │       GrapphQLVehicle.java
│   │                   │       
│   │                   ├───grpc
│   │                   │   │   GrpcServerConfig.java
│   │                   │   │   OwnerGrpcService.java
│   │                   │   │   
│   │                   │   └───stubs
│   │                   │           Owner.java
│   │                   │           OwnerOuterClass.java
│   │                   │           OwnerServiceGrpc.java
│   │                   │           
│   │                   ├───rest
│   │                   │       RestOwnerController.java
│   │                   │       RestVehicleController.java
│   │                   │       
│   │                   └───soap
│   │                           CXFSoapWebServiceConfig.java
│   │                           OwnerSoapController.java
│   │                           OwnerSoapService.java
│   │                           
│   └───resources
│       │   application.properties
│       │   
│       ├───graphql
│       │       schema.graphqls
│       │       
│       └───protos
│               owner.proto
│               registration.proto
│               
└───test
    └───java
        └───org
            └───sid
                └───immatriculation
                        RegistrationServiceApplicationTests.java
                        
 
 </pre>


### c. Tester les 4 web services
### REST



[ownerrest.webm](https://github.com/SanaeBelfrouh/Contr-le-et-Projet-Programmation-Distribu-e/assets/116807307/12ad5f0c-97b2-4607-874b-fbb1769cf198)

[restvehi.webm](https://github.com/SanaeBelfrouh/Contr-le-et-Projet-Programmation-Distribu-e/assets/116807307/5a38677a-c55c-497a-8f86-648bc8553415)


![1-h2-console](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/5de8d10a-8a8a-4d12-8b22-938b2516e5a5)
![2-h2-owner](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/8a72b388-564c-407e-bf70-c563c7c3d481)
![h2-vehicle](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/102c7950-2a2c-478c-83bb-f408a5e03683)

### GraphQL

[graphicql1.webm](https://github.com/SanaeBelfrouh/Contr-le-et-Projet-Programmation-Distribu-e/assets/116807307/11fbeab2-263c-44c1-a04d-ece6e10750eb)
[farah.webm](https://github.com/SanaeBelfrouh/Contr-le-et-Projet-Programmation-Distribu-e/assets/116807307/53146184-ed60-4e86-a8e3-3e616d18ec1e)



![farahowner](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/f46376fb-a16e-4fec-a5c7-56c9e1548028)

[getvehiclgraph.webm](https://github.com/SanaeBelfrouh/Contr-le-et-Projet-Programmation-Distribu-e/assets/116807307/0947b1a3-8a40-4056-b398-45e084f6bbd3)


![vehicule-graph](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/fab88ede-a09e-423d-b64b-6c2968be3131)


![vehicles-web](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/6e1df1a1-1640-4465-b833-ab3e6b02a91f)

### grpc
[grpc-bloom-immatriculation.webm](https://github.com/SanaeBelfrouh/Contr-le-et-Projet-Programmation-Distribu-e/assets/116807307/133de8ba-d247-4074-a6a9-b1b053d48a23)
[grpc-vehu.webm](https://github.com/SanaeBelfrouh/Contr-le-et-Projet-Programmation-Distribu-e/assets/116807307/bec7d425-4fd3-4444-8301-19cc17ccd775)



### soap:
![soap2](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/1c535f6d-eeb2-44d2-93d0-73834dbb20e8)
![soap3](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/4c801052-94c9-4a6f-b803-a4881ba72fb4)


## 4. Micro-service Infractions

Le micro-service Infractions gère les infractions liées aux dépassements de vitesses. Il permet de créer de nouvelles infractions et de récupérer les infractions existantes.
<pre>├───.idea
├───.mvn
│   └───wrapper
├───src
│   ├───main
│   │   ├───java
│   │   │   └───org
│   │   │       └───sid
│   │   │           └───infraction
│   │   │               ├───entities
│   │   │               ├───repositories
│   │   │               └───web
│   │   └───resources
│   └───test
│       └───java
│           └───org
│               └───sid
│                   └───infraction
└───target
    ├───classes
    │   └───org
    │       └───sid
    │           └───infraction
    │               ├───entities
    │               ├───repositories
    │               └───web
    └───generated-sources
        └───annotations
</pre>
![infraction](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/ce6c4043-ec36-4ff6-bf5f-8a0b4a3ffa07)

[infraction-r.webm](https://github.com/SanaeBelfrouh/Contr-le-et-Projet-Programmation-Distribu-e/assets/116807307/5d8a278b-028a-4896-807f-af077096bd8d)


![infractionweb](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/2ebc6ab6-7126-4b18-b726-35062b275632)



## 5. Micro-service Radar

Le micro-service Radar gère les radars et génère de nouvelles infractions lorsqu'un dépassement de vitesse est détecté. Ce service communique avec le micro-service Immatriculation pour obtenir les informations sur le propriétaire du véhicule et fait appel au micro-service Infractions pour générer une nouvelle infraction. La communication entre les services peut se faire via REST, SOAP, gRPC ou GraphQL.
<pre>├───.idea
├───.mvn
│   └───wrapper
├───src
│   ├───main
│   │   ├───java
│   │   │   └───org
│   │   │       └───sid
│   │   │           └───radarservice
│   │   │               ├───entities
│   │   │               ├───feign
│   │   │               ├───model
│   │   │               ├───repositories
│   │   │               └───web
│   │   │                   └───grpc
│   │   │                       └───stubs
│   │   └───resources
│   │       └───protos
│   └───test
│       └───java
│           └───org
│               └───sid
│                   └───radarservice
└───target
    ├───classes
    │   ├───org
    │   │   └───sid
    │   │       └───radarservice
    │   │           ├───entities
    │   │           ├───feign
    │   │           ├───model
    │   │           ├───repositories
    │   │           └───web
    │   │               └───grpc
    │   │                   └───stubs
    │   └───protos
    ├───generated-sources
    │   └───annotations
    ├───generated-test-sources
    │   └───test-annotations
    └───test-classes
        └───org
            └───sid
                └───radarservice
</pre>
![radardb](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/e937102a-2b2f-482c-875d-8e1cc28786cc)

![radar-h2](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/2e75cae4-757d-4cfc-a5fa-7155de8e20ac)

[radars-web.webm](https://github.com/SanaeBelfrouh/Contr-le-et-Projet-Programmation-Distribu-e/assets/116807307/39f83253-d2e2-43d0-8f06-1fdfec96e3a5)

## 6. Application de simulation de radar
Une application Java a été développée pour simuler un radar et générer aléatoirement des dépassements de vitesses. Les dépassements de vitesses sont envoyés via gRPC au micro-service Radar-Service.

## 7. Mettre en place les services techniques de l’architecture micro-service (Gateway,
Eureka Discovery service)
![eureka](https://github.com/SanaeBelfrouh/Projet-Syst-mes-Distribu-s/assets/116807307/85545835-5ee6-4f1c-8e71-c1c355b79695)

## 8. Développer votre application Frontend avec Angular ou React
[demoangu.webm](https://github.com/SanaeBelfrouh/Contr-le-et-Projet-Programmation-Distribu-e/assets/116807307/f55c3430-207b-43ec-987c-14b88a0522a7)


## 9. Sécuriser votre système avec un système de d’authentification OAuth2 comme Keycloak
Pour lancer le serveur Keycloak, vous pouvez suivre ces étapes :

1. Téléchargez la dernière version de Keycloak depuis le site officiel : https://www.keycloak.org/downloads.html

2. Extrayez le contenu de l'archive téléchargée.

3. Ouvrez une invite de commandes ou un terminal et accédez au répertoire d'installation de Keycloak.

4. Allez dans le répertoire "bin" :

   - Sur Windows : exécutez `kc.bat` en tapant la commande suivante :
     ```
 kc.bat start-dev
 ```

  

5. Attendez que Keycloak démarre. Vous verrez des messages dans la console indiquant que le serveur est en cours d'exécution.

6. Par défaut, Keycloak utilise l'URL `http://localhost:8080` pour accéder à l'interface d'administration. Ouvrez votre navigateur et accédez à cette URL.

7. Sur la page d'accueil de Keycloak, vous devez créer un compte administrateur en fournissant un nom d'utilisateur, un mot de passe, et en sélectionnant le realm (domaine) "master".

8. Une fois connecté en tant qu'administrateur, vous pouvez créer des realms, des clients, des utilisateurs, etc., selon vos besoins.


![keykloacksever](https://github.com/SanaeBelfrouh/Contr-le-et-Projet-Programmation-Distribu-e/assets/116807307/36fcdf26-e9db-42e1-a2c9-eb2a62bae353)

[demokey.webm](https://github.com/SanaeBelfrouh/Contr-le-et-Projet-Programmation-Distribu-e/assets/116807307/5bcec818-edcc-42d6-9011-094eb8baa069)
