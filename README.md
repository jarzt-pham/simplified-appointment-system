## App
- > docker-compose --env-file .env up -d
- > npm run db:setup
- > npm run dev


## Idea
Using Docker Compose to start the app and PostgreSQL.

## Database
Create 2 tables:

- settings table is used to configure appointments such as minimum and maximum appointment times, maximum slots per appointment, appointment booking times and dates. The structure of this table will be key-value pairs for easier scalability in the future.
- appointments table is used to store the appointments that users have booked.

To check or replace, just call the settings table and all input will be validated against the settings. Multiple slots can be booked with the setting being the maximum slots.

## API
- appointments
GET /api/appointments
POST /api/appointments 
PATCH /api/appointments

- settings
POST /api/settings 
PATCH /api/settings


## Skeleton
- **src/**
  - **feature/**
    - **usecase/**
    - **domain/**
    - **infra/**
    - **present/**
  - **infra/**
  - **commons/**
  - **utils/**
- **app.ts**
