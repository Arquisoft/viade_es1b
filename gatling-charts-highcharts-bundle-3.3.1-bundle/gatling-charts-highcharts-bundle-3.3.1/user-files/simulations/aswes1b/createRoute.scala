package aswes1b

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class createRoute extends Simulation {

	val httpProtocol = http
		.baseUrl("http://localhost:3000")
		.inferHtmlResources()
		.acceptHeader("image/webp,*/*")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3")
		.userAgentHeader("Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:75.0) Gecko/20100101 Firefox/75.0")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_1 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate")

	val headers_6 = Map("Accept-Encoding" -> "gzip, deflate")

	val headers_8 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate",
		"X-Requested-With" -> "XMLHttpRequest")

	val headers_11 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_13 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Origin" -> "https://solid.community",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_48 = Map(
		"Accept" -> "*/*",
		"Access-Control-Request-Headers" -> "authorization,content-type,link",
		"Access-Control-Request-Method" -> "PUT",
		"Origin" -> "http://localhost:3000")

	val headers_49 = Map(
		"Accept" -> "*/*",
		"Origin" -> "http://localhost:3000",
		"authorization" -> "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiI2ODlkN2E5ZThmMjQ3NjcwNGUyMjgzYjhlYWU0ODg5MiIsImF1ZCI6Imh0dHBzOi8vYXN3ZXMxYi5zb2xpZC5jb21tdW5pdHkiLCJleHAiOjE1ODg1MzM1NjAsImlhdCI6MTU4ODUyOTk2MCwiaWRfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SW0wMmFHUnJTblI1UVVwTkluMC5leUpwYzNNaU9pSm9kSFJ3Y3pvdkwzTnZiR2xrTG1OdmJXMTFibWwwZVNJc0luTjFZaUk2SW1oMGRIQnpPaTh2WVhOM1pYTXhZaTV6YjJ4cFpDNWpiMjF0ZFc1cGRIa3ZjSEp2Wm1sc1pTOWpZWEprSTIxbElpd2lZWFZrSWpvaU5qZzVaRGRoT1dVNFpqSTBOelkzTURSbE1qSTRNMkk0WldGbE5EZzRPVElpTENKbGVIQWlPakUxT0RrM016azFNemdzSW1saGRDSTZNVFU0T0RVeU9Ua3pPQ3dpYW5ScElqb2laVGc1TlRSaVkySTBPRGt5T1RVNFlpSXNJbTV2Ym1ObElqb2lSek14Ym05d2VUTTBUbVpmVjE4d2QzWnVhbmR5WkhST0xWQjJTRmRwVGxkUmFtVk1USFZuVFZSMVZTSXNJbUY2Y0NJNklqWTRPV1EzWVRsbE9HWXlORGMyTnpBMFpUSXlPRE5pT0dWaFpUUTRPRGt5SWl3aVkyNW1JanA3SW1wM2F5STZleUpoYkdjaU9pSlNVekkxTmlJc0ltVWlPaUpCVVVGQ0lpd2laWGgwSWpwMGNuVmxMQ0pyWlhsZmIzQnpJanBiSW5abGNtbG1lU0pkTENKcmRIa2lPaUpTVTBFaUxDSnVJam9pZEZONk16TnlZalZhUm5rNWNHcHhOV2x2ZW5CMloydFpla0ZsUWt4ZlVqWmFiRVZCUTFWNGRUWmthV2RIWjJ0RlVtNVVRVlpTWVZZdGNrTTFlVFJEUmt4RlQzQjZUVE56VW1KeFh6RnFNV05yY0ZOTWVEUkxPSGd4ZVdkMU5VeEJaalJCVW5CbmJFdGxlbDlNYlU5eE4wRm9kWFIwYVhkRlR6UjJkRE5uY2xCNk5EQllTa2xPTTNSalJVTndhWEJDWWxKaFYzSlFOek5yUTBKMVVqZzBjVk5IVVRkbE1VZHFNME5JVkd0WFdGQlZla2hyVVZVdFpFa3RVVk5GYW1oM2J6WTBiVGRVWTBNM1FXZERNM1JOZFZWdmNrNU5hVXBPZFVaS1YzVXdhVmxQTVVkeFdXSldlSGxvV2sxbFJ5MHRXRGRvV0d4eU4wVnlPVlJrUlZaU1NsbFNia3BuUW1jeU1GUXhhalJQZW1GNWVHMDRlREpyU21jeGVrSjFZV2hUYzNGbk9IRkZVMGhMYmpaQk1XOXFTM1JOTkdkNk1VRkZUbTVoVFRCeE4zbDVVR3BYVkZwc2ExRjNRWEJzYm1WdVlVazNiSFJSSW4xOUxDSmhkRjlvWVhOb0lqb2lkVVpoT0RCTGJFOUZVVlJoUVVWcGRsTXlXV2RxUVNKOS5CRVhsV3JPQ0RONGxWMUo2enRkMGw5Q1kwQ2JNVm9leU00LTNvRlVybmR5Q2ZiRTlfZW9kUHktRjNXQUpMU2lXYlBsWGdGck5nYXB4UTlNYXo0dmJzX2V5RFBEMFhBSnI0cDNrdC1zakliNTZnRjFKRE9Bbi1zNW55RzgyZDRJQTBscEp2a1NZdzhWcmxJclpfVEJrc0lWSEpsLVkzRUp3M3hVN21UY3hOSXFwXzF0ZUJVcDU0UlZxRkdMckZEUEpONS1zcFpiVFlaWHZXNk5lYmw3aTNXX2FKcEFKZ1VNYXQ0d3I1STNxT2dPY0xDZ1lhV1hfaldBdFNLaGNhbXVta3BZRk92QXJOT3ZjNDdOdlQwejVDM3Q0T1RSTktkUGZLeThTSWIwb1dEU3l3SlhLZjEtdkpCVFVoZGZBaEVBVjZYeVdlOWl1Zlg3UjF6N0p1Tkh0TlEiLCJ0b2tlbl90eXBlIjoicG9wIn0.a7BaqA2hRFzLZqNTvi1J4vV21KOeTSlJ58WfdnM50bMOo2Rhh0cPtHB4NALzonCdabGNEEl2j3U2VhiueJrPkykR9HhWKJ_DU9L3oV6uCrz_cMo9O5JiAqQt7c36XrzgT_0Tlwy1EyT84Dt2C3I0GBC-wOieGOIlHtEM4aTkwsjC7bmctGqGLhdPItCWOyC0irwXId0lefp2g5bhNnuw4B1C6z5Jg6tAugSMGFibY9jJW1LvL-grm_aQac925AxTZB6nsvrz8X5dKFqDhJ2XJC5XssWRE_PSI3tiAQbbIVkCGO7CC8ZjvIOVe0wcL790huzrYf8bnQ2glxTZTk4vyQ")

	val headers_50 = Map(
		"Accept" -> "*/*",
		"Content-Type" -> "image/png",
		"Origin" -> "http://localhost:3000",
		"authorization" -> "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiI2ODlkN2E5ZThmMjQ3NjcwNGUyMjgzYjhlYWU0ODg5MiIsImF1ZCI6Imh0dHBzOi8vYXN3ZXMxYi5zb2xpZC5jb21tdW5pdHkiLCJleHAiOjE1ODg1MzM1NjAsImlhdCI6MTU4ODUyOTk2MCwiaWRfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SW0wMmFHUnJTblI1UVVwTkluMC5leUpwYzNNaU9pSm9kSFJ3Y3pvdkwzTnZiR2xrTG1OdmJXMTFibWwwZVNJc0luTjFZaUk2SW1oMGRIQnpPaTh2WVhOM1pYTXhZaTV6YjJ4cFpDNWpiMjF0ZFc1cGRIa3ZjSEp2Wm1sc1pTOWpZWEprSTIxbElpd2lZWFZrSWpvaU5qZzVaRGRoT1dVNFpqSTBOelkzTURSbE1qSTRNMkk0WldGbE5EZzRPVElpTENKbGVIQWlPakUxT0RrM016azFNemdzSW1saGRDSTZNVFU0T0RVeU9Ua3pPQ3dpYW5ScElqb2laVGc1TlRSaVkySTBPRGt5T1RVNFlpSXNJbTV2Ym1ObElqb2lSek14Ym05d2VUTTBUbVpmVjE4d2QzWnVhbmR5WkhST0xWQjJTRmRwVGxkUmFtVk1USFZuVFZSMVZTSXNJbUY2Y0NJNklqWTRPV1EzWVRsbE9HWXlORGMyTnpBMFpUSXlPRE5pT0dWaFpUUTRPRGt5SWl3aVkyNW1JanA3SW1wM2F5STZleUpoYkdjaU9pSlNVekkxTmlJc0ltVWlPaUpCVVVGQ0lpd2laWGgwSWpwMGNuVmxMQ0pyWlhsZmIzQnpJanBiSW5abGNtbG1lU0pkTENKcmRIa2lPaUpTVTBFaUxDSnVJam9pZEZONk16TnlZalZhUm5rNWNHcHhOV2x2ZW5CMloydFpla0ZsUWt4ZlVqWmFiRVZCUTFWNGRUWmthV2RIWjJ0RlVtNVVRVlpTWVZZdGNrTTFlVFJEUmt4RlQzQjZUVE56VW1KeFh6RnFNV05yY0ZOTWVEUkxPSGd4ZVdkMU5VeEJaalJCVW5CbmJFdGxlbDlNYlU5eE4wRm9kWFIwYVhkRlR6UjJkRE5uY2xCNk5EQllTa2xPTTNSalJVTndhWEJDWWxKaFYzSlFOek5yUTBKMVVqZzBjVk5IVVRkbE1VZHFNME5JVkd0WFdGQlZla2hyVVZVdFpFa3RVVk5GYW1oM2J6WTBiVGRVWTBNM1FXZERNM1JOZFZWdmNrNU5hVXBPZFVaS1YzVXdhVmxQTVVkeFdXSldlSGxvV2sxbFJ5MHRXRGRvV0d4eU4wVnlPVlJrUlZaU1NsbFNia3BuUW1jeU1GUXhhalJQZW1GNWVHMDRlREpyU21jeGVrSjFZV2hUYzNGbk9IRkZVMGhMYmpaQk1XOXFTM1JOTkdkNk1VRkZUbTVoVFRCeE4zbDVVR3BYVkZwc2ExRjNRWEJzYm1WdVlVazNiSFJSSW4xOUxDSmhkRjlvWVhOb0lqb2lkVVpoT0RCTGJFOUZVVlJoUVVWcGRsTXlXV2RxUVNKOS5CRVhsV3JPQ0RONGxWMUo2enRkMGw5Q1kwQ2JNVm9leU00LTNvRlVybmR5Q2ZiRTlfZW9kUHktRjNXQUpMU2lXYlBsWGdGck5nYXB4UTlNYXo0dmJzX2V5RFBEMFhBSnI0cDNrdC1zakliNTZnRjFKRE9Bbi1zNW55RzgyZDRJQTBscEp2a1NZdzhWcmxJclpfVEJrc0lWSEpsLVkzRUp3M3hVN21UY3hOSXFwXzF0ZUJVcDU0UlZxRkdMckZEUEpONS1zcFpiVFlaWHZXNk5lYmw3aTNXX2FKcEFKZ1VNYXQ0d3I1STNxT2dPY0xDZ1lhV1hfaldBdFNLaGNhbXVta3BZRk92QXJOT3ZjNDdOdlQwejVDM3Q0T1RSTktkUGZLeThTSWIwb1dEU3l3SlhLZjEtdkpCVFVoZGZBaEVBVjZYeVdlOWl1Zlg3UjF6N0p1Tkh0TlEiLCJ0b2tlbl90eXBlIjoicG9wIn0.a7BaqA2hRFzLZqNTvi1J4vV21KOeTSlJ58WfdnM50bMOo2Rhh0cPtHB4NALzonCdabGNEEl2j3U2VhiueJrPkykR9HhWKJ_DU9L3oV6uCrz_cMo9O5JiAqQt7c36XrzgT_0Tlwy1EyT84Dt2C3I0GBC-wOieGOIlHtEM4aTkwsjC7bmctGqGLhdPItCWOyC0irwXId0lefp2g5bhNnuw4B1C6z5Jg6tAugSMGFibY9jJW1LvL-grm_aQac925AxTZB6nsvrz8X5dKFqDhJ2XJC5XssWRE_PSI3tiAQbbIVkCGO7CC8ZjvIOVe0wcL790huzrYf8bnQ2glxTZTk4vyQ",
		"link" -> """<http://www.w3.org/ns/ldp#Resource>; rel="type"""")

	val headers_51 = Map(
		"Accept" -> "*/*",
		"Content-Type" -> "application/json",
		"Origin" -> "http://localhost:3000",
		"authorization" -> "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiI2ODlkN2E5ZThmMjQ3NjcwNGUyMjgzYjhlYWU0ODg5MiIsImF1ZCI6Imh0dHBzOi8vYXN3ZXMxYi5zb2xpZC5jb21tdW5pdHkiLCJleHAiOjE1ODg1MzM1NjEsImlhdCI6MTU4ODUyOTk2MSwiaWRfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SW0wMmFHUnJTblI1UVVwTkluMC5leUpwYzNNaU9pSm9kSFJ3Y3pvdkwzTnZiR2xrTG1OdmJXMTFibWwwZVNJc0luTjFZaUk2SW1oMGRIQnpPaTh2WVhOM1pYTXhZaTV6YjJ4cFpDNWpiMjF0ZFc1cGRIa3ZjSEp2Wm1sc1pTOWpZWEprSTIxbElpd2lZWFZrSWpvaU5qZzVaRGRoT1dVNFpqSTBOelkzTURSbE1qSTRNMkk0WldGbE5EZzRPVElpTENKbGVIQWlPakUxT0RrM016azFNemdzSW1saGRDSTZNVFU0T0RVeU9Ua3pPQ3dpYW5ScElqb2laVGc1TlRSaVkySTBPRGt5T1RVNFlpSXNJbTV2Ym1ObElqb2lSek14Ym05d2VUTTBUbVpmVjE4d2QzWnVhbmR5WkhST0xWQjJTRmRwVGxkUmFtVk1USFZuVFZSMVZTSXNJbUY2Y0NJNklqWTRPV1EzWVRsbE9HWXlORGMyTnpBMFpUSXlPRE5pT0dWaFpUUTRPRGt5SWl3aVkyNW1JanA3SW1wM2F5STZleUpoYkdjaU9pSlNVekkxTmlJc0ltVWlPaUpCVVVGQ0lpd2laWGgwSWpwMGNuVmxMQ0pyWlhsZmIzQnpJanBiSW5abGNtbG1lU0pkTENKcmRIa2lPaUpTVTBFaUxDSnVJam9pZEZONk16TnlZalZhUm5rNWNHcHhOV2x2ZW5CMloydFpla0ZsUWt4ZlVqWmFiRVZCUTFWNGRUWmthV2RIWjJ0RlVtNVVRVlpTWVZZdGNrTTFlVFJEUmt4RlQzQjZUVE56VW1KeFh6RnFNV05yY0ZOTWVEUkxPSGd4ZVdkMU5VeEJaalJCVW5CbmJFdGxlbDlNYlU5eE4wRm9kWFIwYVhkRlR6UjJkRE5uY2xCNk5EQllTa2xPTTNSalJVTndhWEJDWWxKaFYzSlFOek5yUTBKMVVqZzBjVk5IVVRkbE1VZHFNME5JVkd0WFdGQlZla2hyVVZVdFpFa3RVVk5GYW1oM2J6WTBiVGRVWTBNM1FXZERNM1JOZFZWdmNrNU5hVXBPZFVaS1YzVXdhVmxQTVVkeFdXSldlSGxvV2sxbFJ5MHRXRGRvV0d4eU4wVnlPVlJrUlZaU1NsbFNia3BuUW1jeU1GUXhhalJQZW1GNWVHMDRlREpyU21jeGVrSjFZV2hUYzNGbk9IRkZVMGhMYmpaQk1XOXFTM1JOTkdkNk1VRkZUbTVoVFRCeE4zbDVVR3BYVkZwc2ExRjNRWEJzYm1WdVlVazNiSFJSSW4xOUxDSmhkRjlvWVhOb0lqb2lkVVpoT0RCTGJFOUZVVlJoUVVWcGRsTXlXV2RxUVNKOS5CRVhsV3JPQ0RONGxWMUo2enRkMGw5Q1kwQ2JNVm9leU00LTNvRlVybmR5Q2ZiRTlfZW9kUHktRjNXQUpMU2lXYlBsWGdGck5nYXB4UTlNYXo0dmJzX2V5RFBEMFhBSnI0cDNrdC1zakliNTZnRjFKRE9Bbi1zNW55RzgyZDRJQTBscEp2a1NZdzhWcmxJclpfVEJrc0lWSEpsLVkzRUp3M3hVN21UY3hOSXFwXzF0ZUJVcDU0UlZxRkdMckZEUEpONS1zcFpiVFlaWHZXNk5lYmw3aTNXX2FKcEFKZ1VNYXQ0d3I1STNxT2dPY0xDZ1lhV1hfaldBdFNLaGNhbXVta3BZRk92QXJOT3ZjNDdOdlQwejVDM3Q0T1RSTktkUGZLeThTSWIwb1dEU3l3SlhLZjEtdkpCVFVoZGZBaEVBVjZYeVdlOWl1Zlg3UjF6N0p1Tkh0TlEiLCJ0b2tlbl90eXBlIjoicG9wIn0.IgdD6E8teXFdhhF3HB2IQhhox7A7ke9EfWtlUF8ssbnsnONgw4m04tWKIUvwC4zaVZ68PNzrVRPtcYLCPiTBbqMY-zEWRTjLjaKKUaDcgAh6rJZQhTz9KP2dJYDo0LZ-2ZXIuCxwjc8KBpriYs64s4zU8Dwr1SNktnEGNzjIRrL1asrU-VeOfNJpTeksTYUmwAnpiya3NsvH53YzQJOcf0sPiVYhR2Y9USnRr0K2ytvCm-wL30nGnAXRyft05v12-B_gnTcap72nSyCUpu2T9yc3pDyTnGO78Ff8oTE5FQ8n5wowcLfv-l2aMEUaNOrotiKCkE0WEAcXA15vGcQovQ",
		"link" -> "undefined",
		"slug" -> "1588529961_loadTest.json")

	val headers_52 = Map(
		"Accept" -> "*/*",
		"Origin" -> "http://localhost:3000")

    val uri1 = "https://c.tile.openstreetmap.org/15"
    val uri3 = "https://b.tile.openstreetmap.org/15"
    val uri4 = "https://a.tile.openstreetmap.org/15"
    val uri5 = "https://solid.community"
    val uri6 = "https://solid.github.io/solid-auth-client/dist/popup.html"
    val uri7 = "https://aswes1b.solid.community/viade"

	val scn = scenario("createRoute")
		.exec(http("request_0")
			.get("/")
			.headers(headers_0)
			.resources(http("request_1")
			.get("/viade_es1b/static/js/0.chunk.js.map")
			.headers(headers_1),
            http("request_2")
			.get("/viade_es1b/static/js/bundle.js")
			.headers(headers_1),
            http("request_3")
			.get("/viade_es1b/static/js/main.chunk.js")
			.headers(headers_1),
            http("request_4")
			.get("/viade_es1b/static/js/0.chunk.js.map")
			.headers(headers_1),
            http("request_5")
			.get("/viade_es1b/static/js/0.chunk.js")
			.headers(headers_1)))
		.pause(1)
		.exec(http("request_6")
			.get("/img/fondo.jpg")
			.headers(headers_6)
			.resources(http("request_7")
			.get("/img/background-pattern.svg")
			.headers(headers_6),
            http("request_8")
			.get("/locales/en/translation.json")
			.headers(headers_8),
            http("request_9")
			.get("/locales/es/translation.json")
			.headers(headers_8),
            http("request_10")
			.get("/viade_es1b/static/js/0.chunk.js.map")
			.headers(headers_1)))
		.pause(2)
		.exec(http("request_11")
			.get(uri6)
			.headers(headers_11))
		.pause(1)
		.exec(http("request_12")
			.get(uri5 + "/authorize?scope=openid&client_id=689d7a9e8f2476704e2283b8eae48892&response_type=id_token%20token&request=eyJhbGciOiJub25lIn0.eyJyZWRpcmVjdF91cmkiOiJodHRwczovL3NvbGlkLmdpdGh1Yi5pby9zb2xpZC1hdXRoLWNsaWVudC9kaXN0L3BvcHVwLmh0bWwiLCJkaXNwbGF5IjoicGFnZSIsIm5vbmNlIjoiRzMxbm9weTM0TmZfV18wd3ZuandyZHROLVB2SFdpTldRamVMTHVnTVR1VSIsImtleSI6eyJhbGciOiJSUzI1NiIsImUiOiJBUUFCIiwiZXh0Ijp0cnVlLCJrZXlfb3BzIjpbInZlcmlmeSJdLCJrdHkiOiJSU0EiLCJuIjoidFN6MzNyYjVaRnk5cGpxNWlvenB2Z2tZekFlQkxfUjZabEVBQ1V4dTZkaWdHZ2tFUm5UQVZSYVYtckM1eTRDRkxFT3B6TTNzUmJxXzFqMWNrcFNMeDRLOHgxeWd1NUxBZjRBUnBnbEtlel9MbU9xN0FodXR0aXdFTzR2dDNnclB6NDBYSklOM3RjRUNwaXBCYlJhV3JQNzNrQ0J1Ujg0cVNHUTdlMUdqM0NIVGtXWFBVekhrUVUtZEktUVNFamh3bzY0bTdUY0M3QWdDM3RNdVVvck5NaUpOdUZKV3UwaVlPMUdxWWJWeHloWk1lRy0tWDdoWGxyN0VyOVRkRVZSSllSbkpnQmcyMFQxajRPemF5eG04eDJrSmcxekJ1YWhTc3FnOHFFU0hLbjZBMW9qS3RNNGd6MUFFTm5hTTBxN3l5UGpXVFpsa1F3QXBsbmVuYUk3bHRRIn19.&state=AMtd4F1MMJIzN5mVmZK-4wULWK2koud7jVkMQuU2CbI")
			.headers(headers_11))
		.pause(20)
		.exec(http("request_13")
			.post(uri5 + "/login/password")
			.headers(headers_13)
			.formParam("username", "aswes1b")
			.formParam("password", "Viade_es1b")
			.formParam("response_type", "id_token token")
			.formParam("display", "")
			.formParam("scope", "openid")
			.formParam("client_id", "689d7a9e8f2476704e2283b8eae48892")
			.formParam("redirect_uri", "https://solid.github.io/solid-auth-client/dist/popup.html")
			.formParam("state", "AMtd4F1MMJIzN5mVmZK-4wULWK2koud7jVkMQuU2CbI")
			.formParam("nonce", "")
			.formParam("request", "eyJhbGciOiJub25lIn0.eyJyZWRpcmVjdF91cmkiOiJodHRwczovL3NvbGlkLmdpdGh1Yi5pby9zb2xpZC1hdXRoLWNsaWVudC9kaXN0L3BvcHVwLmh0bWwiLCJkaXNwbGF5IjoicGFnZSIsIm5vbmNlIjoiRzMxbm9weTM0TmZfV18wd3ZuandyZHROLVB2SFdpTldRamVMTHVnTVR1VSIsImtleSI6eyJhbGciOiJSUzI1NiIsImUiOiJBUUFCIiwiZXh0Ijp0cnVlLCJrZXlfb3BzIjpbInZlcmlmeSJdLCJrdHkiOiJSU0EiLCJuIjoidFN6MzNyYjVaRnk5cGpxNWlvenB2Z2tZekFlQkxfUjZabEVBQ1V4dTZkaWdHZ2tFUm5UQVZSYVYtckM1eTRDRkxFT3B6TTNzUmJxXzFqMWNrcFNMeDRLOHgxeWd1NUxBZjRBUnBnbEtlel9MbU9xN0FodXR0aXdFTzR2dDNnclB6NDBYSklOM3RjRUNwaXBCYlJhV3JQNzNrQ0J1Ujg0cVNHUTdlMUdqM0NIVGtXWFBVekhrUVUtZEktUVNFamh3bzY0bTdUY0M3QWdDM3RNdVVvck5NaUpOdUZKV3UwaVlPMUdxWWJWeHloWk1lRy0tWDdoWGxyN0VyOVRkRVZSSllSbkpnQmcyMFQxajRPemF5eG04eDJrSmcxekJ1YWhTc3FnOHFFU0hLbjZBMW9qS3RNNGd6MUFFTm5hTTBxN3l5UGpXVFpsa1F3QXBsbmVuYUk3bHRRIn19.")
			.resources(http("request_14")
			.get("/viade_es1b/img/icon/map.svg")
			.headers(headers_6),
            http("request_15")
			.get("/viade_es1b/img/icon/newRoute.svg")
			.headers(headers_6),
            http("request_16")
			.get("/viade_es1b/img/icon/friendship.svg")
			.headers(headers_6),
            http("request_17")
			.get("/viade_es1b/img/icon/empty-profile.svg")
			.headers(headers_6),
            http("request_18")
			.get("/viade_es1b/img/icon/notification.svg")
			.headers(headers_6),
            http("request_19")
			.get("/viade_es1b/img/icon/subject.svg")
			.headers(headers_6),
            http("request_20")
			.get("/viade_es1b/img/icon/logout.svg")
			.headers(headers_6),
            http("request_21")
			.get("/img/fondo2.jpg")
			.headers(headers_6)))
		.pause(3)
		.exec(http("request_22")
			.get("/viade_es1b/img/icon/photo.svg")
			.headers(headers_6)
			.resources(http("request_23")
			.get("/viade_es1b/img/icon/videocamera.svg")
			.headers(headers_6),
            http("request_24")
			.get("/viade_es1b/img/icon/upload.svg")
			.headers(headers_6),
            http("request_25")
			.get("/viade_es1b/img/icon/cross.svg")
			.headers(headers_6),
            http("request_26")
			.get("/img/fondo2.jpg")
			.headers(headers_6),
            http("request_27")
			.get(uri4 + "/15851/11995.png"),
            http("request_28")
			.get(uri4 + "/15850/11996.png"),
            http("request_29")
			.get(uri3 + "/15851/11996.png"),
            http("request_30")
			.get(uri3 + "/15852/11995.png"),
            http("request_31")
			.get(uri1 + "/15853/11995.png"),
            http("request_32")
			.get(uri1 + "/15852/11996.png"),
            http("request_33")
			.get(uri4 + "/15852/11994.png"),
            http("request_34")
			.get(uri3 + "/15853/11994.png"),
            http("request_35")
			.get(uri4 + "/15849/11994.png"),
            http("request_36")
			.get(uri3 + "/15849/11995.png"),
            http("request_37")
			.get(uri1 + "/15851/11997.png"),
            http("request_38")
			.get(uri4 + "/15852/11997.png"),
            http("request_39")
			.get(uri1 + "/15849/11996.png"),
            http("request_40")
			.get(uri1 + "/15851/11994.png"),
            http("request_41")
			.get(uri1 + "/15850/11995.png"),
            http("request_42")
			.get(uri4 + "/15849/11997.png"),
            http("request_43")
			.get(uri4 + "/15853/11996.png"),
            http("request_44")
			.get(uri3 + "/15850/11997.png"),
            http("request_45")
			.get(uri3 + "/15853/11997.png"),
            http("request_46")
			.get(uri3 + "/15850/11994.png")))
		.pause(9)
		.exec(http("request_47")
			.get("/viade_es1b/static/js/main.chunk.js.map")
			.headers(headers_1)
			.resources(http("request_48")
			.options(uri7 + "/resources/portada1.png")
			.headers(headers_48),
            http("request_49")
			.head(uri7 + "/routes/")
			.headers(headers_49),
            http("request_50")
			.put(uri7 + "/resources/portada1.png")
			.headers(headers_50)
			.body(RawFileBody("aswes1b/createroute/0050_request.png")),
            http("request_51")
			.post(uri7 + "/routes/")
			.headers(headers_51)
			.body(RawFileBody("aswes1b/createroute/0051_request.json"))))
		.pause(3)
		.exec(http("request_52")
			.get(uri5 + "/logout")
			.headers(headers_52)
			.resources(http("request_53")
			.get("/.well-known/solid/logout")
			.headers(headers_1),
            http("request_54")
			.get("/img/fondo.jpg")
			.headers(headers_6),
            http("request_55")
			.get("/img/background-pattern.svg")
			.headers(headers_6)))

	setUp(scn.inject(rampUsers(1) during(60 seconds))).protocols(httpProtocol)
}
