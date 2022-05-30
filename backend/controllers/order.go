package controllers

import (
	"log"
	"net/http"
	"server/db"
	"server/model"

	"github.com/gin-gonic/gin"
)

func FetchOrders(c *gin.Context) {
	var orders []model.Order

	db := db.Connect()
	if db == nil {
		log.Println(db)
	}
	if err := db.Find(&orders).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, orders)
}
