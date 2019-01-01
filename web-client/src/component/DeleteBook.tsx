import * as React from 'react';
import { Book } from '../model/Book';
import DeleteButton from '@material-ui/icons/DeleteForever';
import BookStore from '../store/BookStore';

interface DeleteBookInput {
    targetBook: Book
    bookStore: BookStore
}

// 書籍の全件リストを表示するコンポーネント
class DeleteBook extends React.Component<DeleteBookInput, {}> {
    public render() {
        if (this.props.targetBook != null) {
            return <DeleteButton color="secondary" onClick={() => this.props.bookStore.onDelete(this.props.targetBook)} />
        } else {
            return null;
        }
    }
}

export default DeleteBook