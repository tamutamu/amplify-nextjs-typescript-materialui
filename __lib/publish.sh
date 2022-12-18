#!/bin/bash

npm version prerelease --no-git-tag-version
npm run build
cd dist
npm publish
cd ..
