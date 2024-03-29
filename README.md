# GiveawaySignup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## To deploy the app in EC2

Use the below code (wip) in User Data section of EC2

#!/usr/bin/bash
sudo yum update -y
sudo yum install -y git
curl --silent --location https://rpm.nodesource.com/setup_12.x | sudo bash -
sudo yum install -y nodejs
sudo npm install -g @angular/cli >/dev/null
sudo rm -rf giveaway-signup >/dev/null
sudo git clone https://github.com/Sangopak/giveaway-signup.git
cd giveaway-signup
sudo ng build
sudo npm update
sudo npm install rxjs@6.0.0 --save
npm install rxjs-compat
sudo npm install bootstrap --save
sudo npm install json-server --save-dev
sudo npm install concurrently --save-dev
---> Add this line in the package.json file
"json-server":"json-server --watch mocks/data.json"
"start-server":"concurrently --kill-others \"ng serve --host 0.0.0.0 --port 80 --disable-host-check\" \"npm run json-server --watch data/customers.json\"

sudo npm run json-server --watch data/customers.json
sudo npm run start-server
sudo ng serve --host 0.0.0.0 --port 80 --disable-host-check
