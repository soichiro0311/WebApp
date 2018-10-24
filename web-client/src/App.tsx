import axios from 'axios';
import * as React from 'react';
require('node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css');
import './App.css';
var ReactBsTable = require('react-bootstrap-table');
var ReactBs = require('react-bootstrap');
var Button=ReactBs.Button
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

import logo from './logo.svg';

const server = 'http://localhost:5000/books';
// 計算結果を保持するstate
interface Book {
  title: string,
  publish_date: string,
  price: number
}
interface Response {
  isYetNull: boolean,
  books: Book[]
}
class App extends React.Component<{}, Response> {
  state = {
    isYetNull: true,
    books: []
  }
  onClick = () => {
    return axios.get(server)
      .then((res) => {
        this.setState({
          isYetNull: false,
          books: res.data
        });
        console.log(this.state);
      })
      .catch((e) => {
        console.error(e);
      });

  }
  public render() {
    //var books = [{ title: this.state.title, publish_date: this.state.publish_date, price: this.state.price }, { title: this.state.title, publish_date: this.state.publish_date, price: this.state.price }]
    const result = this.state.isYetNull;
    if (result) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App-title">
              書籍管理システム
            </p>
          </header>
          <Button bsStyle="success" onClick={this.onClick}>書籍検索</Button>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App-title">
              書籍管理システム
            </p>
          </header>
          <Button bsStyle="success" onClick={this.onClick}>書籍検索</Button>
          <div className="Table">
            <BootstrapTable data={this.state.books} trClassName='tr-string-example'>
              <TableHeaderColumn isKey dataField='title'>タイトル</TableHeaderColumn>
              <TableHeaderColumn dataField='price'>価格</TableHeaderColumn>
              <TableHeaderColumn dataField='publish_date'>出版日</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      );
    }
  }
}

export default App;
