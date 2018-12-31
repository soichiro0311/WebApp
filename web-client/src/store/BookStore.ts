import { observable, action } from 'mobx';
import { Book } from '../model/Book';
import axios from 'axios'
import * as qs from 'querystring'
const deleteBookUri = 'http://localhost:5000/deleteBook';
const registerBookUri = 'http://localhost:5000/registerBook';

export default class BookStore {
    @observable books: Book[] = [];
      
    @action.bound onDelete(targetBook: Book) {
        var param;
        param =  new URLSearchParams(qs.stringify(targetBook));
        console.log(param.getAll);
        
        axios.post(deleteBookUri,param)
            .then((res) => {
                console.log(res)
            })
            .catch((e) => {
                console.error(e);
            });
    
        this.books=this.books.filter(book => book!==targetBook)
    }
      
    @action.bound onAdd(newBook: Book) {
        var param;
        param =  new URLSearchParams(qs.stringify(newBook));
        axios.post(registerBookUri,param)
            .then((res) => {
                console.log(res)
            })
            .catch((e) => {
                console.error(e);
            });
        this.books.push(newBook)
    }
}