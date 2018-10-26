
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
CREATE TABLE IF NOT EXISTS `book` (
    `title` VARCHAR(255) NOT NULL COMMENT 'タイトル',
    `publish_date` VARCHAR(255) NOT NULL COMMENT '出版日',
    `price` INT NOT NULL COMMENT '価格',
    PRIMARY KEY (`title`)
) ENGINE = InnoDB;

INSERT INTO `book` (title, publish_date, price)
  VALUES ("Sample Book", "2018/10/2", 2000);

INSERT INTO `book` (title, publish_date, price)
  VALUES ("Sample Java Book", "2017/2/23", 8900);

INSERT INTO `book` (title, publish_date, price)
  VALUES ("Training Book", "2012/2/11", 4500);

INSERT INTO `book` (title, publish_date, price)
  VALUES ("Music Book", "2013/9/24", 500);

INSERT INTO `book` (title, publish_date, price)
  VALUES ("Cooking Book", "2015/5/21", 6700);

INSERT INTO `book` (title, publish_date, price)
  VALUES ("Golang Book", "2016/1/20", 1000);

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back
DROP TABLE `book`;
