import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.lenth === 0 ? (
                <p>No expenses</p>
            ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />;
                    })
                )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filter)
    };
}
export default connect(mapStateToProps)(ExpenseList);