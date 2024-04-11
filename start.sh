# Shell script to start the application
#!/bin/bash

# Start the localstack
cd ./packages/buy-stock-lambda
yarn run deploy

sleep 10

cd ..

cd ./sell-stock-lambda
yarn run deploy

sleep 10

cd ../../
yarn run start
