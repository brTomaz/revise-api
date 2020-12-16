# Revise API

An administrator to register questions in the Revise App. This administrator provides an API to the client.

## Requirements

This project uses [PostgreSQL](https://www.postgresql.org/).

The configuration to the Database can be found on [config/database.js](config/database.js)

## Development

After cloning this project, install the dependencies:

```
yarn install
```

And run using:

```
yarn develop
```

The urls to access are:

- `http://localhost:1337/admin` - The Dashboard to create and populate data

## Routes

| Method              |  Route              |    Description     |
| ------------------- | ------------------- |--------------------|
|  GET                |  ```/questions```   | List all questions |
