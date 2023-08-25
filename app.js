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
        changeShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        },
        showFavBooks() {
            this.filtered = !this.filtered
        }
    },
    computed: {
        favBooks() {
            return this.bookList.filter((book) => book.isFav)
        }
    }
})

app.mount("#app")