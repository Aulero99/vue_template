import { reactive } from 'vue';
import vars from './assets/variables.json'

export const AppState = reactive({
    /** @type {Boolean} */
    dev: vars.dev,
    /** @type {[]} */
    arr: [],
})