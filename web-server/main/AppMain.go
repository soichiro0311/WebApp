package main

import (
	"../controller"
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()
	bookController := controller.BookController{}

	// 全書籍リスト取得
	e.GET("/books", bookController.GetAllBooks)
	e.POST("/deleteBook", bookController.DeleteBook)
	e.POST("/registerBook", bookController.RegisterBook)
	e.Start(":5000")
}
