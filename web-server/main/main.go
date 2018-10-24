package main

import (
	"net/http"

	"../controller"
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()

	// 全書籍リスト取得
	e.GET("/books", GetAllBooks)

	//go func(echoEcho *echo.Echo) {
	//	copyEcho := echoEcho
	//	copyEcho.Start(":5001")
	//}(e)
	e.Start(":5000")
}

// GetAllBooks 全書籍のリストを取得する。
func GetAllBooks(e echo.Context) error {
	books := controller.GetAllBooks()
	// CORS対策を無効化同一ホストからのリクエストを受け付ける
	e.Response().Header().Set(echo.HeaderAccessControlAllowOrigin, "*")
	return e.JSON(http.StatusCreated, books)
}
