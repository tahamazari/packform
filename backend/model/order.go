package model

import "time"

type Order struct {
	ID              uint `gorm:"primaryKey"`
	OrderDate       time.Time
	OrderName       string
	CustomerCompany string
	CustomerName    string
	DeliveredAmount float64
	TotalAmount     float64
}
