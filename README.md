# Homelab Platform

Created by Caleb Zierenberg

Homelab Platform is a self-hosted web dashboard for accessing and managing services running on a home server through the Homelab Platform API.

This project is currently in the initial setup phase. More features and services will be added over time.

## Current Services

* Dashboard: web interface for interacting with homelab services
* API: backend service built with FastAPI

## Project Structure

* `apps/` - contains all application services

  * `apps/api/` - FastAPI backend
  * `apps/dashboard/` - React + Vite dashboard

## Requirements

* Docker
* Docker Compose

## Tech Stack

* FastAPI
* React
* Vite
* Docker
* Docker Compose

## How to Start

Run the full stack with Docker Compose:

`docker compose up`

## Ports

* `8000` - API via FastAPI
* `5173` - Dashboard via React + Vite

## Planned Implementations

* Game server hosting
* Camera live feed and recording
* Personal AI assistant and chatbot
* NAS integration
* Internal network dashboard webpage
* Device backup and recovery system
* Media/file storage and lookup


