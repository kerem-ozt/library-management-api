#!/bin/sh

# Exit immediately if a command exits with a non-zero status
set -e

# Wait until PostgreSQL is ready
echo "Waiting for PostgreSQL to be ready..."
until nc -z -v -w30 $DB_HOST $DB_PORT
do
  echo "Waiting for PostgreSQL at $DB_HOST:$DB_PORT..."
  sleep 1
done
echo "PostgreSQL is up and running!"

# Run migrations and seeders
echo "Running database migrations..."
cd src
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
cd ..

# Start the application
echo "Starting the application..."
npm start
