# argon-sentinel

A simple and secure password hashing package using Argon2.

## Overview

`argon-sentinel` is a lightweight Node.js library that provides an easy-to-use interface for hashing and verifying passwords using the Argon2 algorithm. It is designed to be simple, secure, and efficient.

## Features

- Secure password hashing using Argon2
- Easy-to-use API for hashing and verifying passwords
- Lightweight and fast
- Suitable for modern applications

## Installation

To install `argon-sentinel`, use npm:

```bash
npm install argon-sentinel
```

## Usage

### Importing the Module

First, import the `argon-sentinel` module into your project:

```javascript
const { hashPassword, verifyPassword } = require('argon-sentinel');
```

### Hashing a Password

To hash a password, use the hashPassword function. This function returns a promise that resolves to the hashed password:

```javascript
(async () => {
  try {
    const password = 'testpassword';
    const hash = await hashPassword(password);
    console.log(`Hashed Password: ${hash}`);
  } catch (error) {
    console.error('Error hashing password:', error);
  }
})();
```

### Verifying a Password
```javascript
(async () => {
  try {
    const password = 'testpassword';
    const hash = await hashPassword(password);
    
    const isMatch = await verifyPassword(password, hash);
    console.log(`Password Match: ${isMatch}`);
    
    const isMatchWrongPassword = await verifyPassword('wrongpassword', hash);
    console.log(`Password Match with wrong password: ${isMatchWrongPassword}`);
  } catch (error) {
    console.error('Error verifying password:', error);
  }
})();
```
## API

### `hashPassword(password)`

- `password` (string): The password to hash.
- Returns: A promise that resolves to the hashed password.

### `verifyPassword(password, hash)`

- `password` (string): The password to verify.
- `hash` (string): The hash to verify against.
- Returns: A promise that resolves to `true` if the password matches the hash and `false` otherwise.

