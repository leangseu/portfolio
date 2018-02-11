#!/bin/bash

git add .
git commit -m "update"
git push

cd ./build/ &&
git init
git remote add origin https://github.com/leangseu/leangseu.github.io.git
git add .

if [ -z "$1" ]; then
    git commit -m "No commit message"
else
    git commit -m "$1"
fi

git push -fu origin master
