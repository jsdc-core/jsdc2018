#!/bin/bash
# set -e # stop on error

echo add dist folder
git add -f dist
echo commit changes
git commit -m "deploy to gh-pages"
echo push to remote gh-pages
git push origin `git subtree split --prefix dist`:gh-pages --force
echo reset commit
git reset --hard HEAD^
echo All done!
