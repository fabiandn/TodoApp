import expect from 'expect';
import { visibilityFilter, todos } from '../reducers';

describe('todos', () => {
    it('should add todo item', () =>{
        const action = {
                type: 'ADD_TODO',
                text: 'My task 1',
                id: 1
            };

        const actual = todos(undefined, action);
        
        const expected = [
            {
                id: 1,
                text: 'My task 1',
                completed: false
            }
        ];

        expect(actual).toEqual(expected);
    })
});