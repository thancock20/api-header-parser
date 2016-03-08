# timestamp_api
My implementation of the Timestamp API project from freeCodeCamp.

[See the app on Heroku](https://radiant-taiga-53469.herokuapp.com/)

Implements the following User stories:
* I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
* If it does, it returns both the Unix timestamp and the natural language form of that date.
* If it does not contain a date or Unix timestamp, it returns null for those properties.

## Getting Started
```
npm install
node server.js
```

## Example usage:
`http://localhost:8080/March 7, 2016`

`https://localhost:8080/1457308800`

## Example output:
`{ "unix": "1457308800", "natural": "March 7, 2016" }`
