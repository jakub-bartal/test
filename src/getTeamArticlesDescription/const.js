export const articles = [
    {id: 1, text: 'MobX in practise', authors: [3]},
    {id: 33, text: 'RxJS and redux-observable', authors: [1, 2, 3, 5, 6, 7]},
    {id: 23, text: 'Firebase', authors: [7, 2, 3]},
    {id: 333, text: 'Really cool article'},
    {id: 1234, text: 'Ramda.js and Redux combined', authors: [2]},
    {id: 2, text: 'CSS in JS', authors: [3, 5]},
]

export const authors = [
    {id: 1, name: 'Oliver'},
    {id: 2, name: 'Jan'},
    {id: 3, name: 'Jakub'},
    {id: 4, name: 'Peter'},
    {id: 5, name: 'Tomas'},
    {id: 6, name: 'Drahoslav'},
    {id: 7, name: 'Honza'},
]

export const teams = [
    {id: 1, name: 'Webscope 1', members: [1,2,3,4]},
    {id: 2, name: 'Webscope 2', members: [5,6,7]},
]

export const result1 = "Oliver wrote an article 'RxJS and redux-observable'\nJan wrote articles 'RxJS and redux-observable', 'Firebase' and 1 more.\nJakub wrote articles 'MobX in practise', 'RxJS and redux-observable' and 2 more.\nPeter wrote 0 articles.\n-----\nTeam 'Webscope 1' co-authored 5 out of 6 articles.";
export const result2 = "Tomas wrote articles 'RxJS and redux-observable' and 'CSS in JS'\nDrahoslav wrote an article 'RxJS and redux-observable'\nHonza wrote articles 'RxJS and redux-observable' and 'Firebase'\n-----\nTeam 'Webscope 2' co-authored 3 out of 6 articles.";