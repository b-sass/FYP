let Todo = () => {
  return(
    <>
      <div className="component">
        <p>Close deadlines:</p>
        <div>
          <p>Assignment 1:</p>
          <p style={{"color": "#FCADAE"}}>1st Jan 2025</p>
          <p style={{"color": "#FCADAE"}}>Goal: 70%</p>
        </div>
        <div>
          <p>Assignment 2:</p>
          <p style={{"color": "#FCADAE"}}>23rd Jan 2025</p>
          <p style={{"color": "#FCADAE"}}>Goal: 65%</p>
        </div>
      </div>
    </>
  );
}

export default Todo;