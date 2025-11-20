package cmd

import (
	"fmt"
	"math/rand/v2"

	"github.com/spf13/cobra"
)

func init() {
	RootCmd.AddCommand(rollCmd)
}

// rollCmd represents the roll command
var rollCmd = &cobra.Command{
	Use:   "roll",
	Short: "Roll some dice",
	Long:  "Roll some dice",
	Run: func(cmd *cobra.Command, args []string) {
		one := rand.IntN(6) + 1
		two := rand.IntN(6) + 1
		fmt.Printf("[%d] [%d]\n", one, two)
	},
}
