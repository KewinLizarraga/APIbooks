# API Books

## Clone repository

```sh
git clone https://github.com/KewinLizarraga/APIbooks.git
```

## Install dependencies

```sh
npm i
```

## Create a file .env

Revisar .env.example

## Run the API

```sh
npm run dev
```

## Endpoints

|        |       endpoint       |                    |
| ------ | :----------------: | -----------------: |
| GET    |     api/book/      |     list all books |
|        |   api/book/:\_id   |      list one book |
|        | api/book/pag/:page | list books by page |
| POST   |     api/book/      |      register book |
| PUT    |   api/book/:\_id   |        update book |
| DELETE |   api/book/:\_id   |        delete book |

## Example JSON

```sh
{
    "booksCount": 100,
    "books": [
        {
            "categories": [
                "Web Development",
                ...
            ],
            "authors": [
                "Rob Allen",
                ...
            ],
            "_id": "5f9c524278d151f76cec62c1",
            "isbn": "1933988320",
            "title": "Zend Framework in Action",
            "subtitle": "Edit. Manning",
            "published": "2008-12-01T08:00:00.000Z",
            "publisher": "Manning",
            "pages": 432,
            "shortDescription": "Zend Framework in Action is ...",
            "longDescription": "From rather humble beginnings as the Personal ...",
            "imgUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
            "website": "https://www.manning.com/books/zend-framework-in-action"
            "__v": 0
        },
        ...
}
```
