To start application:

```

npm start

```
/data not included in mongo branch



DB Models

User = 
{
    username : string,
}

Listing =
{
    owner: User,
    book: Book,
    time: DateTime
}

Book = 
{
    title: string,
    isbn: int (string?),
    edition: string,
    author: string (Author?),
    publisher : string (Publisher?)
}

School = 
{
    EN : string,
    FR: string,
    courses : [Course]
}

Course = 
{
    code: string,
    instructor: string
}

* models have an _id parameter