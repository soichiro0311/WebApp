package controller

import (
	"net/http"

	"../service"
	"github.com/labstack/echo"
)

// GetAllBooks 全書籍のリストを取得する。
func GetAllBooks(e echo.Context) error {
	books := service.GetAllBooks()
	// CORS対策を無効化同一ホストからのリクエストを受け付ける
	e.Response().Header().Set(echo.HeaderAccessControlAllowOrigin, "*")
	return e.JSON(http.StatusCreated, books)
}

// DeleteBook 書籍を削除する。
func DeleteBook(e echo.Context) error {
	book := e.FormValue
	// CORS対策を無効化同一ホストからのリクエストを受け付ける
	service.DeleteBook(book)
	e.Response().Header().Set(echo.HeaderAccessControlAllowOrigin, "*")
	return e.JSON(http.StatusCreated, books)
}
