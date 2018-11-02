FROM "golang"

WORKDIR /go/src
RUN mkdir app

WORKDIR /go/src/app

RUN git clone https://github.com/soichiro0311/WebApp
RUN go get github.com/go-sql-driver/mysql
RUN go get github.com/labstack/echo

WORKDIR /go/src/app/WebApp/goose
RUN go get bitbucket.org/liamstask/goose/cmd/goose
RUN goose up

WORKDIR /go/src/app/WebApp/web-server/main
CMD go run AppMain.go
