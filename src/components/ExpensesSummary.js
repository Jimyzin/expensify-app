import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectTotalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ totalExpenses, totalCount }) => {
    const total = numeral(totalExpenses / 100).format('$0,0.00');
    const wording = totalCount > 1 ? 'expenses' : 'expense';
    return (
        <div>
            <h1>Viewing {totalCount} {wording} totalling {total}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const selectedExpenses = selectExpenses(state.expenses, state.filter);

    return {
        totalExpenses: selectTotalExpenses(selectedExpenses),
        totalCount: selectedExpenses.length
    };

};

export default connect(mapStateToProps)(ExpensesSummary);