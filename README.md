
# Password Vault Application

This is a simple Password Vault application built using Node.js and Express.js. The application allows users to save and retrieve passwords securely. It utilizes the crypto and fs-extra packages for encryption and file system operations respectively.


## Installation

Install password-vault-express-api with npm

```bash
  cd password-vault-express-api 
  npm install password-vault-express-api 
```
    
## Starting the Server
To start the server, run the following command
```bash
  npm start 
```
This will start the server at http://localhost:3000/.
## Endpoints
#### GET /get-all

This endpoint retrieves all saved passwords from the vault.

Response:
```bash
[
    {
        "id": "1",
        "website": "example.com",
        "username": "user@example.com",
        "password": "encrypted_password"
    },
    {
        "id": "2",
        "website": "anotherexample.com",
        "username": "anotheruser@example.com",
        "password": "encrypted_password"
    },
    ...
]
```

#### POST /save

This endpoint allows saving a new password to the vault.

Request:
```bash
POST /save
Content-Type: application/json

{
    "website": "example.com",
    "username": "user@example.com",
    "password": "plain_text_password"
}
```
Response:
```bash
HTTP 201 Created

{
    "website": "example.com",
    "username": "user@example.com",
    "password": "plain_text_password"
}

```


## Security
Passwords are encrypted before storing them in the vault using crypto package to ensure security.
