## Starting the server the first time

Run the command:

`docker compose -d --build`

This will use the docker-compose.yml to build the image and spin up the container headlessly.

## Migrating DB Tables

Run the command:

`docker compose exec web python manage.py migrate`

This will migrate the db tables in the container
