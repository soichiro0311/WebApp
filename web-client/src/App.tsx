import axios from 'axios';
import * as React from 'react';
import './App.css';
import Card from '@material-ui/core/Card'
import Table from 'material-ui/Table'
import TableBody from 'material-ui/Table/TableBody'
import TableRowColumn from 'material-ui/Table/TableRowColumn'
import TableHeader from 'material-ui/Table/TableHeader'
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn'
import TableRow from 'material-ui/Table/TableRow'
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import PopoverAnimationVertical from 'material-ui/Popover/PopoverAnimationVertical';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import logo from './logo.svg';

const server = 'http://web_server:5000/books';
// 計算結果を保持するstate
interface Book {
  title: string,
  publish_date: string,
  price: number
}
interface State {
  isYetNull: boolean,
  books: Book[],
  isMenuOpen: boolean
}
class App extends React.Component<{}, State> {
  state = {
    isYetNull: true,
    books: [],
    isMenuOpen: false
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

  handleToggle = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }

  public render() {
    var tableHeaders = ["title", "publish_date", "price"]
    const result = this.state.isYetNull;
    if (result) {
      return (
        <div className="App">
          <AppBar title="Book Management App" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={true} onLeftIconButtonClick={this.handleToggle} />
          <Popover
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            animation={PopoverAnimationVertical}
            open={this.state.isMenuOpen}
          >
            <Menu>
              <MenuItem primaryText="書籍全検索" onClick={this.onClick} />
              <MenuItem primaryText="メニューを閉じる" onClick={this.handleToggle} />
            </Menu>
          </Popover>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <AppBar title="Book Management App" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={true} onLeftIconButtonClick={this.handleToggle} />
          <Popover
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            animation={PopoverAnimationVertical}
            open={this.state.isMenuOpen}
          >
            <Menu>
              <MenuItem primaryText="書籍全検索" onClick={this.onClick} />
              <MenuItem primaryText="メニューを閉じる" onClick={this.handleToggle} />
            </Menu>
          </Popover>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  {tableHeaders.map((header, index) => {
                    return (
                      <TableHeaderColumn>{header}</TableHeaderColumn>
                    )
                  })}
                </TableRow>
              </TableHeader>
              <TableBody>
                {this.state.books.map((book, index) => {
                  return (
                    <TableRow key={index}>
                      <TableRowColumn>{book["title"]}</TableRowColumn>
                      <TableRowColumn>{book["publish_date"]}</TableRowColumn>
                      <TableRowColumn>{book["price"]}</TableRowColumn>
                      })}
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Card>
        </div>
      );
    }
  }
}


export default App;
