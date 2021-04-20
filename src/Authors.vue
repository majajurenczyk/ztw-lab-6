<template>
  <div id="app">
    <div id="page-header">
      <h1 class="page-header-item">Book Service</h1>
    </div>
    <div id="page-content">
      <adding-author-form @add:author="addAuthor"></adding-author-form>
      <authors-table :authorsSource="authors" @onDelete="deleteAuthor" @onUpdate="updateAuthor"></authors-table>
    </div>
  </div>
</template>

<script>
import AddingAuthorForm from './components/AddingAuthorForm.vue'
import AuthorsTable from './components/AuthorsTable.vue'
import axios from "axios"

export default {
  name: 'App',
  components: {
    AddingAuthorForm,
    AuthorsTable,
  },
  data(){
    return {
      authors: [],
    }
  }
  ,
  methods:{
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
  },
  mounted(){
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
