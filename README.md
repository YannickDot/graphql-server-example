# GraphQL server example

An example implementation of GraphQL on a Restify server


### Install
It requires NodeJS v6.4.0 or higher.

```sh
> npm install
```

### Run 
```sh
> node index.js
```

### Try it out!

Let's define an example query :

```js
{
  photo(id: 4) {
    id,
    title,
    url
  }
}
```

Now we run it using cURL :

```sh
curl -XPOST -H 'Content-Type:application/graphql'  -d '{ photo(id: 4) { id, title, url } }' http://localhost:8081/graphql 
```

and it should be returning :

```json
{
  "data": {
    "photo": {
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "http://placehold.it/600/d32776"
    }
  }
}
```


## What in the box?

The GraphQL schema provided with this server is defining a Photo type exposing 4 fields `[title, thumbnailUrl, url, id]`
