<template>
  <div id="app">
    <div id="page-header">
      <h1 class="page-header-item">Book Service</h1>
    </div>
    <div id="page-content">
      <adding-form @add:book="addBook"></adding-form>
      <books-table :booksSource="books"></books-table>
    </div>
  </div>
</template>

<script>
import AddingForm from './components/AddingForm.vue'
import BooksTable from './components/BooksTable.vue'

export default {
  name: 'App',
  components: {
    AddingForm,
    BooksTable
  },
  data(){
    return {
      books: []
    }
  }
  ,
  methods:{
    addBook(book){
      try{
        const param = {
          body: book,
          method: "POST"
        }     
        const response = fetch('http://localhost:8090/books/add', param)
        this.books = [... this.books, response.json()]
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
    mounted(){
      this.getBooks()
    }
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
