import * as React from 'react';
import axios from 'axios'
import './App.css';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import PopoverAnimationVertical from 'material-ui/Popover/PopoverAnimationVertical';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import AllBooks from './component/AllBooks';
import { Book } from './model/Book';


const server = 'http://web_server:5000/books';
const findAllBooksURL = '/findAllBooks';
const rootURL = '/';


interface State {
  isMenuOpen: boolean,
  books: Book[]
}
class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMenuOpen: false,
      books: []
    }
  }

  // サーバーから全ての書籍のリストを取得する
  public findAllBooks = () => {
    return axios.get(server)
      .then((res) => {
        console.log(res)
        this.setState({
          books: res.data
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  // メニューを表示する
  handleToggle = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }

  public render() {
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
            <MenuItem containerElement={<Link to={rootURL} />} primaryText="TOP" />
            <MenuItem containerElement={<Link to={findAllBooksURL} />} primaryText="書籍全検索" onClick={this.findAllBooks} />
            <MenuItem primaryText="メニューを閉じる" onClick={this.handleToggle} />
          </Menu>
        </Popover>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Route exact path={findAllBooksURL} render={() => <AllBooks books={this.state.books} />} />
        <Route exact path={rootURL} render={() => null} />
      </div>
    );
  }
}

export default App;
