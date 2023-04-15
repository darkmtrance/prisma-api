# Prisma API - code component solution

This is a simple REST API CRUD about table POST, using Prisma ORM integrates seamlessly with PlanetScale.  

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Installation](#installation)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Screenshot

![](./images/prisma.matomaylla.com.png)

### Links

- Solution URL: [https://github.com/darkmtrance/prisma-api](https://github.com/darkmtrance/prisma-api)
- Live Site URL: [https://prisma.matomaylla.com/docs/](https://prisma.matomaylla.com/docs/)

## My process

### Built with

- [Prisma] (https://www.prisma.io/) - ORM
- [Planetscale] (https://planetscale.com/) - MySQL Database
- [Swagger] (https://swagger.io/) - API docs
- [Supertest] (https://www.npmjs.com/package/supertest) - Test
- [Jest] (https://jestjs.io/) = Test
- [Express](https://expressjs.com/) - Node.js web application framework

### Installation

```bash
git clone https://github.com/darkmtrance/prisma-api.git
cd prisma-api
npm install
```

create file .env with the next info:
```bash
DATABASE_URL=${DATABASE_URL}
SHADOW_DATABASE_URL=${SHADOW_DATABASE_URL}
```
change the values `${DATABASE_URL}` and `${SHADOW_DATABASE_URL}` with planescale conections string.

run app

```bash
npx prisma generate
npm start
```

run test

```bash
npm test
```


### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Michael Tomaylla](https://cv.matomaylla.com/)
- Linkedin - [@matomaylla](https://www.linkedin.com/in/mtm2019/)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
