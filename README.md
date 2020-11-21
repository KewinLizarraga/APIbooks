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

|   endpoint    |         description |
| :-----------: | ------------------: |
|  api/signup   | Register a new user |
|   api/login   |          User login |
|  api/profile  |        User profile |
| \* api/logout |         User logout |

## Books

- GET

|      endpoint      |          description |
| :----------------: | -------------------: |
|      api/book      |       List all books |
| api/book/pag/:page | List every 100 books |
|   api/book/:\_id   |          List a book |

- POST

| endpoint |         description |
| :------: | ------------------: |
| api/book | Register a new book |

- PUT

|    endpoint    |                    description |
| :------------: | -----------------------------: |
| api/book/:\_id | Edit the information of a book |

- DELETE

|    endpoint    |   description |
| :------------: | ------------: |
| api/book/:\_id | Delete a book |

## Example JSON - Book

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
