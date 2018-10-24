package controller

import (
	"time"

	"../model"
)

// GetAllBooks は書籍の全リストを取得する。　DB導入までの仮実装として返す書籍のオブジェクトを適当に生成。
func GetAllBooks() []model.Book {
	book1 := model.Book{
		Title:       "サンプル",
		PublishDate: time.Now().Format("2006/01/02"),
		Price:       1000,
	}

	book2 := model.Book{
		Title:       "サンプル2",
		PublishDate: time.Now().Format("2006/01/02"),
		Price:       3000,
	}

	books := []model.Book{book1, book2}

	return books
}
