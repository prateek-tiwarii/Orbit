package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"os"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

var google_conf = &oauth2.Config{
	ClientID:     os.Getenv("CLIENT_ID"),
	ClientSecret: os.Getenv("CLIENT_SECRET"),
	RedirectURL:  os.Getenv("REDIRECT_URL"),
	Scopes: []string{
		"https://www.googleapis.com/auth/userinfo.profile",
		"https://www.googleapis.com/auth/userinfo.email",
	},
	Endpoint: google.Endpoint,
}

func GoogleLogin(c *fiber.Ctx) error {
	fmt.Print("GOOGLE CALL")
	url := google_conf.AuthCodeURL("state-token")
	return c.Redirect(url)
}

func GoogleCallback(c *fiber.Ctx) error {
	code := c.Query("code")
	token, err := google_conf.Exchange(context.Background(), code)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
	}

	client := google_conf.Client(context.Background(), token)
	resp, err := client.Get("https://www.googleapis.com/oauth2/v2/userinfo")
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).SendString("Failed to fetch user info")
	}
	defer resp.Body.Close()

	var user map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&user)
	return c.JSON(user)
}
