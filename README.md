# BAG: Frontend Application

Variables should be provided in `.env` file:  
`DATABASE_URL` - url to database  
`SHADOW_DATABASE_URL` - url to [shadow database](https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database))  
`BAG_SECRET` - access code for this API

For example,

```
DATABASE_URL="postgres://postgres:mysecretpassword@localhost:5432/postgres"
SHADOW_DATABASE_URL="postgresql://name:password@shadow.cloud.com:6445/database"
BAG_SECRET="19c3cd030cGJK3c5760a8ab0290c646e08767"

```
