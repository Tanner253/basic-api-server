# BASIC API SERVER WITH CRUD
DEPLOYED @ [LINK TO DEPLOYED SITE](https://basic-express-server-tp.herokuapp.com/person?name=tom)
A useless HTTP server for demonstration purposes.

## coming soon!
![UML Diagram](./assets/uml.png)

## Installation

1. Clone from this repo `git clone <REPO_URL_HERE`
1. cd into <REPO_NAME>
1. `npm install`

## Usage

Once installed, run `npm start`

## Contributors / Authors

- Tanner Percival

## Features / Routes

- GET : `/person?name=name`
  - Parameters
    - must include a person as a route parameter.
    - must include a text property on the request query.
  - Response
    - status 200, and string body if parameters look good.
      - query: name`
    - status 400, if no text is present.
