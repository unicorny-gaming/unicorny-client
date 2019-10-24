# Unicorny Client

## Description

This is first part of Unicorny project - fast working SPA application to contact with Unicorny backend (will be opensourced soon). This client is on active development, so feel free to contribute or asking author (@jfkz) for support and roadmap.

## Installation

1. You should have NodeJS and Yarn installed (besides of @git, of course).
2. Then clone repository to your server or desktop.
3. Install packages by run `yarn`
4. Then set up config files. There are 5 config files in the project:
```
config.dev.json
config.prod.json
webpack.config.js
webpack.dev.config.js
webpack.prod.config.js
```
All of them have example version, which is usefull for most users. You can simply rename them (remove example), but take a deep look on `expressSecret` and `steamApiKey` values in `config.json`
5. Then try to run local development server:
```sh
$ yarn start
```
6. Open your browser at `http://localhost:8888` by default and look at this!
7. Also you can try to open `http:://unicorny.ru`, but sometimes its not working =)

### Todos

 - Write Tests
 - Implement support for all server APIs (look here: `http://doc.unicorny.ru/`).
 - Set up CSGO servers for test.

License
----

MIT

&copy; 2016-2019 [@unicorny-gaming](https://github.com/unicorny-gaming)
