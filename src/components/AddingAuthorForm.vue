<template>
    <div class="adding-author-form-container">
        <form @submit.prevent="handleSubmit" class="adding-author-form">         
            <div class="form-field">
                <label> First Name </label>
                <input v-model="author.firstName"
                 type="text"
                 name="title"
                 :class="{ 'has-error': submitting && invalidTitle}"
                 @focus="clearStatus"
                 @keypress="clearStatus"> 
            </div>
            <div class="form-field">
                <label> Last Name </label>
                <input v-model="author.lastName"
                 type="text"
                 name="author"
                 :class="{ 'has-error': submitting && invalidAuthor}"
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
    name: "adding-author-form",
    data(){
        return {
            submitting: false,
            error: false,
            success: false,
            author: {
                id: '',
                firstName: '',
                lastName: ''
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
            if(this.invalidFirstName || this.invalidLastName){
                this.error = true
                return
            }

            this.$emit('add:author', this.author)

            this.author = {
                id: '',
                firstName: '',
                lastName: ''
            }
            this.error = false;
            this.success = true;
            this.submitting = false;
        }
    },
    computed: {
        invalidFirstName(){
            return this.author.firstName === ''
        },
        invalidLastName(){
            return this.author.lastName === ''
        },
    }
}

</script>

<style scoped>

.form-field{
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
}

.adding-author-form-container{
    margin-top: 30px;
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