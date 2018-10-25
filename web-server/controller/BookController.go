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
