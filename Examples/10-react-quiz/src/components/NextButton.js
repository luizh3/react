function NextButton({ dispatch, answer, index, numberQuestions }) {
  if (answer === null) {
    return null;
  }

  const hasNext = index < numberQuestions - 1;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: hasNext ? "nextQuestion" : "finish" })}
    >
      {hasNext ? "Next" : "Finished"}
    </button>
  );
}

export default NextButton;
