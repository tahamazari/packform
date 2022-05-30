# Set up instructions

## Setup backend and migrations (Go)
Run this first  
Will create a table by name orders  
and run the Rest App Server  

Will run on 'http://localhost:4000/'

## Run Seed Script (Python)
This will seed data into the table created in db  
by reading the data from CSV  

## Serve the Frontend (Vue)
First run 'npm install' to dependencies  
Then run 'npm run serve' to run the app  

Will run on 'http://localhost:8080/'

## Run Tests (Cypress)
First run 'npm install' to dependencies  
Make sure the front end and back end are running before running tests  
Run following commands to run the tests, for each spec individually  
npx cypress run --spec "./cypress/integration/Home.spec.js"  
npx cypress run --spec "./cypress/integration/Orders.spec.js"
