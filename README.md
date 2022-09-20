# BAG: Backend Application

## Prerequisites

Variables should be provided in `.env` file:  
`DATABASE_URL` - url to database  
`SHADOW_DATABASE_URL` - url to [shadow database](https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database))
BAG_SECRET - access code for this API

For example,
```
DATABASE_URL="postgres://postgres:mysecretpassword@localhost:5432/postgres"
SHADOW_DATABASE_URL="postgresql://name:password@shadow.cloud.com:6445/database"
BAG_SECRET="19c3cd030cGJK3c5760a8ab0290c646e08767"

```

## Easy steps to Create local database (Docker container)

- download postgres images list
```
docker pull postgres
```

- obtain the list of existing Docker Images
```
docker images
```

- start the container
```
docker run --name customer-db -d -p 5433:5432 -e POSTGRES_PASSWORD=customerpassword postgres
```
where 
`--name customer-db` is name of container
`-d` is detached mode
`-p 5433:5432` is map from internal 5432 to external 5433 port
`-e POSTGRES_PASSWORD=customerpassword` is password for user
`postgres` is docker image

- use the database with
```
DATABASE_URL="postgres://postgres:customerpassword@localhost:5433/postgres"
```

## Usage
```
npm run dev
```

## Deploy
```
npx prisma migrate deploy
npm run install
npm start
```

## Using generators
```
npm run generate:backend
```
generates `schema.prisma` file to `src\generator\output\` by default

and,
```
npm run generate:frontend
```
generates `..\gen-frontend` folder using `..\pattern-frontend` folder by default
