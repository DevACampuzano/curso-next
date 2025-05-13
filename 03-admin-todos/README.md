# Development

Pasos para levantar la app en desarrollo

1. levantar la base de datos

2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el SEED para [crear la base de datos local](http://localhost:3000/api/seed)

```sh
docker compose up -d
```

# Prisma commands

iniciar prisma

```sh
npx prisma init
```

crear migracion

```sh
npx prisma migrate dev
```

generar cliente de prisma

```sh
npx prisma generate
```
