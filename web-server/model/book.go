package model

/*
Book 書籍
*/
type Book struct {
	// タイトル
	Title string `json:"title" xml:"title" form:"title" query:"title"`
	// 発行年月日
	PublishDate string `json:"publish_date" xml:"publish_date" form:"publish_date" query:"publish_date"`
	// 価格
	Price int `json:"price" xml:"price" form:"price" query:"price"`
}
