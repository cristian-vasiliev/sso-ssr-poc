#!/bin/bash

BUILD_FOLDER=.dist

next build
rm -rf $BUILD_FOLDER
mv .next/standalone/ $BUILD_FOLDER/
cp -r .next/static $BUILD_FOLDER/.next
rm $BUILD_FOLDER/server.js
cp -r next.config.js $BUILD_FOLDER/
cp serverless.yml $BUILD_FOLDER/
cp src/server.ts $BUILD_FOLDER/
cp -r public $BUILD_FOLDER/
cd $BUILD_FOLDER
#sls offline
sls deploy