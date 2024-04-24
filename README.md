# Simple Trading Bot using Localstack Lambdas

#### Project Overview:
A stock market simulation focused on AAPL stock over the past two years. The simulation emphasizes the daily opening and closing prices, with a trading bot applying mean reversion to determine buy or sell actions. Originally intended as a practice project for lambda creation and LocalStack skills, it evolved into a comprehensive endeavor.

#### Technologies Used:
- LocalStack: A development tool providing local versions of AWS services, enabling creation and testing of AWS Lambda functions locally without incurring costs.

- Lambda: AWS Lambda, a serverless computing service enabling code execution without server management, utilized here to simulate external trading services.

- TypeScript: A superset of JavaScript incorporating static types, enhancing code readability and maintainability by identifying errors early in the development process.

- Pino: A lightweight logging library for Node.js applications, selected for its performance and simplicity in logging application events and data.

- Elasticsearch and Kibana: Elasticsearch, a distributed search and analytics engine, and Kibana, a data visualization dashboard, combined to establish a centralized logging system for analyzing application logs and data flow.

- Socket.io: Facilitates real-time bidirectional event-based communication between server and client, pivotal for dynamic updates of stock data and trading bot actions.

- React: A widely-used JavaScript library for building user interfaces, employed to craft frontend components and efficiently manage application state.

- Tailwind CSS: A utility-first CSS framework facilitating rapid UI development by providing a set of pre-built components and utilities, utilized to style frontend components consistently and attractively.

- Chart.js: A JavaScript library for creating interactive and customizable charts and graphs, employed to generate a line graph displaying opening and closing prices of AAPL stock over time on the frontend.

#### Core Components:

Stock Market Generator:
- Generates simulated AAPL stock data based on historical records. Emits data via a WebSocket every second to simulate real-time price changes.

Trading Bot:
- Analyzes messages from the WebSocket to make buy or sell decisions using mean reversion. Collects statistics on trading actions, current holdings, profit/loss, and emits them via WebSocket for frontend display.

Socket Server:
- Handles message emission and broadcasting between components.

LocalStack Lambdas:
- Utilizes LocalStack to create two lambdas: one for buying and one for selling stocks. These lambdas emulate external trading services accessed by the trading bot.

Logging and Monitoring:
- Implements Pino for logging and Elasticsearch/Kibana for centralized log management. Enables detailed analysis of system activities and data flow.

#### Frontend Features:
- Displays current day's AAPL stock information, trading bot stats, and a Chart.js line graph showing opening and closing prices.
- Provides a section for manual trading, allowing users to place trades using the same lambdas as the trading bot.
- Styled with Tailwind CSS for consistent and appealing UI components.

#### Basic Architecture Design 
<img width="1151" alt="Screenshot 2024-04-23 at 20 57 46" src="https://github.com/Charlie-J-Martin/lambda-simple-trading-bot/assets/56304371/eaad4f94-99b6-40c3-9afc-f1a3db160dc9">

#### Demo

###### Backend - Kibana, Localstack, Lambdas
https://github.com/Charlie-J-Martin/lambda-simple-trading-bot/assets/56304371/9f907e18-0731-4c0d-9dda-eecefbb93592


###### Frontend - React
https://github.com/Charlie-J-Martin/lambda-simple-trading-bot/assets/56304371/7e2a44ed-63d3-452f-8e62-869ddd429cf9

## How to get started

### Setup Docker Instances (Localstack, Kibana, ES)

From the root run:
```
cd docker/localstack-config
docker compose up -d
```

Go back to the root and run:
```
cd docker/localstack-kibana
docker compose up -d
```

### Setup ES and Kibana
TODO:

### Start Frontend
From the root run:
```
cd packages/frontend
yarn run start
```

This will bring up a web page at port 3000 with the frontend displayed.

### Start the simulation
From the root run:
```
./start.sh
```
This will create the lambdas and then start the socket server, the stock generator and the trading bot.


