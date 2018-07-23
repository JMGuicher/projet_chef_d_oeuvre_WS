# Purpose

This project is a starter kit to create an Angular 5 client with a jhipster backend. It can be deploy on cloudfoundry with a staticfile buildpack but can also be integrated on a monolithic application or a simple nginx server.

# How to use 

## Create a new project

* Duplicate project
* Update pom to match project *cli* and *scm* values
* Change api server url on *pom.xml*

# Test locally

Install npm dependency with :

    npm install
    
Change api server url on the *proxy.conf.json* file 
Run with :

    npm start
    
# Build

To generate a zip with production ready application, run :

    mvn clean package
    
# Run on bluemix

Update application name on deploy.sh then run :

    ./deploy.sh# Organisation-chart-Web
