# api-automation

A project boilerplate for testing APIs using TypeScript and Jest.

## Dependencies

This project has a dependency on the freely available [JSONPlaceholder](https://jsonplaceholder.typicode.com) APIs. In this exmaple, `TodosService` represents an application class that wraps a subset of the APIs offered at JSONPlacer (the `todos` resource). You could just as easily skip this layer and use `axios` inside of your tests, if your applicable doesn't include a service wrapper.

## Getting Started

This project depends on yarn. Please executing the following:

`yarn install`, and then execute one of the scripts below:

## Scripts

**Run the tests**

`yarn test`

**Run the tests in watch mode**

`yarn test:watch`
