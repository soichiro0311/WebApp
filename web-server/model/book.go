package model

/*
Book 書籍
*/
type Book struct {
	// タイトル
	Title string `json:"title"`
	// 発行年月日
	PublishDate string `json:"publish_date"`
	// 価格
	Price int `json:"price"`
}
