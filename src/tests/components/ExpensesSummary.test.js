import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';

test('should render multiple expenses', () => {
    const wrapper = shallow( <ExpensesSummary totalExpenses={450000} totalCount={10} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render 1 expense', () => {
    const wrapper = shallow( <ExpensesSummary totalExpenses={450000} totalCount={1} />);
    expect(wrapper).toMatchSnapshot();
});
