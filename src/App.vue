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
      books: [
        {
          id: 1,
          title: "Ziemia obiecana",
          author: "Barack Obama",
          pages: "400"
        }
      ]
    }
  }
  ,
  methods:{
    addBook(book){
      this.books = [... this.books, book]
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
