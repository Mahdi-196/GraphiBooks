# GraphiBooks

GraphiBooks is a full-stack web application that lets users search for and save books using the Google Books API. It uses a React frontend, GraphQL/Apollo backend, and is deployed on Render.

---

## Features

- 🔍 Search for books using Google Books API  
- ❤️ Save and view favorite books (stored in memory or local storage)  
- 👤 Authentication using JWT  
- ⚙️ Full CRUD functionality via GraphQL  
- 🌐 Fully deployed full-stack app on Render  

---

## Tech Stack

### Frontend

- React + Vite  
- Apollo Client  
- TypeScript  

### Backend

- Node.js + Express  
- Apollo Server (GraphQL)  
- JWT for auth  

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Mahdi-196/GraphiBooks
cd GraphiBooks
npm install
```

Build and run locally:
```bash
npm run build
npm start
```
This will run:

- The server on `http://localhost:10000/graphql`
- The frontend on the same port, served from `client/dist`

### Development

To run the client in dev mode with Vite and the server in watch mode with TypeScript:

```bash
npm run develop
```

### Environment Variables

Create a `.env` file in the root directory:

```ini
JWT_SECRET=your_jwt_secret
```

### Deployment (Render)

#### Build Command
```bash
npm install && npm run build
```

#### Start Command
```bash
npm start
```

### Output

The app will be live at: [https://graphibooks.onrender.com](https://graphibooks.onrender.com)



### Demo

https://drive.google.com/file/d/1h9YaCtmv8uuhjbQ3vpaClrxvIBumdj-2/view?usp=sharing

## Author

[@Mahdi-196](https://github.com/Mahdi-196)

## License

This project is licensed under the MIT License.



