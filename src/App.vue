<template>
  <div id="app">
    <div id="page-header">
      <h1 class="page-header-item">Book Service</h1>
    </div>
    <div id="page-content">
      <adding-book-form @add:book="addBook" :authorsSource="authors"></adding-book-form>
      <books-table @onDelete="deleteBook" :booksSource="books" @onUpdate="updateBook"></books-table>
      <adding-author-form @add:author="addAuthor"></adding-author-form>
      <authors-table :authorsSource="authors" @onDelete="deleteAuthor" @onUpdate="updateAuthor"></authors-table>
    </div>
  </div>
</template>

<script>
import AddingBookForm from './components/AddingBookForm.vue'
import BooksTable from './components/BooksTable.vue'
import AddingAuthorForm from './components/AddingAuthorForm.vue'
import AuthorsTable from './components/AuthorsTable.vue'
import axios from "axios"

export default {
  name: 'App',
  components: {
    AddingBookForm,
    BooksTable,
    AddingAuthorForm,
    AuthorsTable,
  },
  data(){
    return {
      books: [],
      authors: [],
    }
  }
  ,
  methods:{
    addBook(book){
      axios.post('http://localhost:8090/books/add', {
        title: book.title,
        author: book.author,
        pages: book.pages
      })
      .then(() => { this.getBooks()})
      .catch(e => alert(e))      
    },

    addAuthor(author){
      axios.post('http://localhost:8090/authors/add', {
        firstName: author.firstName,
        lastName: author.lastName
      })
      .then(() => { this.getAuthors()})
      .catch(e => alert(e))
    },

    getAuthors(){
      axios.get('http://localhost:8090/authors/get').then(data => {this.authors = data.data}).catch(e => alert(e))
    },

    getBooks(){
        axios.get('http://localhost:8090/books/get').then(data => {this.books = data.data}).catch(e => alert(e))
        console.log(this.books)
        
    },

    deleteBook(id){
      axios.delete(`http://localhost:8090/books/delete/${id}`).then(() => {this.getBooks()}).catch(e => alert(e))
    },

    updateBook(book){
      axios.put(`http://localhost:8090/books/update/${book.id}`,
      {
        title: book.title,
        author: book.author,
        pages: book.pages
      }).then(() => {this.getBooks()}).catch(e => alert(e))
    },

    deleteAuthor(id){
      axios.delete(`http://localhost:8090/authors/delete/${id}`).then(() => {this.getAuthors()}).catch(e => alert(e))
    },

    updateAuthor(author){
      axios.put(`http://localhost:8090/books/update/${author.id}`,
      {
        firstName: author.firstName,
        lastName: author.lastName
      }).then(() => {this.getAuthors()}).catch(e => alert(e))
    },
    onAuthorSubmit(data){
      if(data.isEdit){
        this.updateAuthor(data)
      }
      else{
        this.addAuthor(data)
      }
    },
    
    onBookSubmit(data){
      if(data.isEdit){
        this.updateBook(data)
      }
      else{
        this.addBook(data)
      }
    },

    onUpdateBook(data){
      this.booksForm = data;
      this.booksForm.isEdit = true;
    },

    onUpdateAuthor(data){
      this.authorsForm = data;
      this.authorsForm.isEdit = true;
    },    
    
  },
  mounted(){
    this.getAuthors(),
    this.getBooks()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#page-header {
  background-color: teal;
  margin-bottom: 40px;
  height: 100px;
  display: flex;
  align-items: flex-start;
}

#page-header .page-header-item {
  background-color: teal;
  align-items: center;
  font-size: 50px;
  color: white;
  margin-left: 10px;
  padding: 5px;
}
</style>
