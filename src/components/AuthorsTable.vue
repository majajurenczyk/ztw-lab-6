<template>
    <div id=authors-table>
        <table>
            <thead>
                <tr>
                    <th> ID </th>
                    <th> First Name </th>
                    <th> Last Name </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="author in authorsSource" :key="author.id">
                    <td> {{author.id}} </td>
                    <td> {{author.firstName}} </td>
                    <td> {{author.lastName}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'authors-table',
    props: {
        authorsSource: Array
    }
}
</script>

<style scoped>
    #authors-table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    #authors-table td, #authors-table th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    #authors-table tr:nth-child(even){background-color: rgb(204, 202, 202);}
    #authors-table tr:hover {background-color: teal}

    #authors-table th {
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: left;
        background-color:teal;
        color: white;
    }

</style>