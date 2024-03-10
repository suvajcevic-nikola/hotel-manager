# Hotel Manager App

Welcome to the Hotel Manager application! This is a home test task that utilizes Docker, Caddy, React, Next.js, Node.js with Fastify, Prisma, and SQLite.

## Prerequisites

Before running the application, ensure you have the following installed:

- **Docker:**
   - **macOS:** [https://docs.docker.com/desktop/mac/install/](https://docs.docker.com/desktop/mac/install/)
   - **Windows:** [https://docs.docker.com/desktop/windows/install/](https://docs.docker.com/desktop/windows/install/)
   - **Linux:** [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
- **Docker Compose:**
   - **macOS and Windows:** Included with Docker Desktop
   - **Linux:** [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

## Getting Started

1. Add the following entry to your `/etc/hosts` file:

    ```plaintext
    127.0.0.1 hotelmanager.local
    ```

2. Build and run the application using Docker Compose:

    ```bash
    docker-compose up --build
    ```

This command will download the necessary images, build the application, and start the containers.

## Accessing the App

Once the containers are up and running, you can access the Hotel Manager app by navigating to [https://hotelmanager.local](https://hotelmanager.local) in your web browser.

## Stopping the App

To stop the application, use the following command:

```bash
docker-compose down
