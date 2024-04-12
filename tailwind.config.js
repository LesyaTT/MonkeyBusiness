import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Consolas', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                'white': '#FFFFFF',
                'topbot': '#212121',
                'blue-light': '#4A4E69',
                'blue-dark': '#22223B',
                'back-light': '#F2E9E4',
                'light-card': '#EADBD3',
                'dark-card': '#C9ADA7',
                'blue-dark-card': '#2B2B4B',
                'blue-light-card': '#555978',
            },
        },
    },

    plugins: [forms],
};
