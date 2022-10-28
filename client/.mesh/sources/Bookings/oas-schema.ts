// @ts-nocheck
export default [
  {
    "openapi": "3.0.1",
    "info": {
      "title": "Hotel Booking API",
      "description": "# APItude Hotel Booking API\n\nHotel Booking API is designed to book hotels in real time as fast as in\ntwo steps. It covers the complete booking process; it allows generating lists\nof hotels, confirming bookings, getting lists of bookings, obtaining booking information,\nmaking cancellations and modify existing bookings.\n\nHotel Booking API works in combination\nwith [Hotel Content API](/documentation/hotels/content-api/api-reference/) to obtain content information from the hotels, such as pictures,\ndescription, facilities, services, etc. Please refer to the Hotel Content API documentation\nand IO/DOCS for related information.\n\nHotel Booking API has been designed for a\ntwo steps confirmation, but due the the complexity of client and providers systems\na third method has been designed.",
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
        "url": "https://api.test.hotelbeds.com/hotel-api/{version}",
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
        "name": "Availability",
        "description": "Search hotels and rooms available in a given time period"
      },
      {
        "name": "CheckRate",
        "description": "Get a detailed and updated breakdown of an hotel room rate"
      },
      {
        "name": "Booking",
        "description": "Book and manage hotel room reservations"
      }
    ],
    "paths": {
      "/hotels": {
        "post": {
          "tags": [
            "Availability"
          ],
          "summary": "Hotel availability",
          "description": "This method is used to request **room availability**. Some\nfilters and special features can be applied before sending an availability\nrequest.\n\nA flexible date search allows customers to retrieve available\nrates for a specified number of days prior to and post check-in.\n\nThe response generated is a list of hotels with the different room types, board\ntypes, and rates available for those hotels, but not only restricted to the\ndates selected.\n\nBookingAPI prices are final. Our rates include supplements\nand discounts and no additional price calculations are required. \n\nIt can also return cancellation fees in the availability response, providing\namounts and dates at the first step of the booking.\n\nTimeout for this operation is 5 seconds.\n",
          "operationId": "availability",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderContent"
            }
          ],
          "requestBody": {
            "description": "Definition and examples of request body of Availability operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/availabilityRQ"
                },
                "examples": {
                  "Ex1": {
                    "summary": "Search one room (by hotel code list)",
                    "description": "Example request of a search for one room for two adults.\n\nThis is an example of availability search by hotel code list. Up to 2,000 hotel codes can be requested in one request.\n\nHotel codes can be obtained from [Hotel Content API](/documentation/hotels/content-api/api-reference/).",
                    "value": {
                      "stay": {
                        "checkIn": "2020-06-15",
                        "checkOut": "2020-06-16"
                      },
                      "occupancies": [
                        {
                          "rooms": 1,
                          "adults": 2,
                          "children": 0
                        }
                      ],
                      "hotels": {
                        "hotel": [
                          77,
                          168,
                          264,
                          265,
                          297,
                          311
                        ]
                      }
                    }
                  },
                  "Ex2": {
                    "summary": "Search one room with multiple passenger types (by hotel code list)",
                    "description": "Example request of a search for one room for one adult and two children.\n\nThis is an example of availability search by hotel code list. Up to 2,000 hotel codes can be requested in one request.\n\nHotel codes can be obtained from [Hotel Content API](/documentation/hotels/content-api/api-reference/).",
                    "value": {
                      "stay": {
                        "checkIn": "2020-06-15",
                        "checkOut": "2020-06-16"
                      },
                      "occupancies": [
                        {
                          "rooms": 1,
                          "adults": 1,
                          "children": 2,
                          "paxes": [
                            {
                              "type": "CH",
                              "age": 8
                            },
                            {
                              "type": "CH",
                              "age": 10
                            }
                          ]
                        }
                      ],
                      "hotels": {
                        "hotel": [
                          77,
                          168,
                          264,
                          265,
                          297,
                          311
                        ]
                      }
                    }
                  },
                  "Ex3": {
                    "summary": "Search multiple rooms of the same type (by geolocation)",
                    "description": "Example request of search for two rooms for two adults each.\n\nThis is an example of availability search by GPS coordinates. You can do it by either using a circular or a rectangular area:\n\n* __Circle__: you must specify longitude and latitude as the center of the circle, radius and unit (km or mi) will determine the area size.\n\n* __Rectangle__: you must specify longitude and latitude as the top left corner, secondaryLongitude and secondaryLatitude as the bottom right corner of the rectangle.",
                    "value": {
                      "stay": {
                        "checkIn": "2020-06-15",
                        "checkOut": "2020-06-16"
                      },
                      "occupancies": [
                        {
                          "rooms": 2,
                          "adults": 2,
                          "children": 0
                        }
                      ],
                      "geolocation": {
                        "latitude": 39.57119,
                        "longitude": 2.646633999999949,
                        "radius": 20,
                        "unit": "km"
                      }
                    }
                  },
                  "Ex4": {
                    "summary": "Search multiple rooms of different types (by geolocation)",
                    "description": "Example request of search for one room for two adults and one room for one adult and one child.\n\nThis is an example of availability search by GPS coordinates. You can do it by either using a circular or a rectangular area:\n\n* __Circle__: you must specify longitude and latitude as the center of the circle, radius and unit (km or mi) will determine the area size.\n\n* __Rectangle__: you must specify longitude and latitude as the top left corner, secondaryLongitude and secondaryLatitude as the bottom right corner of the rectangle.",
                    "value": {
                      "stay": {
                        "checkIn": "2020-06-15",
                        "checkOut": "2020-06-16"
                      },
                      "occupancies": [
                        {
                          "rooms": 1,
                          "adults": 2,
                          "children": 0
                        },
                        {
                          "rooms": 1,
                          "adults": 1,
                          "children": 1,
                          "paxes": [
                            {
                              "type": "CH",
                              "age": 2
                            }
                          ]
                        }
                      ],
                      "geolocation": {
                        "latitude": 39.57119,
                        "longitude": 2.646633999999949,
                        "radius": 20,
                        "unit": "km"
                      }
                    }
                  },
                  "Ex5": {
                    "summary": "Filter example",
                    "description": "Example request of a search with all the available filters.",
                    "value": {
                      "stay": {
                        "checkIn": "2020-06-15",
                        "checkOut": "2020-06-16"
                      },
                      "occupancies": [
                        {
                          "rooms": 1,
                          "adults": 2,
                          "children": 0
                        }
                      ],
                      "hotels": {
                        "hotel": [
                          77,
                          168,
                          264,
                          265,
                          297,
                          311
                        ]
                      },
                      "rooms": {
                        "included": true,
                        "room": [
                          "DBT.ST"
                        ]
                      },
                      "keywords": {
                        "keyword": [
                          34,
                          38,
                          100
                        ]
                      },
                      "accommodations": [
                        "HOTEL",
                        "HOSTEL"
                      ],
                      "boards": {
                        "included": true,
                        "board": [
                          "RO",
                          "BB"
                        ]
                      },
                      "reviews": [
                        {
                          "type": "HOTELBEDS",
                          "maxRate": 5,
                          "minRate": 1,
                          "minReviewCount": 3
                        }
                      ],
                      "filter": {
                        "minRate": 100,
                        "maxRate": 1700,
                        "minCategory": 3,
                        "maxCategory": 5,
                        "maxRooms": 3,
                        "maxRatesPerRoom": 3,
                        "packaging": true,
                        "hotelPackage": "YES",
                        "contract": "CG-FIT B2B"
                      }
                    }
                  }
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/availabilityRQ"
                },
                "examples": {
                  "Ex1": {
                    "summary": "Search one room (by hotel code list)",
                    "description": "Example request of a search for one room for two adults.\n\nThis is an example of availability search by hotel code list. Up to 2,000 hotel codes can be requested in one request.\n\nHotel codes can be obtained from [Hotel Content API](/documentation/hotels/content-api/api-reference/).",
                    "value": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<availabilityRQ xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <stay checkIn=\"2020-06-15\" checkOut=\"2020-06-16\"/>\n  <occupancies>\n    <occupancy rooms=\"1\" adults=\"2\" children=\"0\"/>\n  </occupancies>\n  <hotels>\n    <hotel>77</hotel>\n    <hotel>168</hotel>\n    <hotel>264</hotel>\n    <hotel>265</hotel>\n    <hotel>265</hotel>\n    <hotel>297</hotel>\n    <hotel>311</hotel>\n  </hotels>\n</availabilityRQ>"
                  },
                  "Ex2": {
                    "summary": "Search one room with multiple passenger types (by hotel code list)",
                    "description": "Example request of a search for one room for one adult and two children.\n\nThis is an example of availability search by hotel code list. Up to 2,000 hotel codes can be requested in one request.\n\nHotel codes can be obtained from [Hotel Content API](/documentation/hotels/content-api/api-reference/).",
                    "value": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<availabilityRQ xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <stay checkIn=\"2020-06-15\" checkOut=\"2020-06-16\"/>\n  <occupancies>\n    <occupancy rooms=\"1\" adults=\"1\" children=\"2\">\n      <paxes>\n        <pax type=\"CH\" age=\"8\"/>\n        <pax type=\"CH\" age=\"10\"/>\n      </paxes>\n    </occupancy>\n  </occupancies>\n  <hotels>\n    <hotel>77</hotel>\n    <hotel>168</hotel>\n    <hotel>264</hotel>\n    <hotel>265</hotel>\n    <hotel>265</hotel>\n    <hotel>297</hotel>\n    <hotel>311</hotel>\n  </hotels>\n</availabilityRQ>"
                  },
                  "Ex3": {
                    "summary": "Search multiple rooms of the same type (by geolocation)",
                    "description": "Example request of search for two rooms for two adults each.\n\nThis is an example of availability search by GPS coordinates. You can do it by either using a circular or a rectangular area:\n\n* __Circle__: you must specify longitude and latitude as the center of the circle, radius and unit (km or mi) will determine the area size.\n\n* __Rectangle__: you must specify longitude and latitude as the top left corner, secondaryLongitude and secondaryLatitude as the bottom right corner of the rectangle.",
                    "value": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<availabilityRQ xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <stay checkIn=\"2020-06-15\" checkOut=\"2020-06-16\"/>\n  <occupancies>\n    <occupancy rooms=\"2\" adults=\"2\" children=\"0\"/>\n  </occupancies>\n  <geolocation latitude=\"39.57119\" longitude=\"2.646633999999949\" radius=\"20\" unit=\"km\"/>\n</availabilityRQ>"
                  },
                  "Ex4": {
                    "summary": "Search multiple rooms of different types (by geolocation)",
                    "description": "Example request of search for one room for two adults and one room for one adult and one child.\n\nThis is an example of availability search by GPS coordinates. You can do it by either using a circular or a rectangular area:\n\n* __Circle__: you must specify longitude and latitude as the center of the circle, radius and unit (km or mi) will determine the area size.\n\n* __Rectangle__: you must specify longitude and latitude as the top left corner, secondaryLongitude and secondaryLatitude as the bottom right corner of the rectangle.",
                    "value": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<availabilityRQ xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <stay checkIn=\"2020-06-15\" checkOut=\"2020-06-16\"/>\n  <occupancies>\n    <occupancy rooms=\"1\" adults=\"2\" children=\"0\"/>\n    <occupancy rooms=\"1\" adults=\"1\" children=\"1\">\n      <paxes>\n        <pax type=\"CH\" age=\"2\"/>\n      </paxes>\n    </occupancy>\n  </occupancies>\n  <geolocation latitude=\"39.57119\" longitude=\"2.646633999999949\" radius=\"20\" unit=\"km\"/>\n</availabilityRQ>"
                  },
                  "Ex5": {
                    "summary": "Filter examples",
                    "description": "Example request of a search with all the available filters.",
                    "value": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<availabilityRQ xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <stay checkIn=\"2020-06-15\" checkOut=\"2020-06-16\"/>\n  <occupancies>\n    <occupancy rooms=\"1\" adults=\"2\" children=\"0\"/>\n  </occupancies>\n  <hotels>\n    <hotel>77</hotel>\n    <hotel>168</hotel>\n    <hotel>264</hotel>\n    <hotel>265</hotel>\n    <hotel>265</hotel>\n    <hotel>297</hotel>\n    <hotel>311</hotel>\n  </hotels>\n  <rooms included=\"True\">\n    <room>DBT.ST</room>\n  </rooms>\n  <keywords>\n    <keyword>34</keyword>\n    <keyword>38</keyword>\n    <keyword>100</keyword>\n  </keywords>\n  <accommodations>\n    <accommodation>HOTEL</accommodation>\n    <accommodation>HOSTEL</accommodation>\n  </accommodations>\n  <boards included=\"true\">\n    <board>RO</board>\n    <board>BB</board>\n  </boards>\n  <reviews>\n    <review type=\"HOTELBEDS\" maxRate=\"5\" minRate=\"1\" minReviewCount=\"3\"/>\n  </reviews>\n  <filter\n  maxHotels=\"10\"\n  minRate=\"100.000\"\n  maxRate=\"1700.000\"\n  minCategory=\"3\"\n  maxCategory=\"5\"\n  maxRooms=\"3\"\n  maxRatesPerRoom=\"3\"\n  packaging=\"TRUE\"\n  hotelPackage=\"YES\"\n  contract=\"CG-FIT B2B\"/>\n</availabilityRQ>"
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Successful operation. The hotel availability response contains all information necessary to confirm the booking or to recheck availability for a particular hotel. It is distributed in hotel nodes which contain the information about the hotel and the different rates with their room types and board types.\n\nIf you are interested in reducing the weight of the XML or JSON response, the availability response is customizable in different profiles. Using this options, several nodes (and the description nodes as well) can be removed from the response.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/availabilityRS"
                  },
                  "example": {
                    "auditData": {
                      "processTime": "158",
                      "timestamp": "2018-12-17T16:13:19.921Z",
                      "requestHost": "212.66.164.13",
                      "serverId": "sa3RKSJACHXE79K.env",
                      "environment": "[int]",
                      "release": "4e21884df45756e39e474aab3fe4fbc6adfcbcb0",
                      "token": "c6ce466d-82fe-4fac-8f21-536485be4da3",
                      "internal": "0|A09243E85DB5477DA580C281A6DD9DBE1613|US|07|4|37||||||||||||51||1~1~2~0|0|0||0|xxxxxxxxxxxxxxxxxxxxxxxx|||"
                    },
                    "hotels": {
                      "hotels": [
                        {
                          "code": 297,
                          "name": "Occidental Playa de Palma",
                          "categoryCode": "4EST",
                          "categoryName": "4 STARS",
                          "destinationCode": "PMI",
                          "destinationName": "Majorca",
                          "zoneCode": 20,
                          "zoneName": "Playa de Palma",
                          "latitude": "39.516336",
                          "longitude": "2.749349",
                          "rooms": [
                            {
                              "code": "DBT.ST",
                              "name": "Double or Twin STANDARD",
                              "rates": [
                                {
                                  "rateKey": "20190615|20190616|W|1|297|DBT.ST|NRF-SUMMERHB|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "137.62",
                                  "allotment": 96,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "68.81",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "137.62",
                                      "from": "2019-06-14T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "13.76",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0,
                                  "promotions": [
                                    {
                                      "code": "073",
                                      "name": "Non-refundable rate. No amendments permitted"
                                    },
                                    {
                                      "code": "042",
                                      "name": "Special Offer",
                                      "remark": "Special offer - Special offer"
                                    }
                                  ]
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|DBT.ST|CG-BAR17BB|BB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "146.19",
                                  "allotment": 96,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "BB",
                                  "boardName": "BED AND BREAKFAST",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "73.09",
                                      "from": "2019-06-07T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "146.19",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "14.62",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|DBT.ST|CG-BAR17HB|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "152.91",
                                  "allotment": 96,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "76.45",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "152.91",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "15.29",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|DBT.ST|NRF-SUMMERAI|AI||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "184.50",
                                  "allotment": 96,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "AI",
                                  "boardName": "ALL INCLUSIVE",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "92.25",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "184.50",
                                      "from": "2019-06-14T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "18.45",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0,
                                  "promotions": [
                                    {
                                      "code": "073",
                                      "name": "Non-refundable rate. No amendments permitted"
                                    },
                                    {
                                      "code": "042",
                                      "name": "Special Offer",
                                      "remark": "Special offer - Special offer"
                                    }
                                  ]
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|DBT.ST|CG-BAR17AI|AI||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "205.00",
                                  "allotment": 96,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "AI",
                                  "boardName": "ALL INCLUSIVE",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "102.50",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "205.00",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "20.50",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                }
                              ]
                            },
                            {
                              "code": "APT.C2",
                              "name": "APARTMENT CAPACITY 2",
                              "rates": [
                                {
                                  "rateKey": "20190615|20190616|W|1|297|APT.C2|NRF-SUMMERHB|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "155.76",
                                  "allotment": 28,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "77.88",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "155.76",
                                      "from": "2019-06-14T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "15.58",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0,
                                  "promotions": [
                                    {
                                      "code": "073",
                                      "name": "Non-refundable rate. No amendments permitted"
                                    },
                                    {
                                      "code": "042",
                                      "name": "Special Offer",
                                      "remark": "Special offer - Special offer"
                                    }
                                  ]
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|APT.C2|CG-BAR17BB|BB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "166.35",
                                  "allotment": 28,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "BB",
                                  "boardName": "BED AND BREAKFAST",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "83.17",
                                      "from": "2019-06-07T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "166.35",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "16.64",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|APT.C2|CG-BAR17HB|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "173.07",
                                  "allotment": 28,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "86.53",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "173.07",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "17.31",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|APT.C2|NRF-SUMMERAI|AI||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "202.65",
                                  "allotment": 28,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "AI",
                                  "boardName": "ALL INCLUSIVE",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "101.33",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "202.65",
                                      "from": "2019-06-14T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "20.27",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0,
                                  "promotions": [
                                    {
                                      "code": "073",
                                      "name": "Non-refundable rate. No amendments permitted"
                                    },
                                    {
                                      "code": "042",
                                      "name": "Special Offer",
                                      "remark": "Special offer - Special offer"
                                    }
                                  ]
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|APT.C2|CG-BAR17AI|AI||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "225.16",
                                  "allotment": 28,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "AI",
                                  "boardName": "ALL INCLUSIVE",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "112.58",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "225.16",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "22.52",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                }
                              ]
                            },
                            {
                              "code": "DBT.SU",
                              "name": "Double or Twin SUPERIOR",
                              "rates": [
                                {
                                  "rateKey": "20190615|20190616|W|1|297|DBT.SU|NRF-SUMMERHB|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "155.76",
                                  "allotment": 20,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "77.88",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "155.76",
                                      "from": "2019-06-14T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "15.58",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0,
                                  "promotions": [
                                    {
                                      "code": "073",
                                      "name": "Non-refundable rate. No amendments permitted"
                                    },
                                    {
                                      "code": "042",
                                      "name": "Special Offer",
                                      "remark": "Special offer - Special offer"
                                    }
                                  ]
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|DBT.SU|CG-BAR17BB|BB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "166.35",
                                  "allotment": 20,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "BB",
                                  "boardName": "BED AND BREAKFAST",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "83.17",
                                      "from": "2019-06-07T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "166.35",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "16.64",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|DBT.SU|CG-BAR17HB|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "173.07",
                                  "allotment": 16,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "86.53",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "173.07",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "17.31",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|DBT.SU|NRF-SUMMERAI|AI||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "202.65",
                                  "allotment": 20,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "AI",
                                  "boardName": "ALL INCLUSIVE",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "101.33",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "202.65",
                                      "from": "2019-06-14T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "20.27",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0,
                                  "promotions": [
                                    {
                                      "code": "073",
                                      "name": "Non-refundable rate. No amendments permitted"
                                    },
                                    {
                                      "code": "042",
                                      "name": "Special Offer",
                                      "remark": "Special offer - Special offer"
                                    }
                                  ]
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|DBT.SU|CG-BAR17AI|AI||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "225.16",
                                  "allotment": 16,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "AI",
                                  "boardName": "ALL INCLUSIVE",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "112.58",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "225.16",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "22.52",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                }
                              ]
                            },
                            {
                              "code": "JSU.C2",
                              "name": "JUNIOR SUITE CAPACITY 2",
                              "rates": [
                                {
                                  "rateKey": "20190615|20190616|W|1|297|JSU.C2|NRF-SUMMERHB|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "166.35",
                                  "allotment": 20,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "83.17",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "166.35",
                                      "from": "2019-06-14T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "16.64",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0,
                                  "promotions": [
                                    {
                                      "code": "073",
                                      "name": "Non-refundable rate. No amendments permitted"
                                    },
                                    {
                                      "code": "042",
                                      "name": "Special Offer",
                                      "remark": "Special offer - Special offer"
                                    }
                                  ]
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|JSU.C2|CG-BAR17BB|BB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "178.12",
                                  "allotment": 20,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "BB",
                                  "boardName": "BED AND BREAKFAST",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "89.06",
                                      "from": "2019-06-07T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "178.12",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "17.81",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|JSU.C2|CG-BAR17HB|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "184.84",
                                  "allotment": 20,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "92.42",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "184.84",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "18.48",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|JSU.C2|NRF-SUMMERAI|AI||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "213.23",
                                  "allotment": 20,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "AI",
                                  "boardName": "ALL INCLUSIVE",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "106.61",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "213.23",
                                      "from": "2019-06-14T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "21.32",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0,
                                  "promotions": [
                                    {
                                      "code": "073",
                                      "name": "Non-refundable rate. No amendments permitted"
                                    },
                                    {
                                      "code": "042",
                                      "name": "Special Offer",
                                      "remark": "Special offer - Special offer"
                                    }
                                  ]
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|297|JSU.C2|CG-BAR17AI|AI||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "236.93",
                                  "allotment": 20,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "AI",
                                  "boardName": "ALL INCLUSIVE",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "118.47",
                                      "from": "2019-05-31T21:59:00.000Z"
                                    },
                                    {
                                      "amount": "236.93",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "23.69",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                }
                              ]
                            }
                          ],
                          "minRate": "137.62",
                          "maxRate": "236.93",
                          "currency": "EUR"
                        },
                        {
                          "code": 265,
                          "name": "HM Jaime III",
                          "categoryCode": "4EST",
                          "categoryName": "4 STARS",
                          "destinationCode": "PMI",
                          "destinationName": "Majorca",
                          "zoneCode": 10,
                          "zoneName": "Palma",
                          "latitude": "39.57301",
                          "longitude": "2.642626",
                          "rooms": [
                            {
                              "code": "DBT.ST",
                              "name": "Double or Twin STANDARD",
                              "rates": [
                                {
                                  "rateKey": "20190615|20190616|W|1|265|DBT.ST|CG-TODOS|BB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "165.82",
                                  "allotment": 27,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "BB",
                                  "boardName": "BED AND BREAKFAST",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "82.91",
                                      "from": "2019-06-12T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "16.58",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                }
                              ]
                            }
                          ],
                          "minRate": "165.82",
                          "maxRate": "165.82",
                          "currency": "EUR"
                        },
                        {
                          "code": 264,
                          "name": "Hesperia Mallorca Villamil",
                          "categoryCode": "5EST",
                          "categoryName": "5 STARS",
                          "destinationCode": "PMI",
                          "destinationName": "Majorca",
                          "zoneCode": 32,
                          "zoneName": "Peguera",
                          "latitude": "39.537535",
                          "longitude": "2.453104",
                          "rooms": [
                            {
                              "code": "DBL.SU",
                              "name": "DOUBLE SUPERIOR",
                              "rates": [
                                {
                                  "rateKey": "20190615|20190616|W|1|264|DBL.SU|CG-BARBBCOM20|BB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "200.03",
                                  "allotment": 34,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "BB",
                                  "boardName": "BED AND BREAKFAST",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "200.03",
                                      "from": "2019-06-12T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "8.80",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "8.80",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "20.00",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|264|DBL.SU|CG-BARHBCOM20|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "263.19",
                                  "allotment": 35,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "263.19",
                                      "from": "2019-06-12T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "8.80",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "8.80",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "26.32",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                }
                              ]
                            },
                            {
                              "code": "DBL.SU-WV",
                              "name": "DOUBLE SUPERIOR WITH VIEWS",
                              "rates": [
                                {
                                  "rateKey": "20190615|20190616|W|1|264|DBL.SU-WV|CG-BARBBCOM20|BB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "263.19",
                                  "allotment": 64,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "BB",
                                  "boardName": "BED AND BREAKFAST",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "263.19",
                                      "from": "2019-06-12T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "8.80",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "8.80",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "26.32",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|264|DBL.SU-WV|CG-BARHBCOM20|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "326.36",
                                  "allotment": 65,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "326.36",
                                      "from": "2019-06-12T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "8.80",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "8.80",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "32.64",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                }
                              ]
                            },
                            {
                              "code": "DBL.PI-1",
                              "name": "DOUBLE PREMIUM WITH VIEW",
                              "rates": [
                                {
                                  "rateKey": "20190615|20190616|W|1|264|DBL.PI-1|CG-BARBBCOM20|BB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "279.38",
                                  "allotment": 19,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "BB",
                                  "boardName": "BED AND BREAKFAST",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "279.38",
                                      "from": "2019-06-12T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "8.80",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "8.80",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "27.94",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|264|DBL.PI-1|CG-BARHBCOM20|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "342.54",
                                  "allotment": 19,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "342.54",
                                      "from": "2019-06-12T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "8.80",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "8.80",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "34.25",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                }
                              ]
                            },
                            {
                              "code": "JSU.WV",
                              "name": "JUNIOR SUITE WITH VIEWS",
                              "rates": [
                                {
                                  "rateKey": "20190615|20190616|W|1|264|JSU.WV|CG-BARBBCOM20|BB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "308.53",
                                  "allotment": 13,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "BB",
                                  "boardName": "BED AND BREAKFAST",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "308.53",
                                      "from": "2019-06-12T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "8.80",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "8.80",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "30.85",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|264|JSU.WV|CG-BARHBCOM20|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "371.70",
                                  "allotment": 13,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "371.70",
                                      "from": "2019-06-12T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "8.80",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "8.80",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "37.17",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                }
                              ]
                            },
                            {
                              "code": "SUI.WV",
                              "name": "SUITE WITH VIEWS",
                              "rates": [
                                {
                                  "rateKey": "20190615|20190616|W|1|264|SUI.WV|CG-BARBBCOM20|BB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "422.72",
                                  "allotment": 9,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "BB",
                                  "boardName": "BED AND BREAKFAST",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "422.72",
                                      "from": "2019-06-12T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "8.80",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "8.80",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "42.27",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|264|SUI.WV|CG-BARHBCOM20|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "485.89",
                                  "allotment": 9,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "485.89",
                                      "from": "2019-06-12T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "8.80",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "8.80",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "48.59",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                }
                              ]
                            }
                          ],
                          "minRate": "200.03",
                          "maxRate": "485.89",
                          "currency": "EUR"
                        },
                        {
                          "code": 77,
                          "name": "Barcelo Illetas Albatros",
                          "categoryCode": "4EST",
                          "categoryName": "4 STARS",
                          "destinationCode": "PMI",
                          "destinationName": "Majorca",
                          "zoneCode": 89,
                          "zoneName": "Illetes",
                          "latitude": "39.542286",
                          "longitude": "2.595543",
                          "rooms": [
                            {
                              "code": "DBT.SU",
                              "name": "Double or Twin SUPERIOR",
                              "rates": [
                                {
                                  "rateKey": "20190615|20190616|W|1|77|DBT.SU|CG-BAR17BB|BB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "176.43",
                                  "allotment": 59,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "BB",
                                  "boardName": "BED AND BREAKFAST",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "176.43",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "17.64",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|77|DBT.SU|CG-BAR17HB|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "212.56",
                                  "allotment": 59,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "212.56",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "21.26",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                }
                              ]
                            },
                            {
                              "code": "DBT.SS",
                              "name": "Double or Twin SIDE SEA VIEW",
                              "rates": [
                                {
                                  "rateKey": "20190615|20190616|W|1|77|DBT.SS|CG-BAR17BB|BB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "202.48",
                                  "allotment": 18,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "BB",
                                  "boardName": "BED AND BREAKFAST",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "202.48",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "20.25",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|77|DBT.SS|CG-BAR17HB|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "238.61",
                                  "allotment": 21,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "238.61",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "23.86",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                }
                              ]
                            },
                            {
                              "code": "DBT.SU-VM",
                              "name": "Double or Twin SUPERIOR FRONT  SEA VIEW",
                              "rates": [
                                {
                                  "rateKey": "20190615|20190616|W|1|77|DBT.SU-VM|CG-BAR17BB|BB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "256.25",
                                  "allotment": 8,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "BB",
                                  "boardName": "BED AND BREAKFAST",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "256.25",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "25.63",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                },
                                {
                                  "rateKey": "20190615|20190616|W|1|77|DBT.SU-VM|CG-BAR17HB|HB||1~2~0||N@A09243E85DB5477DA580C281A6DD9DBE1613",
                                  "rateClass": "NOR",
                                  "rateType": "BOOKABLE",
                                  "net": "292.38",
                                  "allotment": 9,
                                  "paymentType": "AT_WEB",
                                  "packaging": false,
                                  "boardCode": "HB",
                                  "boardName": "HALF BOARD",
                                  "cancellationPolicies": [
                                    {
                                      "amount": "292.38",
                                      "from": "2019-06-13T21:59:00.000Z"
                                    }
                                  ],
                                  "taxes": {
                                    "taxes": [
                                      {
                                        "included": false,
                                        "amount": "6.60",
                                        "currency": "EUR",
                                        "type": "TAX",
                                        "clientAmount": "6.60",
                                        "clientCurrency": "EUR"
                                      },
                                      {
                                        "included": true,
                                        "percent": "10.00",
                                        "amount": "29.24",
                                        "currency": "EUR",
                                        "type": "TAX"
                                      }
                                    ],
                                    "allIncluded": false
                                  },
                                  "rooms": 1,
                                  "adults": 2,
                                  "children": 0
                                }
                              ]
                            }
                          ],
                          "minRate": "176.43",
                          "maxRate": "292.38",
                          "currency": "EUR"
                        }
                      ],
                      "checkIn": "2019-06-15T00:00:00.000Z",
                      "total": 4,
                      "checkOut": "2019-06-16T00:00:00.000Z"
                    }
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/availabilityRS"
                  },
                  "example": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<availabilityRS\n    xmlns=\"http://www.hotelbeds.com/schemas/messages\"\n    xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" schemaLocation=\"http://www.hotelbeds.com/schemas/messages\">\n    <auditData processTime=\"51\" timestamp=\"2018-12-17 16:17:17.063\" requestHost=\"212.66.164.13\" serverId=\"sa3RKSJACHXE79K.env\" environment=\"[int]\" release=\"4e21884df45756e39e474aab3fe4fbc6adfcbcb0\" token=\"d9c3b40f-896f-4cdc-8f24-1e8a87bfd2dd\" internal=\"0|9ECC4527810D418C8C9420715BEC35D01617|ES|07|4|37||||||N|AT_WEB|||||51||1~1~2~0|0|0||0|993ejez5dxkp758y6evrh9xc|||\"/>\n    <hotels checkIn=\"2019-06-15\" total=\"4\" checkOut=\"2019-06-16\">\n        <hotel code=\"297\" name=\"Occidental Playa de Palma\" categoryCode=\"4EST\" categoryName=\"4 STARS\" destinationCode=\"PMI\" destinationName=\"Majorca\" zoneCode=\"20\" zoneName=\"Playa de Palma\" latitude=\"39.516336\" longitude=\"2.749349\" minRate=\"137.62\" maxRate=\"236.93\" currency=\"EUR\">\n            <rooms>\n                <room code=\"DBT.ST\" name=\"Double or Twin STANDARD\">\n                    <rates>\n                        <rate rateKey=\"20190615|20190616|W|1|297|DBT.ST|NRF-SUMMERHB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"137.62\" allotment=\"96\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"68.81\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"137.62\" from=\"2019-06-14T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"13.76\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                            <promotions>\n                                <promotion code=\"073\" name=\"Non-refundable rate. No amendments permitted\"/>\n                                <promotion code=\"042\" name=\"Special Offer\" remark=\"Special offer - Special offer\"/>\n                            </promotions>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|DBT.ST|CG-BAR17BB|BB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"146.19\" allotment=\"96\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"73.09\" from=\"2019-06-07T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"146.19\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"14.62\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|DBT.ST|CG-BAR17HB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"152.91\" allotment=\"96\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"76.45\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"152.91\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"15.29\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|DBT.ST|NRF-SUMMERAI|AI||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"184.50\" allotment=\"96\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"AI\" boardName=\"ALL INCLUSIVE\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"92.25\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"184.50\" from=\"2019-06-14T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"18.45\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                            <promotions>\n                                <promotion code=\"073\" name=\"Non-refundable rate. No amendments permitted\"/>\n                                <promotion code=\"042\" name=\"Special Offer\" remark=\"Special offer - Special offer\"/>\n                            </promotions>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|DBT.ST|CG-BAR17AI|AI||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"205.00\" allotment=\"96\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"AI\" boardName=\"ALL INCLUSIVE\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"102.50\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"205.00\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"20.50\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                    </rates>\n                </room>\n                <room code=\"APT.C2\" name=\"APARTMENT CAPACITY 2\">\n                    <rates>\n                        <rate rateKey=\"20190615|20190616|W|1|297|APT.C2|NRF-SUMMERHB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"155.76\" allotment=\"28\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"77.88\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"155.76\" from=\"2019-06-14T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"15.58\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                            <promotions>\n                                <promotion code=\"073\" name=\"Non-refundable rate. No amendments permitted\"/>\n                                <promotion code=\"042\" name=\"Special Offer\" remark=\"Special offer - Special offer\"/>\n                            </promotions>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|APT.C2|CG-BAR17BB|BB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"166.35\" allotment=\"28\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"83.17\" from=\"2019-06-07T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"166.35\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"16.64\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|APT.C2|CG-BAR17HB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"173.07\" allotment=\"28\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"86.53\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"173.07\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"17.31\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|APT.C2|NRF-SUMMERAI|AI||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"202.65\" allotment=\"28\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"AI\" boardName=\"ALL INCLUSIVE\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"101.33\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"202.65\" from=\"2019-06-14T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"20.27\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                            <promotions>\n                                <promotion code=\"073\" name=\"Non-refundable rate. No amendments permitted\"/>\n                                <promotion code=\"042\" name=\"Special Offer\" remark=\"Special offer - Special offer\"/>\n                            </promotions>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|APT.C2|CG-BAR17AI|AI||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"225.16\" allotment=\"28\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"AI\" boardName=\"ALL INCLUSIVE\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"112.58\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"225.16\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"22.52\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                    </rates>\n                </room>\n                <room code=\"DBT.SU\" name=\"Double or Twin SUPERIOR\">\n                    <rates>\n                        <rate rateKey=\"20190615|20190616|W|1|297|DBT.SU|NRF-SUMMERHB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"155.76\" allotment=\"20\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"77.88\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"155.76\" from=\"2019-06-14T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"15.58\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                            <promotions>\n                                <promotion code=\"073\" name=\"Non-refundable rate. No amendments permitted\"/>\n                                <promotion code=\"042\" name=\"Special Offer\" remark=\"Special offer - Special offer\"/>\n                            </promotions>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|DBT.SU|CG-BAR17BB|BB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"166.35\" allotment=\"20\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"83.17\" from=\"2019-06-07T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"166.35\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"16.64\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|DBT.SU|CG-BAR17HB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"173.07\" allotment=\"16\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"86.53\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"173.07\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"17.31\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|DBT.SU|NRF-SUMMERAI|AI||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"202.65\" allotment=\"20\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"AI\" boardName=\"ALL INCLUSIVE\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"101.33\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"202.65\" from=\"2019-06-14T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"20.27\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                            <promotions>\n                                <promotion code=\"073\" name=\"Non-refundable rate. No amendments permitted\"/>\n                                <promotion code=\"042\" name=\"Special Offer\" remark=\"Special offer - Special offer\"/>\n                            </promotions>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|DBT.SU|CG-BAR17AI|AI||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"225.16\" allotment=\"16\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"AI\" boardName=\"ALL INCLUSIVE\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"112.58\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"225.16\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"22.52\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                    </rates>\n                </room>\n                <room code=\"JSU.C2\" name=\"JUNIOR SUITE CAPACITY 2\">\n                    <rates>\n                        <rate rateKey=\"20190615|20190616|W|1|297|JSU.C2|NRF-SUMMERHB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"166.35\" allotment=\"20\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"83.17\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"166.35\" from=\"2019-06-14T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"16.64\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                            <promotions>\n                                <promotion code=\"073\" name=\"Non-refundable rate. No amendments permitted\"/>\n                                <promotion code=\"042\" name=\"Special Offer\" remark=\"Special offer - Special offer\"/>\n                            </promotions>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|JSU.C2|CG-BAR17BB|BB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"178.12\" allotment=\"20\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"89.06\" from=\"2019-06-07T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"178.12\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"17.81\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|JSU.C2|CG-BAR17HB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"184.84\" allotment=\"20\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"92.42\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"184.84\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"18.48\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|JSU.C2|NRF-SUMMERAI|AI||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"213.23\" allotment=\"20\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"AI\" boardName=\"ALL INCLUSIVE\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"106.61\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"213.23\" from=\"2019-06-14T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"21.32\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                            <promotions>\n                                <promotion code=\"073\" name=\"Non-refundable rate. No amendments permitted\"/>\n                                <promotion code=\"042\" name=\"Special Offer\" remark=\"Special offer - Special offer\"/>\n                            </promotions>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|297|JSU.C2|CG-BAR17AI|AI||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"236.93\" allotment=\"20\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"AI\" boardName=\"ALL INCLUSIVE\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"118.47\" from=\"2019-05-31T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"236.93\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"23.69\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                    </rates>\n                </room>\n            </rooms>\n        </hotel>\n        <hotel code=\"265\" name=\"HM Jaime III\" categoryCode=\"4EST\" categoryName=\"4 STARS\" destinationCode=\"PMI\" destinationName=\"Majorca\" zoneCode=\"10\" zoneName=\"Palma\" latitude=\"39.57301\" longitude=\"2.642626\" minRate=\"165.82\" maxRate=\"165.82\" currency=\"EUR\">\n            <rooms>\n                <room code=\"DBT.ST\" name=\"Double or Twin STANDARD\">\n                    <rates>\n                        <rate rateKey=\"20190615|20190616|W|1|265|DBT.ST|CG-TODOS|BB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"165.82\" allotment=\"27\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"82.91\" from=\"2019-06-12T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"16.58\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                    </rates>\n                </room>\n            </rooms>\n        </hotel>\n        <hotel code=\"264\" name=\"Hesperia Mallorca Villamil\" categoryCode=\"5EST\" categoryName=\"5 STARS\" destinationCode=\"PMI\" destinationName=\"Majorca\" zoneCode=\"32\" zoneName=\"Peguera\" latitude=\"39.537535\" longitude=\"2.453104\" minRate=\"200.03\" maxRate=\"485.89\" currency=\"EUR\">\n            <rooms>\n                <room code=\"DBL.SU\" name=\"DOUBLE SUPERIOR\">\n                    <rates>\n                        <rate rateKey=\"20190615|20190616|W|1|264|DBL.SU|CG-BARBBCOM20|BB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"200.03\" allotment=\"34\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"200.03\" from=\"2019-06-12T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"8.80\" currency=\"EUR\" type=\"TAX\" clientAmount=\"8.80\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"20.00\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|264|DBL.SU|CG-BARHBCOM20|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"263.19\" allotment=\"35\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"263.19\" from=\"2019-06-12T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"8.80\" currency=\"EUR\" type=\"TAX\" clientAmount=\"8.80\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"26.32\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                    </rates>\n                </room>\n                <room code=\"DBL.SU-WV\" name=\"DOUBLE SUPERIOR WITH VIEWS\">\n                    <rates>\n                        <rate rateKey=\"20190615|20190616|W|1|264|DBL.SU-WV|CG-BARBBCOM20|BB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"263.19\" allotment=\"64\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"263.19\" from=\"2019-06-12T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"8.80\" currency=\"EUR\" type=\"TAX\" clientAmount=\"8.80\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"26.32\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|264|DBL.SU-WV|CG-BARHBCOM20|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"326.36\" allotment=\"65\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"326.36\" from=\"2019-06-12T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"8.80\" currency=\"EUR\" type=\"TAX\" clientAmount=\"8.80\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"32.64\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                    </rates>\n                </room>\n                <room code=\"DBL.PI-1\" name=\"DOUBLE PREMIUM WITH VIEW\">\n                    <rates>\n                        <rate rateKey=\"20190615|20190616|W|1|264|DBL.PI-1|CG-BARBBCOM20|BB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"279.38\" allotment=\"19\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"279.38\" from=\"2019-06-12T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"8.80\" currency=\"EUR\" type=\"TAX\" clientAmount=\"8.80\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"27.94\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|264|DBL.PI-1|CG-BARHBCOM20|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"342.54\" allotment=\"19\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"342.54\" from=\"2019-06-12T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"8.80\" currency=\"EUR\" type=\"TAX\" clientAmount=\"8.80\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"34.25\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                    </rates>\n                </room>\n                <room code=\"JSU.WV\" name=\"JUNIOR SUITE WITH VIEWS\">\n                    <rates>\n                        <rate rateKey=\"20190615|20190616|W|1|264|JSU.WV|CG-BARBBCOM20|BB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"308.53\" allotment=\"13\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"308.53\" from=\"2019-06-12T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"8.80\" currency=\"EUR\" type=\"TAX\" clientAmount=\"8.80\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"30.85\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|264|JSU.WV|CG-BARHBCOM20|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"371.70\" allotment=\"13\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"371.70\" from=\"2019-06-12T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"8.80\" currency=\"EUR\" type=\"TAX\" clientAmount=\"8.80\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"37.17\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                    </rates>\n                </room>\n                <room code=\"SUI.WV\" name=\"SUITE WITH VIEWS\">\n                    <rates>\n                        <rate rateKey=\"20190615|20190616|W|1|264|SUI.WV|CG-BARBBCOM20|BB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"422.72\" allotment=\"9\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"422.72\" from=\"2019-06-12T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"8.80\" currency=\"EUR\" type=\"TAX\" clientAmount=\"8.80\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"42.27\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|264|SUI.WV|CG-BARHBCOM20|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"485.89\" allotment=\"9\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"485.89\" from=\"2019-06-12T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"8.80\" currency=\"EUR\" type=\"TAX\" clientAmount=\"8.80\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"48.59\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                    </rates>\n                </room>\n            </rooms>\n        </hotel>\n        <hotel code=\"77\" name=\"Barcelo Illetas Albatros\" categoryCode=\"4EST\" categoryName=\"4 STARS\" destinationCode=\"PMI\" destinationName=\"Majorca\" zoneCode=\"89\" zoneName=\"Illetes\" latitude=\"39.542286\" longitude=\"2.595543\" minRate=\"176.43\" maxRate=\"292.38\" currency=\"EUR\">\n            <rooms>\n                <room code=\"DBT.SU\" name=\"Double or Twin SUPERIOR\">\n                    <rates>\n                        <rate rateKey=\"20190615|20190616|W|1|77|DBT.SU|CG-BAR17BB|BB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"176.43\" allotment=\"59\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"176.43\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"17.64\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|77|DBT.SU|CG-BAR17HB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"212.56\" allotment=\"59\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"212.56\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"21.26\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                    </rates>\n                </room>\n                <room code=\"DBT.SS\" name=\"Double or Twin SIDE SEA VIEW\">\n                    <rates>\n                        <rate rateKey=\"20190615|20190616|W|1|77|DBT.SS|CG-BAR17BB|BB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"202.48\" allotment=\"18\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"202.48\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"20.25\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|77|DBT.SS|CG-BAR17HB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"238.61\" allotment=\"21\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"238.61\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"23.86\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                    </rates>\n                </room>\n                <room code=\"DBT.SU-VM\" name=\"Double or Twin SUPERIOR FRONT  SEA VIEW\">\n                    <rates>\n                        <rate rateKey=\"20190615|20190616|W|1|77|DBT.SU-VM|CG-BAR17BB|BB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"256.25\" allotment=\"8\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"256.25\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"25.63\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                        <rate rateKey=\"20190615|20190616|W|1|77|DBT.SU-VM|CG-BAR17HB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617\" rateClass=\"NOR\" rateType=\"BOOKABLE\" net=\"292.38\" allotment=\"9\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"HB\" boardName=\"HALF BOARD\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"292.38\" from=\"2019-06-13T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\" type=\"TAX\" clientAmount=\"6.60\" clientCurrency=\"EUR\"/>\n                                <tax included=\"true\" percent=\"10.00\" amount=\"29.24\" currency=\"EUR\" type=\"TAX\"/>\n                            </taxes>\n                        </rate>\n                    </rates>\n                </room>\n            </rooms>\n        </hotel>\n    </hotels>\n</availabilityRS>"
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
            "406": {
              "$ref": "#/components/responses/406"
            },
            "415": {
              "$ref": "#/components/responses/415"
            },
            "429": {
              "$ref": "#/components/responses/429"
            },
            "500": {
              "$ref": "#/components/responses/500"
            }
          },
          "deprecated": false,
          "x-codegen-request-body-name": "body"
        }
      },
      "/checkrates": {
        "post": {
          "tags": [
            "CheckRate"
          ],
          "summary": "Check rate",
          "description": "CheckRate is an _optional_ operation used to assess and valuate the rate before the actual booking. CheckRate returns the same information as the Availability response for a hotel rate with up-to-date price, along with additional information regarding the rate: rate breakdown, rate comments and upselling options.\n\nThe CheckRate method can complement the booking process, as it returns additional information to the availability request. However, when the rateType value is 'RECHECK', the CheckRate method is mandatory.\n\nBesides the details for the rate, CheckRate has the option to also return information of higher rates of the same hotel being checked. This is called Upselling.\n\nUpselling returns additional room options, each with its own rate key, allowing you to upgrade the stay quality in room category and rate plan even after the CheckRate operation has been performed.\n\nTimeout for this operation is 15 seconds.\n",
          "operationId": "checkRate",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderContent"
            }
          ],
          "requestBody": {
            "description": "Definition and examples of request body of CheckRate operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/checkRateRQ"
                },
                "examples": {
                  "Ex1": {
                    "summary": "Checkrate for one room",
                    "description": "Example request of a Checkrate for one room for two adults.\n\nThis example uses one rateKey, representing a room for two adults.",
                    "value": {
                      "rooms": [
                        {
                          "rateKey": "20200615|20200616|W|1|311|DBT.ST|PVP-SHORTSTAY|AI||1~2~0||N@08870BAE87754721542353710729AAES00000010000000007221346"
                        }
                      ]
                    }
                  },
                  "Ex2": {
                    "summary": "Checkrate for one room with multiple passenger types",
                    "description": "Example request of a Checkrate for one room for one adult and two children.\n\nThis example uses one rateKey, representing a room for one adult and two children.",
                    "value": {
                      "rooms": [
                        {
                          "rateKey": "20200615|20200616|W|102|3588|DBL.ST-1|NRF-BAR|RO||1~1~2|5~6|N@03~~20a8f~-1305130306~N~8A26602F7D7E428158737624019800AAES000000500000000072247e"
                        }
                      ]
                    }
                  },
                  "Ex3": {
                    "summary": "Checkrate for multiple rooms of the same type",
                    "description": "Example request of a Checkrate for two rooms for two adults each.\n\nThis example uses one rateKey, representing two rooms for two adults each. Multiple rooms of the same type can be booked with the same rateKey, as long as the number of rooms was properly defined in the occupancies element of the Availability step.",
                    "value": {
                      "rooms": [
                        {
                          "rateKey": "20190615|20190616|W|1|74400|DBT.ST|NRF-PVP-BB|BB||2~2~0||N@8C91991695504401542298099837AAES0000011000000001010b5"
                        }
                      ]
                    }
                  },
                  "Ex4": {
                    "summary": "Checkrate for multiple rooms of different types",
                    "description": "Example request of a Checkrate for one room for two adults and one room for one adult and one child.\n\nThis example uses two rateKey, each representing the different types of rooms. In order to book rooms of different types, different rateKeys are to be used. To obtain those rateKeys for those rooms, different occupancies should be defined in the occupancies element of the Availability step.",
                    "value": {
                      "rooms": [
                        {
                          "rateKey": "20190615|20190616|W|1|74400|DBT.ST|NRF-PVP-BB|BB||1~2~0||N@8C91991695504401542298099837AAES0000011000000001010b5"
                        },
                        {
                          "rateKey": "20190615|20190616|W|1|74400|DBT.ST|NRF-PVP-BB|BB||1~1~1|2|N@8C91991695504401542298099837AAES0000011000000001010b5"
                        }
                      ]
                    }
                  }
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/checkRateRQ"
                },
                "examples": {
                  "Ex1": {
                    "summary": "Checkrate for one room",
                    "description": "Example request of a Checkrate for one room for two adults.\n\nThis example uses one rateKey, representing a room for two adults.",
                    "value": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<checkRateRQ xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <rooms>\n    <room rateKey=\"20200615|20200616|W|1|311|DBT.ST|PVP-SHORTSTAY|AI||1~2~0||N@08870BAE87754721542353710729AAES00000010000000007221346\"/>\n  </rooms>\n</checkRateRQ>"
                  },
                  "Ex2": {
                    "summary": "Checkrate for one room with multiple passenger types",
                    "description": "Example request of a Checkrate for one room for one adult and two children.\n\nThis example uses one rateKey, representing a room for one adult and two children.",
                    "value": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<checkRateRQ xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <rooms>\n    <room rateKey=\"20200615|20200616|W|102|3588|DBL.ST-1|NRF-BAR|RO||1~1~2|5~6|N@03~~20a8f~-1305130306~N~8A26602F7D7E428158737624019800AAES000000500000000072247e\"/>\n  </rooms>\n</checkRateRQ>"
                  },
                  "Ex3": {
                    "summary": "Checkrate for multiple rooms of the same type",
                    "description": "Example request of a Checkrate for two rooms for two adults each.\n\nThis example uses one rateKey, representing two rooms for two adults each. Multiple rooms of the same type can be booked with the same rateKey, as long as the number of rooms was properly defined in the occupancies element of the Availability step.",
                    "value": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<checkRateRQ xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <rooms>\n    <room rateKey=\"20190615|20190616|W|1|74400|DBT.ST|NRF-PVP-BB|BB||2~2~0||N@8C91991695504401542298099837AAES0000011000000001010b5\"/>\n  </rooms>\n</checkRateRQ>"
                  },
                  "Ex4": {
                    "summary": "Checkrate for multiple rooms of different types",
                    "description": "Example request of a Checkrate for one room for two adults and one room for one adult and one child.\n\nThis example uses two rateKey, each representing the different types of rooms. In order to book rooms of different types, different rateKeys are to be used. To obtain those rateKeys for those rooms, different occupancies should be defined in the occupancies element of the Availability step",
                    "value": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<checkRateRQ xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <rooms>\n    <room rateKey=\"20190615|20190616|W|1|74400|DBT.ST|NRF-PVP-BB|BB||1~2~0||N@8C91991695504401542298099837AAES0000011000000001010b5\"/>\n    <room rateKey=\"20190615|20190616|W|1|74400|DBT.ST|NRF-PVP-BB|BB||1~1~1|2|N@8C91991695504401542298099837AAES0000011000000001010b5\"/>  \n  </rooms>\n</checkRateRQ>"
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Successful operation.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/checkRateRS"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/checkRateRS"
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
            "406": {
              "$ref": "#/components/responses/406"
            },
            "410": {
              "$ref": "#/components/responses/410"
            },
            "415": {
              "$ref": "#/components/responses/415"
            },
            "429": {
              "$ref": "#/components/responses/429"
            },
            "500": {
              "$ref": "#/components/responses/500"
            }
          },
          "deprecated": false,
          "x-codegen-request-body-name": "body"
        }
      },
      "/bookings": {
        "post": {
          "tags": [
            "Booking"
          ],
          "summary": "Booking confirmation",
          "description": "The Booking operation requests a reservation confirmation for the specified ratekey or ratekeys.\n\nBookingAPI does not support on-request confirmations. All confirmations are instant confirmations.\n\nTimeout for this operation is 60 seconds.",
          "operationId": "booking",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderContent"
            }
          ],
          "requestBody": {
            "description": "Definition and examples of request body of Booking operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/bookingRQ"
                },
                "examples": {
                  "Ex1": {
                    "summary": "Booking one room",
                    "description": "Example request of booking for one room for two adults.",
                    "value": {
                      "holder": {
                        "name": "HolderFirstName",
                        "surname": "HolderLastName"
                      },
                      "rooms": [
                        {
                          "rateKey": "20190315|20190316|W|1|311|DBT.ST|PVP-SHORTSTAY|AI||1~2~0||N@08870BAE87754721542353710729AAES00000010000000007221346",
                          "paxes": [
                            {
                              "roomId": 1,
                              "type": "AD",
                              "name": "First Adult Name",
                              "surname": "Surname"
                            },
                            {
                              "roomId": 1,
                              "type": "AD",
                              "name": "Second Adult Name",
                              "surname": "Surname"
                            }
                          ]
                        }
                      ],
                      "clientReference": "IntegrationAgency",
                      "remark": "Booking remarks are to be written here.",
                      "tolerance": 2
                    }
                  },
                  "Ex2": {
                    "summary": "Booking one room with multiple passenger types",
                    "description": "Example request of booking of one room for one adult and two children.",
                    "value": {
                      "holder": {
                        "name": "HolderFirstName",
                        "surname": "HolderLastName"
                      },
                      "rooms": [
                        {
                          "rateKey": "20190615|20190616|W|1|1533|DBL.ST-2|CG BAR RO|RO||1~1~2|5~6|N@1E8CCBDE295E4F51542357273665AAES00000080000000007240d9",
                          "paxes": [
                            {
                              "roomId": 1,
                              "type": "AD",
                              "name": "First Adult Name",
                              "surname": "Surname"
                            },
                            {
                              "roomId": 1,
                              "type": "CH",
                              "name": "Second Adult Name",
                              "surname": "Surname"
                            },
                            {
                              "roomId": 1,
                              "type": "CH",
                              "name": "First Child Name",
                              "surname": "Surname"
                            }
                          ]
                        }
                      ],
                      "clientReference": "IntegrationAgency",
                      "remark": "Booking remarks are to be written here."
                    }
                  },
                  "Ex3": {
                    "summary": "Booking multiple rooms of the same type",
                    "description": "Example request of booking for two rooms for two adults each.\n\nTo book multiple rooms of the same type you just have to add the additional pax elements while increasing the roomId attribute for the passengers of each subsequent room. This is done to assign this extra passengers (for which there would normally be no space) to additional rooms of the same type.\n\nYou can observe this in the below example. The room type being booked is a Double Standard, with room for two passengers. The two first passengers are assigned to the first room with **roomId = 1**, and the two additional passengers are assigned to a second room of the same type, with **roomId = 2**.",
                    "value": {
                      "holder": {
                        "name": "HolderFirstName",
                        "surname": "HolderLastName"
                      },
                      "rooms": [
                        {
                          "rateKey": "20190615|20190616|W|1|1533|DBL.ST|CG BAR RO|RO||2~2~0||N@7AA7EF7F12254801542359544456AAES0000006000000000725a165",
                          "paxes": [
                            {
                              "roomId": 1,
                              "type": "AD",
                              "name": "First Adult Name",
                              "surname": "Surname"
                            },
                            {
                              "roomId": 1,
                              "type": "AD",
                              "name": "Second Adult Name",
                              "surname": "Surname"
                            },
                            {
                              "roomId": 2,
                              "type": "AD",
                              "name": "Third Adult Name",
                              "surname": "Surname"
                            },
                            {
                              "roomId": 2,
                              "type": "AD",
                              "name": "Fourth Adult Name",
                              "surname": "Surname"
                            }
                          ]
                        }
                      ],
                      "clientReference": "IntegrationAgency",
                      "remark": "Booking remarks are to be written here."
                    }
                  },
                  "Ex4": {
                    "summary": "Booking multiple rooms of different types",
                    "description": "Example request of a booking for one room for two adults and one room for one adult and one child.\n\nIn order to book multiple rooms of different type you just have to add as many room elements as rooms you want to book, with their corresponding rateKeys and the appropriate pax elements for each room.\n\nThis structure can also be used to book multiple rooms of the same type if you use the same rateKey, but will result in bigger requests in size.",
                    "value": {
                      "holder": {
                        "name": "HolderFirstName",
                        "surname": "HolderLastName"
                      },
                      "rooms": [
                        {
                          "rateKey": "20190615|20190616|W|1|74400|DBT.ST|NRF-PVP-BB|BB||1~2~0||N@8C91991695504401542298099837AAES0000011000000001010b5",
                          "paxes": [
                            {
                              "roomId": 1,
                              "type": "AD",
                              "name": "First Adult Name",
                              "surname": "Surname"
                            },
                            {
                              "roomId": 1,
                              "type": "AD",
                              "name": "Second Adult Name",
                              "surname": "Surname"
                            }
                          ]
                        },
                        {
                          "rateKey": "20190615|20190616|W|1|74400|DBT.ST|NRF-PVP-BB|BB||1~1~1|2|N@8C91991695504401542298099837AAES0000011000000001010b5",
                          "paxes": [
                            {
                              "roomId": 1,
                              "type": "AD",
                              "name": "Third Adult Name",
                              "surname": "Surname"
                            },
                            {
                              "roomId": 1,
                              "type": "CH",
                              "name": "First Child Name",
                              "surname": "Surname"
                            }
                          ]
                        }
                      ],
                      "clientReference": "IntegrationAgency",
                      "remark": "Booking remarks are to be written here."
                    }
                  },
                  "Ex5": {
                    "summary": "Booking with credit card",
                    "description": "Example of how to add credit card details in the booking request for hotels who demand this kind of payment.",
                    "value": {
                      "holder": {
                        "name": "HolderFirstName",
                        "surname": "HolderLastName"
                      },
                      "rooms": [
                        {
                          "rateKey": "20190315|20190316|W|1|311|DBT.ST|PVP-SHORTSTAY|AI||1~2~0||N@08870BAE87754721542353710729AAES00000010000000007221346",
                          "paxes": [
                            {
                              "roomId": 1,
                              "type": "AD",
                              "name": "First Adult Name",
                              "surname": "Surname"
                            },
                            {
                              "roomId": 1,
                              "type": "AD",
                              "name": "Second Adult Name",
                              "surname": "Surname"
                            }
                          ]
                        }
                      ],
                      "clientReference": "IntegrationAgency",
                      "remark": "Booking remarks are to be written here.",
                      "tolerance": 2,
                      "paymentData": {
                        "paymentCard": {
                          "cardHolderName": "CardHolderName",
                          "cardType": "VI",
                          "cardNumber": "4444333322221111",
                          "expiryDate": "0320",
                          "cardCVC": "123"
                        },
                        "contactData": {
                          "email": "integration@hotelbeds.com",
                          "phoneNumber": "654654654"
                        }
                      }
                    }
                  }
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/bookingRQ"
                },
                "examples": {
                  "Ex1": {
                    "summary": "Booking one room",
                    "description": "Example request of booking for one room for two adults.",
                    "value": "<bookingRQ xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <holder name=\"HolderFirstName\" surname=\"HolderLastName\"/>\n  <clientReference>IntegrationAgency</clientReference>\n  <rooms>\n      <room rateKey=\"20190315|20190316|W|1|311|DBT.ST|PVP-SHORTSTAY|AI||1~2~0||N@08870BAE87754721542353710729AAES00000010000000007221346\">\n          <paxes>\n              <pax roomId=\"1\" type=\"AD\" name=\"First Adult Name\" surname=\"Surname\"/>\n              <pax roomId=\"1\" type=\"AD\" name=\"Second Adult Name\" surname=\"Surname\"/>\n          </paxes>\n      </room>\n  </rooms>\n  <remark>Booking remarks are to be written here.</remark>\n  <tolerance>2.00</tolerance>\n</bookingRQ>"
                  },
                  "Ex2": {
                    "summary": "Booking one room with multiple passenger types",
                    "description": "Example request of booking of one room for one adult and two children.",
                    "value": "<bookingRQ xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <holder name=\"HolderFirstName\" surname=\"HolderLastName\"/>\n  <clientReference>IntegrationAgency</clientReference>\n  <rooms>\n    <room rateKey=\"20190615|20190616|W|1|1533|DBL.ST-2|CG BAR RO|RO||1~1~2|5~6|N@1E8CCBDE295E4F51542357273665AAES00000080000000007240d9\">\n      <paxes>\n        <pax roomId=\"1\" type=\"AD\" name=\"First Adult Name\" surname=\"Surname\"/>\n        <pax roomId=\"1\" type=\"CH\" name=\"First Child Name\" surname=\"Surname\"/>\n        <pax roomId=\"1\" type=\"CH\" name=\"Seconf Adult Name\" surname=\"Surname\"/>\n      </paxes>\n    </room>\n  </rooms>\n  <remark>Booking remarks are to be written here.</remark>\n</bookingRQ>"
                  },
                  "Ex3": {
                    "summary": "Booking multiple rooms of the same type",
                    "description": "Example request of booking for two rooms for two adults each.\n\nTo book multiple rooms of the same type you just have to add the additional pax elements while increasing the roomId attribute for the passengers of each subsequent room. This is done to assign this extra passengers (for which there would normally be no space) to additional rooms of the same type.\n\nYou can observe this in the below example. The room type being booked is a Double Standard, with room for two passengers. The two first passengers are assigned to the first room with **roomId = 1**, and the two additional passengers are assigned to a second room of the same type, with **roomId = 2**.",
                    "value": "<bookingRQ xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <holder name=\"HolderFirstName\" surname=\"HolderLastName\"/>\n  <clientReference>IntegrationAgency</clientReference>\n  <rooms>\n    <room rateKey=\"20190615|20190616|W|1|1533|DBL.ST|CG BAR RO|RO||2~2~0||N@7AA7EF7F12254801542359544456AAES0000006000000000725a165\">\n      <paxes>\n        <pax roomId=\"1\" type=\"AD\" name=\"First Adult Name\" surname=\"Surname\"/>\n        <pax roomId=\"1\" type=\"AD\" name=\"Second Adult Name\" surname=\"Surname\"/>\n        <pax roomId=\"2\" type=\"AD\" name=\"Third Adult Name\" surname=\"Surname\"/>\n        <pax roomId=\"2\" type=\"AD\" name=\"Fourth Adult Name\" surname=\"Surname\"/>\n      </paxes>\n    </room>\n  </rooms>\n  <remark>Booking remarks are to be written here.</remark>\n</bookingRQ>"
                  },
                  "Ex4": {
                    "summary": "Booking multiple rooms of different types",
                    "description": "Example request of a booking for one room for two adults and one room for one adult and one child.\n\nIn order to book multiple rooms of different type you just have to add as many room elements as rooms you want to book, with their corresponding rateKeys and the appropriate pax elements for each room.\n\nThis structure can also be used to book multiple rooms of the same type if you use the same rateKey, but will result in bigger requests in size.",
                    "value": "<bookingRQ xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <holder name=\"HolderFirstName\" surname=\"HolderLastName\"/>\n  <clientReference>IntegrationAgency</clientReference>\n  <rooms>\n    <room rateKey=\"20190615|20190616|W|1|74400|DBT.ST|NRF-PVP-BB|BB||1~2~0||N@8C91991695504401542298099837AAES0000011000000001010b5\">\n      <paxes>\n        <pax roomId=\"1\" type=\"AD\" name=\"First Adult Name\" surname=\"Surname\"/>\n        <pax roomId=\"1\" type=\"AD\" name=\"Second Child Name\" surname=\"Surname\"/>\n      </paxes>\n    </room>\n    <room rateKey=\"20190615|20190616|W|1|74400|DBT.ST|NRF-PVP-BB|BB||1~1~1|2|N@8C91991695504401542298099837AAES0000011000000001010b5\">\n      <paxes>\n        <pax roomId=\"1\" type=\"AD\" name=\"Third Adult Name\" surname=\"Surname\"/>\n        <pax roomId=\"1\" type=\"CH\" name=\"First Child Name\" surname=\"Surname\"/>\n      </paxes>\n    </room>\n  </rooms>\n  <remark>Booking remarks are to be written here.</remark>\n</bookingRQ>"
                  },
                  "Ex5": {
                    "summary": "Booking with credit card",
                    "description": "Example of how to add credit card details in the booking request for hotels who demand this kind of payment.",
                    "value": "<bookingRQ xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <holder name=\"HolderFirstName\" surname=\"HolderLastName\"/>\n  <clientReference>IntegrationAgency</clientReference>\n  <rooms>\n      <room rateKey=\"20190315|20190316|W|1|311|DBT.ST|PVP-SHORTSTAY|AI||1~2~0||N@08870BAE87754721542353710729AAES00000010000000007221346\">\n          <paxes>\n              <pax roomId=\"1\" type=\"AD\" name=\"First Adult Name\" surname=\"Surname\"/>\n              <pax roomId=\"1\" type=\"AD\" name=\"Second Adult Name\" surname=\"Surname\"/>\n          </paxes>\n      </room>\n  </rooms>\n  <remark>Booking remarks are to be written here.</remark>\n  <tolerance>2.00</tolerance>\n  <paymentData>\n    <paymentCard>\n      <cardHolderName>CardHolderName</cardHolderName>\n      <cardType>VI</cardType>\n      <cardNumber>4444333322221111</cardNumber>\n      <expiryDate>0320</expiryDate>\n      <cardCVC>123</cardCVC>\n    </paymentCard>\n    <contactData>\n      <email>integration@hotelbeds.com</email>\n      <phoneNumber>654654654</phoneNumber>\n    </contactData>\n  </paymentData>\n</bookingRQ>"
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "When the confirmation of a rateKey is successful; the booking reference is provided, along with key information of the booking, which includes:\n\n  * Hotel confirmed\n  * Holder and pax confirmed\n  * Rate confirmed with the confirmed amounts and dates\n\nThe response also contains the price breakdown, cancellation policies, supplements, and discounts.\n\nPlease make sure to **keep the booking reference** of all bookings performed with your credentials, as they are needed for post booking operations such as modification or cancellation.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/bookingRS"
                  },
                  "examples": {
                    "Ex1": {
                      "summary": "Booking one room for two adults",
                      "description": "Booking one room for two adults",
                      "value": {
                        "auditData": {
                          "processTime": "884",
                          "timestamp": "2018-11-16 11:04:56.616",
                          "requestHost": "212.66.164.27",
                          "serverId": "ip-10-185-90-99.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery#A+",
                          "environment": "[awseuwest1, awseuwest1b, ip_10_185_90_99]",
                          "release": "80d6b02a41d538d94162b687b2f89cd1de509470",
                          "token": "6EE8966867B04526911CE8385AA62446",
                          "internal": "0|7AA7EF7F12254801542359544456AAES0000006000000000725a165|ES|07|6|1|||||||||||R|1|2|~1~2~0|0|0||0|c8zj99aze7hdvtaqh4qvcck4|||"
                        },
                        "booking": {
                          "reference": "1-4075658",
                          "clientReference": "INTEGRATIONAGENCY",
                          "creationDate": "2018-11-16",
                          "status": "CONFIRMED",
                          "modificationPolicies": {
                            "cancellation": true,
                            "modification": true
                          },
                          "creationUser": "c8zj99aze7hdvtaqh4qvcck4",
                          "holder": {
                            "name": "HOLDERFIRSTNAME",
                            "surname": "HOLDERLASTNAME"
                          },
                          "hotel": {
                            "checkOut": "2019-06-16",
                            "checkIn": "2019-06-15",
                            "code": 1533,
                            "name": "THB Mirador",
                            "categoryCode": "4EST",
                            "categoryName": "4 STARS",
                            "destinationCode": "PMI",
                            "destinationName": "Majorca",
                            "zoneCode": 10,
                            "zoneName": "Palma",
                            "latitude": "39.5681",
                            "longitude": "2.6312",
                            "rooms": [
                              {
                                "status": "CONFIRMED",
                                "id": 1,
                                "code": "DBL.ST",
                                "name": "DOUBLE 2 ADULTS",
                                "paxes": [
                                  {
                                    "roomId": 1,
                                    "type": "AD",
                                    "name": "First Adult Name",
                                    "surname": "Surname"
                                  },
                                  {
                                    "roomId": 1,
                                    "type": "AD",
                                    "name": "Second Adult Name",
                                    "surname": "Surname"
                                  }
                                ],
                                "rates": [
                                  {
                                    "rateClass": "NOR",
                                    "net": "141.47",
                                    "rateComments": "2x DOUBLE Estimated total amount of taxes & fees for this booking: 13.20 Euro   payable on arrival. Car park YES (with additional debit notes) 12.00 EUR Per unit/night.",
                                    "paymentType": "AT_WEB",
                                    "packaging": false,
                                    "boardCode": "RO",
                                    "boardName": "ROOM ONLY",
                                    "cancellationPolicies": [
                                      {
                                        "amount": "141.47",
                                        "from": "2019-06-12T23:59:00+02:00"
                                      }
                                    ],
                                    "rooms": 2,
                                    "adults": 2,
                                    "children": 0
                                  }
                                ]
                              }
                            ],
                            "totalNet": "141.47",
                            "currency": "EUR",
                            "supplier": {
                              "name": "HOTELBEDS PRODUCT,S.L.U.",
                              "vatNumber": "ESB38877676"
                            }
                          },
                          "remark": "Booking remarks are to be written here.",
                          "invoiceCompany": {
                            "code": "E10",
                            "company": "HOTELBEDS SPAIN, S.L.U",
                            "registrationNumber": "ESB28916765"
                          },
                          "totalNet": 141.47,
                          "pendingAmount": 141.47,
                          "currency": "EUR"
                        }
                      }
                    },
                    "Ex2": {
                      "summary": "Booking one room for one adult and two children",
                      "description": "Booking one room for one adult and two children",
                      "value": {
                        "auditData": {
                          "processTime": "1119",
                          "timestamp": "2018-11-16 10:52:49.293",
                          "requestHost": "212.66.164.12",
                          "serverId": "ip-10-185-93-140.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery#A+",
                          "environment": "[awseuwest1, awseuwest1c, ip_10_185_93_140]",
                          "release": "80d6b02a41d538d94162b687b2f89cd1de509470",
                          "token": "DDC2CDEFDEA14E36A97DCF43D2C4B76C",
                          "internal": "0|1E8CCBDE295E4F51542357273665AAES00000080000000007240d9|ES|07|8|1|||||||||||R|1|1|~1~1~2|0|0||0|c8zj99aze7hdvtaqh4qvcck4|||"
                        },
                        "booking": {
                          "reference": "1-4075657",
                          "clientReference": "INTEGRATIONAGENCY",
                          "creationDate": "2018-11-16",
                          "status": "CONFIRMED",
                          "modificationPolicies": {
                            "cancellation": true,
                            "modification": true
                          },
                          "creationUser": "c8zj99aze7hdvtaqh4qvcck4",
                          "holder": {
                            "name": "HOLDERFIRSTNAME",
                            "surname": "HOLDERLASTNAME"
                          },
                          "hotel": {
                            "checkOut": "2019-06-16",
                            "checkIn": "2019-06-15",
                            "code": 1533,
                            "name": "THB Mirador",
                            "categoryCode": "4EST",
                            "categoryName": "4 STARS",
                            "destinationCode": "PMI",
                            "destinationName": "Majorca",
                            "zoneCode": 10,
                            "zoneName": "Palma",
                            "latitude": "39.5681",
                            "longitude": "2.6312",
                            "rooms": [
                              {
                                "status": "CONFIRMED",
                                "id": 1,
                                "code": "DBL.ST-2",
                                "name": "DOUBLE 2 ADULTS + 1 CHILD OR 1 ADULTS + 2 CHILDREN",
                                "paxes": [
                                  {
                                    "roomId": 1,
                                    "type": "AD",
                                    "name": "First Adult Name",
                                    "surname": "Surname"
                                  },
                                  {
                                    "roomId": 1,
                                    "type": "CH",
                                    "age": 5,
                                    "name": "Second Adult Name",
                                    "surname": "Surname"
                                  },
                                  {
                                    "roomId": 1,
                                    "type": "CH",
                                    "age": 6,
                                    "name": "First Child Name",
                                    "surname": "Surname"
                                  }
                                ],
                                "rates": [
                                  {
                                    "rateClass": "NOR",
                                    "net": "172.10",
                                    "rateComments": "1x DOUBLE Estimated total amount of taxes & fees for this booking: 3.30 Euro   payable on arrival. Car park YES (with additional debit notes) 12.00 EUR Per unit/night.",
                                    "paymentType": "AT_WEB",
                                    "packaging": false,
                                    "boardCode": "RO",
                                    "boardName": "ROOM ONLY",
                                    "cancellationPolicies": [
                                      {
                                        "amount": "172.10",
                                        "from": "2019-06-12T23:59:00+02:00"
                                      }
                                    ],
                                    "rooms": 1,
                                    "adults": 1,
                                    "children": 2
                                  }
                                ]
                              }
                            ],
                            "totalNet": "172.10",
                            "currency": "EUR",
                            "supplier": {
                              "name": "HOTELBEDS PRODUCT,S.L.U.",
                              "vatNumber": "ESB38877676"
                            }
                          },
                          "remark": "Booking remarks are to be written here.",
                          "invoiceCompany": {
                            "code": "E10",
                            "company": "HOTELBEDS SPAIN, S.L.U",
                            "registrationNumber": "ESB28916765"
                          },
                          "totalNet": 172.1,
                          "pendingAmount": 172.1,
                          "currency": "EUR"
                        }
                      }
                    },
                    "Ex3": {
                      "summary": "Booking two rooms for two adults",
                      "description": "Booking two rooms for two adults",
                      "value": {
                        "auditData": {
                          "processTime": "884",
                          "timestamp": "2018-11-16 11:04:56.616",
                          "requestHost": "212.66.164.27",
                          "serverId": "ip-10-185-90-99.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery#A+",
                          "environment": "[awseuwest1, awseuwest1b, ip_10_185_90_99]",
                          "release": "80d6b02a41d538d94162b687b2f89cd1de509470",
                          "token": "6EE8966867B04526911CE8385AA62446",
                          "internal": "0|7AA7EF7F12254801542359544456AAES0000006000000000725a165|ES|07|6|1|||||||||||R|1|2|~2~2~0|0|0||0|c8zj99aze7hdvtaqh4qvcck4|||"
                        },
                        "booking": {
                          "reference": "1-4075658",
                          "clientReference": "INTEGRATIONAGENCY",
                          "creationDate": "2018-11-16",
                          "status": "CONFIRMED",
                          "modificationPolicies": {
                            "cancellation": true,
                            "modification": true
                          },
                          "creationUser": "c8zj99aze7hdvtaqh4qvcck4",
                          "holder": {
                            "name": "HOLDERFIRSTNAME",
                            "surname": "HOLDERLASTNAME"
                          },
                          "hotel": {
                            "checkOut": "2019-06-16",
                            "checkIn": "2019-06-15",
                            "code": 1533,
                            "name": "THB Mirador",
                            "categoryCode": "4EST",
                            "categoryName": "4 STARS",
                            "destinationCode": "PMI",
                            "destinationName": "Majorca",
                            "zoneCode": 10,
                            "zoneName": "Palma",
                            "latitude": "39.5681",
                            "longitude": "2.6312",
                            "rooms": [
                              {
                                "status": "CONFIRMED",
                                "id": 1,
                                "code": "DBL.ST",
                                "name": "DOUBLE 2 ADULTS",
                                "paxes": [
                                  {
                                    "roomId": 1,
                                    "type": "AD",
                                    "name": "First Adult Name",
                                    "surname": "Surname"
                                  },
                                  {
                                    "roomId": 1,
                                    "type": "AD",
                                    "name": "Second Adult Name",
                                    "surname": "Surname"
                                  },
                                  {
                                    "roomId": 2,
                                    "type": "AD",
                                    "name": "Third Adult Name",
                                    "surname": "Surname"
                                  },
                                  {
                                    "roomId": 2,
                                    "type": "AD",
                                    "name": "Fourth Adult Name",
                                    "surname": "Surname"
                                  }
                                ],
                                "rates": [
                                  {
                                    "rateClass": "NOR",
                                    "net": "282.94",
                                    "rateComments": "2x DOUBLE Estimated total amount of taxes & fees for this booking: 13.20 Euro   payable on arrival. Car park YES (with additional debit notes) 12.00 EUR Per unit/night.",
                                    "paymentType": "AT_WEB",
                                    "packaging": false,
                                    "boardCode": "RO",
                                    "boardName": "ROOM ONLY",
                                    "cancellationPolicies": [
                                      {
                                        "amount": "282.94",
                                        "from": "2019-06-12T23:59:00+02:00"
                                      }
                                    ],
                                    "rooms": 2,
                                    "adults": 2,
                                    "children": 0
                                  }
                                ]
                              }
                            ],
                            "totalNet": "282.94",
                            "currency": "EUR",
                            "supplier": {
                              "name": "HOTELBEDS PRODUCT,S.L.U.",
                              "vatNumber": "ESB38877676"
                            }
                          },
                          "remark": "Booking remarks are to be written here.",
                          "invoiceCompany": {
                            "code": "E10",
                            "company": "HOTELBEDS SPAIN, S.L.U",
                            "registrationNumber": "ESB28916765"
                          },
                          "totalNet": 282.94,
                          "pendingAmount": 282.94,
                          "currency": "EUR"
                        }
                      }
                    },
                    "Ex4": {
                      "summary": "Booking one room for two adults and one room for one adult and one child",
                      "description": "Booking one room for two adults and one room for one adult and one child",
                      "value": {
                        "auditData": {
                          "processTime": "1952",
                          "timestamp": "2018-11-16 08:47:35.428",
                          "requestHost": "212.66.164.13",
                          "serverId": "ip-10-185-90-99.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery#A+",
                          "environment": "[awseuwest1, awseuwest1b, ip_10_185_90_99]",
                          "release": "80d6b02a41d538d94162b687b2f89cd1de509470",
                          "token": "C55F4D35A4964D32ABC9ECB1F64600C8",
                          "internal": "0|8C91991695504401542298099837AAES0000011000000001010b5|ES|10|11|2|||||||||||R|4|2|~2~3~1|0|0||0|c8zj99aze7hdvtaqh4qvcck4|||"
                        },
                        "booking": {
                          "reference": "1-4075652",
                          "clientReference": "INTEGRATIONAGENCY",
                          "creationDate": "2018-11-16",
                          "status": "CONFIRMED",
                          "modificationPolicies": {
                            "cancellation": true,
                            "modification": true
                          },
                          "creationUser": "c8zj99aze7hdvtaqh4qvcck4",
                          "holder": {
                            "name": "HOLDERFIRSTNAME",
                            "surname": "HOLDERLASTNAME"
                          },
                          "hotel": {
                            "checkOut": "2019-06-16",
                            "checkIn": "2019-06-15",
                            "code": 74400,
                            "name": "Hotel M HOUSE",
                            "categoryCode": "4EST",
                            "categoryName": "4 STARS",
                            "destinationCode": "PMI",
                            "destinationName": "Majorca",
                            "zoneCode": 10,
                            "zoneName": "Palma",
                            "latitude": "39.574442",
                            "longitude": "2.651402",
                            "rooms": [
                              {
                                "status": "CONFIRMED",
                                "id": 1,
                                "code": "DBT.ST",
                                "name": "Double or Twin STANDARD",
                                "paxes": [
                                  {
                                    "roomId": 1,
                                    "type": "AD",
                                    "name": "First Adult Name",
                                    "surname": "Surname"
                                  },
                                  {
                                    "roomId": 1,
                                    "type": "AD",
                                    "name": "Second Adult Name",
                                    "surname": "Surname"
                                  }
                                ],
                                "rates": [
                                  {
                                    "rateClass": "NRF",
                                    "net": "181.58",
                                    "rateComments": "1x Double or Twin Estimated total amount of taxes & fees for this booking: 6.60 Euro   payable on arrival. Car park YES (with additional debit notes) 12.00 EUR Per unit/night. Key Collection 15:00 - 00:00. Check-in hour 15:00 - 00:00.",
                                    "paymentType": "AT_WEB",
                                    "packaging": false,
                                    "boardCode": "BB",
                                    "boardName": "BED AND BREAKFAST",
                                    "cancellationPolicies": [
                                      {
                                        "amount": "181.58",
                                        "from": "2018-11-15T23:59:00+01:00"
                                      }
                                    ],
                                    "rooms": 1,
                                    "adults": 2,
                                    "children": 0
                                  }
                                ]
                              },
                              {
                                "status": "CONFIRMED",
                                "id": 2,
                                "code": "DBT.ST",
                                "name": "Double or Twin STANDARD",
                                "paxes": [
                                  {
                                    "roomId": 1,
                                    "type": "AD",
                                    "name": "Third Adult Name",
                                    "surname": "Surname"
                                  },
                                  {
                                    "roomId": 1,
                                    "type": "CH",
                                    "age": 2,
                                    "name": "First Child Name",
                                    "surname": "Surname"
                                  }
                                ],
                                "rates": [
                                  {
                                    "rateClass": "NRF",
                                    "net": "181.58",
                                    "rateComments": "1x Double or Twin Estimated total amount of taxes & fees for this booking: 3.30 Euro   payable on arrival. Car park YES (with additional debit notes) 12.00 EUR Per unit/night. Key Collection 15:00 - 00:00. Check-in hour 15:00 - 00:00.",
                                    "paymentType": "AT_WEB",
                                    "packaging": false,
                                    "boardCode": "BB",
                                    "boardName": "BED AND BREAKFAST",
                                    "cancellationPolicies": [
                                      {
                                        "amount": "181.58",
                                        "from": "2018-11-15T23:59:00+01:00"
                                      }
                                    ],
                                    "rooms": 1,
                                    "adults": 1,
                                    "children": 1
                                  }
                                ]
                              }
                            ],
                            "totalNet": "363.16",
                            "currency": "EUR",
                            "supplier": {
                              "name": "HOTELBEDS PRODUCT,S.L.U.",
                              "vatNumber": "ESB38877676"
                            }
                          },
                          "remark": "Booking remarks are to be written here.",
                          "invoiceCompany": {
                            "code": "E10",
                            "company": "HOTELBEDS SPAIN, S.L.U",
                            "registrationNumber": "ESB28916765"
                          },
                          "totalNet": 363.16,
                          "pendingAmount": 363.16,
                          "currency": "EUR"
                        }
                      }
                    }
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/bookingRS"
                  },
                  "examples": {
                    "Ex1": {
                      "summary": "Booking one room for two adults",
                      "description": "Booking one room for two adults",
                      "value": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bookingRS xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" schemaLocation=\"http://www.hotelbeds.com/schemas/messages\">\n    <auditData processTime=\"884\" timestamp=\"2018-11-16 11:04:56.616\" requestHost=\"212.66.164.27\" serverId=\"ip-10-185-90-99.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery#A+\" environment=\"[awseuwest1, awseuwest1b, ip_10_185_90_99]\" release=\"80d6b02a41d538d94162b687b2f89cd1de509470\" token=\"6EE8966867B04526911CE8385AA62446\"\n        internal=\"0|7AA7EF7F12254801542359544456AAES0000006000000000725a165|ES|07|6|1|||||||||||R|1|2|~1~2~0|0|0||0|c8zj99aze7hdvtaqh4qvcck4|||\"/>\n    <booking reference=\"1-4075658\" clientReference=\"INTEGRATIONAGENCY\" creationDate=\"2018-11-16\" status=\"CONFIRMED\" creationUser=\"c8zj99aze7hdvtaqh4qvcck4\" totalNet=\"141.47\" pendingAmount=\"141.47\" currency=\"EUR\">\n        <modificationPolicies cancellation=\"true\" modification=\"true\"/>\n        <holder name=\"HOLDERFIRSTNAME\" surname=\"HOLDERLASTNAME\"/>\n        <hotel checkOut=\"2019-06-16\" checkIn=\"2019-06-15\" code=\"1533\" name=\"THB Mirador\" categoryCode=\"4EST\" categoryName=\"4 STARS\" destinationCode=\"PMI\" destinationName=\"Majorca\" zoneCode=\"10\" zoneName=\"Palma\" latitude=\"39.5681\" longitude=\"2.6312\" totalNet=\"141.47\" currency=\"EUR\">\n            <rooms>\n                <room status=\"CONFIRMED\" id=\"1\" code=\"DBL.null\" name=\"DOUBLE\">\n                    <paxes>\n                        <pax roomId=\"1\" type=\"AD\" name=\"First Adult Name\" surname=\"Surname\"/>\n                        <pax roomId=\"1\" type=\"AD\" name=\"Second Adult Name\" surname=\"Surname\"/>\n                    </paxes>\n                    <rates>\n                        <rate rateClass=\"NOR\" net=\"141.47\" rateComments=\"2x DOUBLE Estimated total amount of taxes &amp; fees for this booking: 13.20 Euro   payable on arrival. Car park YES (with additional debit notes) 12.00 EUR Per unit/night.\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"RO\" boardName=\"ROOM ONLY\" rooms=\"2\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"141.47\" from=\"2019-06-12T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                        </rate>\n                    </rates>\n                </room>\n            </rooms>\n            <supplier name=\"HOTELBEDS PRODUCT,S.L.U.\" vatNumber=\"ESB38877676\"/>\n        </hotel>\n        <remark>Booking remarks are to be written here.</remark>\n        <invoiceCompany code=\"E10\" name=\"HOTELBEDS SPAIN, S.L.U\" registrationNumber=\"ESB28916765\"/>\n    </booking>\n</bookingRS>"
                    },
                    "Ex2": {
                      "summary": "Booking one room for one adult and two children",
                      "description": "Booking one room for one adult and two children",
                      "value": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bookingRS xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" schemaLocation=\"http://www.hotelbeds.com/schemas/messages\">\n    <auditData processTime=\"1119\" timestamp=\"2018-11-16 10:52:49.293\" requestHost=\"212.66.164.12\" serverId=\"ip-10-185-93-140.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery#A+\" environment=\"[awseuwest1, awseuwest1c, ip_10_185_93_140]\" release=\"80d6b02a41d538d94162b687b2f89cd1de509470\" token=\"DDC2CDEFDEA14E36A97DCF43D2C4B76C\"\n        internal=\"0|1E8CCBDE295E4F51542357273665AAES00000080000000007240d9|ES|07|8|1|||||||||||R|1|1|~1~1~2|0|0||0|c8zj99aze7hdvtaqh4qvcck4|||\"/>\n    <booking reference=\"1-4075657\" clientReference=\"INTEGRATIONAGENCY\" creationDate=\"2018-11-16\" status=\"CONFIRMED\" creationUser=\"c8zj99aze7hdvtaqh4qvcck4\" totalNet=\"172.10\" pendingAmount=\"172.10\" currency=\"EUR\">\n        <modificationPolicies cancellation=\"true\" modification=\"true\"/>\n        <holder name=\"HOLDERFIRSTNAME\" surname=\"HOLDERLASTNAME\"/>\n        <hotel checkOut=\"2019-06-16\" checkIn=\"2019-06-15\" code=\"1533\" name=\"THB Mirador\" categoryCode=\"4EST\" categoryName=\"4 STARS\" destinationCode=\"PMI\" destinationName=\"Majorca\" zoneCode=\"10\" zoneName=\"Palma\" latitude=\"39.5681\" longitude=\"2.6312\" totalNet=\"172.10\" currency=\"EUR\">\n            <rooms>\n                <room status=\"CONFIRMED\" id=\"1\" code=\"DBL.null\" name=\"DOUBLE\">\n                    <paxes>\n                        <pax roomId=\"1\" type=\"AD\" name=\"First Adult Name\" surname=\"Surname\"/>\n                        <pax roomId=\"1\" type=\"CH\" age=\"5\" name=\"Second Adult Name\" surname=\"Surname\"/>\n                        <pax roomId=\"1\" type=\"CH\" age=\"6\" name=\"First Child Name\" surname=\"Surname\"/>\n                    </paxes>\n                    <rates>\n                        <rate rateClass=\"NOR\" net=\"172.10\" rateComments=\"1x DOUBLE Estimated total amount of taxes &amp; fees for this booking: 3.30 Euro   payable on arrival. Car park YES (with additional debit notes) 12.00 EUR Per unit/night.\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"RO\" boardName=\"ROOM ONLY\" rooms=\"1\" adults=\"1\" children=\"2\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"172.10\" from=\"2019-06-12T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                        </rate>\n                    </rates>\n                </room>\n            </rooms>\n            <supplier name=\"HOTELBEDS PRODUCT,S.L.U.\" vatNumber=\"ESB38877676\"/>\n        </hotel>\n        <remark>Booking remarks are to be written here.</remark>\n        <invoiceCompany code=\"E10\" name=\"HOTELBEDS SPAIN, S.L.U\" registrationNumber=\"ESB28916765\"/>\n    </booking>\n</bookingRS>"
                    },
                    "Ex3": {
                      "summary": "Booking two rooms for two adults",
                      "description": "Booking two rooms for two adults",
                      "value": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bookingRS xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" schemaLocation=\"http://www.hotelbeds.com/schemas/messages\">\n    <auditData processTime=\"884\" timestamp=\"2018-11-16 11:04:56.616\" requestHost=\"212.66.164.27\" serverId=\"ip-10-185-90-99.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery#A+\" environment=\"[awseuwest1, awseuwest1b, ip_10_185_90_99]\" release=\"80d6b02a41d538d94162b687b2f89cd1de509470\" token=\"6EE8966867B04526911CE8385AA62446\"\n        internal=\"0|7AA7EF7F12254801542359544456AAES0000006000000000725a165|ES|07|6|1|||||||||||R|1|2|~2~2~0|0|0||0|c8zj99aze7hdvtaqh4qvcck4|||\"/>\n    <booking reference=\"1-4075658\" clientReference=\"INTEGRATIONAGENCY\" creationDate=\"2018-11-16\" status=\"CONFIRMED\" creationUser=\"c8zj99aze7hdvtaqh4qvcck4\" totalNet=\"282.94\" pendingAmount=\"282.94\" currency=\"EUR\">\n        <modificationPolicies cancellation=\"true\" modification=\"true\"/>\n        <holder name=\"HOLDERFIRSTNAME\" surname=\"HOLDERLASTNAME\"/>\n        <hotel checkOut=\"2019-06-16\" checkIn=\"2019-06-15\" code=\"1533\" name=\"THB Mirador\" categoryCode=\"4EST\" categoryName=\"4 STARS\" destinationCode=\"PMI\" destinationName=\"Majorca\" zoneCode=\"10\" zoneName=\"Palma\" latitude=\"39.5681\" longitude=\"2.6312\" totalNet=\"282.94\" currency=\"EUR\">\n            <rooms>\n                <room status=\"CONFIRMED\" id=\"1\" code=\"DBL.null\" name=\"DOUBLE\">\n                    <paxes>\n                        <pax roomId=\"1\" type=\"AD\" name=\"First Adult Name\" surname=\"Surname\"/>\n                        <pax roomId=\"1\" type=\"AD\" name=\"Second Adult Name\" surname=\"Surname\"/>\n                        <pax roomId=\"2\" type=\"AD\" name=\"Third Adult Name\" surname=\"Surname\"/>\n                        <pax roomId=\"2\" type=\"AD\" name=\"Fourth Adult Name\" surname=\"Surname\"/>\n                    </paxes>\n                    <rates>\n                        <rate rateClass=\"NOR\" net=\"282.94\" rateComments=\"2x DOUBLE Estimated total amount of taxes &amp; fees for this booking: 13.20 Euro   payable on arrival. Car park YES (with additional debit notes) 12.00 EUR Per unit/night.\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"RO\" boardName=\"ROOM ONLY\" rooms=\"2\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"282.94\" from=\"2019-06-12T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                        </rate>\n                    </rates>\n                </room>\n            </rooms>\n            <supplier name=\"HOTELBEDS PRODUCT,S.L.U.\" vatNumber=\"ESB38877676\"/>\n        </hotel>\n        <remark>Booking remarks are to be written here.</remark>\n        <invoiceCompany code=\"E10\" name=\"HOTELBEDS SPAIN, S.L.U\" registrationNumber=\"ESB28916765\"/>\n    </booking>\n</bookingRS>"
                    },
                    "Ex4": {
                      "summary": "Booking one room for two adults and one room for one adult and one child",
                      "description": "Booking one room for two adults and one room for one adult and one child",
                      "value": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bookingRS xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" schemaLocation=\"http://www.hotelbeds.com/schemas/messages\">\n    <auditData processTime=\"1952\" timestamp=\"2018-11-16 08:47:35.428\" requestHost=\"212.66.164.13\" serverId=\"ip-10-185-90-99.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery#A+\" environment=\"[awseuwest1, awseuwest1b, ip_10_185_90_99]\" release=\"80d6b02a41d538d94162b687b2f89cd1de509470\" token=\"C55F4D35A4964D32ABC9ECB1F64600C8\"\n        internal=\"0|8C91991695504401542298099837AAES0000011000000001010b5|ES|10|11|2|||||||||||R|4|2|~2~3~1|0|0||0|c8zj99aze7hdvtaqh4qvcck4|||\"/>\n    <booking reference=\"1-4075652\" clientReference=\"INTEGRATIONAGENCY\" creationDate=\"2018-11-16\" status=\"CONFIRMED\" creationUser=\"c8zj99aze7hdvtaqh4qvcck4\" totalNet=\"363.16\" pendingAmount=\"363.16\" currency=\"EUR\">\n        <modificationPolicies cancellation=\"true\" modification=\"true\"/>\n        <holder name=\"HOLDERFIRSTNAME\" surname=\"HOLDERLASTNAME\"/>\n        <hotel checkOut=\"2019-06-16\" checkIn=\"2019-06-15\" code=\"74400\" name=\"Hotel M HOUSE\" categoryCode=\"4EST\" categoryName=\"4 STARS\" destinationCode=\"PMI\" destinationName=\"Majorca\" zoneCode=\"10\" zoneName=\"Palma\" latitude=\"39.574442\" longitude=\"2.651402\" totalNet=\"363.16\" currency=\"EUR\">\n            <rooms>\n                <room status=\"CONFIRMED\" id=\"1\" code=\"DBT.null\" name=\"Double or Twin\">\n                    <paxes>\n                        <pax roomId=\"1\" type=\"AD\" name=\"First Adult Name\" surname=\"Surname\"/>\n                        <pax roomId=\"1\" type=\"AD\" name=\"Second Adult Name\" surname=\"Surname\"/>\n                    </paxes>\n                    <rates>\n                        <rate rateClass=\"NRF\" net=\"181.58\" rateComments=\"1x Double or Twin Estimated total amount of taxes &amp; fees for this booking: 6.60 Euro   payable on arrival. Car park YES (with additional debit notes) 12.00 EUR Per unit/night. Key Collection 15:00 - 00:00. Check-in hour 15:00 - 00:00.\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"181.58\" from=\"2018-11-15T23:59:00+01:00\"/>\n                            </cancellationPolicies>\n                        </rate>\n                    </rates>\n                </room>\n                <room status=\"CONFIRMED\" id=\"2\" code=\"DBT.null\" name=\"Double or Twin\">\n                    <paxes>\n                        <pax roomId=\"1\" type=\"AD\" name=\"Third Adult Name\" surname=\"Surname\"/>\n                        <pax roomId=\"1\" type=\"CH\" age=\"2\" name=\"First Child Name\" surname=\"Surname\"/>\n                    </paxes>\n                    <rates>\n                        <rate rateClass=\"NRF\" net=\"181.58\" rateComments=\"1x Double or Twin Estimated total amount of taxes &amp; fees for this booking: 3.30 Euro   payable on arrival. Car park YES (with additional debit notes) 12.00 EUR Per unit/night. Key Collection 15:00 - 00:00. Check-in hour 15:00 - 00:00.\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"1\" children=\"1\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"181.58\" from=\"2018-11-15T23:59:00+01:00\"/>\n                            </cancellationPolicies>\n                        </rate>\n                    </rates>\n                </room>\n            </rooms>\n            <supplier name=\"HOTELBEDS PRODUCT,S.L.U.\" vatNumber=\"ESB38877676\"/>\n        </hotel>\n        <remark>Booking remarks are to be written here.</remark>\n        <invoiceCompany code=\"E10\" name=\"HOTELBEDS SPAIN, S.L.U\" registrationNumber=\"ESB28916765\"/>\n    </booking>\n</bookingRS>"
                    }
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
            "402": {
              "$ref": "#/components/responses/402"
            },
            "403": {
              "$ref": "#/components/responses/403"
            },
            "406": {
              "$ref": "#/components/responses/406"
            },
            "410": {
              "$ref": "#/components/responses/410"
            },
            "415": {
              "$ref": "#/components/responses/415"
            },
            "429": {
              "$ref": "#/components/responses/429"
            },
            "500": {
              "description": "**INTERNAL SERVER ERROR** - An unexpected condition was encountered. Possible causes\n\n*SYSTEM_ERROR* - These are internal server errors, please send us these errors together with the complete logs (JSON or XML requests and responses) at [apitude@hotelbeds.com]() so that our team can review them. \n\n*PRODUCT_ERROR* - This type of error is produced due to product restrictions or due to other account set-up limitations. In all cases, the end result is that the booking cannot be confirmed. Here is a list of common product errors:\n\n* *Insufficient allotment*: This means that the user is trying to book a room which is no longer available. This may happen if the room was still available in the Availability stage but someone else has made a reservation for this room or rooms.\n* *Price has increased*: The price increase between booking steps has exceeded the allowed tolerance that was set. This is a setting to protect clients from booking a room with a higher price than expected.\n* *Contract is closed/Office or branch not active/Cannot find channel quotation*: There are problems related to the contract.\n* *Stop sales*: This means that the hotel is forbidding sales on the requested dates.\n* *Booking confirmation error XXX-YYYYYY*: A confirmation error occurred. Please try again later.\n\n*CONFIGURATION_ERROR* - This type of error is produced by configuration restrictions set-up at account level. Usually this results in the inability to perform an specific operation. Here is a list of common configuration errors:\n\n* *This apikey is not associated with a valid client*: This means that the provided apiKey belongs to an inactive client/agency. If you need information regarding the cause for this please contact our support team at [apitude@hotelbeds.com]().",
              "content": {
                "application/json": {
                  "example": {
                    "auditData": {
                      "processTime": "664",
                      "timestamp": "2020-02-04 17:17:35.051",
                      "requestHost": "212.66.164.13, 64.252.132.73, 10.185.83.195, 34.242.17.225",
                      "serverId": "ip-10-185-92-25.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery#A+",
                      "environment": "[awseuwest1, awseuwest1c, ip_10_185_92_25]",
                      "release": "8813015814a189304b0f776271181c6aa778ed93",
                      "token": "99FDDAF786E1443CB6A639A634BB935B",
                      "internal": "0|03~~2123f3~2116309577~N~DC4147444C1D4F4158083301490400AAES000001300070003072123f3|ES|07|13|0|||||||||||R|0|3|~1~2~0||7|JACTRAV|3|c8zj99aze7hdvtaqh4qvcck4|||"
                    },
                    "error": {
                      "code": "PRODUCT_ERROR-99FDDAF786E1443CB6A639A634BB935B",
                      "message": "ProductException(BOOKING_CONFIRM, Price has changed: Unable to book as the price difference exceeds the allowed tolerance - Current tolerance: 2%"
                    }
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/bookingRS"
                  },
                  "example": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bookingRS xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" schemaLocation=\"http://www.hotelbeds.com/schemas/messages\">\n    <auditData processTime=\"664\" timestamp=\"2020-02-04 17:17:35.051\" requestHost=\"212.66.164.13, 64.252.132.73, 10.185.83.195, 34.242.17.225\" serverId=\"ip-10-185-92-25.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery#A+\" environment=\"[awseuwest1, awseuwest1c, ip_10_185_92_25]\" release=\"8813015814a189304b0f776271181c6aa778ed93\" token=\"99FDDAF786E1443CB6A639A634BB935B\" internal=\"0|03~~2123f3~2116309577~N~DC4147444C1D4F4158083301490400AAES000001300070003072123f3|ES|07|13|0|||||||||||R|0|3|~1~2~0||7|JACTRAV|3|c8zj99aze7hdvtaqh4qvcck4|||\"/>\n    <error>\n        <code>PRODUCT_ERROR-99FDDAF786E1443CB6A639A634BB935B</code>\n        <message>ProductException(BOOKING_CONFIRM, Price has changed: Unable to book as the price difference exceeds the allowed tolerance - Current tolerance: 2%</message>\n    </error>\n</bookingRS>"
                }
              }
            }
          },
          "deprecated": false,
          "x-codegen-request-body-name": "body"
        },
        "get": {
          "tags": [
            "Booking"
          ],
          "summary": "Booking list",
          "description": "The booking list operation returns a list of bookings based on the search criteria. The most important information returned for each booking in the list is:\n\n  *  Booking reference\n  *  Booking holder\n  *  Booking paxes\n  *  Hotel, rooms and boards confirmed\n  *  Booking rates\n  \nThe results are returned in a paginated response that can be filtered with the use of parameters in the request.\n\nTimeout for this operation is 60 seconds.\n",
          "operationId": "bookingList",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderContent"
            },
            {
              "name": "filterType",
              "in": "query",
              "description": "Parameter used to define wether **start** and **end** fields are filtering by check-in date or by booking creation date.",
              "schema": {
                "type": "string",
                "enum": [
                  "CHECKIN",
                  "CREATION"
                ]
              }
            },
            {
              "name": "status",
              "in": "query",
              "description": "Parameter used to filter results by status. Can be used to include or exclude cancelled bookings.",
              "schema": {
                "type": "string",
                "enum": [
                  "ALL",
                  "CONFIRMED",
                  "CANCELLED"
                ]
              }
            },
            {
              "name": "from",
              "in": "query",
              "description": "Defines the lowest value of the range of bookings to be returned.",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int32"
              }
            },
            {
              "name": "to",
              "in": "query",
              "description": "Defines the highest value of the range of bookings to be returned.",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int32"
              }
            },
            {
              "name": "clientReference",
              "in": "query",
              "description": "Parameter to filter the result by the __clientReference__ field of the booking.",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "creationUser",
              "in": "query",
              "description": "Parameter to filter the result by the creationUser field of the booking.",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "country",
              "in": "query",
              "description": "Parameter to filter the results by the country code of the hotel. Can include multiple values separated by commas.",
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
              "name": "destination",
              "in": "query",
              "description": "Parameter to filter the results by the destination code of the hotel. Can include multiple values separated by commas.",
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
              "name": "hotel",
              "in": "query",
              "description": "Parameter to filter the results by the hotel codes. Can include multiple values separated by commas.",
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
              "name": "start",
              "in": "query",
              "description": "Defines the starting date of the range of bookings to be returned.",
              "required": true,
              "schema": {
                "type": "string",
                "format": "date"
              }
            },
            {
              "name": "end",
              "in": "query",
              "description": "Defines the ending date of the range of bookings to be returned. value.",
              "required": true,
              "schema": {
                "type": "string",
                "format": "date"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Sucessful response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/bookingListRS"
                  },
                  "example": {
                    "auditData": {
                      "processTime": "1271",
                      "timestamp": "2018-03-21 14:47:05.901",
                      "requestHost": "212.170.239.110",
                      "serverId": "sa3RKSJACHXE79K.env",
                      "environment": "[int, ignite]",
                      "release": "8f8516c469363d54ffa94ee260b468578804460f",
                      "token": "47411d2f-970a-4196-b790-337b37288670",
                      "internal": "null||||0|0||||||||||||0|||0|0||0|null|||"
                    },
                    "bookings": {
                      "bookings": [
                        {
                          "reference": "1-3814850",
                          "clientReference": "AgencyTest01",
                          "creationDate": "2018-03-20",
                          "status": "CONFIRMED",
                          "creationUser": "6j486qn8u3l8443sdb7nmhli",
                          "holder": {
                            "name": "JOHN",
                            "surname": "SMITH"
                          },
                          "hotel": {
                            "checkOut": "2018-09-15",
                            "checkIn": "2018-09-08",
                            "code": 2805,
                            "name": "Globales Mimosa",
                            "destinationCode": "PMI",
                            "rooms": [
                              {
                                "status": "CONFIRMED",
                                "code": "DBT.ST",
                                "paxes": [
                                  {
                                    "roomId": 1,
                                    "type": "AD"
                                  },
                                  {
                                    "roomId": 1,
                                    "type": "AD"
                                  }
                                ],
                                "rates": [
                                  {
                                    "amount": "664.02",
                                    "paymentType": "AT_WEB",
                                    "boardCode": "HB",
                                    "rooms": 1
                                  }
                                ]
                              }
                            ]
                          },
                          "invoiceCompany": {
                            "code": "E14",
                            "company": "HOTELBEDS S.L.U.",
                            "registrationNumber": "ESB57218372"
                          },
                          "totalSellingRate": 664.02,
                          "totalNet": 664.02,
                          "pendingAmount": 0,
                          "currency": "EUR"
                        },
                        {
                          "reference": "1-3815077",
                          "clientReference": "AgencyTest02",
                          "creationDate": "2018-03-20",
                          "status": "CONFIRMED",
                          "creationUser": "6j486qn8u3l8443sdb7nmhli",
                          "holder": {
                            "name": "SAM",
                            "surname": "JONES"
                          },
                          "hotel": {
                            "checkOut": "2018-03-24",
                            "checkIn": "2018-03-22",
                            "code": 497541,
                            "name": "Urban Hostel Palma",
                            "destinationCode": "PMI",
                            "rooms": [
                              {
                                "status": "CONFIRMED",
                                "code": "BED.ST",
                                "supplierReference": "18431999M-HJ",
                                "paxes": [
                                  {
                                    "roomId": 1,
                                    "type": "AD"
                                  }
                                ],
                                "rates": [
                                  {
                                    "amount": "31.35",
                                    "paymentType": "AT_WEB",
                                    "boardCode": "BB",
                                    "rooms": 1
                                  }
                                ]
                              }
                            ]
                          },
                          "invoiceCompany": {
                            "code": "E14",
                            "company": "HOTELBEDS S.L.U.",
                            "registrationNumber": "ESB57218372"
                          },
                          "totalSellingRate": 31.35,
                          "totalNet": 31.35,
                          "pendingAmount": 0,
                          "currency": "EUR"
                        },
                        {
                          "reference": "1-3815155",
                          "clientReference": "AgencyTest03",
                          "creationDate": "2018-03-20",
                          "status": "CONFIRMED",
                          "creationUser": "6j486qn8u3l8443sdb7nmhli",
                          "holder": {
                            "name": "CHARLES",
                            "surname": "CALTHROP"
                          },
                          "hotel": {
                            "checkOut": "2018-07-27",
                            "checkIn": "2018-07-21",
                            "code": 4848,
                            "name": "Grupotel Orient",
                            "destinationCode": "PMI",
                            "rooms": [
                              {
                                "status": "CONFIRMED",
                                "code": "DBT.ST",
                                "paxes": [
                                  {
                                    "roomId": 1,
                                    "type": "AD"
                                  },
                                  {
                                    "roomId": 1,
                                    "type": "AD"
                                  }
                                ],
                                "rates": [
                                  {
                                    "amount": "759.36",
                                    "paymentType": "AT_WEB",
                                    "boardCode": "FB",
                                    "rooms": 1
                                  }
                                ]
                              }
                            ]
                          },
                          "invoiceCompany": {
                            "code": "E14",
                            "company": "HOTELBEDS S.L.U.",
                            "registrationNumber": "ESB57218372"
                          },
                          "totalSellingRate": 759.36,
                          "totalNet": 759.36,
                          "pendingAmount": 0,
                          "currency": "EUR"
                        },
                        {
                          "reference": "1-3815186",
                          "clientReference": "AgencyTest04",
                          "creationDate": "2018-03-20",
                          "status": "CONFIRMED",
                          "creationUser": "6j486qn8u3l8443sdb7nmhli",
                          "holder": {
                            "name": "PETER",
                            "surname": "BEDFORD"
                          },
                          "hotel": {
                            "checkOut": "2018-09-24",
                            "checkIn": "2018-09-20",
                            "code": 4823,
                            "name": "Niu d'Aus",
                            "destinationCode": "PMI",
                            "rooms": [
                              {
                                "status": "CONFIRMED",
                                "code": "APT.ST",
                                "paxes": [
                                  {
                                    "roomId": 1,
                                    "type": "AD"
                                  },
                                  {
                                    "roomId": 1,
                                    "type": "AD"
                                  }
                                ],
                                "rates": [
                                  {
                                    "amount": "144.52",
                                    "paymentType": "AT_WEB",
                                    "boardCode": "SC",
                                    "rooms": 1
                                  }
                                ]
                              }
                            ]
                          },
                          "invoiceCompany": {
                            "code": "E14",
                            "company": "HOTELBEDS S.L.U.",
                            "registrationNumber": "ESB57218372"
                          },
                          "totalSellingRate": 144.52,
                          "totalNet": 144.52,
                          "pendingAmount": 0,
                          "currency": "EUR"
                        },
                        {
                          "reference": "1-3815208",
                          "clientReference": "AgencyTest05",
                          "creationDate": "2018-03-20",
                          "status": "CONFIRMED",
                          "creationUser": "6j486qn8u3l8443sdb7nmhli",
                          "holder": {
                            "name": "JULIAN",
                            "surname": "PARKER"
                          },
                          "hotel": {
                            "checkOut": "2018-03-24",
                            "checkIn": "2018-03-22",
                            "code": 497541,
                            "name": "Urban Hostel Palma",
                            "destinationCode": "PMI",
                            "rooms": [
                              {
                                "status": "CONFIRMED",
                                "code": "BED.ST",
                                "supplierReference": "16923904M-HJ",
                                "paxes": [
                                  {
                                    "roomId": 1,
                                    "type": "AD"
                                  }
                                ],
                                "rates": [
                                  {
                                    "amount": "31.35",
                                    "paymentType": "AT_WEB",
                                    "boardCode": "BB",
                                    "rooms": 1
                                  }
                                ]
                              }
                            ]
                          },
                          "invoiceCompany": {
                            "code": "E14",
                            "company": "HOTELBEDS S.L.U.",
                            "registrationNumber": "ESB57218372"
                          },
                          "totalSellingRate": 31.35,
                          "totalNet": 31.35,
                          "pendingAmount": 0,
                          "currency": "EUR"
                        }
                      ],
                      "from": 4,
                      "to": 8,
                      "total": 603
                    }
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/bookingListRS"
                  },
                  "example": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bookingListRS xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" schemaLocation=\"http://www.hotelbeds.com/schemas/messages\">\n    <auditData   processTime=\"1165\" timestamp=\"2018-03-21 14:46:42.165\" requestHost=\"212.170.239.110\" serverId=\"ws3xmi01\" environment=\"[itest, iSET_A, ehcache]\" release=\"4757\" token=\"47411d2f-970a-4196-b790-337b37288670\" internal=\"|01||73|423|0|3|12|N||||||||||1\"/>\n    <bookings from=\"4\" to=\"8\" total=\"603\">\n        <booking reference=\"1-3814850\" clientReference=\"AgencyTest01\" creationDate=\"2018-03-20\" status=\"CONFIRMED\" creationUser=\"6j486qn8u3l8443sdb7nmhli\" totalSellingRate=\"664.02\" totalNet=\"664.02\" pendingAmount=\"0.00\" currency=\"EUR\">\n            <holder name=\"JOHN\" surname=\"SMITH\"/>\n            <hotel checkOut=\"2018-09-15\" checkIn=\"2018-09-08\" code=\"2805\" name=\"Globales Mimosa\" destinationCode=\"PMI\">\n                <rooms>\n                    <room status=\"CONFIRMED\" code=\"DBT.ST\">\n                        <paxes>\n                            <pax roomId=\"1\" type=\"AD\"/>\n                            <pax roomId=\"1\" type=\"AD\"/>\n                        </paxes>\n                        <rates>\n                            <rate amount=\"664.02\" paymentType=\"AT_WEB\" boardCode=\"HB\" rooms=\"1\"/>\n                        </rates>\n                    </room>\n                </rooms>\n            </hotel>\n            <invoiceCompany code=\"E14\" name=\"HOTELBEDS S.L.U.\" registrationNumber=\"ESB57218372\"/>\n        </booking>\n        <booking reference=\"1-3815077\" clientReference=\"AgencyTest02\" creationDate=\"2018-03-20\" status=\"CONFIRMED\" creationUser=\"6j486qn8u3l8443sdb7nmhli\" totalSellingRate=\"31.35\" totalNet=\"31.35\" pendingAmount=\"0.00\" currency=\"EUR\">\n            <holder name=\"SAM\" surname=\"JONES\"/>\n            <hotel checkOut=\"2018-03-24\" checkIn=\"2018-03-22\" code=\"497541\" name=\"Urban Hostel Palma\" destinationCode=\"PMI\">\n                <rooms>\n                    <room status=\"CONFIRMED\" code=\"BED.ST\" supplierReference=\"18431999M-HJ\">\n                        <paxes>\n                            <pax roomId=\"1\" type=\"AD\"/>\n                        </paxes>\n                        <rates>\n                            <rate amount=\"31.35\" paymentType=\"AT_WEB\" boardCode=\"BB\" rooms=\"1\"/>\n                        </rates>\n                    </room>\n                </rooms>\n            </hotel>\n            <invoiceCompany code=\"E14\" name=\"HOTELBEDS S.L.U.\" registrationNumber=\"ESB57218372\"/>\n        </booking>\n        <booking reference=\"1-3815155\" clientReference=\"AgencyTest03\" creationDate=\"2018-03-20\" status=\"CONFIRMED\" creationUser=\"6j486qn8u3l8443sdb7nmhli\" totalSellingRate=\"759.36\" totalNet=\"759.36\" pendingAmount=\"0.00\" currency=\"EUR\">\n            <holder name=\"CHARLES\" surname=\"CALTHROP\"/>\n            <hotel checkOut=\"2018-07-27\" checkIn=\"2018-07-21\" code=\"4848\" name=\"Grupotel Orient\" destinationCode=\"PMI\">\n                <rooms>\n                    <room status=\"CONFIRMED\" code=\"DBT.ST\">\n                        <paxes>\n                            <pax roomId=\"1\" type=\"AD\"/>\n                            <pax roomId=\"1\" type=\"AD\"/>\n                        </paxes>\n                        <rates>\n                            <rate amount=\"759.36\" paymentType=\"AT_WEB\" boardCode=\"FB\" rooms=\"1\"/>\n                        </rates>\n                    </room>\n                </rooms>\n            </hotel>\n            <invoiceCompany code=\"E14\" name=\"HOTELBEDS S.L.U.\" registrationNumber=\"ESB57218372\"/>\n        </booking>\n        <booking reference=\"1-3815186\" clientReference=\"AgencyTest04\" creationDate=\"2018-03-20\" status=\"CONFIRMED\" creationUser=\"6j486qn8u3l8443sdb7nmhli\" totalSellingRate=\"144.52\" totalNet=\"144.52\" pendingAmount=\"0.00\" currency=\"EUR\">\n            <holder name=\"PETER\" surname=\"BEDFORD\"/>\n            <hotel checkOut=\"2018-09-24\" checkIn=\"2018-09-20\" code=\"4823\" name=\"Niu d'Aus\" destinationCode=\"PMI\">\n                <rooms>\n                    <room status=\"CONFIRMED\" code=\"APT.ST\">\n                        <paxes>\n                            <pax roomId=\"1\" type=\"AD\"/>\n                            <pax roomId=\"1\" type=\"AD\"/>\n                        </paxes>\n                        <rates>\n                            <rate amount=\"144.52\" paymentType=\"AT_WEB\" boardCode=\"SC\" rooms=\"1\"/>\n                        </rates>\n                    </room>\n                </rooms>\n            </hotel>\n            <invoiceCompany code=\"E14\" name=\"HOTELBEDS S.L.U.\" registrationNumber=\"ESB57218372\"/>\n        </booking>\n        <booking reference=\"1-3815208\" clientReference=\"AgencyTest05\" creationDate=\"2018-03-20\" status=\"CONFIRMED\" creationUser=\"6j486qn8u3l8443sdb7nmhli\" totalSellingRate=\"31.35\" totalNet=\"31.35\" pendingAmount=\"0.00\" currency=\"EUR\">\n            <holder name=\"JULIAN\" surname=\"PARKER\"/>\n            <hotel checkOut=\"2018-03-24\" checkIn=\"2018-03-22\" code=\"497541\" name=\"Urban Hostel Palma\" destinationCode=\"PMI\">\n                <rooms>\n                    <room status=\"CONFIRMED\" code=\"BED.ST\" supplierReference=\"16923904M-HJ\">\n                        <paxes>\n                            <pax roomId=\"1\" type=\"AD\"/>\n                        </paxes>\n                        <rates>\n                            <rate amount=\"31.35\" paymentType=\"AT_WEB\" boardCode=\"BB\" rooms=\"1\"/>\n                        </rates>\n                    </room>\n                </rooms>\n            </hotel>\n            <invoiceCompany code=\"E14\" name=\"HOTELBEDS S.L.U.\" registrationNumber=\"ESB57218372\"/>\n        </booking>\n    </bookings>\n</bookingListRS>"
                }
              }
            },
            "401": {
              "$ref": "#/components/responses/401"
            },
            "403": {
              "$ref": "#/components/responses/403"
            },
            "406": {
              "$ref": "#/components/responses/406"
            },
            "429": {
              "$ref": "#/components/responses/429"
            },
            "500": {
              "$ref": "#/components/responses/500"
            }
          },
          "deprecated": false
        }
      },
      "/bookings/{bookingId}": {
        "get": {
          "tags": [
            "Booking"
          ],
          "summary": "Booking detail",
          "description": "The BookingDetail operation allows to retrieve a booking with all its details from the booking reference locator.",
          "operationId": "bookingDetail",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "name": "bookingId",
              "in": "path",
              "description": "Booking reference number taken from the confirmation response or from the booking list function. Format: XXX-YYYYYY",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "language",
              "in": "query",
              "description": "Language code that defines the language of the response. English will be used by default if this parameter is not informed.",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Sample",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/bookingDetailRS"
                  },
                  "example": {
                    "auditData": {
                      "processTime": "165",
                      "timestamp": "2018-03-23 09:35:34.122",
                      "requestHost": "212.66.164.12",
                      "serverId": "sa37AUX3ROLBLIS.env",
                      "environment": "[int]",
                      "release": "5c2a98762e8da116cf86a57a17c9db9d2e4d80eb",
                      "token": "ce838668-06cd-4009-a705-fc234626ff91",
                      "internal": "null||||0|1||||||||||||1|||0|0||0|null|||"
                    },
                    "booking": {
                      "reference": "1-3816248",
                      "clientReference": "TESTBOOKING",
                      "creationDate": "2018-03-23",
                      "status": "CONFIRMED",
                      "modificationPolicies": {
                        "cancellation": true,
                        "modification": true
                      },
                      "creationUser": "wuupfvswdqfz342cejxfv3ku",
                      "holder": {
                        "name": "HOLDERFIRSTNAME",
                        "surname": "HOLDERLASTNAME"
                      },
                      "hotel": {
                        "checkOut": "2018-04-24",
                        "checkIn": "2018-04-23",
                        "code": 229318,
                        "name": "Hotel Hostal Cuba",
                        "categoryCode": "4EST",
                        "categoryName": "4 STARS",
                        "destinationCode": "PMI",
                        "destinationName": "Majorca",
                        "zoneCode": 10,
                        "zoneName": "Palma",
                        "latitude": "39.570177",
                        "longitude": "2.639077",
                        "rooms": [
                          {
                            "status": "CONFIRMED",
                            "id": 1,
                            "code": "JSU.ST",
                            "name": "JUNIOR SUITE STANDARD",
                            "supplierReference": "16923904M-MJ",
                            "paxes": [
                              {
                                "roomId": 1,
                                "type": "AD",
                                "name": "Second Adult Name",
                                "surname": "Surname"
                              },
                              {
                                "roomId": 1,
                                "type": "AD",
                                "name": "First Adult Name",
                                "surname": "Surname"
                              }
                            ],
                            "rates": [
                              {
                                "rateClass": "NOR",
                                "net": "250.19",
                                "sellingRate": "280.00",
                                "hotelMandatory": true,
                                "rateComments": "1x JUNIOR SUITE Estimated total amount of taxes & fees for this booking: 6.60 Euro   payable on arrival  \r. Car park NO   . Key Collection 15:00 â€“ . Check-in hour 15:00 â€“ 00:00. No hen/stag or any other parties allowed  â€“ . ",
                                "paymentType": "AT_WEB",
                                "packaging": false,
                                "boardCode": "BB",
                                "boardName": "BED AND BREAKFAST",
                                "cancellationPolicies": [
                                  {
                                    "amount": "250.19",
                                    "from": "2018-04-19T23:59:00+02:00"
                                  }
                                ],
                                "taxes": {
                                  "taxes": [
                                    {
                                      "included": false,
                                      "amount": "6.60",
                                      "currency": "EUR"
                                    }
                                  ],
                                  "allIncluded": false
                                },
                                "rooms": 1,
                                "adults": 2,
                                "children": 0
                              }
                            ]
                          }
                        ],
                        "totalNet": "250.19",
                        "currency": "EUR",
                        "supplier": {
                          "name": "HOTELBEDS PRODUCT,S.L.U.",
                          "vatNumber": "ESB38877676"
                        }
                      },
                      "remark": "Booking remarks are to be written here.",
                      "invoiceCompany": {
                        "code": "E14",
                        "company": "HOTELBEDS SPAIN, S.L.U",
                        "registrationNumber": "ESB57218372"
                      },
                      "totalNet": 250.19,
                      "pendingAmount": 250.19,
                      "currency": "EUR"
                    }
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/bookingDetailRS"
                  },
                  "example": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bookingDetailRS xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" schemaLocation=\"http://www.hotelbeds.com/schemas/messages\">\n    <auditData processTime=\"171\" timestamp=\"2018-03-23 09:46:03.453\" requestHost=\"212.66.164.12\" serverId=\"sa37AUX3ROLBLIS.env\" environment=\"[int]\" release=\"5c2a98762e8da116cf86a57a17c9db9d2e4d80eb\" token=\"e7ff5253-c245-41d7-ba84-72dff7b9e2da\" internal=\"null||||0|1||||||||||||1|||0|0||0|null|||\"/>\n    <booking reference=\"1-3816249\" clientReference=\"TESTBOOKING\" creationDate=\"2018-03-23\" status=\"CONFIRMED\" creationUser=\"wuupfvswdqfz342cejxfv3ku\" totalNet=\"250.19\" pendingAmount=\"250.19\" currency=\"EUR\">\n        <modificationPolicies cancellation=\"true\" modification=\"true\"/>\n        <holder name=\"HOLDERFIRSTNAME\" surname=\"HOLDERLASTNAME\"/>\n        <hotel checkOut=\"2018-04-24\" checkIn=\"2018-04-23\" code=\"229318\" name=\"Hotel Hostal Cuba\" categoryCode=\"4EST\" categoryName=\"4 STARS\" destinationCode=\"PMI\" destinationName=\"Majorca\" zoneCode=\"10\" zoneName=\"Palma\" latitude=\"39.570177\" longitude=\"2.639077\" totalNet=\"250.19\" currency=\"EUR\">\n            <rooms>\n                <room status=\"CONFIRMED\" id=\"1\" code=\"JSU.ST\" name=\"JUNIOR SUITE STANDARD\" supplierReference=\"18431999M-MJ\">\n                    <paxes>\n                        <pax roomId=\"1\" type=\"AD\" name=\"Second Adult Name\" surname=\"Surname\"/>\n                        <pax roomId=\"1\" type=\"AD\" name=\"First Adult Name\" surname=\"Surname\"/>\n                    </paxes>\n                    <rates>\n                        <rate rateClass=\"NOR\" net=\"250.19\" sellingRate=\"280.00\" hotelMandatory=\"true\" rateComments=\"1x JUNIOR SUITE Estimated total amount of taxes &amp; fees for this booking: 6.60 Euro   payable on arrival  &#xd;. Car park NO   . Key Collection 15:00 â€“ . Check-in hour 15:00 â€“ 00:00. No hen/stag or any other parties allowed  â€“ . \" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"250.19\" from=\"2018-04-19T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                            <taxes allIncluded=\"false\">\n                                <tax included=\"false\" amount=\"6.60\" currency=\"EUR\"/>\n                            </taxes>\n                        </rate>\n                    </rates>\n                </room>\n            </rooms>\n            <supplier name=\"HOTELBEDS PRODUCT,S.L.U.\" vatNumber=\"ESB38877676\"/>\n        </hotel>\n        <remark>Booking remarks are to be written here.</remark>\n        <invoiceCompany code=\"E14\" name=\"HOTELBEDS SPAIN, S.L.U\" registrationNumber=\"ESB57218372\"/>\n    </booking>\n</bookingDetailRS>"
                }
              }
            },
            "401": {
              "$ref": "#/components/responses/401"
            },
            "403": {
              "$ref": "#/components/responses/403"
            },
            "406": {
              "$ref": "#/components/responses/406"
            },
            "429": {
              "$ref": "#/components/responses/429"
            },
            "500": {
              "$ref": "#/components/responses/500"
            }
          },
          "deprecated": false
        },
        "put": {
          "tags": [
            "Booking"
          ],
          "summary": "Booking change",
          "description": "The BookingChange operation is used to change or update different values of a booking.\n\nThe changes that can be performed are:\n\n* Change clientReference\n* Change remarks\n* Change holder name and surname\n* Change checkIn and checkOut date\n* Change board plans\n* Change passengers name and surname\n* Add rooms (only from the same type already in the booking)\n* Remove rooms from a booking (partial cancellation)\n",
          "operationId": "bookingChange",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderContent"
            },
            {
              "name": "bookingId",
              "in": "path",
              "description": "Booking reference number taken from the confirmation response or from the booking list function. Format: XXX-YYYYYY",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "description": "Definition and examples of request body of BookingChange operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/bookingChangeRQ"
                },
                "example": {
                  "mode": "UPDATE",
                  "booking": {
                    "reference": "52-1274417",
                    "clientReference": "AGENCYTEST",
                    "creationDate": "2017-08-31",
                    "status": "CONFIRMED",
                    "modificationPolicies": {
                      "cancellation": true,
                      "modification": true
                    },
                    "creationUser": "wuupfvswdqfz342cejxfv3ku",
                    "holder": {
                      "name": "INTEGRATIONTESTFIRSTNAME",
                      "surname": "INTEGRATIONTESTLASTNAME"
                    },
                    "hotel": {
                      "checkOut": "2017-09-20",
                      "checkIn": "2017-09-15",
                      "code": 1,
                      "name": "Villa Dorada",
                      "categoryCode": "3EST",
                      "categoryName": "3 STARS",
                      "destinationCode": "SAL",
                      "destinationName": "Salou Area / Costa Dorada",
                      "zoneCode": 10,
                      "zoneName": "Salou",
                      "latitude": "41.06865947991072",
                      "longitude": "1.1524744666303377",
                      "rooms": [
                        {
                          "status": "CONFIRMED",
                          "id": 1,
                          "code": "DBT.ST-3",
                          "name": "Double or Twin MONOPARENTAL 1 ADULT 2 CHILDREN",
                          "paxes": [
                            {
                              "roomId": 1,
                              "type": "AD",
                              "name": "First Adult Name",
                              "surname": "Surname"
                            },
                            {
                              "roomId": 1,
                              "type": "CH",
                              "age": 6,
                              "name": "Second Child Name"
                            },
                            {
                              "roomId": 1,
                              "type": "CH",
                              "age": 5,
                              "name": "First Child Name"
                            }
                          ],
                          "rates": [
                            {
                              "rateClass": "NOR",
                              "net": "302.26",
                              "rateComments": "1x Double or Twin Estimated total amount of taxes & fees for this booking: 2.50 Euro payable on arrival  \r. Car park NO . Key Collection 14:00 â€“ 00:00. Check-in hour 14:00 â€“ 00:00. . This rate is not applicable to Spain, Italy & Portugal market/country or passport holders otherwise the reservation will not be accepted or supplement fees can be charged on arrival.",
                              "paymentType": "AT_WEB",
                              "packaging": false,
                              "boardCode": "RO",
                              "boardName": "ROOM ONLY",
                              "cancellationPolicies": [
                                {
                                  "amount": "141.00",
                                  "from": "2017-09-14T23:59:00+02:00"
                                },
                                {
                                  "amount": "70.50",
                                  "from": "2017-09-12T23:59:00+02:00"
                                }
                              ],
                              "rooms": 1,
                              "adults": 1,
                              "children": 2
                            }
                          ]
                        }
                      ],
                      "totalNet": "302.26",
                      "currency": "EUR",
                      "supplier": {
                        "name": "HOTELBEDS PRODUCT,S.L.U.",
                        "vatNumber": "ESB38877676"
                      }
                    },
                    "remark": "Booking remarks are to be written here.",
                    "invoiceCompany": {
                      "code": "E14",
                      "company": "HOTELBEDS SPAIN, S.L.U",
                      "registrationNumber": "ESB57218372"
                    },
                    "totalNet": 302.26,
                    "pendingAmount": 302.26,
                    "currency": "EUR"
                  }
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/bookingChangeRQ"
                },
                "example": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bookingChangeRQ xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <mode>SIMULATION</mode>\n  <booking reference=\"52-1274418\" clientReference=\"INTEGRATIONAGENCY\" creationDate=\"2017-08-31\" status=\"CONFIRMED\" creationUser=\"wuupfvswdqfz342cejxfv3ku\" totalNet=\"302.26\" pendingAmount=\"302.26\" currency=\"EUR\">\n      <modificationPolicies cancellation=\"true\" modification=\"true\"/>\n      <holder name=\"INTEGRATIONTESTFIRSTNAME\" surname=\"INTEGRATIONTESTLASTNAME\"/>\n      <hotel checkOut=\"2017-09-20\" checkIn=\"2017-09-15\" code=\"1\" name=\"Villa Dorada\" categoryCode=\"3EST\" categoryName=\"3 STARS\" destinationCode=\"SAL\" destinationName=\"Salou Area / Costa Dorada\" zoneCode=\"10\" zoneName=\"Salou\" latitude=\"41.06865947991072\" longitude=\"1.1524744666303377\" totalNet=\"302.26\" currency=\"EUR\">\n          <rooms>\n              <room status=\"CONFIRMED\" id=\"1\" code=\"DBT.ST-3\" name=\"Double or Twin MONOPARENTAL 1 ADULT 2 CHILDREN\">\n                  <paxes>\n                      <pax roomId=\"1\" type=\"AD\" name=\"First Adult Name\" surname=\"Surname\"/>\n                      <pax roomId=\"1\" type=\"CH\" age=\"6\" name=\"Second Child Name\"/>\n                      <pax roomId=\"1\" type=\"CH\" age=\"5\" name=\"First Child Name\"/>\n                  </paxes>\n                  <rates>\n                      <rate rateClass=\"NOR\" net=\"302.26\" rateComments=\"1x Double or Twin Estimated total amount of taxes &amp; fees for this booking: 2.50 Euro   payable on arrival &nbsp;&#xd;. Car park NO   . Key Collection 14:00 â€“ 00:00. Check-in hour 14:00 â€“ 00:00. . This rate is not applicable to Spain, Italy &amp; Portugal market/country or passport holders otherwise the reservation will not be accepted or supplement fees can be charged on arrival.\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"RO\" boardName=\"ROOM ONLY\" rooms=\"1\" adults=\"1\" children=\"2\">\n                          <cancellationPolicies>\n                              <cancellationPolicy amount=\"141.00\" from=\"2017-09-14T23:59:00+02:00\"/>\n                              <cancellationPolicy amount=\"70.50\" from=\"2017-09-12T23:59:00+02:00\"/>\n                          </cancellationPolicies>\n                      </rate>\n                  </rates>\n              </room>\n          </rooms>\n          <supplier name=\"HOTELBEDS PRODUCT,S.L.U.\" vatNumber=\"ESB38877676\"/>\n      </hotel>\n  </booking>\n</bookingChangeRQ>"
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Sample",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/bookingChangeRS"
                  },
                  "example": {
                    "auditData": {
                      "processTime": "3705",
                      "timestamp": "2017-08-31 11:54:19.670",
                      "requestHost": "212.170.239.110",
                      "serverId": "sa3RKSJACHXE79K.env#PL",
                      "environment": "[int]",
                      "release": "23c542efb2ca3c1642f5f0d87c6c410b81c52ee3",
                      "token": "2fcceecb-acf5-4f8a-a0f3-983eba2978a5",
                      "internal": "null||||0|0||||||||||||0||||0||0|wuupfvswdqfz342cejxfv3ku||"
                    },
                    "booking": {
                      "reference": "52-1274417",
                      "clientReference": "AGENCYTEST",
                      "creationDate": "2017-08-31",
                      "status": "CONFIRMED",
                      "modificationPolicies": {
                        "cancellation": true,
                        "modification": true
                      },
                      "creationUser": "wuupfvswdqfz342cejxfv3ku",
                      "holder": {
                        "name": "INTEGRATIONTESTFIRSTNAME",
                        "surname": "INTEGRATIONTESTLASTNAME"
                      },
                      "hotel": {
                        "checkOut": "2017-09-20",
                        "checkIn": "2017-09-15",
                        "code": 1,
                        "name": "Villa Dorada",
                        "categoryCode": "3EST",
                        "categoryName": "3 STARS",
                        "destinationCode": "SAL",
                        "destinationName": "Salou Area / Costa Dorada",
                        "zoneCode": 10,
                        "zoneName": "Salou",
                        "latitude": "41.06865947991072",
                        "longitude": "1.1524744666303377",
                        "rooms": [
                          {
                            "status": "CONFIRMED",
                            "id": 1,
                            "code": "DBT.ST-3",
                            "name": "Double or Twin MONOPARENTAL 1 ADULT 2 CHILDREN",
                            "paxes": [
                              {
                                "roomId": 1,
                                "type": "AD",
                                "name": "First Adult Name",
                                "surname": "Surname"
                              },
                              {
                                "roomId": 1,
                                "type": "CH",
                                "age": 6,
                                "name": "Second Child Name"
                              },
                              {
                                "roomId": 1,
                                "type": "CH",
                                "age": 5,
                                "name": "First Child Name"
                              }
                            ],
                            "rates": [
                              {
                                "rateClass": "NOR",
                                "net": "302.26",
                                "rateComments": "1x Double or Twin Estimated total amount of taxes & fees for this booking: 2.50 Euro  payable on arrival \r. Car park NO  . Key Collection 14:00 â€“ 00:00. Check-in hour 14:00 â€“ 00:00. . This rate is not applicable to Spain, Italy & Portugal market/country or passport holders otherwise the reservation will not be accepted or supplement fees can be charged on arrival.",
                                "paymentType": "AT_WEB",
                                "packaging": false,
                                "boardCode": "RO",
                                "boardName": "ROOM ONLY",
                                "cancellationPolicies": [
                                  {
                                    "amount": "141.00",
                                    "from": "2017-09-14T23:59:00+02:00"
                                  },
                                  {
                                    "amount": "70.50",
                                    "from": "2017-09-12T23:59:00+02:00"
                                  }
                                ],
                                "rooms": 1,
                                "adults": 1,
                                "children": 2
                              }
                            ]
                          }
                        ],
                        "totalNet": "302.26",
                        "currency": "EUR",
                        "supplier": {
                          "name": "HOTELBEDS PRODUCT,S.L.U.",
                          "vatNumber": "ESB38877676"
                        }
                      },
                      "remark": "Booking remarks are to be written here.",
                      "invoiceCompany": {
                        "code": "E14",
                        "company": "HOTELBEDS SPAIN, S.L.U",
                        "registrationNumber": "ESB57218372"
                      },
                      "totalNet": 302.26,
                      "pendingAmount": 302.26,
                      "currency": "EUR"
                    }
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/bookingChangeRS"
                  },
                  "example": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bookingChangeRS xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" schemaLocation=\"http://www.hotelbeds.com/schemas/messages\">\n    <auditData processTime=\"2978\" timestamp=\"2017-08-31 12:00:25.320\" requestHost=\"58.82.138.226\" serverId=\"sa37AUX3ROLBLIS.env#PL\" environment=\"[int]\" release=\"23c542efb2ca3c1642f5f0d87c6c410b81c52ee3\" token=\"6e486723-6ee7-4715-9145-afbf9fd19acf\" internal=\"null||||0|0||||||||||||0||||0||0|wuupfvswdqfz342cejxfv3ku||\"/>\n    <booking reference=\"52-1274418\" clientReference=\"AGENCYTEST\" creationDate=\"2017-08-31\" status=\"CONFIRMED\" creationUser=\"wuupfvswdqfz342cejxfv3ku\" totalNet=\"302.26\" pendingAmount=\"302.26\" currency=\"EUR\">\n        <modificationPolicies cancellation=\"true\" modification=\"true\"/>\n        <holder name=\"INTEGRATIONTESTFIRSTNAME\" surname=\"INTEGRATIONTESTLASTNAME\"/>\n        <hotel checkOut=\"2017-09-20\" checkIn=\"2017-09-15\" code=\"1\" name=\"Villa Dorada\" categoryCode=\"3EST\" categoryName=\"3 STARS\" destinationCode=\"SAL\" destinationName=\"Salou Area / Costa Dorada\" zoneCode=\"10\" zoneName=\"Salou\" latitude=\"41.06865947991072\" longitude=\"1.1524744666303377\" totalNet=\"302.26\" currency=\"EUR\">\n            <rooms>\n                <room status=\"CONFIRMED\" id=\"1\" code=\"DBT.ST-3\" name=\"Double or Twin MONOPARENTAL 1 ADULT 2 CHILDREN\">\n                    <paxes>\n                        <pax roomId=\"1\" type=\"AD\" name=\"First Adult Name\" surname=\"Surname\"/>\n                        <pax roomId=\"1\" type=\"CH\" age=\"6\" name=\"Second Child Name\"/>\n                        <pax roomId=\"1\" type=\"CH\" age=\"5\" name=\"First Child Name\"/>\n                    </paxes>\n                    <rates>\n                        <rate rateClass=\"NOR\" net=\"302.26\" rateComments=\"1x Double or Twin Estimated total amount of taxes &amp; fees for this booking: 2.50 Euro payable on arrival &nbsp;&#xd;. Car park NO . Key Collection 14:00 &ndash; 00:00. Check-in hour 14:00 &ndash; 00:00. . This rate is not applicable to Spain, Italy &amp; Portugal market/country or passport holders otherwise the reservation will not be accepted or supplement fees can be charged on arrival.\" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"RO\" boardName=\"ROOM ONLY\" rooms=\"1\" adults=\"1\" children=\"2\">\n                            <cancellationPolicies>\n                                <cancellationPolicy amount=\"141.00\" from=\"2017-09-14T23:59:00+02:00\"/>\n                                <cancellationPolicy amount=\"70.50\" from=\"2017-09-12T23:59:00+02:00\"/>\n                            </cancellationPolicies>\n                        </rate>\n                    </rates>\n                </room>\n            </rooms>\n            <supplier name=\"HOTELBEDS PRODUCT,S.L.U.\" vatNumber=\"ESB38877676\"/>\n        </hotel>\n        <remark>Booking remarks are to be written here.</remark>\n        <invoiceCompany code=\"E14\" name=\"HOTELBEDS SPAIN, S.L.U\" registrationNumber=\"ESB57218372\"/>\n    </booking>\n</bookingChangeRS>"
                }
              }
            },
            "401": {
              "$ref": "#/components/responses/401"
            },
            "402": {
              "$ref": "#/components/responses/402"
            },
            "403": {
              "$ref": "#/components/responses/403"
            },
            "406": {
              "$ref": "#/components/responses/406"
            },
            "429": {
              "$ref": "#/components/responses/429"
            },
            "500": {
              "$ref": "#/components/responses/500"
            },
            "503": {
              "$ref": "#/components/responses/503"
            }
          },
          "deprecated": false,
          "x-codegen-request-body-name": "body"
        },
        "delete": {
          "tags": [
            "Booking"
          ],
          "summary": "Booking cancellation",
          "description": "BookingCancellation is used either to simulate a cancellation or to perform the actual cancellation.Cancellations always take into account day and time of the destination in order to calculate what cancellation policy should be applied.\nTimeout for this operation is 60 seconds.",
          "operationId": "bookingCancellation",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "name": "bookingId",
              "in": "path",
              "description": "Booking reference number taken from the confirmation response or from the booking list function.  Format: XXX-YYYYYY",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "cancellationFlag",
              "in": "query",
              "description": "Type of cancellation method to be used.",
              "schema": {
                "type": "string",
                "default": "CANCELLATION",
                "enum": [
                  "CANCELLATION",
                  "SIMULATION"
                ]
              }
            },
            {
              "name": "language",
              "in": "query",
              "description": "Language in which the description texts will be returned in the response",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Sample",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/bookingCancellationRS"
                  },
                  "example": {
                    "auditData": {
                      "processTime": "803",
                      "timestamp": "2018-03-23 09:40:59.157",
                      "requestHost": "212.66.164.12",
                      "serverId": "sa37AUX3ROLBLIS.env",
                      "environment": "[int]",
                      "release": "5c2a98762e8da116cf86a57a17c9db9d2e4d80eb",
                      "token": "24b3b38c-8a53-44aa-9019-429534bf7c05",
                      "internal": "null||||0|1||||||||||||1|||0|0||0|null|||"
                    },
                    "booking": {
                      "reference": "1-3816248",
                      "cancellationReference": "PPFPPJXXVZ",
                      "clientReference": "TESTBOOKING",
                      "creationDate": "2018-03-23",
                      "status": "CANCELLED",
                      "modificationPolicies": {
                        "cancellation": false,
                        "modification": false
                      },
                      "creationUser": "wuupfvswdqfz342cejxfv3ku",
                      "holder": {
                        "name": "HOLDERFIRSTNAME",
                        "surname": "HOLDERLASTNAME"
                      },
                      "hotel": {
                        "checkOut": "2018-04-24",
                        "checkIn": "2018-04-23",
                        "code": 229318,
                        "name": "Hotel Hostal Cuba",
                        "categoryCode": "4EST",
                        "categoryName": "4 STARS",
                        "destinationCode": "PMI",
                        "destinationName": "Majorca",
                        "zoneCode": 10,
                        "zoneName": "Palma",
                        "latitude": "39.570177",
                        "longitude": "2.639077",
                        "rooms": [
                          {
                            "status": "CANCELLED",
                            "id": 1,
                            "code": "JSU.ST",
                            "name": "JUNIOR SUITE STANDARD",
                            "supplierReference": "16923904M-MJ",
                            "paxes": [
                              {
                                "roomId": 1,
                                "type": "AD"
                              },
                              {
                                "roomId": 1,
                                "type": "AD"
                              }
                            ],
                            "rates": [
                              {
                                "rateClass": "NOR",
                                "net": "0.00",
                                "sellingRate": "0.00",
                                "hotelMandatory": true,
                                "rateComments": "Car park NO   . Key Collection 15:00 â€“ . Check-in hour 15:00 â€“ 00:00. No hen/stag or any other parties allowed  â€“ .",
                                "paymentType": "AT_WEB",
                                "packaging": false,
                                "boardCode": "BB",
                                "boardName": "BED AND BREAKFAST",
                                "rooms": 1,
                                "adults": 2,
                                "children": 0
                              }
                            ]
                          }
                        ],
                        "totalNet": "0.00",
                        "currency": "EUR",
                        "supplier": {
                          "name": "HOTELBEDS SPAIN, S.L.U.",
                          "vatNumber": "ESB28916765"
                        },
                        "cancellationAmount": 0
                      },
                      "remark": "Booking remarks are to be written here.",
                      "invoiceCompany": {
                        "code": "E14",
                        "company": "HOTELBEDS SPAIN, S.L.U",
                        "registrationNumber": "ESB57218372"
                      },
                      "totalNet": 0,
                      "pendingAmount": 0,
                      "currency": "EUR"
                    }
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/bookingCancellationRS"
                  },
                  "example": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bookingCancellationRS xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" schemaLocation=\"http://www.hotelbeds.com/schemas/messages\">\n    <auditData processTime=\"543\" timestamp=\"2018-03-23 10:03:02.283\" requestHost=\"212.66.164.12\" serverId=\"sa37AUX3ROLBLIS.env\" environment=\"[int]\" release=\"5c2a98762e8da116cf86a57a17c9db9d2e4d80eb\" token=\"b6f1f3b7-eeec-45b4-a3a5-fb4f577041c2\" internal=\"null||||0|1||||||||||||1|||0|0||0|null|||\"/>\n    <booking reference=\"1-3816249\" cancellationReference=\"XCUASHWWPL\" clientReference=\"TESTBOOKING\" creationDate=\"2018-03-23\" status=\"CANCELLED\" creationUser=\"wuupfvswdqfz342cejxfv3ku\" totalNet=\"0.00\" pendingAmount=\"0.00\" currency=\"EUR\">\n        <modificationPolicies cancellation=\"false\" modification=\"false\"/>\n        <holder name=\"HOLDERFIRSTNAME\" surname=\"HOLDERLASTNAME\"/>\n        <hotel checkOut=\"2018-04-24\" checkIn=\"2018-04-23\" code=\"229318\" name=\"Hotel Hostal Cuba\" categoryCode=\"4EST\" categoryName=\"4 STARS\" destinationCode=\"PMI\" destinationName=\"Majorca\" zoneCode=\"10\" zoneName=\"Palma\" latitude=\"39.570177\" longitude=\"2.639077\" totalNet=\"0.00\" currency=\"EUR\" cancellationAmount=\"0.00\">\n            <rooms>\n                <room status=\"CANCELLED\" id=\"1\" code=\"JSU.ST\" name=\"JUNIOR SUITE STANDARD\" supplierReference=\"18431999M-MJ\">\n                    <paxes>\n                        <pax roomId=\"1\" type=\"AD\"/>\n                        <pax roomId=\"1\" type=\"AD\"/>\n                    </paxes>\n                    <rates>\n                        <rate rateClass=\"NOR\" net=\"0.00\" sellingRate=\"0.00\" hotelMandatory=\"true\" rateComments=\"Car park NO   . Key Collection 15:00 â€“ . Check-in hour 15:00 â€“ 00:00. No hen/stag or any other parties allowed  â€“ . \" paymentType=\"AT_WEB\" packaging=\"false\" boardCode=\"BB\" boardName=\"BED AND BREAKFAST\" rooms=\"1\" adults=\"2\" children=\"0\"/>\n                    </rates>\n                </room>\n            </rooms>\n            <supplier name=\"HOTELBEDS SPAIN, S.L.U.\" vatNumber=\"ESB28916765\"/>\n        </hotel>\n        <remark>Booking remarks are to be written here.</remark>\n        <invoiceCompany code=\"E14\" name=\"HOTELBEDS SPAIN, S.L.U\" registrationNumber=\"ESB57218372\"/>\n    </booking>\n</bookingCancellationRS>"
                }
              }
            },
            "401": {
              "$ref": "#/components/responses/401"
            },
            "403": {
              "$ref": "#/components/responses/403"
            },
            "406": {
              "$ref": "#/components/responses/406"
            },
            "410": {
              "$ref": "#/components/responses/410"
            },
            "429": {
              "$ref": "#/components/responses/429"
            },
            "500": {
              "$ref": "#/components/responses/500"
            }
          },
          "deprecated": false
        }
      },
      "/bookings/reconfirmations": {
        "get": {
          "tags": [
            "Booking"
          ],
          "summary": "Booking reconfirmation",
          "description": "The Reconfirmation operation allows to retrieve the reconfirmation numbers (The confirmation number of the Hotel, both for the Hotelbeds product and for that of external suppliers product) of the bookings made by the client when requested in a GET call to our endpoint.\n\nObtaining this reconfirmation numbers from hoteliers is an __asynchronous__ service: **reconfirmation numbers are not available at the time of the booking**, and as such they can't be informed at the time of the booking, hence the need for this operation.\n\nThe Reconfirmation operation offers a wide variety of filters to help narrowing down reconfirmation number results. Only one filter can be used at the same time. Below the four possible filters you can use:\n\n* between two cheking dates\n* between two reconfirmation dates\n* list of clientReference ids\n* list of booking Ids\n\n## Reconfirmation Service\n\nAdditionally we offer you the capacity to receive the reconfirmation numbers automatically in our reconformation service, designed to automatically send you the reconfirmation information as soon as is available from the hoteliers in two different ways:\n\n* [Push Service](/documentation/hotels/booking-api/reconfirmation-service/push-service/) : The messages will be automatically sent in JSON format to an endpoint of your choice.\n* [Email Service](/documentation/hotels/booking-api/reconfirmation-service/email-service/): The messages will be automatically sent in an email to an address of your choice.\n\nContact our support team at [apitude@hotelbeds.com]() to learn more about this features.",
          "operationId": "bookingreconfirmation",
          "parameters": [
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAccept"
            },
            {
              "$ref": "#/components/parameters/CommonRequestHeaderAcceptEncoding"
            },
            {
              "name": "from",
              "in": "query",
              "description": "Lowest value of the range of bookings with supplierConfirmationCodes to be returned (as in a paginated response).",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int32",
                "example": 1
              }
            },
            {
              "name": "to",
              "in": "query",
              "description": "Highest value of the range of bookings with supplierConfirmationCodes to be returned (as in a paginated response).",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int32",
                "example": 10
              }
            },
            {
              "name": "start",
              "in": "query",
              "description": "Date from when the method will start checking reconfirmation numbers. The format must be YYYY-MM-DD. In case of using __start__ and __end__ parameters, the use of __filterType__ parameter is mandatory.",
              "required": false,
              "schema": {
                "type": "string",
                "format": "date",
                "example": "2020-01-10"
              }
            },
            {
              "name": "end",
              "in": "query",
              "description": "Date to when the method will finish checking reconfirmation numbers. The format must be YYYY-MM-DD. In case of using __start__ and __end__ parameters, the use of __filterType__ parameter is mandatory.",
              "required": false,
              "schema": {
                "type": "string",
                "format": "date",
                "example": "2020-01-15"
              }
            },
            {
              "name": "filterType",
              "in": "query",
              "description": "The parameter is used to identify if the reconfirmation numbers is by check-in date or by reconfirmation date. Values:\n\n* CHECKIN: for the check-in date.\n* RECONFIRMATION: for the reconfirmation date the booking was included in Hotelbeds systems.\n\nIn case of using __filterType__ parameters, the use of __start__ and __end__ parameters is mandatory.",
              "required": false,
              "schema": {
                "type": "string",
                "enum": [
                  "CHECKIN",
                  "RECONFIRMATION"
                ]
              }
            },
            {
              "name": "clientReferences",
              "in": "query",
              "description": "Parameter to filter the results by the booking reference in client API side.Can include multiple values separated by \",\". Max 80 values.",
              "required": false,
              "style": "form",
              "explode": false,
              "schema": {
                "type": "array",
                "items": {
                  "type": "string",
                  "example": "XX270220113856831889,XX270220113856831889"
                }
              }
            },
            {
              "name": "references",
              "in": "query",
              "description": "Parameter to filter the results by the booking reference in Hotelbeds side.Can include multiple values separated by \",\". Max 80 values.",
              "required": false,
              "style": "form",
              "explode": false,
              "schema": {
                "type": "array",
                "items": {
                  "type": "string",
                  "example": "77-1322905,77-1322904"
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Sucessful response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/bookingReconfirmation"
                  },
                  "example": {
                    "auditData": {
                      "processTime": "2125",
                      "timestamp": "2020-02-12 08:43:59.876",
                      "requestHost": "0:0:0:0:0:0:0:1",
                      "serverId": "PMI-L-7RDKRV2#A+",
                      "environment": "[local, awseuwest1]",
                      "release": "97aaaf050e97f38dba4b0be9075523e501bf3dc7",
                      "token": "87AB1EF792B8415F8FAE352076795DF3",
                      "internal": "null||||0|0||||||||||||0|||0|0||0|null|||"
                    },
                    "bookings": [
                      {
                        "reference": "1-3423498",
                        "clientReference": "R3342223421",
                        "hotel": {
                          "rooms": [
                            {
                              "id": 10,
                              "code": "DBL.ST",
                              "supplierConfirmationCode": [
                                "HIL_Conf_444322"
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "reference": "1-3423499",
                        "clientReference": "R3342223425",
                        "hotel": {
                          "rooms": [
                            {
                              "id": 10,
                              "code": "DBL.ST",
                              "supplierConfirmationCode": [
                                "HIL_Conf_444322"
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              }
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
          "description": "Response format.",
          "required": true,
          "schema": {
            "type": "string",
            "enum": [
              "application/json",
              "application/xml"
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
        "CommonRequestHeaderContent": {
          "name": "Content-Type",
          "in": "header",
          "description": "Defines request format.",
          "required": true,
          "schema": {
            "type": "string",
            "enum": [
              "application/json",
              "application/xml"
            ]
          }
        }
      },
      "schemas": {
        "ApiAuditData": {
          "type": "object",
          "description": "Relevant internal information.",
          "properties": {
            "processTime": {
              "type": "string",
              "description": "Server process time in milliseconds.",
              "example": "52",
              "xml": {
                "attribute": true
              }
            },
            "timestamp": {
              "type": "string",
              "description": "Date/time when the request has been processed (always in Spanish time).",
              "example": "2018-12-12T09:17:00.398Z",
              "xml": {
                "attribute": true
              }
            },
            "requestHost": {
              "type": "string",
              "description": "IP address of the system host.",
              "example": "13.81.64.194, 176.34.239.207",
              "xml": {
                "attribute": true
              }
            },
            "serverId": {
              "type": "string",
              "description": "Server code or ID (for internal use).",
              "example": "ip-10-185-27-44.eu-west-1.compute.internal.node.liveaws.discovery",
              "xml": {
                "attribute": true
              }
            },
            "environment": {
              "type": "string",
              "description": "Environment where the request has been sent and processed.",
              "example": "[awseuwest1, awseuwest1b, ip_10_185_27_44]",
              "xml": {
                "attribute": true
              }
            },
            "release": {
              "type": "string",
              "description": "Release version identifier.",
              "example": "9a835c35fd993bfe91db3e7107eb1092771becbc",
              "xml": {
                "attribute": true
              }
            },
            "token": {
              "type": "string",
              "description": "Token identifier of the operation.",
              "example": "8a2842c4-3825-4f73-a181-6e9623839f1e",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiBillingAddress": {
          "required": [
            "address1",
            "city",
            "postalCode",
            "countryCode"
          ],
          "type": "object",
          "description": "The billing address of your credit card. Mandatory for clients with AVS or other fraud detection mechanisms activated. Please contact apitude@hotelbeds.com to know if you must provide this data or not. Normally this is enabled only for clients using the end user's credit card.",
          "properties": {
            "address1": {
              "type": "string",
              "description": "Address first line.",
              "example": "Cambridge Science Park",
              "xml": {
                "attribute": false
              }
            },
            "address2": {
              "type": "string",
              "description": "Address second line.",
              "example": "Milton Road",
              "xml": {
                "attribute": false
              }
            },
            "city": {
              "type": "string",
              "example": "Cambridge",
              "xml": {
                "attribute": false
              }
            },
            "state": {
              "type": "string",
              "example": "Cambridgeshire",
              "xml": {
                "attribute": false
              }
            },
            "postalCode": {
              "type": "string",
              "example": "CB4 0FZ",
              "xml": {
                "attribute": false
              }
            },
            "countryCode": {
              "type": "string",
              "description": "Code of the country.",
              "example": "GB",
              "xml": {
                "attribute": false
              }
            }
          }
        },
        "ApiBoards": {
          "required": [
            "board",
            "included"
          ],
          "type": "object",
          "description": "Filter for board types.",
          "properties": {
            "board": {
              "type": "array",
              "description": "List of board type codes to filter by. You can get all the possible board type code values through the board types operation of [Hotel Content API](/documentation/hotels/content-api/api-reference/).",
              "items": {
                "type": "string"
              }
            },
            "included": {
              "type": "boolean",
              "description": "Includes or excludes the listed board types from the response.",
              "example": false,
              "xml": {
                "attribute": true
              },
              "default": false
            }
          }
        },
        "ApiBooking": {
          "type": "object",
          "description": "The Booking object. Contains all data related with the booking itself.",
          "properties": {
            "reference": {
              "type": "string",
              "description": "Booking locator. Format: XXXXXXXX-XXXXXXXX",
              "example": "123-12345678",
              "xml": {
                "attribute": true
              }
            },
            "cancellationReference": {
              "type": "string",
              "description": "Unique cancellation reference. Only appears for cancelled bookings.",
              "xml": {
                "attribute": true
              }
            },
            "clientReference": {
              "maxLength": 20,
              "minLength": 1,
              "type": "string",
              "description": "Client internal booking reference.",
              "example": "ClientRef #123",
              "xml": {
                "attribute": true
              }
            },
            "creationDate": {
              "type": "string",
              "description": "Booking creation date.",
              "format": "date",
              "example": "2019-06-15T00:00:00.000Z",
              "xml": {
                "attribute": true
              }
            },
            "status": {
              "type": "string",
              "description": "Current status of the booking.",
              "xml": {
                "attribute": true
              },
              "enum": [
                "PRECONFIRMED",
                "CONFIRMED",
                "CANCELLED"
              ]
            },
            "modificationPolicies": {
              "$ref": "#/components/schemas/ApiModificationPolicies"
            },
            "agCommision": {
              "type": "number",
              "xml": {
                "attribute": true
              }
            },
            "commisionVAT": {
              "type": "number",
              "description": "Share of the commission corresponding to the Value Added Tax.",
              "xml": {
                "attribute": true
              }
            },
            "creationUser": {
              "type": "string",
              "description": "The apiKey used to create the booking.",
              "example": "9d3tzqa4msyxfbbrhbhfy4fn",
              "xml": {
                "attribute": true
              }
            },
            "holder": {
              "$ref": "#/components/schemas/ApiHolder"
            },
            "remark": {
              "maxLength": 2000,
              "minLength": 0,
              "type": "string",
              "description": "Free text that is sent to the hotelier as a comment from the client. It can be used to request or inform of special requests to hotelier like: Non-smoking room preferred, Twin bed please, Upper floor preferred, Late arrival.",
              "example": "Booking remarks are to be written here."
            },
            "invoiceCompany": {
              "$ref": "#/components/schemas/ApiReceptive"
            },
            "totalSellingRate": {
              "type": "number",
              "description": "Total amount of the booking in hotelCurrency (for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "totalNet": {
              "type": "number",
              "description": "Total amount of the booking.",
              "example": 203.16,
              "xml": {
                "attribute": true
              }
            },
            "pendingAmount": {
              "type": "number",
              "description": "Remaining amount to be paid.",
              "example": 203.16,
              "xml": {
                "attribute": true
              }
            },
            "currency": {
              "type": "string",
              "description": "Currency of the monetary amount.",
              "example": "USD",
              "xml": {
                "attribute": true
              }
            },
            "hotel": {
              "$ref": "#/components/schemas/ApiHotel"
            }
          }
        },
        "ApiBookingDevice": {
          "required": [
            "userAgent",
            "ip"
          ],
          "type": "object",
          "description": "Defines the device where the booking was made. Mandatory only payments done with the end user's credit card.",
          "properties": {
            "id": {
              "type": "string",
              "description": "Free field to identify the device. In the case of having an integration with Riskified, their token should be sent here.",
              "maxLength": 500
            },
            "ip": {
              "type": "string",
              "description": "IP address of the end user.",
              "example": "212.66.164.12"
            },
            "userAgent": {
              "type": "string",
              "maxLength": 500,
              "description": "useAgent of the end user's browser."
            }
          }
        },
        "ApiBookingRoom": {
          "required": [
            "rateKey"
          ],
          "type": "object",
          "description": "Defines the room to be booked.",
          "properties": {
            "rateKey": {
              "type": "string",
              "description": "Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking.",
              "format": "20190615|20190616|W|1|297|DBT.ST|NRF-SUMMERHB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617",
              "xml": {
                "attribute": true
              }
            },
            "paxes": {
              "type": "array",
              "description": "Data of the passengers assigned to this room.",
              "xml": {
                "name": "paxes",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "pax"
                },
                "$ref": "#/components/schemas/ApiPax"
              }
            }
          }
        },
        "ApiCancellationPolicy": {
          "type": "object",
          "description": "Set of rules that define the penalty the client will receive if the cancellation of a booking is made after a given date.",
          "properties": {
            "amount": {
              "type": "number",
              "description": "Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount.",
              "xml": {
                "attribute": true
              }
            },
            "hotelAmount": {
              "type": "number",
              "description": "Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount, provided in hotel currency (for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "hotelCurrency": {
              "type": "string",
              "description": "Currency in which the cancellation penalties must be paid (for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "from": {
              "type": "string",
              "description": "Date from which the penalties are applied in ISO 8601 format (yyyy-MM-ddTHH:mm:ssZ).",
              "xml": {
                "attribute": true
              }
            },
            "percent": {
              "type": "number",
              "description": "Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount, represented as a percentage of the total amount of the booking.",
              "xml": {
                "attribute": true
              }
            },
            "numberOfNights": {
              "type": "number",
              "description": "Penalty that will be applied for cancellations after the indicated date, represented as a number of nights.",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiCancellationPolicyCheckRate": {
          "type": "object",
          "description": "Set of rules that define the penalty the client will receive if the cancellation of a booking is made after a given date.",
          "properties": {
            "amount": {
              "type": "number",
              "description": "Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount.",
              "xml": {
                "attribute": true
              }
            },
            "hotelAmount": {
              "type": "number",
              "description": "Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount, provided in hotel currency (for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "hotelCurrency": {
              "type": "string",
              "description": "Currency in which the cancellation penalties must be paid (for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "from": {
              "type": "string",
              "description": "Date from which the penalties are applied in ISO 8601 format (yyyy-MM-ddTHH:mm:ssZ).",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiCreditCard": {
          "type": "object",
          "description": "Information on the accepted credit card.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Credit card code.",
              "xml": {
                "attribute": true
              }
            },
            "name": {
              "type": "string",
              "description": "Credit card name.",
              "xml": {
                "attribute": true
              }
            },
            "paymentType": {
              "type": "string",
              "description": "Hotel paymentType in which card is accepted.",
              "xml": {
                "attribute": true
              },
              "enum": [
                "AT_HOTEL",
                "AT_WEB"
              ]
            }
          }
        },
        "ApiDailyRate": {
          "type": "object",
          "description": "Rate for a specific day of the stay.",
          "properties": {
            "offset": {
              "type": "integer",
              "description": "Day number of the stay for which the breakdown is made.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "dailyNet": {
              "type": "number",
              "description": "Net price per day.",
              "xml": {
                "attribute": true
              }
            },
            "dailySellingRate": {
              "type": "number",
              "description": "Room selling price per day.",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiFilter": {
          "type": "object",
          "description": "Filters to limit Availability results by particular values.",
          "properties": {
            "maxHotels": {
              "maximum": 2000,
              "minimum": 1,
              "type": "integer",
              "description": "Filter for maximum number of hotels you want to receive in the response.",
              "format": "int32",
              "example": 1000,
              "xml": {
                "attribute": true
              }
            },
            "maxRooms": {
              "maximum": 50,
              "minimum": 1,
              "type": "integer",
              "description": "Filter for maximum number of rooms you want to receive for each hotel.",
              "format": "int32",
              "example": 10,
              "xml": {
                "attribute": true
              }
            },
            "minRate": {
              "minimum": 0,
              "type": "number",
              "description": "Filter for minimum hotel room price.",
              "example": 0,
              "xml": {
                "attribute": true
              }
            },
            "maxRate": {
              "minimum": 0,
              "type": "number",
              "description": "Filter for maximum hotel room price.",
              "example": 1000,
              "xml": {
                "attribute": true
              }
            },
            "maxRatesPerRoom": {
              "minimum": 1,
              "type": "integer",
              "description": "Filter for maximum number of rates per room.",
              "format": "int32",
              "example": 1,
              "xml": {
                "attribute": true
              }
            },
            "packaging": {
              "type": "boolean",
              "description": "Includes or excludes package rates in the response. Package rates are excluded by default if this is not informed.",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "hotelPackage": {
              "type": "string",
              "description": "Includes or excludes hotel packages (packages created by Hotelbeds that include another product together with the hotel accomodation: massages, tickets, etc.).",
              "example": "BOTH",
              "xml": {
                "attribute": true
              },
              "enum": [
                "YES",
                "NO",
                "BOTH"
              ]
            },
            "minCategory": {
              "maximum": 5,
              "minimum": 1,
              "type": "integer",
              "description": "Filter for minimun hotel category.",
              "format": "int32",
              "example": 1,
              "xml": {
                "attribute": true
              }
            },
            "maxCategory": {
              "maximum": 5,
              "minimum": 1,
              "type": "integer",
              "description": "Filter for maximum hotel category.",
              "format": "int32",
              "example": 5,
              "xml": {
                "attribute": true
              }
            },
            "contract": {
              "type": "string",
              "description": "Filters the results by the contract requested. (NOTE: when using this filter is mandatory to inform availabilityRQ/@aifUse attribute)",
              "example": "CG-VARIOS",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiGeoLocation": {
          "required": [
            "latitude",
            "longitude"
          ],
          "type": "object",
          "description": "Defines the geolocation data for hotel search.",
          "properties": {
            "longitude": {
              "type": "number",
              "description": "Longitude coordinate for geolocation search.",
              "example": 2.62155,
              "xml": {
                "attribute": true
              }
            },
            "latitude": {
              "type": "number",
              "description": "Latitude coordinate for geolocation search.",
              "example": 39.5554,
              "xml": {
                "attribute": true
              }
            },
            "radius": {
              "maximum": 200,
              "type": "number",
              "description": "Radius size for circular search.",
              "xml": {
                "attribute": true
              }
            },
            "unit": {
              "type": "string",
              "description": "Distance unit for the radius.",
              "xml": {
                "attribute": true
              },
              "enum": [
                "mi",
                "km"
              ]
            },
            "secondaryLatitude": {
              "type": "number",
              "description": "Latitude coordinate for geolocation search for rectangle search. Determines bottom right point of the search area.",
              "xml": {
                "attribute": true
              }
            },
            "secondaryLongitude": {
              "type": "number",
              "description": "Longitude coordinate for geolocation search for rectangle search. Determines bottom right point of the search area.",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiHolder": {
          "required": [
            "name",
            "surname"
          ],
          "type": "object",
          "description": "Information of the holder of the booking.",
          "properties": {
            "name": {
              "maxLength": 50,
              "minLength": 1,
              "type": "string",
              "description": "Booking holder name for all the rooms of the booking.",
              "xml": {
                "attribute": true
              }
            },
            "surname": {
              "maxLength": 50,
              "minLength": 1,
              "type": "string",
              "description": "Booking holder surname for all rooms of the booking.",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiHotel": {
          "type": "object",
          "description": "Information about an hotel and its associated room rates.",
          "properties": {
            "checkOut": {
              "type": "string",
              "description": "Check-out date.",
              "format": "date",
              "example": "2019-06-16T00:00:00.000Z",
              "xml": {
                "attribute": true
              }
            },
            "checkIn": {
              "type": "string",
              "description": "Check-in date.",
              "format": "date",
              "example": "2019-06-16T00:00:00.000Z",
              "xml": {
                "attribute": true
              }
            },
            "code": {
              "type": "integer",
              "description": "Hotelbeds internal hotel code.",
              "format": "int32",
              "example": 265,
              "xml": {
                "attribute": true
              }
            },
            "name": {
              "type": "string",
              "description": "Name of the hotel.",
              "example": "HM Jaime III",
              "xml": {
                "attribute": true
              }
            },
            "description": {
              "type": "string",
              "description": "Hotel description.",
              "xml": {
                "attribute": true
              }
            },
            "exclusiveDeal": {
              "type": "integer",
              "description": "The value follows a qualitative scale, the number 1 being always the top priority/preferential, and the rest of the product defined by our commercial departments. As of today, the possible values are:\n  1: Identifies preferential product with exclusive guaranteed availability.\n  2: Identifies top hotels.\n  3: Identifies the rest of hotels.\n  In case new values are added in the future, a proper communication campaign will be carried out to inform you.\n",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "categoryCode": {
              "type": "string",
              "description": "Hotelbeds code of the hotel category.",
              "example": "4EST",
              "xml": {
                "attribute": true
              }
            },
            "categoryName": {
              "type": "string",
              "description": "Name of the hotel category.",
              "example": "4 STARS",
              "xml": {
                "attribute": true
              }
            },
            "destinationCode": {
              "type": "string",
              "description": "Code of the destination of the hotel location.",
              "example": "PMI",
              "xml": {
                "attribute": true
              }
            },
            "destinationName": {
              "type": "string",
              "description": "Name of the destination of the hotel location.",
              "example": "Majorca",
              "xml": {
                "attribute": true
              }
            },
            "zoneCode": {
              "type": "integer",
              "description": "Code of the zone of the hotel location.",
              "format": "int32",
              "example": 10,
              "xml": {
                "attribute": true
              }
            },
            "zoneName": {
              "type": "string",
              "description": "Name of the zone of the hotel location.",
              "example": "Palma",
              "xml": {
                "attribute": true
              }
            },
            "latitude": {
              "type": "string",
              "description": "Latitude coordinate of the hotel location.",
              "xml": {
                "attribute": true
              }
            },
            "longitude": {
              "type": "string",
              "description": "Longitude coordinate of the hotel location.",
              "xml": {
                "attribute": true
              }
            },
            "minRate": {
              "type": "number",
              "description": "Minimum hotel room price.",
              "xml": {
                "attribute": true
              }
            },
            "maxRate": {
              "type": "number",
              "description": "Maximum hotel room price.",
              "xml": {
                "attribute": true
              }
            },
            "totalSellingRate": {
              "type": "number",
              "description": "Total amount of the booking in hotelCurrency (for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "totalNet": {
              "type": "number",
              "description": "Total amount of the booking.",
              "xml": {
                "attribute": true
              }
            },
            "pendingAmount": {
              "type": "number",
              "description": "Remaining amount to be paid.",
              "xml": {
                "attribute": true
              }
            },
            "currency": {
              "type": "string",
              "description": "Client currency.",
              "xml": {
                "attribute": true
              }
            },
            "supplier": {
              "$ref": "#/components/schemas/ApiSupplier"
            },
            "clientComments": {
              "type": "string"
            },
            "cancellationAmount": {
              "type": "number",
              "xml": {
                "attribute": true
              }
            },
            "upselling": {
              "$ref": "#/components/schemas/ApiUpselling"
            },
            "keywords": {
              "type": "array",
              "xml": {
                "name": "keywords",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "keyword"
                },
                "$ref": "#/components/schemas/ApiKeyword"
              }
            },
            "reviews": {
              "type": "array",
              "xml": {
                "name": "reviews",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "review"
                },
                "$ref": "#/components/schemas/ApiReview"
              }
            },
            "rooms": {
              "type": "array",
              "xml": {
                "name": "rooms",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "room"
                },
                "$ref": "#/components/schemas/room"
              }
            },
            "creditCards": {
              "type": "array",
              "description": "List of credit cards accepted by the hotel for Liberate model (pay at hotel).",
              "xml": {
                "name": "creditCards",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "creditCard"
                },
                "$ref": "#/components/schemas/ApiCreditCard"
              }
            },
            "paymentDataRequired": {
              "type": "boolean",
              "description": "Indicates the need for payment data(i.e.: credit card details) in order to finish the booking.",
              "xml": {
                "attribute": true
              },
              "default": false
            }
          }
        },
        "ApiHotelCheckRate": {
          "type": "object",
          "description": "Information about an hotel and its associated room rates.",
          "properties": {
            "checkOut": {
              "type": "string",
              "description": "Check-out date.",
              "format": "date",
              "example": "2019-06-16T00:00:00.000Z",
              "xml": {
                "attribute": true
              }
            },
            "checkIn": {
              "type": "string",
              "description": "Check-in date.",
              "format": "date",
              "example": "2019-06-16T00:00:00.000Z",
              "xml": {
                "attribute": true
              }
            },
            "code": {
              "type": "integer",
              "description": "Hotelbeds internal hotel code.",
              "format": "int32",
              "example": 265,
              "xml": {
                "attribute": true
              }
            },
            "name": {
              "type": "string",
              "description": "Name of the hotel.",
              "example": "HM Jaime III",
              "xml": {
                "attribute": true
              }
            },
            "description": {
              "type": "string",
              "description": "Hotel description.",
              "xml": {
                "attribute": true
              }
            },
            "categoryCode": {
              "type": "string",
              "description": "Hotelbeds code of the hotel category.",
              "example": "4EST",
              "xml": {
                "attribute": true
              }
            },
            "categoryName": {
              "type": "string",
              "description": "Name of the hotel category.",
              "example": "4 STARS",
              "xml": {
                "attribute": true
              }
            },
            "destinationCode": {
              "type": "string",
              "description": "Code of the destination of the hotel location.",
              "example": "PMI",
              "xml": {
                "attribute": true
              }
            },
            "destinationName": {
              "type": "string",
              "description": "Name of the destination of the hotel location.",
              "example": "Majorca",
              "xml": {
                "attribute": true
              }
            },
            "zoneCode": {
              "type": "integer",
              "description": "Code of the zone of the hotel location.",
              "format": "int32",
              "example": 10,
              "xml": {
                "attribute": true
              }
            },
            "zoneName": {
              "type": "string",
              "description": "Name of the zone of the hotel location.",
              "example": "Palma",
              "xml": {
                "attribute": true
              }
            },
            "latitude": {
              "type": "string",
              "description": "Latitude coordinate of the hotel location.",
              "xml": {
                "attribute": true
              }
            },
            "longitude": {
              "type": "string",
              "description": "Longitude coordinate of the hotel location.",
              "xml": {
                "attribute": true
              }
            },
            "minRate": {
              "type": "number",
              "description": "Minimum hotel room price.",
              "xml": {
                "attribute": true
              }
            },
            "maxRate": {
              "type": "number",
              "description": "Maximum hotel room price.",
              "xml": {
                "attribute": true
              }
            },
            "totalSellingRate": {
              "type": "number",
              "description": "Total amount of the booking in hotelCurrency (for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "totalNet": {
              "type": "number",
              "description": "Total amount of the booking.",
              "xml": {
                "attribute": true
              }
            },
            "giata": {
              "type": "number",
              "description": "Giata hotel code.",
              "xml": {
                "attribute": true
              }
            },
            "currency": {
              "type": "string",
              "description": "Client currency.",
              "xml": {
                "attribute": true
              }
            },
            "upselling": {
              "$ref": "#/components/schemas/ApiUpsellingCheckRate"
            },
            "rooms": {
              "type": "array",
              "xml": {
                "name": "rooms",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "room"
                },
                "$ref": "#/components/schemas/roomCheckRate"
              }
            },
            "creditCards": {
              "type": "array",
              "description": "List of credit cards accepted by the hotel for Liberate model (pay at hotel).",
              "xml": {
                "name": "creditCards",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "creditCard"
                },
                "$ref": "#/components/schemas/ApiCreditCard"
              }
            },
            "paymentDataRequired": {
              "type": "boolean",
              "description": "Indicates the need for payment data(i.e.: credit card details) in order to finish the booking.",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "modificationPolicies": {
              "$ref": "#/components/schemas/ApiModificationPolicies"
            }
          }
        },
        "ApiHotels": {
          "type": "object",
          "description": "Hotel availability information.",
          "properties": {
            "checkIn": {
              "type": "string",
              "description": "Check-in date in the current availability response.",
              "format": "date",
              "xml": {
                "attribute": true
              }
            },
            "checkOut": {
              "type": "string",
              "description": "Check-out date in the current availability response.",
              "format": "date",
              "xml": {
                "attribute": true
              }
            },
            "hotels": {
              "type": "array",
              "description": "Information regarding the hotels.",
              "items": {
                "xml": {
                  "name": "hotel"
                },
                "$ref": "#/components/schemas/ApiHotel"
              }
            },
            "total": {
              "type": "integer",
              "description": "Total of hotels returned in the current availability response.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiHotelsFilter": {
          "required": [
            "hotel"
          ],
          "type": "object",
          "description": "Defines the list of hotels for hotel search.",
          "default": true,
          "properties": {
            "hotel": {
              "maxItems": 2000,
              "minItems": 0,
              "type": "array",
              "description": "List of codes of the requested hotels.",
              "items": {
                "type": "integer",
                "format": "int32"
              }
            }
          }
        },
        "ApiKeyword": {
          "required": [
            "code"
          ],
          "type": "object",
          "description": "Code of the keyword associated with the hotel.",
          "properties": {
            "code": {
              "type": "integer",
              "description": "Keyword code.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "rating": {
              "type": "integer",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiKeywordsFilter": {
          "type": "object",
          "description": "Filter by codes of keywords associated to hotels.",
          "properties": {
            "allIncluded": {
              "type": "boolean",
              "description": "Defines if the results must match all the indicated keyword codes.",
              "example": false,
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "keyword": {
              "type": "array",
              "description": "List of keyword codes to filter.",
              "items": {
                "type": "integer",
                "format": "int32"
              }
            }
          }
        },
        "ApiModificationPolicies": {
          "required": [
            "cancellation",
            "modification"
          ],
          "type": "object",
          "description": "Information regarding the allowed modifications to the booking.",
          "properties": {
            "cancellation": {
              "type": "boolean",
              "description": "Indicates if the booking allows cancellation.",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "modification": {
              "type": "boolean",
              "description": "Indicates if the booking allows modification.",
              "xml": {
                "attribute": true
              },
              "default": false
            }
          }
        },
        "ApiOccupancy": {
          "required": [
            "adults",
            "children",
            "rooms"
          ],
          "type": "object",
          "description": "Definition of passengers groups and how they are distributed in different rooms.",
          "properties": {
            "rooms": {
              "minimum": 1,
              "type": "integer",
              "description": "Number of requested rooms of this occupancy.",
              "format": "int32",
              "example": 1,
              "xml": {
                "attribute": true
              }
            },
            "adults": {
              "minimum": 1,
              "type": "integer",
              "description": "Number of adult passengers for this room.",
              "format": "int32",
              "example": 2,
              "xml": {
                "attribute": true
              }
            },
            "children": {
              "minimum": 0,
              "type": "integer",
              "description": "number of child passengers for this room.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiOffer": {
          "type": "object",
          "description": "Offer information.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Code of the offer.",
              "xml": {
                "attribute": true
              }
            },
            "name": {
              "type": "string",
              "description": "Short name/description of the offer.",
              "xml": {
                "attribute": true
              }
            },
            "amount": {
              "type": "number",
              "description": "Monetary amount deducted by the offer. NOTE: This deduction is already applied to the final price.",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiPax": {
          "xml": {
            "name": "pax"
          },
          "required": [
            "type"
          ],
          "type": "object",
          "description": "Passenger information.",
          "properties": {
            "roomId": {
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "example": 1,
              "xml": {
                "attribute": true
              }
            },
            "type": {
              "type": "string",
              "description": "Passenger type, defines if the passenger is adult or child.",
              "xml": {
                "attribute": true
              },
              "enum": [
                "AD",
                "CH"
              ]
            },
            "age": {
              "maximum": 99,
              "minimum": 0,
              "type": "integer",
              "description": "Age of the passenger (required for children passengers).",
              "format": "int32",
              "example": 20,
              "xml": {
                "attribute": true
              }
            },
            "name": {
              "maxLength": 50,
              "minLength": 0,
              "type": "string",
              "description": "Name of the passenger.",
              "xml": {
                "attribute": true
              }
            },
            "surname": {
              "maxLength": 50,
              "minLength": 0,
              "type": "string",
              "description": "Surname of the passenger.",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiPaymentCard": {
          "required": [
            "cardType",
            "cardNumber",
            "cardHolderName",
            "expiryDate",
            "cardCVC"
          ],
          "type": "object",
          "description": "Credit card information.",
          "properties": {
            "cardType": {
              "type": "string",
              "description": "Credit card type.",
              "enum": [
                "AMEX",
                "EURO6000",
                "JCB",
                "DINERS",
                "MASTERCARD",
                "VISA",
                "MAESTRO",
                "SWITCH",
                "SOLO_GB",
                "AIRPLUS",
                "CHINAUNIONPAY",
                "DISCOVER"
              ]
            },
            "cardNumber": {
              "type": "string",
              "description": "Credit card number (without spaces)."
            },
            "cardHolderName": {
              "type": "string",
              "description": "Name of the credit card holder exactly as it appears on the credit card."
            },
            "expiryDate": {
              "type": "string",
              "description": "Expiration date of the credit card;",
              "format": "mmyy",
              "example": "0320 for March 2020."
            },
            "cardCVC": {
              "type": "string",
              "description": "CVC security code of the credit card."
            }
          }
        },
        "ApiPaymentContactData": {
          "required": [
            "email",
            "phoneNumber"
          ],
          "type": "object",
          "description": "Contact data for billing.",
          "properties": {
            "email": {
              "type": "string",
              "description": "Email address."
            },
            "phoneNumber": {
              "type": "string",
              "description": "Telephone number."
            }
          }
        },
        "ApiPaymentData": {
          "required": [
            "contactData",
            "paymentCard"
          ],
          "type": "object",
          "description": "Payment information. This is mandatory for rates with paymentType='AT_HOTEL' or for accounts setup as credit card payment.",
          "properties": {
            "paymentCard": {
              "$ref": "#/components/schemas/ApiPaymentCard"
            },
            "contactData": {
              "$ref": "#/components/schemas/ApiPaymentContactData"
            },
            "billingAddress": {
              "$ref": "#/components/schemas/ApiBillingAddress"
            },
            "threeDsData": {
              "$ref": "#/components/schemas/ThreeDsData"
            },
            "webPartner": {
              "type": "integer",
              "description": "Identifies web partners bookings. Only required when using the end user's credit card.",
              "format": "int32"
            },
            "device": {
              "$ref": "#/components/schemas/ApiBookingDevice"
            }
          }
        },
        "ThreeDsData": {
          "required": [
            "option",
            "version"
          ],
          "type": "object",
          "description": "Mandatory for clients based on Europe using European credit cards.",
          "properties": {
            "option": {
              "type": "string",
              "description": "Use PROVIDED if you have your own integration with a PSP",
              "enum": [
                "PROVIDED",
                "REQUESTED"
              ]
            },
            "version": {
              "type": "string",
              "description": "This field contains the 3DS version used for authentication"
            },
            "infoProvided": {
              "$ref": "#/components/schemas/InfoProvided"
            }
          }
        },
        "InfoProvided": {
          "required": [
            "id",
            "cavv",
            "eci"
          ],
          "type": "object",
          "description": "Provided ThreeDS structure",
          "properties": {
            "id": {
              "type": "string",
              "description": "Transaction identifier resulting from authentication processing."
            },
            "cavv": {
              "type": "string",
              "description": "Cardholder Authentication Verification Value (CAVV)"
            },
            "eci": {
              "type": "string",
              "description": "Electronic Commerce Indicator (ECI). The ECI value is part of the two data elements that indicate the transaction was processed electronically."
            }
          }
        },
        "ApiPromotion": {
          "type": "object",
          "description": "Promotion information.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Code of the promotion.",
              "xml": {
                "attribute": true
              }
            },
            "name": {
              "type": "string",
              "description": "Short name/description of the promotion.",
              "xml": {
                "attribute": true
              }
            },
            "remark": {
              "type": "string",
              "description": "Additional information regarding the promotion.",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiRate": {
          "type": "object",
          "description": "Definition of a rate.",
          "properties": {
            "rateKey": {
              "type": "string",
              "description": "Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking.",
              "format": "20190615|20190616|W|1|297|DBT.ST|NRF-SUMMERHB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617",
              "xml": {
                "attribute": true
              }
            },
            "rateClass": {
              "type": "string",
              "description": "Class of the rate.",
              "xml": {
                "attribute": true
              }
            },
            "rateType": {
              "type": "string",
              "description": "Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK).",
              "xml": {
                "attribute": true
              },
              "enum": [
                "BOOKABLE",
                "RECHECK"
              ]
            },
            "net": {
              "type": "number",
              "description": "Net price of the rate.",
              "xml": {
                "attribute": true
              }
            },
            "discount": {
              "type": "number",
              "description": "Profit margin that the agency would take if it sells at that recommended price.",
              "xml": {
                "attribute": true
              }
            },
            "discountPCT": {
              "type": "number",
              "description": "Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price.",
              "xml": {
                "attribute": true
              }
            },
            "sellingRate": {
              "type": "number",
              "description": "Gross price of the room in case it is included.",
              "xml": {
                "attribute": true
              }
            },
            "hotelSellingRate": {
              "type": "number",
              "description": "Gross price of the room in hotelCurrency(for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "hotelCurrency": {
              "type": "string",
              "description": "Hotel currency(for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "hotelMandatory": {
              "type": "boolean",
              "description": "Identifies if the rate price is recommended.",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "allotment": {
              "type": "integer",
              "description": "Number of rooms available for a particular room type.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "commission": {
              "type": "number",
              "description": "Profit margin the agency takes (commissionable model).",
              "xml": {
                "attribute": true
              }
            },
            "commissionVAT": {
              "type": "number",
              "description": "Share of the commission corresponding to the Value Added Tax.",
              "xml": {
                "attribute": true
              }
            },
            "commissionPCT": {
              "type": "number",
              "description": "Percentual share of the price corresponding to commision.",
              "xml": {
                "attribute": true
              }
            },
            "rateCommentsId": {
              "type": "string",
              "description": "Comments associated to this rate (more information on [Hotel Content API](/documentation/hotels/content-api/api-reference/) ).",
              "xml": {
                "attribute": true
              }
            },
            "rateComments": {
              "type": "string",
              "description": "Rate comments that contain important information.",
              "xml": {
                "attribute": true
              }
            },
            "paymentType": {
              "type": "string",
              "description": "Defines the type of payment accepted.",
              "xml": {
                "attribute": true
              },
              "enum": [
                "AT_HOTEL",
                "AT_WEB"
              ]
            },
            "packaging": {
              "type": "boolean",
              "description": "Defines if the rate is for packaging.",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "boardCode": {
              "type": "string",
              "description": "Internal board code.",
              "xml": {
                "attribute": true
              }
            },
            "boardName": {
              "type": "string",
              "description": "Board name/description.",
              "xml": {
                "attribute": true
              }
            },
            "rateBreakDown": {
              "$ref": "#/components/schemas/ApiRateBreakDown"
            },
            "rooms": {
              "type": "integer",
              "description": "Number of rooms requested.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "adults": {
              "type": "integer",
              "description": "Number of adults requested for each room.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "children": {
              "type": "integer",
              "description": "Number of children requested for each room.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "childrenAges": {
              "type": "string",
              "description": "Ages of the children (if any).",
              "xml": {
                "attribute": true
              }
            },
            "rateup": {
              "type": "number",
              "description": "Difference between original rate price and upselling rate price.",
              "xml": {
                "attribute": true
              }
            },
            "brand": {
              "type": "string",
              "description": "Brand of the hotel.",
              "xml": {
                "attribute": true
              }
            },
            "resident": {
              "type": "boolean",
              "description": "Indicates if the rate is only for residents (only appears when resident rates are requested).",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "cancellationPolicies": {
              "type": "array",
              "description": "List of cancellation policies on the rate.",
              "xml": {
                "name": "cancellationPolicies",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "cancellationPolicy"
                },
                "$ref": "#/components/schemas/ApiCancellationPolicy"
              }
            },
            "taxes": {
              "$ref": "#/components/schemas/ApiTaxes"
            },
            "promotions": {
              "type": "array",
              "description": "List of promotions on the rate.",
              "xml": {
                "name": "promotions",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "promotion"
                },
                "$ref": "#/components/schemas/ApiPromotion"
              }
            },
            "offers": {
              "type": "array",
              "description": "List of offers on the rate.",
              "xml": {
                "name": "offers",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "offer"
                },
                "$ref": "#/components/schemas/ApiOffer"
              }
            },
            "shiftRates": {
              "type": "array",
              "description": "Information about rates for alternative dates.",
              "xml": {
                "name": "shifts",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "shiftRate"
                },
                "$ref": "#/components/schemas/ApiShiftRate"
              }
            },
            "dailyRates": {
              "type": "array",
              "description": "Breakdown of the rate for each day of the stay.",
              "xml": {
                "name": "dailyRates",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "dailyRate"
                },
                "$ref": "#/components/schemas/ApiDailyRate"
              }
            }
          }
        },
        "ApiRateCheckRate": {
          "type": "object",
          "description": "Definition of a rate.",
          "properties": {
            "rateKey": {
              "type": "string",
              "description": "Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking.",
              "format": "20190615|20190616|W|1|297|DBT.ST|NRF-SUMMERHB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617",
              "xml": {
                "attribute": true
              }
            },
            "rateClass": {
              "type": "string",
              "description": "Class of the rate.",
              "xml": {
                "attribute": true
              }
            },
            "rateType": {
              "type": "string",
              "description": "Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK).",
              "xml": {
                "attribute": true
              },
              "enum": [
                "BOOKABLE",
                "RECHECK"
              ]
            },
            "net": {
              "type": "number",
              "description": "Net price of the rate.",
              "xml": {
                "attribute": true
              }
            },
            "discount": {
              "type": "number",
              "description": "Profit margin that the agency would take if it sells at that recommended price.",
              "xml": {
                "attribute": true
              }
            },
            "discountPCT": {
              "type": "number",
              "description": "Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price.",
              "xml": {
                "attribute": true
              }
            },
            "sellingRate": {
              "type": "number",
              "description": "Gross price of the room in case it is included.",
              "xml": {
                "attribute": true
              }
            },
            "hotelSellingRate": {
              "type": "number",
              "description": "Gross price of the room in hotelCurrency(for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "hotelCurrency": {
              "type": "string",
              "description": "Hotel currency(for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "hotelMandatory": {
              "type": "boolean",
              "description": "Identifies if the rate price is recommended.",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "allotment": {
              "type": "integer",
              "description": "Number of rooms available for a particular room type.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "commission": {
              "type": "number",
              "description": "Profit margin the agency takes (commissionable model).",
              "xml": {
                "attribute": true
              }
            },
            "commissionVAT": {
              "type": "number",
              "description": "Share of the commission corresponding to the Value Added Tax.",
              "xml": {
                "attribute": true
              }
            },
            "commissionPCT": {
              "type": "number",
              "description": "Percentual share of the price corresponding to commision.",
              "xml": {
                "attribute": true
              }
            },
            "rateComments": {
              "type": "string",
              "description": "Rate comments that contain important information.",
              "xml": {
                "attribute": true
              }
            },
            "paymentType": {
              "type": "string",
              "description": "Defines the type of payment accepted.",
              "xml": {
                "attribute": true
              },
              "enum": [
                "AT_HOTEL",
                "AT_WEB"
              ]
            },
            "packaging": {
              "type": "boolean",
              "description": "Defines if the rate is for packaging.",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "boardCode": {
              "type": "string",
              "description": "Internal board code.",
              "xml": {
                "attribute": true
              }
            },
            "boardName": {
              "type": "string",
              "description": "Board name/description.",
              "xml": {
                "attribute": true
              }
            },
            "rateBreakDown": {
              "$ref": "#/components/schemas/ApiRateBreakDown"
            },
            "rooms": {
              "type": "integer",
              "description": "Number of rooms requested.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "adults": {
              "type": "integer",
              "description": "Number of adults requested for each room.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "children": {
              "type": "integer",
              "description": "Number of children requested for each room.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "resident": {
              "type": "boolean",
              "description": "Indicates if the rate is only for residents (only appears when resident rates are requested).",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "cancellationPolicies": {
              "type": "array",
              "description": "List of cancellation policies on the rate.",
              "xml": {
                "name": "cancellationPolicies",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "cancellationPolicy"
                },
                "$ref": "#/components/schemas/ApiCancellationPolicyCheckRate"
              }
            },
            "promotions": {
              "type": "array",
              "description": "List of promotions on the rate.",
              "xml": {
                "name": "promotions",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "promotion"
                },
                "$ref": "#/components/schemas/ApiPromotion"
              }
            },
            "offers": {
              "type": "array",
              "description": "List of offers on the rate.",
              "xml": {
                "name": "offers",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "offer"
                },
                "$ref": "#/components/schemas/ApiOffer"
              }
            }
          }
        },
        "ApiRateUpsellingCheckRate": {
          "type": "object",
          "description": "Definition of a rate.",
          "properties": {
            "rateKey": {
              "type": "string",
              "description": "Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking.",
              "format": "20190615|20190616|W|1|297|DBT.ST|NRF-SUMMERHB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617",
              "xml": {
                "attribute": true
              }
            },
            "rateClass": {
              "type": "string",
              "description": "Class of the rate.",
              "xml": {
                "attribute": true
              }
            },
            "rateType": {
              "type": "string",
              "description": "Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK).",
              "xml": {
                "attribute": true
              },
              "enum": [
                "BOOKABLE",
                "RECHECK"
              ]
            },
            "net": {
              "type": "number",
              "description": "Net price of the rate.",
              "xml": {
                "attribute": true
              }
            },
            "discount": {
              "type": "number",
              "description": "Profit margin that the agency would take if it sells at that recommended price.",
              "xml": {
                "attribute": true
              }
            },
            "discountPCT": {
              "type": "number",
              "description": "Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price.",
              "xml": {
                "attribute": true
              }
            },
            "sellingRate": {
              "type": "number",
              "description": "Gross price of the room in case it is included.",
              "xml": {
                "attribute": true
              }
            },
            "hotelSellingRate": {
              "type": "number",
              "description": "Gross price of the room in hotelCurrency(for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "hotelCurrency": {
              "type": "string",
              "description": "Hotel currency(for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "hotelMandatory": {
              "type": "boolean",
              "description": "Identifies if the rate price is recommended.",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "allotment": {
              "type": "integer",
              "description": "Number of rooms available for a particular room type.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "commission": {
              "type": "number",
              "description": "Profit margin the agency takes (commissionable model).",
              "xml": {
                "attribute": true
              }
            },
            "commissionVAT": {
              "type": "number",
              "description": "Share of the commission corresponding to the Value Added Tax.",
              "xml": {
                "attribute": true
              }
            },
            "commissionPCT": {
              "type": "number",
              "description": "Percentual share of the price corresponding to commision.",
              "xml": {
                "attribute": true
              }
            },
            "rateComments": {
              "type": "string",
              "description": "Rate comments that contain important information.",
              "xml": {
                "attribute": true
              }
            },
            "paymentType": {
              "type": "string",
              "description": "Defines the type of payment accepted.",
              "xml": {
                "attribute": true
              },
              "enum": [
                "AT_HOTEL",
                "AT_WEB"
              ]
            },
            "packaging": {
              "type": "boolean",
              "description": "Defines if the rate is for packaging.",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "boardCode": {
              "type": "string",
              "description": "Internal board code.",
              "xml": {
                "attribute": true
              }
            },
            "boardName": {
              "type": "string",
              "description": "Board name/description.",
              "xml": {
                "attribute": true
              }
            },
            "rateBreakDown": {
              "$ref": "#/components/schemas/ApiRateBreakDown"
            },
            "rooms": {
              "type": "integer",
              "description": "Number of rooms requested.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "adults": {
              "type": "integer",
              "description": "Number of adults requested for each room.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "children": {
              "type": "integer",
              "description": "Number of children requested for each room.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "rateup": {
              "type": "number",
              "description": "Difference between original rate price and upselling rate price.",
              "xml": {
                "attribute": true
              }
            },
            "resident": {
              "type": "boolean",
              "description": "Indicates if the rate is only for residents (only appears when resident rates are requested).",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "cancellationPolicies": {
              "type": "array",
              "description": "List of cancellation policies on the rate.",
              "xml": {
                "name": "cancellationPolicies",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "cancellationPolicy"
                },
                "$ref": "#/components/schemas/ApiCancellationPolicyCheckRate"
              }
            }
          }
        },
        "ApiRateBreakDown": {
          "type": "object",
          "description": "Breakdown of the rate.",
          "properties": {
            "rateDiscounts": {
              "type": "array",
              "description": "Information on discounts for the rate.",
              "xml": {
                "name": "rateDiscounts",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "rateDiscount"
                },
                "$ref": "#/components/schemas/ApiRateDiscount"
              }
            },
            "rateSupplements": {
              "type": "array",
              "description": "Information on supplements for the rate.",
              "xml": {
                "name": "rateSupplements",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "rateSupplement"
                },
                "$ref": "#/components/schemas/ApiRateSupplement"
              }
            }
          }
        },
        "ApiRateDiscount": {
          "type": "object",
          "description": "Information describing a discount on a rate.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Code of the discount.",
              "xml": {
                "attribute": true
              }
            },
            "name": {
              "type": "string",
              "description": "Discount name/description.",
              "xml": {
                "attribute": true
              }
            },
            "amount": {
              "type": "number",
              "description": "Monetary deducted by the discount NOTE: This deduction is already applied to the final price.",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiRateSupplement": {
          "type": "object",
          "description": "Information describing a supplement on a rate.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Internal code of the supplement.",
              "xml": {
                "attribute": true
              }
            },
            "name": {
              "type": "string",
              "description": "Name/description of the supplement.",
              "xml": {
                "attribute": true
              }
            },
            "from": {
              "type": "string",
              "description": "Date from which the discount is applied.",
              "format": "date",
              "xml": {
                "attribute": true
              }
            },
            "to": {
              "type": "string",
              "description": "Date when the discount ends.",
              "format": "date",
              "xml": {
                "attribute": true
              }
            },
            "amount": {
              "type": "number",
              "description": "Amount of the supplement.",
              "xml": {
                "attribute": true
              }
            },
            "nights": {
              "type": "integer",
              "description": "Number of nights for which the supplement applies.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "paxNumber": {
              "type": "integer",
              "description": "Number of paxes that are affected by the supplement.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiReceptive": {
          "type": "object",
          "description": "Information about the invoice company.",
          "properties": {
            "registrationNumber": {
              "type": "string",
              "description": "Registration number of the invoice company.",
              "example": "ABC12345678",
              "xml": {
                "attribute": true
              }
            },
            "code": {
              "type": "string",
              "description": "Code of the invoice company.",
              "example": "E10",
              "xml": {
                "attribute": true
              }
            },
            "name": {
              "type": "string",
              "description": "Name of the invoice company.",
              "example": "HOTELBEDS S.L.U.",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiReview": {
          "type": "object",
          "description": "Reviews of the hotel.",
          "properties": {
            "rate": {
              "type": "number",
              "description": "Rating value.",
              "xml": {
                "attribute": true
              }
            },
            "reviewCount": {
              "type": "integer",
              "description": "Total number of ratings for that particular hotel.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "type": {
              "type": "string",
              "description": "Source of the review. Posible values: TRIPADVISOR, HOTELBEDS.",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiReviewFilter": {
          "required": [
            "type"
          ],
          "type": "object",
          "description": "Filter hotels by rating and number of reviews.",
          "properties": {
            "type": {
              "type": "string",
              "description": "Defines the source of the reviews.",
              "xml": {
                "attribute": true
              },
              "enum": [
                "TRIPADVISOR",
                "HOTELBEDS"
              ]
            },
            "minRate": {
              "maximum": 5,
              "minimum": 0,
              "type": "number",
              "description": "Minimun review rating you want the hotels to have.",
              "xml": {
                "attribute": true
              }
            },
            "maxRate": {
              "maximum": 5,
              "minimum": 0,
              "type": "number",
              "description": "Maximum review rating you want the hotels to have.",
              "example": 1,
              "xml": {
                "attribute": true
              }
            },
            "minReviewCount": {
              "type": "integer",
              "description": "Minimum number of reviews you want the hotels to have.",
              "format": "int32",
              "example": 1,
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiRooms": {
          "required": [
            "included",
            "room"
          ],
          "type": "object",
          "description": "Filter for room types.",
          "properties": {
            "room": {
              "type": "array",
              "description": "List of room type codes to filter by. You can get all the possible room type code values through the room types operation of [Hotel Content API](/documentation/hotels/content-api/api-reference/).",
              "items": {
                "type": "string"
              }
            },
            "included": {
              "type": "boolean",
              "description": "Includes or excludes the listed room types from the response.",
              "example": false,
              "xml": {
                "attribute": true
              },
              "default": false
            }
          }
        },
        "ApiShiftRate": {
          "type": "object",
          "description": "Definition of a rate for an alternative date to the one used in the availability request.",
          "properties": {
            "rateKey": {
              "type": "string",
              "description": "Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking.",
              "format": "20190615|20190616|W|1|297|DBT.ST|NRF-SUMMERHB|HB||1~2~0||N@9ECC4527810D418C8C9420715BEC35D01617",
              "xml": {
                "attribute": true
              }
            },
            "rateClass": {
              "type": "string",
              "description": "Class of the rate.",
              "xml": {
                "attribute": true
              }
            },
            "rateType": {
              "type": "string",
              "description": "Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK).",
              "xml": {
                "attribute": true
              },
              "enum": [
                "BOOKABLE",
                "RECHECK"
              ]
            },
            "net": {
              "type": "number",
              "description": "Net price of the rate.",
              "xml": {
                "attribute": true
              }
            },
            "discount": {
              "type": "number",
              "description": "Profit margin that the agency would take if it sells at that recommended price.",
              "xml": {
                "attribute": true
              }
            },
            "discountPCT": {
              "type": "number",
              "description": "Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price.",
              "xml": {
                "attribute": true
              }
            },
            "sellingRate": {
              "type": "number",
              "description": "Gross price of the room in case it is included.",
              "xml": {
                "attribute": true
              }
            },
            "hotelSellingRate": {
              "type": "number",
              "description": "Gross price of the room in hotelCurrency(for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "hotelCurrency": {
              "type": "string",
              "description": "Hotel currency(for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "hotelMandatory": {
              "type": "boolean",
              "description": "Identifies if the rate price is recommended.",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "allotment": {
              "type": "integer",
              "description": "Number of rooms available for a particular room type.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "commission": {
              "type": "number",
              "description": "Profit margin the agency takes (commissionable model).",
              "xml": {
                "attribute": true
              }
            },
            "commissionVAT": {
              "type": "number",
              "description": "Share of the commission corresponding to the Value Added Tax.",
              "xml": {
                "attribute": true
              }
            },
            "commissionPCT": {
              "type": "number",
              "description": "Percentual share of the price corresponding to commision.",
              "xml": {
                "attribute": true
              }
            },
            "checkIn": {
              "type": "string",
              "description": "CheckIn date for the shift rate. This will always be different than the requested date or the dates of the not alternative rates.",
              "format": "date",
              "xml": {
                "attribute": true
              }
            },
            "checkOut": {
              "type": "string",
              "description": "CheckIn date for the shift rate. This will always be different than the requested date or the dates of the not alternative rates.",
              "format": "date",
              "xml": {
                "attribute": true
              }
            },
            "brand": {
              "type": "string",
              "description": "Brand of the hotel.",
              "xml": {
                "attribute": true
              }
            },
            "resident": {
              "type": "boolean",
              "description": "Indicates if the rate is only for residents (only appears when resident rates are requested).",
              "xml": {
                "attribute": true
              },
              "default": false
            }
          }
        },
        "ApiStay": {
          "required": [
            "checkIn",
            "checkOut"
          ],
          "type": "object",
          "description": "Defines the time of the stay at the hotel.",
          "properties": {
            "checkIn": {
              "type": "string",
              "description": "Check-in date.",
              "format": "date",
              "example": "2017-09-21T00:00:00.000Z",
              "xml": {
                "attribute": true
              }
            },
            "checkOut": {
              "type": "string",
              "description": "Check-out date.",
              "format": "date",
              "example": "2017-09-23T00:00:00.000Z",
              "xml": {
                "attribute": true
              }
            },
            "shiftDays": {
              "maximum": 5,
              "minimum": 1,
              "type": "integer",
              "description": "Amount of days after and before the check-in to check availability, keeping the same stay duration.",
              "format": "int32",
              "example": 3,
              "xml": {
                "attribute": true
              }
            },
            "allowOnlyShift": {
              "type": "boolean",
              "description": "Defines if results are returned for shiftDays even if there's no results for the searched dates.",
              "example": false,
              "xml": {
                "attribute": true
              },
              "default": true
            }
          }
        },
        "ApiSupplier": {
          "type": "object",
          "description": "Supplier information.",
          "properties": {
            "name": {
              "type": "string",
              "description": "Supplier name.",
              "xml": {
                "attribute": true
              }
            },
            "vatNumber": {
              "type": "string",
              "description": "Supplier VAT number.",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiTax": {
          "type": "object",
          "description": "Tax information.",
          "properties": {
            "included": {
              "type": "boolean",
              "description": "Indicates if the tax is included in the price or not.",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "percent": {
              "type": "number",
              "description": "Value of the tax as a percentage.",
              "xml": {
                "attribute": true
              }
            },
            "amount": {
              "type": "number",
              "description": "Value of the tax in hotel currency if the tax is not included in the price.",
              "xml": {
                "attribute": true
              }
            },
            "currency": {
              "type": "string",
              "description": "Currency of the tax amount.",
              "xml": {
                "attribute": true
              }
            },
            "type": {
              "type": "string",
              "description": "Type of the tax.",
              "xml": {
                "attribute": true
              },
              "enum": [
                "TAX",
                "FEE",
                "TAXESANDFEES"
              ]
            },
            "clientAmount": {
              "type": "number",
              "description": "Net amount of the tax in the client configured currency.",
              "xml": {
                "attribute": true
              }
            },
            "clientCurrency": {
              "type": "string",
              "description": "Client configured currency.",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiTaxes": {
          "type": "object",
          "description": "Information of taxes.",
          "properties": {
            "allIncluded": {
              "type": "boolean",
              "description": "Indicates if all taxes are included or not.",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "taxScheme": {
              "type": "string",
              "description": "\"margin\": This is an indirect tax regime for travel agencies where split of taxes is not shown in the invoices. In this case, the customer could not deduct any taxes even if the final customer is a legal entity with the right of deduction for indirect taxes. \"general\": This is the indirect tax regime where the split of taxes is shown in the invoices. In this case, the booking will be invoiced with split of taxes and the customer could be able to deduct the VAT and in some countries, these taxes are reduced rates. This tax scheme offers tax advantage for business customers with the right of deduction for indirect taxes.",
              "xml": {
                "attribute": true
              },
              "enum": [
                "margin",
                "general"
              ]
            },
            "taxes": {
              "type": "array",
              "description": "List of taxes.",
              "items": {
                "$ref": "#/components/schemas/ApiTax"
              }
            }
          }
        },
        "ApiUpselling": {
          "type": "object",
          "description": "Additional room options with superior category available at the same hotel that was requested.",
          "properties": {
            "rooms": {
              "type": "array",
              "description": "List of available rooms with superior category.",
              "xml": {
                "name": "rooms",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "room"
                },
                "$ref": "#/components/schemas/room"
              }
            }
          }
        },
        "ApiUpsellingCheckRate": {
          "type": "object",
          "description": "Additional room options with superior category available at the same hotel that was requested.",
          "properties": {
            "rooms": {
              "type": "array",
              "description": "List of available rooms with superior category.",
              "xml": {
                "name": "rooms",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "room"
                },
                "$ref": "#/components/schemas/roomUpsellingCheckRate"
              }
            }
          }
        },
        "ApiVoucher": {
          "type": "object",
          "description": "Booking voucher information.",
          "properties": {
            "language": {
              "type": "string",
              "description": "Language code that defines the language of the descriptions of the voucher. English will be used by default if this field is not informed.",
              "xml": {
                "attribute": true
              }
            },
            "email": {
              "$ref": "#/components/schemas/ApiVoucherEmail"
            },
            "logo": {
              "type": "string",
              "description": "Path of the picture you want to be featured in the header of the voucher as logo. Accepted formats: PNG, JPG, GIF & BMP. Max size: 100px x 100px. The filename part of the picture path cannot exceed 35 characters length."
            }
          }
        },
        "ApiVoucherEmail": {
          "type": "object",
          "description": "Information regarding the email delivery of the voucher.",
          "properties": {
            "to": {
              "type": "string",
              "description": "Email address to which the voucher will be sent. Only one address is allowed.",
              "xml": {
                "attribute": true
              }
            },
            "from": {
              "type": "string",
              "description": "Email address that will appear as sender of the email. If not used, the default value is noreply@hotelbeds.com",
              "xml": {
                "attribute": true
              }
            },
            "title": {
              "type": "string",
              "description": "Email subject. If not used, the default subject will have the following structure: Voucher - {{bookingReference}} - {{hotelName}}.",
              "xml": {
                "attribute": true
              }
            },
            "body": {
              "type": "string",
              "description": "Body of the voucher email.",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "apiError": {
          "required": [
            "code"
          ],
          "type": "object",
          "description": "Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Internal token code of the error.",
              "example": "INVALID_DATA-bf849e45-7f6d-40e1-b119-8b9aa2729ec5"
            },
            "message": {
              "type": "string",
              "description": "Descriptive message of the cause of the error.",
              "example": "Invalid data. Error at property stay: Check-in must be in the future."
            }
          },
          "xml": {
            "name": "apiError",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "availabilityRQ": {
          "required": [
            "stay",
            "occupancies"
          ],
          "type": "object",
          "description": "Request of Availability operation.",
          "properties": {
            "stay": {
              "$ref": "#/components/schemas/ApiStay"
            },
            "geolocation": {
              "$ref": "#/components/schemas/ApiGeoLocation"
            },
            "filter": {
              "$ref": "#/components/schemas/ApiFilter"
            },
            "boards": {
              "$ref": "#/components/schemas/ApiBoards"
            },
            "rooms": {
              "$ref": "#/components/schemas/ApiRooms"
            },
            "dailyRate": {
              "type": "boolean",
              "description": "Displays price breakdown per each day of the hotel stay.",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "sourceMarket": {
              "type": "string",
              "description": "Hotelbeds Group client source market.",
              "example": "ES",
              "xml": {
                "attribute": true
              }
            },
            "aifUse": {
              "type": "boolean",
              "description": "Tags the request for CacheAPI users (NOTE: MANDATORY for this users when filtering by contract).",
              "default": false
            },
            "platform": {
              "type": "integer",
              "description": "Defines the platform for multiclient developer platforms.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "language": {
              "type": "string",
              "description": "Language code that defines the language of the response. English will be used by default if this field is not informed.",
              "example": "ENG",
              "xml": {
                "attribute": true
              }
            },
            "occupancies": {
              "type": "array",
              "description": "List of passenger groups for which to request availability.",
              "xml": {
                "name": "occupancies",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "occupancy"
                },
                "$ref": "#/components/schemas/ApiOccupancy"
              }
            },
            "keywords": {
              "$ref": "#/components/schemas/ApiKeywordsFilter"
            },
            "hotels": {
              "$ref": "#/components/schemas/ApiHotelsFilter"
            },
            "review": {
              "type": "array",
              "description": "Filter for review rating.",
              "xml": {
                "name": "reviews",
                "wrapped": true
              },
              "items": {
                "$ref": "#/components/schemas/ApiReviewFilter"
              }
            },
            "accommodations": {
              "type": "array",
              "description": "Filter for accomodation type.",
              "xml": {
                "name": "accommodations",
                "wrapped": true
              },
              "items": {
                "type": "string",
                "description": "Type of accomodation to filter for.",
                "xml": {
                  "name": "accommodation"
                }
              }
            },
            "inclusions": {
              "type": "array",
              "description": "Includes additional rates that are normally not exposed in the Availability results. NOTE: Be aware that inclusions are not filters and as such all of the regular rates are returned with the normally not included ones.",
              "xml": {
                "name": "inclusions",
                "wrapped": true
              },
              "items": {
                "type": "string",
                "xml": {
                  "name": "inclusion"
                },
                "enum": [
                  "RESIDENT_RATES"
                ]
              }
            }
          },
          "xml": {
            "name": "availabilityRQ",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "availabilityRS": {
          "required": [
            "auditData"
          ],
          "type": "object",
          "description": "Response of Availability operation.",
          "properties": {
            "echoToken": {
              "type": "string",
              "xml": {
                "attribute": true
              }
            },
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/apiError"
            },
            "hotels": {
              "$ref": "#/components/schemas/ApiHotels"
            }
          },
          "xml": {
            "name": "availabilityRS",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "bookingCancellationRS": {
          "required": [
            "auditData"
          ],
          "type": "object",
          "description": "Response of BookingCancellation operation.",
          "properties": {
            "echoToken": {
              "type": "string",
              "xml": {
                "attribute": true
              }
            },
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/apiError"
            },
            "booking": {
              "$ref": "#/components/schemas/ApiBooking"
            }
          },
          "xml": {
            "name": "bookingCancellationRS",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "bookingChangeRQ": {
          "required": [
            "booking",
            "mode"
          ],
          "type": "object",
          "description": "Request of BookingChange operation.",
          "properties": {
            "bookingId": {
              "type": "string",
              "xml": {
                "attribute": true
              },
              "deprecated": true
            },
            "mode": {
              "type": "string",
              "description": "Defines if the operation will be a simulation or an actual modification.",
              "enum": [
                "SIMULATION",
                "UPDATE"
              ]
            },
            "paymentData": {
              "$ref": "#/components/schemas/ApiPaymentData"
            },
            "language": {
              "type": "string",
              "description": "Language code that defines the language of the response. English will be used by default if this field is not informed.",
              "example": "ENG",
              "xml": {
                "attribute": true
              }
            },
            "booking": {
              "$ref": "#/components/schemas/ApiBooking"
            }
          },
          "xml": {
            "name": "bookingChangeRQ",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "bookingChangeRS": {
          "required": [
            "auditData"
          ],
          "type": "object",
          "description": "Response of BookingChange operation.",
          "properties": {
            "echoToken": {
              "type": "string",
              "xml": {
                "attribute": true
              }
            },
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/apiError"
            },
            "booking": {
              "$ref": "#/components/schemas/ApiBooking"
            }
          },
          "xml": {
            "name": "bookingChangeRS",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "bookingDetailRS": {
          "required": [
            "auditData"
          ],
          "type": "object",
          "description": "Response of BookingDetail operation.",
          "properties": {
            "echoToken": {
              "type": "string",
              "xml": {
                "attribute": true
              }
            },
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/apiError"
            },
            "booking": {
              "$ref": "#/components/schemas/ApiBooking"
            }
          },
          "xml": {
            "name": "bookingDetailRS",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "ApiRateBookingList": {
          "type": "object",
          "description": "Definition of a rate.",
          "properties": {
            "amount": {
              "type": "number",
              "description": "Amount of the rate.",
              "xml": {
                "attribute": true
              }
            },
            "paymentType": {
              "type": "string",
              "description": "Defines the type of payment accepted.",
              "xml": {
                "attribute": true
              },
              "enum": [
                "AT_HOTEL",
                "AT_WEB"
              ]
            },
            "boardCode": {
              "type": "string",
              "description": "Internal board code.",
              "xml": {
                "attribute": true
              }
            },
            "rooms": {
              "type": "integer",
              "description": "Number of rooms requested.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "roomBookingList": {
          "type": "object",
          "description": "Information about the room and its associated rates.",
          "properties": {
            "status": {
              "type": "string",
              "description": "Booking status of the room.",
              "xml": {
                "attribute": true
              },
              "enum": [
                "NEW",
                "PRECONFIRMED",
                "CONFIRMED",
                "TO_BE_UPDATED",
                "CANCELLED",
                "TO_BE_CANCELLED"
              ]
            },
            "id": {
              "type": "integer",
              "description": "Room reservation identifier.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "code": {
              "type": "string",
              "description": "Internal room code.",
              "xml": {
                "attribute": true
              }
            },
            "paxes": {
              "type": "array",
              "description": "List of paxes for the room.",
              "xml": {
                "name": "paxes",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "pax"
                },
                "$ref": "#/components/schemas/ApiPax"
              }
            },
            "rates": {
              "type": "array",
              "description": "List of rates associated to the room.",
              "xml": {
                "name": "rates",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "rate"
                },
                "$ref": "#/components/schemas/ApiRateBookingList"
              }
            }
          },
          "xml": {
            "name": "room",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "ApiHotelBookingList": {
          "type": "object",
          "description": "Information about an hotel and its associated room rates.",
          "properties": {
            "checkOut": {
              "type": "string",
              "description": "Check-out date.",
              "format": "date",
              "example": "2019-06-16T00:00:00.000Z",
              "xml": {
                "attribute": true
              }
            },
            "checkIn": {
              "type": "string",
              "description": "Check-in date.",
              "format": "date",
              "example": "2019-06-16T00:00:00.000Z",
              "xml": {
                "attribute": true
              }
            },
            "code": {
              "type": "integer",
              "description": "Hotelbeds internal hotel code.",
              "format": "int32",
              "example": 265,
              "xml": {
                "attribute": true
              }
            },
            "name": {
              "type": "string",
              "description": "Name of the hotel.",
              "example": "HM Jaime III",
              "xml": {
                "attribute": true
              }
            },
            "destinationCode": {
              "type": "string",
              "description": "Code of the destination of the hotel location.",
              "example": "PMI",
              "xml": {
                "attribute": true
              }
            },
            "cancellationAmount": {
              "type": "number",
              "xml": {
                "attribute": true
              }
            },
            "rooms": {
              "type": "array",
              "xml": {
                "name": "rooms",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "room"
                },
                "$ref": "#/components/schemas/roomBookingList"
              }
            }
          }
        },
        "ApiBookingList": {
          "type": "object",
          "description": "The Booking object. Contains all data related with the booking itself.",
          "properties": {
            "reference": {
              "type": "string",
              "description": "Booking locator. Format: XXXXXXXX-XXXXXXXX",
              "example": "123-12345678",
              "xml": {
                "attribute": true
              }
            },
            "clientReference": {
              "maxLength": 20,
              "minLength": 1,
              "type": "string",
              "description": "Client internal booking reference.",
              "example": "ClientRef #123",
              "xml": {
                "attribute": true
              }
            },
            "creationDate": {
              "type": "string",
              "description": "Booking creation date.",
              "format": "date",
              "example": "2019-06-15T00:00:00.000Z",
              "xml": {
                "attribute": true
              }
            },
            "status": {
              "type": "string",
              "description": "Current status of the booking.",
              "xml": {
                "attribute": true
              },
              "enum": [
                "PRECONFIRMED",
                "CONFIRMED",
                "CANCELLED"
              ]
            },
            "creationUser": {
              "type": "string",
              "description": "The apiKey used to create the booking.",
              "example": "9d3tzqa4msyxfbbrhbhfy4fn",
              "xml": {
                "attribute": true
              }
            },
            "holder": {
              "$ref": "#/components/schemas/ApiHolder"
            },
            "hotel": {
              "$ref": "#/components/schemas/ApiHotelBookingList"
            },
            "invoiceCompany": {
              "$ref": "#/components/schemas/ApiReceptive"
            },
            "totalSellingRate": {
              "type": "number",
              "description": "Total amount of the booking in hotelCurrency (for the pay at hotel model).",
              "xml": {
                "attribute": true
              }
            },
            "totalNet": {
              "type": "number",
              "description": "Total amount of the booking.",
              "example": 203.16,
              "xml": {
                "attribute": true
              }
            },
            "pendingAmount": {
              "type": "number",
              "description": "Remaining amount to be paid.",
              "example": 203.16,
              "xml": {
                "attribute": true
              }
            },
            "currency": {
              "type": "string",
              "description": "Currency of the monetary amount.",
              "example": "USD",
              "xml": {
                "attribute": true
              }
            }
          }
        },
        "ApiBookingsList": {
          "type": "object",
          "description": "List of bookings and related information.",
          "properties": {
            "bookings": {
              "type": "array",
              "description": "List of returned bookings matching the parameters used in the request.",
              "items": {
                "xml": {
                  "name": "booking"
                },
                "$ref": "#/components/schemas/ApiBookingList"
              }
            }
          }
        },
        "bookingReconfirmation": {
          "type": "object",
          "description": "Response of BookingReconfirmation operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "bookings": {
              "type": "array",
              "description": "Response of BookingReconfirmationList operation.",
              "items": {
                "type": "object",
                "description": "Response of BookingReconfirmationObj operation.",
                "properties": {
                  "reference": {
                    "$ref": "#/components/schemas/ApiBookingList/properties/reference"
                  },
                  "clientReference": {
                    "$ref": "#/components/schemas/ApiBookingList/properties/clientReference"
                  },
                  "hotel": {
                    "type": "object",
                    "properties": {
                      "rooms": {
                        "type": "array",
                        "xml": {
                          "name": "rooms",
                          "wrapped": true
                        },
                        "items": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "$ref": "#/components/schemas/roomBookingList/properties/id"
                            },
                            "code": {
                              "$ref": "#/components/schemas/roomBookingList/properties/code"
                            },
                            "supplierConfirmationCode": {
                              "type": "array",
                              "items": {
                                "type": "string",
                                "xml": {
                                  "attribute": true
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "bookingListRS": {
          "required": [
            "auditData"
          ],
          "type": "object",
          "description": "Response of BookingList operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/apiError"
            },
            "bookings": {
              "$ref": "#/components/schemas/ApiBookingsList"
            }
          },
          "xml": {
            "name": "bookingListRS",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "bookingRQ": {
          "required": [
            "clientReference",
            "holder",
            "room"
          ],
          "type": "object",
          "description": "Request of Booking operation.",
          "properties": {
            "echoToken": {
              "type": "string",
              "xml": {
                "attribute": true
              }
            },
            "holder": {
              "$ref": "#/components/schemas/ApiHolder"
            },
            "paymentData": {
              "$ref": "#/components/schemas/ApiPaymentData"
            },
            "clientReference": {
              "maxLength": 20,
              "minLength": 1,
              "type": "string",
              "description": "Internal booking reference."
            },
            "creationUser": {
              "maxLength": 50,
              "minLength": 1,
              "type": "string",
              "description": "Identifies the agent name of the booking. If empty, by default it will be the same than the apikey performing the booking ."
            },
            "remark": {
              "maxLength": 2000,
              "minLength": 0,
              "type": "string",
              "description": "Free text sent to the hotelier. It can be used to request or inform of special requests to hotelier like: Non-smoking room preferred, Twin bed please, Upper floor preferred, Late arrival."
            },
            "voucher": {
              "$ref": "#/components/schemas/ApiVoucher"
            },
            "tolerance": {
              "type": "number",
              "description": "Margin of price difference (as percentage) accepted when a price difference occurs between Availability/CheckRate and Booking operations. Do not use more than two decimal characters when defining tolerance. Example: to input a tolerance of 5%, you should input 5.00.  NOTE: Authorisation for the use of this tag is subject to prior written agreement with your sales manager"
            },
            "language": {
              "type": "string",
              "description": "Language code that defines the language of the response. English will be used by default if this field is not informed.",
              "example": "ENG",
              "xml": {
                "attribute": true
              }
            },
            "rooms": {
              "maxItems": 2147483647,
              "minItems": 1,
              "type": "array",
              "description": "List of the rooms to be included in the booking.",
              "xml": {
                "name": "rooms",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "room"
                },
                "$ref": "#/components/schemas/ApiBookingRoom"
              }
            }
          },
          "xml": {
            "name": "bookingRQ",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "bookingRS": {
          "required": [
            "auditData"
          ],
          "type": "object",
          "description": "Response of Booking operation.",
          "properties": {
            "echoToken": {
              "type": "string",
              "xml": {
                "attribute": true
              }
            },
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditData"
            },
            "error": {
              "$ref": "#/components/schemas/apiError"
            },
            "booking": {
              "$ref": "#/components/schemas/ApiBooking"
            }
          },
          "xml": {
            "name": "bookingRS",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "checkRateRQ": {
          "required": [
            "room"
          ],
          "type": "object",
          "description": "Request of CheckRate operation.",
          "properties": {
            "upselling": {
              "type": "boolean",
              "description": "Parameter to add or remove the upSelling options node to the response.",
              "xml": {
                "attribute": true
              },
              "default": false
            },
            "language": {
              "type": "string",
              "description": "Language code that defines the language of the response. English will be used by default if this field is not informed.",
              "example": "ENG",
              "xml": {
                "attribute": true
              }
            },
            "rooms": {
              "maxItems": 2147483647,
              "minItems": 1,
              "type": "array",
              "description": "List of rooms to be checked/valuated.",
              "xml": {
                "name": "rooms",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "room"
                },
                "$ref": "#/components/schemas/ApiBookingRoom"
              }
            }
          },
          "xml": {
            "name": "checkRateRQ",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "checkRateRS": {
          "required": [
            "auditData"
          ],
          "type": "object",
          "description": "Response of CheckRate operation.",
          "properties": {
            "auditData": {
              "$ref": "#/components/schemas/ApiAuditDataCheckRate"
            },
            "error": {
              "$ref": "#/components/schemas/apiError"
            },
            "hotels": {
              "$ref": "#/components/schemas/ApiHotelCheckRate"
            }
          },
          "xml": {
            "name": "checkRateRS",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "room": {
          "type": "object",
          "description": "Information about the room and its associated rates.",
          "properties": {
            "status": {
              "type": "string",
              "description": "Booking status of the room.",
              "xml": {
                "attribute": true
              },
              "enum": [
                "NEW",
                "PRECONFIRMED",
                "CONFIRMED",
                "TO_BE_UPDATED",
                "CANCELLED",
                "TO_BE_CANCELLED"
              ]
            },
            "id": {
              "type": "integer",
              "description": "Room reservation identifier.",
              "format": "int32",
              "xml": {
                "attribute": true
              }
            },
            "code": {
              "type": "string",
              "description": "Internal room code.",
              "xml": {
                "attribute": true
              }
            },
            "name": {
              "type": "string",
              "description": "Room name/description.",
              "xml": {
                "attribute": true
              }
            },
            "supplierReference": {
              "type": "string",
              "description": "Booking reference of the booking/room for external supplier bookings.",
              "xml": {
                "attribute": true
              }
            },
            "paxes": {
              "type": "array",
              "description": "List of paxes for the room.",
              "xml": {
                "name": "paxes",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "pax"
                },
                "$ref": "#/components/schemas/ApiPax"
              }
            },
            "rates": {
              "type": "array",
              "description": "List of rates associated to the room.",
              "xml": {
                "name": "rates",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "rate"
                },
                "$ref": "#/components/schemas/ApiRate"
              }
            }
          },
          "xml": {
            "name": "room",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "roomCheckRate": {
          "type": "object",
          "description": "Information about the room and its associated rates.",
          "properties": {
            "code": {
              "type": "string",
              "description": "Internal room code.",
              "xml": {
                "attribute": true
              }
            },
            "name": {
              "type": "string",
              "description": "Room name/description.",
              "xml": {
                "attribute": true
              }
            },
            "rates": {
              "type": "array",
              "description": "List of rates associated to the room.",
              "xml": {
                "name": "rates",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "rate"
                },
                "$ref": "#/components/schemas/ApiRateCheckRate"
              }
            }
          },
          "xml": {
            "name": "room",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "roomUpsellingCheckRate": {
          "type": "object",
          "description": "Information about the room and its associated rates.",
          "properties": {
            "rates": {
              "type": "array",
              "description": "List of rates associated to the room.",
              "xml": {
                "name": "rates",
                "wrapped": true
              },
              "items": {
                "xml": {
                  "name": "rate"
                },
                "$ref": "#/components/schemas/ApiRateUpsellingCheckRate"
              }
            }
          },
          "xml": {
            "name": "room",
            "namespace": "http://www.hotelbeds.com/schemas/messages"
          }
        },
        "ApiAuditDataCheckRate": {
          "type": "object",
          "description": "Relevant internal information.",
          "properties": {
            "token": {
              "type": "string",
              "description": "Token identifier of the operation.",
              "example": "8a2842c4-3825-4f73-a181-6e9623839f1e",
              "xml": {
                "attribute": true
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
              "example": "auditData:\n  timestamp: '2020-02-04 16:30:03.051'\n  requestHost: '212.66.164.13, 64.252.132.81, 10.185.84.185, 34.242.17.225'\n  serverId: ip-10-185-89-145.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery\n  environment: '[awseuwest1, awseuwest1a, ip_10_185_89_145]'\n  release: 8813015814a189304b0f776271181c6aa778ed93\n  token: 0DE456A558FA420B8BC1CAC9D5B28652\n  internal: 0||||0|0||||||||||||0||||0||0|c8zj99aze7hdvtaqh4qvcck4|||\nerror:\n  code: INVALID_REQUEST-0DE456A558FA420B8BC1CAC9D5B28652\n  message: 'The request is not compliant with the specified version of the API. Error at property hotels->hotel: Unrecognized token ''a'': was expecting (''true'', ''false'' or ''null'')'"
            },
            "application/xml": {
              "example": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<availabilityRS xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" schemaLocation=\"http://www.hotelbeds.com/schemas/messages\">\n    <auditData timestamp=\"2020-02-04 16:29:43.345\" requestHost=\"212.66.164.13, 64.252.132.73, 10.185.83.195, 34.242.17.225\" serverId=\"ip-10-185-92-25.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery\" environment=\"[awseuwest1, awseuwest1c, ip_10_185_92_25]\" release=\"8813015814a189304b0f776271181c6aa778ed93\" token=\"BC00BEF41DC0437FA829A6D22B2EA39D\" internal=\"0||||0|0||||||||||||0||||0||0|c8zj99aze7hdvtaqh4qvcck4|||\"/>\n    <error>\n        <code>INVALID_REQUEST-BC00BEF41DC0437FA829A6D22B2EA39D</code>\n        <message>The request is not compliant with the specified version of the API. Error at property hotels->hotel: Unrecognized token 'a': was expecting ('true', 'false' or 'null')</message>\n    </error>\n</availabilityRS>"
            }
          }
        },
        "401": {
          "description": "**UNAUTHORIZED** - Authentication has failed or has not been provided.\n\n* Authorization field missing\n\n* Request signature verification failed",
          "content": {
            "application/json": {
              "example": {
                "error": "Request signature verification failed"
              }
            }
          }
        },
        "402": {
          "description": "payment"
        },
        "403": {
          "description": "**FORBIDDEN** - The credentials are correct and authorization was succesful, but access to this resource/operation is not allowed.",
          "content": {
            "application/json": {
              "example": {
                "error": "Access to this API has been disallowed"
              }
            }
          }
        },
        "404": {
          "description": "**NOT FOUND** - The requested resource could not be found. This error can be due to a temporary or permanent condition.",
          "content": {
            "application/json": {
              "example": "auditData:\n  processTime: '3433'\n  timestamp: '2020-02-04 16:40:22.169'\n  requestHost: '212.66.164.13, 64.252.132.73, 10.185.83.195, 34.242.17.225'\n  serverId: 'ip-10-185-89-145.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery#A+'\n  environment: '[awseuwest1, awseuwest1a, ip_10_185_89_145]'\n  release: 8813015814a189304b0f776271181c6aa778ed93\n  token: BDDAAA250A034A1797DBFCAF56B91BE9\n  internal: 0||||0|0||||||||||||0||||0||0|c8zj99aze7hdvtaqh4qvcck4|||\nerror:\n  code: INVALID_DATA-BDDAAA250A034A1797DBFCAF56B91BE9\n  message: Invalid data. The booking does not exist or you do not have permissions to access it."
            },
            "application/xml": {
              "example": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bookingDetailRS xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" schemaLocation=\"http://www.hotelbeds.com/schemas/messages\">\n    <auditData processTime=\"1781\" timestamp=\"2020-02-04 16:41:33.563\" requestHost=\"212.66.164.13, 64.252.132.81, 10.185.84.185, 34.242.17.225\" serverId=\"ip-10-185-89-145.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery#A+\" environment=\"[awseuwest1, awseuwest1a, ip_10_185_89_145]\" release=\"8813015814a189304b0f776271181c6aa778ed93\" token=\"179B7E49376046CC982959348F9A96AC\" internal=\"0||||0|0||||||||||||0||||0||0|c8zj99aze7hdvtaqh4qvcck4|||\"/>\n    <error>\n        <code>INVALID_DATA-179B7E49376046CC982959348F9A96AC</code>\n        <message>Invalid data. The booking does not exist or you do not have permissions to access it.</message>\n    </error>\n</bookingDetailRS>"
            }
          }
        },
        "406": {
          "description": "**NOT ACCEPTABLE** - The resource identified by the request is only capable of generating response entities which have content characteristics not acceptable according to the accept headers sent in the request.",
          "content": {
            "application/xml": {
              "example": "no body"
            }
          }
        },
        "409": {
          "description": "conflict"
        },
        "410": {
          "description": "error repeated"
        },
        "415": {
          "description": "**UNSUPPORTED MEDIA TYPE** - Use the Content-Type header to set application/json and be sure the format of your payload matches the format",
          "content": {
            "application/xml": {
              "example": "no body"
            }
          }
        },
        "429": {
          "description": "**Rate limit exceeded** - The user has sent too many requests in a given amount of time."
        },
        "500": {
          "description": "**INTERNAL SERVER ERROR** - An unexpected condition was encountered. Possible causes\n\n*SYSTEM_ERROR* - These are internal server errors, please send us these errors together with the complete logs (JSON or XML requests and responses) at [apitude@hotelbeds.com]() so that our team can review them. \n\n*PRODUCT_ERROR* - This type of error is produced due to product restrictions or due to other account set-up limitations. In all cases, the end result is that the booking cannot be confirmed. Here is a list of common product errors:\n\n* *Insufficient allotment*: This means that the user is trying to book a room which is no longer available. This may happen if the room was still available in the Availability stage but someone else has made a reservation for this room or rooms.\n* *Price has increased*: The price increase between booking steps has exceeded the allowed tolerance that was set. This is a setting to protect clients from booking a room with a higher price than expected.\n* *Contract is closed/Office or branch not active/Cannot find channel quotation*: There are problems related to the contract.\n* *Stop sales*: This means that the hotel is forbidding sales on the requested dates.\n* *Booking confirmation error XXX-YYYYYY*: A confirmation error occurred. Please try again later. \n\n*CONFIGURATION_ERROR* - This type of error is produced by configuration restrictions set-up at account level. Usually this results in the inability to perform an specific operation. Here is a list of common configuration errors:\n\n* *This apikey is not associated with a valid client*: This means that the provided apiKey belongs to an inactive client/agency. If you need information regarding the cause for this please contact our support team at [apitude@hotelbeds.com]().",
          "content": {
            "application/json": {
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
            },
            "application/xml": {
              "example": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bookingRS xmlns=\"http://www.hotelbeds.com/schemas/messages\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" schemaLocation=\"http://www.hotelbeds.com/schemas/messages\">\n    <auditData processTime=\"664\" timestamp=\"2020-01-29 17:12:51.308\" requestHost=\"212.66.164.13, 64.252.132.73, 10.185.83.195, 34.242.17.225\" serverId=\"ip-10-185-89-145.eu-west-1.compute.internal.node.int-hbg-aws-eu-west-1.discovery\" environment=\"[awseuwest1, awseuwest1a, ip_10_185_89_145]\" release=\"8813015814a189304b0f776271181c6aa778ed93\" token=\"653FFA26827746AE80B5583439DC985D\" internal=\"0||||0|0||||||||||||0||||0||0|6wvxrqh8x2kjpf4cncwpzvah|||\"/>\n    <error>\n        <code>SYSTEM_ERROR-653FFA26827746AE80B5583439DC985D</code>\n        <message>Internal server error</message>\n    </error>\n</bookingRS>"
            }
          }
        },
        "502": {
          "description": "**BAD GATEWAY** - The server was acting as a gateway or proxy and received an invalid response from the upstream server."
        },
        "503": {
          "description": "**SERVICE UNAVAILABLE** - The server is currently unable to handle the request due to a temporary condition which will be alleviated after some delay. You can choose to resend the request again.\n\n* *BOOKING CHANGE* - Error during cancellation, the booking XXX-YYYYY is locked. Please try again later.\n\n*SERVICE_OVERLOAD* - The server is currently unable to handle the request due to an overwhelming number of requests being processed. Condition which will be alleviated after some delay."
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
          "description": "Your registered API key",
          "name": "Api-key",
          "in": "header"
        },
        "Xsignature": {
          "type": "apiKey",
          "description": "SHA256 encoding signature",
          "name": "X-Signature",
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