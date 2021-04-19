<template>
    <div id=books-table>
        <table>
            <thead>
                <tr>
                    <th> ID </th>
                    <th> Title </th>
                    <th> Author </th>
                    <th> Pages </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in booksSource" :key="book.id">
                    <td> {{book.id}} </td>
                    <td> {{book.title}} </td>
                    <td> {{book.author}} </td>
                    <td> {{book.pages}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'books-table',
    props: {
        booksSource: Array
    }
}
</script>

<style scoped>
    #books-table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    #books-table td, #books-table th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    #books-table tr:nth-child(even){background-color: rgb(204, 202, 202);}
    #books-table tr:hover {background-color: teal}

    #books-table th {
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: left;
        background-color:teal;
        color: white;
    }

</style>