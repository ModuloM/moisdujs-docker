# Mois Du JS - Docker

Based on [https://github.com/xebia-france/moisdujs-react](), 
this repo explain how to use Docker to build a front application.

> Make the build of your application, node version, tools and platform agnostic. 

## Prerequisites

* docker >= v.1.10
* docker-toolbox (on Mac OS / Windows)  
__*Warning for Windows users : not tested at all!*__
* for command autocompletion, see [https://docs.docker.com/compose/completion/]()

## Initialization

    $> git clone https://github.com/xebia-france/moisdujs-react.git
    $> cd moisdujs-docker
    $> npm install

## Build

    $> npm run build:docker  
        
## Run

    $> docker run -d -p 8080:80 moisdujs/react:0.1.0
    $> open http://192.168.99.100:8080

