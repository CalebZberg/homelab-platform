# Pi-hole Service

This service runs Pi-hole as a Docker container for local network DNS filtering, ad blocking, and custom DNS management.

## Purpose

Pi-hole provides DNS-based ad blocking and local network DNS control for the homelab. Devices on the network can use the homelab server as their DNS server, allowing requests to be filtered and monitored through Pi-hole.

## Service Details

* Image: `pihole/pihole`
* Container name: `pihole-container`
* DNS port: `53`
* Web admin port: `80`
* Config path: `./etc-pihole`
* Compose file: `services/pihole/compose.yaml`

## Ports

The service binds Pi-hole to the homelab server LAN IP:

192.168.1.100:53/tcp
192.168.1.100:53/udp
192.168.1.100:80/tcp

Port `53` is used for DNS queries.

Port `80` is used for the Pi-hole web admin interface.

## Environment Variables

This service uses a local `.env` file.

Required variables:

TZ=America/Chicago
PIHOLE_PASSWORD=change-me

`TZ` sets the container timezone.

`PIHOLE_PASSWORD` sets the Pi-hole web admin password.

Do not commit the real `.env` file.

## Start and Stop

From this folder:

`sudo docker compose up -d`

To stop the service:

`sudo docker compose down`

To view logs:

`sudo docker compose logs -f`

## Web Admin

The Pi-hole admin page is available on the local network at:

`http://192.168.1.100/admin`

The password is set through `PIHOLE_PASSWORD` in the `.env` file.

## Router / DNS Setup

To use Pi-hole for the full home network, configure the router DHCP settings so clients receive the homelab server as their DNS server:

192.168.1.100

Avoid setting a secondary public DNS server if the goal is to force all DNS through Pi-hole. Some clients may use the secondary DNS and bypass Pi-hole filtering.

## Data and Git Ignore

Pi-hole stores persistent configuration and data in:

`services/pihole/etc-pihole/`

This folder should not be committed to Git.

The following should be ignored:

services/pihole/.env
services/pihole/etc-pihole/
services/pihole/etc-dnsmasq.d/

## Notes

Pi-hole is currently managed as a standalone service under `services/pihole`.

It may later be included from the root Compose file using Compose `include`, but it is kept separate for now so DNS infrastructure can be managed independently from the main dashboard/API stack.

