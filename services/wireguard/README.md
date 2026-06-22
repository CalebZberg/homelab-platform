# WireGuard VPN

## Purpose
Provides remote VPN access into the homelab network using WireGuard.

## Service
- Image: lscr.io/linuxserver/wireguard
- Container: wireguard
- Protocol: UDP
- Port: 51820
- Config path: ./config

## Required setup
- Create `.env` from `.env.example`
- Set `SERVERURL` to DDNS/public hostname
- Forward UDP 51820 on router to the homelab server
- Keep `config/` private and out of Git

## Environment variables
- `SERVERURL`: public DDNS hostname used by clients
- `SERVERPORT`: WireGuard UDP port
- `PEERS`: comma-separated client names
- `PEERDNS`: DNS server given to clients, currently Pi-hole/server DNS
- `ALLOWEDIPS`: controls full tunnel vs split tunnel
- `PERSISTENTKEEPALIVE_PEERS`: keeps mobile/NAT clients reachable
- `LOG_CONFS`: whether to print configs in logs

## Start / stop
- Start: `docker compose up -d`
- Stop: `docker compose down`
- Logs: `docker compose logs -f`

## Peer setup
- Add peers by updating `PEERS` in `.env`
- Recreate the container without deleting `config/`
- Show QR code: `sudo docker exec -it wireguard /app/show-peer phone`

## Security notes
- Do not commit `.env`
- Do not commit `config/`
- Each device should have its own peer
- Remove a peer if a device is lost
