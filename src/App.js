import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    // valueを初期化
    this.state = {
      todoList: [],
      value: ''
    };
  }

  onChange(e) {
    // e.target.valueでinputのvalueを取得
    this.setState({value: e.target.value})
  }

  add() {
    this.setState({
      todoList: this.state.todoList.concat(this.state.value),
      value: '',
    })
    console.log(this.state.value);
  }

  render() {
    // todoList一覧
    const todoListNode = this.state.todoList.map((todo, idx) => {
      return <li key={idx}>{todo}</li>
    })

    return (
      <div>
        <h1>TODO</h1>
        <div>
          <input type="text"
            value={this.state.value}
            onChange={e => this.onChange(e)}
          />
          <p>{this.state.value}</p>
        </div>
        <button onClick={() => this.add()}>追加</button>
        <ul>
          <p>{todoListNode}</p>
        </ul>
      </div>
    );
  }
}

export default App;
