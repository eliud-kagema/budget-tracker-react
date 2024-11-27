const TransactionList = ({ transactions, onDelete, onEdit }) => {
    const handleDelete = (id) => {
      if (window.confirm('Are you sure you want to delete this transaction?')) {
        onDelete(id);
      }
    };
  
    const handleEdit = (transaction) => {
      if (window.confirm('Are you sure you want to edit this transaction?')) {
        onEdit(transaction);
      }
    };
  
    return (
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
          Transactions
        </h2>
        <div className="space-y-4">
          {transactions.length === 0 ? (
            <p className="text-center text-gray-500 italic">
              No transactions available. Start by adding a new one!
            </p>
          ) : (
            transactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                onDelete={() => handleDelete(transaction.id)}
                onEdit={() => handleEdit(transaction)}
              />
            ))
          )}
        </div>
      </div>
    );
  };
  