#PG-PROMISE

## Objectives
- Download a couple of GUIs ([PSequel](http://www.psequel.com/), [Postico](https://eggerapps.at/postico/))
- Create a task Database
- Us pg-promise/Expressjs to create a basic API

### Useful tools

- [JSONView - Chrome Web Store](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)




## Set up the Database
### Create new database
In terminal - `createdb ga_taskmanager`

### Run the seed file for the database (Make sure you're in the project folder)
In terminal - `psql -d ga_taskmanager -f ga_taskmanager.sql`

### connect to the database
In terminal - `psql -d ga_taskmanager`

You should now be in something that looks like below

```javascript
megatron:ga_taskmanager patrickandre$ psql -d ga_taskmanager
psql (9.6.1)
Type "help" for help.

ga_taskmanager=# 
```

### Query the database
In terminal  - `select * from tasks;` DON'T forget the semi colon. 

You shoud get something like below:

```javascript
ga_taskmanager=# select * from tasks;
 id |     item     | minutes 
----+--------------+---------
  1 | Wash the car |      45
(1 row)

ga_taskmanager=# 
```

# Project Starter Folder (ga_taskmanager)
### Let's review

 - Directory Structure
 - queries.js
 - routes/index.js
 - app.js
 	- require('dotenv').config()
 - .env
 - .gitignore (ignoring .env)
 - process.env

 
 
 
 
 
 
 
 
 
 

