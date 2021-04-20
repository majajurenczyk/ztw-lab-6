<template>
    <tr>
        <td> {{book.id}}   </td>
        <td> {{book.title}} </td>
        <td>{{book.id}} </td>
        <td> {{book.pages}} </td>
        <td>
            <button class="book-update-button" @click="onUpdate">Update</button>
            <button class="book-delete-button" @click="onDelete">Delete</button>
        </td>             
    </tr>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Book',
    props: {
        book: {
            type: Object
        }
    },
    methods: {
        onDelete(){
            this.$emit("onDelete", this.book.id);
        },
        onUpdate(){
            this.$emit("onUpdate", this.book)
        },
        getAuthor(act_book){
            axios.get(`authors/get/${act_book.id}`).then(data => data.data).catch(e => alert(e))
        }
    }
}
</script>