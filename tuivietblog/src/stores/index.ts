import {defineStore} from "pinia";

export const useMyStore = defineStore('myStore', {
    state: () => ({
        expensive:[
            {id:1, title:"nguyen van a"},
            {id:2, title:"nguyen van B"},

        ],
        name:'kiennt'

    }),
});