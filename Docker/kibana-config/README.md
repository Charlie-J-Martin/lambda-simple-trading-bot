# Setting Up Kibana and Elasticsearch in Docker

This guide will walk you through the process of setting up Kibana and Elasticsearch in Docker containers.

## Prerequisites

Before you begin, ensure you have Docker installed on your system.

## Steps

1. **Run Docker Compose:**
   Execute the following command to start the Docker containers in detached mode:

```
docker-compose up -d
```

2. **Check Elasticsearch Status:**
   Confirm that Elasticsearch is running by sending a `GET` request to `http://localhost:9200/_cat/indices?v`.

3. **Setup Elasticsearch Index:**
   Create a new index named "logs" in Elasticsearch by sending a `PUT` request to `http://localhost:9200/logs` with the provided JSON body.

```json
{
  "mappings": {
    "properties": {
      "c": { "type": "float" },
      "h": { "type": "float" },
      "hostname": {
        "type": "text",
        "fields": { "keyword": { "type": "keyword", "ignore_above": 256 } }
      },
      "l": { "type": "float" },
      "level": { "type": "long" },
      "msg": {
        "type": "text",
        "fields": { "keyword": { "type": "keyword", "ignore_above": 256 } }
      },
      "n": { "type": "long" },
      "o": { "type": "float" },
      "pid": { "type": "long" },
      "t": { "type": "long" },
      "time": { "type": "date" },
      "v": { "type": "long" },
      "vw": { "type": "float" }
    }
  }
}
```

You should receive a response confirming the index creation

```
{
  "acknowledged": true,
  "shards_acknowledged": true,
  "index": "logs"
}
```

4. **Verify Index Creation:**
   Ensure the index has been created correctly by sending a `GET` request to `http://localhost:9200/logs/_mapping`.

5. **Create a data view in Kibana**
   Go to `http://localhost:5601/app/management` and select data views in the left panel. Then click `create data view` in the top right. Give the data view a name, folled by the index pattern, which will be the index that we have just created. As the mappings include a timestamp field of time, we can use this here too. Once configured click `save data view to Kibana`.

6. **View the logs**
   If setup correctly you should now see a drop name with the data view available to view within Kibana (`http://localhost:5601/app/discover)
