/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            height: {
                '128': '32rem',
            },
            width: {
                '128': '32rem',
                '288': '23rem'
            },
        },
    },
    plugins: [],
}

