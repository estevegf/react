# React & Next Project

This project was generated with:
- `npm init -y`
- `npm install --save next react react-dom`

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Production server (static content)
- `npm run prod`
- `scp -r .\out> user@host:/home/user`
- `ssh user@host`
- configure VIRTUALHOST
- configure WEB SERVER to handle routing if necessary.

## Production server (server-rendered)
- `ssh user@host`
- `git clone git@github.com:<YOUR_ORGANIZATION>/<YOUR_PROJECT> project`
- `cd project`
- `npm install`
- `npm run build`
- `PORT=4000 pm2 start npm --name "next" -- run start-port`
