# Shell script to start the application
#!/bin/bash

# Start the localstack
cd ./packages/localstack-config
docker compose up -d
