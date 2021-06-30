import React, {useState} from 'react'

export default function Home() {

    const [author, setAuthor] = useState({
        name: "",
        email: ""
    })
    const [book, setBook] = useState({
        title: "",
        author: ""
    })

    const handleAuthorChange = (event) =>{
        let name = event.target.name
        let value = event.target.value

        setAuthor({
            ...author, [name]: value
        })

    }
    const handleBookChange = (event) =>{
        let name = event.target.name
        let value = event.target.value

        setBook({
            ...book, [name]: value
        })

    }





    return (
        <div>
            <form>
                <div>
                    <input onChange={handleAuthorChange} name="name" value={author.name} placeholder="name"/>
                </div>
                <div>
                    <input onChange={handleAuthorChange} name="email" value={author.email} placeholder="email"/>
                </div>
                <button>Submit Name</button>
            </form>
            <form>
                <div>
                    <input onChange={handleBookChange} name="title" value={book.title} placeholder="title"/>
                </div>
                <div>
                    <input onChange={handleBookChange} name="author" value={book.author} placeholder="author"/>
                </div>
                <button>Submit Book</button>
            </form>
            
        </div>
    )
}
