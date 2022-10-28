// @ts-nocheck
export default [
  {
    "openapi": "3.0.1",
    "info": {
      "title": "Hotel Content API",
      "description": "# APItude Hotel Content API\n\nHotel Content API has been designed to retrieve **all the details** of the hotels available in our [Hotel Booking API](/documentation/hotels/booking-api/api-reference/). \n\nHotel Content API contains several methods that allow you to obtain the details of the hotels as well as list of destinations, countries and the master types that complement the hotels informatoin (like room type descriptions, accommodation type descriptions, categories descriptions...).\n\nNote that the Languages operation is connected to all the operations in which a description is returned, since we return the language code in which that description has been returned.\n",
      "termsOfService": "https://developer.hotelbeds.com/api-terms-use",
      "contact": {
        "name": "Apitude Support",
        "url": "https://developer.hotelbeds.com",
        "email": "apitude@hotelbeds.com"
      },
      "license": {
        "name": "Apache 2.0",
        "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
      },
      "version": "1.0"
    },
    "externalDocs": {
      "description": "Find out more about APItude",
      "url": "https://developer.hotelbeds.com"
    },
    "servers": [
      {
        "url": "https://api.test.hotelbeds.com/hotel-content-api/{version}",
        "variables": {
          "version": {
            "default": "1.0",
            "description": "Specification version"
          }
        }
      }
    ],
    "tags": [
      {
        "name": "Hotels",
        "description": "Returns information of hotels currently existing hotels in Hotelbeds portfolio."
      },
      {
        "name": "Locations",
        "description": "Returns information of the different levels on our destination tree."
      },
      {
        "name": "Types",
        "description": "Returns information of the the different types of elements comprised in the rest of the API responses."
      }
    ],
    "paths": {
      "/hotels": {
        "get": {
          "tags": [
            "Hotels"
          ],
          "summary": "Hotels",
          "description": "Returns the list of currently existing hotels in Hotelbeds portfolio.",
          "operationId": "hotelsUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "name": "destinationCode",
              "in": "query",
              "description": "Filter to limit the results for an specific destination.",
              "required": false,
              "schema": {
                "type": "string",
                "example": "PMI"
              }
            },
            {
              "name": "countryCode",
              "in": "query",
              "description": "Filter to limit the results for an specific country.",
              "required": false,
              "schema": {
                "type": "string",
                "example": "US"
              }
            },
            {
              "name": "codes",
              "in": "query",
              "description": "Filter for a specific hotel or list of hotels.",
              "required": false,
              "style": "form",
              "explode": false,
              "schema": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int32"
                }
              }
            },
            {
              "name": "includeHotels",
              "in": "query",
              "description": "Use \"webOnly\" to include in the response hotels sellable only to websites. Use \"notOnSale\" to include in the response hotels without rates on sale. Both values can be combined either  this way:  ?includeHotels=webOnly, notOnSale  or this way:  ?includeHotels=webOnly&includeHotels=notOnSale . By default non of them is included in the response.",
              "required": false,
              "schema": {
                "type": "string",
                "example": "webOnly"
              }
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterPMSRoomCode"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiHotelsRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiHotelsRS"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/400"
            },
            "401": {
              "$ref": "#/components/responses/401"
            },
            "403": {
              "$ref": "#/components/responses/403"
            },
            "500": {
              "$ref": "#/components/responses/500"
            },
            "503": {
              "$ref": "#/components/responses/503"
            }
          }
        }
      },
      "/hotels/{hotelCodes}/details": {
        "get": {
          "tags": [
            "Hotels"
          ],
          "summary": "Hotel details",
          "description": "Returns all the details associated to the Hotel.",
          "operationId": "hotelWithIdDetailsUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "name": "hotelCodes",
              "in": "path",
              "description": "Code or codes of specific hotels from which to get details.",
              "required": true,
              "schema": {
                "type": "string",
                "example": "1067,1070"
              }
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiHotelDetailsRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiHotelDetailsRS"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/400"
            },
            "401": {
              "$ref": "#/components/responses/401"
            },
            "403": {
              "$ref": "#/components/responses/403"
            },
            "500": {
              "$ref": "#/components/responses/500"
            },
            "503": {
              "$ref": "#/components/responses/503"
            }
          }
        }
      },
      "/locations/countries": {
        "get": {
          "tags": [
            "Locations"
          ],
          "summary": "Countries",
          "description": "Returns the list of available countries.\n\nThis is the higher level available in our destination tree. We do not allow search by country, but it's included for organizational reasons (to group destinations) and because the country codes returned are used in other levels of APItude (for example to define the sourceMarket in Availability operation of [Hotel Booking API](/documentation/hotels/booking-api/api-reference/).",
          "operationId": "countriesUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiCountriesRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiCountriesRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/locations/destinations": {
        "get": {
          "tags": [
            "Locations"
          ],
          "summary": "Destinations",
          "description": "Return the list of available destinations, zones and grouping zones. \n\nDestinations are the highest level entities in our destination tree by which availability can be searched. Please note that destination codes are not IATA codes. It is very important to understand that our 'destination' will not always only correspond with a unique city, but usually with the main city and the area surrounding the city. \n\nFor example, the destination code NYC in the US, corresponds with the whole New York Area, so it is not limited to the city of New York, but also covers the surrounding areas, such as New Jersey and The Hamptons. Another example is BCN in Spain, which corresponds with the entire Barcelona Province; so it searches hotels located in the city of Barcelona, but also in other cities within the Province of Barcelona, such us Hospitalet de Llobregat, Terrassa and Sabadell. So when you search for availability using the destination code, you will receive results that may be located far from the main city for which you are actually searching.\n\nIt is very important to check the locations that the search retrieves to avoid booking hotels in a different location than the one requested by your customers.",
          "operationId": "destinationsUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "name": "codes",
              "in": "query",
              "description": "Filter to limit the results for an specific destination or list of destinations.",
              "required": false,
              "style": "form",
              "explode": false,
              "schema": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            {
              "name": "countryCodes",
              "in": "query",
              "description": "Filter for a specific country of list of countries.",
              "required": false,
              "style": "form",
              "explode": false,
              "schema": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiDestinationsRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiDestinationsRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/accommodations": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Accommodations",
          "description": "Returns the list of available accommodation types.",
          "operationId": "accommodationsUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiAccommodationsRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiAccommodationsRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/boards": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Boards",
          "description": "Returns the list of available board types.",
          "operationId": "boardsUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiBoardsRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiBoardsRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/boardgroups": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "BoardGroups",
          "description": "Returns the list of available board groups.",
          "operationId": "boardGroupsUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiBoardGroupsRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiBoardGroupsRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/categories": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Categories",
          "description": "Returns the list of available categories.",
          "operationId": "categoriesUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiCategoriesRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiCategoriesRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/chains": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Chains",
          "description": "Returns the list of available chains. ",
          "operationId": "chainsUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiChainsRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiChainsRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/classifications": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Classifications",
          "description": "Returns the list of available values for the rateClass.",
          "operationId": "classificationsUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiRateClassRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiRateClassRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/currencies": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Currencies",
          "description": "Returns the list of available currencies.",
          "operationId": "currenciesUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiCurrenciesRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiCurrenciesRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/facilities": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Facilities",
          "description": "Returns the list of available facilities.",
          "operationId": "facilitiesUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiFacilitiesRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiFacilitiesRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/facilitygroups": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Facility groups",
          "description": "Returns the list of available facility groups.",
          "operationId": "facilitygroupsUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiFacilityGroupsRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiFacilityGroupsRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/facilitytypologies": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Facility typologies",
          "description": "Returns the list of available facility typologies.Remarks: Since all fields are returned by default, there won't be any field to filter.",
          "operationId": "facilitytypologiesUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiFacilityTypologiesRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiFacilityTypologiesRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/groupcategories": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Group categories",
          "description": "Returns the descriptions of the different category groups.",
          "operationId": "groupcategoriesUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiGroupCategoriesRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiGroupCategoriesRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/imagetypes": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Image types",
          "description": "Returns the descriptions of the different image types.",
          "operationId": "imagetypesUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiImageTypesRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiImageTypesRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/issues": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Hotel Issues",
          "description": "Repair works, facilities closed,...",
          "operationId": "issuesUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiIssuesRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiIssuesRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/languages": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Languages",
          "description": "Returns the list of available languages.\n\nThe Languages operation is connected to all the operations in which a description is returned, since we return the language code in which that description has been returned.",
          "operationId": "languagesUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiLanguagesRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiLanguagesRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/promotions": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Promotions",
          "description": "Returns the list of available promotions.",
          "operationId": "promotionsUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiPromotionsRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiPromotionsRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/ratecommentdetails": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Rate comment details",
          "description": "Returns the descriptions of the rate comments associated with the hotel that the hotelier wants the client to read before confirming the booking with the given date.",
          "operationId": "ratecommentdetailUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "name": "date",
              "in": "query",
              "description": "Comment date",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "code",
              "in": "query",
              "description": "Code (symbol pipe should be escaped with %7C HTML encoding)",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiRateCommentDetailsRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiRateCommentDetailsRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/ratecomments": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Rate comments",
          "description": "Returns the descriptions of the rate comments associated with the hotel that the hotelier wants the client to read before confirming the booking.",
          "operationId": "rateCommentsUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiRateCommentsRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiRateCommentsRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/rooms": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Rooms",
          "description": "Returns the list of available rooms.",
          "operationId": "roomsUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiRoomsRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiRoomsRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/segments": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Segments",
          "description": "Returns the list of available segments. ",
          "operationId": "segmentsUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiSegmentsRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiSegmentsRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/amenities": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Amenities",
          "description": "Returns the list of available amenities. ",
          "operationId": "amenitiesUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiAmenitiesRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiAmenitiesRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      },
      "/types/terminals": {
        "get": {
          "tags": [
            "Types"
          ],
          "summary": "Terminals",
          "description": "List of terminals per country/destination",
          "operationId": "terminalsUsingGET",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterCodes"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFields"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterFrom"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterTo"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterUseSecondaryLanguage"
            },
            {
              "$ref": "#/components/parameters/CommonRequestParameterLastUpdateTime"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiTerminalsRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiTerminalsRS"
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request",
              "content": {}
            },
            "401": {
              "description": "Unauthorized",
              "content": {}
            },
            "402": {
              "description": "Payment Required",
              "content": {}
            },
            "500": {
              "description": "Internal Server Error",
              "content": {}
            },
            "503": {
              "description": "Product Exception/Service Unavailable",
              "content": {}
            }
          }
        }
      }
    },
    "components": {
      "parameters": {
        "CommonRequestHeaderAccept": {
          "name": "Accept",
          "in": "header",
          "description": "Response format, posible values are application/json and application/xml.",
          "required": true,
          "schema": {
            "type": "string",
            "enum": [
              "application/xml",
              "application/json"
            ]
          }
        },
        "CommonRequestHeaderAcceptEncoding": {
          "name": "Accept-Encoding",
          "in": "header",
          "description": "Defines type of encoding used on the data.",
          "required": true,
          "schema": {
            "type": "string",
            "default": "gzip"
          }
        },
        "CommonRequestParameterFields": {
          "name": "fields",
          "in": "query",
          "description": "The list of fields to be received in the response. To retrieve all the fields use â€˜allâ€™. If nothing is specified, all fields are returned. See the complete list of available fields in the response.",
          "required": false,
          "style": "form",
          "explode": false,
          "schema": {
            "type": "array",
            "items": {
              "type": "string",
              "example": "all"
            }
          }
        },
        "CommonRequestParameterCodes": {
          "name": "codes",
          "in": "query",
          "description": "List of codes to filter by.",
          "required": false,
          "style": "form",
          "explode": false,
          "schema": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "CommonRequestParameterLanguage": {
          "name": "language",
          "in": "query",
          "description": "The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.",
          "required": false,
          "schema": {
            "type": "string"
          },
          "example": "CAS"
        },
        "CommonRequestParameterFrom": {
          "name": "from",
          "in": "query",
          "description": "The number of the initial record to receive. If nothing is specified, 1 is the default value.",
          "required": false,
          "schema": {
            "type": "integer",
            "format": "int32",
            "example": 1
          }
        },
        "CommonRequestParameterTo": {
          "name": "to",
          "in": "query",
          "description": "The number of the final record to receive. If nothing is indicated, 100 is the default value.",
          "required": false,
          "schema": {
            "type": "integer",
            "format": "int32",
            "example": 100
          }
        },
        "CommonRequestParameterUseSecondaryLanguage": {
          "name": "useSecondaryLanguage",
          "in": "query",
          "description": "Defines if you want to receive the descriptions in English if the description is not available in the language requested.",
          "required": false,
          "schema": {
            "type": "boolean"
          }
        },
        "CommonRequestParameterLastUpdateTime": {
          "name": "lastUpdateTime",
          "in": "query",
          "description": "Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.",
          "required": false,
          "schema": {
            "type": "string"
          },
          "example": "2020-03-03"
        },
        "CommonRequestParameterPMSRoomCode": {
          "name": "PMSRoomCode",
          "in": "query",
          "description": "Sending this parameter as true in the /hotels operations will only return the hotels which possess at least one PMSRoomCode (useful when mapping against the original property codes).",
          "required": false,
          "schema": {
            "type": "boolean"
          }
        }
      },
      "schemas": {
        "ApiLanguage": {
          "type": "object",
          "description": "Information on a language.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Code of the language.",
              "example": "ENG"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "name": {
              "type": "string",
              "description": "Name of the language on its own language.",
              "example": "English"
            }
          }
        },
        "ApiRateCommentsRS": {
          "type": "object",
          "description": "Response of RateComments operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned rate comments.",
              "format": "int32"
            },
            "rateComments": {
              "type": "array",
              "description": "List of rate comments.",
              "items": {
                "$ref": "#/components/schemas/ApiRateComments"
              }
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned rate comments.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of rate comments matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiHotelPointOfInterest": {
          "type": "object",
          "description": "Information on a point of interest near a hotel.",
          "properties": {
            "distance": {
              "type": "string",
              "description": "Distance in meters to the point of interest.",
              "example": 3000
            },
            "facilityCode": {
              "type": "integer",
              "description": "Code of the point of interest as a facility.",
              "format": "int32"
            },
            "facilityGroupCode": {
              "type": "integer",
              "description": "Group to which the point of interest belongs as a facility.",
              "format": "int32"
            },
            "fee": {
              "type": "boolean",
              "description": "Defines if there is a fee to access the point of interest."
            },
            "order": {
              "type": "integer",
              "description": "Order of the point of interest.",
              "format": "int32"
            },
            "poiName": {
              "type": "string",
              "description": "Name of the point of interest.",
              "example": "Port Aventura"
            }
          }
        },
        "ApiAccommodationsRS": {
          "type": "object",
          "description": "Response of Accommodations operation.",
          "properties": {
            "accommodations": {
              "type": "array",
              "description": "List of accommodations.",
              "items": {
                "$ref": "#/components/schemas/ApiAccommodation"
              }
            },
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned accommodations.",
              "format": "int32"
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned accommodations.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of accommodations matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiHotelFacility": {
          "type": "object",
          "description": "Information on a hotel facility.",
          "properties": {
            "ageFrom": {
              "type": "integer",
              "description": "Minimum age to access the facility.",
              "format": "int32"
            },
            "ageTo": {
              "type": "integer",
              "description": "Maximum age to access the facility.",
              "format": "int32"
            },
            "amount": {
              "type": "number",
              "description": "Amount of the facility fee."
            },
            "applicationType": {
              "type": "string",
              "description": "Application type of the facility fee.",
              "example": "UN"
            },
            "currency": {
              "type": "string",
              "description": "Currency of the facility fee.",
              "example": "EUR"
            },
            "dateFrom": {
              "type": "string",
              "description": "Date from which the facility is available.",
              "example": "2020-06-01T00:00:00.000Z"
            },
            "dateTo": {
              "type": "string",
              "description": "Date until which the installation is available.",
              "example": "2021-06-01T00:00:00.000Z"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "distance": {
              "type": "integer",
              "description": "Distance in meters to the facility.",
              "format": "int32"
            },
            "facilityCode": {
              "type": "integer",
              "description": "Code of the facility.",
              "format": "int32"
            },
            "facilityGroupCode": {
              "type": "integer",
              "description": "Group to which the facility belongs.",
              "format": "int32"
            },
            "facilityName": {
              "type": "string",
              "description": "Name of the facility.",
              "example": "Bar"
            },
            "indFee": {
              "type": "boolean",
              "description": "Defines if the facility has cost or not at the establishment."
            },
            "indLogic": {
              "type": "boolean",
              "description": "Indicates if the facility exists at the hotel. This field will be returned __only__ when the facility is at the hotel."
            },
            "indYesOrNo": {
              "type": "boolean",
              "description": "Indicates in the mandatory facility exists at the hotel or not."
            },
            "number": {
              "type": "integer",
              "description": "Numeric value of the facility.",
              "format": "int32"
            },
            "order": {
              "type": "integer",
              "description": "Order of facility in case there is more than one facility at the hotel.",
              "format": "int32"
            },
            "timeFrom": {
              "type": "string",
              "description": "Time from which the facility is available.",
              "example": "14:00:00"
            },
            "timeTo": {
              "type": "string",
              "description": "Time until which the facility is available.",
              "example": "00:00:00"
            },
            "voucher": {
              "type": "boolean",
              "description": "Indicates if the use of the facility will issue a voucher."
            }
          }
        },
        "ApiHotelRoomStay": {
          "type": "object",
          "description": "Describes one of the departments in which the room is divided.",
          "properties": {
            "description": {
              "type": "string",
              "description": "Description of the type of department.",
              "example": "Bed room"
            },
            "order": {
              "type": "string",
              "description": "Numeric position of the department within the room.",
              "example": 1
            },
            "roomStayFacilities": {
              "type": "array",
              "description": "Describes facilities associated to the department.",
              "items": {
                "$ref": "#/components/schemas/ApiHotelRoomStayFacility"
              }
            },
            "stayType": {
              "type": "string",
              "description": "Code of the Department Type.",
              "example": "BED"
            }
          }
        },
        "ApiChainsRS": {
          "type": "object",
          "description": "Response of Chains operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "chains": {
              "type": "array",
              "description": "List of chains.",
              "items": {
                "$ref": "#/components/schemas/ApiChain"
              }
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned chains.",
              "format": "int32"
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned chains.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of chains matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiRateClassRS": {
          "type": "object",
          "description": "Returns the list of available values for the rateClass.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "classifications": {
              "type": "array",
              "description": "List of rateClass.",
              "items": {
                "$ref": "#/components/schemas/ApiRateClass"
              }
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned rateclass.",
              "format": "int32"
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned rateclass.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of rateclass matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiLanguagesRS": {
          "type": "object",
          "description": "Response of Languages operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned languages.",
              "format": "int32"
            },
            "languages": {
              "type": "array",
              "description": "List of languages.",
              "items": {
                "$ref": "#/components/schemas/ApiLanguage"
              }
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned languages.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of languages matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiChain": {
          "type": "object",
          "description": "Information on a hotelier chain.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Code of the chain.",
              "example": 7
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            }
          }
        },
        "ApiRateClass": {
          "type": "object",
          "description": "Information on a rateClass.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Code of rateClass.",
              "example": "NRF"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            }
          }
        },
        "ApiTerminalsRS": {
          "type": "object",
          "description": "Response of Terminals operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned terminals.",
              "format": "int32"
            },
            "terminals": {
              "type": "array",
              "description": "List of terminals.",
              "items": {
                "$ref": "#/components/schemas/ApiTerminal"
              }
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned terminals.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of terminals matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiCountriesRS": {
          "type": "object",
          "description": "Response of Countries operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "countries": {
              "type": "array",
              "description": "List of countries.",
              "items": {
                "$ref": "#/components/schemas/ApiCountry"
              }
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned countries.",
              "format": "int32"
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned countries.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of countries matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiGroupCategoriesRS": {
          "type": "object",
          "description": "Response of GroupCategories operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned group categories.",
              "format": "int32"
            },
            "groupCategories": {
              "type": "array",
              "description": "List of group categories.",
              "items": {
                "$ref": "#/components/schemas/ApiGroupCategory"
              }
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned group categories.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of group categories matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiSegment": {
          "type": "object",
          "properties": {
            "code": {
              "type": "integer",
              "format": "int32"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            }
          }
        },
        "ApiAmenity": {
          "type": "object",
          "properties": {
            "code": {
              "type": "integer",
              "format": "int32"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            }
          }
        },
        "ApiFacilitiesRS": {
          "type": "object",
          "description": "Response of Facilities operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "facilities": {
              "type": "array",
              "description": "List of facilities.",
              "items": {
                "$ref": "#/components/schemas/ApiFacility"
              }
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned facilities.",
              "format": "int32"
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned facilities.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of facilities matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiFacilityGroup": {
          "type": "object",
          "description": "Information on a group of facilities.",
          "properties": {
            "code": {
              "type": "integer",
              "description": "Code of the facility group.",
              "format": "int32"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            }
          }
        },
        "ApiDestination": {
          "type": "object",
          "description": "Information on a destination of the destination tree.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Code of the destination.",
              "example": "PMI"
            },
            "countryCode": {
              "type": "string",
              "description": "Hotelbeds code for the country",
              "example": "ES"
            },
            "groupZones": {
              "type": "array",
              "description": "List of groups of zones.",
              "items": {
                "$ref": "#/components/schemas/ApiGroupZone"
              }
            },
            "isoCode": {
              "type": "string",
              "description": "ISO Country Code.",
              "example": "ES"
            },
            "name": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "zones": {
              "type": "array",
              "description": "List of zones in which the destination is divided.",
              "items": {
                "$ref": "#/components/schemas/ApiZone"
              }
            }
          }
        },
        "ApiHotelIssue": {
          "type": "object",
          "description": "Information on an hotel issue (repair works, facilities closed,...).",
          "properties": {
            "alternative": {
              "type": "boolean",
              "description": "Indicator if there will be an alternative due to the issue."
            },
            "dateFrom": {
              "type": "string",
              "description": "Date from when the issue will start.",
              "example": "2020-07-20T00:00:00.000Z"
            },
            "dateTo": {
              "type": "string",
              "description": "Date when the issue will end.",
              "example": "2020-07-26T00:00:00.000Z"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "issueCode": {
              "type": "string",
              "description": "Code of the issue.",
              "example": "SPA"
            },
            "issueType": {
              "type": "string",
              "description": "Code of the type of incidence.",
              "example": "REFURBISHMENT"
            },
            "order": {
              "type": "integer",
              "description": "Issue order, in case there is more than one.",
              "format": "int32"
            }
          }
        },
        "ApiTerminal": {
          "type": "object",
          "description": "Info of a terminal.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Code of the terminal.",
              "example": "PMI"
            },
            "country": {
              "type": "string",
              "description": "Code of the country where the terminal is located.",
              "example": "ES"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "name": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "type": {
              "type": "string",
              "description": "Code of the type of the terminal.",
              "example": "A"
            }
          }
        },
        "ApiCategoriesRS": {
          "type": "object",
          "description": "Response of Categories operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "categories": {
              "type": "array",
              "description": "List of categories.",
              "items": {
                "$ref": "#/components/schemas/ApiCategory"
              }
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned categories.",
              "format": "int32"
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned categories.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of categories matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiRateCommentDetailsRS": {
          "type": "object",
          "description": "Response of RateCommentDetails operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "code": {
              "type": "string",
              "description": "Code of the comment of the hotel.",
              "example": 166598
            },
            "date": {
              "type": "string",
              "description": "Date of the application of the rate.",
              "example": "2020-05-06T00:00:00.000Z"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned rate comment details.",
              "format": "int32"
            },
            "hotel": {
              "type": "integer",
              "description": "Code of the hotel.",
              "format": "int32"
            },
            "incoming": {
              "type": "integer",
              "description": "Code of the incoming office of the hotel.",
              "format": "int32"
            },
            "rateComments": {
              "type": "array",
              "description": "List of rate comment details.",
              "items": {
                "$ref": "#/components/schemas/ApiRateComment"
              }
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned rate comment details.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of rate comment details matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiSegmentsRS": {
          "type": "object",
          "description": "Response of Segments operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned segments.",
              "format": "int32"
            },
            "segments": {
              "type": "array",
              "description": "List of segments.",
              "items": {
                "$ref": "#/components/schemas/ApiSegment"
              }
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned segments.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of segments matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiAmenitiesRS": {
          "type": "object",
          "description": "Response of Amenities operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned amenities.",
              "format": "int32"
            },
            "amenities": {
              "type": "array",
              "description": "List of amenities.",
              "items": {
                "$ref": "#/components/schemas/ApiAmenity"
              }
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned amenities.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of amenities matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiGroupZone": {
          "type": "object",
          "description": "Information on a group of zones",
          "properties": {
            "groupZoneCode": {
              "type": "string",
              "description": "Code of the group of zones.",
              "example": "MALLOPMI16"
            },
            "name": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "zones": {
              "type": "array",
              "description": "List of zones that belong to the group.",
              "items": {
                "type": "integer",
                "format": "int32"
              }
            }
          }
        },
        "ApiImageTypesRS": {
          "type": "object",
          "description": "Response of ImageTypes operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned image types.",
              "format": "int32"
            },
            "imageTypes": {
              "type": "array",
              "description": "List of image types.",
              "items": {
                "$ref": "#/components/schemas/ApiImageType"
              }
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned image types.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of image types matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiAccommodation": {
          "type": "object",
          "description": "Information on a accommodation type.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Code of the accommodation type.",
              "example": "HOTEL"
            },
            "typeDescription": {
              "type": "string",
              "description": "Description of the accommodation type.",
              "example": "Hotel"
            },
            "typeMultiDescription": {
              "$ref": "#/components/schemas/ApiContent"
            }
          }
        },
        "ApiWildCard": {
          "type": "object",
          "description": "Information on a wildcard room.",
          "properties": {
            "characteristicCode": {
              "type": "string",
              "description": "Code of the wildcard room characteristic.",
              "example": "ST-2"
            },
            "hotelRoomDescription": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "roomCode": {
              "type": "string",
              "description": "Code of the wildcard room type.",
              "example": "DBT"
            },
            "roomType": {
              "type": "string",
              "description": "Code of the wildcard room.",
              "example": "DBT.ST-2"
            }
          }
        },
        "ApiIssue": {
          "type": "object",
          "description": "Information on an issue type (repair works, facilities closed,...).",
          "properties": {
            "alternative": {
              "type": "boolean",
              "description": "Indicator if there will be an alternative due to the issue."
            },
            "code": {
              "type": "string",
              "description": "Code of the issue.",
              "example": "CHILDRENPOOL"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "name": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "type": {
              "type": "string",
              "description": "Code of the type of incidence.",
              "example": "CLOSED"
            }
          }
        },
        "ApiRoomsRS": {
          "type": "object",
          "description": "Response of Rooms operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned rooms.",
              "format": "int32"
            },
            "rooms": {
              "type": "array",
              "description": "List of rooms.",
              "items": {
                "$ref": "#/components/schemas/ApiRoom"
              }
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned rooms.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of rooms matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiImageType": {
          "type": "object",
          "description": "Information on an hotel image type.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Code of the type of the image.",
              "example": "HAB"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            }
          }
        },
        "ApiCategory": {
          "type": "object",
          "description": "Information on an accommodation category.",
          "properties": {
            "accommodationType": {
              "type": "string",
              "description": "Code of the type of accommodation to which the category belongs. (apartment, hotel, home, etc.).",
              "example": "HOTEL"
            },
            "code": {
              "type": "string",
              "description": "Hotel star rating based on the information provided by the hotel.",
              "example": "4EST"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "group": {
              "type": "string",
              "description": "Code of the group to which the category belongs.",
              "example": "GRUPO4"
            },
            "simpleCode": {
              "type": "integer",
              "description": "Simple category code used for filtering in [Hotel Booking API](/documentation/hotels/booking-api/api-reference/) Availability.",
              "format": "int32"
            }
          }
        },
        "ApiGroupCategory": {
          "type": "object",
          "description": "Information of a group of categories.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Code of the category group.",
              "example": "GRUPO4"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "name": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "order": {
              "type": "integer",
              "description": "Internal order of the category group.",
              "format": "int32"
            }
          }
        },
        "ApiHotelRoom": {
          "type": "object",
          "description": "Information of the hotel room.",
          "properties": {
            "characteristicCode": {
              "type": "string",
              "description": "Characteristic code/s of the room.",
              "example": "ST"
            },
            "description": {
              "type": "string",
              "description": "Description of the room.",
              "example": "DOUBLE STANDARD"
            },
            "roomCode": {
              "type": "string",
              "description": "Identifier of the room type.",
              "example": "DBL.ST"
            },
            "roomFacilities": {
              "type": "array",
              "description": "List of facilities, amenities and installations in the room of the hotel.",
              "items": {
                "$ref": "#/components/schemas/ApiHotelRoomFacility"
              }
            },
            "roomStays": {
              "type": "array",
              "description": "List of the different departments in which the room is divided.",
              "items": {
                "$ref": "#/components/schemas/ApiHotelRoomStay"
              }
            },
            "roomType": {
              "type": "string",
              "description": "Internal room type code. Returned only for Unified clients.",
              "example": "DBL"
            }
          }
        },
        "ApiHotelTerminal": {
          "type": "object",
          "description": "Info of a terminal.",
          "properties": {
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "distance": {
              "type": "integer",
              "description": "Distance in kilometers to the hotel.",
              "format": "int32"
            },
            "name": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "terminalCode": {
              "type": "string",
              "description": "Code of the terminal.",
              "example": "FAO"
            },
            "terminalType": {
              "type": "string",
              "description": "Code of the type of the terminal.",
              "example": "A"
            }
          }
        },
        "ApiZone": {
          "type": "object",
          "description": "Information on the zone inside the destination where to search for hotels.",
          "properties": {
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "name": {
              "type": "string",
              "description": "Internal zone name. (only available for Hotel Detail)",
              "example": "Candabong"
            },
            "zoneCode": {
              "type": "integer",
              "description": "Internal Zone Code.",
              "format": "int32"
            }
          }
        },
        "ApiFacility": {
          "type": "object",
          "description": "Information on a hotel facility.",
          "properties": {
            "code": {
              "type": "integer",
              "description": "Code of the facility.",
              "format": "int32"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "facilityGroupCode": {
              "type": "integer",
              "description": "Group the facility belongs to.",
              "format": "int32"
            },
            "facilityTypologyCode": {
              "type": "integer",
              "description": "Typology of the facility which determines the fields to receive in the hotels operation.",
              "format": "int32"
            }
          }
        },
        "ApiFacilityGroupsRS": {
          "type": "object",
          "description": "Response of FacilityGroups operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "facilityGroups": {
              "type": "array",
              "description": "List of groups of facilities.",
              "items": {
                "$ref": "#/components/schemas/ApiFacilityGroup"
              }
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned facility groups.",
              "format": "int32"
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned facility groups.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of facility groups matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiCurrency": {
          "type": "object",
          "description": "Currency.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Internal currency code.",
              "example": "AED"
            },
            "currencyType": {
              "type": "string",
              "description": "Indication for which rate type will be returned.",
              "example": "LIBERATE"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            }
          }
        },
        "ApiFacilityType": {
          "type": "object",
          "description": "Classification information of facilities.",
          "properties": {
            "ageFromFlag": {
              "type": "boolean",
              "description": "Indicator if the ageFrom Value will be returned."
            },
            "ageToFlag": {
              "type": "boolean",
              "description": "Indicator if the ageTo Value will be returned."
            },
            "amountFlag": {
              "type": "boolean",
              "description": "Indicator if the amount Value will be returned."
            },
            "appTypeFlag": {
              "type": "boolean",
              "description": "Indicator if the appType Value will be returned."
            },
            "code": {
              "type": "integer",
              "description": "Code of the typology.",
              "format": "int32"
            },
            "currencyFlag": {
              "type": "boolean",
              "description": "Indicator if the currency Value will be returned."
            },
            "dateFromFlag": {
              "type": "boolean",
              "description": "Indicator if the dateFrom Value will be returned."
            },
            "dateToFlag": {
              "type": "boolean",
              "description": "Indicator if the dateTo Value will be returned."
            },
            "distanceFlag": {
              "type": "boolean",
              "description": "Indicator if the distance Value will be returned."
            },
            "feeFlag": {
              "type": "boolean",
              "description": "Indicator if the Fee Value will be returned."
            },
            "indYesOrNoFlag": {
              "type": "boolean",
              "description": "Indicator if the YesOrNo Value will be returned."
            },
            "logicFlag": {
              "type": "boolean",
              "description": "Indicator if the Logic Value will be returned."
            },
            "numberFlag": {
              "type": "boolean",
              "description": "Indicator if the Number Value will be returned"
            },
            "textFlag": {
              "type": "boolean",
              "description": "Indicator if the Text Value will be returned."
            },
            "timeFromFlag": {
              "type": "boolean",
              "description": "Indicator if the timeFrom Value will be returned."
            },
            "timeToFlag": {
              "type": "boolean",
              "description": "Indicator if the timeTo Value will be returned."
            }
          }
        },
        "ApiBoardsRS": {
          "type": "object",
          "description": "Response of Boards operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "boards": {
              "type": "array",
              "description": "List of boards.",
              "items": {
                "$ref": "#/components/schemas/ApiBoard"
              }
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned boards.",
              "format": "int32"
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned boards.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of boards matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiRateComment": {
          "type": "object",
          "description": "Definition of the rate comment.",
          "properties": {
            "dateEnd": {
              "type": "string",
              "description": "Final date of application of the comment.",
              "example": "2023-12-31T00:00:00.000Z"
            },
            "dateStart": {
              "type": "string",
              "description": "Date from which the comment starts to apply.",
              "example": "2017-08-10T00:00:00.000Z"
            },
            "description": {
              "type": "string",
              "description": "Rate comments description and language.",
              "example": "no refundable rate. no changes, modification are allowed."
            }
          }
        },
        "ApiImage": {
          "type": "object",
          "description": "Describes an hotel picture.",
          "properties": {
            "characteristicCode": {
              "type": "string",
              "description": "Characteristic code/s of the room.",
              "example": "B2-PI"
            },
            "imageTypeCode": {
              "type": "string",
              "description": "Specifies where has the picture been taken (you can see the possible values in the response of types/imagetypes operation).",
              "example": "RES"
            },
            "order": {
              "type": "integer",
              "description": "Order in which the images are shown in the web page.",
              "format": "int32"
            },
            "path": {
              "type": "string",
              "description": "URL of the image. For hotel images, we do not return the full path. Note that one of the following paths must be added by the client.",
              "example": "00/000112/000112a_hb_ro_025.jpg"
            },
            "roomCode": {
              "type": "string",
              "description": "Identifier of the room type.",
              "example": "APT.B2-PI"
            },
            "roomType": {
              "type": "string",
              "description": "Internal Room type code, returned only for Unified clients.",
              "example": "APT"
            },
            "type": {
              "$ref": "#/components/schemas/ApiImageType"
            },
            "visualOrder": {
              "type": "integer",
              "description": "Ordinal value at which the image should be presented.",
              "format": "int32"
            },
            "PMSRoomCode": {
              "type": "string",
              "description": "Original hotel room code, directly sourced from the property",
              "example": "K1CN"
            }
          }
        },
        "ApiRateComments": {
          "type": "object",
          "description": "Describes info that the hotelier wants the final passenger to read before confirming the booking.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Code of the rate comment.",
              "example": 100403
            },
            "commentsByRates": {
              "type": "array",
              "description": "List of rateComments.",
              "items": {
                "$ref": "#/components/schemas/ApiRateCommentBlock"
              }
            },
            "hotel": {
              "type": "integer",
              "description": "Code of the hotel.",
              "format": "int32"
            },
            "incoming": {
              "type": "integer",
              "description": "Code of the incoming office of the hotel.",
              "format": "int32"
            }
          }
        },
        "ApiPromotionsRS": {
          "type": "object",
          "description": "Response of Promotions operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned promotions.",
              "format": "int32"
            },
            "promotions": {
              "type": "array",
              "description": "List of promotions.",
              "items": {
                "$ref": "#/components/schemas/ApiPromotion"
              }
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned promotions.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of promotions matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiIssuesRS": {
          "type": "object",
          "description": "Response of Issues operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned issues.",
              "format": "int32"
            },
            "issues": {
              "type": "array",
              "description": "List of issues that can affect an hotel and its facilities.",
              "items": {
                "$ref": "#/components/schemas/ApiIssue"
              }
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned issues.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of issues matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiCurrenciesRS": {
          "type": "object",
          "description": "Response of Currencies operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "currencies": {
              "type": "array",
              "description": "List of currencies.",
              "items": {
                "$ref": "#/components/schemas/ApiCurrency"
              }
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned currencies.",
              "format": "int32"
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned currencies.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of currencies matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiFacilityTypologiesRS": {
          "type": "object",
          "description": "Response of FacilityTypologies operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "facilityTypologies": {
              "type": "array",
              "description": "List of classifications for facilities.",
              "items": {
                "$ref": "#/components/schemas/ApiFacilityType"
              }
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned facility typologies.",
              "format": "int32"
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned facility typologies.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of facility typologies matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiPromotion": {
          "type": "object",
          "description": "Information of a promotion that can be applied to hotels rates.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Internal Promotion code.",
              "example": 13
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "name": {
              "$ref": "#/components/schemas/ApiContent"
            }
          }
        },
        "ApiRateCommentBlock": {
          "type": "object",
          "description": "Lists of rate comments and the rates that apply to them.",
          "properties": {
            "comments": {
              "type": "array",
              "description": "Rate comments that apply to the rates.",
              "items": {
                "$ref": "#/components/schemas/ApiRateComment"
              }
            },
            "rateCodes": {
              "type": "array",
              "description": "Rates for which the rate comments applies.",
              "items": {
                "type": "integer",
                "format": "int32"
              }
            }
          }
        },
        "ApiDestinationsRS": {
          "type": "object",
          "description": "Response of Destinations operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "destinations": {
              "type": "array",
              "description": "List of available destinations.",
              "items": {
                "$ref": "#/components/schemas/ApiDestination"
              }
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned destinations.",
              "format": "int32"
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned destinations.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of destinations matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiBoard": {
          "type": "object",
          "description": "Information on a board.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Internal code of the board.",
              "example": "AI"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "multiLingualCode": {
              "type": "string",
              "description": "Multilanguage code of the board type.",
              "example": "AI"
            }
          }
        },
        "ApiHotel": {
          "type": "object",
          "description": "Information on a hotel.",
          "properties": {
            "S2C": {
              "type": "string",
              "description": "Health & Safety rating (NOTE: please bear in mind is not related to hotel category).",
              "example": "4*"
            },
            "accommodationType": {
              "$ref": "#/components/schemas/ApiAccommodation"
            },
            "accommodationTypeCode": {
              "type": "string",
              "description": "Code of the type of accommodation. It will indicate the type of the hotel (apartment, hotel, home, etc.).",
              "example": "HOTEL"
            },
            "address": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "boardCodes": {
              "type": "array",
              "description": "List of codes of board types offered at the hotel.",
              "items": {
                "type": "string",
                "description": "Code of a board type offered at the hotel.",
                "example": "BB"
              }
            },
            "boards": {
              "type": "array",
              "description": "List of boards offered at the hotel.",
              "items": {
                "$ref": "#/components/schemas/ApiBoard"
              }
            },
            "category": {
              "$ref": "#/components/schemas/ApiCategory"
            },
            "categoryCode": {
              "type": "string",
              "description": "Hotel rating based on the information provided by the hotel.",
              "example": "4EST"
            },
            "categoryGroup": {
              "$ref": "#/components/schemas/ApiGroupCategory"
            },
            "categoryGroupCode": {
              "type": "string",
              "description": "Group name of the category to which the hotel belongs.",
              "example": "GRUPO4"
            },
            "chain": {
              "$ref": "#/components/schemas/ApiChain"
            },
            "chainCode": {
              "type": "string",
              "description": "Code of the chain that the hotel belongs to.",
              "example": "S.HOT"
            },
            "city": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "code": {
              "type": "integer",
              "description": "Hotelbeds internal hotel code.",
              "format": "int32"
            },
            "coordinates": {
              "$ref": "#/components/schemas/ApiGeoLocation"
            },
            "country": {
              "$ref": "#/components/schemas/ApiCountry"
            },
            "countryCode": {
              "type": "string",
              "description": "Code of the country where the hotel is located.",
              "example": "PT"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "destination": {
              "$ref": "#/components/schemas/ApiDestination"
            },
            "destinationCode": {
              "type": "string",
              "description": "Code of the destination of the hotel location.",
              "example": "FAO"
            },
            "email": {
              "type": "string",
              "description": "Hotel e-mail address. More than one email can be returned, separated by \";\" characters.",
              "example": "geral@aqualuzlagos.pt"
            },
            "exclusiveDeal": {
              "type": "integer",
              "description": "The value follows a qualitative scale, the number 1 being always the top priority/preferential, and the rest of the product defined by our commercial departments. As of today, the possible values are:\n  1: Identifies preferential product with exclusive guaranteed availability.\n  2: Identifies top hotels.\n  3: Identifies the rest of hotels.\n  In case new values are added in the future, a proper communication campaign will be carried out to inform you.\n",
              "format": "int32"
            },
            "facilities": {
              "type": "array",
              "description": "List of facilities, amenities and installations in the hotel.",
              "items": {
                "$ref": "#/components/schemas/ApiHotelFacility"
              }
            },
            "giataCode": {
              "type": "integer",
              "description": "Giata code of the hotel. Will only be returned if the client has agreement with Giata.",
              "format": "int32"
            },
            "images": {
              "type": "array",
              "description": "List of hotel pictures.",
              "items": {
                "$ref": "#/components/schemas/ApiImage"
              }
            },
            "interestPoints": {
              "type": "array",
              "description": "List of points of interest close to the hotel.",
              "items": {
                "$ref": "#/components/schemas/ApiHotelPointOfInterest"
              }
            },
            "issues": {
              "type": "array",
              "description": "List of issues affecting the hotel.",
              "items": {
                "$ref": "#/components/schemas/ApiHotelIssue"
              }
            },
            "lastUpdate": {
              "type": "string",
              "description": "Date of the last update in the information of the hotel.",
              "example": "2020-02-08T00:00:00.000Z"
            },
            "license": {
              "type": "string",
              "description": "Accommodation registration number.",
              "example": 4470
            },
            "name": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "phones": {
              "type": "array",
              "description": "List of contact phones of the hotel.",
              "items": {
                "$ref": "#/components/schemas/ApiHotelPhone"
              }
            },
            "postalCode": {
              "type": "string",
              "description": "Hotel address postal code.",
              "example": 4740
            },
            "ranking": {
              "type": "integer",
              "description": "Hotelbeds internal sorting ranking (NOTE: please bear in mind is not related to hotel category).",
              "format": "int32"
            },
            "rooms": {
              "type": "array",
              "description": "List of available rooms types at the hotel.",
              "items": {
                "$ref": "#/components/schemas/ApiHotelRoom"
              }
            },
            "segmentCodes": {
              "type": "array",
              "description": "List of the internal segment codes.",
              "items": {
                "type": "integer",
                "description": "Code of the segment to which the hotel belongs (business hotel, city hotel,etc.).",
                "format": "int32"
              }
            },
            "segments": {
              "type": "array",
              "description": "List of segments.",
              "items": {
                "$ref": "#/components/schemas/ApiSegment"
              }
            },
            "amenityCodes": {
              "type": "array",
              "description": "List of the internal amenity codes.",
              "items": {
                "type": "integer",
                "description": "Code of the amenity to which the hotel belongs",
                "format": "int32"
              }
            },
            "amenities": {
              "type": "array",
              "description": "List of amenities.",
              "items": {
                "$ref": "#/components/schemas/ApiAmenity"
              }
            },
            "state": {
              "$ref": "#/components/schemas/ApiState"
            },
            "stateCode": {
              "type": "string",
              "description": "Internal code of the state.",
              "example": "AL"
            },
            "terminals": {
              "type": "array",
              "description": "List of terminals associated to the hotel and their distance to the hotel.",
              "items": {
                "$ref": "#/components/schemas/ApiHotelTerminal"
              }
            },
            "web": {
              "type": "string",
              "description": "Website URL of the hotel or the chain.",
              "example": "www.aqualuz.com"
            },
            "wildcards": {
              "type": "array",
              "description": "List of wildcard rooms.",
              "items": {
                "$ref": "#/components/schemas/ApiWildCard"
              }
            },
            "zone": {
              "$ref": "#/components/schemas/ApiZone"
            },
            "zoneCode": {
              "type": "integer",
              "description": "Internal zone code, where the hotel is located.",
              "format": "int32"
            }
          }
        },
        "ApiHotelDetailsRS": {
          "type": "object",
          "description": "Response of HotelDetails operation",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned hotels.",
              "format": "int32"
            },
            "hotel": {
              "$ref": "#/components/schemas/ApiHotel"
            },
            "hotels": {
              "type": "array",
              "description": "List of returned hotels matching the parameters used in the request.",
              "items": {
                "$ref": "#/components/schemas/ApiHotel"
              }
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned hotels.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of hotels matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiHotelPhone": {
          "type": "object",
          "description": "Information on a hotel phone line.",
          "properties": {
            "phoneNumber": {
              "type": "string",
              "description": "Phone number.",
              "example": 34902400661
            },
            "phoneType": {
              "type": "string",
              "description": "Type of phone line (phonebooking, phonehotel, faxnumber...).",
              "example": "PHONEBOOKING"
            }
          }
        },
        "ApiState": {
          "type": "object",
          "description": "State information.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Internal code of the state.",
              "example": "CA"
            },
            "name": {
              "type": "string",
              "description": "Name of the state.",
              "example": "CALIFORNIA"
            }
          }
        },
        "ApiHotelRoomFacility": {
          "type": "object",
          "description": "Information on facilities and features associated to a hotel room.",
          "properties": {
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "facilityCode": {
              "type": "integer",
              "description": "Code of the facility.",
              "format": "int32"
            },
            "facilityGroupCode": {
              "type": "integer",
              "description": "Code of the group to which the facility belongs.",
              "format": "int32"
            },
            "indFee": {
              "type": "boolean",
              "description": "Indicator if the facility has cost or not at the establishment."
            },
            "indLogic": {
              "type": "boolean",
              "description": "Indicator if the facility exists at the hotel or not."
            },
            "indYesOrNo": {
              "type": "boolean",
              "description": "Indicator if the mandatory facility exists at the hotel or not."
            },
            "number": {
              "type": "integer",
              "description": "Numeric value of the facility.",
              "format": "int32"
            },
            "order": {
              "type": "integer",
              "description": "Order of facility in case there is more than one facility at the hotel.",
              "format": "int32"
            },
            "voucher": {
              "type": "boolean",
              "description": "Indicates if the use of the facility will issue a voucher."
            }
          }
        },
        "ApiHotelRoomStayFacility": {
          "type": "object",
          "description": "Information on facilities and features in the RoomStays.",
          "properties": {
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "facilityCode": {
              "type": "integer",
              "description": "Code of the facility.",
              "format": "int32",
              "example": 1
            },
            "facilityGroupCode": {
              "type": "integer",
              "description": "Code of the group the facility belongs to.",
              "format": "int32",
              "example": 61
            },
            "number": {
              "type": "integer",
              "description": "Number of facilities.",
              "format": "int32",
              "example": 2
            }
          }
        },
        "ApiGeoLocation": {
          "type": "object",
          "description": "Defines the geolocation data.",
          "properties": {
            "latitude": {
              "type": "number",
              "description": "Latitude coordinate for geolocation search.",
              "example": 39.5554
            },
            "longitude": {
              "type": "number",
              "description": "Longitude coordinate for geolocation search.",
              "example": 2.62155
            }
          }
        },
        "ApiHotelbedsError": {
          "type": "object",
          "description": "Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Internal token code of the error.",
              "example": "INVALID_DATA-58d877aa-98ef-4472-b7f1-d729224e87a5"
            },
            "message": {
              "type": "string",
              "description": "Descriptive message of the cause of the error.",
              "example": "Invalid data. The number of elements in response are limited to 1000"
            }
          }
        },
        "ApiRoom": {
          "type": "object",
          "description": "Information describing a room.",
          "properties": {
            "characteristic": {
              "type": "string",
              "description": "Code of the room characteristic.",
              "example": "ST"
            },
            "characteristicDescription": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "code": {
              "type": "string",
              "description": "Code of the room.",
              "example": "DBL.ST"
            },
            "description": {
              "type": "string",
              "description": "Description of the room.",
              "example": "DOUBLE STANDARD"
            },
            "maxAdults": {
              "type": "integer",
              "description": "Maximum number of adults allowed in the room.",
              "format": "int32",
              "example": 4
            },
            "maxChildren": {
              "type": "integer",
              "description": "Maximum number of children allowed in the room.",
              "format": "int32",
              "example": 2
            },
            "maxPax": {
              "type": "integer",
              "description": "Maximum number of paxes allowed in the room.",
              "format": "int32",
              "example": 4
            },
            "minAdults": {
              "type": "integer",
              "description": "Minimum number of adults allowed in the room.",
              "format": "int32",
              "example": 1
            },
            "minPax": {
              "type": "integer",
              "description": "Minimum number of adults allowed in the room.",
              "format": "int32",
              "example": 1
            },
            "type": {
              "type": "string",
              "description": "Code of the room type. Returned only for Unified clients.",
              "example": "DBL"
            },
            "typeDescription": {
              "$ref": "#/components/schemas/ApiContent"
            }
          }
        },
        "ApiAuditData": {
          "type": "object",
          "description": "Relevant internal information.",
          "properties": {
            "environment": {
              "type": "string",
              "description": "Environment where the request has been sent and processed.",
              "example": [
                "awseuwest1",
                "awseuwest1b",
                "ip_10_185_91_142"
              ]
            },
            "processTime": {
              "type": "string",
              "description": "Server process time in milliseconds.",
              "example": "53"
            },
            "release": {
              "type": "string",
              "description": "Release version identifier.",
              "example": "19117e1a462f1a1d7fa2fcf6371e3bbdb0c14a89"
            },
            "requestHost": {
              "type": "string",
              "description": "IP address of the system host.",
              "example": "10.185.84.47"
            },
            "serverId": {
              "type": "string",
              "description": "Server code or ID (for internal use).",
              "example": "ip-10-185-91-142.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery"
            },
            "timestamp": {
              "type": "string",
              "description": "Date/time when the request has been processed (always in Spanish time).",
              "example": "2020-03-03T13:22:20.821Z"
            }
          }
        },
        "ApiHotelsRS": {
          "type": "object",
          "description": "Response of Hotels operation",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned hotels.",
              "format": "int32"
            },
            "hotels": {
              "type": "array",
              "description": "List of returned hotels matching the parameters used in the request.",
              "items": {
                "$ref": "#/components/schemas/ApiHotel"
              }
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned hotels.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of hotels matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiCountry": {
          "type": "object",
          "description": "Country information.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Hotelbeds internal country code.",
              "example": "PT"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "isoCode": {
              "type": "string",
              "description": "ISO 3166-2 Country Code.",
              "example": "PT"
            },
            "states": {
              "type": "array",
              "description": "List of states/provinces/territories belonging to the country.",
              "items": {
                "$ref": "#/components/schemas/ApiState"
              }
            }
          }
        },
        "ApiContent": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string",
              "description": "Text description, provided in the language defined in LanguageCode field."
            },
            "languageCode": {
              "type": "string",
              "description": "Code of the language in which the description is returned."
            }
          }
        },
        "ApiBoardGroupsRS": {
          "type": "object",
          "description": "Response of BoardGroups operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "boards": {
              "type": "array",
              "description": "List of board groups.",
              "items": {
                "$ref": "#/components/schemas/ApiBoardGroup"
              }
            },
            "error": {
              "$ref": "#/components/schemas/ApiHotelbedsError"
            },
            "from": {
              "type": "integer",
              "description": "Lowest value of the range of returned board groups.",
              "format": "int32"
            },
            "to": {
              "type": "integer",
              "description": "Highest value of the range of returned board groups.",
              "format": "int32"
            },
            "total": {
              "type": "integer",
              "description": "Total number of board groups matching the parameters used in the request (regardless of pagination/returned range).",
              "format": "int32"
            }
          }
        },
        "ApiBoardGroup": {
          "type": "object",
          "description": "Information on a board group.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Internal code of the board group.",
              "example": "MP"
            },
            "description": {
              "$ref": "#/components/schemas/ApiContent"
            },
            "boards": {
              "type": "array",
              "description": "List of the internal board codes.",
              "items": {
                "type": "string",
                "description": "Code of the boards associated to that board group code.",
                "example": "BB"
              }
            }
          }
        }
      },
      "responses": {
        "400": {
          "description": "**BAD REQUEST** - The server cannot or will not process the request due to an apparent client error.\n\n*INVALID_REQUEST* - The request is not compliant with the specified version of the API. The message body will contain more information\n\n*INVALID_DATA* - The JSON or XML syntax is correct, however some of the fields contain incorrect data. Please check the documentation for the allowed values and follow the message returned in order to fix this error.",
          "content": {
            "application/json": {
              "example": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<hotelDetailsRS xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://www.hotelbeds.com/schemas/messages\">\n    <auditData timestamp=\"2020-03-10 12:16:12.344\" requestHost=\"10.185.84.47\" serverId=\"ip-10-185-91-142.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery\" environment=\"[awseuwest1, awseuwest1b, ip_10_185_91_142]\" release=\"0cf072e304caa94a87e492554c0876fb8d4104a3\"/>\n    <error>\n        <code>INVALID_REQUEST-0400672A839841DFBE1596B766168ABB</code>\n        <message>The request is not compliant with the specified version of the API. Failed to convert value of type 'java.lang.String' to required type 'java.util.List'; nested exception is java.lang.NumberFormatException: For input string: \"a\"</message>\n    </error>\n</hotelDetailsRS>"
            },
            "application/xml": {
              "example": "auditData:\n  timestamp: '2020-03-10 12:15:26.243'\n  requestHost: 10.185.83.32\n  serverId: ip-10-185-91-142.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery\n  environment: '[awseuwest1, awseuwest1b, ip_10_185_91_142]'\n  release: 0cf072e304caa94a87e492554c0876fb8d4104a3\nerror:\n  code: INVALID_REQUEST-E686305A947C44878969832AF9318F69\n  message: 'The request is not compliant with the specified version of the API. Failed to convert value of type ''java.lang.String'' to required type ''java.util.List''; nested exception is java.lang.NumberFormatException: For input string: \"a\"'"
            }
          }
        },
        "401": {
          "description": "**UNAUTHORIZED** - Authentication has failed or has not been provided.",
          "content": {
            "application/xml": {
              "examples": {
                "Ex1": {
                  "summary": "The X-Signature parameter is incorrect. Please make sure your apiKey - secret are correct and your system clock is set correctly.",
                  "value": {
                    "error": "Request signature verification failed"
                  }
                },
                "Ex2": {
                  "summary": "One of the authorization fields is not informed. Please make sure your request headers include both apiKey and X-Signature.",
                  "value": {
                    "error": "Authorization field missing"
                  }
                }
              }
            }
          }
        },
        "403": {
          "description": "**FORBIDDEN** - The credentials are correct and authorization was succesful, but access to this resource/operation is not allowed.",
          "content": {
            "application/xml": {
              "examples": {
                "Ex1": {
                  "summary": "The apiKey does not allow access to this operation/path.",
                  "value": {
                    "error": "Access to this API has been disallowed"
                  }
                },
                "Ex2": {
                  "summary": "The allowed throttle limit for this apiKey has been exceeded.",
                  "value": {
                    "error": "Quota exceeded"
                  }
                }
              }
            }
          }
        },
        "406": {
          "description": "**NOT ACCEPTABLE** - The resource identified by the request is only capable of generating response entities which have content characteristics not acceptable according to the accept headers sent in the request.",
          "content": {
            "application/json": {
              "example": "no body"
            }
          }
        },
        "415": {
          "description": "**UNSUPPORTED MEDIA TYPE** - Use the Content-Type header to set application/xml or application/json and be sure the format of your payload matches the format",
          "content": {
            "application/json": {
              "example": "no body"
            }
          }
        },
        "429": {
          "description": "**Rate limit exceeded** - The user has sent too many requests in a given amount of time."
        },
        "500": {
          "description": "**INTERNAL SERVER ERROR** - An unexpected condition was encountered. Possible causes\n\n*SYSTEM_ERROR* - These are internal server errors, please send us these errors together with the complete logs (JSON or XML requests and responses) at [apitude@hotelbeds.com]() so that our team can review them. \n\n*CONFIGURATION_ERROR* - This type of error is produced by configuration restrictions set-up at account level. Usually this results in the inability to perform an specific operation. Here is a list of common configuration errors:\n\n* *This apikey is not associated with a valid client*: This means that the provided apiKey belongs to an inactive client/agency. If you need information regarding the cause for this please contact our support team at [apitude@hotelbeds.com]().",
          "content": {
            "application/json": {
              "example": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bookingRS xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" schemaLocation=\"http://www.hotelbeds.com/schemas/messages\">\n    <auditData processTime=\"664\" timestamp=\"2020-01-29 17:12:51.308\" requestHost=\"212.66.164.13, 64.252.132.73, 10.185.83.195, 34.242.17.225\" serverId=\"ip-10-185-89-145.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery\" environment=\"[awseuwest1, awseuwest1a, ip_10_185_89_145]\" release=\"8813015814a189304b0f776271181c6aa778ed93\" token=\"653FFA26827746AE80B5583439DC985D\" internal=\"0||||0|0||||||||||||0||||0||0|6wvxrqh8x2kjpf4cncwpzvah|||\"/>\n    <error>\n        <code>SYSTEM_ERROR-653FFA26827746AE80B5583439DC985D</code>\n        <message>Internal server error</message>\n    </error>\n</bookingRS>"
            },
            "application/xml": {
              "example": {
                "auditData": {
                  "processTime": "664",
                  "timestamp": "020-01-29 17:12:51.308",
                  "requestHost": "212.66.164.13, 64.252.132.73, 10.185.83.195, 34.242.17.225",
                  "serverId": "ip-10-185-89-145.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery",
                  "environment": "[awseuwest1, awseuwest1a, ip_10_185_89_145]",
                  "release": "8813015814a189304b0f776271181c6aa778ed93",
                  "token": "653FFA26827746AE80B5583439DC985D",
                  "internal": "0||||0|0||||||||||||0||||0||0|6wvxrqh8x2kjpf4cncwpzvah|||"
                },
                "error": {
                  "code": "SYSTEM_ERROR-653FFA26827746AE80B5583439DC985D",
                  "message": "Internal server error"
                }
              }
            }
          }
        },
        "502": {
          "description": "**BAD GATEWAY** - The server was acting as a gateway or proxy and received an invalid response from the upstream server."
        },
        "503": {
          "description": "**SERVICE UNAVAILABLE** - The server is currently unable to handle the request due to a temporary condition which will be alleviated after some delay. You can choose to resend the request again.\n\n*SERVICE_OVERLOAD* - The server is currently unable to handle the request due to an overwhelming number of requests being processed. Condition which will be alleviated after some delay."
        },
        "504": {
          "description": "**GATEWAY TIMEOUT** - The server is currently unable to handle the request due to a temporary condition which will be alleviated after some delay. You can choose to resend the request again."
        },
        "513": {
          "description": "**APPLICATION ERROR** - Indicates that an involved backend application returned an error or warning, which is passed back in the response message."
        },
        "596": {
          "description": "**SERVICE NOT FOUND** - An invalid endpoint has being reached. Please check that the endpoint you are using to send the petitions is correct."
        }
      },
      "securitySchemes": {
        "Apikey": {
          "type": "apiKey",
          "name": "Api-key",
          "description": "Your registered API key",
          "in": "header"
        },
        "Xsignature": {
          "type": "apiKey",
          "name": "X-Signature",
          "description": "SHA256 encoding signature",
          "in": "header"
        }
      }
    },
    "security": [
      {
        "Apikey": [],
        "Xsignature": []
      }
    ]
  }
]