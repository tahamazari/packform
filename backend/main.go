package main

import (
	"server/db"

	"server/controllers"

	"github.com/gin-gonic/gin"
)

func main() {
	db.Connect()
	db.Migrate()

	r := gin.Default()
	r.GET("/orders", func(c *gin.Context) {
		controllers.FetchOrders(c)
	})
	r.Run(":4000")
}
