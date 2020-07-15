import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const removeAction = removeExpense({ id: '123abc' });
    expect(removeAction).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const editAction = editExpense('123abc', { note: 'New note' });
    expect(editAction).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        update: { note: 'New note' }
    })
});

test('should setup add expense action object', () => {
    const expense = {
        description: 'Rent',
        note: 'This is test expense',
        amount: 102500,
        createdAt: 1200
    };

    const addAction = addExpense(expense);
    expect(addAction).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object from default', () => {
    const addAction = addExpense();
    expect(addAction).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});