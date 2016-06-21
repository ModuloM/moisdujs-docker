# image docker de base pour notre builder
FROM node:5.11.1
# si l'image docker pour cette version de node n'existe pas sur la machine,
# elle sera téléchargée au début du start (peut prendre un peu de temps)

# le path du dossier de référence pour l'instruction CMD
WORKDIR /app
# on copie les fichiers du dossier courant dans le dossier /app du conteneur
COPY . /app

# on install les dépendances, en l'occurence http-server
RUN npm i

# port à exposé lors du run de l'image
EXPOSE 80

# on enregistre la commande par défaut
ENTRYPOINT ["npm","run","start"]