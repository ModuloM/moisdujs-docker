#!/usr/bin/env bash

MOISDUJS_REACT_VERSION="0.1.0"

# on build l'image qui servira à construire l'image finale (sans les sources)
docker build --no-cache -t="moisdujs/react:builder" docker/builder/

# on crée une nouvelle instance du builder
containerId=$(docker create -e "MOISDUJS_REACT_VERSION="${MOISDUJS_REACT_VERSION} moisdujs-react:builder)

# on copie le contenu de notre dossier intégralement dans le /src du conteneur
docker cp $(pwd)/. ${containerId}:/src/

# on démarre l'image (cela lance le build.sh copié et associé à la commande CMD du builder
docker start -a $containerId

# on copie le contenu de /target du conteneur de build vers le dossier docker/delivery de notre dossier courant 
docker cp ${containerId}:/target/dist $(pwd)/docker/delivery/

# on enregistre le code de sortie de la dernière commande passée sur le conteneur
rc=$(docker inspect -f {{.State.ExitCode}} $containerId)

# on supprime le conteneur de build
docker rm $containerId

# si la sortie n'était pas en erreur on continue sinon on exit
if [ "$rc" != 0 ]; then
  exit $rc
fi

# on build l'image finale, contenant les sources buildées et le serveur
docker build -t="moisdujs/react:${MOISDUJS_REACT_VERSION}" docker/delivery
