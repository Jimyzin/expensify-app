import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: '4',
            description: 'Coffee',
            note: '',
            amount: 295,
            createdAt: moment().valueOf()
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense by id', () => {
    const update = {
            description: 'Coffee',
            amount: 295
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        update
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe('Coffee');
    expect(state[1].amount).toBe(295);
});

test('should not edit expense if id not found', () => {
    const update = {
            description: 'Coffee',
            amount: 295
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        update
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});