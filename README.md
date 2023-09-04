<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/martinbobbio/frontend-challenge-vibragaming/master/src/assets/images/branding/vibragaming.png" width="200">
  <br>
  <br>
  <a href="https://frontend-challenge-vibragaming.vercel.app/">
  Challenge Vibra Gaming - Frontend
  </a>
  <br>
  <br>
</h1>
<h4 align="center">
  <a href="https://github.com/martinbobbio/backend-challenge-vibragaming">Vibragaming - Backend</a>
</h4>
<br>

## Description

This project is a frontend application developed using React with TypeScript and ViteJS. The mainly objetive of this challenge is show some clocks with a select search with autocomplete

## Getting started

1. Clone the repository:

```bash
git clone https://github.com/martinbobbio/frontend-challenge-vibragaming
```

2. Install depencencies

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

5. Open your browser and access the application at http://localhost:3000.

## Libreries used

### Axios

- For fetching information to the API

### SWR

- To better manage requests and have control over their status, in addition to caching information

### DayJS

- For a better way to use dates

### MUI

- To use nice components and fast development

### Styled Components

- For addings styles and reutilication of components

### Font Awesome

- For nice icons with animations

## Scripts

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to lint the source code.
- `npm run preview`: Builds and previews the production-ready application.
- `npm run test`: Check unit tests.

<br><br>

## Quick Start with Docker

Below are the steps to get this project up and running using Docker.

### Step 1: Build the Docker Image

To get started, you need to build the Docker image for this project. Open a terminal and execute the following command in the root directory of the project:

```bash
docker build -t frontend-challenge-vibragaming .
```

### Step 2: Run the Docker Container

Once you have built the image, you can run a Docker container based on that image. Use the following command to run the container and expose port 5173:

```bash
docker run -p 5173:5173 frontend-challenge-vibragaming
```
