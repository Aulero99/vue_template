import { reactive } from 'vue';
import { Card } from './models/Card';
import { dev } from './env';

export const AppState = reactive({
    /** @type {Boolean} */
    dev: dev,
    /** @type {[import('./models/Card.js').Card{}]} */
    cards: []
})