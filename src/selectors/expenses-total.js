export default (expenses) => {
    const total = expenses.reduce((prev, current) => 
        prev + current.amount, 0
    );

    return total;
};