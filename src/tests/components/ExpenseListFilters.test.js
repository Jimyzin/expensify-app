import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../components/ExpenseListFilters';
import { filters, altFilters, altFilers } from '../fixtures/filters';
import moment from 'moment';

let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    wrapper = shallow(
        <ExpenseListFilter
            filters={filters}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
        />
    );
});

test('should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter with alt filter correctly', () => {
    wrapper.setProps({
        filters: altFilers
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', { target: { value } });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilers
    });
    wrapper.find('select').simulate('change', { target: { value: 'date' } });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', { target: { value: 'amount' } });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle dates change', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(9, 'days');
    wrapper.find('DateRangePicker').simulate('datesChange', { startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change', () => {
    const calendarFocused = true;
    wrapper.find('DateRangePicker').simulate('focusChange', calendarFocused);
    expect(calendarFocused).toBe(calendarFocused);
});