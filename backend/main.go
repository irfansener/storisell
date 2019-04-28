package main

import (
	"fmt"
	"net/http"
	"net/url"
	"strings"

	"github.com/gin-gonic/gin"

	"github.com/PuerkitoBio/goquery"
)

type Product struct {
	Title  string   `json:"title"`
	Price  string   `json:"price"`
	Images []string `json:"images"`
}

func main() {
	r := gin.Default()
	r.POST("/", func(c *gin.Context) {
		url := c.PostForm("url")

		product, err := checkHost(url)
		if err != "" {
			c.JSON(200, gin.H{
				"err": err,
			})
		} else {
			c.JSON(200, gin.H{
				"response": product,
			})
		}
	})
	r.Run(":8080")
}

func checkHost(ur string) (Product, string) {
	u, err := url.Parse(ur)

	if err != nil {
		return Product{}, "Parsing Error"
	}

	if u.Host == "www.shopier.com" {
		product, err := parseShopier(ur)
		return product, err
	} else if u.Host == "www.trendyol.com" || u.Host == "ty.gl" {
		product, err := parseTrendyol(ur)
		return product, err
	} else if u.Host == "m.trendyol.com" {
		ur = strings.Replace(ur, "m", "www", 1)
		product, err := parseTrendyol(ur)
		return product, err
	} else if u.Host == "iyzi.link" {
		product, err := praseIyziLink(ur)
		return product, err
	}
	return Product{}, ""
}

func parseShopier(url string) (Product, string) {
	// Request the HTML page.
	res, err := http.Get(url)
	if err != nil {
		return Product{}, err.Error()
	}
	defer res.Body.Close()
	if res.StatusCode != 200 {
		return Product{}, "Errorr"
	}

	// Load the HTML document
	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		return Product{}, err.Error()
	}
	var product Product

	product.Title = doc.Find(".product-info__title").Text()
	product.Price = doc.Find(".product-info__price").Text()

	doc.Find(".product__image").Each(func(i int, s *goquery.Selection) {
		val, exist := s.Attr("srcset")
		if exist != false {
			fmt.Println()
			product.Images = append(product.Images, strings.Split(val, " ")[0])
		}
	})
	fmt.Println(product)

	return product, ""
}

func parseTrendyol(url string) (Product, string) {
	// Request the HTML page.
	res, err := http.Get(url)
	if err != nil {
		return Product{}, err.Error()
	}
	defer res.Body.Close()
	if res.StatusCode != 200 {
		return Product{}, "Errorr"
	}

	// Load the HTML document
	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		return Product{}, err.Error()
	}
	var product Product

	product.Title = doc.Find(".pr-in-br a").Text()
	product.Price = doc.Find(".prc-slg").Text()

	val, exist := doc.Find(".ph-gl-img").Attr("src")

	if exist != false {
		product.Images = append(product.Images, val)
		secondImage := strings.Replace(val, "_1_org", "_2_org", 1)
		product.Images = append(product.Images, secondImage)
	}

	fmt.Println(product)

	return product, ""
}

func praseIyziLink(url string) (Product, string) {
	// Request the HTML page.
	res, err := http.Get(url)
	if err != nil {
		return Product{}, err.Error()
	}
	defer res.Body.Close()
	if res.StatusCode != 200 {
		return Product{}, "Errorr"
	}

	// Load the HTML document
	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		return Product{}, err.Error()
	}
	var product Product
	price := doc.Find(".price").Text()
	product.Title = doc.Find(".product-detail h2").Text()
	product.Price = strings.Split(price, " ")[0] + " "

	val, exist := doc.Find(".product-image").Attr("style")
	firstParse := strings.Split(val, "url(")[1]
	secondParse := strings.Split(firstParse, ");")[0]
	if exist != false {
		product.Images = append(product.Images, secondParse)
	}

	fmt.Println(product)

	return product, ""
}
