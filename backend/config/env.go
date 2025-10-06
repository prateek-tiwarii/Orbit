package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

func LoadEnv() {
	err := godotenv.Load()

	if err != nil {
		fmt.Println("No .env file!!")
	} else {
		fmt.Println("Env Loaded")
		fmt.Printf("%s Client id\n\n---------\n", os.Getenv("CLIENT_ID"))
		fmt.Printf("%s CLIENT_SECRET\n\n---------\n", os.Getenv("CLIENT_SECRET"))
		fmt.Printf("%s Client id\n\n---------\n", os.Getenv("REDIRECT_URL"))
	}
}
