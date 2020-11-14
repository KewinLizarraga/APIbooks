# API Books

- Clone repository

```sh
git clone https://github.com/KewinLizarraga/APIbooks.git
```

- Install dependencies

```sh
npm i
```

- Create a file **.env** _[Revisar .env.example]_

- Run the API

```sh
npm run dev
```

# Endpoints

## Users

- POST

|   endpoint   |                  description |
| :----------: | ---------------------------: |
|  api/login   |     inicia sesión el usuario |
| api/register | se registra un nuevo usuario |

## Books

- GET

|      endpoint      |            description |
| :----------------: | ---------------------: |
|      api/book      | lista todos los libros |
| api/book/pag/:page |  lista cada 100 libros |
|   api/book/:\_id   |    lista un solo libro |

- POST

| endpoint |             description |
| :------: | ----------------------: |
| api/book | registra un nuevo libro |

- PUT

|    endpoint    |                 description |
| :------------: | --------------------------: |
| api/book/:\_id | edita informacion del libro |

- DELETE

|    endpoint    |      description |
| :------------: | ---------------: |
| api/book/:\_id | elimina un libro |

## Example JSON

```sh
 {
    "title": "Node.js in Action",
    "isbn": "1617290572",
    "pageCount": 300,
    "publishedDate": "2013-10-15T00:00:00.000-0700",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cantelon.jpg",
    "shortDescription": "Node.js in Action is an example-driven tutorial ...",
    "longDescription": "JavaScript on the server? Yep. Node.js is an elegant ...",
    "status": "PUBLISH",
    "authors": ["Mike Cantelon", ...],
    "categories": ["Web Development"]
  }
```
