<template>
  <div id="app">
    <div id="page-header">
      <h1 class="page-header-item"><a class="page-button" href="/">Book Service</a></h1>
      <a class="page-button button" href="books">Books</a>
      <a class="page-button button" href="authors">Authors</a>
    </div>
    <div id="page-content">
      <h1> Witaj w book service! </h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
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

.page-button {
  color: white;
  text-decoration: none;
}

.page-button:hover {
  background-color: grey;
}

.button {
  border: 3px white solid;
  border-radius: 30px;
  padding: 15px;
  margin: 17px;
  font-size: 25px;
  min-width: 150px;
}

.btn-active {
  background-color: lightgrey;
  color: black;
}


</style>
