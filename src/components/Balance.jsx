const Balance = ({ balance, setBalance }) => {
  const handleInsertMoney = () => {
    setBalance((prev) => prev + 1);
  };

  return (
    <div>
      <h3>Balance: £{balance}</h3>
      <button onClick={handleInsertMoney}>Insert £1</button>
    </div>
  );
};

export default Balance;
