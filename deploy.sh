#!/bin/bash
# set -e # stop on error

echo switch folder to deploy
cd dist
echo add new gh-pages files
git add .
echo commit changes
git commit -m "deploy to gh-pages"
echo push to remote gh-pages
git push -f
echo All done!
