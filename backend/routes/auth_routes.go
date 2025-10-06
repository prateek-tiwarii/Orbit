package routes

import (
	"backend/handlers"

	"github.com/gofiber/fiber/v2"
)

func AuthRoutes(app *fiber.App) {
	app.Get("/auth/google/login", handlers.GoogleLogin)
	app.Get("/auth/google/callback", handlers.GoogleCallback)
}
