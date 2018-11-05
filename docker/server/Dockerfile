FROM "golang"

WORKDIR /go/src
RUN mkdir app

WORKDIR /go/src/app

RUN git clone https://github.com/soichiro0311/WebApp
RUN go get github.com/go-sql-driver/mysql
RUN go get github.com/labstack/echo
RUN go get bitbucket.org/liamstask/goose/cmd/goose

# マイグレーションを行うと同時にサーバを起動
CMD cd /go/src/app/WebApp/goose/ && goose up && cd /go/src/app/WebApp/web-server/main && go run AppMain.go
