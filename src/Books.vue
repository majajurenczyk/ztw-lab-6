<template>
  <div id="app">
    <div id="page-header" class="content-box shadow-box">
      <h1 class="page-header-item"><a class="page-button" href="/">Book Service</a></h1>
      <a class="page-button button shadow-box btn-active" href="books">Books</a>
      <a class="page-button button shadow-box" href="authors">Authors</a>
    </div>
    <div id="page-content" class="content-box shadow-box">
      <adding-book-form @add:book="addBook" :authorsSource="authors"></adding-book-form>
      <books-table @onDelete="deleteBook" :booksSource="books" @onUpdate="updateBook"></books-table>
    </div>
  </div>
</template>

<script>
import AddingBookForm from './components/AddingBookForm.vue'
import BooksTable from './components/BooksTable.vue'
import axios from "axios"

export default {
  name: 'App',
  components: {
    AddingBookForm,
    BooksTable,
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

    getBooks(){
        axios.get('http://localhost:8090/books/get').then(data => {this.books = data.data}).catch(e => alert(e))
    },

    getAuthors(){
      axios.get('http://localhost:8090/authors/get').then(data => {this.authors = data.data}).catch(e => alert(e))
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
  },
  mounted(){
    this.getBooks(),
    this.getAuthors()
  }
}
</script>

<style>


</style>
