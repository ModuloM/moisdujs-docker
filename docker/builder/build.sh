#!/bin/bash

# node ne retourne pas le code de stdout, 
# nous devons donc enregistrer (avec $?) 
# puis tester sa valeur, si = 0, c'est une erreur, on exit le script

npm run clean # clean 
rc=$?
if [ "$rc" != 0 ]; then
  exit $rc
fi

npm i # install
rc=$?
if [ "$rc" != 0 ]; then
  exit $rc
fi

npm test # test
rc=$?
if [ "$rc" != 0 ]; then
  exit $rc
fi

npm run build # build
rc=$?
if [ "$rc" != 0 ]; then
  exit $rc
fi

# on copie le dossier dist/ généré dans un dossier target/
cp -aR /src/dist/ /target/
rc=$?
if [ "$rc" != 0 ]; then
  exit $rc
fi
