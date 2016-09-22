# GraphQL server example

An example implementation of GraphQL on a Restify server


### Install
It requires NodeJS v6.4.0 or higher.

```
npm install
```

### Run 
```
node index.js
```

### Try it out!
```sh
curl -XPOST -H 'Content-Type:application/graphql'  -d '{ count }' http://localhost:8081/graphql 
```

and it should be returning :

```
{
  "data": {
    "count": 0
  }
}
```


## What in the box?

The GraphQL schema provided with this server is defining a Photo type exposing 4 fields `[title, thumbnailUrl, url, id]`
