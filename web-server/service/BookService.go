package service

import "../model"
import "../repository"

type BookService struct{}

var sharedInstance *BookService

// GetAllBooks は書籍の全リストを取得する。
func (service *BookService) GetAllBooks() []model.Book {
	// DBを全件検索
	books := repository.FindAll()
	return books
}

// DeleteBook は書籍を削除する。
func (service *BookService) DeleteBook(target model.Book) {
	// DBから対象書籍を削除
	repository.DeleteByTitle(target.Title)
}

// RegisterBook は書籍を追加する。
func (service *BookService) RegisterBook(target model.Book) {
	// DBから対象書籍を削除
	repository.Register(target)
}

func GetBookServiceInstance() *BookService {
	if sharedInstance == nil {
		sharedInstance = &BookService{}
	}
	return sharedInstance
}
