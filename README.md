# TodoApp

This project consists of a frontend Angular application and a backend ASP.NET Core API. The applications are containerized using Docker and can be run together using Docker Compose.

The frontend application is located in the TodoApp directory. It is built using Angular and served using Nginx

The backend API is located in the TodoApi directory. It is built using ASP.NET Core and runs on the .NET runtime.

## Prerequisites

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Setup Instructions

### Running the Application

1. Clone the repository:

    ```sh
    git clone <repository-url>
    cd TodoApp
    ```

2. Build and run the containers using Docker Compose:

    ```sh
    docker-compose up --build
    ```

3. The frontend application will be available at `http://localhost:8080`.

4. The backend API will be available at `http://localhost:5135`.

### Stopping the Application

To stop the running containers, press `Ctrl+C` in the terminal where Docker Compose is running, or run:

```sh
docker-compose down



