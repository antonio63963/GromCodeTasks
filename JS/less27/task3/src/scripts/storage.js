//  const tasks = [{
//     text: 'Buy milk',
//     done: false,
//     id: 1,
//     dateCreate: 1592358805803,
//     dateDone: null,
// },
// {
//     text: 'Pick up Tom from airport',
//     done: false,
//     id: 2,
//     dateCreate: 159235880403,
//     dateDone: null,
// },
// {
//     text: 'Visit party',
//     done: false,
//     id: 3,
//     dateCreate: 1592358803503,
//     dateDone: null,
// },
// {
//     text: 'Visit doctor',
//     done: true,
//     id: 4,
//     dateCreate: 1592340805803,
//     dateDone: 1592358805803,
// },
// {
//     text: 'Buy meat',
//     done: true,
//     id: 5,
//     dateCreate: 1592435805803,
//     dateDone: 1592458805803,
// },
// ];
// localStorage.setItem('tasksList', JSON.stringify(tasks))

export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
}
export const getTaskList = () => {
  return localStorage.getItem('tasksList')
    ? JSON.parse(localStorage.getItem('tasksList'))
    : [];
}