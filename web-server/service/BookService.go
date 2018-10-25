package service

import "../model"
import "../repository"

// GetAllBooks は書籍の全リストを取得する。　DB導入までの仮実装として返す書籍のオブジェクトを適当に生成。
func GetAllBooks() []model.Book {
	// DBを全件検索
	books := repository.FindAll()
	return books
}
