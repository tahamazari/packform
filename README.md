# Set up instructions

NODE_VERSION=v16.15.0  
NPM_VERSION=8.5.5  
PYTHON_VERSION=3.8.5  
GO_VERSION=go1.18 windows/amd64
## Setup backend and migrations (Go)
**cd backend**  
Run this first using 'go run main.go'  
Will create a table by name orders  
and run the Rest App Server

Will run on 'http://localhost:4000/'

## Run Seed Script (Python)
**cd scripts**  
This will seed data into the table created in db  
by reading the data from CSV  

## Serve the Frontend (Vue)
**cd frontend**  
First run 'npm install' to install dependencies  
Then run 'npm run serve' to run the app  

Will run on 'http://localhost:8080/'

## Run Tests (Cypress)
**cd tests**  
First run 'npm install' to install dependencies  
Make sure the frontend and backend are running before running tests  
Run following commands to run the tests, for each spec individually  
npx cypress run --spec "./cypress/integration/Home.spec.js"  
npx cypress run --spec "./cypress/integration/Orders.spec.js"
