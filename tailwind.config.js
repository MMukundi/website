module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    // darkMode: false, // or 'media' or 'class'
    darkMode: 'media',
    theme: {
        // extend: { backgroundImage: ['dark'] },
    },
    variants: {
        extend: { display: ['dark'], visibility: ['dark'] },
    },
    plugins: [
        require('tailwindcss-hero-patterns'),
        require('@tailwindcss/typography'),
    ],
}