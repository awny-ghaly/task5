function App() {
  return <FormData />;
}

function FormData() {
  const [inputText, setInputText] = React.useState("");
  const [dataArray, setDataArray] = React.useState([]);
  const handleInput = () => {
    setDataArray([...dataArray, inputText]);
    setInputText("");
    console.log(dataArray);
  };
  return (
    <React.Fragment>
      <input
        value={inputText}
        type="text"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit" onClick={handleInput}>
        Submit
      </button>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
