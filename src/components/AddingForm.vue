<template>
    <div class="adding-form-container">
        <form @submit.prevent="handleSubmit" class="adding-form">         
            <div class="form-field">
                <label> Title </label>
                <input v-model="book.title"
                 type="text"
                 name="title"
                 :class="{ 'has-error': submitting && invalidTitle}"
                 @focus="clearStatus"
                 @keypress="clearStatus"> 
            </div>
            <div class="form-field">
                <label> Author </label>
                <input v-model="book.author"
                 type="text"
                 name="author"
                 :class="{ 'has-error': submitting && invalidAuthor}"
                 @focus="clearStatus"
                 @keypress="clearStatus"> 
            </div>
            <div class="form-field">
                <label> Pages </label>
                <input v-model="book.pages"
                 type="text"
                 name="pages"
                 :class="{ 'has-error': submitting && invalidPages}"
                 @focus="clearStatus"
                 @keypress="clearStatus"> 
            </div>
            <div class="form-field">
                <p v-if="error && submitting" class="error-message">
                    Wypelnij wskazane pola formularza
                </p>
                <p v-if="success" class="success-message">
                    Dane poprawnie zapisano
                </p>
            </div>            
            <div class="form-field">
                <button type="submit">Add</button>
            </div>             
        </form>
    </div>
</template>

<script>
export default {
    name: "adding-form",
    data(){
        return {
            submitting: false,
            error: false,
            success: false,
            book: {
                id: '',
                title: '',
                author: '',
                pages: ''
            }
        }
    },
    methods: {
        clearStatus(){
            this.error = false;
            this.success = false;
        },

        handleSubmit(){
            this.submitting = true
            this.clearStatus()
            if(this.invalidTitle || this.invalidAuthor || this.invalidPages){
                this.error = true
                return
            }

            this.$emit('add:book', this.book)

            this.book = {
                id: '',
                title: '',
                author: '',
                pages: ''
            }
            this.error = false;
            this.success = true;
            this.submitting = false;
        }
    },
    computed: {
        invalidTitle(){
            return this.book.title === ''
        },
        invalidAuthor(){
            return this.book.author === ''
        },
        invalidPages(){
            return this.book.pages === ''
        }
    }
}

</script>

<style scoped>

.form-field{
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
}

.adding-form-container{
    margin-bottom: 30px;
}

.form-field label {
    font-size: 25px;
    margin-right: 20px;
}

[class*='-message']{
    font-weight: 500;
}

.error-message{
    color: rgb(255, 38, 0);
}

.success-message {
    color: rgb(6, 216, 41)
}

</style>