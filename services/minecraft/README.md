# Minecraft Servers

Minecraft Bedrock servers managed with Docker Compose.

## Server Setup

Each server is defined in `compose.yaml`.

Private server configuration is stored in `.env` files:

- `family.env`
- `sosa.env`

Example files are committed:

- `family.env.example`
- `sosa.env.example`

World/server data is stored in `*.world/` folders and is ignored by Git.

## Docker Compose Commands

- `docker compose up -d` - start servers
- `docker compose down` - stop servers
- `docker compose restart family-server` - restart Family Server
- `docker compose restart sosa-server` - restart SOSA Server
- `docker logs -f minecraft-family-server` - view Family Server logs
- `docker logs -f minecraft-sosa-server` - view SOSA Server logs

Warning: do not delete or rename `*.world/` folders after a server has been created. They contain persistent world/server data.

Warning: do not use `docker compose down -v` unless intentionally deleting data.

## Gamerules

Gamerules can be modified after a server has been created and while it is running.

Format:

```bash
docker exec minecraft-server-name send-command "gamerule [command]"
```

Example:

```bash
docker exec minecraft-family-server send-command "gamerule showcoordinates true"
```

Applied gamerules:

```bash
docker exec minecraft-family-server send-command "gamerule showcoordinates true"
docker exec minecraft-family-server send-command "gamerule playersSleepingPercentage 1"

docker exec minecraft-sosa-server send-command "gamerule showcoordinates true"
docker exec minecraft-sosa-server send-command "gamerule playersSleepingPercentage 1"
```

## Planned
 - Automated server backups


