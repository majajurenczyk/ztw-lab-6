<template>
  <div id="app">
    <div id="page-header">
      <h1 class="page-header-item">Book Service</h1>
    </div>
    <div id="page-content">
      <adding-book-form @add:book="addBook"></adding-book-form>
      <books-table :booksSource="books"></books-table>
      <adding-author-form @add:author="addAuthor"></adding-author-form>
      <authors-table :authorsSource="authors"></authors-table>
    </div>
  </div>
</template>

<script>
import AddingBookForm from './components/AddingBookForm.vue'
import BooksTable from './components/BooksTable.vue'
import AddingAuthorForm from './components/AddingAuthorForm.vue'
import AuthorsTable from './components/AuthorsTable.vue'

export default {
  name: 'App',
  components: {
    AddingBookForm,
    BooksTable,
    AddingAuthorForm,
    AuthorsTable
  },
  data(){
    return {
      books: [],
      authors: []
    }
  }
  ,
  methods:{
    addBook(book){
      try{
        const param = {
          body: book,
          method: "POST",
        }     
        const response = fetch('http://localhost:8090/books/add', param)
        this.books = [... this.books, response.json()]
      }
      catch(error){
        console.error(error)
      }    
    },

    addAuthor(author){
      try{
        const param = {
          body: JSON.stringify(author),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }
        }
        fetch('http://localhost:8090/authors/add', param)
        this.getAuthors()
      }
      catch(error){
        console.error(error)
      }
    },

    getBooks(){
        try{
          const response = fetch('http://localhost:8090/books/get')
          const data = response.json()
          this.books = data
        }
        catch(error){
          console.error(error)
        }
    },

    getAuthors(){
      try{
        const response = fetch('http://localhost:8090/authors/get')
        const data = response.json()
        this.authors = data
      }
      catch(error){
        console.error(error)
      }
    },
  },
  mounted(){
    this.getBooks(),
    this.getAuthors()
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
