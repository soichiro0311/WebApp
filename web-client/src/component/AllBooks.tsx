import * as React from 'react';
import Card from '@material-ui/core/Card'
import Table from 'material-ui/Table'
import TableBody from 'material-ui/Table/TableBody'
import TableRowColumn from 'material-ui/Table/TableRowColumn'
import TableHeader from 'material-ui/Table/TableHeader'
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn'
import TableRow from 'material-ui/Table/TableRow'
import BookStore from '../store/BookStore';
import { inject, observer } from 'mobx-react';
import DeleteBook from './DeleteBook';
import AddBook from './AddBook';

// 書籍の全件リストを表示するコンポーネント
interface AllBooksProps{
    bookStore?: BookStore
}
interface AllBooksState{
    selectedIndex: number | null
    isModalOpen: boolean
}

@inject('bookStore')
@observer
class AllBooks extends React.Component<AllBooksProps, AllBooksState> {
    
    state={
        selectedIndex: null,
        isModalOpen:false,
    }
    selectRow = (index: number[] | "all") => {
        var targetIndex = index[0];
        if (typeof targetIndex == 'number') {
            this.setState({
                selectedIndex: targetIndex
            })
        }
    }

    public render() {
        // 表のヘッダー行を作成
        var tableHeaders = ["","タイトル", "出版年月日", "価格"]
        return (
            <div>
                <Card>
                    <Table onRowSelection={zIndex => this.selectRow(zIndex)}>
                        <TableHeader displaySelectAll={false}>
                            <TableRow>
                                {tableHeaders.map((header, index) => {
                                    if(header==""){
                                        return(
                                            <TableHeaderColumn><AddBook bookStore={this.props.bookStore!} /></TableHeaderColumn>
                                        )
                                    }
                                    return (
                                        <TableHeaderColumn>{header}</TableHeaderColumn>
                                    )
                                })}
                            </TableRow>
                        </TableHeader>
                        <TableBody deselectOnClickaway={false} showRowHover={true} displayRowCheckbox={false}>
                            {this.props.bookStore!.books.map((book, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableRowColumn><DeleteBook targetBook={book} bookStore={this.props.bookStore!}/></TableRowColumn>
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

export default AllBooks;
