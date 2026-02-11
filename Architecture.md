# Application Architecture

This is a document that explains the architecture of the application, its specs and needs. Subject to change as all things do in tech 😊

## Tech Stack

Frontend:

- React
- Next.js
- Typescript

API:

- GraphQL

Backend:

- Django
- PostgreSQL (Overkill)
- IndexedDB

## Views

This is what views the app would show the user on certain routes

### About

A one pager describing the problem and what the app tries to solve by giving the user the tools to track their tasks

### Main

The main view that the user would be spending most of their time in. A grid of tasks that they have for the day (n) in the main column with shrinking columns to the right indicating the next day (n+1) and the day after next (n+2)

## Storage

This app's main data would be task text content and dates. Given the low cost of these
datatypes, a database would be overkill.

Very likely that using browser storage like IndexedDB would suffice
given the string-only data types

## Security

Not entirely sure how to make sure that IndexedDB/GraphQL queries are secure for client user data from malicious actors, need to research
