import * as React from 'react';
import Card from '@material-ui/core/Card'
import Table from 'material-ui/Table'
import TableBody from 'material-ui/Table/TableBody'
import TableRowColumn from 'material-ui/Table/TableRowColumn'
import TableHeader from 'material-ui/Table/TableHeader'
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn'
import TableRow from 'material-ui/Table/TableRow'
import { Book } from '../model/Book';
import DeleteBook from './DeleteBook';

interface AllBooksInput {
    books: Book[]
}

interface AllBooksState {
    deleteTargetBook: Book | null
    selectedIndex: number | null
}

// 書籍の全件リストを表示するコンポーネント
class AllBooks extends React.Component<AllBooksInput, AllBooksState> {
    constructor(props: AllBooksInput) {
        super(props);
        this.state = {
            deleteTargetBook: null,
            selectedIndex: null
        }
    }
    selectRow = (index: number[] | "all") => {
        var targetIndex = index[0];
        if (typeof targetIndex == 'number') {
            this.setState({
                deleteTargetBook: this.props.books[targetIndex],
                selectedIndex: targetIndex
            })
        }
    }

    public render() {
        // 表のヘッダー行を作成
        var tableHeaders = ["タイトル", "出版年月日", "価格"]
        return (
            <div>
                <Card>
                    <Table onRowSelection={zIndex => this.selectRow(zIndex)}>
                        <TableHeader displaySelectAll={false}>
                            <TableRow>
                                {tableHeaders.map((header, index) => {
                                    return (
                                        <TableHeaderColumn>{header}</TableHeaderColumn>
                                    )
                                })}
                            </TableRow>
                        </TableHeader>
                        <TableBody deselectOnClickaway={false} showRowHover={true} displayRowCheckbox={true}>
                            {this.props.books.map((book, index) => {
                                return (
                                    <TableRow key={index} selected={this.state.selectedIndex == index}>
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
                <DeleteBook targetBook={this.state.deleteTargetBook} />
            </div>
        );
    }
}


export default AllBooks;
