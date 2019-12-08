import {
  REMOVE_TASK,
  ADD_TASK,
  EDIT_TASK,
  REMOVE_SUB_TASK,
  ADD_SUB_TASK,
  EDIT_SUB_TASK
} from './tasksConstants';

const tasksActions = {
  addTask: name => ({
    type: ADD_TASK,
    name: name
  }),
  removeTask: id => ({
    type: REMOVE_TASK,
    id
  }),
  editTask: (name, id) => ({
    type: EDIT_TASK,
    name: name,
    id
  }),
  //subtasks
  addSubTask: (group_id, name) => ({
    type: ADD_SUB_TASK,
    name: name,
    group_id: group_id
  }),
  removeSubTask: (group_id, id) => ({
    type: REMOVE_SUB_TASK,
    group_id: group_id,
    id: id
  }),
  editSubTask: (group_id, id, name) => ({
    type: EDIT_SUB_TASK,
    group_id: group_id,
    id: id,
    name: name
  })
};

export default tasksActions;
