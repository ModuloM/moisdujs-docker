# image docker de base pour notre builder
FROM node:5.11.1
# si l'image docker pour cette version de node n'existe pas sur la machine,
# elle sera téléchargée au début du start (peut prendre un peu de temps)

# on définie les variables d'environnements 
ENV NODE_ENV development
# afin d'avoir toutes les dépendances de développement, nécessaires pour le build
ENV BABEL_ENV production

# le path du dossier de référence pour toutes instructions lancées dans le conteneur 
WORKDIR /src/

# on copie le fichier bash de build dans l'image
ADD build.sh /build.sh
# on modifie les droits du fichier pour l'exécuter avec CMD
RUN chmod +x /build.sh

# on enregistre la commande par défaut
CMD ["/build.sh"]