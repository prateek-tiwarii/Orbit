package main

import (
	"backend/config"
	"backend/routes"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {

	config.LoadEnv()
	// Create a new Fiber app
	app := fiber.New()

	routes.AuthRoutes(app)

	app.Use(logger.New())

	app.Get("/health", func(c *fiber.Ctx) error {
		return c.Status(200).JSON(fiber.Map{
			"status":  "ok",
			"message": "Server is running!",
		})
	})

	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Welcome to Go Fiber API!",
			"version": "1.0.0",
		})
	})

	log.Println("🚀 Server starting on http://localhost:3000")
	log.Fatal(app.Listen(":3000"))
}
