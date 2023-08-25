console.log("Hello World")

const app = Vue.createApp({
    // data, functions
    data() {
        return {
            filtered: false,
            showBooks: true,
            bookList: [
                { title: "Final Empire", author: "Brandon Sanderson", img: '/assets/book-placeholder-image.jpg', isFav: true },
                { title: "The Way of The Kings", author: "Brandon Sanderson", img: '/assets/book-placeholder-image.jpg', isFav: false },
                { title: "Name of the Wind", author: "Patrick Rothfuss", img: '/assets/book-placeholder-image.jpg', isFav: true }
            ]

        }
    },
    methods: {
        // Toggles whether to show all books or none
        changeShowBooks() {
            this.showBooks = !this.showBooks
        },

        // Toggles whether a book is favorite or not
        toggleFav(book) {
            book.isFav = !book.isFav
        },

        // Toggles whether to show all books or only favorites
        showFavBooks() {
            this.filtered = !this.filtered
        }
    },
    computed: {
        // Returns computed data array - only favorites from entire book list
        favBooks() {
            return this.bookList.filter((book) => book.isFav)
        }
    }
})

app.mount("#app")