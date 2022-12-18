#!/bin/bash


cp -r ./src/domain/ ./__lib/src/
cp -r ./src/graphql/ ./__lib/src/

pushd ./__lib/
./publish.sh
popd
