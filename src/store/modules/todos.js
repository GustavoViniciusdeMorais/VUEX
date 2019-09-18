import axios from 'axios';

const state = {
    // todos: [{
    //         id: 1,
    //         title: 'Study',
    //         completed: false
    //     },
    //     {
    //         id: 2,
    //         title: 'Work',
    //         completed: false
    //     }
    // ]
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=7');
        //console.log(response.data);
        commit('setTodos', response.data);
    },
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        });
        commit('newTodo', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo)
};

export default {
    state,
    getters,
    actions,
    mutations
};