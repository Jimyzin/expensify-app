import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import moment from 'moment';

let removeExpense, editExpense, history, wrapper;

beforeEach(() => {
    removeExpense = jest.fn();
    editExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
        removeExpense={removeExpense} editExpense={editExpense} history={history} expense={expenses[1]} />);

});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {

    const mockExpense = {
        description: 'Test Description',
        note: 'Test note',
        amount: 100200,
        createdAt: moment()
    };
    wrapper.find('ExpenseForm').prop('onSubmit')(mockExpense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, mockExpense);
});

test('should handle onClick', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id);
});