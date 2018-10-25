package main

import (
	"../controller"
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()

	// 全書籍リスト取得
	e.GET("/books", controller.GetAllBooks)
	e.Start(":5000")
}
