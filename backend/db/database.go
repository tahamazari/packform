package db

import (
	"log"
	"server/model"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var db *gorm.DB
var err error

func Connect() *gorm.DB {
	db, err = gorm.Open(postgres.Open("host=localhost user=postgres password=1234 dbname=packform port=5432 sslmode=disable TimeZone=Asia/Shanghai"), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
		panic("Cannot connect to DB")
	}
	log.Println("Connected to Database...")
	return db
}

func Migrate() {
	db.AutoMigrate(&model.Order{})
	log.Println("Database Migration Completed...")
}
