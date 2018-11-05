package service

import "../model"
import "../repository"

// GetAllBooks は書籍の全リストを取得する。
func GetAllBooks() []model.Book {
	// DBを全件検索
	books := repository.FindAll()
	return books
}

// DeleteBook は書籍を削除する。
func DeleteBook(target model.Book) {
	// DBから対象書籍を削除
	repository.DeleteByTitle(target.Title)
}
