package controller

import (
	"net/http"

	"../model"
	"../service"
	"github.com/labstack/echo"
)

type BookController struct{}

// GetAllBooks 全書籍のリストを取得する。
func (bookController *BookController) GetAllBooks(e echo.Context) error {
	service := service.GetBookServiceInstance()
	books := service.GetAllBooks()
	// CORS対策を無効化同一ホストからのリクエストを受け付ける
	e.Response().Header().Set(echo.HeaderAccessControlAllowOrigin, "*")
	return e.JSON(http.StatusCreated, books)
}

// DeleteBook 書籍を削除する。
func (bookController *BookController) DeleteBook(e echo.Context) error {
	book := new(model.Book)
	e.Bind(book)
	//CORS対策を無効化同一ホストからのリクエストを受け付ける
	service := service.GetBookServiceInstance()
	service.DeleteBook(*book)
	header := e.Request().Header.Get("Access-Control-Request-Headers")
	e.Response().Header().Set(echo.HeaderAccessControlAllowOrigin, "*")
	e.Response().Header().Set(echo.HeaderAccessControlAllowMethods, "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS")
	e.Response().Header().Set(echo.HeaderAccessControlAllowHeaders, header)

	return e.JSON(http.StatusAccepted, book)
}

// RegisterBook 書籍を登録する。
func (bookController *BookController) RegisterBook(e echo.Context) error {
	book := new(model.Book)
	e.Bind(book)
	//CORS対策を無効化同一ホストからのリクエストを受け付ける
	service := service.GetBookServiceInstance()
	service.RegisterBook(*book)
	header := e.Request().Header.Get("Access-Control-Request-Headers")
	e.Response().Header().Set(echo.HeaderAccessControlAllowOrigin, "*")
	e.Response().Header().Set(echo.HeaderAccessControlAllowMethods, "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS")
	e.Response().Header().Set(echo.HeaderAccessControlAllowHeaders, header)

	return e.JSON(http.StatusAccepted, book)
}
