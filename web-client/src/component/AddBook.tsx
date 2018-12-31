import { Book } from '../model/Book';
import IconButton from 'material-ui/IconButton'
import AddIcon from '@material-ui/icons/AddCircle';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ClearIcon from '@material-ui/icons/Clear';
import BookStore from '../store/BookStore';
import * as React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

interface AddBookProps{
    bookStore: BookStore
}

interface AddBookState{
    newBook: Book
    isModalOpen: boolean
    isModalRequestClose: boolean
}

export default class AddBook extends React.Component<AddBookProps,AddBookState> {
    rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    getModalStyle() {
        const top = 50 + this.rand();
        const left = 50 + this.rand();
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      }

    state={
        newBook: new Book(),
        isModalOpen: false,
        isModalRequestClose: false,
    }

    handleOpen = () => {
       console.log("OPEN")
       this.setState({
           isModalOpen:true,
       })
       if(this.state.isModalRequestClose === true){
        this.setState({
            isModalRequestClose: false
        })
       }
    };

    handleClose = () => {
        console.log("CLOSE")
        this.setState({
            isModalRequestClose:true
        })
    };

    handleChange = (event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>,name:string) => {
        let book = Object.assign({}, this.state.newBook);    //creating copy of object
        book[name] = event.target.value;                        //updating value
        this.setState({
            newBook: book
        })
    };

    handleSubmit = () => {
        console.log(this.state.newBook)
        this.props.bookStore.onAdd(this.state.newBook)
    }

    public render(){
        console.log(this.state)
        return(
        <IconButton onClick={this.handleOpen}>
            <AddIcon color="primary" />
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.isModalOpen && !this.state.isModalRequestClose}
                >
                    <div className={'paper'}>
                    書籍登録フォーム
                    <form>
                        <TextField
                            id="input_title"
                            label="Title"
                            value={this.state.newBook.title}
                            onChange={(e) => this.handleChange(e,'title')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="input_publish_date"
                            label="PublishDate"
                            value={this.state.newBook.publish_date}
                            onChange={(e) => this.handleChange(e,'publish_date')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="input_price"
                            label="Price"
                            value={this.state.newBook.price}
                            onChange={(e) => this.handleChange(e,'price')}
                            margin="normal"
                        />
                        <br/>
                        <IconButton onClick={this.handleSubmit}>
                            <AddBoxIcon color="primary" />  
                        </IconButton>
                        <IconButton onClick={this.handleClose}>
                            <ClearIcon color="secondary" />  
                        </IconButton>      
                    </form>
                    </div>
                </Modal>
        </IconButton>)
    }
}