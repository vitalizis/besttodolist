import {
    REMOVE_SUB_TASK,
    ADD_SUB_TASK,
    EDIT_SUB_TASK,
    REMOVE_TASK,
    ADD_TASK,
    EDIT_TASK
} from './tasksConstants';

const initialState = [
    {
        id: 1,
        name: 'test group',
        subTasks: [
            {id: 1, name: 'task 1'},
            {id: 2, name: 'task 2'},
            {id: 3, name: 'task 3'},
            {id: 4, name: 'task 4'}
        ]
    },
    {
        id: 2,
        name: 'test group 1',
        subTasks: [
            {id: 1, name: 'task 1'},
            {id: 2, name: 'task 2'},
            {id: 3, name: 'task 3'},
            {id: 4, name: 'task 4'}
        ]
    },
    {
        id: 3,
        name: 'test group 2',
        subTasks: [
            {id: 1, name: 'task 1'},
            {id: 2, name: 'task 2'},
            {id: 3, name: 'task 3'},
            {id: 4, name: 'task 4'}
        ]
    }
];

function tasksReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_TASK:
            return [
                ...state,
                {id: state.length!==0 ? state[state.length - 1].id + 1: 1, name: action.name, subTasks: []}
            ];

        case EDIT_TASK:
            return state.map((item, index) => {
                if (item.id !== action.id) {
                    return item
                }
                return {
                    ...item, name: action.name
                }
            })

        case REMOVE_TASK:
            return state.filter((item, index) => item.id !== action.id)

        //sub tasks
        case REMOVE_SUB_TASK:
            return state.map((item, index) => {
                if (item.id !== action.group_id) {
                    return item
                }
                return {
                    ...item, subTasks: item.subTasks.filter((item, index) => item.id !== action.id)
                }
            })

        case ADD_SUB_TASK:

            return state.map((item, index) => {
                if (item.id !== action.group_id) {
                    return item
                }
                return {
                    ...item, subTasks: [
                      ...item.subTasks,
                        {id: item.subTasks.length!==0 ? item.subTasks[item.subTasks.length - 1].id + 1: 1,
                            name: action.name
                        }]
                }
            })
        //
        case EDIT_SUB_TASK:

            return state.map((group) => {
                if (group.id !== action.group_id) {
                    return group;
                }
                return {
                    ...group,
                    subTasks: group.subTasks.map(
                      (task) => task.id !== action.id ? task :
                        { ...task, name: action.name }
                    ),
                }
            });

        default:
            return state;
    }
}

export default tasksReducer;
