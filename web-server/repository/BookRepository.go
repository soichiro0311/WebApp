package repository

import (
	"database/sql"
	"fmt"

	// Mysql接続用のドライバをimport
	_ "github.com/go-sql-driver/mysql"

	"../model"
)

// FindAll 全書籍のリストをDBから取得する。
func FindAll() []model.Book {
	// db接続
	db, err := sql.Open("mysql", "root:mysql@tcp(database:3306)/bookManage?parseTime=true")
	// db接続エラーが発生した場合に標準出力
	if err != nil {
		fmt.Print(err)
	}
	defer db.Close()

	// Bookテーブルを全件検索
	rows, err := db.Query("select * from book")
	defer rows.Close()

	// Bookオブジェクトをモデルにバインド
	books := []model.Book{}
	for rows.Next() {
		book := model.Book{}
		err := rows.Scan(&book.Title, &book.PublishDate, &book.Price)
		if err != nil {
			fmt.Print(err)
		} else {
			books = append(books, book)
		}
	}
	return books
}

// DeleteByTitle 対象書籍をタイトルをキーにDBから削除する。
func DeleteByTitle(targetTitle string) {
	// db接続
	db, err := sql.Open("mysql", "root:mysql@tcp(database:3306)/bookManage?parseTime=true")
	// db接続エラーが発生した場合に標準出力
	fmt.Println(targetTitle)
	if err != nil {
		fmt.Print(err)
	}
	defer db.Close()

	// Bookテーブルからタイトルをキーにレコードを削除する
	rows, err := db.Query("delete from book where title = ?", targetTitle)
	defer rows.Close()
}

// Register 対象書籍をDBに登録する。
func Register(targetBook model.Book) {
	// db接続
	db, err := sql.Open("mysql", "root:mysql@tcp(localhost:3306)/bookManage?parseTime=true")
	// db接続エラーが発生した場合に標準出力
	fmt.Println(targetBook)
	fmt.Println(targetBook.Title)
	fmt.Println(targetBook.PublishDate)
	fmt.Println(targetBook.Price)
	if err != nil {
		fmt.Print(err)
	}
	defer db.Close()

	// Bookテーブルからタイトルをキーにレコードを削除する
	rows, err := db.Query("insert into book values (? , ? , ?)", targetBook.Title, targetBook.PublishDate, targetBook.Price)
	defer rows.Close()
}
