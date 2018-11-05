import * as React from 'react';
import { Book } from '../model/Book';
import FloatingButton from 'material-ui/FloatingActionButton'
import ContentRemove from 'material-ui/svg-icons/content/remove';
import axios from 'axios'
const server = 'http://web_server:5000/deleteBook';

interface DeleteBookInput {
    targetBook: Book | null
}

// 書籍の全件リストを表示するコンポーネント
class DeleteBook extends React.Component<DeleteBookInput, {}> {
    public render() {
        if (this.props.targetBook != null) {
            return <FloatingButton onClick={() => this.deleteBook}>
                <ContentRemove />
            </FloatingButton>
        } else {
            return null;
        }
    }

    public deleteBook = () => {
      return axios.post(server,this.props.targetBook)
        .then((res) => {
          console.log(res)
        })
        .catch((e) => {
          console.error(e);
        });
    }
}

export default DeleteBook