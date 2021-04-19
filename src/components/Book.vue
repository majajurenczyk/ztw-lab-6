<template>
    <tr>
        <td> {{book.id}}   </td>
        <td> {{book.title}} </td>
        <td> {{book.author}} </td>
        <td> {{book.pages}} </td>
        <td>
            <button class="book-update-button" @click="onUpdate">Update</button>
            <button class="book-delete-button" @click="onDelete">Delete</button>
        </td>             
    </tr>
</template>

<script>
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
        onEdit(){
            this.$emit("onUpdate", this.book)
        }
    }
}
</script>