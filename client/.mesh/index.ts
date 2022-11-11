// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  /**
   * The BookingDetail operation allows to retrieve a booking with all its details from the booking reference locator.
   *
   * Equivalent to GET /bookings/{bookingId}
   */
  bookingDetailRS?: Maybe<BookingDetailRS>;
  /**
   * The booking list operation returns a list of bookings based on the search criteria. The most important information returned for each booking in the list is:
   *
   *   *  Booking reference
   *   *  Booking holder
   *   *  Booking paxes
   *   *  Hotel, rooms and boards confirmed
   *   *  Booking rates
   *
   * The results are returned in a paginated response that can be filtered with the use of parameters in the request.
   *
   * Timeout for this operation is 60 seconds.
   *
   *
   * Equivalent to GET /bookings
   */
  bookingListRS?: Maybe<BookingListRS>;
  /**
   * The Reconfirmation operation allows to retrieve the reconfirmation numbers (The confirmation number of the Hotel, both for the Hotelbeds product and for that of external suppliers product) of the bookings made by the client when requested in a GET call to our endpoint.
   *
   * Obtaining this reconfirmation numbers from hoteliers is an __asynchronous__ service: **reconfirmation numbers are not available at the time of the booking**, and as such they can't be informed at the time of the booking, hence the need for this operation.
   *
   * The Reconfirmation operation offers a wide variety of filters to help narrowing down reconfirmation number results. Only one filter can be used at the same time. Below the four possible filters you can use:
   *
   * * between two cheking dates
   * * between two reconfirmation dates
   * * list of clientReference ids
   * * list of booking Ids
   *
   * ## Reconfirmation Service
   *
   * Additionally we offer you the capacity to receive the reconfirmation numbers automatically in our reconformation service, designed to automatically send you the reconfirmation information as soon as is available from the hoteliers in two different ways:
   *
   * * [Push Service](/documentation/hotels/booking-api/reconfirmation-service/push-service/) : The messages will be automatically sent in JSON format to an endpoint of your choice.
   * * [Email Service](/documentation/hotels/booking-api/reconfirmation-service/email-service/): The messages will be automatically sent in an email to an address of your choice.
   *
   * Contact our support team at [apitude@hotelbeds.com]() to learn more about this features.
   *
   * Equivalent to GET /bookings/reconfirmations
   */
  bookingReconfirmation?: Maybe<BookingReconfirmation>;
  /**
   * Returns the list of available accommodation types.
   *
   * Equivalent to GET /types/accommodations
   */
  apiAccommodationsRS?: Maybe<ApiAccommodationsRS>;
  /**
   * Returns the list of available amenities.
   *
   * Equivalent to GET /types/amenities
   */
  apiAmenitiesRS?: Maybe<ApiAmenitiesRS>;
  /**
   * Returns the list of available board groups.
   *
   * Equivalent to GET /types/boardgroups
   */
  apiBoardGroupsRS?: Maybe<ApiBoardGroupsRS>;
  /**
   * Returns the list of available board types.
   *
   * Equivalent to GET /types/boards
   */
  apiBoardsRS?: Maybe<ApiBoardsRS>;
  /**
   * Returns the list of available categories.
   *
   * Equivalent to GET /types/categories
   */
  apiCategoriesRS?: Maybe<ApiCategoriesRS>;
  /**
   * Returns the list of available chains.
   *
   * Equivalent to GET /types/chains
   */
  apiChainsRS?: Maybe<ApiChainsRS>;
  /**
   * Returns the list of available countries.
   *
   * This is the higher level available in our destination tree. We do not allow search by country, but it's included for organizational reasons (to group destinations) and because the country codes returned are used in other levels of APItude (for example to define the sourceMarket in Availability operation of [Hotel Booking API](/documentation/hotels/booking-api/api-reference/).
   *
   * Equivalent to GET /locations/countries
   */
  apiCountriesRS?: Maybe<ApiCountriesRS>;
  /**
   * Returns the list of available currencies.
   *
   * Equivalent to GET /types/currencies
   */
  apiCurrenciesRS?: Maybe<ApiCurrenciesRS>;
  /**
   * Return the list of available destinations, zones and grouping zones.
   *
   * Destinations are the highest level entities in our destination tree by which availability can be searched. Please note that destination codes are not IATA codes. It is very important to understand that our 'destination' will not always only correspond with a unique city, but usually with the main city and the area surrounding the city.
   *
   * For example, the destination code NYC in the US, corresponds with the whole New York Area, so it is not limited to the city of New York, but also covers the surrounding areas, such as New Jersey and The Hamptons. Another example is BCN in Spain, which corresponds with the entire Barcelona Province; so it searches hotels located in the city of Barcelona, but also in other cities within the Province of Barcelona, such us Hospitalet de Llobregat, Terrassa and Sabadell. So when you search for availability using the destination code, you will receive results that may be located far from the main city for which you are actually searching.
   *
   * It is very important to check the locations that the search retrieves to avoid booking hotels in a different location than the one requested by your customers.
   *
   * Equivalent to GET /locations/destinations
   */
  apiDestinationsRS?: Maybe<ApiDestinationsRS>;
  /**
   * Returns the list of available facilities.
   *
   * Equivalent to GET /types/facilities
   */
  apiFacilitiesRS?: Maybe<ApiFacilitiesRS>;
  /**
   * Returns the list of available facility groups.
   *
   * Equivalent to GET /types/facilitygroups
   */
  apiFacilityGroupsRS?: Maybe<ApiFacilityGroupsRS>;
  /**
   * Returns the list of available facility typologies.Remarks: Since all fields are returned by default, there won't be any field to filter.
   *
   * Equivalent to GET /types/facilitytypologies
   */
  apiFacilityTypologiesRS?: Maybe<ApiFacilityTypologiesRS>;
  /**
   * Returns the descriptions of the different category groups.
   *
   * Equivalent to GET /types/groupcategories
   */
  apiGroupCategoriesRS?: Maybe<ApiGroupCategoriesRS>;
  /**
   * Returns all the details associated to the Hotel.
   *
   * Equivalent to GET /hotels/{hotelCodes}/details
   */
  apiHotelDetailsRS?: Maybe<ApiHotelDetailsRS>;
  /**
   * Returns the list of currently existing hotels in Hotelbeds portfolio.
   *
   * Equivalent to GET /hotels
   */
  apiHotelsRS?: Maybe<ApiHotelsRS>;
  /**
   * Returns the descriptions of the different image types.
   *
   * Equivalent to GET /types/imagetypes
   */
  apiImageTypesRS?: Maybe<ApiImageTypesRS>;
  /**
   * Repair works, facilities closed,...
   *
   * Equivalent to GET /types/issues
   */
  apiIssuesRS?: Maybe<ApiIssuesRS>;
  /**
   * Returns the list of available languages.
   *
   * The Languages operation is connected to all the operations in which a description is returned, since we return the language code in which that description has been returned.
   *
   * Equivalent to GET /types/languages
   */
  apiLanguagesRS?: Maybe<ApiLanguagesRS>;
  /**
   * Returns the list of available promotions.
   *
   * Equivalent to GET /types/promotions
   */
  apiPromotionsRS?: Maybe<ApiPromotionsRS>;
  /**
   * Returns the list of available values for the rateClass.
   *
   * Equivalent to GET /types/classifications
   */
  apiRateClassRS?: Maybe<ApiRateClassRS>;
  /**
   * Returns the descriptions of the rate comments associated with the hotel that the hotelier wants the client to read before confirming the booking with the given date.
   *
   * Equivalent to GET /types/ratecommentdetails
   */
  apiRateCommentDetailsRS?: Maybe<ApiRateCommentDetailsRS>;
  /**
   * Returns the descriptions of the rate comments associated with the hotel that the hotelier wants the client to read before confirming the booking.
   *
   * Equivalent to GET /types/ratecomments
   */
  apiRateCommentsRS?: Maybe<ApiRateCommentsRS>;
  /**
   * Returns the list of available rooms.
   *
   * Equivalent to GET /types/rooms
   */
  apiRoomsRS?: Maybe<ApiRoomsRS>;
  /**
   * Returns the list of available segments.
   *
   * Equivalent to GET /types/segments
   */
  apiSegmentsRS?: Maybe<ApiSegmentsRS>;
  /**
   * List of terminals per country/destination
   *
   * Equivalent to GET /types/terminals
   */
  apiTerminalsRS?: Maybe<ApiTerminalsRS>;
};


export type QuerybookingDetailRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  bookingId: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QuerybookingListRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  clientReference?: InputMaybe<Scalars['String']>;
  contentType: ContentType;
  country?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  creationUser?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  end: Scalars['String'];
  filterType?: InputMaybe<FilterType>;
  from: Scalars['Int'];
  hotel?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  start: Scalars['String'];
  status?: InputMaybe<Status3>;
  to: Scalars['Int'];
};


export type QuerybookingReconfirmationArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  clientReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  end?: InputMaybe<Scalars['String']>;
  filterType?: InputMaybe<FilterType2>;
  from: Scalars['Int'];
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  start?: InputMaybe<Scalars['String']>;
  to: Scalars['Int'];
};


export type QueryapiAccommodationsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiAmenitiesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiBoardGroupsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiBoardsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiCategoriesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiChainsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiCountriesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiCurrenciesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiDestinationsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  countryCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiFacilitiesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiFacilityGroupsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiFacilityTypologiesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiGroupCategoriesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiHotelDetailsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  hotelCodes: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiHotelsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  countryCode?: InputMaybe<Scalars['String']>;
  destinationCode?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  includeHotels?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  pMSRoomCode?: InputMaybe<Scalars['Boolean']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiImageTypesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiIssuesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiLanguagesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiPromotionsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiRateClassRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiRateCommentDetailsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  code: Scalars['String'];
  date: Scalars['String'];
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiRateCommentsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiRoomsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiSegmentsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiTerminalsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};

export type Mutation = {
  /**
   * This method is used to request **room availability**. Some
   * filters and special features can be applied before sending an availability
   * request.
   *
   * A flexible date search allows customers to retrieve available
   * rates for a specified number of days prior to and post check-in.
   *
   * The response generated is a list of hotels with the different room types, board
   * types, and rates available for those hotels, but not only restricted to the
   * dates selected.
   *
   * BookingAPI prices are final. Our rates include supplements
   * and discounts and no additional price calculations are required.
   *
   * It can also return cancellation fees in the availability response, providing
   * amounts and dates at the first step of the booking.
   *
   * Timeout for this operation is 5 seconds.
   *
   *
   * Equivalent to POST /hotels
   */
  availability?: Maybe<AvailabilityRS>;
  /**
   * The Booking operation requests a reservation confirmation for the specified ratekey or ratekeys.
   *
   * BookingAPI does not support on-request confirmations. All confirmations are instant confirmations.
   *
   * Timeout for this operation is 60 seconds.
   *
   * Equivalent to POST /bookings
   */
  booking?: Maybe<BookingRS>;
  /**
   * BookingCancellation is used either to simulate a cancellation or to perform the actual cancellation.Cancellations always take into account day and time of the destination in order to calculate what cancellation policy should be applied.
   * Timeout for this operation is 60 seconds.
   *
   * Equivalent to DELETE /bookings/{bookingId}
   */
  bookingCancellation?: Maybe<BookingCancellationRS>;
  /**
   * The BookingChange operation is used to change or update different values of a booking.
   *
   * The changes that can be performed are:
   *
   * * Change clientReference
   * * Change remarks
   * * Change holder name and surname
   * * Change checkIn and checkOut date
   * * Change board plans
   * * Change passengers name and surname
   * * Add rooms (only from the same type already in the booking)
   * * Remove rooms from a booking (partial cancellation)
   *
   *
   * Equivalent to PUT /bookings/{bookingId}
   */
  bookingChange?: Maybe<BookingChangeRS>;
  /**
   * CheckRate is an _optional_ operation used to assess and valuate the rate before the actual booking. CheckRate returns the same information as the Availability response for a hotel rate with up-to-date price, along with additional information regarding the rate: rate breakdown, rate comments and upselling options.
   *
   * The CheckRate method can complement the booking process, as it returns additional information to the availability request. However, when the rateType value is 'RECHECK', the CheckRate method is mandatory.
   *
   * Besides the details for the rate, CheckRate has the option to also return information of higher rates of the same hotel being checked. This is called Upselling.
   *
   * Upselling returns additional room options, each with its own rate key, allowing you to upgrade the stay quality in room category and rate plan even after the CheckRate operation has been performed.
   *
   * Timeout for this operation is 15 seconds.
   *
   *
   * Equivalent to POST /checkrates
   */
  checkRate?: Maybe<CheckRateRS>;
};


export type MutationavailabilityArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  availabilityRQInput: AvailabilityRQInput;
  contentType: ContentType;
};


export type MutationbookingArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  bookingRQInput: BookingRQInput;
  contentType: ContentType;
};


export type MutationbookingCancellationArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  bookingId: Scalars['String'];
  cancellationFlag?: InputMaybe<CancellationFlag>;
  language?: InputMaybe<Scalars['String']>;
};


export type MutationbookingChangeArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  bookingChangeRQInput: BookingChangeRQInput;
  bookingId: Scalars['String'];
  contentType: ContentType;
};


export type MutationcheckRateArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  checkRateRQInput: CheckRateRQInput;
  contentType: ContentType;
};

/** Response of BookingDetail operation. */
export type BookingDetailRS = {
  /** Relevant internal information. */
  auditData: ApiAuditData;
  /** The Booking object. Contains all data related with the booking itself. */
  booking?: Maybe<ApiBooking>;
  echoToken?: Maybe<Scalars['String']>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiError>;
};

/** Relevant internal information. */
export type ApiAuditData = {
  /** Environment where the request has been sent and processed. */
  environment?: Maybe<Scalars['String']>;
  /** Server process time in milliseconds. */
  processTime?: Maybe<Scalars['String']>;
  /** Release version identifier. */
  release?: Maybe<Scalars['String']>;
  /** IP address of the system host. */
  requestHost?: Maybe<Scalars['String']>;
  /** Server code or ID (for internal use). */
  serverId?: Maybe<Scalars['String']>;
  /** Date/time when the request has been processed (always in Spanish time). */
  timestamp?: Maybe<Scalars['String']>;
  /** Token identifier of the operation. */
  token?: Maybe<Scalars['String']>;
};

/** The Booking object. Contains all data related with the booking itself. */
export type ApiBooking = {
  agCommision?: Maybe<Scalars['Float']>;
  /** Unique cancellation reference. Only appears for cancelled bookings. */
  cancellationReference?: Maybe<Scalars['String']>;
  /** Client internal booking reference. */
  clientReference?: Maybe<Scalars['String']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commisionVAT?: Maybe<Scalars['Float']>;
  /** Booking creation date. */
  creationDate?: Maybe<Scalars['String']>;
  /** The apiKey used to create the booking. */
  creationUser?: Maybe<Scalars['String']>;
  /** Currency of the monetary amount. */
  currency?: Maybe<Scalars['String']>;
  /** Information of the holder of the booking. */
  holder?: Maybe<ApiHolder>;
  /** Information about an hotel and its associated room rates. */
  hotel?: Maybe<ApiHotel>;
  /** Information about the invoice company. */
  invoiceCompany?: Maybe<ApiReceptive>;
  /** Information regarding the allowed modifications to the booking. */
  modificationPolicies?: Maybe<ApiModificationPolicies>;
  /** Remaining amount to be paid. */
  pendingAmount?: Maybe<Scalars['Float']>;
  /** Booking locator. Format: XXXXXXXX-XXXXXXXX */
  reference?: Maybe<Scalars['String']>;
  /** Free text that is sent to the hotelier as a comment from the client. It can be used to request or inform of special requests to hotelier like: Non-smoking room preferred, Twin bed please, Upper floor preferred, Late arrival. */
  remark?: Maybe<Scalars['String']>;
  /** Current status of the booking. */
  status?: Maybe<Status2>;
  /** Total amount of the booking. */
  totalNet?: Maybe<Scalars['Float']>;
  /** Total amount of the booking in hotelCurrency (for the pay at hotel model). */
  totalSellingRate?: Maybe<Scalars['Float']>;
};

/** Information of the holder of the booking. */
export type ApiHolder = {
  /** Booking holder name for all the rooms of the booking. */
  name: Scalars['String'];
  /** Booking holder surname for all rooms of the booking. */
  surname: Scalars['String'];
};

/** Information on a hotel. */
export type ApiHotel = {
  cancellationAmount?: Maybe<Scalars['Float']>;
  /** Hotel rating based on the information provided by the hotel. */
  categoryCode?: Maybe<Scalars['String']>;
  /** Name of the hotel category. */
  categoryName?: Maybe<Scalars['String']>;
  /** Check-in date. */
  checkIn?: Maybe<Scalars['String']>;
  /** Check-out date. */
  checkOut?: Maybe<Scalars['String']>;
  clientComments?: Maybe<Scalars['String']>;
  /** Hotelbeds internal hotel code. */
  code?: Maybe<Scalars['Int']>;
  /** List of credit cards accepted by the hotel for Liberate model (pay at hotel). */
  creditCards?: Maybe<Array<Maybe<ApiCreditCard>>>;
  /** Client currency. */
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  /** Code of the destination of the hotel location. */
  destinationCode?: Maybe<Scalars['String']>;
  /** Name of the destination of the hotel location. */
  destinationName?: Maybe<Scalars['String']>;
  /**
   * The value follows a qualitative scale, the number 1 being always the top priority/preferential, and the rest of the product defined by our commercial departments. As of today, the possible values are:
   *   1: Identifies preferential product with exclusive guaranteed availability.
   *   2: Identifies top hotels.
   *   3: Identifies the rest of hotels.
   *   In case new values are added in the future, a proper communication campaign will be carried out to inform you.
   *
   */
  exclusiveDeal?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Array<Maybe<ApiKeyword>>>;
  /** Latitude coordinate of the hotel location. */
  latitude?: Maybe<Scalars['String']>;
  /** Longitude coordinate of the hotel location. */
  longitude?: Maybe<Scalars['String']>;
  /** Maximum hotel room price. */
  maxRate?: Maybe<Scalars['Float']>;
  /** Minimum hotel room price. */
  minRate?: Maybe<Scalars['Float']>;
  name?: Maybe<ApiContent>;
  /** Indicates the need for payment data(i.e.: credit card details) in order to finish the booking. */
  paymentDataRequired?: Maybe<Scalars['Boolean']>;
  /** Remaining amount to be paid. */
  pendingAmount?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Array<Maybe<ApiReview>>>;
  /** List of available rooms types at the hotel. */
  rooms?: Maybe<Array<Maybe<ApiHotelRoom>>>;
  /** Supplier information. */
  supplier?: Maybe<ApiSupplier>;
  /** Total amount of the booking. */
  totalNet?: Maybe<Scalars['Float']>;
  /** Total amount of the booking in hotelCurrency (for the pay at hotel model). */
  totalSellingRate?: Maybe<Scalars['Float']>;
  /** Additional room options with superior category available at the same hotel that was requested. */
  upselling?: Maybe<ApiUpselling>;
  /** Internal zone code, where the hotel is located. */
  zoneCode?: Maybe<Scalars['Int']>;
  /** Name of the zone of the hotel location. */
  zoneName?: Maybe<Scalars['String']>;
  /** Information on a accommodation type. */
  accommodationType?: Maybe<ApiAccommodation>;
  /** Code of the type of accommodation. It will indicate the type of the hotel (apartment, hotel, home, etc.). */
  accommodationTypeCode?: Maybe<Scalars['String']>;
  address?: Maybe<ApiContent>;
  /** List of amenities. */
  amenities?: Maybe<Array<Maybe<ApiAmenity>>>;
  /** List of the internal amenity codes. */
  amenityCodes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** List of codes of board types offered at the hotel. */
  boardCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** List of boards offered at the hotel. */
  boards?: Maybe<Array<Maybe<ApiBoard>>>;
  /** Information on an accommodation category. */
  category?: Maybe<ApiCategory>;
  /** Information of a group of categories. */
  categoryGroup?: Maybe<ApiGroupCategory>;
  /** Group name of the category to which the hotel belongs. */
  categoryGroupCode?: Maybe<Scalars['String']>;
  /** Information on a hotelier chain. */
  chain?: Maybe<ApiChain>;
  /** Code of the chain that the hotel belongs to. */
  chainCode?: Maybe<Scalars['String']>;
  city?: Maybe<ApiContent>;
  /** Defines the geolocation data. */
  coordinates?: Maybe<ApiGeoLocation>;
  /** Country information. */
  country?: Maybe<ApiCountry>;
  /** Code of the country where the hotel is located. */
  countryCode?: Maybe<Scalars['String']>;
  /** Information on a destination of the destination tree. */
  destination?: Maybe<ApiDestination>;
  /** Hotel e-mail address. More than one email can be returned, separated by ";" characters. */
  email?: Maybe<Scalars['String']>;
  /** List of facilities, amenities and installations in the hotel. */
  facilities?: Maybe<Array<Maybe<ApiHotelFacility>>>;
  /** Giata code of the hotel. Will only be returned if the client has agreement with Giata. */
  giataCode?: Maybe<Scalars['Int']>;
  /** List of hotel pictures. */
  images?: Maybe<Array<Maybe<ApiImage>>>;
  /** List of points of interest close to the hotel. */
  interestPoints?: Maybe<Array<Maybe<ApiHotelPointOfInterest>>>;
  /** List of issues affecting the hotel. */
  issues?: Maybe<Array<Maybe<ApiHotelIssue>>>;
  /** Date of the last update in the information of the hotel. */
  lastUpdate?: Maybe<Scalars['String']>;
  /** Accommodation registration number. */
  license?: Maybe<Scalars['String']>;
  /** List of contact phones of the hotel. */
  phones?: Maybe<Array<Maybe<ApiHotelPhone>>>;
  /** Hotel address postal code. */
  postalCode?: Maybe<Scalars['String']>;
  /** Hotelbeds internal sorting ranking (NOTE: please bear in mind is not related to hotel category). */
  ranking?: Maybe<Scalars['Int']>;
  /** Health & Safety rating (NOTE: please bear in mind is not related to hotel category). */
  s2C?: Maybe<Scalars['String']>;
  /** List of the internal segment codes. */
  segmentCodes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** List of segments. */
  segments?: Maybe<Array<Maybe<ApiSegment>>>;
  /** State information. */
  state?: Maybe<ApiState>;
  /** Internal code of the state. */
  stateCode?: Maybe<Scalars['String']>;
  /** List of terminals associated to the hotel and their distance to the hotel. */
  terminals?: Maybe<Array<Maybe<ApiHotelTerminal>>>;
  /** Website URL of the hotel or the chain. */
  web?: Maybe<Scalars['String']>;
  /** List of wildcard rooms. */
  wildcards?: Maybe<Array<Maybe<ApiWildCard>>>;
  /** Information on the zone inside the destination where to search for hotels. */
  zone?: Maybe<ApiZone>;
};

/** Information on the accepted credit card. */
export type ApiCreditCard = {
  /** Credit card code. */
  code?: Maybe<Scalars['String']>;
  /** Credit card name. */
  name?: Maybe<Scalars['String']>;
  /** Hotel paymentType in which card is accepted. */
  paymentType?: Maybe<PaymentType2>;
};

export type PaymentType2 =
  | 'AT_HOTEL'
  | 'AT_WEB';

/** Code of the keyword associated with the hotel. */
export type ApiKeyword = {
  /** Keyword code. */
  code: Scalars['Int'];
  rating?: Maybe<Scalars['Int']>;
};

/** Reviews of the hotel. */
export type ApiReview = {
  /** Rating value. */
  rate?: Maybe<Scalars['Float']>;
  /** Total number of ratings for that particular hotel. */
  reviewCount?: Maybe<Scalars['Int']>;
  /** Source of the review. Posible values: TRIPADVISOR, HOTELBEDS. */
  type?: Maybe<Scalars['String']>;
};

/** Information about the room and its associated rates. */
export type Room2 = {
  /** Internal room code. */
  code?: Maybe<Scalars['String']>;
  /** Room reservation identifier. */
  id?: Maybe<Scalars['Int']>;
  /** Room name/description. */
  name?: Maybe<Scalars['String']>;
  /** List of paxes for the room. */
  paxes?: Maybe<Array<Maybe<ApiPax>>>;
  /** List of rates associated to the room. */
  rates?: Maybe<Array<Maybe<ApiRate>>>;
  /** Booking status of the room. */
  status?: Maybe<Status>;
  /** Booking reference of the booking/room for external supplier bookings. */
  supplierReference?: Maybe<Scalars['String']>;
};

/** Passenger information. */
export type ApiPax = {
  /** Age of the passenger (required for children passengers). */
  age?: Maybe<Scalars['Int']>;
  /** Name of the passenger. */
  name?: Maybe<Scalars['String']>;
  roomId?: Maybe<Scalars['Int']>;
  /** Surname of the passenger. */
  surname?: Maybe<Scalars['String']>;
  /** Passenger type, defines if the passenger is adult or child. */
  type: Type2;
};

export type Type2 =
  | 'AD'
  | 'CH';

/** Definition of a rate. */
export type ApiRate = {
  /** Number of adults requested for each room. */
  adults?: Maybe<Scalars['Int']>;
  /** Number of rooms available for a particular room type. */
  allotment?: Maybe<Scalars['Int']>;
  /** Internal board code. */
  boardCode?: Maybe<Scalars['String']>;
  /** Board name/description. */
  boardName?: Maybe<Scalars['String']>;
  /** Brand of the hotel. */
  brand?: Maybe<Scalars['String']>;
  /** List of cancellation policies on the rate. */
  cancellationPolicies?: Maybe<Array<Maybe<ApiCancellationPolicy>>>;
  /** Number of children requested for each room. */
  children?: Maybe<Scalars['Int']>;
  /** Ages of the children (if any). */
  childrenAges?: Maybe<Scalars['String']>;
  /** Profit margin the agency takes (commissionable model). */
  commission?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to commision. */
  commissionPCT?: Maybe<Scalars['Float']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commissionVAT?: Maybe<Scalars['Float']>;
  /** Breakdown of the rate for each day of the stay. */
  dailyRates?: Maybe<Array<Maybe<ApiDailyRate>>>;
  /** Profit margin that the agency would take if it sells at that recommended price. */
  discount?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price. */
  discountPCT?: Maybe<Scalars['Float']>;
  /** Hotel currency(for the pay at hotel model). */
  hotelCurrency?: Maybe<Scalars['String']>;
  /** Identifies if the rate price is recommended. */
  hotelMandatory?: Maybe<Scalars['Boolean']>;
  /** Gross price of the room in hotelCurrency(for the pay at hotel model). */
  hotelSellingRate?: Maybe<Scalars['Float']>;
  /** Net price of the rate. */
  net?: Maybe<Scalars['Float']>;
  /** List of offers on the rate. */
  offers?: Maybe<Array<Maybe<ApiOffer>>>;
  /** Defines if the rate is for packaging. */
  packaging?: Maybe<Scalars['Boolean']>;
  /** Defines the type of payment accepted. */
  paymentType?: Maybe<PaymentType>;
  /** List of promotions on the rate. */
  promotions?: Maybe<Array<Maybe<ApiPromotion>>>;
  /** Breakdown of the rate. */
  rateBreakDown?: Maybe<ApiRateBreakDown>;
  /** Class of the rate. */
  rateClass?: Maybe<Scalars['String']>;
  /** Rate comments that contain important information. */
  rateComments?: Maybe<Scalars['String']>;
  /** Comments associated to this rate (more information on [Hotel Content API](/documentation/hotels/content-api/api-reference/) ). */
  rateCommentsId?: Maybe<Scalars['String']>;
  /** Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking. */
  rateKey?: Maybe<Scalars['String']>;
  /** Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK). */
  rateType?: Maybe<RateType>;
  /** Difference between original rate price and upselling rate price. */
  rateup?: Maybe<Scalars['Float']>;
  /** Indicates if the rate is only for residents (only appears when resident rates are requested). */
  resident?: Maybe<Scalars['Boolean']>;
  /** Number of rooms requested. */
  rooms?: Maybe<Scalars['Int']>;
  /** Gross price of the room in case it is included. */
  sellingRate?: Maybe<Scalars['Float']>;
  /** Information about rates for alternative dates. */
  shiftRates?: Maybe<Array<Maybe<ApiShiftRate>>>;
  /** Information of taxes. */
  taxes?: Maybe<ApiTaxes>;
};

/** Set of rules that define the penalty the client will receive if the cancellation of a booking is made after a given date. */
export type ApiCancellationPolicy = {
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount. */
  amount?: Maybe<Scalars['Float']>;
  /** Date from which the penalties are applied in ISO 8601 format (yyyy-MM-ddTHH:mm:ssZ). */
  from?: Maybe<Scalars['String']>;
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount, provided in hotel currency (for the pay at hotel model). */
  hotelAmount?: Maybe<Scalars['Float']>;
  /** Currency in which the cancellation penalties must be paid (for the pay at hotel model). */
  hotelCurrency?: Maybe<Scalars['String']>;
  /** Penalty that will be applied for cancellations after the indicated date, represented as a number of nights. */
  numberOfNights?: Maybe<Scalars['Float']>;
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount, represented as a percentage of the total amount of the booking. */
  percent?: Maybe<Scalars['Float']>;
};

/** Rate for a specific day of the stay. */
export type ApiDailyRate = {
  /** Net price per day. */
  dailyNet?: Maybe<Scalars['Float']>;
  /** Room selling price per day. */
  dailySellingRate?: Maybe<Scalars['Float']>;
  /** Day number of the stay for which the breakdown is made. */
  offset?: Maybe<Scalars['Int']>;
};

/** Offer information. */
export type ApiOffer = {
  /** Monetary amount deducted by the offer. NOTE: This deduction is already applied to the final price. */
  amount?: Maybe<Scalars['Float']>;
  /** Code of the offer. */
  code?: Maybe<Scalars['String']>;
  /** Short name/description of the offer. */
  name?: Maybe<Scalars['String']>;
};

export type PaymentType =
  | 'AT_HOTEL'
  | 'AT_WEB';

/** Information of a promotion that can be applied to hotels rates. */
export type ApiPromotion = {
  /** Internal Promotion code. */
  code?: Maybe<Scalars['String']>;
  name?: Maybe<ApiContent>;
  /** Additional information regarding the promotion. */
  remark?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
};

/** Breakdown of the rate. */
export type ApiRateBreakDown = {
  /** Information on discounts for the rate. */
  rateDiscounts?: Maybe<Array<Maybe<ApiRateDiscount>>>;
  /** Information on supplements for the rate. */
  rateSupplements?: Maybe<Array<Maybe<ApiRateSupplement>>>;
};

/** Information describing a discount on a rate. */
export type ApiRateDiscount = {
  /** Monetary deducted by the discount NOTE: This deduction is already applied to the final price. */
  amount?: Maybe<Scalars['Float']>;
  /** Code of the discount. */
  code?: Maybe<Scalars['String']>;
  /** Discount name/description. */
  name?: Maybe<Scalars['String']>;
};

/** Information describing a supplement on a rate. */
export type ApiRateSupplement = {
  /** Amount of the supplement. */
  amount?: Maybe<Scalars['Float']>;
  /** Internal code of the supplement. */
  code?: Maybe<Scalars['String']>;
  /** Date from which the discount is applied. */
  from?: Maybe<Scalars['String']>;
  /** Name/description of the supplement. */
  name?: Maybe<Scalars['String']>;
  /** Number of nights for which the supplement applies. */
  nights?: Maybe<Scalars['Int']>;
  /** Number of paxes that are affected by the supplement. */
  paxNumber?: Maybe<Scalars['Int']>;
  /** Date when the discount ends. */
  to?: Maybe<Scalars['String']>;
};

export type RateType =
  | 'BOOKABLE'
  | 'RECHECK';

/** Definition of a rate for an alternative date to the one used in the availability request. */
export type ApiShiftRate = {
  /** Number of rooms available for a particular room type. */
  allotment?: Maybe<Scalars['Int']>;
  /** Brand of the hotel. */
  brand?: Maybe<Scalars['String']>;
  /** CheckIn date for the shift rate. This will always be different than the requested date or the dates of the not alternative rates. */
  checkIn?: Maybe<Scalars['String']>;
  /** CheckIn date for the shift rate. This will always be different than the requested date or the dates of the not alternative rates. */
  checkOut?: Maybe<Scalars['String']>;
  /** Profit margin the agency takes (commissionable model). */
  commission?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to commision. */
  commissionPCT?: Maybe<Scalars['Float']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commissionVAT?: Maybe<Scalars['Float']>;
  /** Profit margin that the agency would take if it sells at that recommended price. */
  discount?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price. */
  discountPCT?: Maybe<Scalars['Float']>;
  /** Hotel currency(for the pay at hotel model). */
  hotelCurrency?: Maybe<Scalars['String']>;
  /** Identifies if the rate price is recommended. */
  hotelMandatory?: Maybe<Scalars['Boolean']>;
  /** Gross price of the room in hotelCurrency(for the pay at hotel model). */
  hotelSellingRate?: Maybe<Scalars['Float']>;
  /** Net price of the rate. */
  net?: Maybe<Scalars['Float']>;
  /** Class of the rate. */
  rateClass?: Maybe<Scalars['String']>;
  /** Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking. */
  rateKey?: Maybe<Scalars['String']>;
  /** Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK). */
  rateType?: Maybe<RateType>;
  /** Indicates if the rate is only for residents (only appears when resident rates are requested). */
  resident?: Maybe<Scalars['Boolean']>;
  /** Gross price of the room in case it is included. */
  sellingRate?: Maybe<Scalars['Float']>;
};

/** Information of taxes. */
export type ApiTaxes = {
  /** Indicates if all taxes are included or not. */
  allIncluded?: Maybe<Scalars['Boolean']>;
  /** "margin": This is an indirect tax regime for travel agencies where split of taxes is not shown in the invoices. In this case, the customer could not deduct any taxes even if the final customer is a legal entity with the right of deduction for indirect taxes. "general": This is the indirect tax regime where the split of taxes is shown in the invoices. In this case, the booking will be invoiced with split of taxes and the customer could be able to deduct the VAT and in some countries, these taxes are reduced rates. This tax scheme offers tax advantage for business customers with the right of deduction for indirect taxes. */
  taxScheme?: Maybe<TaxScheme>;
  /** List of taxes. */
  taxes?: Maybe<Array<Maybe<ApiTax>>>;
};

export type TaxScheme =
  | 'MARGIN'
  | 'GENERAL';

/** Tax information. */
export type ApiTax = {
  /** Value of the tax in hotel currency if the tax is not included in the price. */
  amount?: Maybe<Scalars['Float']>;
  /** Net amount of the tax in the client configured currency. */
  clientAmount?: Maybe<Scalars['Float']>;
  /** Client configured currency. */
  clientCurrency?: Maybe<Scalars['String']>;
  /** Currency of the tax amount. */
  currency?: Maybe<Scalars['String']>;
  /** Indicates if the tax is included in the price or not. */
  included?: Maybe<Scalars['Boolean']>;
  /** Value of the tax as a percentage. */
  percent?: Maybe<Scalars['Float']>;
  /** Type of the tax. */
  type?: Maybe<Type3>;
};

export type Type3 =
  | 'TAX'
  | 'FEE'
  | 'TAXESANDFEES';

export type Status =
  | 'NEW'
  | 'PRECONFIRMED'
  | 'CONFIRMED'
  | 'TO_BE_UPDATED'
  | 'CANCELLED'
  | 'TO_BE_CANCELLED';

/** Supplier information. */
export type ApiSupplier = {
  /** Supplier name. */
  name?: Maybe<Scalars['String']>;
  /** Supplier VAT number. */
  vatNumber?: Maybe<Scalars['String']>;
};

/** Additional room options with superior category available at the same hotel that was requested. */
export type ApiUpselling = {
  /** List of available rooms with superior category. */
  rooms?: Maybe<Array<Maybe<Room2>>>;
};

/** Information about the invoice company. */
export type ApiReceptive = {
  /** Code of the invoice company. */
  code?: Maybe<Scalars['String']>;
  /** Name of the invoice company. */
  name?: Maybe<Scalars['String']>;
  /** Registration number of the invoice company. */
  registrationNumber?: Maybe<Scalars['String']>;
};

/** Information regarding the allowed modifications to the booking. */
export type ApiModificationPolicies = {
  /** Indicates if the booking allows cancellation. */
  cancellation: Scalars['Boolean'];
  /** Indicates if the booking allows modification. */
  modification: Scalars['Boolean'];
};

export type Status2 =
  | 'PRECONFIRMED'
  | 'CONFIRMED'
  | 'CANCELLED';

/** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
export type ApiError = {
  /** Internal token code of the error. */
  code: Scalars['String'];
  /** Descriptive message of the cause of the error. */
  message?: Maybe<Scalars['String']>;
};

export type Accept =
  | 'APPLICATION_JSON'
  | 'APPLICATION_XML';

/** Response of BookingList operation. */
export type BookingListRS = {
  /** Relevant internal information. */
  auditData: ApiAuditData;
  /** List of bookings and related information. */
  bookings?: Maybe<ApiBookingsList>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiError>;
};

/** List of bookings and related information. */
export type ApiBookingsList = {
  /** List of returned bookings matching the parameters used in the request. */
  bookings?: Maybe<Array<Maybe<ApiBookingList>>>;
};

/** The Booking object. Contains all data related with the booking itself. */
export type ApiBookingList = {
  /** Client internal booking reference. */
  clientReference?: Maybe<Scalars['String']>;
  /** Booking creation date. */
  creationDate?: Maybe<Scalars['String']>;
  /** The apiKey used to create the booking. */
  creationUser?: Maybe<Scalars['String']>;
  /** Currency of the monetary amount. */
  currency?: Maybe<Scalars['String']>;
  /** Information of the holder of the booking. */
  holder?: Maybe<ApiHolder>;
  /** Information about an hotel and its associated room rates. */
  hotel?: Maybe<ApiHotelBookingList>;
  /** Information about the invoice company. */
  invoiceCompany?: Maybe<ApiReceptive>;
  /** Remaining amount to be paid. */
  pendingAmount?: Maybe<Scalars['Float']>;
  /** Booking locator. Format: XXXXXXXX-XXXXXXXX */
  reference?: Maybe<Scalars['String']>;
  /** Current status of the booking. */
  status?: Maybe<Status2>;
  /** Total amount of the booking. */
  totalNet?: Maybe<Scalars['Float']>;
  /** Total amount of the booking in hotelCurrency (for the pay at hotel model). */
  totalSellingRate?: Maybe<Scalars['Float']>;
};

/** Information about an hotel and its associated room rates. */
export type ApiHotelBookingList = {
  cancellationAmount?: Maybe<Scalars['Float']>;
  /** Check-in date. */
  checkIn?: Maybe<Scalars['String']>;
  /** Check-out date. */
  checkOut?: Maybe<Scalars['String']>;
  /** Hotelbeds internal hotel code. */
  code?: Maybe<Scalars['Int']>;
  /** Code of the destination of the hotel location. */
  destinationCode?: Maybe<Scalars['String']>;
  /** Name of the hotel. */
  name?: Maybe<Scalars['String']>;
  rooms?: Maybe<Array<Maybe<RoomBookingList>>>;
};

/** Information about the room and its associated rates. */
export type RoomBookingList = {
  /** Internal room code. */
  code?: Maybe<Scalars['String']>;
  /** Room reservation identifier. */
  id?: Maybe<Scalars['Int']>;
  /** List of paxes for the room. */
  paxes?: Maybe<Array<Maybe<ApiPax>>>;
  /** List of rates associated to the room. */
  rates?: Maybe<Array<Maybe<ApiRateBookingList>>>;
  /** Booking status of the room. */
  status?: Maybe<Status>;
};

/** Definition of a rate. */
export type ApiRateBookingList = {
  /** Amount of the rate. */
  amount?: Maybe<Scalars['Float']>;
  /** Internal board code. */
  boardCode?: Maybe<Scalars['String']>;
  /** Defines the type of payment accepted. */
  paymentType?: Maybe<PaymentType>;
  /** Number of rooms requested. */
  rooms?: Maybe<Scalars['Int']>;
};

export type ContentType =
  | 'APPLICATION_JSON'
  | 'APPLICATION_XML';

export type FilterType =
  | 'CHECKIN'
  | 'CREATION';

export type Status3 =
  | 'ALL'
  | 'CONFIRMED'
  | 'CANCELLED';

/** Response of BookingReconfirmation operation. */
export type BookingReconfirmation = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Response of BookingReconfirmationList operation. */
  bookings?: Maybe<Array<Maybe<Bookings2ListItem>>>;
};

/** Response of BookingReconfirmationObj operation. */
export type Bookings2ListItem = {
  /** Client internal booking reference. */
  clientReference?: Maybe<Scalars['String']>;
  hotel?: Maybe<Hotel2>;
  /** Booking locator. Format: XXXXXXXX-XXXXXXXX */
  reference?: Maybe<Scalars['String']>;
};

export type Hotel2 = {
  rooms?: Maybe<Array<Maybe<Rooms13ListItem>>>;
};

export type Rooms13ListItem = {
  /** Internal room code. */
  code?: Maybe<Scalars['String']>;
  /** Room reservation identifier. */
  id?: Maybe<Scalars['Int']>;
  supplierConfirmationCode?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FilterType2 =
  | 'CHECKIN'
  | 'RECONFIRMATION';

/** Response of Availability operation. */
export type AvailabilityRS = {
  /** Relevant internal information. */
  auditData: ApiAuditData;
  echoToken?: Maybe<Scalars['String']>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiError>;
  /** Hotel availability information. */
  hotels?: Maybe<ApiHotels>;
};

/** Hotel availability information. */
export type ApiHotels = {
  /** Check-in date in the current availability response. */
  checkIn?: Maybe<Scalars['String']>;
  /** Check-out date in the current availability response. */
  checkOut?: Maybe<Scalars['String']>;
  /** Information regarding the hotels. */
  hotels?: Maybe<Array<Maybe<ApiHotel>>>;
  /** Total of hotels returned in the current availability response. */
  total?: Maybe<Scalars['Int']>;
};

/** Request of Availability operation. */
export type AvailabilityRQInput = {
  /** Filter for accomodation type. */
  accommodations?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Tags the request for CacheAPI users (NOTE: MANDATORY for this users when filtering by contract). */
  aifUse?: InputMaybe<Scalars['Boolean']>;
  /** Filter for board types. */
  boards?: InputMaybe<ApiBoardsInput>;
  /** Displays price breakdown per each day of the hotel stay. */
  dailyRate?: InputMaybe<Scalars['Boolean']>;
  /** Filters to limit Availability results by particular values. */
  filter?: InputMaybe<ApiFilterInput>;
  /** Defines the geolocation data for hotel search. */
  geolocation?: InputMaybe<ApiGeoLocationInput>;
  /** Defines the list of hotels for hotel search. */
  hotels?: InputMaybe<ApiHotelsFilterInput>;
  /** Includes additional rates that are normally not exposed in the Availability results. NOTE: Be aware that inclusions are not filters and as such all of the regular rates are returned with the normally not included ones. */
  inclusions?: InputMaybe<Array<InputMaybe<InclusionsListItem>>>;
  /** Filter by codes of keywords associated to hotels. */
  keywords?: InputMaybe<ApiKeywordsFilterInput>;
  /** Language code that defines the language of the response. English will be used by default if this field is not informed. */
  language?: InputMaybe<Scalars['String']>;
  /** List of passenger groups for which to request availability. */
  occupancies: Array<InputMaybe<ApiOccupancyInput>>;
  /** Defines the platform for multiclient developer platforms. */
  platform?: InputMaybe<Scalars['Int']>;
  /** Filter for review rating. */
  review?: InputMaybe<Array<InputMaybe<ApiReviewFilterInput>>>;
  /** Filter for room types. */
  rooms?: InputMaybe<ApiRoomsInput>;
  /** Hotelbeds Group client source market. */
  sourceMarket?: InputMaybe<Scalars['String']>;
  /** Defines the time of the stay at the hotel. */
  stay: ApiStayInput;
};

/** Filter for board types. */
export type ApiBoardsInput = {
  /** List of board type codes to filter by. You can get all the possible board type code values through the board types operation of [Hotel Content API](/documentation/hotels/content-api/api-reference/). */
  board: Array<InputMaybe<Scalars['String']>>;
  /** Includes or excludes the listed board types from the response. */
  included: Scalars['Boolean'];
};

/** Filters to limit Availability results by particular values. */
export type ApiFilterInput = {
  /** Filters the results by the contract requested. (NOTE: when using this filter is mandatory to inform availabilityRQ/@aifUse attribute) */
  contract?: InputMaybe<Scalars['String']>;
  /** Includes or excludes hotel packages (packages created by Hotelbeds that include another product together with the hotel accomodation: massages, tickets, etc.). */
  hotelPackage?: InputMaybe<HotelPackage>;
  /** Filter for maximum hotel category. */
  maxCategory?: InputMaybe<Scalars['Int']>;
  /** Filter for maximum number of hotels you want to receive in the response. */
  maxHotels?: InputMaybe<Scalars['Int']>;
  /** Filter for maximum hotel room price. */
  maxRate?: InputMaybe<Scalars['Float']>;
  /** Filter for maximum number of rates per room. */
  maxRatesPerRoom?: InputMaybe<Scalars['Int']>;
  /** Filter for maximum number of rooms you want to receive for each hotel. */
  maxRooms?: InputMaybe<Scalars['Int']>;
  /** Filter for minimun hotel category. */
  minCategory?: InputMaybe<Scalars['Int']>;
  /** Filter for minimum hotel room price. */
  minRate?: InputMaybe<Scalars['Float']>;
  /** Includes or excludes package rates in the response. Package rates are excluded by default if this is not informed. */
  packaging?: InputMaybe<Scalars['Boolean']>;
};

export type HotelPackage =
  | 'YES'
  | 'NO'
  | 'BOTH';

/** Defines the geolocation data for hotel search. */
export type ApiGeoLocationInput = {
  /** Latitude coordinate for geolocation search. */
  latitude: Scalars['Float'];
  /** Longitude coordinate for geolocation search. */
  longitude: Scalars['Float'];
  /** Radius size for circular search. */
  radius?: InputMaybe<Scalars['Float']>;
  /** Latitude coordinate for geolocation search for rectangle search. Determines bottom right point of the search area. */
  secondaryLatitude?: InputMaybe<Scalars['Float']>;
  /** Longitude coordinate for geolocation search for rectangle search. Determines bottom right point of the search area. */
  secondaryLongitude?: InputMaybe<Scalars['Float']>;
  /** Distance unit for the radius. */
  unit?: InputMaybe<Unit>;
};

export type Unit =
  | 'MI'
  | 'KM';

/** Defines the list of hotels for hotel search. */
export type ApiHotelsFilterInput = {
  /** List of codes of the requested hotels. */
  hotel: Array<InputMaybe<Scalars['Int']>>;
};

export type InclusionsListItem =
  | 'RESIDENT_RATES';

/** Filter by codes of keywords associated to hotels. */
export type ApiKeywordsFilterInput = {
  /** Defines if the results must match all the indicated keyword codes. */
  allIncluded?: InputMaybe<Scalars['Boolean']>;
  /** List of keyword codes to filter. */
  keyword?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** Definition of passengers groups and how they are distributed in different rooms. */
export type ApiOccupancyInput = {
  /** Number of adult passengers for this room. */
  adults: Scalars['Int'];
  /** number of child passengers for this room. */
  children: Scalars['Int'];
  /** Number of requested rooms of this occupancy. */
  rooms: Scalars['Int'];
};

/** Filter hotels by rating and number of reviews. */
export type ApiReviewFilterInput = {
  /** Maximum review rating you want the hotels to have. */
  maxRate?: InputMaybe<Scalars['Float']>;
  /** Minimun review rating you want the hotels to have. */
  minRate?: InputMaybe<Scalars['Float']>;
  /** Minimum number of reviews you want the hotels to have. */
  minReviewCount?: InputMaybe<Scalars['Int']>;
  /** Defines the source of the reviews. */
  type: Type;
};

export type Type =
  | 'TRIPADVISOR'
  | 'HOTELBEDS';

/** Filter for room types. */
export type ApiRoomsInput = {
  /** Includes or excludes the listed room types from the response. */
  included: Scalars['Boolean'];
  /** List of room type codes to filter by. You can get all the possible room type code values through the room types operation of [Hotel Content API](/documentation/hotels/content-api/api-reference/). */
  room: Array<InputMaybe<Scalars['String']>>;
};

/** Defines the time of the stay at the hotel. */
export type ApiStayInput = {
  /** Defines if results are returned for shiftDays even if there's no results for the searched dates. */
  allowOnlyShift?: InputMaybe<Scalars['Boolean']>;
  /** Check-in date. */
  checkIn: Scalars['String'];
  /** Check-out date. */
  checkOut: Scalars['String'];
  /** Amount of days after and before the check-in to check availability, keeping the same stay duration. */
  shiftDays?: InputMaybe<Scalars['Int']>;
};

/** Response of Booking operation. */
export type BookingRS = {
  /** Relevant internal information. */
  auditData: ApiAuditData;
  /** The Booking object. Contains all data related with the booking itself. */
  booking?: Maybe<ApiBooking>;
  echoToken?: Maybe<Scalars['String']>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiError>;
};

/** Request of Booking operation. */
export type BookingRQInput = {
  /** Internal booking reference. */
  clientReference: Scalars['String'];
  /** Identifies the agent name of the booking. If empty, by default it will be the same than the apikey performing the booking . */
  creationUser?: InputMaybe<Scalars['String']>;
  echoToken?: InputMaybe<Scalars['String']>;
  /** Information of the holder of the booking. */
  holder: ApiHolderInput;
  /** Language code that defines the language of the response. English will be used by default if this field is not informed. */
  language?: InputMaybe<Scalars['String']>;
  /** Payment information. This is mandatory for rates with paymentType='AT_HOTEL' or for accounts setup as credit card payment. */
  paymentData?: InputMaybe<ApiPaymentDataInput>;
  /** Free text sent to the hotelier. It can be used to request or inform of special requests to hotelier like: Non-smoking room preferred, Twin bed please, Upper floor preferred, Late arrival. */
  remark?: InputMaybe<Scalars['String']>;
  /** List of the rooms to be included in the booking. */
  rooms?: InputMaybe<Array<InputMaybe<ApiBookingRoomInput>>>;
  /** Margin of price difference (as percentage) accepted when a price difference occurs between Availability/CheckRate and Booking operations. Do not use more than two decimal characters when defining tolerance. Example: to input a tolerance of 5%, you should input 5.00.  NOTE: Authorisation for the use of this tag is subject to prior written agreement with your sales manager */
  tolerance?: InputMaybe<Scalars['Float']>;
  /** Booking voucher information. */
  voucher?: InputMaybe<ApiVoucherInput>;
};

/** Information of the holder of the booking. */
export type ApiHolderInput = {
  /** Booking holder name for all the rooms of the booking. */
  name: Scalars['String'];
  /** Booking holder surname for all rooms of the booking. */
  surname: Scalars['String'];
};

/** Payment information. This is mandatory for rates with paymentType='AT_HOTEL' or for accounts setup as credit card payment. */
export type ApiPaymentDataInput = {
  /** The billing address of your credit card. Mandatory for clients with AVS or other fraud detection mechanisms activated. Please contact apitude@hotelbeds.com to know if you must provide this data or not. Normally this is enabled only for clients using the end user's credit card. */
  billingAddress?: InputMaybe<ApiBillingAddressInput>;
  /** Contact data for billing. */
  contactData: ApiPaymentContactDataInput;
  /** Defines the device where the booking was made. Mandatory only payments done with the end user's credit card. */
  device?: InputMaybe<ApiBookingDeviceInput>;
  /** Credit card information. */
  paymentCard: ApiPaymentCardInput;
  /** Mandatory for clients based on Europe using European credit cards. */
  threeDsData?: InputMaybe<ThreeDsDataInput>;
  /** Identifies web partners bookings. Only required when using the end user's credit card. */
  webPartner?: InputMaybe<Scalars['Int']>;
};

/** The billing address of your credit card. Mandatory for clients with AVS or other fraud detection mechanisms activated. Please contact apitude@hotelbeds.com to know if you must provide this data or not. Normally this is enabled only for clients using the end user's credit card. */
export type ApiBillingAddressInput = {
  /** Address first line. */
  address1: Scalars['String'];
  /** Address second line. */
  address2?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  /** Code of the country. */
  countryCode: Scalars['String'];
  postalCode: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
};

/** Contact data for billing. */
export type ApiPaymentContactDataInput = {
  /** Email address. */
  email: Scalars['String'];
  /** Telephone number. */
  phoneNumber: Scalars['String'];
};

/** Defines the device where the booking was made. Mandatory only payments done with the end user's credit card. */
export type ApiBookingDeviceInput = {
  /** Free field to identify the device. In the case of having an integration with Riskified, their token should be sent here. */
  id?: InputMaybe<Scalars['String']>;
  /** IP address of the end user. */
  ip: Scalars['String'];
  /** useAgent of the end user's browser. */
  userAgent: Scalars['String'];
};

/** Credit card information. */
export type ApiPaymentCardInput = {
  /** CVC security code of the credit card. */
  cardCVC: Scalars['String'];
  /** Name of the credit card holder exactly as it appears on the credit card. */
  cardHolderName: Scalars['String'];
  /** Credit card number (without spaces). */
  cardNumber: Scalars['String'];
  /** Credit card type. */
  cardType: CardType;
  /** Expiration date of the credit card; */
  expiryDate: Scalars['String'];
};

export type CardType =
  | 'AMEX'
  | 'EURO6000'
  | 'JCB'
  | 'DINERS'
  | 'MASTERCARD'
  | 'VISA'
  | 'MAESTRO'
  | 'SWITCH'
  | 'SOLO_GB'
  | 'AIRPLUS'
  | 'CHINAUNIONPAY'
  | 'DISCOVER';

/** Mandatory for clients based on Europe using European credit cards. */
export type ThreeDsDataInput = {
  /** Provided ThreeDS structure */
  infoProvided?: InputMaybe<InfoProvidedInput>;
  /** Use PROVIDED if you have your own integration with a PSP */
  option: Option;
  /** This field contains the 3DS version used for authentication */
  version: Scalars['String'];
};

/** Provided ThreeDS structure */
export type InfoProvidedInput = {
  /** Cardholder Authentication Verification Value (CAVV) */
  cavv: Scalars['String'];
  /** Electronic Commerce Indicator (ECI). The ECI value is part of the two data elements that indicate the transaction was processed electronically. */
  eci: Scalars['String'];
  /** Transaction identifier resulting from authentication processing. */
  id: Scalars['String'];
};

export type Option =
  | 'PROVIDED'
  | 'REQUESTED';

/** Defines the room to be booked. */
export type ApiBookingRoomInput = {
  /** Data of the passengers assigned to this room. */
  paxes?: InputMaybe<Array<InputMaybe<ApiPaxInput>>>;
  /** Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking. */
  rateKey: Scalars['String'];
};

/** Passenger information. */
export type ApiPaxInput = {
  /** Age of the passenger (required for children passengers). */
  age?: InputMaybe<Scalars['Int']>;
  /** Name of the passenger. */
  name?: InputMaybe<Scalars['String']>;
  roomId?: InputMaybe<Scalars['Int']>;
  /** Surname of the passenger. */
  surname?: InputMaybe<Scalars['String']>;
  /** Passenger type, defines if the passenger is adult or child. */
  type: Type2;
};

/** Booking voucher information. */
export type ApiVoucherInput = {
  /** Information regarding the email delivery of the voucher. */
  email?: InputMaybe<ApiVoucherEmailInput>;
  /** Language code that defines the language of the descriptions of the voucher. English will be used by default if this field is not informed. */
  language?: InputMaybe<Scalars['String']>;
  /** Path of the picture you want to be featured in the header of the voucher as logo. Accepted formats: PNG, JPG, GIF & BMP. Max size: 100px x 100px. The filename part of the picture path cannot exceed 35 characters length. */
  logo?: InputMaybe<Scalars['String']>;
};

/** Information regarding the email delivery of the voucher. */
export type ApiVoucherEmailInput = {
  /** Body of the voucher email. */
  body?: InputMaybe<Scalars['String']>;
  /** Email address that will appear as sender of the email. If not used, the default value is noreply@hotelbeds.com */
  from?: InputMaybe<Scalars['String']>;
  /** Email subject. If not used, the default subject will have the following structure: Voucher - {{bookingReference}} - {{hotelName}}. */
  title?: InputMaybe<Scalars['String']>;
  /** Email address to which the voucher will be sent. Only one address is allowed. */
  to?: InputMaybe<Scalars['String']>;
};

/** Response of BookingCancellation operation. */
export type BookingCancellationRS = {
  /** Relevant internal information. */
  auditData: ApiAuditData;
  /** The Booking object. Contains all data related with the booking itself. */
  booking?: Maybe<ApiBooking>;
  echoToken?: Maybe<Scalars['String']>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiError>;
};

export type CancellationFlag =
  | 'CANCELLATION'
  | 'SIMULATION';

/** Response of BookingChange operation. */
export type BookingChangeRS = {
  /** Relevant internal information. */
  auditData: ApiAuditData;
  /** The Booking object. Contains all data related with the booking itself. */
  booking?: Maybe<ApiBooking>;
  echoToken?: Maybe<Scalars['String']>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiError>;
};

/** Request of BookingChange operation. */
export type BookingChangeRQInput = {
  /** The Booking object. Contains all data related with the booking itself. */
  booking: ApiBookingInput;
  bookingId?: InputMaybe<Scalars['String']>;
  /** Language code that defines the language of the response. English will be used by default if this field is not informed. */
  language?: InputMaybe<Scalars['String']>;
  /** Defines if the operation will be a simulation or an actual modification. */
  mode: Mode;
  /** Payment information. This is mandatory for rates with paymentType='AT_HOTEL' or for accounts setup as credit card payment. */
  paymentData?: InputMaybe<ApiPaymentDataInput>;
};

/** The Booking object. Contains all data related with the booking itself. */
export type ApiBookingInput = {
  agCommision?: InputMaybe<Scalars['Float']>;
  /** Unique cancellation reference. Only appears for cancelled bookings. */
  cancellationReference?: InputMaybe<Scalars['String']>;
  /** Client internal booking reference. */
  clientReference?: InputMaybe<Scalars['String']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commisionVAT?: InputMaybe<Scalars['Float']>;
  /** Booking creation date. */
  creationDate?: InputMaybe<Scalars['String']>;
  /** The apiKey used to create the booking. */
  creationUser?: InputMaybe<Scalars['String']>;
  /** Currency of the monetary amount. */
  currency?: InputMaybe<Scalars['String']>;
  /** Information of the holder of the booking. */
  holder?: InputMaybe<ApiHolderInput>;
  /** Information about an hotel and its associated room rates. */
  hotel?: InputMaybe<ApiHotelInput>;
  /** Information about the invoice company. */
  invoiceCompany?: InputMaybe<ApiReceptiveInput>;
  /** Information regarding the allowed modifications to the booking. */
  modificationPolicies?: InputMaybe<ApiModificationPoliciesInput>;
  /** Remaining amount to be paid. */
  pendingAmount?: InputMaybe<Scalars['Float']>;
  /** Booking locator. Format: XXXXXXXX-XXXXXXXX */
  reference?: InputMaybe<Scalars['String']>;
  /** Free text that is sent to the hotelier as a comment from the client. It can be used to request or inform of special requests to hotelier like: Non-smoking room preferred, Twin bed please, Upper floor preferred, Late arrival. */
  remark?: InputMaybe<Scalars['String']>;
  /** Current status of the booking. */
  status?: InputMaybe<Status2>;
  /** Total amount of the booking. */
  totalNet?: InputMaybe<Scalars['Float']>;
  /** Total amount of the booking in hotelCurrency (for the pay at hotel model). */
  totalSellingRate?: InputMaybe<Scalars['Float']>;
};

/** Information about an hotel and its associated room rates. */
export type ApiHotelInput = {
  cancellationAmount?: InputMaybe<Scalars['Float']>;
  /** Hotelbeds code of the hotel category. */
  categoryCode?: InputMaybe<Scalars['String']>;
  /** Name of the hotel category. */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Check-in date. */
  checkIn?: InputMaybe<Scalars['String']>;
  /** Check-out date. */
  checkOut?: InputMaybe<Scalars['String']>;
  clientComments?: InputMaybe<Scalars['String']>;
  /** Hotelbeds internal hotel code. */
  code?: InputMaybe<Scalars['Int']>;
  /** List of credit cards accepted by the hotel for Liberate model (pay at hotel). */
  creditCards?: InputMaybe<Array<InputMaybe<ApiCreditCardInput>>>;
  /** Client currency. */
  currency?: InputMaybe<Scalars['String']>;
  /** Hotel description. */
  description?: InputMaybe<Scalars['String']>;
  /** Code of the destination of the hotel location. */
  destinationCode?: InputMaybe<Scalars['String']>;
  /** Name of the destination of the hotel location. */
  destinationName?: InputMaybe<Scalars['String']>;
  /**
   * The value follows a qualitative scale, the number 1 being always the top priority/preferential, and the rest of the product defined by our commercial departments. As of today, the possible values are:
   *   1: Identifies preferential product with exclusive guaranteed availability.
   *   2: Identifies top hotels.
   *   3: Identifies the rest of hotels.
   *   In case new values are added in the future, a proper communication campaign will be carried out to inform you.
   *
   */
  exclusiveDeal?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Array<InputMaybe<ApiKeywordInput>>>;
  /** Latitude coordinate of the hotel location. */
  latitude?: InputMaybe<Scalars['String']>;
  /** Longitude coordinate of the hotel location. */
  longitude?: InputMaybe<Scalars['String']>;
  /** Maximum hotel room price. */
  maxRate?: InputMaybe<Scalars['Float']>;
  /** Minimum hotel room price. */
  minRate?: InputMaybe<Scalars['Float']>;
  /** Name of the hotel. */
  name?: InputMaybe<Scalars['String']>;
  /** Indicates the need for payment data(i.e.: credit card details) in order to finish the booking. */
  paymentDataRequired?: InputMaybe<Scalars['Boolean']>;
  /** Remaining amount to be paid. */
  pendingAmount?: InputMaybe<Scalars['Float']>;
  reviews?: InputMaybe<Array<InputMaybe<ApiReviewInput>>>;
  rooms?: InputMaybe<Array<InputMaybe<Room2Input>>>;
  /** Supplier information. */
  supplier?: InputMaybe<ApiSupplierInput>;
  /** Total amount of the booking. */
  totalNet?: InputMaybe<Scalars['Float']>;
  /** Total amount of the booking in hotelCurrency (for the pay at hotel model). */
  totalSellingRate?: InputMaybe<Scalars['Float']>;
  /** Additional room options with superior category available at the same hotel that was requested. */
  upselling?: InputMaybe<ApiUpsellingInput>;
  /** Code of the zone of the hotel location. */
  zoneCode?: InputMaybe<Scalars['Int']>;
  /** Name of the zone of the hotel location. */
  zoneName?: InputMaybe<Scalars['String']>;
};

/** Information on the accepted credit card. */
export type ApiCreditCardInput = {
  /** Credit card code. */
  code?: InputMaybe<Scalars['String']>;
  /** Credit card name. */
  name?: InputMaybe<Scalars['String']>;
  /** Hotel paymentType in which card is accepted. */
  paymentType?: InputMaybe<PaymentType2>;
};

/** Code of the keyword associated with the hotel. */
export type ApiKeywordInput = {
  /** Keyword code. */
  code: Scalars['Int'];
  rating?: InputMaybe<Scalars['Int']>;
};

/** Reviews of the hotel. */
export type ApiReviewInput = {
  /** Rating value. */
  rate?: InputMaybe<Scalars['Float']>;
  /** Total number of ratings for that particular hotel. */
  reviewCount?: InputMaybe<Scalars['Int']>;
  /** Source of the review. Posible values: TRIPADVISOR, HOTELBEDS. */
  type?: InputMaybe<Scalars['String']>;
};

/** Information about the room and its associated rates. */
export type Room2Input = {
  /** Internal room code. */
  code?: InputMaybe<Scalars['String']>;
  /** Room reservation identifier. */
  id?: InputMaybe<Scalars['Int']>;
  /** Room name/description. */
  name?: InputMaybe<Scalars['String']>;
  /** List of paxes for the room. */
  paxes?: InputMaybe<Array<InputMaybe<ApiPaxInput>>>;
  /** List of rates associated to the room. */
  rates?: InputMaybe<Array<InputMaybe<ApiRateInput>>>;
  /** Booking status of the room. */
  status?: InputMaybe<Status>;
  /** Booking reference of the booking/room for external supplier bookings. */
  supplierReference?: InputMaybe<Scalars['String']>;
};

/** Definition of a rate. */
export type ApiRateInput = {
  /** Number of adults requested for each room. */
  adults?: InputMaybe<Scalars['Int']>;
  /** Number of rooms available for a particular room type. */
  allotment?: InputMaybe<Scalars['Int']>;
  /** Internal board code. */
  boardCode?: InputMaybe<Scalars['String']>;
  /** Board name/description. */
  boardName?: InputMaybe<Scalars['String']>;
  /** Brand of the hotel. */
  brand?: InputMaybe<Scalars['String']>;
  /** List of cancellation policies on the rate. */
  cancellationPolicies?: InputMaybe<Array<InputMaybe<ApiCancellationPolicyInput>>>;
  /** Number of children requested for each room. */
  children?: InputMaybe<Scalars['Int']>;
  /** Ages of the children (if any). */
  childrenAges?: InputMaybe<Scalars['String']>;
  /** Profit margin the agency takes (commissionable model). */
  commission?: InputMaybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to commision. */
  commissionPCT?: InputMaybe<Scalars['Float']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commissionVAT?: InputMaybe<Scalars['Float']>;
  /** Breakdown of the rate for each day of the stay. */
  dailyRates?: InputMaybe<Array<InputMaybe<ApiDailyRateInput>>>;
  /** Profit margin that the agency would take if it sells at that recommended price. */
  discount?: InputMaybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price. */
  discountPCT?: InputMaybe<Scalars['Float']>;
  /** Hotel currency(for the pay at hotel model). */
  hotelCurrency?: InputMaybe<Scalars['String']>;
  /** Identifies if the rate price is recommended. */
  hotelMandatory?: InputMaybe<Scalars['Boolean']>;
  /** Gross price of the room in hotelCurrency(for the pay at hotel model). */
  hotelSellingRate?: InputMaybe<Scalars['Float']>;
  /** Net price of the rate. */
  net?: InputMaybe<Scalars['Float']>;
  /** List of offers on the rate. */
  offers?: InputMaybe<Array<InputMaybe<ApiOfferInput>>>;
  /** Defines if the rate is for packaging. */
  packaging?: InputMaybe<Scalars['Boolean']>;
  /** Defines the type of payment accepted. */
  paymentType?: InputMaybe<PaymentType>;
  /** List of promotions on the rate. */
  promotions?: InputMaybe<Array<InputMaybe<ApiPromotionInput>>>;
  /** Breakdown of the rate. */
  rateBreakDown?: InputMaybe<ApiRateBreakDownInput>;
  /** Class of the rate. */
  rateClass?: InputMaybe<Scalars['String']>;
  /** Rate comments that contain important information. */
  rateComments?: InputMaybe<Scalars['String']>;
  /** Comments associated to this rate (more information on [Hotel Content API](/documentation/hotels/content-api/api-reference/) ). */
  rateCommentsId?: InputMaybe<Scalars['String']>;
  /** Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking. */
  rateKey?: InputMaybe<Scalars['String']>;
  /** Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK). */
  rateType?: InputMaybe<RateType>;
  /** Difference between original rate price and upselling rate price. */
  rateup?: InputMaybe<Scalars['Float']>;
  /** Indicates if the rate is only for residents (only appears when resident rates are requested). */
  resident?: InputMaybe<Scalars['Boolean']>;
  /** Number of rooms requested. */
  rooms?: InputMaybe<Scalars['Int']>;
  /** Gross price of the room in case it is included. */
  sellingRate?: InputMaybe<Scalars['Float']>;
  /** Information about rates for alternative dates. */
  shiftRates?: InputMaybe<Array<InputMaybe<ApiShiftRateInput>>>;
  /** Information of taxes. */
  taxes?: InputMaybe<ApiTaxesInput>;
};

/** Set of rules that define the penalty the client will receive if the cancellation of a booking is made after a given date. */
export type ApiCancellationPolicyInput = {
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount. */
  amount?: InputMaybe<Scalars['Float']>;
  /** Date from which the penalties are applied in ISO 8601 format (yyyy-MM-ddTHH:mm:ssZ). */
  from?: InputMaybe<Scalars['String']>;
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount, provided in hotel currency (for the pay at hotel model). */
  hotelAmount?: InputMaybe<Scalars['Float']>;
  /** Currency in which the cancellation penalties must be paid (for the pay at hotel model). */
  hotelCurrency?: InputMaybe<Scalars['String']>;
  /** Penalty that will be applied for cancellations after the indicated date, represented as a number of nights. */
  numberOfNights?: InputMaybe<Scalars['Float']>;
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount, represented as a percentage of the total amount of the booking. */
  percent?: InputMaybe<Scalars['Float']>;
};

/** Rate for a specific day of the stay. */
export type ApiDailyRateInput = {
  /** Net price per day. */
  dailyNet?: InputMaybe<Scalars['Float']>;
  /** Room selling price per day. */
  dailySellingRate?: InputMaybe<Scalars['Float']>;
  /** Day number of the stay for which the breakdown is made. */
  offset?: InputMaybe<Scalars['Int']>;
};

/** Offer information. */
export type ApiOfferInput = {
  /** Monetary amount deducted by the offer. NOTE: This deduction is already applied to the final price. */
  amount?: InputMaybe<Scalars['Float']>;
  /** Code of the offer. */
  code?: InputMaybe<Scalars['String']>;
  /** Short name/description of the offer. */
  name?: InputMaybe<Scalars['String']>;
};

/** Promotion information. */
export type ApiPromotionInput = {
  /** Code of the promotion. */
  code?: InputMaybe<Scalars['String']>;
  /** Short name/description of the promotion. */
  name?: InputMaybe<Scalars['String']>;
  /** Additional information regarding the promotion. */
  remark?: InputMaybe<Scalars['String']>;
};

/** Breakdown of the rate. */
export type ApiRateBreakDownInput = {
  /** Information on discounts for the rate. */
  rateDiscounts?: InputMaybe<Array<InputMaybe<ApiRateDiscountInput>>>;
  /** Information on supplements for the rate. */
  rateSupplements?: InputMaybe<Array<InputMaybe<ApiRateSupplementInput>>>;
};

/** Information describing a discount on a rate. */
export type ApiRateDiscountInput = {
  /** Monetary deducted by the discount NOTE: This deduction is already applied to the final price. */
  amount?: InputMaybe<Scalars['Float']>;
  /** Code of the discount. */
  code?: InputMaybe<Scalars['String']>;
  /** Discount name/description. */
  name?: InputMaybe<Scalars['String']>;
};

/** Information describing a supplement on a rate. */
export type ApiRateSupplementInput = {
  /** Amount of the supplement. */
  amount?: InputMaybe<Scalars['Float']>;
  /** Internal code of the supplement. */
  code?: InputMaybe<Scalars['String']>;
  /** Date from which the discount is applied. */
  from?: InputMaybe<Scalars['String']>;
  /** Name/description of the supplement. */
  name?: InputMaybe<Scalars['String']>;
  /** Number of nights for which the supplement applies. */
  nights?: InputMaybe<Scalars['Int']>;
  /** Number of paxes that are affected by the supplement. */
  paxNumber?: InputMaybe<Scalars['Int']>;
  /** Date when the discount ends. */
  to?: InputMaybe<Scalars['String']>;
};

/** Definition of a rate for an alternative date to the one used in the availability request. */
export type ApiShiftRateInput = {
  /** Number of rooms available for a particular room type. */
  allotment?: InputMaybe<Scalars['Int']>;
  /** Brand of the hotel. */
  brand?: InputMaybe<Scalars['String']>;
  /** CheckIn date for the shift rate. This will always be different than the requested date or the dates of the not alternative rates. */
  checkIn?: InputMaybe<Scalars['String']>;
  /** CheckIn date for the shift rate. This will always be different than the requested date or the dates of the not alternative rates. */
  checkOut?: InputMaybe<Scalars['String']>;
  /** Profit margin the agency takes (commissionable model). */
  commission?: InputMaybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to commision. */
  commissionPCT?: InputMaybe<Scalars['Float']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commissionVAT?: InputMaybe<Scalars['Float']>;
  /** Profit margin that the agency would take if it sells at that recommended price. */
  discount?: InputMaybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price. */
  discountPCT?: InputMaybe<Scalars['Float']>;
  /** Hotel currency(for the pay at hotel model). */
  hotelCurrency?: InputMaybe<Scalars['String']>;
  /** Identifies if the rate price is recommended. */
  hotelMandatory?: InputMaybe<Scalars['Boolean']>;
  /** Gross price of the room in hotelCurrency(for the pay at hotel model). */
  hotelSellingRate?: InputMaybe<Scalars['Float']>;
  /** Net price of the rate. */
  net?: InputMaybe<Scalars['Float']>;
  /** Class of the rate. */
  rateClass?: InputMaybe<Scalars['String']>;
  /** Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking. */
  rateKey?: InputMaybe<Scalars['String']>;
  /** Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK). */
  rateType?: InputMaybe<RateType>;
  /** Indicates if the rate is only for residents (only appears when resident rates are requested). */
  resident?: InputMaybe<Scalars['Boolean']>;
  /** Gross price of the room in case it is included. */
  sellingRate?: InputMaybe<Scalars['Float']>;
};

/** Information of taxes. */
export type ApiTaxesInput = {
  /** Indicates if all taxes are included or not. */
  allIncluded?: InputMaybe<Scalars['Boolean']>;
  /** "margin": This is an indirect tax regime for travel agencies where split of taxes is not shown in the invoices. In this case, the customer could not deduct any taxes even if the final customer is a legal entity with the right of deduction for indirect taxes. "general": This is the indirect tax regime where the split of taxes is shown in the invoices. In this case, the booking will be invoiced with split of taxes and the customer could be able to deduct the VAT and in some countries, these taxes are reduced rates. This tax scheme offers tax advantage for business customers with the right of deduction for indirect taxes. */
  taxScheme?: InputMaybe<TaxScheme>;
  /** List of taxes. */
  taxes?: InputMaybe<Array<InputMaybe<ApiTaxInput>>>;
};

/** Tax information. */
export type ApiTaxInput = {
  /** Value of the tax in hotel currency if the tax is not included in the price. */
  amount?: InputMaybe<Scalars['Float']>;
  /** Net amount of the tax in the client configured currency. */
  clientAmount?: InputMaybe<Scalars['Float']>;
  /** Client configured currency. */
  clientCurrency?: InputMaybe<Scalars['String']>;
  /** Currency of the tax amount. */
  currency?: InputMaybe<Scalars['String']>;
  /** Indicates if the tax is included in the price or not. */
  included?: InputMaybe<Scalars['Boolean']>;
  /** Value of the tax as a percentage. */
  percent?: InputMaybe<Scalars['Float']>;
  /** Type of the tax. */
  type?: InputMaybe<Type3>;
};

/** Supplier information. */
export type ApiSupplierInput = {
  /** Supplier name. */
  name?: InputMaybe<Scalars['String']>;
  /** Supplier VAT number. */
  vatNumber?: InputMaybe<Scalars['String']>;
};

/** Additional room options with superior category available at the same hotel that was requested. */
export type ApiUpsellingInput = {
  /** List of available rooms with superior category. */
  rooms?: InputMaybe<Array<InputMaybe<Room2Input>>>;
};

/** Information about the invoice company. */
export type ApiReceptiveInput = {
  /** Code of the invoice company. */
  code?: InputMaybe<Scalars['String']>;
  /** Name of the invoice company. */
  name?: InputMaybe<Scalars['String']>;
  /** Registration number of the invoice company. */
  registrationNumber?: InputMaybe<Scalars['String']>;
};

/** Information regarding the allowed modifications to the booking. */
export type ApiModificationPoliciesInput = {
  /** Indicates if the booking allows cancellation. */
  cancellation: Scalars['Boolean'];
  /** Indicates if the booking allows modification. */
  modification: Scalars['Boolean'];
};

export type Mode =
  | 'SIMULATION'
  | 'UPDATE';

/** Response of CheckRate operation. */
export type CheckRateRS = {
  /** Relevant internal information. */
  auditData: ApiAuditDataCheckRate;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiError>;
  /** Information about an hotel and its associated room rates. */
  hotels?: Maybe<ApiHotelCheckRate>;
};

/** Relevant internal information. */
export type ApiAuditDataCheckRate = {
  /** Token identifier of the operation. */
  token?: Maybe<Scalars['String']>;
};

/** Information about an hotel and its associated room rates. */
export type ApiHotelCheckRate = {
  /** Hotelbeds code of the hotel category. */
  categoryCode?: Maybe<Scalars['String']>;
  /** Name of the hotel category. */
  categoryName?: Maybe<Scalars['String']>;
  /** Check-in date. */
  checkIn?: Maybe<Scalars['String']>;
  /** Check-out date. */
  checkOut?: Maybe<Scalars['String']>;
  /** Hotelbeds internal hotel code. */
  code?: Maybe<Scalars['Int']>;
  /** List of credit cards accepted by the hotel for Liberate model (pay at hotel). */
  creditCards?: Maybe<Array<Maybe<ApiCreditCard>>>;
  /** Client currency. */
  currency?: Maybe<Scalars['String']>;
  /** Hotel description. */
  description?: Maybe<Scalars['String']>;
  /** Code of the destination of the hotel location. */
  destinationCode?: Maybe<Scalars['String']>;
  /** Name of the destination of the hotel location. */
  destinationName?: Maybe<Scalars['String']>;
  /** Giata hotel code. */
  giata?: Maybe<Scalars['Float']>;
  /** Latitude coordinate of the hotel location. */
  latitude?: Maybe<Scalars['String']>;
  /** Longitude coordinate of the hotel location. */
  longitude?: Maybe<Scalars['String']>;
  /** Maximum hotel room price. */
  maxRate?: Maybe<Scalars['Float']>;
  /** Minimum hotel room price. */
  minRate?: Maybe<Scalars['Float']>;
  /** Information regarding the allowed modifications to the booking. */
  modificationPolicies?: Maybe<ApiModificationPolicies>;
  /** Name of the hotel. */
  name?: Maybe<Scalars['String']>;
  /** Indicates the need for payment data(i.e.: credit card details) in order to finish the booking. */
  paymentDataRequired?: Maybe<Scalars['Boolean']>;
  rooms?: Maybe<Array<Maybe<RoomCheckRate>>>;
  /** Total amount of the booking. */
  totalNet?: Maybe<Scalars['Float']>;
  /** Total amount of the booking in hotelCurrency (for the pay at hotel model). */
  totalSellingRate?: Maybe<Scalars['Float']>;
  /** Additional room options with superior category available at the same hotel that was requested. */
  upselling?: Maybe<ApiUpsellingCheckRate>;
  /** Code of the zone of the hotel location. */
  zoneCode?: Maybe<Scalars['Int']>;
  /** Name of the zone of the hotel location. */
  zoneName?: Maybe<Scalars['String']>;
};

/** Information about the room and its associated rates. */
export type RoomCheckRate = {
  /** Internal room code. */
  code?: Maybe<Scalars['String']>;
  /** Room name/description. */
  name?: Maybe<Scalars['String']>;
  /** List of rates associated to the room. */
  rates?: Maybe<Array<Maybe<ApiRateCheckRate>>>;
};

/** Definition of a rate. */
export type ApiRateCheckRate = {
  /** Number of adults requested for each room. */
  adults?: Maybe<Scalars['Int']>;
  /** Number of rooms available for a particular room type. */
  allotment?: Maybe<Scalars['Int']>;
  /** Internal board code. */
  boardCode?: Maybe<Scalars['String']>;
  /** Board name/description. */
  boardName?: Maybe<Scalars['String']>;
  /** List of cancellation policies on the rate. */
  cancellationPolicies?: Maybe<Array<Maybe<ApiCancellationPolicyCheckRate>>>;
  /** Number of children requested for each room. */
  children?: Maybe<Scalars['Int']>;
  /** Profit margin the agency takes (commissionable model). */
  commission?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to commision. */
  commissionPCT?: Maybe<Scalars['Float']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commissionVAT?: Maybe<Scalars['Float']>;
  /** Profit margin that the agency would take if it sells at that recommended price. */
  discount?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price. */
  discountPCT?: Maybe<Scalars['Float']>;
  /** Hotel currency(for the pay at hotel model). */
  hotelCurrency?: Maybe<Scalars['String']>;
  /** Identifies if the rate price is recommended. */
  hotelMandatory?: Maybe<Scalars['Boolean']>;
  /** Gross price of the room in hotelCurrency(for the pay at hotel model). */
  hotelSellingRate?: Maybe<Scalars['Float']>;
  /** Net price of the rate. */
  net?: Maybe<Scalars['Float']>;
  /** List of offers on the rate. */
  offers?: Maybe<Array<Maybe<ApiOffer>>>;
  /** Defines if the rate is for packaging. */
  packaging?: Maybe<Scalars['Boolean']>;
  /** Defines the type of payment accepted. */
  paymentType?: Maybe<PaymentType>;
  /** List of promotions on the rate. */
  promotions?: Maybe<Array<Maybe<ApiPromotion>>>;
  /** Breakdown of the rate. */
  rateBreakDown?: Maybe<ApiRateBreakDown>;
  /** Class of the rate. */
  rateClass?: Maybe<Scalars['String']>;
  /** Rate comments that contain important information. */
  rateComments?: Maybe<Scalars['String']>;
  /** Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking. */
  rateKey?: Maybe<Scalars['String']>;
  /** Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK). */
  rateType?: Maybe<RateType>;
  /** Indicates if the rate is only for residents (only appears when resident rates are requested). */
  resident?: Maybe<Scalars['Boolean']>;
  /** Number of rooms requested. */
  rooms?: Maybe<Scalars['Int']>;
  /** Gross price of the room in case it is included. */
  sellingRate?: Maybe<Scalars['Float']>;
};

/** Set of rules that define the penalty the client will receive if the cancellation of a booking is made after a given date. */
export type ApiCancellationPolicyCheckRate = {
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount. */
  amount?: Maybe<Scalars['Float']>;
  /** Date from which the penalties are applied in ISO 8601 format (yyyy-MM-ddTHH:mm:ssZ). */
  from?: Maybe<Scalars['String']>;
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount, provided in hotel currency (for the pay at hotel model). */
  hotelAmount?: Maybe<Scalars['Float']>;
  /** Currency in which the cancellation penalties must be paid (for the pay at hotel model). */
  hotelCurrency?: Maybe<Scalars['String']>;
};

/** Additional room options with superior category available at the same hotel that was requested. */
export type ApiUpsellingCheckRate = {
  /** List of available rooms with superior category. */
  rooms?: Maybe<Array<Maybe<RoomUpsellingCheckRate>>>;
};

/** Information about the room and its associated rates. */
export type RoomUpsellingCheckRate = {
  /** List of rates associated to the room. */
  rates?: Maybe<Array<Maybe<ApiRateUpsellingCheckRate>>>;
};

/** Definition of a rate. */
export type ApiRateUpsellingCheckRate = {
  /** Number of adults requested for each room. */
  adults?: Maybe<Scalars['Int']>;
  /** Number of rooms available for a particular room type. */
  allotment?: Maybe<Scalars['Int']>;
  /** Internal board code. */
  boardCode?: Maybe<Scalars['String']>;
  /** Board name/description. */
  boardName?: Maybe<Scalars['String']>;
  /** List of cancellation policies on the rate. */
  cancellationPolicies?: Maybe<Array<Maybe<ApiCancellationPolicyCheckRate>>>;
  /** Number of children requested for each room. */
  children?: Maybe<Scalars['Int']>;
  /** Profit margin the agency takes (commissionable model). */
  commission?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to commision. */
  commissionPCT?: Maybe<Scalars['Float']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commissionVAT?: Maybe<Scalars['Float']>;
  /** Profit margin that the agency would take if it sells at that recommended price. */
  discount?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price. */
  discountPCT?: Maybe<Scalars['Float']>;
  /** Hotel currency(for the pay at hotel model). */
  hotelCurrency?: Maybe<Scalars['String']>;
  /** Identifies if the rate price is recommended. */
  hotelMandatory?: Maybe<Scalars['Boolean']>;
  /** Gross price of the room in hotelCurrency(for the pay at hotel model). */
  hotelSellingRate?: Maybe<Scalars['Float']>;
  /** Net price of the rate. */
  net?: Maybe<Scalars['Float']>;
  /** Defines if the rate is for packaging. */
  packaging?: Maybe<Scalars['Boolean']>;
  /** Defines the type of payment accepted. */
  paymentType?: Maybe<PaymentType>;
  /** Breakdown of the rate. */
  rateBreakDown?: Maybe<ApiRateBreakDown>;
  /** Class of the rate. */
  rateClass?: Maybe<Scalars['String']>;
  /** Rate comments that contain important information. */
  rateComments?: Maybe<Scalars['String']>;
  /** Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking. */
  rateKey?: Maybe<Scalars['String']>;
  /** Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK). */
  rateType?: Maybe<RateType>;
  /** Difference between original rate price and upselling rate price. */
  rateup?: Maybe<Scalars['Float']>;
  /** Indicates if the rate is only for residents (only appears when resident rates are requested). */
  resident?: Maybe<Scalars['Boolean']>;
  /** Number of rooms requested. */
  rooms?: Maybe<Scalars['Int']>;
  /** Gross price of the room in case it is included. */
  sellingRate?: Maybe<Scalars['Float']>;
};

/** Request of CheckRate operation. */
export type CheckRateRQInput = {
  /** Language code that defines the language of the response. English will be used by default if this field is not informed. */
  language?: InputMaybe<Scalars['String']>;
  /** List of rooms to be checked/valuated. */
  rooms?: InputMaybe<Array<InputMaybe<ApiBookingRoomInput>>>;
  /** Parameter to add or remove the upSelling options node to the response. */
  upselling?: InputMaybe<Scalars['Boolean']>;
};

/** Response of Accommodations operation. */
export type ApiAccommodationsRS = {
  /** List of accommodations. */
  accommodations?: Maybe<Array<Maybe<ApiAccommodation>>>;
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned accommodations. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned accommodations. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of accommodations matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a accommodation type. */
export type ApiAccommodation = {
  /** Code of the accommodation type. */
  code?: Maybe<Scalars['String']>;
  /** Description of the accommodation type. */
  typeDescription?: Maybe<Scalars['String']>;
  typeMultiDescription?: Maybe<ApiContent>;
};

export type ApiContent = {
  /** Text description, provided in the language defined in LanguageCode field. */
  content?: Maybe<Scalars['String']>;
  /** Code of the language in which the description is returned. */
  languageCode?: Maybe<Scalars['String']>;
};

/** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
export type ApiHotelbedsError = {
  /** Internal token code of the error. */
  code?: Maybe<Scalars['String']>;
  /** Descriptive message of the cause of the error. */
  message?: Maybe<Scalars['String']>;
};

/** Response of Amenities operation. */
export type ApiAmenitiesRS = {
  /** List of amenities. */
  amenities?: Maybe<Array<Maybe<ApiAmenity>>>;
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned amenities. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned amenities. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of amenities matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

export type ApiAmenity = {
  code?: Maybe<Scalars['Int']>;
  description?: Maybe<ApiContent>;
};

/** Response of BoardGroups operation. */
export type ApiBoardGroupsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of board groups. */
  boards?: Maybe<Array<Maybe<ApiBoardGroup>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned board groups. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned board groups. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of board groups matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a board group. */
export type ApiBoardGroup = {
  /** List of the internal board codes. */
  boards?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Internal code of the board group. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
};

/** Response of Boards operation. */
export type ApiBoardsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of boards. */
  boards?: Maybe<Array<Maybe<ApiBoard>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned boards. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned boards. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of boards matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a board. */
export type ApiBoard = {
  /** Internal code of the board. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  /** Multilanguage code of the board type. */
  multiLingualCode?: Maybe<Scalars['String']>;
};

/** Response of Categories operation. */
export type ApiCategoriesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of categories. */
  categories?: Maybe<Array<Maybe<ApiCategory>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned categories. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned categories. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of categories matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on an accommodation category. */
export type ApiCategory = {
  /** Code of the type of accommodation to which the category belongs. (apartment, hotel, home, etc.). */
  accommodationType?: Maybe<Scalars['String']>;
  /** Hotel star rating based on the information provided by the hotel. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  /** Code of the group to which the category belongs. */
  group?: Maybe<Scalars['String']>;
  /** Simple category code used for filtering in [Hotel Booking API](/documentation/hotels/booking-api/api-reference/) Availability. */
  simpleCode?: Maybe<Scalars['Int']>;
};

/** Response of Chains operation. */
export type ApiChainsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of chains. */
  chains?: Maybe<Array<Maybe<ApiChain>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned chains. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned chains. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of chains matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a hotelier chain. */
export type ApiChain = {
  /** Code of the chain. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
};

/** Response of Countries operation. */
export type ApiCountriesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of countries. */
  countries?: Maybe<Array<Maybe<ApiCountry>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned countries. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned countries. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of countries matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Country information. */
export type ApiCountry = {
  /** Hotelbeds internal country code. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  /** ISO 3166-2 Country Code. */
  isoCode?: Maybe<Scalars['String']>;
  /** List of states/provinces/territories belonging to the country. */
  states?: Maybe<Array<Maybe<ApiState>>>;
};

/** State information. */
export type ApiState = {
  /** Internal code of the state. */
  code?: Maybe<Scalars['String']>;
  /** Name of the state. */
  name?: Maybe<Scalars['String']>;
};

/** Response of Currencies operation. */
export type ApiCurrenciesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of currencies. */
  currencies?: Maybe<Array<Maybe<ApiCurrency>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned currencies. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned currencies. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of currencies matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Currency. */
export type ApiCurrency = {
  /** Internal currency code. */
  code?: Maybe<Scalars['String']>;
  /** Indication for which rate type will be returned. */
  currencyType?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
};

/** Response of Destinations operation. */
export type ApiDestinationsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of available destinations. */
  destinations?: Maybe<Array<Maybe<ApiDestination>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned destinations. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned destinations. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of destinations matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a destination of the destination tree. */
export type ApiDestination = {
  /** Code of the destination. */
  code?: Maybe<Scalars['String']>;
  /** Hotelbeds code for the country */
  countryCode?: Maybe<Scalars['String']>;
  /** List of groups of zones. */
  groupZones?: Maybe<Array<Maybe<ApiGroupZone>>>;
  /** ISO Country Code. */
  isoCode?: Maybe<Scalars['String']>;
  name?: Maybe<ApiContent>;
  /** List of zones in which the destination is divided. */
  zones?: Maybe<Array<Maybe<ApiZone>>>;
};

/** Information on a group of zones */
export type ApiGroupZone = {
  /** Code of the group of zones. */
  groupZoneCode?: Maybe<Scalars['String']>;
  name?: Maybe<ApiContent>;
  /** List of zones that belong to the group. */
  zones?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** Information on the zone inside the destination where to search for hotels. */
export type ApiZone = {
  description?: Maybe<ApiContent>;
  /** Internal zone name. (only available for Hotel Detail) */
  name?: Maybe<Scalars['String']>;
  /** Internal Zone Code. */
  zoneCode?: Maybe<Scalars['Int']>;
};

/** Response of Facilities operation. */
export type ApiFacilitiesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** List of facilities. */
  facilities?: Maybe<Array<Maybe<ApiFacility>>>;
  /** Lowest value of the range of returned facilities. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned facilities. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of facilities matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a hotel facility. */
export type ApiFacility = {
  /** Code of the facility. */
  code?: Maybe<Scalars['Int']>;
  description?: Maybe<ApiContent>;
  /** Group the facility belongs to. */
  facilityGroupCode?: Maybe<Scalars['Int']>;
  /** Typology of the facility which determines the fields to receive in the hotels operation. */
  facilityTypologyCode?: Maybe<Scalars['Int']>;
};

/** Response of FacilityGroups operation. */
export type ApiFacilityGroupsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** List of groups of facilities. */
  facilityGroups?: Maybe<Array<Maybe<ApiFacilityGroup>>>;
  /** Lowest value of the range of returned facility groups. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned facility groups. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of facility groups matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a group of facilities. */
export type ApiFacilityGroup = {
  /** Code of the facility group. */
  code?: Maybe<Scalars['Int']>;
  description?: Maybe<ApiContent>;
};

/** Response of FacilityTypologies operation. */
export type ApiFacilityTypologiesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** List of classifications for facilities. */
  facilityTypologies?: Maybe<Array<Maybe<ApiFacilityType>>>;
  /** Lowest value of the range of returned facility typologies. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned facility typologies. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of facility typologies matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Classification information of facilities. */
export type ApiFacilityType = {
  /** Indicator if the ageFrom Value will be returned. */
  ageFromFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the ageTo Value will be returned. */
  ageToFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the amount Value will be returned. */
  amountFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the appType Value will be returned. */
  appTypeFlag?: Maybe<Scalars['Boolean']>;
  /** Code of the typology. */
  code?: Maybe<Scalars['Int']>;
  /** Indicator if the currency Value will be returned. */
  currencyFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the dateFrom Value will be returned. */
  dateFromFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the dateTo Value will be returned. */
  dateToFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the distance Value will be returned. */
  distanceFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the Fee Value will be returned. */
  feeFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the YesOrNo Value will be returned. */
  indYesOrNoFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the Logic Value will be returned. */
  logicFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the Number Value will be returned */
  numberFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the Text Value will be returned. */
  textFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the timeFrom Value will be returned. */
  timeFromFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the timeTo Value will be returned. */
  timeToFlag?: Maybe<Scalars['Boolean']>;
};

/** Response of GroupCategories operation. */
export type ApiGroupCategoriesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned group categories. */
  from?: Maybe<Scalars['Int']>;
  /** List of group categories. */
  groupCategories?: Maybe<Array<Maybe<ApiGroupCategory>>>;
  /** Highest value of the range of returned group categories. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of group categories matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information of a group of categories. */
export type ApiGroupCategory = {
  /** Code of the category group. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  name?: Maybe<ApiContent>;
  /** Internal order of the category group. */
  order?: Maybe<Scalars['Int']>;
};

/** Response of HotelDetails operation */
export type ApiHotelDetailsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned hotels. */
  from?: Maybe<Scalars['Int']>;
  /** Information on a hotel. */
  hotel?: Maybe<ApiHotel>;
  /** List of returned hotels matching the parameters used in the request. */
  hotels?: Maybe<Array<Maybe<ApiHotel>>>;
  /** Highest value of the range of returned hotels. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of hotels matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Defines the geolocation data. */
export type ApiGeoLocation = {
  /** Latitude coordinate for geolocation search. */
  latitude?: Maybe<Scalars['Float']>;
  /** Longitude coordinate for geolocation search. */
  longitude?: Maybe<Scalars['Float']>;
};

/** Information on a hotel facility. */
export type ApiHotelFacility = {
  /** Minimum age to access the facility. */
  ageFrom?: Maybe<Scalars['Int']>;
  /** Maximum age to access the facility. */
  ageTo?: Maybe<Scalars['Int']>;
  /** Amount of the facility fee. */
  amount?: Maybe<Scalars['Float']>;
  /** Application type of the facility fee. */
  applicationType?: Maybe<Scalars['String']>;
  /** Currency of the facility fee. */
  currency?: Maybe<Scalars['String']>;
  /** Date from which the facility is available. */
  dateFrom?: Maybe<Scalars['String']>;
  /** Date until which the installation is available. */
  dateTo?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  /** Distance in meters to the facility. */
  distance?: Maybe<Scalars['Int']>;
  /** Code of the facility. */
  facilityCode?: Maybe<Scalars['Int']>;
  /** Group to which the facility belongs. */
  facilityGroupCode?: Maybe<Scalars['Int']>;
  /** Name of the facility. */
  facilityName?: Maybe<Scalars['String']>;
  /** Defines if the facility has cost or not at the establishment. */
  indFee?: Maybe<Scalars['Boolean']>;
  /** Indicates if the facility exists at the hotel. This field will be returned __only__ when the facility is at the hotel. */
  indLogic?: Maybe<Scalars['Boolean']>;
  /** Indicates in the mandatory facility exists at the hotel or not. */
  indYesOrNo?: Maybe<Scalars['Boolean']>;
  /** Numeric value of the facility. */
  number?: Maybe<Scalars['Int']>;
  /** Order of facility in case there is more than one facility at the hotel. */
  order?: Maybe<Scalars['Int']>;
  /** Time from which the facility is available. */
  timeFrom?: Maybe<Scalars['String']>;
  /** Time until which the facility is available. */
  timeTo?: Maybe<Scalars['String']>;
  /** Indicates if the use of the facility will issue a voucher. */
  voucher?: Maybe<Scalars['Boolean']>;
};

/** Describes an hotel picture. */
export type ApiImage = {
  /** Characteristic code/s of the room. */
  characteristicCode?: Maybe<Scalars['String']>;
  /** Specifies where has the picture been taken (you can see the possible values in the response of types/imagetypes operation). */
  imageTypeCode?: Maybe<Scalars['String']>;
  /** Order in which the images are shown in the web page. */
  order?: Maybe<Scalars['Int']>;
  /** Original hotel room code, directly sourced from the property */
  pMSRoomCode?: Maybe<Scalars['String']>;
  /** URL of the image. For hotel images, we do not return the full path. Note that one of the following paths must be added by the client. */
  path?: Maybe<Scalars['String']>;
  /** Identifier of the room type. */
  roomCode?: Maybe<Scalars['String']>;
  /** Internal Room type code, returned only for Unified clients. */
  roomType?: Maybe<Scalars['String']>;
  /** Information on an hotel image type. */
  type?: Maybe<ApiImageType>;
  /** Ordinal value at which the image should be presented. */
  visualOrder?: Maybe<Scalars['Int']>;
};

/** Information on an hotel image type. */
export type ApiImageType = {
  /** Code of the type of the image. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
};

/** Information on a point of interest near a hotel. */
export type ApiHotelPointOfInterest = {
  /** Distance in meters to the point of interest. */
  distance?: Maybe<Scalars['String']>;
  /** Code of the point of interest as a facility. */
  facilityCode?: Maybe<Scalars['Int']>;
  /** Group to which the point of interest belongs as a facility. */
  facilityGroupCode?: Maybe<Scalars['Int']>;
  /** Defines if there is a fee to access the point of interest. */
  fee?: Maybe<Scalars['Boolean']>;
  /** Order of the point of interest. */
  order?: Maybe<Scalars['Int']>;
  /** Name of the point of interest. */
  poiName?: Maybe<Scalars['String']>;
};

/** Information on an hotel issue (repair works, facilities closed,...). */
export type ApiHotelIssue = {
  /** Indicator if there will be an alternative due to the issue. */
  alternative?: Maybe<Scalars['Boolean']>;
  /** Date from when the issue will start. */
  dateFrom?: Maybe<Scalars['String']>;
  /** Date when the issue will end. */
  dateTo?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  /** Code of the issue. */
  issueCode?: Maybe<Scalars['String']>;
  /** Code of the type of incidence. */
  issueType?: Maybe<Scalars['String']>;
  /** Issue order, in case there is more than one. */
  order?: Maybe<Scalars['Int']>;
};

/** Information on a hotel phone line. */
export type ApiHotelPhone = {
  /** Phone number. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** Type of phone line (phonebooking, phonehotel, faxnumber...). */
  phoneType?: Maybe<Scalars['String']>;
};

/** Information of the hotel room. */
export type ApiHotelRoom = {
  /** Characteristic code/s of the room. */
  characteristicCode?: Maybe<Scalars['String']>;
  /** Description of the room. */
  description?: Maybe<Scalars['String']>;
  /** Identifier of the room type. */
  roomCode?: Maybe<Scalars['String']>;
  /** List of facilities, amenities and installations in the room of the hotel. */
  roomFacilities?: Maybe<Array<Maybe<ApiHotelRoomFacility>>>;
  /** List of the different departments in which the room is divided. */
  roomStays?: Maybe<Array<Maybe<ApiHotelRoomStay>>>;
  /** Internal room type code. Returned only for Unified clients. */
  roomType?: Maybe<Scalars['String']>;
};

/** Information on facilities and features associated to a hotel room. */
export type ApiHotelRoomFacility = {
  description?: Maybe<ApiContent>;
  /** Code of the facility. */
  facilityCode?: Maybe<Scalars['Int']>;
  /** Code of the group to which the facility belongs. */
  facilityGroupCode?: Maybe<Scalars['Int']>;
  /** Indicator if the facility has cost or not at the establishment. */
  indFee?: Maybe<Scalars['Boolean']>;
  /** Indicator if the facility exists at the hotel or not. */
  indLogic?: Maybe<Scalars['Boolean']>;
  /** Indicator if the mandatory facility exists at the hotel or not. */
  indYesOrNo?: Maybe<Scalars['Boolean']>;
  /** Numeric value of the facility. */
  number?: Maybe<Scalars['Int']>;
  /** Order of facility in case there is more than one facility at the hotel. */
  order?: Maybe<Scalars['Int']>;
  /** Indicates if the use of the facility will issue a voucher. */
  voucher?: Maybe<Scalars['Boolean']>;
};

/** Describes one of the departments in which the room is divided. */
export type ApiHotelRoomStay = {
  /** Description of the type of department. */
  description?: Maybe<Scalars['String']>;
  /** Numeric position of the department within the room. */
  order?: Maybe<Scalars['String']>;
  /** Describes facilities associated to the department. */
  roomStayFacilities?: Maybe<Array<Maybe<ApiHotelRoomStayFacility>>>;
  /** Code of the Department Type. */
  stayType?: Maybe<Scalars['String']>;
};

/** Information on facilities and features in the RoomStays. */
export type ApiHotelRoomStayFacility = {
  description?: Maybe<ApiContent>;
  /** Code of the facility. */
  facilityCode?: Maybe<Scalars['Int']>;
  /** Code of the group the facility belongs to. */
  facilityGroupCode?: Maybe<Scalars['Int']>;
  /** Number of facilities. */
  number?: Maybe<Scalars['Int']>;
};

export type ApiSegment = {
  code?: Maybe<Scalars['Int']>;
  description?: Maybe<ApiContent>;
};

/** Info of a terminal. */
export type ApiHotelTerminal = {
  description?: Maybe<ApiContent>;
  /** Distance in kilometers to the hotel. */
  distance?: Maybe<Scalars['Int']>;
  name?: Maybe<ApiContent>;
  /** Code of the terminal. */
  terminalCode?: Maybe<Scalars['String']>;
  /** Code of the type of the terminal. */
  terminalType?: Maybe<Scalars['String']>;
};

/** Information on a wildcard room. */
export type ApiWildCard = {
  /** Code of the wildcard room characteristic. */
  characteristicCode?: Maybe<Scalars['String']>;
  hotelRoomDescription?: Maybe<ApiContent>;
  /** Code of the wildcard room type. */
  roomCode?: Maybe<Scalars['String']>;
  /** Code of the wildcard room. */
  roomType?: Maybe<Scalars['String']>;
};

/** Response of Hotels operation */
export type ApiHotelsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned hotels. */
  from?: Maybe<Scalars['Int']>;
  /** List of returned hotels matching the parameters used in the request. */
  hotels?: Maybe<Array<Maybe<ApiHotel>>>;
  /** Highest value of the range of returned hotels. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of hotels matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Response of ImageTypes operation. */
export type ApiImageTypesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned image types. */
  from?: Maybe<Scalars['Int']>;
  /** List of image types. */
  imageTypes?: Maybe<Array<Maybe<ApiImageType>>>;
  /** Highest value of the range of returned image types. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of image types matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Response of Issues operation. */
export type ApiIssuesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned issues. */
  from?: Maybe<Scalars['Int']>;
  /** List of issues that can affect an hotel and its facilities. */
  issues?: Maybe<Array<Maybe<ApiIssue>>>;
  /** Highest value of the range of returned issues. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of issues matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on an issue type (repair works, facilities closed,...). */
export type ApiIssue = {
  /** Indicator if there will be an alternative due to the issue. */
  alternative?: Maybe<Scalars['Boolean']>;
  /** Code of the issue. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  name?: Maybe<ApiContent>;
  /** Code of the type of incidence. */
  type?: Maybe<Scalars['String']>;
};

/** Response of Languages operation. */
export type ApiLanguagesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned languages. */
  from?: Maybe<Scalars['Int']>;
  /** List of languages. */
  languages?: Maybe<Array<Maybe<ApiLanguage>>>;
  /** Highest value of the range of returned languages. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of languages matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a language. */
export type ApiLanguage = {
  /** Code of the language. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  /** Name of the language on its own language. */
  name?: Maybe<Scalars['String']>;
};

/** Response of Promotions operation. */
export type ApiPromotionsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned promotions. */
  from?: Maybe<Scalars['Int']>;
  /** List of promotions. */
  promotions?: Maybe<Array<Maybe<ApiPromotion>>>;
  /** Highest value of the range of returned promotions. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of promotions matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Returns the list of available values for the rateClass. */
export type ApiRateClassRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of rateClass. */
  classifications?: Maybe<Array<Maybe<ApiRateClass>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned rateclass. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned rateclass. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of rateclass matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a rateClass. */
export type ApiRateClass = {
  /** Code of rateClass. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
};

/** Response of RateCommentDetails operation. */
export type ApiRateCommentDetailsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Code of the comment of the hotel. */
  code?: Maybe<Scalars['String']>;
  /** Date of the application of the rate. */
  date?: Maybe<Scalars['String']>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned rate comment details. */
  from?: Maybe<Scalars['Int']>;
  /** Code of the hotel. */
  hotel?: Maybe<Scalars['Int']>;
  /** Code of the incoming office of the hotel. */
  incoming?: Maybe<Scalars['Int']>;
  /** List of rate comment details. */
  rateComments?: Maybe<Array<Maybe<ApiRateComment>>>;
  /** Highest value of the range of returned rate comment details. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of rate comment details matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Definition of the rate comment. */
export type ApiRateComment = {
  /** Final date of application of the comment. */
  dateEnd?: Maybe<Scalars['String']>;
  /** Date from which the comment starts to apply. */
  dateStart?: Maybe<Scalars['String']>;
  /** Rate comments description and language. */
  description?: Maybe<Scalars['String']>;
};

/** Response of RateComments operation. */
export type ApiRateCommentsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned rate comments. */
  from?: Maybe<Scalars['Int']>;
  /** List of rate comments. */
  rateComments?: Maybe<Array<Maybe<ApiRateComments>>>;
  /** Highest value of the range of returned rate comments. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of rate comments matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Describes info that the hotelier wants the final passenger to read before confirming the booking. */
export type ApiRateComments = {
  /** Code of the rate comment. */
  code?: Maybe<Scalars['String']>;
  /** List of rateComments. */
  commentsByRates?: Maybe<Array<Maybe<ApiRateCommentBlock>>>;
  /** Code of the hotel. */
  hotel?: Maybe<Scalars['Int']>;
  /** Code of the incoming office of the hotel. */
  incoming?: Maybe<Scalars['Int']>;
};

/** Lists of rate comments and the rates that apply to them. */
export type ApiRateCommentBlock = {
  /** Rate comments that apply to the rates. */
  comments?: Maybe<Array<Maybe<ApiRateComment>>>;
  /** Rates for which the rate comments applies. */
  rateCodes?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** Response of Rooms operation. */
export type ApiRoomsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned rooms. */
  from?: Maybe<Scalars['Int']>;
  /** List of rooms. */
  rooms?: Maybe<Array<Maybe<ApiRoom>>>;
  /** Highest value of the range of returned rooms. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of rooms matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information describing a room. */
export type ApiRoom = {
  /** Code of the room characteristic. */
  characteristic?: Maybe<Scalars['String']>;
  characteristicDescription?: Maybe<ApiContent>;
  /** Code of the room. */
  code?: Maybe<Scalars['String']>;
  /** Description of the room. */
  description?: Maybe<Scalars['String']>;
  /** Maximum number of adults allowed in the room. */
  maxAdults?: Maybe<Scalars['Int']>;
  /** Maximum number of children allowed in the room. */
  maxChildren?: Maybe<Scalars['Int']>;
  /** Maximum number of paxes allowed in the room. */
  maxPax?: Maybe<Scalars['Int']>;
  /** Minimum number of adults allowed in the room. */
  minAdults?: Maybe<Scalars['Int']>;
  /** Minimum number of adults allowed in the room. */
  minPax?: Maybe<Scalars['Int']>;
  /** Code of the room type. Returned only for Unified clients. */
  type?: Maybe<Scalars['String']>;
  typeDescription?: Maybe<ApiContent>;
};

/** Response of Segments operation. */
export type ApiSegmentsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned segments. */
  from?: Maybe<Scalars['Int']>;
  /** List of segments. */
  segments?: Maybe<Array<Maybe<ApiSegment>>>;
  /** Highest value of the range of returned segments. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of segments matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Response of Terminals operation. */
export type ApiTerminalsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned terminals. */
  from?: Maybe<Scalars['Int']>;
  /** List of terminals. */
  terminals?: Maybe<Array<Maybe<ApiTerminal>>>;
  /** Highest value of the range of returned terminals. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of terminals matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Info of a terminal. */
export type ApiTerminal = {
  /** Code of the terminal. */
  code?: Maybe<Scalars['String']>;
  /** Code of the country where the terminal is located. */
  country?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  name?: Maybe<ApiContent>;
  /** Code of the type of the terminal. */
  type?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  BookingDetailRS: ResolverTypeWrapper<BookingDetailRS>;
  ApiAuditData: ResolverTypeWrapper<ApiAuditData>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ApiBooking: ResolverTypeWrapper<ApiBooking>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ApiHolder: ResolverTypeWrapper<ApiHolder>;
  ApiHotel: ResolverTypeWrapper<ApiHotel>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ApiCreditCard: ResolverTypeWrapper<ApiCreditCard>;
  PaymentType2: PaymentType2;
  ApiKeyword: ResolverTypeWrapper<ApiKeyword>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ApiReview: ResolverTypeWrapper<ApiReview>;
  Room2: ResolverTypeWrapper<Room2>;
  ApiPax: ResolverTypeWrapper<ApiPax>;
  Type2: Type2;
  ApiRate: ResolverTypeWrapper<ApiRate>;
  ApiCancellationPolicy: ResolverTypeWrapper<ApiCancellationPolicy>;
  ApiDailyRate: ResolverTypeWrapper<ApiDailyRate>;
  ApiOffer: ResolverTypeWrapper<ApiOffer>;
  PaymentType: PaymentType;
  ApiPromotion: ResolverTypeWrapper<ApiPromotion>;
  ApiRateBreakDown: ResolverTypeWrapper<ApiRateBreakDown>;
  ApiRateDiscount: ResolverTypeWrapper<ApiRateDiscount>;
  ApiRateSupplement: ResolverTypeWrapper<ApiRateSupplement>;
  RateType: RateType;
  ApiShiftRate: ResolverTypeWrapper<ApiShiftRate>;
  ApiTaxes: ResolverTypeWrapper<ApiTaxes>;
  TaxScheme: TaxScheme;
  ApiTax: ResolverTypeWrapper<ApiTax>;
  Type3: Type3;
  Status: Status;
  ApiSupplier: ResolverTypeWrapper<ApiSupplier>;
  ApiUpselling: ResolverTypeWrapper<ApiUpselling>;
  ApiReceptive: ResolverTypeWrapper<ApiReceptive>;
  ApiModificationPolicies: ResolverTypeWrapper<ApiModificationPolicies>;
  Status2: Status2;
  ApiError: ResolverTypeWrapper<ApiError>;
  Accept: Accept;
  BookingListRS: ResolverTypeWrapper<BookingListRS>;
  ApiBookingsList: ResolverTypeWrapper<ApiBookingsList>;
  ApiBookingList: ResolverTypeWrapper<ApiBookingList>;
  ApiHotelBookingList: ResolverTypeWrapper<ApiHotelBookingList>;
  RoomBookingList: ResolverTypeWrapper<RoomBookingList>;
  ApiRateBookingList: ResolverTypeWrapper<ApiRateBookingList>;
  ContentType: ContentType;
  FilterType: FilterType;
  Status3: Status3;
  BookingReconfirmation: ResolverTypeWrapper<BookingReconfirmation>;
  Bookings2ListItem: ResolverTypeWrapper<Bookings2ListItem>;
  Hotel2: ResolverTypeWrapper<Hotel2>;
  Rooms13ListItem: ResolverTypeWrapper<Rooms13ListItem>;
  FilterType2: FilterType2;
  AvailabilityRS: ResolverTypeWrapper<AvailabilityRS>;
  ApiHotels: ResolverTypeWrapper<ApiHotels>;
  AvailabilityRQInput: AvailabilityRQInput;
  ApiBoardsInput: ApiBoardsInput;
  ApiFilterInput: ApiFilterInput;
  HotelPackage: HotelPackage;
  ApiGeoLocationInput: ApiGeoLocationInput;
  Unit: Unit;
  ApiHotelsFilterInput: ApiHotelsFilterInput;
  InclusionsListItem: InclusionsListItem;
  ApiKeywordsFilterInput: ApiKeywordsFilterInput;
  ApiOccupancyInput: ApiOccupancyInput;
  ApiReviewFilterInput: ApiReviewFilterInput;
  Type: Type;
  ApiRoomsInput: ApiRoomsInput;
  ApiStayInput: ApiStayInput;
  BookingRS: ResolverTypeWrapper<BookingRS>;
  BookingRQInput: BookingRQInput;
  ApiHolderInput: ApiHolderInput;
  ApiPaymentDataInput: ApiPaymentDataInput;
  ApiBillingAddressInput: ApiBillingAddressInput;
  ApiPaymentContactDataInput: ApiPaymentContactDataInput;
  ApiBookingDeviceInput: ApiBookingDeviceInput;
  ApiPaymentCardInput: ApiPaymentCardInput;
  CardType: CardType;
  ThreeDsDataInput: ThreeDsDataInput;
  InfoProvidedInput: InfoProvidedInput;
  Option: Option;
  ApiBookingRoomInput: ApiBookingRoomInput;
  ApiPaxInput: ApiPaxInput;
  ApiVoucherInput: ApiVoucherInput;
  ApiVoucherEmailInput: ApiVoucherEmailInput;
  BookingCancellationRS: ResolverTypeWrapper<BookingCancellationRS>;
  CancellationFlag: CancellationFlag;
  BookingChangeRS: ResolverTypeWrapper<BookingChangeRS>;
  BookingChangeRQInput: BookingChangeRQInput;
  ApiBookingInput: ApiBookingInput;
  ApiHotelInput: ApiHotelInput;
  ApiCreditCardInput: ApiCreditCardInput;
  ApiKeywordInput: ApiKeywordInput;
  ApiReviewInput: ApiReviewInput;
  Room2Input: Room2Input;
  ApiRateInput: ApiRateInput;
  ApiCancellationPolicyInput: ApiCancellationPolicyInput;
  ApiDailyRateInput: ApiDailyRateInput;
  ApiOfferInput: ApiOfferInput;
  ApiPromotionInput: ApiPromotionInput;
  ApiRateBreakDownInput: ApiRateBreakDownInput;
  ApiRateDiscountInput: ApiRateDiscountInput;
  ApiRateSupplementInput: ApiRateSupplementInput;
  ApiShiftRateInput: ApiShiftRateInput;
  ApiTaxesInput: ApiTaxesInput;
  ApiTaxInput: ApiTaxInput;
  ApiSupplierInput: ApiSupplierInput;
  ApiUpsellingInput: ApiUpsellingInput;
  ApiReceptiveInput: ApiReceptiveInput;
  ApiModificationPoliciesInput: ApiModificationPoliciesInput;
  Mode: Mode;
  CheckRateRS: ResolverTypeWrapper<CheckRateRS>;
  ApiAuditDataCheckRate: ResolverTypeWrapper<ApiAuditDataCheckRate>;
  ApiHotelCheckRate: ResolverTypeWrapper<ApiHotelCheckRate>;
  RoomCheckRate: ResolverTypeWrapper<RoomCheckRate>;
  ApiRateCheckRate: ResolverTypeWrapper<ApiRateCheckRate>;
  ApiCancellationPolicyCheckRate: ResolverTypeWrapper<ApiCancellationPolicyCheckRate>;
  ApiUpsellingCheckRate: ResolverTypeWrapper<ApiUpsellingCheckRate>;
  RoomUpsellingCheckRate: ResolverTypeWrapper<RoomUpsellingCheckRate>;
  ApiRateUpsellingCheckRate: ResolverTypeWrapper<ApiRateUpsellingCheckRate>;
  CheckRateRQInput: CheckRateRQInput;
  ApiAccommodationsRS: ResolverTypeWrapper<ApiAccommodationsRS>;
  ApiAccommodation: ResolverTypeWrapper<ApiAccommodation>;
  ApiContent: ResolverTypeWrapper<ApiContent>;
  ApiHotelbedsError: ResolverTypeWrapper<ApiHotelbedsError>;
  ApiAmenitiesRS: ResolverTypeWrapper<ApiAmenitiesRS>;
  ApiAmenity: ResolverTypeWrapper<ApiAmenity>;
  ApiBoardGroupsRS: ResolverTypeWrapper<ApiBoardGroupsRS>;
  ApiBoardGroup: ResolverTypeWrapper<ApiBoardGroup>;
  ApiBoardsRS: ResolverTypeWrapper<ApiBoardsRS>;
  ApiBoard: ResolverTypeWrapper<ApiBoard>;
  ApiCategoriesRS: ResolverTypeWrapper<ApiCategoriesRS>;
  ApiCategory: ResolverTypeWrapper<ApiCategory>;
  ApiChainsRS: ResolverTypeWrapper<ApiChainsRS>;
  ApiChain: ResolverTypeWrapper<ApiChain>;
  ApiCountriesRS: ResolverTypeWrapper<ApiCountriesRS>;
  ApiCountry: ResolverTypeWrapper<ApiCountry>;
  ApiState: ResolverTypeWrapper<ApiState>;
  ApiCurrenciesRS: ResolverTypeWrapper<ApiCurrenciesRS>;
  ApiCurrency: ResolverTypeWrapper<ApiCurrency>;
  ApiDestinationsRS: ResolverTypeWrapper<ApiDestinationsRS>;
  ApiDestination: ResolverTypeWrapper<ApiDestination>;
  ApiGroupZone: ResolverTypeWrapper<ApiGroupZone>;
  ApiZone: ResolverTypeWrapper<ApiZone>;
  ApiFacilitiesRS: ResolverTypeWrapper<ApiFacilitiesRS>;
  ApiFacility: ResolverTypeWrapper<ApiFacility>;
  ApiFacilityGroupsRS: ResolverTypeWrapper<ApiFacilityGroupsRS>;
  ApiFacilityGroup: ResolverTypeWrapper<ApiFacilityGroup>;
  ApiFacilityTypologiesRS: ResolverTypeWrapper<ApiFacilityTypologiesRS>;
  ApiFacilityType: ResolverTypeWrapper<ApiFacilityType>;
  ApiGroupCategoriesRS: ResolverTypeWrapper<ApiGroupCategoriesRS>;
  ApiGroupCategory: ResolverTypeWrapper<ApiGroupCategory>;
  ApiHotelDetailsRS: ResolverTypeWrapper<ApiHotelDetailsRS>;
  ApiGeoLocation: ResolverTypeWrapper<ApiGeoLocation>;
  ApiHotelFacility: ResolverTypeWrapper<ApiHotelFacility>;
  ApiImage: ResolverTypeWrapper<ApiImage>;
  ApiImageType: ResolverTypeWrapper<ApiImageType>;
  ApiHotelPointOfInterest: ResolverTypeWrapper<ApiHotelPointOfInterest>;
  ApiHotelIssue: ResolverTypeWrapper<ApiHotelIssue>;
  ApiHotelPhone: ResolverTypeWrapper<ApiHotelPhone>;
  ApiHotelRoom: ResolverTypeWrapper<ApiHotelRoom>;
  ApiHotelRoomFacility: ResolverTypeWrapper<ApiHotelRoomFacility>;
  ApiHotelRoomStay: ResolverTypeWrapper<ApiHotelRoomStay>;
  ApiHotelRoomStayFacility: ResolverTypeWrapper<ApiHotelRoomStayFacility>;
  ApiSegment: ResolverTypeWrapper<ApiSegment>;
  ApiHotelTerminal: ResolverTypeWrapper<ApiHotelTerminal>;
  ApiWildCard: ResolverTypeWrapper<ApiWildCard>;
  ApiHotelsRS: ResolverTypeWrapper<ApiHotelsRS>;
  ApiImageTypesRS: ResolverTypeWrapper<ApiImageTypesRS>;
  ApiIssuesRS: ResolverTypeWrapper<ApiIssuesRS>;
  ApiIssue: ResolverTypeWrapper<ApiIssue>;
  ApiLanguagesRS: ResolverTypeWrapper<ApiLanguagesRS>;
  ApiLanguage: ResolverTypeWrapper<ApiLanguage>;
  ApiPromotionsRS: ResolverTypeWrapper<ApiPromotionsRS>;
  ApiRateClassRS: ResolverTypeWrapper<ApiRateClassRS>;
  ApiRateClass: ResolverTypeWrapper<ApiRateClass>;
  ApiRateCommentDetailsRS: ResolverTypeWrapper<ApiRateCommentDetailsRS>;
  ApiRateComment: ResolverTypeWrapper<ApiRateComment>;
  ApiRateCommentsRS: ResolverTypeWrapper<ApiRateCommentsRS>;
  ApiRateComments: ResolverTypeWrapper<ApiRateComments>;
  ApiRateCommentBlock: ResolverTypeWrapper<ApiRateCommentBlock>;
  ApiRoomsRS: ResolverTypeWrapper<ApiRoomsRS>;
  ApiRoom: ResolverTypeWrapper<ApiRoom>;
  ApiSegmentsRS: ResolverTypeWrapper<ApiSegmentsRS>;
  ApiTerminalsRS: ResolverTypeWrapper<ApiTerminalsRS>;
  ApiTerminal: ResolverTypeWrapper<ApiTerminal>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Mutation: {};
  BookingDetailRS: BookingDetailRS;
  ApiAuditData: ApiAuditData;
  String: Scalars['String'];
  ApiBooking: ApiBooking;
  Float: Scalars['Float'];
  ApiHolder: ApiHolder;
  ApiHotel: ApiHotel;
  Int: Scalars['Int'];
  ApiCreditCard: ApiCreditCard;
  ApiKeyword: ApiKeyword;
  Boolean: Scalars['Boolean'];
  ApiReview: ApiReview;
  Room2: Room2;
  ApiPax: ApiPax;
  ApiRate: ApiRate;
  ApiCancellationPolicy: ApiCancellationPolicy;
  ApiDailyRate: ApiDailyRate;
  ApiOffer: ApiOffer;
  ApiPromotion: ApiPromotion;
  ApiRateBreakDown: ApiRateBreakDown;
  ApiRateDiscount: ApiRateDiscount;
  ApiRateSupplement: ApiRateSupplement;
  ApiShiftRate: ApiShiftRate;
  ApiTaxes: ApiTaxes;
  ApiTax: ApiTax;
  ApiSupplier: ApiSupplier;
  ApiUpselling: ApiUpselling;
  ApiReceptive: ApiReceptive;
  ApiModificationPolicies: ApiModificationPolicies;
  ApiError: ApiError;
  BookingListRS: BookingListRS;
  ApiBookingsList: ApiBookingsList;
  ApiBookingList: ApiBookingList;
  ApiHotelBookingList: ApiHotelBookingList;
  RoomBookingList: RoomBookingList;
  ApiRateBookingList: ApiRateBookingList;
  BookingReconfirmation: BookingReconfirmation;
  Bookings2ListItem: Bookings2ListItem;
  Hotel2: Hotel2;
  Rooms13ListItem: Rooms13ListItem;
  AvailabilityRS: AvailabilityRS;
  ApiHotels: ApiHotels;
  AvailabilityRQInput: AvailabilityRQInput;
  ApiBoardsInput: ApiBoardsInput;
  ApiFilterInput: ApiFilterInput;
  ApiGeoLocationInput: ApiGeoLocationInput;
  ApiHotelsFilterInput: ApiHotelsFilterInput;
  ApiKeywordsFilterInput: ApiKeywordsFilterInput;
  ApiOccupancyInput: ApiOccupancyInput;
  ApiReviewFilterInput: ApiReviewFilterInput;
  ApiRoomsInput: ApiRoomsInput;
  ApiStayInput: ApiStayInput;
  BookingRS: BookingRS;
  BookingRQInput: BookingRQInput;
  ApiHolderInput: ApiHolderInput;
  ApiPaymentDataInput: ApiPaymentDataInput;
  ApiBillingAddressInput: ApiBillingAddressInput;
  ApiPaymentContactDataInput: ApiPaymentContactDataInput;
  ApiBookingDeviceInput: ApiBookingDeviceInput;
  ApiPaymentCardInput: ApiPaymentCardInput;
  ThreeDsDataInput: ThreeDsDataInput;
  InfoProvidedInput: InfoProvidedInput;
  ApiBookingRoomInput: ApiBookingRoomInput;
  ApiPaxInput: ApiPaxInput;
  ApiVoucherInput: ApiVoucherInput;
  ApiVoucherEmailInput: ApiVoucherEmailInput;
  BookingCancellationRS: BookingCancellationRS;
  BookingChangeRS: BookingChangeRS;
  BookingChangeRQInput: BookingChangeRQInput;
  ApiBookingInput: ApiBookingInput;
  ApiHotelInput: ApiHotelInput;
  ApiCreditCardInput: ApiCreditCardInput;
  ApiKeywordInput: ApiKeywordInput;
  ApiReviewInput: ApiReviewInput;
  Room2Input: Room2Input;
  ApiRateInput: ApiRateInput;
  ApiCancellationPolicyInput: ApiCancellationPolicyInput;
  ApiDailyRateInput: ApiDailyRateInput;
  ApiOfferInput: ApiOfferInput;
  ApiPromotionInput: ApiPromotionInput;
  ApiRateBreakDownInput: ApiRateBreakDownInput;
  ApiRateDiscountInput: ApiRateDiscountInput;
  ApiRateSupplementInput: ApiRateSupplementInput;
  ApiShiftRateInput: ApiShiftRateInput;
  ApiTaxesInput: ApiTaxesInput;
  ApiTaxInput: ApiTaxInput;
  ApiSupplierInput: ApiSupplierInput;
  ApiUpsellingInput: ApiUpsellingInput;
  ApiReceptiveInput: ApiReceptiveInput;
  ApiModificationPoliciesInput: ApiModificationPoliciesInput;
  CheckRateRS: CheckRateRS;
  ApiAuditDataCheckRate: ApiAuditDataCheckRate;
  ApiHotelCheckRate: ApiHotelCheckRate;
  RoomCheckRate: RoomCheckRate;
  ApiRateCheckRate: ApiRateCheckRate;
  ApiCancellationPolicyCheckRate: ApiCancellationPolicyCheckRate;
  ApiUpsellingCheckRate: ApiUpsellingCheckRate;
  RoomUpsellingCheckRate: RoomUpsellingCheckRate;
  ApiRateUpsellingCheckRate: ApiRateUpsellingCheckRate;
  CheckRateRQInput: CheckRateRQInput;
  ApiAccommodationsRS: ApiAccommodationsRS;
  ApiAccommodation: ApiAccommodation;
  ApiContent: ApiContent;
  ApiHotelbedsError: ApiHotelbedsError;
  ApiAmenitiesRS: ApiAmenitiesRS;
  ApiAmenity: ApiAmenity;
  ApiBoardGroupsRS: ApiBoardGroupsRS;
  ApiBoardGroup: ApiBoardGroup;
  ApiBoardsRS: ApiBoardsRS;
  ApiBoard: ApiBoard;
  ApiCategoriesRS: ApiCategoriesRS;
  ApiCategory: ApiCategory;
  ApiChainsRS: ApiChainsRS;
  ApiChain: ApiChain;
  ApiCountriesRS: ApiCountriesRS;
  ApiCountry: ApiCountry;
  ApiState: ApiState;
  ApiCurrenciesRS: ApiCurrenciesRS;
  ApiCurrency: ApiCurrency;
  ApiDestinationsRS: ApiDestinationsRS;
  ApiDestination: ApiDestination;
  ApiGroupZone: ApiGroupZone;
  ApiZone: ApiZone;
  ApiFacilitiesRS: ApiFacilitiesRS;
  ApiFacility: ApiFacility;
  ApiFacilityGroupsRS: ApiFacilityGroupsRS;
  ApiFacilityGroup: ApiFacilityGroup;
  ApiFacilityTypologiesRS: ApiFacilityTypologiesRS;
  ApiFacilityType: ApiFacilityType;
  ApiGroupCategoriesRS: ApiGroupCategoriesRS;
  ApiGroupCategory: ApiGroupCategory;
  ApiHotelDetailsRS: ApiHotelDetailsRS;
  ApiGeoLocation: ApiGeoLocation;
  ApiHotelFacility: ApiHotelFacility;
  ApiImage: ApiImage;
  ApiImageType: ApiImageType;
  ApiHotelPointOfInterest: ApiHotelPointOfInterest;
  ApiHotelIssue: ApiHotelIssue;
  ApiHotelPhone: ApiHotelPhone;
  ApiHotelRoom: ApiHotelRoom;
  ApiHotelRoomFacility: ApiHotelRoomFacility;
  ApiHotelRoomStay: ApiHotelRoomStay;
  ApiHotelRoomStayFacility: ApiHotelRoomStayFacility;
  ApiSegment: ApiSegment;
  ApiHotelTerminal: ApiHotelTerminal;
  ApiWildCard: ApiWildCard;
  ApiHotelsRS: ApiHotelsRS;
  ApiImageTypesRS: ApiImageTypesRS;
  ApiIssuesRS: ApiIssuesRS;
  ApiIssue: ApiIssue;
  ApiLanguagesRS: ApiLanguagesRS;
  ApiLanguage: ApiLanguage;
  ApiPromotionsRS: ApiPromotionsRS;
  ApiRateClassRS: ApiRateClassRS;
  ApiRateClass: ApiRateClass;
  ApiRateCommentDetailsRS: ApiRateCommentDetailsRS;
  ApiRateComment: ApiRateComment;
  ApiRateCommentsRS: ApiRateCommentsRS;
  ApiRateComments: ApiRateComments;
  ApiRateCommentBlock: ApiRateCommentBlock;
  ApiRoomsRS: ApiRoomsRS;
  ApiRoom: ApiRoom;
  ApiSegmentsRS: ApiSegmentsRS;
  ApiTerminalsRS: ApiTerminalsRS;
  ApiTerminal: ApiTerminal;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  bookingDetailRS?: Resolver<Maybe<ResolversTypes['BookingDetailRS']>, ParentType, ContextType, RequireFields<QuerybookingDetailRSArgs, 'accept' | 'bookingId'>>;
  bookingListRS?: Resolver<Maybe<ResolversTypes['BookingListRS']>, ParentType, ContextType, RequireFields<QuerybookingListRSArgs, 'accept' | 'contentType' | 'end' | 'from' | 'start' | 'to'>>;
  bookingReconfirmation?: Resolver<Maybe<ResolversTypes['BookingReconfirmation']>, ParentType, ContextType, RequireFields<QuerybookingReconfirmationArgs, 'accept' | 'from' | 'to'>>;
  apiAccommodationsRS?: Resolver<Maybe<ResolversTypes['ApiAccommodationsRS']>, ParentType, ContextType, RequireFields<QueryapiAccommodationsRSArgs, 'accept'>>;
  apiAmenitiesRS?: Resolver<Maybe<ResolversTypes['ApiAmenitiesRS']>, ParentType, ContextType, RequireFields<QueryapiAmenitiesRSArgs, 'accept'>>;
  apiBoardGroupsRS?: Resolver<Maybe<ResolversTypes['ApiBoardGroupsRS']>, ParentType, ContextType, RequireFields<QueryapiBoardGroupsRSArgs, 'accept'>>;
  apiBoardsRS?: Resolver<Maybe<ResolversTypes['ApiBoardsRS']>, ParentType, ContextType, RequireFields<QueryapiBoardsRSArgs, 'accept'>>;
  apiCategoriesRS?: Resolver<Maybe<ResolversTypes['ApiCategoriesRS']>, ParentType, ContextType, RequireFields<QueryapiCategoriesRSArgs, 'accept'>>;
  apiChainsRS?: Resolver<Maybe<ResolversTypes['ApiChainsRS']>, ParentType, ContextType, RequireFields<QueryapiChainsRSArgs, 'accept'>>;
  apiCountriesRS?: Resolver<Maybe<ResolversTypes['ApiCountriesRS']>, ParentType, ContextType, RequireFields<QueryapiCountriesRSArgs, 'accept'>>;
  apiCurrenciesRS?: Resolver<Maybe<ResolversTypes['ApiCurrenciesRS']>, ParentType, ContextType, RequireFields<QueryapiCurrenciesRSArgs, 'accept'>>;
  apiDestinationsRS?: Resolver<Maybe<ResolversTypes['ApiDestinationsRS']>, ParentType, ContextType, RequireFields<QueryapiDestinationsRSArgs, 'accept'>>;
  apiFacilitiesRS?: Resolver<Maybe<ResolversTypes['ApiFacilitiesRS']>, ParentType, ContextType, RequireFields<QueryapiFacilitiesRSArgs, 'accept'>>;
  apiFacilityGroupsRS?: Resolver<Maybe<ResolversTypes['ApiFacilityGroupsRS']>, ParentType, ContextType, RequireFields<QueryapiFacilityGroupsRSArgs, 'accept'>>;
  apiFacilityTypologiesRS?: Resolver<Maybe<ResolversTypes['ApiFacilityTypologiesRS']>, ParentType, ContextType, RequireFields<QueryapiFacilityTypologiesRSArgs, 'accept'>>;
  apiGroupCategoriesRS?: Resolver<Maybe<ResolversTypes['ApiGroupCategoriesRS']>, ParentType, ContextType, RequireFields<QueryapiGroupCategoriesRSArgs, 'accept'>>;
  apiHotelDetailsRS?: Resolver<Maybe<ResolversTypes['ApiHotelDetailsRS']>, ParentType, ContextType, RequireFields<QueryapiHotelDetailsRSArgs, 'accept' | 'hotelCodes'>>;
  apiHotelsRS?: Resolver<Maybe<ResolversTypes['ApiHotelsRS']>, ParentType, ContextType, RequireFields<QueryapiHotelsRSArgs, 'accept'>>;
  apiImageTypesRS?: Resolver<Maybe<ResolversTypes['ApiImageTypesRS']>, ParentType, ContextType, RequireFields<QueryapiImageTypesRSArgs, 'accept'>>;
  apiIssuesRS?: Resolver<Maybe<ResolversTypes['ApiIssuesRS']>, ParentType, ContextType, RequireFields<QueryapiIssuesRSArgs, 'accept'>>;
  apiLanguagesRS?: Resolver<Maybe<ResolversTypes['ApiLanguagesRS']>, ParentType, ContextType, RequireFields<QueryapiLanguagesRSArgs, 'accept'>>;
  apiPromotionsRS?: Resolver<Maybe<ResolversTypes['ApiPromotionsRS']>, ParentType, ContextType, RequireFields<QueryapiPromotionsRSArgs, 'accept'>>;
  apiRateClassRS?: Resolver<Maybe<ResolversTypes['ApiRateClassRS']>, ParentType, ContextType, RequireFields<QueryapiRateClassRSArgs, 'accept'>>;
  apiRateCommentDetailsRS?: Resolver<Maybe<ResolversTypes['ApiRateCommentDetailsRS']>, ParentType, ContextType, RequireFields<QueryapiRateCommentDetailsRSArgs, 'accept' | 'code' | 'date'>>;
  apiRateCommentsRS?: Resolver<Maybe<ResolversTypes['ApiRateCommentsRS']>, ParentType, ContextType, RequireFields<QueryapiRateCommentsRSArgs, 'accept'>>;
  apiRoomsRS?: Resolver<Maybe<ResolversTypes['ApiRoomsRS']>, ParentType, ContextType, RequireFields<QueryapiRoomsRSArgs, 'accept'>>;
  apiSegmentsRS?: Resolver<Maybe<ResolversTypes['ApiSegmentsRS']>, ParentType, ContextType, RequireFields<QueryapiSegmentsRSArgs, 'accept'>>;
  apiTerminalsRS?: Resolver<Maybe<ResolversTypes['ApiTerminalsRS']>, ParentType, ContextType, RequireFields<QueryapiTerminalsRSArgs, 'accept'>>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  availability?: Resolver<Maybe<ResolversTypes['AvailabilityRS']>, ParentType, ContextType, RequireFields<MutationavailabilityArgs, 'accept' | 'availabilityRQInput' | 'contentType'>>;
  booking?: Resolver<Maybe<ResolversTypes['BookingRS']>, ParentType, ContextType, RequireFields<MutationbookingArgs, 'accept' | 'bookingRQInput' | 'contentType'>>;
  bookingCancellation?: Resolver<Maybe<ResolversTypes['BookingCancellationRS']>, ParentType, ContextType, RequireFields<MutationbookingCancellationArgs, 'accept' | 'bookingId'>>;
  bookingChange?: Resolver<Maybe<ResolversTypes['BookingChangeRS']>, ParentType, ContextType, RequireFields<MutationbookingChangeArgs, 'accept' | 'bookingChangeRQInput' | 'bookingId' | 'contentType'>>;
  checkRate?: Resolver<Maybe<ResolversTypes['CheckRateRS']>, ParentType, ContextType, RequireFields<MutationcheckRateArgs, 'accept' | 'checkRateRQInput' | 'contentType'>>;
}>;

export type BookingDetailRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingDetailRS'] = ResolversParentTypes['BookingDetailRS']> = ResolversObject<{
  auditData?: Resolver<ResolversTypes['ApiAuditData'], ParentType, ContextType>;
  booking?: Resolver<Maybe<ResolversTypes['ApiBooking']>, ParentType, ContextType>;
  echoToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiAuditDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiAuditData'] = ResolversParentTypes['ApiAuditData']> = ResolversObject<{
  environment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  processTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  release?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requestHost?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serverId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiBookingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiBooking'] = ResolversParentTypes['ApiBooking']> = ResolversObject<{
  agCommision?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cancellationReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clientReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  commisionVAT?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  holder?: Resolver<Maybe<ResolversTypes['ApiHolder']>, ParentType, ContextType>;
  hotel?: Resolver<Maybe<ResolversTypes['ApiHotel']>, ParentType, ContextType>;
  invoiceCompany?: Resolver<Maybe<ResolversTypes['ApiReceptive']>, ParentType, ContextType>;
  modificationPolicies?: Resolver<Maybe<ResolversTypes['ApiModificationPolicies']>, ParentType, ContextType>;
  pendingAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status2']>, ParentType, ContextType>;
  totalNet?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalSellingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHolderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHolder'] = ResolversParentTypes['ApiHolder']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotel'] = ResolversParentTypes['ApiHotel']> = ResolversObject<{
  cancellationAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  categoryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkOut?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clientComments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creditCards?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiCreditCard']>>>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  destinationCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destinationName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exclusiveDeal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  keywords?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiKeyword']>>>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  paymentDataRequired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pendingAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiReview']>>>, ParentType, ContextType>;
  rooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiHotelRoom']>>>, ParentType, ContextType>;
  supplier?: Resolver<Maybe<ResolversTypes['ApiSupplier']>, ParentType, ContextType>;
  totalNet?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalSellingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  upselling?: Resolver<Maybe<ResolversTypes['ApiUpselling']>, ParentType, ContextType>;
  zoneCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  zoneName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accommodationType?: Resolver<Maybe<ResolversTypes['ApiAccommodation']>, ParentType, ContextType>;
  accommodationTypeCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  amenities?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiAmenity']>>>, ParentType, ContextType>;
  amenityCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  boardCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  boards?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiBoard']>>>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['ApiCategory']>, ParentType, ContextType>;
  categoryGroup?: Resolver<Maybe<ResolversTypes['ApiGroupCategory']>, ParentType, ContextType>;
  categoryGroupCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chain?: Resolver<Maybe<ResolversTypes['ApiChain']>, ParentType, ContextType>;
  chainCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  coordinates?: Resolver<Maybe<ResolversTypes['ApiGeoLocation']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['ApiCountry']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destination?: Resolver<Maybe<ResolversTypes['ApiDestination']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facilities?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiHotelFacility']>>>, ParentType, ContextType>;
  giataCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiImage']>>>, ParentType, ContextType>;
  interestPoints?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiHotelPointOfInterest']>>>, ParentType, ContextType>;
  issues?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiHotelIssue']>>>, ParentType, ContextType>;
  lastUpdate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  license?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phones?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiHotelPhone']>>>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ranking?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  s2C?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  segmentCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  segments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiSegment']>>>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['ApiState']>, ParentType, ContextType>;
  stateCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  terminals?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiHotelTerminal']>>>, ParentType, ContextType>;
  web?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wildcards?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiWildCard']>>>, ParentType, ContextType>;
  zone?: Resolver<Maybe<ResolversTypes['ApiZone']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiCreditCardResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiCreditCard'] = ResolversParentTypes['ApiCreditCard']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentType?: Resolver<Maybe<ResolversTypes['PaymentType2']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiKeywordResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiKeyword'] = ResolversParentTypes['ApiKeyword']> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiReviewResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiReview'] = ResolversParentTypes['ApiReview']> = ResolversObject<{
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reviewCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Room2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Room2'] = ResolversParentTypes['Room2']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiPax']>>>, ParentType, ContextType>;
  rates?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiRate']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  supplierReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiPaxResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiPax'] = ResolversParentTypes['ApiPax']> = ResolversObject<{
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roomId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  surname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type2'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRate'] = ResolversParentTypes['ApiRate']> = ResolversObject<{
  adults?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  allotment?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  boardCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  boardName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cancellationPolicies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiCancellationPolicy']>>>, ParentType, ContextType>;
  children?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  childrenAges?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  commission?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionPCT?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionVAT?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dailyRates?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiDailyRate']>>>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountPCT?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hotelCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hotelMandatory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hotelSellingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  net?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offers?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiOffer']>>>, ParentType, ContextType>;
  packaging?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  paymentType?: Resolver<Maybe<ResolversTypes['PaymentType']>, ParentType, ContextType>;
  promotions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiPromotion']>>>, ParentType, ContextType>;
  rateBreakDown?: Resolver<Maybe<ResolversTypes['ApiRateBreakDown']>, ParentType, ContextType>;
  rateClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateComments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateCommentsId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateType?: Resolver<Maybe<ResolversTypes['RateType']>, ParentType, ContextType>;
  rateup?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  resident?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rooms?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sellingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shiftRates?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiShiftRate']>>>, ParentType, ContextType>;
  taxes?: Resolver<Maybe<ResolversTypes['ApiTaxes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiCancellationPolicyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiCancellationPolicy'] = ResolversParentTypes['ApiCancellationPolicy']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hotelAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hotelCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numberOfNights?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiDailyRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiDailyRate'] = ResolversParentTypes['ApiDailyRate']> = ResolversObject<{
  dailyNet?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dailySellingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiOfferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiOffer'] = ResolversParentTypes['ApiOffer']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiPromotionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiPromotion'] = ResolversParentTypes['ApiPromotion']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  remark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRateBreakDownResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRateBreakDown'] = ResolversParentTypes['ApiRateBreakDown']> = ResolversObject<{
  rateDiscounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiRateDiscount']>>>, ParentType, ContextType>;
  rateSupplements?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiRateSupplement']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRateDiscountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRateDiscount'] = ResolversParentTypes['ApiRateDiscount']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRateSupplementResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRateSupplement'] = ResolversParentTypes['ApiRateSupplement']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nights?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  paxNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiShiftRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiShiftRate'] = ResolversParentTypes['ApiShiftRate']> = ResolversObject<{
  allotment?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkOut?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  commission?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionPCT?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionVAT?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountPCT?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hotelCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hotelMandatory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hotelSellingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  net?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rateClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateType?: Resolver<Maybe<ResolversTypes['RateType']>, ParentType, ContextType>;
  resident?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sellingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiTaxesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiTaxes'] = ResolversParentTypes['ApiTaxes']> = ResolversObject<{
  allIncluded?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  taxScheme?: Resolver<Maybe<ResolversTypes['TaxScheme']>, ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiTax']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxSchemeResolvers = { MARGIN: 'margin', GENERAL: 'general' };

export type ApiTaxResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiTax'] = ResolversParentTypes['ApiTax']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  clientAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  clientCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  included?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Type3']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiSupplierResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiSupplier'] = ResolversParentTypes['ApiSupplier']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vatNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiUpsellingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiUpselling'] = ResolversParentTypes['ApiUpselling']> = ResolversObject<{
  rooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Room2']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiReceptiveResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiReceptive'] = ResolversParentTypes['ApiReceptive']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registrationNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiModificationPoliciesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiModificationPolicies'] = ResolversParentTypes['ApiModificationPolicies']> = ResolversObject<{
  cancellation?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  modification?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiError'] = ResolversParentTypes['ApiError']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AcceptResolvers = { APPLICATION_JSON: 'application/json', APPLICATION_XML: 'application/xml' };

export type BookingListRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingListRS'] = ResolversParentTypes['BookingListRS']> = ResolversObject<{
  auditData?: Resolver<ResolversTypes['ApiAuditData'], ParentType, ContextType>;
  bookings?: Resolver<Maybe<ResolversTypes['ApiBookingsList']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiBookingsListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiBookingsList'] = ResolversParentTypes['ApiBookingsList']> = ResolversObject<{
  bookings?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiBookingList']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiBookingListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiBookingList'] = ResolversParentTypes['ApiBookingList']> = ResolversObject<{
  clientReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  holder?: Resolver<Maybe<ResolversTypes['ApiHolder']>, ParentType, ContextType>;
  hotel?: Resolver<Maybe<ResolversTypes['ApiHotelBookingList']>, ParentType, ContextType>;
  invoiceCompany?: Resolver<Maybe<ResolversTypes['ApiReceptive']>, ParentType, ContextType>;
  pendingAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status2']>, ParentType, ContextType>;
  totalNet?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalSellingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelBookingListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotelBookingList'] = ResolversParentTypes['ApiHotelBookingList']> = ResolversObject<{
  cancellationAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  checkIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkOut?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  destinationCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoomBookingList']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomBookingListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RoomBookingList'] = ResolversParentTypes['RoomBookingList']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  paxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiPax']>>>, ParentType, ContextType>;
  rates?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiRateBookingList']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRateBookingListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRateBookingList'] = ResolversParentTypes['ApiRateBookingList']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  boardCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentType?: Resolver<Maybe<ResolversTypes['PaymentType']>, ParentType, ContextType>;
  rooms?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContentTypeResolvers = { APPLICATION_JSON: 'application/json', APPLICATION_XML: 'application/xml' };

export type BookingReconfirmationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingReconfirmation'] = ResolversParentTypes['BookingReconfirmation']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  bookings?: Resolver<Maybe<Array<Maybe<ResolversTypes['Bookings2ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Bookings2ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Bookings2ListItem'] = ResolversParentTypes['Bookings2ListItem']> = ResolversObject<{
  clientReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hotel?: Resolver<Maybe<ResolversTypes['Hotel2']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Hotel2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Hotel2'] = ResolversParentTypes['Hotel2']> = ResolversObject<{
  rooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rooms13ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Rooms13ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Rooms13ListItem'] = ResolversParentTypes['Rooms13ListItem']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  supplierConfirmationCode?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AvailabilityRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AvailabilityRS'] = ResolversParentTypes['AvailabilityRS']> = ResolversObject<{
  auditData?: Resolver<ResolversTypes['ApiAuditData'], ParentType, ContextType>;
  echoToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiError']>, ParentType, ContextType>;
  hotels?: Resolver<Maybe<ResolversTypes['ApiHotels']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotels'] = ResolversParentTypes['ApiHotels']> = ResolversObject<{
  checkIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkOut?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hotels?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiHotel']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnitResolvers = { MI: 'mi', KM: 'km' };

export type BookingRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingRS'] = ResolversParentTypes['BookingRS']> = ResolversObject<{
  auditData?: Resolver<ResolversTypes['ApiAuditData'], ParentType, ContextType>;
  booking?: Resolver<Maybe<ResolversTypes['ApiBooking']>, ParentType, ContextType>;
  echoToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingCancellationRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingCancellationRS'] = ResolversParentTypes['BookingCancellationRS']> = ResolversObject<{
  auditData?: Resolver<ResolversTypes['ApiAuditData'], ParentType, ContextType>;
  booking?: Resolver<Maybe<ResolversTypes['ApiBooking']>, ParentType, ContextType>;
  echoToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingChangeRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingChangeRS'] = ResolversParentTypes['BookingChangeRS']> = ResolversObject<{
  auditData?: Resolver<ResolversTypes['ApiAuditData'], ParentType, ContextType>;
  booking?: Resolver<Maybe<ResolversTypes['ApiBooking']>, ParentType, ContextType>;
  echoToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CheckRateRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CheckRateRS'] = ResolversParentTypes['CheckRateRS']> = ResolversObject<{
  auditData?: Resolver<ResolversTypes['ApiAuditDataCheckRate'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiError']>, ParentType, ContextType>;
  hotels?: Resolver<Maybe<ResolversTypes['ApiHotelCheckRate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiAuditDataCheckRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiAuditDataCheckRate'] = ResolversParentTypes['ApiAuditDataCheckRate']> = ResolversObject<{
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelCheckRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotelCheckRate'] = ResolversParentTypes['ApiHotelCheckRate']> = ResolversObject<{
  categoryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkOut?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creditCards?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiCreditCard']>>>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destinationCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destinationName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  giata?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modificationPolicies?: Resolver<Maybe<ResolversTypes['ApiModificationPolicies']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentDataRequired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoomCheckRate']>>>, ParentType, ContextType>;
  totalNet?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalSellingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  upselling?: Resolver<Maybe<ResolversTypes['ApiUpsellingCheckRate']>, ParentType, ContextType>;
  zoneCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  zoneName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomCheckRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RoomCheckRate'] = ResolversParentTypes['RoomCheckRate']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rates?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiRateCheckRate']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRateCheckRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRateCheckRate'] = ResolversParentTypes['ApiRateCheckRate']> = ResolversObject<{
  adults?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  allotment?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  boardCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  boardName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cancellationPolicies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiCancellationPolicyCheckRate']>>>, ParentType, ContextType>;
  children?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  commission?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionPCT?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionVAT?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountPCT?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hotelCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hotelMandatory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hotelSellingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  net?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offers?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiOffer']>>>, ParentType, ContextType>;
  packaging?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  paymentType?: Resolver<Maybe<ResolversTypes['PaymentType']>, ParentType, ContextType>;
  promotions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiPromotion']>>>, ParentType, ContextType>;
  rateBreakDown?: Resolver<Maybe<ResolversTypes['ApiRateBreakDown']>, ParentType, ContextType>;
  rateClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateComments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateType?: Resolver<Maybe<ResolversTypes['RateType']>, ParentType, ContextType>;
  resident?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rooms?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sellingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiCancellationPolicyCheckRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiCancellationPolicyCheckRate'] = ResolversParentTypes['ApiCancellationPolicyCheckRate']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hotelAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hotelCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiUpsellingCheckRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiUpsellingCheckRate'] = ResolversParentTypes['ApiUpsellingCheckRate']> = ResolversObject<{
  rooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoomUpsellingCheckRate']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomUpsellingCheckRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RoomUpsellingCheckRate'] = ResolversParentTypes['RoomUpsellingCheckRate']> = ResolversObject<{
  rates?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiRateUpsellingCheckRate']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRateUpsellingCheckRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRateUpsellingCheckRate'] = ResolversParentTypes['ApiRateUpsellingCheckRate']> = ResolversObject<{
  adults?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  allotment?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  boardCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  boardName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cancellationPolicies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiCancellationPolicyCheckRate']>>>, ParentType, ContextType>;
  children?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  commission?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionPCT?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionVAT?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountPCT?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hotelCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hotelMandatory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hotelSellingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  net?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  packaging?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  paymentType?: Resolver<Maybe<ResolversTypes['PaymentType']>, ParentType, ContextType>;
  rateBreakDown?: Resolver<Maybe<ResolversTypes['ApiRateBreakDown']>, ParentType, ContextType>;
  rateClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateComments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateType?: Resolver<Maybe<ResolversTypes['RateType']>, ParentType, ContextType>;
  rateup?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  resident?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rooms?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sellingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiAccommodationsRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiAccommodationsRS'] = ResolversParentTypes['ApiAccommodationsRS']> = ResolversObject<{
  accommodations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiAccommodation']>>>, ParentType, ContextType>;
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiAccommodationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiAccommodation'] = ResolversParentTypes['ApiAccommodation']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  typeDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  typeMultiDescription?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiContentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiContent'] = ResolversParentTypes['ApiContent']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  languageCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelbedsErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotelbedsError'] = ResolversParentTypes['ApiHotelbedsError']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiAmenitiesRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiAmenitiesRS'] = ResolversParentTypes['ApiAmenitiesRS']> = ResolversObject<{
  amenities?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiAmenity']>>>, ParentType, ContextType>;
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiAmenityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiAmenity'] = ResolversParentTypes['ApiAmenity']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiBoardGroupsRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiBoardGroupsRS'] = ResolversParentTypes['ApiBoardGroupsRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  boards?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiBoardGroup']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiBoardGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiBoardGroup'] = ResolversParentTypes['ApiBoardGroup']> = ResolversObject<{
  boards?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiBoardsRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiBoardsRS'] = ResolversParentTypes['ApiBoardsRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  boards?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiBoard']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiBoardResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiBoard'] = ResolversParentTypes['ApiBoard']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  multiLingualCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiCategoriesRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiCategoriesRS'] = ResolversParentTypes['ApiCategoriesRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiCategory']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiCategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiCategory'] = ResolversParentTypes['ApiCategory']> = ResolversObject<{
  accommodationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  simpleCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiChainsRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiChainsRS'] = ResolversParentTypes['ApiChainsRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  chains?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiChain']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiChainResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiChain'] = ResolversParentTypes['ApiChain']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiCountriesRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiCountriesRS'] = ResolversParentTypes['ApiCountriesRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  countries?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiCountry']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiCountryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiCountry'] = ResolversParentTypes['ApiCountry']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  isoCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  states?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiState']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiStateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiState'] = ResolversParentTypes['ApiState']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiCurrenciesRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiCurrenciesRS'] = ResolversParentTypes['ApiCurrenciesRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  currencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiCurrency']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiCurrencyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiCurrency'] = ResolversParentTypes['ApiCurrency']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiDestinationsRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiDestinationsRS'] = ResolversParentTypes['ApiDestinationsRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  destinations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiDestination']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiDestinationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiDestination'] = ResolversParentTypes['ApiDestination']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  groupZones?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiGroupZone']>>>, ParentType, ContextType>;
  isoCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiZone']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiGroupZoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiGroupZone'] = ResolversParentTypes['ApiGroupZone']> = ResolversObject<{
  groupZoneCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiZoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiZone'] = ResolversParentTypes['ApiZone']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zoneCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiFacilitiesRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiFacilitiesRS'] = ResolversParentTypes['ApiFacilitiesRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  facilities?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiFacility']>>>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiFacilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiFacility'] = ResolversParentTypes['ApiFacility']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  facilityGroupCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facilityTypologyCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiFacilityGroupsRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiFacilityGroupsRS'] = ResolversParentTypes['ApiFacilityGroupsRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  facilityGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiFacilityGroup']>>>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiFacilityGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiFacilityGroup'] = ResolversParentTypes['ApiFacilityGroup']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiFacilityTypologiesRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiFacilityTypologiesRS'] = ResolversParentTypes['ApiFacilityTypologiesRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  facilityTypologies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiFacilityType']>>>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiFacilityTypeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiFacilityType'] = ResolversParentTypes['ApiFacilityType']> = ResolversObject<{
  ageFromFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ageToFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  amountFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  appTypeFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currencyFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dateFromFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dateToFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  distanceFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  feeFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  indYesOrNoFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  logicFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  numberFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  textFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  timeFromFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  timeToFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiGroupCategoriesRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiGroupCategoriesRS'] = ResolversParentTypes['ApiGroupCategoriesRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  groupCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiGroupCategory']>>>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiGroupCategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiGroupCategory'] = ResolversParentTypes['ApiGroupCategory']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelDetailsRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotelDetailsRS'] = ResolversParentTypes['ApiHotelDetailsRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hotel?: Resolver<Maybe<ResolversTypes['ApiHotel']>, ParentType, ContextType>;
  hotels?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiHotel']>>>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiGeoLocationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiGeoLocation'] = ResolversParentTypes['ApiGeoLocation']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelFacilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotelFacility'] = ResolversParentTypes['ApiHotelFacility']> = ResolversObject<{
  ageFrom?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ageTo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  applicationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateFrom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  distance?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facilityCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facilityGroupCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facilityName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  indFee?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  indLogic?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  indYesOrNo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeFrom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timeTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  voucher?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiImageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiImage'] = ResolversParentTypes['ApiImage']> = ResolversObject<{
  characteristicCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageTypeCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pMSRoomCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roomCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roomType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ApiImageType']>, ParentType, ContextType>;
  visualOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiImageTypeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiImageType'] = ResolversParentTypes['ApiImageType']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelPointOfInterestResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotelPointOfInterest'] = ResolversParentTypes['ApiHotelPointOfInterest']> = ResolversObject<{
  distance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facilityCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facilityGroupCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  poiName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelIssueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotelIssue'] = ResolversParentTypes['ApiHotelIssue']> = ResolversObject<{
  alternative?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dateFrom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  issueCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issueType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelPhoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotelPhone'] = ResolversParentTypes['ApiHotelPhone']> = ResolversObject<{
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelRoomResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotelRoom'] = ResolversParentTypes['ApiHotelRoom']> = ResolversObject<{
  characteristicCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roomCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roomFacilities?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiHotelRoomFacility']>>>, ParentType, ContextType>;
  roomStays?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiHotelRoomStay']>>>, ParentType, ContextType>;
  roomType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelRoomFacilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotelRoomFacility'] = ResolversParentTypes['ApiHotelRoomFacility']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  facilityCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facilityGroupCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  indFee?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  indLogic?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  indYesOrNo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  voucher?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelRoomStayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotelRoomStay'] = ResolversParentTypes['ApiHotelRoomStay']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roomStayFacilities?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiHotelRoomStayFacility']>>>, ParentType, ContextType>;
  stayType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelRoomStayFacilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotelRoomStayFacility'] = ResolversParentTypes['ApiHotelRoomStayFacility']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  facilityCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facilityGroupCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiSegmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiSegment'] = ResolversParentTypes['ApiSegment']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelTerminalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotelTerminal'] = ResolversParentTypes['ApiHotelTerminal']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  distance?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  terminalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  terminalType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiWildCardResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiWildCard'] = ResolversParentTypes['ApiWildCard']> = ResolversObject<{
  characteristicCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hotelRoomDescription?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  roomCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roomType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiHotelsRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiHotelsRS'] = ResolversParentTypes['ApiHotelsRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hotels?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiHotel']>>>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiImageTypesRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiImageTypesRS'] = ResolversParentTypes['ApiImageTypesRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  imageTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiImageType']>>>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiIssuesRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiIssuesRS'] = ResolversParentTypes['ApiIssuesRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  issues?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiIssue']>>>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiIssueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiIssue'] = ResolversParentTypes['ApiIssue']> = ResolversObject<{
  alternative?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiLanguagesRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiLanguagesRS'] = ResolversParentTypes['ApiLanguagesRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiLanguage']>>>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiLanguageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiLanguage'] = ResolversParentTypes['ApiLanguage']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiPromotionsRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiPromotionsRS'] = ResolversParentTypes['ApiPromotionsRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  promotions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiPromotion']>>>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRateClassRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRateClassRS'] = ResolversParentTypes['ApiRateClassRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  classifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiRateClass']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRateClassResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRateClass'] = ResolversParentTypes['ApiRateClass']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRateCommentDetailsRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRateCommentDetailsRS'] = ResolversParentTypes['ApiRateCommentDetailsRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hotel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  incoming?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rateComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiRateComment']>>>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRateCommentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRateComment'] = ResolversParentTypes['ApiRateComment']> = ResolversObject<{
  dateEnd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateStart?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRateCommentsRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRateCommentsRS'] = ResolversParentTypes['ApiRateCommentsRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rateComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiRateComments']>>>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRateCommentsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRateComments'] = ResolversParentTypes['ApiRateComments']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  commentsByRates?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiRateCommentBlock']>>>, ParentType, ContextType>;
  hotel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  incoming?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRateCommentBlockResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRateCommentBlock'] = ResolversParentTypes['ApiRateCommentBlock']> = ResolversObject<{
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiRateComment']>>>, ParentType, ContextType>;
  rateCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRoomsRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRoomsRS'] = ResolversParentTypes['ApiRoomsRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiRoom']>>>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiRoomResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiRoom'] = ResolversParentTypes['ApiRoom']> = ResolversObject<{
  characteristic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  characteristicDescription?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxAdults?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxChildren?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxPax?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minAdults?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minPax?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  typeDescription?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiSegmentsRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiSegmentsRS'] = ResolversParentTypes['ApiSegmentsRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  segments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiSegment']>>>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiTerminalsRSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiTerminalsRS'] = ResolversParentTypes['ApiTerminalsRS']> = ResolversObject<{
  auditData?: Resolver<Maybe<ResolversTypes['ApiAuditData']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ApiHotelbedsError']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  terminals?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApiTerminal']>>>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiTerminalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiTerminal'] = ResolversParentTypes['ApiTerminal']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['ApiContent']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  BookingDetailRS?: BookingDetailRSResolvers<ContextType>;
  ApiAuditData?: ApiAuditDataResolvers<ContextType>;
  ApiBooking?: ApiBookingResolvers<ContextType>;
  ApiHolder?: ApiHolderResolvers<ContextType>;
  ApiHotel?: ApiHotelResolvers<ContextType>;
  ApiCreditCard?: ApiCreditCardResolvers<ContextType>;
  ApiKeyword?: ApiKeywordResolvers<ContextType>;
  ApiReview?: ApiReviewResolvers<ContextType>;
  Room2?: Room2Resolvers<ContextType>;
  ApiPax?: ApiPaxResolvers<ContextType>;
  ApiRate?: ApiRateResolvers<ContextType>;
  ApiCancellationPolicy?: ApiCancellationPolicyResolvers<ContextType>;
  ApiDailyRate?: ApiDailyRateResolvers<ContextType>;
  ApiOffer?: ApiOfferResolvers<ContextType>;
  ApiPromotion?: ApiPromotionResolvers<ContextType>;
  ApiRateBreakDown?: ApiRateBreakDownResolvers<ContextType>;
  ApiRateDiscount?: ApiRateDiscountResolvers<ContextType>;
  ApiRateSupplement?: ApiRateSupplementResolvers<ContextType>;
  ApiShiftRate?: ApiShiftRateResolvers<ContextType>;
  ApiTaxes?: ApiTaxesResolvers<ContextType>;
  TaxScheme?: TaxSchemeResolvers;
  ApiTax?: ApiTaxResolvers<ContextType>;
  ApiSupplier?: ApiSupplierResolvers<ContextType>;
  ApiUpselling?: ApiUpsellingResolvers<ContextType>;
  ApiReceptive?: ApiReceptiveResolvers<ContextType>;
  ApiModificationPolicies?: ApiModificationPoliciesResolvers<ContextType>;
  ApiError?: ApiErrorResolvers<ContextType>;
  Accept?: AcceptResolvers;
  BookingListRS?: BookingListRSResolvers<ContextType>;
  ApiBookingsList?: ApiBookingsListResolvers<ContextType>;
  ApiBookingList?: ApiBookingListResolvers<ContextType>;
  ApiHotelBookingList?: ApiHotelBookingListResolvers<ContextType>;
  RoomBookingList?: RoomBookingListResolvers<ContextType>;
  ApiRateBookingList?: ApiRateBookingListResolvers<ContextType>;
  ContentType?: ContentTypeResolvers;
  BookingReconfirmation?: BookingReconfirmationResolvers<ContextType>;
  Bookings2ListItem?: Bookings2ListItemResolvers<ContextType>;
  Hotel2?: Hotel2Resolvers<ContextType>;
  Rooms13ListItem?: Rooms13ListItemResolvers<ContextType>;
  AvailabilityRS?: AvailabilityRSResolvers<ContextType>;
  ApiHotels?: ApiHotelsResolvers<ContextType>;
  Unit?: UnitResolvers;
  BookingRS?: BookingRSResolvers<ContextType>;
  BookingCancellationRS?: BookingCancellationRSResolvers<ContextType>;
  BookingChangeRS?: BookingChangeRSResolvers<ContextType>;
  CheckRateRS?: CheckRateRSResolvers<ContextType>;
  ApiAuditDataCheckRate?: ApiAuditDataCheckRateResolvers<ContextType>;
  ApiHotelCheckRate?: ApiHotelCheckRateResolvers<ContextType>;
  RoomCheckRate?: RoomCheckRateResolvers<ContextType>;
  ApiRateCheckRate?: ApiRateCheckRateResolvers<ContextType>;
  ApiCancellationPolicyCheckRate?: ApiCancellationPolicyCheckRateResolvers<ContextType>;
  ApiUpsellingCheckRate?: ApiUpsellingCheckRateResolvers<ContextType>;
  RoomUpsellingCheckRate?: RoomUpsellingCheckRateResolvers<ContextType>;
  ApiRateUpsellingCheckRate?: ApiRateUpsellingCheckRateResolvers<ContextType>;
  ApiAccommodationsRS?: ApiAccommodationsRSResolvers<ContextType>;
  ApiAccommodation?: ApiAccommodationResolvers<ContextType>;
  ApiContent?: ApiContentResolvers<ContextType>;
  ApiHotelbedsError?: ApiHotelbedsErrorResolvers<ContextType>;
  ApiAmenitiesRS?: ApiAmenitiesRSResolvers<ContextType>;
  ApiAmenity?: ApiAmenityResolvers<ContextType>;
  ApiBoardGroupsRS?: ApiBoardGroupsRSResolvers<ContextType>;
  ApiBoardGroup?: ApiBoardGroupResolvers<ContextType>;
  ApiBoardsRS?: ApiBoardsRSResolvers<ContextType>;
  ApiBoard?: ApiBoardResolvers<ContextType>;
  ApiCategoriesRS?: ApiCategoriesRSResolvers<ContextType>;
  ApiCategory?: ApiCategoryResolvers<ContextType>;
  ApiChainsRS?: ApiChainsRSResolvers<ContextType>;
  ApiChain?: ApiChainResolvers<ContextType>;
  ApiCountriesRS?: ApiCountriesRSResolvers<ContextType>;
  ApiCountry?: ApiCountryResolvers<ContextType>;
  ApiState?: ApiStateResolvers<ContextType>;
  ApiCurrenciesRS?: ApiCurrenciesRSResolvers<ContextType>;
  ApiCurrency?: ApiCurrencyResolvers<ContextType>;
  ApiDestinationsRS?: ApiDestinationsRSResolvers<ContextType>;
  ApiDestination?: ApiDestinationResolvers<ContextType>;
  ApiGroupZone?: ApiGroupZoneResolvers<ContextType>;
  ApiZone?: ApiZoneResolvers<ContextType>;
  ApiFacilitiesRS?: ApiFacilitiesRSResolvers<ContextType>;
  ApiFacility?: ApiFacilityResolvers<ContextType>;
  ApiFacilityGroupsRS?: ApiFacilityGroupsRSResolvers<ContextType>;
  ApiFacilityGroup?: ApiFacilityGroupResolvers<ContextType>;
  ApiFacilityTypologiesRS?: ApiFacilityTypologiesRSResolvers<ContextType>;
  ApiFacilityType?: ApiFacilityTypeResolvers<ContextType>;
  ApiGroupCategoriesRS?: ApiGroupCategoriesRSResolvers<ContextType>;
  ApiGroupCategory?: ApiGroupCategoryResolvers<ContextType>;
  ApiHotelDetailsRS?: ApiHotelDetailsRSResolvers<ContextType>;
  ApiGeoLocation?: ApiGeoLocationResolvers<ContextType>;
  ApiHotelFacility?: ApiHotelFacilityResolvers<ContextType>;
  ApiImage?: ApiImageResolvers<ContextType>;
  ApiImageType?: ApiImageTypeResolvers<ContextType>;
  ApiHotelPointOfInterest?: ApiHotelPointOfInterestResolvers<ContextType>;
  ApiHotelIssue?: ApiHotelIssueResolvers<ContextType>;
  ApiHotelPhone?: ApiHotelPhoneResolvers<ContextType>;
  ApiHotelRoom?: ApiHotelRoomResolvers<ContextType>;
  ApiHotelRoomFacility?: ApiHotelRoomFacilityResolvers<ContextType>;
  ApiHotelRoomStay?: ApiHotelRoomStayResolvers<ContextType>;
  ApiHotelRoomStayFacility?: ApiHotelRoomStayFacilityResolvers<ContextType>;
  ApiSegment?: ApiSegmentResolvers<ContextType>;
  ApiHotelTerminal?: ApiHotelTerminalResolvers<ContextType>;
  ApiWildCard?: ApiWildCardResolvers<ContextType>;
  ApiHotelsRS?: ApiHotelsRSResolvers<ContextType>;
  ApiImageTypesRS?: ApiImageTypesRSResolvers<ContextType>;
  ApiIssuesRS?: ApiIssuesRSResolvers<ContextType>;
  ApiIssue?: ApiIssueResolvers<ContextType>;
  ApiLanguagesRS?: ApiLanguagesRSResolvers<ContextType>;
  ApiLanguage?: ApiLanguageResolvers<ContextType>;
  ApiPromotionsRS?: ApiPromotionsRSResolvers<ContextType>;
  ApiRateClassRS?: ApiRateClassRSResolvers<ContextType>;
  ApiRateClass?: ApiRateClassResolvers<ContextType>;
  ApiRateCommentDetailsRS?: ApiRateCommentDetailsRSResolvers<ContextType>;
  ApiRateComment?: ApiRateCommentResolvers<ContextType>;
  ApiRateCommentsRS?: ApiRateCommentsRSResolvers<ContextType>;
  ApiRateComments?: ApiRateCommentsResolvers<ContextType>;
  ApiRateCommentBlock?: ApiRateCommentBlockResolvers<ContextType>;
  ApiRoomsRS?: ApiRoomsRSResolvers<ContextType>;
  ApiRoom?: ApiRoomResolvers<ContextType>;
  ApiSegmentsRS?: ApiSegmentsRSResolvers<ContextType>;
  ApiTerminalsRS?: ApiTerminalsRSResolvers<ContextType>;
  ApiTerminal?: ApiTerminalResolvers<ContextType>;
}>;


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace BookingsTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  /**
   * The BookingDetail operation allows to retrieve a booking with all its details from the booking reference locator.
   *
   * Equivalent to GET /bookings/{bookingId}
   */
  bookingDetailRS?: Maybe<BookingDetailRS>;
  /**
   * The booking list operation returns a list of bookings based on the search criteria. The most important information returned for each booking in the list is:
   *
   *   *  Booking reference
   *   *  Booking holder
   *   *  Booking paxes
   *   *  Hotel, rooms and boards confirmed
   *   *  Booking rates
   *
   * The results are returned in a paginated response that can be filtered with the use of parameters in the request.
   *
   * Timeout for this operation is 60 seconds.
   *
   *
   * Equivalent to GET /bookings
   */
  bookingListRS?: Maybe<BookingListRS>;
  /**
   * The Reconfirmation operation allows to retrieve the reconfirmation numbers (The confirmation number of the Hotel, both for the Hotelbeds product and for that of external suppliers product) of the bookings made by the client when requested in a GET call to our endpoint.
   *
   * Obtaining this reconfirmation numbers from hoteliers is an __asynchronous__ service: **reconfirmation numbers are not available at the time of the booking**, and as such they can't be informed at the time of the booking, hence the need for this operation.
   *
   * The Reconfirmation operation offers a wide variety of filters to help narrowing down reconfirmation number results. Only one filter can be used at the same time. Below the four possible filters you can use:
   *
   * * between two cheking dates
   * * between two reconfirmation dates
   * * list of clientReference ids
   * * list of booking Ids
   *
   * ## Reconfirmation Service
   *
   * Additionally we offer you the capacity to receive the reconfirmation numbers automatically in our reconformation service, designed to automatically send you the reconfirmation information as soon as is available from the hoteliers in two different ways:
   *
   * * [Push Service](/documentation/hotels/booking-api/reconfirmation-service/push-service/) : The messages will be automatically sent in JSON format to an endpoint of your choice.
   * * [Email Service](/documentation/hotels/booking-api/reconfirmation-service/email-service/): The messages will be automatically sent in an email to an address of your choice.
   *
   * Contact our support team at [apitude@hotelbeds.com]() to learn more about this features.
   *
   * Equivalent to GET /bookings/reconfirmations
   */
  bookingReconfirmation?: Maybe<BookingReconfirmation>;
};


export type QuerybookingDetailRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  bookingId: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QuerybookingListRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  clientReference?: InputMaybe<Scalars['String']>;
  contentType: ContentType;
  country?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  creationUser?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  end: Scalars['String'];
  filterType?: InputMaybe<FilterType>;
  from: Scalars['Int'];
  hotel?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  start: Scalars['String'];
  status?: InputMaybe<Status3>;
  to: Scalars['Int'];
};


export type QuerybookingReconfirmationArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  clientReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  end?: InputMaybe<Scalars['String']>;
  filterType?: InputMaybe<FilterType2>;
  from: Scalars['Int'];
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  start?: InputMaybe<Scalars['String']>;
  to: Scalars['Int'];
};

/** Response of BookingDetail operation. */
export type BookingDetailRS = {
  /** Relevant internal information. */
  auditData: ApiAuditData;
  /** The Booking object. Contains all data related with the booking itself. */
  booking?: Maybe<ApiBooking>;
  echoToken?: Maybe<Scalars['String']>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiError>;
};

/** Relevant internal information. */
export type ApiAuditData = {
  /** Environment where the request has been sent and processed. */
  environment?: Maybe<Scalars['String']>;
  /** Server process time in milliseconds. */
  processTime?: Maybe<Scalars['String']>;
  /** Release version identifier. */
  release?: Maybe<Scalars['String']>;
  /** IP address of the system host. */
  requestHost?: Maybe<Scalars['String']>;
  /** Server code or ID (for internal use). */
  serverId?: Maybe<Scalars['String']>;
  /** Date/time when the request has been processed (always in Spanish time). */
  timestamp?: Maybe<Scalars['String']>;
  /** Token identifier of the operation. */
  token?: Maybe<Scalars['String']>;
};

/** The Booking object. Contains all data related with the booking itself. */
export type ApiBooking = {
  agCommision?: Maybe<Scalars['Float']>;
  /** Unique cancellation reference. Only appears for cancelled bookings. */
  cancellationReference?: Maybe<Scalars['String']>;
  /** Client internal booking reference. */
  clientReference?: Maybe<Scalars['String']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commisionVAT?: Maybe<Scalars['Float']>;
  /** Booking creation date. */
  creationDate?: Maybe<Scalars['String']>;
  /** The apiKey used to create the booking. */
  creationUser?: Maybe<Scalars['String']>;
  /** Currency of the monetary amount. */
  currency?: Maybe<Scalars['String']>;
  /** Information of the holder of the booking. */
  holder?: Maybe<ApiHolder>;
  /** Information about an hotel and its associated room rates. */
  hotel?: Maybe<ApiHotel>;
  /** Information about the invoice company. */
  invoiceCompany?: Maybe<ApiReceptive>;
  /** Information regarding the allowed modifications to the booking. */
  modificationPolicies?: Maybe<ApiModificationPolicies>;
  /** Remaining amount to be paid. */
  pendingAmount?: Maybe<Scalars['Float']>;
  /** Booking locator. Format: XXXXXXXX-XXXXXXXX */
  reference?: Maybe<Scalars['String']>;
  /** Free text that is sent to the hotelier as a comment from the client. It can be used to request or inform of special requests to hotelier like: Non-smoking room preferred, Twin bed please, Upper floor preferred, Late arrival. */
  remark?: Maybe<Scalars['String']>;
  /** Current status of the booking. */
  status?: Maybe<Status2>;
  /** Total amount of the booking. */
  totalNet?: Maybe<Scalars['Float']>;
  /** Total amount of the booking in hotelCurrency (for the pay at hotel model). */
  totalSellingRate?: Maybe<Scalars['Float']>;
};

/** Information of the holder of the booking. */
export type ApiHolder = {
  /** Booking holder name for all the rooms of the booking. */
  name: Scalars['String'];
  /** Booking holder surname for all rooms of the booking. */
  surname: Scalars['String'];
};

/** Information about an hotel and its associated room rates. */
export type ApiHotel = {
  cancellationAmount?: Maybe<Scalars['Float']>;
  /** Hotelbeds code of the hotel category. */
  categoryCode?: Maybe<Scalars['String']>;
  /** Name of the hotel category. */
  categoryName?: Maybe<Scalars['String']>;
  /** Check-in date. */
  checkIn?: Maybe<Scalars['String']>;
  /** Check-out date. */
  checkOut?: Maybe<Scalars['String']>;
  clientComments?: Maybe<Scalars['String']>;
  /** Hotelbeds internal hotel code. */
  code?: Maybe<Scalars['Int']>;
  /** List of credit cards accepted by the hotel for Liberate model (pay at hotel). */
  creditCards?: Maybe<Array<Maybe<ApiCreditCard>>>;
  /** Client currency. */
  currency?: Maybe<Scalars['String']>;
  /** Hotel description. */
  description?: Maybe<Scalars['String']>;
  /** Code of the destination of the hotel location. */
  destinationCode?: Maybe<Scalars['String']>;
  /** Name of the destination of the hotel location. */
  destinationName?: Maybe<Scalars['String']>;
  /**
   * The value follows a qualitative scale, the number 1 being always the top priority/preferential, and the rest of the product defined by our commercial departments. As of today, the possible values are:
   *   1: Identifies preferential product with exclusive guaranteed availability.
   *   2: Identifies top hotels.
   *   3: Identifies the rest of hotels.
   *   In case new values are added in the future, a proper communication campaign will be carried out to inform you.
   *
   */
  exclusiveDeal?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Array<Maybe<ApiKeyword>>>;
  /** Latitude coordinate of the hotel location. */
  latitude?: Maybe<Scalars['String']>;
  /** Longitude coordinate of the hotel location. */
  longitude?: Maybe<Scalars['String']>;
  /** Maximum hotel room price. */
  maxRate?: Maybe<Scalars['Float']>;
  /** Minimum hotel room price. */
  minRate?: Maybe<Scalars['Float']>;
  /** Name of the hotel. */
  name?: Maybe<Scalars['String']>;
  /** Indicates the need for payment data(i.e.: credit card details) in order to finish the booking. */
  paymentDataRequired?: Maybe<Scalars['Boolean']>;
  /** Remaining amount to be paid. */
  pendingAmount?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Array<Maybe<ApiReview>>>;
  rooms?: Maybe<Array<Maybe<Room2>>>;
  /** Supplier information. */
  supplier?: Maybe<ApiSupplier>;
  /** Total amount of the booking. */
  totalNet?: Maybe<Scalars['Float']>;
  /** Total amount of the booking in hotelCurrency (for the pay at hotel model). */
  totalSellingRate?: Maybe<Scalars['Float']>;
  /** Additional room options with superior category available at the same hotel that was requested. */
  upselling?: Maybe<ApiUpselling>;
  /** Code of the zone of the hotel location. */
  zoneCode?: Maybe<Scalars['Int']>;
  /** Name of the zone of the hotel location. */
  zoneName?: Maybe<Scalars['String']>;
};

/** Information on the accepted credit card. */
export type ApiCreditCard = {
  /** Credit card code. */
  code?: Maybe<Scalars['String']>;
  /** Credit card name. */
  name?: Maybe<Scalars['String']>;
  /** Hotel paymentType in which card is accepted. */
  paymentType?: Maybe<PaymentType2>;
};

export type PaymentType2 =
  | 'AT_HOTEL'
  | 'AT_WEB';

/** Code of the keyword associated with the hotel. */
export type ApiKeyword = {
  /** Keyword code. */
  code: Scalars['Int'];
  rating?: Maybe<Scalars['Int']>;
};

/** Reviews of the hotel. */
export type ApiReview = {
  /** Rating value. */
  rate?: Maybe<Scalars['Float']>;
  /** Total number of ratings for that particular hotel. */
  reviewCount?: Maybe<Scalars['Int']>;
  /** Source of the review. Posible values: TRIPADVISOR, HOTELBEDS. */
  type?: Maybe<Scalars['String']>;
};

/** Information about the room and its associated rates. */
export type Room2 = {
  /** Internal room code. */
  code?: Maybe<Scalars['String']>;
  /** Room reservation identifier. */
  id?: Maybe<Scalars['Int']>;
  /** Room name/description. */
  name?: Maybe<Scalars['String']>;
  /** List of paxes for the room. */
  paxes?: Maybe<Array<Maybe<ApiPax>>>;
  /** List of rates associated to the room. */
  rates?: Maybe<Array<Maybe<ApiRate>>>;
  /** Booking status of the room. */
  status?: Maybe<Status>;
  /** Booking reference of the booking/room for external supplier bookings. */
  supplierReference?: Maybe<Scalars['String']>;
};

/** Passenger information. */
export type ApiPax = {
  /** Age of the passenger (required for children passengers). */
  age?: Maybe<Scalars['Int']>;
  /** Name of the passenger. */
  name?: Maybe<Scalars['String']>;
  roomId?: Maybe<Scalars['Int']>;
  /** Surname of the passenger. */
  surname?: Maybe<Scalars['String']>;
  /** Passenger type, defines if the passenger is adult or child. */
  type: Type2;
};

export type Type2 =
  | 'AD'
  | 'CH';

/** Definition of a rate. */
export type ApiRate = {
  /** Number of adults requested for each room. */
  adults?: Maybe<Scalars['Int']>;
  /** Number of rooms available for a particular room type. */
  allotment?: Maybe<Scalars['Int']>;
  /** Internal board code. */
  boardCode?: Maybe<Scalars['String']>;
  /** Board name/description. */
  boardName?: Maybe<Scalars['String']>;
  /** Brand of the hotel. */
  brand?: Maybe<Scalars['String']>;
  /** List of cancellation policies on the rate. */
  cancellationPolicies?: Maybe<Array<Maybe<ApiCancellationPolicy>>>;
  /** Number of children requested for each room. */
  children?: Maybe<Scalars['Int']>;
  /** Ages of the children (if any). */
  childrenAges?: Maybe<Scalars['String']>;
  /** Profit margin the agency takes (commissionable model). */
  commission?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to commision. */
  commissionPCT?: Maybe<Scalars['Float']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commissionVAT?: Maybe<Scalars['Float']>;
  /** Breakdown of the rate for each day of the stay. */
  dailyRates?: Maybe<Array<Maybe<ApiDailyRate>>>;
  /** Profit margin that the agency would take if it sells at that recommended price. */
  discount?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price. */
  discountPCT?: Maybe<Scalars['Float']>;
  /** Hotel currency(for the pay at hotel model). */
  hotelCurrency?: Maybe<Scalars['String']>;
  /** Identifies if the rate price is recommended. */
  hotelMandatory?: Maybe<Scalars['Boolean']>;
  /** Gross price of the room in hotelCurrency(for the pay at hotel model). */
  hotelSellingRate?: Maybe<Scalars['Float']>;
  /** Net price of the rate. */
  net?: Maybe<Scalars['Float']>;
  /** List of offers on the rate. */
  offers?: Maybe<Array<Maybe<ApiOffer>>>;
  /** Defines if the rate is for packaging. */
  packaging?: Maybe<Scalars['Boolean']>;
  /** Defines the type of payment accepted. */
  paymentType?: Maybe<PaymentType>;
  /** List of promotions on the rate. */
  promotions?: Maybe<Array<Maybe<ApiPromotion>>>;
  /** Breakdown of the rate. */
  rateBreakDown?: Maybe<ApiRateBreakDown>;
  /** Class of the rate. */
  rateClass?: Maybe<Scalars['String']>;
  /** Rate comments that contain important information. */
  rateComments?: Maybe<Scalars['String']>;
  /** Comments associated to this rate (more information on [Hotel Content API](/documentation/hotels/content-api/api-reference/) ). */
  rateCommentsId?: Maybe<Scalars['String']>;
  /** Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking. */
  rateKey?: Maybe<Scalars['String']>;
  /** Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK). */
  rateType?: Maybe<RateType>;
  /** Difference between original rate price and upselling rate price. */
  rateup?: Maybe<Scalars['Float']>;
  /** Indicates if the rate is only for residents (only appears when resident rates are requested). */
  resident?: Maybe<Scalars['Boolean']>;
  /** Number of rooms requested. */
  rooms?: Maybe<Scalars['Int']>;
  /** Gross price of the room in case it is included. */
  sellingRate?: Maybe<Scalars['Float']>;
  /** Information about rates for alternative dates. */
  shiftRates?: Maybe<Array<Maybe<ApiShiftRate>>>;
  /** Information of taxes. */
  taxes?: Maybe<ApiTaxes>;
};

/** Set of rules that define the penalty the client will receive if the cancellation of a booking is made after a given date. */
export type ApiCancellationPolicy = {
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount. */
  amount?: Maybe<Scalars['Float']>;
  /** Date from which the penalties are applied in ISO 8601 format (yyyy-MM-ddTHH:mm:ssZ). */
  from?: Maybe<Scalars['String']>;
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount, provided in hotel currency (for the pay at hotel model). */
  hotelAmount?: Maybe<Scalars['Float']>;
  /** Currency in which the cancellation penalties must be paid (for the pay at hotel model). */
  hotelCurrency?: Maybe<Scalars['String']>;
  /** Penalty that will be applied for cancellations after the indicated date, represented as a number of nights. */
  numberOfNights?: Maybe<Scalars['Float']>;
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount, represented as a percentage of the total amount of the booking. */
  percent?: Maybe<Scalars['Float']>;
};

/** Rate for a specific day of the stay. */
export type ApiDailyRate = {
  /** Net price per day. */
  dailyNet?: Maybe<Scalars['Float']>;
  /** Room selling price per day. */
  dailySellingRate?: Maybe<Scalars['Float']>;
  /** Day number of the stay for which the breakdown is made. */
  offset?: Maybe<Scalars['Int']>;
};

/** Offer information. */
export type ApiOffer = {
  /** Monetary amount deducted by the offer. NOTE: This deduction is already applied to the final price. */
  amount?: Maybe<Scalars['Float']>;
  /** Code of the offer. */
  code?: Maybe<Scalars['String']>;
  /** Short name/description of the offer. */
  name?: Maybe<Scalars['String']>;
};

export type PaymentType =
  | 'AT_HOTEL'
  | 'AT_WEB';

/** Promotion information. */
export type ApiPromotion = {
  /** Code of the promotion. */
  code?: Maybe<Scalars['String']>;
  /** Short name/description of the promotion. */
  name?: Maybe<Scalars['String']>;
  /** Additional information regarding the promotion. */
  remark?: Maybe<Scalars['String']>;
};

/** Breakdown of the rate. */
export type ApiRateBreakDown = {
  /** Information on discounts for the rate. */
  rateDiscounts?: Maybe<Array<Maybe<ApiRateDiscount>>>;
  /** Information on supplements for the rate. */
  rateSupplements?: Maybe<Array<Maybe<ApiRateSupplement>>>;
};

/** Information describing a discount on a rate. */
export type ApiRateDiscount = {
  /** Monetary deducted by the discount NOTE: This deduction is already applied to the final price. */
  amount?: Maybe<Scalars['Float']>;
  /** Code of the discount. */
  code?: Maybe<Scalars['String']>;
  /** Discount name/description. */
  name?: Maybe<Scalars['String']>;
};

/** Information describing a supplement on a rate. */
export type ApiRateSupplement = {
  /** Amount of the supplement. */
  amount?: Maybe<Scalars['Float']>;
  /** Internal code of the supplement. */
  code?: Maybe<Scalars['String']>;
  /** Date from which the discount is applied. */
  from?: Maybe<Scalars['String']>;
  /** Name/description of the supplement. */
  name?: Maybe<Scalars['String']>;
  /** Number of nights for which the supplement applies. */
  nights?: Maybe<Scalars['Int']>;
  /** Number of paxes that are affected by the supplement. */
  paxNumber?: Maybe<Scalars['Int']>;
  /** Date when the discount ends. */
  to?: Maybe<Scalars['String']>;
};

export type RateType =
  | 'BOOKABLE'
  | 'RECHECK';

/** Definition of a rate for an alternative date to the one used in the availability request. */
export type ApiShiftRate = {
  /** Number of rooms available for a particular room type. */
  allotment?: Maybe<Scalars['Int']>;
  /** Brand of the hotel. */
  brand?: Maybe<Scalars['String']>;
  /** CheckIn date for the shift rate. This will always be different than the requested date or the dates of the not alternative rates. */
  checkIn?: Maybe<Scalars['String']>;
  /** CheckIn date for the shift rate. This will always be different than the requested date or the dates of the not alternative rates. */
  checkOut?: Maybe<Scalars['String']>;
  /** Profit margin the agency takes (commissionable model). */
  commission?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to commision. */
  commissionPCT?: Maybe<Scalars['Float']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commissionVAT?: Maybe<Scalars['Float']>;
  /** Profit margin that the agency would take if it sells at that recommended price. */
  discount?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price. */
  discountPCT?: Maybe<Scalars['Float']>;
  /** Hotel currency(for the pay at hotel model). */
  hotelCurrency?: Maybe<Scalars['String']>;
  /** Identifies if the rate price is recommended. */
  hotelMandatory?: Maybe<Scalars['Boolean']>;
  /** Gross price of the room in hotelCurrency(for the pay at hotel model). */
  hotelSellingRate?: Maybe<Scalars['Float']>;
  /** Net price of the rate. */
  net?: Maybe<Scalars['Float']>;
  /** Class of the rate. */
  rateClass?: Maybe<Scalars['String']>;
  /** Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking. */
  rateKey?: Maybe<Scalars['String']>;
  /** Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK). */
  rateType?: Maybe<RateType>;
  /** Indicates if the rate is only for residents (only appears when resident rates are requested). */
  resident?: Maybe<Scalars['Boolean']>;
  /** Gross price of the room in case it is included. */
  sellingRate?: Maybe<Scalars['Float']>;
};

/** Information of taxes. */
export type ApiTaxes = {
  /** Indicates if all taxes are included or not. */
  allIncluded?: Maybe<Scalars['Boolean']>;
  /** "margin": This is an indirect tax regime for travel agencies where split of taxes is not shown in the invoices. In this case, the customer could not deduct any taxes even if the final customer is a legal entity with the right of deduction for indirect taxes. "general": This is the indirect tax regime where the split of taxes is shown in the invoices. In this case, the booking will be invoiced with split of taxes and the customer could be able to deduct the VAT and in some countries, these taxes are reduced rates. This tax scheme offers tax advantage for business customers with the right of deduction for indirect taxes. */
  taxScheme?: Maybe<TaxScheme>;
  /** List of taxes. */
  taxes?: Maybe<Array<Maybe<ApiTax>>>;
};

export type TaxScheme =
  | 'MARGIN'
  | 'GENERAL';

/** Tax information. */
export type ApiTax = {
  /** Value of the tax in hotel currency if the tax is not included in the price. */
  amount?: Maybe<Scalars['Float']>;
  /** Net amount of the tax in the client configured currency. */
  clientAmount?: Maybe<Scalars['Float']>;
  /** Client configured currency. */
  clientCurrency?: Maybe<Scalars['String']>;
  /** Currency of the tax amount. */
  currency?: Maybe<Scalars['String']>;
  /** Indicates if the tax is included in the price or not. */
  included?: Maybe<Scalars['Boolean']>;
  /** Value of the tax as a percentage. */
  percent?: Maybe<Scalars['Float']>;
  /** Type of the tax. */
  type?: Maybe<Type3>;
};

export type Type3 =
  | 'TAX'
  | 'FEE'
  | 'TAXESANDFEES';

export type Status =
  | 'NEW'
  | 'PRECONFIRMED'
  | 'CONFIRMED'
  | 'TO_BE_UPDATED'
  | 'CANCELLED'
  | 'TO_BE_CANCELLED';

/** Supplier information. */
export type ApiSupplier = {
  /** Supplier name. */
  name?: Maybe<Scalars['String']>;
  /** Supplier VAT number. */
  vatNumber?: Maybe<Scalars['String']>;
};

/** Additional room options with superior category available at the same hotel that was requested. */
export type ApiUpselling = {
  /** List of available rooms with superior category. */
  rooms?: Maybe<Array<Maybe<Room2>>>;
};

/** Information about the invoice company. */
export type ApiReceptive = {
  /** Code of the invoice company. */
  code?: Maybe<Scalars['String']>;
  /** Name of the invoice company. */
  name?: Maybe<Scalars['String']>;
  /** Registration number of the invoice company. */
  registrationNumber?: Maybe<Scalars['String']>;
};

/** Information regarding the allowed modifications to the booking. */
export type ApiModificationPolicies = {
  /** Indicates if the booking allows cancellation. */
  cancellation: Scalars['Boolean'];
  /** Indicates if the booking allows modification. */
  modification: Scalars['Boolean'];
};

export type Status2 =
  | 'PRECONFIRMED'
  | 'CONFIRMED'
  | 'CANCELLED';

/** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
export type ApiError = {
  /** Internal token code of the error. */
  code: Scalars['String'];
  /** Descriptive message of the cause of the error. */
  message?: Maybe<Scalars['String']>;
};

export type Accept =
  | 'APPLICATION_JSON'
  | 'APPLICATION_XML';

/** Response of BookingList operation. */
export type BookingListRS = {
  /** Relevant internal information. */
  auditData: ApiAuditData;
  /** List of bookings and related information. */
  bookings?: Maybe<ApiBookingsList>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiError>;
};

/** List of bookings and related information. */
export type ApiBookingsList = {
  /** List of returned bookings matching the parameters used in the request. */
  bookings?: Maybe<Array<Maybe<ApiBookingList>>>;
};

/** The Booking object. Contains all data related with the booking itself. */
export type ApiBookingList = {
  /** Client internal booking reference. */
  clientReference?: Maybe<Scalars['String']>;
  /** Booking creation date. */
  creationDate?: Maybe<Scalars['String']>;
  /** The apiKey used to create the booking. */
  creationUser?: Maybe<Scalars['String']>;
  /** Currency of the monetary amount. */
  currency?: Maybe<Scalars['String']>;
  /** Information of the holder of the booking. */
  holder?: Maybe<ApiHolder>;
  /** Information about an hotel and its associated room rates. */
  hotel?: Maybe<ApiHotelBookingList>;
  /** Information about the invoice company. */
  invoiceCompany?: Maybe<ApiReceptive>;
  /** Remaining amount to be paid. */
  pendingAmount?: Maybe<Scalars['Float']>;
  /** Booking locator. Format: XXXXXXXX-XXXXXXXX */
  reference?: Maybe<Scalars['String']>;
  /** Current status of the booking. */
  status?: Maybe<Status2>;
  /** Total amount of the booking. */
  totalNet?: Maybe<Scalars['Float']>;
  /** Total amount of the booking in hotelCurrency (for the pay at hotel model). */
  totalSellingRate?: Maybe<Scalars['Float']>;
};

/** Information about an hotel and its associated room rates. */
export type ApiHotelBookingList = {
  cancellationAmount?: Maybe<Scalars['Float']>;
  /** Check-in date. */
  checkIn?: Maybe<Scalars['String']>;
  /** Check-out date. */
  checkOut?: Maybe<Scalars['String']>;
  /** Hotelbeds internal hotel code. */
  code?: Maybe<Scalars['Int']>;
  /** Code of the destination of the hotel location. */
  destinationCode?: Maybe<Scalars['String']>;
  /** Name of the hotel. */
  name?: Maybe<Scalars['String']>;
  rooms?: Maybe<Array<Maybe<RoomBookingList>>>;
};

/** Information about the room and its associated rates. */
export type RoomBookingList = {
  /** Internal room code. */
  code?: Maybe<Scalars['String']>;
  /** Room reservation identifier. */
  id?: Maybe<Scalars['Int']>;
  /** List of paxes for the room. */
  paxes?: Maybe<Array<Maybe<ApiPax>>>;
  /** List of rates associated to the room. */
  rates?: Maybe<Array<Maybe<ApiRateBookingList>>>;
  /** Booking status of the room. */
  status?: Maybe<Status>;
};

/** Definition of a rate. */
export type ApiRateBookingList = {
  /** Amount of the rate. */
  amount?: Maybe<Scalars['Float']>;
  /** Internal board code. */
  boardCode?: Maybe<Scalars['String']>;
  /** Defines the type of payment accepted. */
  paymentType?: Maybe<PaymentType>;
  /** Number of rooms requested. */
  rooms?: Maybe<Scalars['Int']>;
};

export type ContentType =
  | 'APPLICATION_JSON'
  | 'APPLICATION_XML';

export type FilterType =
  | 'CHECKIN'
  | 'CREATION';

export type Status3 =
  | 'ALL'
  | 'CONFIRMED'
  | 'CANCELLED';

/** Response of BookingReconfirmation operation. */
export type BookingReconfirmation = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Response of BookingReconfirmationList operation. */
  bookings?: Maybe<Array<Maybe<Bookings2ListItem>>>;
};

/** Response of BookingReconfirmationObj operation. */
export type Bookings2ListItem = {
  /** Client internal booking reference. */
  clientReference?: Maybe<Scalars['String']>;
  hotel?: Maybe<Hotel2>;
  /** Booking locator. Format: XXXXXXXX-XXXXXXXX */
  reference?: Maybe<Scalars['String']>;
};

export type Hotel2 = {
  rooms?: Maybe<Array<Maybe<Rooms13ListItem>>>;
};

export type Rooms13ListItem = {
  /** Internal room code. */
  code?: Maybe<Scalars['String']>;
  /** Room reservation identifier. */
  id?: Maybe<Scalars['Int']>;
  supplierConfirmationCode?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FilterType2 =
  | 'CHECKIN'
  | 'RECONFIRMATION';

export type Mutation = {
  /**
   * This method is used to request **room availability**. Some
   * filters and special features can be applied before sending an availability
   * request.
   *
   * A flexible date search allows customers to retrieve available
   * rates for a specified number of days prior to and post check-in.
   *
   * The response generated is a list of hotels with the different room types, board
   * types, and rates available for those hotels, but not only restricted to the
   * dates selected.
   *
   * BookingAPI prices are final. Our rates include supplements
   * and discounts and no additional price calculations are required.
   *
   * It can also return cancellation fees in the availability response, providing
   * amounts and dates at the first step of the booking.
   *
   * Timeout for this operation is 5 seconds.
   *
   *
   * Equivalent to POST /hotels
   */
  availability?: Maybe<AvailabilityRS>;
  /**
   * The Booking operation requests a reservation confirmation for the specified ratekey or ratekeys.
   *
   * BookingAPI does not support on-request confirmations. All confirmations are instant confirmations.
   *
   * Timeout for this operation is 60 seconds.
   *
   * Equivalent to POST /bookings
   */
  booking?: Maybe<BookingRS>;
  /**
   * BookingCancellation is used either to simulate a cancellation or to perform the actual cancellation.Cancellations always take into account day and time of the destination in order to calculate what cancellation policy should be applied.
   * Timeout for this operation is 60 seconds.
   *
   * Equivalent to DELETE /bookings/{bookingId}
   */
  bookingCancellation?: Maybe<BookingCancellationRS>;
  /**
   * The BookingChange operation is used to change or update different values of a booking.
   *
   * The changes that can be performed are:
   *
   * * Change clientReference
   * * Change remarks
   * * Change holder name and surname
   * * Change checkIn and checkOut date
   * * Change board plans
   * * Change passengers name and surname
   * * Add rooms (only from the same type already in the booking)
   * * Remove rooms from a booking (partial cancellation)
   *
   *
   * Equivalent to PUT /bookings/{bookingId}
   */
  bookingChange?: Maybe<BookingChangeRS>;
  /**
   * CheckRate is an _optional_ operation used to assess and valuate the rate before the actual booking. CheckRate returns the same information as the Availability response for a hotel rate with up-to-date price, along with additional information regarding the rate: rate breakdown, rate comments and upselling options.
   *
   * The CheckRate method can complement the booking process, as it returns additional information to the availability request. However, when the rateType value is 'RECHECK', the CheckRate method is mandatory.
   *
   * Besides the details for the rate, CheckRate has the option to also return information of higher rates of the same hotel being checked. This is called Upselling.
   *
   * Upselling returns additional room options, each with its own rate key, allowing you to upgrade the stay quality in room category and rate plan even after the CheckRate operation has been performed.
   *
   * Timeout for this operation is 15 seconds.
   *
   *
   * Equivalent to POST /checkrates
   */
  checkRate?: Maybe<CheckRateRS>;
};


export type MutationavailabilityArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  availabilityRQInput: AvailabilityRQInput;
  contentType: ContentType;
};


export type MutationbookingArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  bookingRQInput: BookingRQInput;
  contentType: ContentType;
};


export type MutationbookingCancellationArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  bookingId: Scalars['String'];
  cancellationFlag?: InputMaybe<CancellationFlag>;
  language?: InputMaybe<Scalars['String']>;
};


export type MutationbookingChangeArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  bookingChangeRQInput: BookingChangeRQInput;
  bookingId: Scalars['String'];
  contentType: ContentType;
};


export type MutationcheckRateArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  checkRateRQInput: CheckRateRQInput;
  contentType: ContentType;
};

/** Response of Availability operation. */
export type AvailabilityRS = {
  /** Relevant internal information. */
  auditData: ApiAuditData;
  echoToken?: Maybe<Scalars['String']>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiError>;
  /** Hotel availability information. */
  hotels?: Maybe<ApiHotels>;
};

/** Hotel availability information. */
export type ApiHotels = {
  /** Check-in date in the current availability response. */
  checkIn?: Maybe<Scalars['String']>;
  /** Check-out date in the current availability response. */
  checkOut?: Maybe<Scalars['String']>;
  /** Information regarding the hotels. */
  hotels?: Maybe<Array<Maybe<ApiHotel>>>;
  /** Total of hotels returned in the current availability response. */
  total?: Maybe<Scalars['Int']>;
};

/** Request of Availability operation. */
export type AvailabilityRQInput = {
  /** Filter for accomodation type. */
  accommodations?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Tags the request for CacheAPI users (NOTE: MANDATORY for this users when filtering by contract). */
  aifUse?: InputMaybe<Scalars['Boolean']>;
  /** Filter for board types. */
  boards?: InputMaybe<ApiBoardsInput>;
  /** Displays price breakdown per each day of the hotel stay. */
  dailyRate?: InputMaybe<Scalars['Boolean']>;
  /** Filters to limit Availability results by particular values. */
  filter?: InputMaybe<ApiFilterInput>;
  /** Defines the geolocation data for hotel search. */
  geolocation?: InputMaybe<ApiGeoLocationInput>;
  /** Defines the list of hotels for hotel search. */
  hotels?: InputMaybe<ApiHotelsFilterInput>;
  /** Includes additional rates that are normally not exposed in the Availability results. NOTE: Be aware that inclusions are not filters and as such all of the regular rates are returned with the normally not included ones. */
  inclusions?: InputMaybe<Array<InputMaybe<InclusionsListItem>>>;
  /** Filter by codes of keywords associated to hotels. */
  keywords?: InputMaybe<ApiKeywordsFilterInput>;
  /** Language code that defines the language of the response. English will be used by default if this field is not informed. */
  language?: InputMaybe<Scalars['String']>;
  /** List of passenger groups for which to request availability. */
  occupancies: Array<InputMaybe<ApiOccupancyInput>>;
  /** Defines the platform for multiclient developer platforms. */
  platform?: InputMaybe<Scalars['Int']>;
  /** Filter for review rating. */
  review?: InputMaybe<Array<InputMaybe<ApiReviewFilterInput>>>;
  /** Filter for room types. */
  rooms?: InputMaybe<ApiRoomsInput>;
  /** Hotelbeds Group client source market. */
  sourceMarket?: InputMaybe<Scalars['String']>;
  /** Defines the time of the stay at the hotel. */
  stay: ApiStayInput;
};

/** Filter for board types. */
export type ApiBoardsInput = {
  /** List of board type codes to filter by. You can get all the possible board type code values through the board types operation of [Hotel Content API](/documentation/hotels/content-api/api-reference/). */
  board: Array<InputMaybe<Scalars['String']>>;
  /** Includes or excludes the listed board types from the response. */
  included: Scalars['Boolean'];
};

/** Filters to limit Availability results by particular values. */
export type ApiFilterInput = {
  /** Filters the results by the contract requested. (NOTE: when using this filter is mandatory to inform availabilityRQ/@aifUse attribute) */
  contract?: InputMaybe<Scalars['String']>;
  /** Includes or excludes hotel packages (packages created by Hotelbeds that include another product together with the hotel accomodation: massages, tickets, etc.). */
  hotelPackage?: InputMaybe<HotelPackage>;
  /** Filter for maximum hotel category. */
  maxCategory?: InputMaybe<Scalars['Int']>;
  /** Filter for maximum number of hotels you want to receive in the response. */
  maxHotels?: InputMaybe<Scalars['Int']>;
  /** Filter for maximum hotel room price. */
  maxRate?: InputMaybe<Scalars['Float']>;
  /** Filter for maximum number of rates per room. */
  maxRatesPerRoom?: InputMaybe<Scalars['Int']>;
  /** Filter for maximum number of rooms you want to receive for each hotel. */
  maxRooms?: InputMaybe<Scalars['Int']>;
  /** Filter for minimun hotel category. */
  minCategory?: InputMaybe<Scalars['Int']>;
  /** Filter for minimum hotel room price. */
  minRate?: InputMaybe<Scalars['Float']>;
  /** Includes or excludes package rates in the response. Package rates are excluded by default if this is not informed. */
  packaging?: InputMaybe<Scalars['Boolean']>;
};

export type HotelPackage =
  | 'YES'
  | 'NO'
  | 'BOTH';

/** Defines the geolocation data for hotel search. */
export type ApiGeoLocationInput = {
  /** Latitude coordinate for geolocation search. */
  latitude: Scalars['Float'];
  /** Longitude coordinate for geolocation search. */
  longitude: Scalars['Float'];
  /** Radius size for circular search. */
  radius?: InputMaybe<Scalars['Float']>;
  /** Latitude coordinate for geolocation search for rectangle search. Determines bottom right point of the search area. */
  secondaryLatitude?: InputMaybe<Scalars['Float']>;
  /** Longitude coordinate for geolocation search for rectangle search. Determines bottom right point of the search area. */
  secondaryLongitude?: InputMaybe<Scalars['Float']>;
  /** Distance unit for the radius. */
  unit?: InputMaybe<Unit>;
};

export type Unit =
  | 'MI'
  | 'KM';

/** Defines the list of hotels for hotel search. */
export type ApiHotelsFilterInput = {
  /** List of codes of the requested hotels. */
  hotel: Array<InputMaybe<Scalars['Int']>>;
};

export type InclusionsListItem =
  | 'RESIDENT_RATES';

/** Filter by codes of keywords associated to hotels. */
export type ApiKeywordsFilterInput = {
  /** Defines if the results must match all the indicated keyword codes. */
  allIncluded?: InputMaybe<Scalars['Boolean']>;
  /** List of keyword codes to filter. */
  keyword?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** Definition of passengers groups and how they are distributed in different rooms. */
export type ApiOccupancyInput = {
  /** Number of adult passengers for this room. */
  adults: Scalars['Int'];
  /** number of child passengers for this room. */
  children: Scalars['Int'];
  /** Number of requested rooms of this occupancy. */
  rooms: Scalars['Int'];
};

/** Filter hotels by rating and number of reviews. */
export type ApiReviewFilterInput = {
  /** Maximum review rating you want the hotels to have. */
  maxRate?: InputMaybe<Scalars['Float']>;
  /** Minimun review rating you want the hotels to have. */
  minRate?: InputMaybe<Scalars['Float']>;
  /** Minimum number of reviews you want the hotels to have. */
  minReviewCount?: InputMaybe<Scalars['Int']>;
  /** Defines the source of the reviews. */
  type: Type;
};

export type Type =
  | 'TRIPADVISOR'
  | 'HOTELBEDS';

/** Filter for room types. */
export type ApiRoomsInput = {
  /** Includes or excludes the listed room types from the response. */
  included: Scalars['Boolean'];
  /** List of room type codes to filter by. You can get all the possible room type code values through the room types operation of [Hotel Content API](/documentation/hotels/content-api/api-reference/). */
  room: Array<InputMaybe<Scalars['String']>>;
};

/** Defines the time of the stay at the hotel. */
export type ApiStayInput = {
  /** Defines if results are returned for shiftDays even if there's no results for the searched dates. */
  allowOnlyShift?: InputMaybe<Scalars['Boolean']>;
  /** Check-in date. */
  checkIn: Scalars['String'];
  /** Check-out date. */
  checkOut: Scalars['String'];
  /** Amount of days after and before the check-in to check availability, keeping the same stay duration. */
  shiftDays?: InputMaybe<Scalars['Int']>;
};

/** Response of Booking operation. */
export type BookingRS = {
  /** Relevant internal information. */
  auditData: ApiAuditData;
  /** The Booking object. Contains all data related with the booking itself. */
  booking?: Maybe<ApiBooking>;
  echoToken?: Maybe<Scalars['String']>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiError>;
};

/** Request of Booking operation. */
export type BookingRQInput = {
  /** Internal booking reference. */
  clientReference: Scalars['String'];
  /** Identifies the agent name of the booking. If empty, by default it will be the same than the apikey performing the booking . */
  creationUser?: InputMaybe<Scalars['String']>;
  echoToken?: InputMaybe<Scalars['String']>;
  /** Information of the holder of the booking. */
  holder: ApiHolderInput;
  /** Language code that defines the language of the response. English will be used by default if this field is not informed. */
  language?: InputMaybe<Scalars['String']>;
  /** Payment information. This is mandatory for rates with paymentType='AT_HOTEL' or for accounts setup as credit card payment. */
  paymentData?: InputMaybe<ApiPaymentDataInput>;
  /** Free text sent to the hotelier. It can be used to request or inform of special requests to hotelier like: Non-smoking room preferred, Twin bed please, Upper floor preferred, Late arrival. */
  remark?: InputMaybe<Scalars['String']>;
  /** List of the rooms to be included in the booking. */
  rooms?: InputMaybe<Array<InputMaybe<ApiBookingRoomInput>>>;
  /** Margin of price difference (as percentage) accepted when a price difference occurs between Availability/CheckRate and Booking operations. Do not use more than two decimal characters when defining tolerance. Example: to input a tolerance of 5%, you should input 5.00.  NOTE: Authorisation for the use of this tag is subject to prior written agreement with your sales manager */
  tolerance?: InputMaybe<Scalars['Float']>;
  /** Booking voucher information. */
  voucher?: InputMaybe<ApiVoucherInput>;
};

/** Information of the holder of the booking. */
export type ApiHolderInput = {
  /** Booking holder name for all the rooms of the booking. */
  name: Scalars['String'];
  /** Booking holder surname for all rooms of the booking. */
  surname: Scalars['String'];
};

/** Payment information. This is mandatory for rates with paymentType='AT_HOTEL' or for accounts setup as credit card payment. */
export type ApiPaymentDataInput = {
  /** The billing address of your credit card. Mandatory for clients with AVS or other fraud detection mechanisms activated. Please contact apitude@hotelbeds.com to know if you must provide this data or not. Normally this is enabled only for clients using the end user's credit card. */
  billingAddress?: InputMaybe<ApiBillingAddressInput>;
  /** Contact data for billing. */
  contactData: ApiPaymentContactDataInput;
  /** Defines the device where the booking was made. Mandatory only payments done with the end user's credit card. */
  device?: InputMaybe<ApiBookingDeviceInput>;
  /** Credit card information. */
  paymentCard: ApiPaymentCardInput;
  /** Mandatory for clients based on Europe using European credit cards. */
  threeDsData?: InputMaybe<ThreeDsDataInput>;
  /** Identifies web partners bookings. Only required when using the end user's credit card. */
  webPartner?: InputMaybe<Scalars['Int']>;
};

/** The billing address of your credit card. Mandatory for clients with AVS or other fraud detection mechanisms activated. Please contact apitude@hotelbeds.com to know if you must provide this data or not. Normally this is enabled only for clients using the end user's credit card. */
export type ApiBillingAddressInput = {
  /** Address first line. */
  address1: Scalars['String'];
  /** Address second line. */
  address2?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  /** Code of the country. */
  countryCode: Scalars['String'];
  postalCode: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
};

/** Contact data for billing. */
export type ApiPaymentContactDataInput = {
  /** Email address. */
  email: Scalars['String'];
  /** Telephone number. */
  phoneNumber: Scalars['String'];
};

/** Defines the device where the booking was made. Mandatory only payments done with the end user's credit card. */
export type ApiBookingDeviceInput = {
  /** Free field to identify the device. In the case of having an integration with Riskified, their token should be sent here. */
  id?: InputMaybe<Scalars['String']>;
  /** IP address of the end user. */
  ip: Scalars['String'];
  /** useAgent of the end user's browser. */
  userAgent: Scalars['String'];
};

/** Credit card information. */
export type ApiPaymentCardInput = {
  /** CVC security code of the credit card. */
  cardCVC: Scalars['String'];
  /** Name of the credit card holder exactly as it appears on the credit card. */
  cardHolderName: Scalars['String'];
  /** Credit card number (without spaces). */
  cardNumber: Scalars['String'];
  /** Credit card type. */
  cardType: CardType;
  /** Expiration date of the credit card; */
  expiryDate: Scalars['String'];
};

export type CardType =
  | 'AMEX'
  | 'EURO6000'
  | 'JCB'
  | 'DINERS'
  | 'MASTERCARD'
  | 'VISA'
  | 'MAESTRO'
  | 'SWITCH'
  | 'SOLO_GB'
  | 'AIRPLUS'
  | 'CHINAUNIONPAY'
  | 'DISCOVER';

/** Mandatory for clients based on Europe using European credit cards. */
export type ThreeDsDataInput = {
  /** Provided ThreeDS structure */
  infoProvided?: InputMaybe<InfoProvidedInput>;
  /** Use PROVIDED if you have your own integration with a PSP */
  option: Option;
  /** This field contains the 3DS version used for authentication */
  version: Scalars['String'];
};

/** Provided ThreeDS structure */
export type InfoProvidedInput = {
  /** Cardholder Authentication Verification Value (CAVV) */
  cavv: Scalars['String'];
  /** Electronic Commerce Indicator (ECI). The ECI value is part of the two data elements that indicate the transaction was processed electronically. */
  eci: Scalars['String'];
  /** Transaction identifier resulting from authentication processing. */
  id: Scalars['String'];
};

export type Option =
  | 'PROVIDED'
  | 'REQUESTED';

/** Defines the room to be booked. */
export type ApiBookingRoomInput = {
  /** Data of the passengers assigned to this room. */
  paxes?: InputMaybe<Array<InputMaybe<ApiPaxInput>>>;
  /** Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking. */
  rateKey: Scalars['String'];
};

/** Passenger information. */
export type ApiPaxInput = {
  /** Age of the passenger (required for children passengers). */
  age?: InputMaybe<Scalars['Int']>;
  /** Name of the passenger. */
  name?: InputMaybe<Scalars['String']>;
  roomId?: InputMaybe<Scalars['Int']>;
  /** Surname of the passenger. */
  surname?: InputMaybe<Scalars['String']>;
  /** Passenger type, defines if the passenger is adult or child. */
  type: Type2;
};

/** Booking voucher information. */
export type ApiVoucherInput = {
  /** Information regarding the email delivery of the voucher. */
  email?: InputMaybe<ApiVoucherEmailInput>;
  /** Language code that defines the language of the descriptions of the voucher. English will be used by default if this field is not informed. */
  language?: InputMaybe<Scalars['String']>;
  /** Path of the picture you want to be featured in the header of the voucher as logo. Accepted formats: PNG, JPG, GIF & BMP. Max size: 100px x 100px. The filename part of the picture path cannot exceed 35 characters length. */
  logo?: InputMaybe<Scalars['String']>;
};

/** Information regarding the email delivery of the voucher. */
export type ApiVoucherEmailInput = {
  /** Body of the voucher email. */
  body?: InputMaybe<Scalars['String']>;
  /** Email address that will appear as sender of the email. If not used, the default value is noreply@hotelbeds.com */
  from?: InputMaybe<Scalars['String']>;
  /** Email subject. If not used, the default subject will have the following structure: Voucher - {{bookingReference}} - {{hotelName}}. */
  title?: InputMaybe<Scalars['String']>;
  /** Email address to which the voucher will be sent. Only one address is allowed. */
  to?: InputMaybe<Scalars['String']>;
};

/** Response of BookingCancellation operation. */
export type BookingCancellationRS = {
  /** Relevant internal information. */
  auditData: ApiAuditData;
  /** The Booking object. Contains all data related with the booking itself. */
  booking?: Maybe<ApiBooking>;
  echoToken?: Maybe<Scalars['String']>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiError>;
};

export type CancellationFlag =
  | 'CANCELLATION'
  | 'SIMULATION';

/** Response of BookingChange operation. */
export type BookingChangeRS = {
  /** Relevant internal information. */
  auditData: ApiAuditData;
  /** The Booking object. Contains all data related with the booking itself. */
  booking?: Maybe<ApiBooking>;
  echoToken?: Maybe<Scalars['String']>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiError>;
};

/** Request of BookingChange operation. */
export type BookingChangeRQInput = {
  /** The Booking object. Contains all data related with the booking itself. */
  booking: ApiBookingInput;
  bookingId?: InputMaybe<Scalars['String']>;
  /** Language code that defines the language of the response. English will be used by default if this field is not informed. */
  language?: InputMaybe<Scalars['String']>;
  /** Defines if the operation will be a simulation or an actual modification. */
  mode: Mode;
  /** Payment information. This is mandatory for rates with paymentType='AT_HOTEL' or for accounts setup as credit card payment. */
  paymentData?: InputMaybe<ApiPaymentDataInput>;
};

/** The Booking object. Contains all data related with the booking itself. */
export type ApiBookingInput = {
  agCommision?: InputMaybe<Scalars['Float']>;
  /** Unique cancellation reference. Only appears for cancelled bookings. */
  cancellationReference?: InputMaybe<Scalars['String']>;
  /** Client internal booking reference. */
  clientReference?: InputMaybe<Scalars['String']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commisionVAT?: InputMaybe<Scalars['Float']>;
  /** Booking creation date. */
  creationDate?: InputMaybe<Scalars['String']>;
  /** The apiKey used to create the booking. */
  creationUser?: InputMaybe<Scalars['String']>;
  /** Currency of the monetary amount. */
  currency?: InputMaybe<Scalars['String']>;
  /** Information of the holder of the booking. */
  holder?: InputMaybe<ApiHolderInput>;
  /** Information about an hotel and its associated room rates. */
  hotel?: InputMaybe<ApiHotelInput>;
  /** Information about the invoice company. */
  invoiceCompany?: InputMaybe<ApiReceptiveInput>;
  /** Information regarding the allowed modifications to the booking. */
  modificationPolicies?: InputMaybe<ApiModificationPoliciesInput>;
  /** Remaining amount to be paid. */
  pendingAmount?: InputMaybe<Scalars['Float']>;
  /** Booking locator. Format: XXXXXXXX-XXXXXXXX */
  reference?: InputMaybe<Scalars['String']>;
  /** Free text that is sent to the hotelier as a comment from the client. It can be used to request or inform of special requests to hotelier like: Non-smoking room preferred, Twin bed please, Upper floor preferred, Late arrival. */
  remark?: InputMaybe<Scalars['String']>;
  /** Current status of the booking. */
  status?: InputMaybe<Status2>;
  /** Total amount of the booking. */
  totalNet?: InputMaybe<Scalars['Float']>;
  /** Total amount of the booking in hotelCurrency (for the pay at hotel model). */
  totalSellingRate?: InputMaybe<Scalars['Float']>;
};

/** Information about an hotel and its associated room rates. */
export type ApiHotelInput = {
  cancellationAmount?: InputMaybe<Scalars['Float']>;
  /** Hotelbeds code of the hotel category. */
  categoryCode?: InputMaybe<Scalars['String']>;
  /** Name of the hotel category. */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Check-in date. */
  checkIn?: InputMaybe<Scalars['String']>;
  /** Check-out date. */
  checkOut?: InputMaybe<Scalars['String']>;
  clientComments?: InputMaybe<Scalars['String']>;
  /** Hotelbeds internal hotel code. */
  code?: InputMaybe<Scalars['Int']>;
  /** List of credit cards accepted by the hotel for Liberate model (pay at hotel). */
  creditCards?: InputMaybe<Array<InputMaybe<ApiCreditCardInput>>>;
  /** Client currency. */
  currency?: InputMaybe<Scalars['String']>;
  /** Hotel description. */
  description?: InputMaybe<Scalars['String']>;
  /** Code of the destination of the hotel location. */
  destinationCode?: InputMaybe<Scalars['String']>;
  /** Name of the destination of the hotel location. */
  destinationName?: InputMaybe<Scalars['String']>;
  /**
   * The value follows a qualitative scale, the number 1 being always the top priority/preferential, and the rest of the product defined by our commercial departments. As of today, the possible values are:
   *   1: Identifies preferential product with exclusive guaranteed availability.
   *   2: Identifies top hotels.
   *   3: Identifies the rest of hotels.
   *   In case new values are added in the future, a proper communication campaign will be carried out to inform you.
   *
   */
  exclusiveDeal?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Array<InputMaybe<ApiKeywordInput>>>;
  /** Latitude coordinate of the hotel location. */
  latitude?: InputMaybe<Scalars['String']>;
  /** Longitude coordinate of the hotel location. */
  longitude?: InputMaybe<Scalars['String']>;
  /** Maximum hotel room price. */
  maxRate?: InputMaybe<Scalars['Float']>;
  /** Minimum hotel room price. */
  minRate?: InputMaybe<Scalars['Float']>;
  /** Name of the hotel. */
  name?: InputMaybe<Scalars['String']>;
  /** Indicates the need for payment data(i.e.: credit card details) in order to finish the booking. */
  paymentDataRequired?: InputMaybe<Scalars['Boolean']>;
  /** Remaining amount to be paid. */
  pendingAmount?: InputMaybe<Scalars['Float']>;
  reviews?: InputMaybe<Array<InputMaybe<ApiReviewInput>>>;
  rooms?: InputMaybe<Array<InputMaybe<Room2Input>>>;
  /** Supplier information. */
  supplier?: InputMaybe<ApiSupplierInput>;
  /** Total amount of the booking. */
  totalNet?: InputMaybe<Scalars['Float']>;
  /** Total amount of the booking in hotelCurrency (for the pay at hotel model). */
  totalSellingRate?: InputMaybe<Scalars['Float']>;
  /** Additional room options with superior category available at the same hotel that was requested. */
  upselling?: InputMaybe<ApiUpsellingInput>;
  /** Code of the zone of the hotel location. */
  zoneCode?: InputMaybe<Scalars['Int']>;
  /** Name of the zone of the hotel location. */
  zoneName?: InputMaybe<Scalars['String']>;
};

/** Information on the accepted credit card. */
export type ApiCreditCardInput = {
  /** Credit card code. */
  code?: InputMaybe<Scalars['String']>;
  /** Credit card name. */
  name?: InputMaybe<Scalars['String']>;
  /** Hotel paymentType in which card is accepted. */
  paymentType?: InputMaybe<PaymentType2>;
};

/** Code of the keyword associated with the hotel. */
export type ApiKeywordInput = {
  /** Keyword code. */
  code: Scalars['Int'];
  rating?: InputMaybe<Scalars['Int']>;
};

/** Reviews of the hotel. */
export type ApiReviewInput = {
  /** Rating value. */
  rate?: InputMaybe<Scalars['Float']>;
  /** Total number of ratings for that particular hotel. */
  reviewCount?: InputMaybe<Scalars['Int']>;
  /** Source of the review. Posible values: TRIPADVISOR, HOTELBEDS. */
  type?: InputMaybe<Scalars['String']>;
};

/** Information about the room and its associated rates. */
export type Room2Input = {
  /** Internal room code. */
  code?: InputMaybe<Scalars['String']>;
  /** Room reservation identifier. */
  id?: InputMaybe<Scalars['Int']>;
  /** Room name/description. */
  name?: InputMaybe<Scalars['String']>;
  /** List of paxes for the room. */
  paxes?: InputMaybe<Array<InputMaybe<ApiPaxInput>>>;
  /** List of rates associated to the room. */
  rates?: InputMaybe<Array<InputMaybe<ApiRateInput>>>;
  /** Booking status of the room. */
  status?: InputMaybe<Status>;
  /** Booking reference of the booking/room for external supplier bookings. */
  supplierReference?: InputMaybe<Scalars['String']>;
};

/** Definition of a rate. */
export type ApiRateInput = {
  /** Number of adults requested for each room. */
  adults?: InputMaybe<Scalars['Int']>;
  /** Number of rooms available for a particular room type. */
  allotment?: InputMaybe<Scalars['Int']>;
  /** Internal board code. */
  boardCode?: InputMaybe<Scalars['String']>;
  /** Board name/description. */
  boardName?: InputMaybe<Scalars['String']>;
  /** Brand of the hotel. */
  brand?: InputMaybe<Scalars['String']>;
  /** List of cancellation policies on the rate. */
  cancellationPolicies?: InputMaybe<Array<InputMaybe<ApiCancellationPolicyInput>>>;
  /** Number of children requested for each room. */
  children?: InputMaybe<Scalars['Int']>;
  /** Ages of the children (if any). */
  childrenAges?: InputMaybe<Scalars['String']>;
  /** Profit margin the agency takes (commissionable model). */
  commission?: InputMaybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to commision. */
  commissionPCT?: InputMaybe<Scalars['Float']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commissionVAT?: InputMaybe<Scalars['Float']>;
  /** Breakdown of the rate for each day of the stay. */
  dailyRates?: InputMaybe<Array<InputMaybe<ApiDailyRateInput>>>;
  /** Profit margin that the agency would take if it sells at that recommended price. */
  discount?: InputMaybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price. */
  discountPCT?: InputMaybe<Scalars['Float']>;
  /** Hotel currency(for the pay at hotel model). */
  hotelCurrency?: InputMaybe<Scalars['String']>;
  /** Identifies if the rate price is recommended. */
  hotelMandatory?: InputMaybe<Scalars['Boolean']>;
  /** Gross price of the room in hotelCurrency(for the pay at hotel model). */
  hotelSellingRate?: InputMaybe<Scalars['Float']>;
  /** Net price of the rate. */
  net?: InputMaybe<Scalars['Float']>;
  /** List of offers on the rate. */
  offers?: InputMaybe<Array<InputMaybe<ApiOfferInput>>>;
  /** Defines if the rate is for packaging. */
  packaging?: InputMaybe<Scalars['Boolean']>;
  /** Defines the type of payment accepted. */
  paymentType?: InputMaybe<PaymentType>;
  /** List of promotions on the rate. */
  promotions?: InputMaybe<Array<InputMaybe<ApiPromotionInput>>>;
  /** Breakdown of the rate. */
  rateBreakDown?: InputMaybe<ApiRateBreakDownInput>;
  /** Class of the rate. */
  rateClass?: InputMaybe<Scalars['String']>;
  /** Rate comments that contain important information. */
  rateComments?: InputMaybe<Scalars['String']>;
  /** Comments associated to this rate (more information on [Hotel Content API](/documentation/hotels/content-api/api-reference/) ). */
  rateCommentsId?: InputMaybe<Scalars['String']>;
  /** Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking. */
  rateKey?: InputMaybe<Scalars['String']>;
  /** Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK). */
  rateType?: InputMaybe<RateType>;
  /** Difference between original rate price and upselling rate price. */
  rateup?: InputMaybe<Scalars['Float']>;
  /** Indicates if the rate is only for residents (only appears when resident rates are requested). */
  resident?: InputMaybe<Scalars['Boolean']>;
  /** Number of rooms requested. */
  rooms?: InputMaybe<Scalars['Int']>;
  /** Gross price of the room in case it is included. */
  sellingRate?: InputMaybe<Scalars['Float']>;
  /** Information about rates for alternative dates. */
  shiftRates?: InputMaybe<Array<InputMaybe<ApiShiftRateInput>>>;
  /** Information of taxes. */
  taxes?: InputMaybe<ApiTaxesInput>;
};

/** Set of rules that define the penalty the client will receive if the cancellation of a booking is made after a given date. */
export type ApiCancellationPolicyInput = {
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount. */
  amount?: InputMaybe<Scalars['Float']>;
  /** Date from which the penalties are applied in ISO 8601 format (yyyy-MM-ddTHH:mm:ssZ). */
  from?: InputMaybe<Scalars['String']>;
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount, provided in hotel currency (for the pay at hotel model). */
  hotelAmount?: InputMaybe<Scalars['Float']>;
  /** Currency in which the cancellation penalties must be paid (for the pay at hotel model). */
  hotelCurrency?: InputMaybe<Scalars['String']>;
  /** Penalty that will be applied for cancellations after the indicated date, represented as a number of nights. */
  numberOfNights?: InputMaybe<Scalars['Float']>;
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount, represented as a percentage of the total amount of the booking. */
  percent?: InputMaybe<Scalars['Float']>;
};

/** Rate for a specific day of the stay. */
export type ApiDailyRateInput = {
  /** Net price per day. */
  dailyNet?: InputMaybe<Scalars['Float']>;
  /** Room selling price per day. */
  dailySellingRate?: InputMaybe<Scalars['Float']>;
  /** Day number of the stay for which the breakdown is made. */
  offset?: InputMaybe<Scalars['Int']>;
};

/** Offer information. */
export type ApiOfferInput = {
  /** Monetary amount deducted by the offer. NOTE: This deduction is already applied to the final price. */
  amount?: InputMaybe<Scalars['Float']>;
  /** Code of the offer. */
  code?: InputMaybe<Scalars['String']>;
  /** Short name/description of the offer. */
  name?: InputMaybe<Scalars['String']>;
};

/** Promotion information. */
export type ApiPromotionInput = {
  /** Code of the promotion. */
  code?: InputMaybe<Scalars['String']>;
  /** Short name/description of the promotion. */
  name?: InputMaybe<Scalars['String']>;
  /** Additional information regarding the promotion. */
  remark?: InputMaybe<Scalars['String']>;
};

/** Breakdown of the rate. */
export type ApiRateBreakDownInput = {
  /** Information on discounts for the rate. */
  rateDiscounts?: InputMaybe<Array<InputMaybe<ApiRateDiscountInput>>>;
  /** Information on supplements for the rate. */
  rateSupplements?: InputMaybe<Array<InputMaybe<ApiRateSupplementInput>>>;
};

/** Information describing a discount on a rate. */
export type ApiRateDiscountInput = {
  /** Monetary deducted by the discount NOTE: This deduction is already applied to the final price. */
  amount?: InputMaybe<Scalars['Float']>;
  /** Code of the discount. */
  code?: InputMaybe<Scalars['String']>;
  /** Discount name/description. */
  name?: InputMaybe<Scalars['String']>;
};

/** Information describing a supplement on a rate. */
export type ApiRateSupplementInput = {
  /** Amount of the supplement. */
  amount?: InputMaybe<Scalars['Float']>;
  /** Internal code of the supplement. */
  code?: InputMaybe<Scalars['String']>;
  /** Date from which the discount is applied. */
  from?: InputMaybe<Scalars['String']>;
  /** Name/description of the supplement. */
  name?: InputMaybe<Scalars['String']>;
  /** Number of nights for which the supplement applies. */
  nights?: InputMaybe<Scalars['Int']>;
  /** Number of paxes that are affected by the supplement. */
  paxNumber?: InputMaybe<Scalars['Int']>;
  /** Date when the discount ends. */
  to?: InputMaybe<Scalars['String']>;
};

/** Definition of a rate for an alternative date to the one used in the availability request. */
export type ApiShiftRateInput = {
  /** Number of rooms available for a particular room type. */
  allotment?: InputMaybe<Scalars['Int']>;
  /** Brand of the hotel. */
  brand?: InputMaybe<Scalars['String']>;
  /** CheckIn date for the shift rate. This will always be different than the requested date or the dates of the not alternative rates. */
  checkIn?: InputMaybe<Scalars['String']>;
  /** CheckIn date for the shift rate. This will always be different than the requested date or the dates of the not alternative rates. */
  checkOut?: InputMaybe<Scalars['String']>;
  /** Profit margin the agency takes (commissionable model). */
  commission?: InputMaybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to commision. */
  commissionPCT?: InputMaybe<Scalars['Float']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commissionVAT?: InputMaybe<Scalars['Float']>;
  /** Profit margin that the agency would take if it sells at that recommended price. */
  discount?: InputMaybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price. */
  discountPCT?: InputMaybe<Scalars['Float']>;
  /** Hotel currency(for the pay at hotel model). */
  hotelCurrency?: InputMaybe<Scalars['String']>;
  /** Identifies if the rate price is recommended. */
  hotelMandatory?: InputMaybe<Scalars['Boolean']>;
  /** Gross price of the room in hotelCurrency(for the pay at hotel model). */
  hotelSellingRate?: InputMaybe<Scalars['Float']>;
  /** Net price of the rate. */
  net?: InputMaybe<Scalars['Float']>;
  /** Class of the rate. */
  rateClass?: InputMaybe<Scalars['String']>;
  /** Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking. */
  rateKey?: InputMaybe<Scalars['String']>;
  /** Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK). */
  rateType?: InputMaybe<RateType>;
  /** Indicates if the rate is only for residents (only appears when resident rates are requested). */
  resident?: InputMaybe<Scalars['Boolean']>;
  /** Gross price of the room in case it is included. */
  sellingRate?: InputMaybe<Scalars['Float']>;
};

/** Information of taxes. */
export type ApiTaxesInput = {
  /** Indicates if all taxes are included or not. */
  allIncluded?: InputMaybe<Scalars['Boolean']>;
  /** "margin": This is an indirect tax regime for travel agencies where split of taxes is not shown in the invoices. In this case, the customer could not deduct any taxes even if the final customer is a legal entity with the right of deduction for indirect taxes. "general": This is the indirect tax regime where the split of taxes is shown in the invoices. In this case, the booking will be invoiced with split of taxes and the customer could be able to deduct the VAT and in some countries, these taxes are reduced rates. This tax scheme offers tax advantage for business customers with the right of deduction for indirect taxes. */
  taxScheme?: InputMaybe<TaxScheme>;
  /** List of taxes. */
  taxes?: InputMaybe<Array<InputMaybe<ApiTaxInput>>>;
};

/** Tax information. */
export type ApiTaxInput = {
  /** Value of the tax in hotel currency if the tax is not included in the price. */
  amount?: InputMaybe<Scalars['Float']>;
  /** Net amount of the tax in the client configured currency. */
  clientAmount?: InputMaybe<Scalars['Float']>;
  /** Client configured currency. */
  clientCurrency?: InputMaybe<Scalars['String']>;
  /** Currency of the tax amount. */
  currency?: InputMaybe<Scalars['String']>;
  /** Indicates if the tax is included in the price or not. */
  included?: InputMaybe<Scalars['Boolean']>;
  /** Value of the tax as a percentage. */
  percent?: InputMaybe<Scalars['Float']>;
  /** Type of the tax. */
  type?: InputMaybe<Type3>;
};

/** Supplier information. */
export type ApiSupplierInput = {
  /** Supplier name. */
  name?: InputMaybe<Scalars['String']>;
  /** Supplier VAT number. */
  vatNumber?: InputMaybe<Scalars['String']>;
};

/** Additional room options with superior category available at the same hotel that was requested. */
export type ApiUpsellingInput = {
  /** List of available rooms with superior category. */
  rooms?: InputMaybe<Array<InputMaybe<Room2Input>>>;
};

/** Information about the invoice company. */
export type ApiReceptiveInput = {
  /** Code of the invoice company. */
  code?: InputMaybe<Scalars['String']>;
  /** Name of the invoice company. */
  name?: InputMaybe<Scalars['String']>;
  /** Registration number of the invoice company. */
  registrationNumber?: InputMaybe<Scalars['String']>;
};

/** Information regarding the allowed modifications to the booking. */
export type ApiModificationPoliciesInput = {
  /** Indicates if the booking allows cancellation. */
  cancellation: Scalars['Boolean'];
  /** Indicates if the booking allows modification. */
  modification: Scalars['Boolean'];
};

export type Mode =
  | 'SIMULATION'
  | 'UPDATE';

/** Response of CheckRate operation. */
export type CheckRateRS = {
  /** Relevant internal information. */
  auditData: ApiAuditDataCheckRate;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiError>;
  /** Information about an hotel and its associated room rates. */
  hotels?: Maybe<ApiHotelCheckRate>;
};

/** Relevant internal information. */
export type ApiAuditDataCheckRate = {
  /** Token identifier of the operation. */
  token?: Maybe<Scalars['String']>;
};

/** Information about an hotel and its associated room rates. */
export type ApiHotelCheckRate = {
  /** Hotelbeds code of the hotel category. */
  categoryCode?: Maybe<Scalars['String']>;
  /** Name of the hotel category. */
  categoryName?: Maybe<Scalars['String']>;
  /** Check-in date. */
  checkIn?: Maybe<Scalars['String']>;
  /** Check-out date. */
  checkOut?: Maybe<Scalars['String']>;
  /** Hotelbeds internal hotel code. */
  code?: Maybe<Scalars['Int']>;
  /** List of credit cards accepted by the hotel for Liberate model (pay at hotel). */
  creditCards?: Maybe<Array<Maybe<ApiCreditCard>>>;
  /** Client currency. */
  currency?: Maybe<Scalars['String']>;
  /** Hotel description. */
  description?: Maybe<Scalars['String']>;
  /** Code of the destination of the hotel location. */
  destinationCode?: Maybe<Scalars['String']>;
  /** Name of the destination of the hotel location. */
  destinationName?: Maybe<Scalars['String']>;
  /** Giata hotel code. */
  giata?: Maybe<Scalars['Float']>;
  /** Latitude coordinate of the hotel location. */
  latitude?: Maybe<Scalars['String']>;
  /** Longitude coordinate of the hotel location. */
  longitude?: Maybe<Scalars['String']>;
  /** Maximum hotel room price. */
  maxRate?: Maybe<Scalars['Float']>;
  /** Minimum hotel room price. */
  minRate?: Maybe<Scalars['Float']>;
  /** Information regarding the allowed modifications to the booking. */
  modificationPolicies?: Maybe<ApiModificationPolicies>;
  /** Name of the hotel. */
  name?: Maybe<Scalars['String']>;
  /** Indicates the need for payment data(i.e.: credit card details) in order to finish the booking. */
  paymentDataRequired?: Maybe<Scalars['Boolean']>;
  rooms?: Maybe<Array<Maybe<RoomCheckRate>>>;
  /** Total amount of the booking. */
  totalNet?: Maybe<Scalars['Float']>;
  /** Total amount of the booking in hotelCurrency (for the pay at hotel model). */
  totalSellingRate?: Maybe<Scalars['Float']>;
  /** Additional room options with superior category available at the same hotel that was requested. */
  upselling?: Maybe<ApiUpsellingCheckRate>;
  /** Code of the zone of the hotel location. */
  zoneCode?: Maybe<Scalars['Int']>;
  /** Name of the zone of the hotel location. */
  zoneName?: Maybe<Scalars['String']>;
};

/** Information about the room and its associated rates. */
export type RoomCheckRate = {
  /** Internal room code. */
  code?: Maybe<Scalars['String']>;
  /** Room name/description. */
  name?: Maybe<Scalars['String']>;
  /** List of rates associated to the room. */
  rates?: Maybe<Array<Maybe<ApiRateCheckRate>>>;
};

/** Definition of a rate. */
export type ApiRateCheckRate = {
  /** Number of adults requested for each room. */
  adults?: Maybe<Scalars['Int']>;
  /** Number of rooms available for a particular room type. */
  allotment?: Maybe<Scalars['Int']>;
  /** Internal board code. */
  boardCode?: Maybe<Scalars['String']>;
  /** Board name/description. */
  boardName?: Maybe<Scalars['String']>;
  /** List of cancellation policies on the rate. */
  cancellationPolicies?: Maybe<Array<Maybe<ApiCancellationPolicyCheckRate>>>;
  /** Number of children requested for each room. */
  children?: Maybe<Scalars['Int']>;
  /** Profit margin the agency takes (commissionable model). */
  commission?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to commision. */
  commissionPCT?: Maybe<Scalars['Float']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commissionVAT?: Maybe<Scalars['Float']>;
  /** Profit margin that the agency would take if it sells at that recommended price. */
  discount?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price. */
  discountPCT?: Maybe<Scalars['Float']>;
  /** Hotel currency(for the pay at hotel model). */
  hotelCurrency?: Maybe<Scalars['String']>;
  /** Identifies if the rate price is recommended. */
  hotelMandatory?: Maybe<Scalars['Boolean']>;
  /** Gross price of the room in hotelCurrency(for the pay at hotel model). */
  hotelSellingRate?: Maybe<Scalars['Float']>;
  /** Net price of the rate. */
  net?: Maybe<Scalars['Float']>;
  /** List of offers on the rate. */
  offers?: Maybe<Array<Maybe<ApiOffer>>>;
  /** Defines if the rate is for packaging. */
  packaging?: Maybe<Scalars['Boolean']>;
  /** Defines the type of payment accepted. */
  paymentType?: Maybe<PaymentType>;
  /** List of promotions on the rate. */
  promotions?: Maybe<Array<Maybe<ApiPromotion>>>;
  /** Breakdown of the rate. */
  rateBreakDown?: Maybe<ApiRateBreakDown>;
  /** Class of the rate. */
  rateClass?: Maybe<Scalars['String']>;
  /** Rate comments that contain important information. */
  rateComments?: Maybe<Scalars['String']>;
  /** Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking. */
  rateKey?: Maybe<Scalars['String']>;
  /** Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK). */
  rateType?: Maybe<RateType>;
  /** Indicates if the rate is only for residents (only appears when resident rates are requested). */
  resident?: Maybe<Scalars['Boolean']>;
  /** Number of rooms requested. */
  rooms?: Maybe<Scalars['Int']>;
  /** Gross price of the room in case it is included. */
  sellingRate?: Maybe<Scalars['Float']>;
};

/** Set of rules that define the penalty the client will receive if the cancellation of a booking is made after a given date. */
export type ApiCancellationPolicyCheckRate = {
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount. */
  amount?: Maybe<Scalars['Float']>;
  /** Date from which the penalties are applied in ISO 8601 format (yyyy-MM-ddTHH:mm:ssZ). */
  from?: Maybe<Scalars['String']>;
  /** Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount, provided in hotel currency (for the pay at hotel model). */
  hotelAmount?: Maybe<Scalars['Float']>;
  /** Currency in which the cancellation penalties must be paid (for the pay at hotel model). */
  hotelCurrency?: Maybe<Scalars['String']>;
};

/** Additional room options with superior category available at the same hotel that was requested. */
export type ApiUpsellingCheckRate = {
  /** List of available rooms with superior category. */
  rooms?: Maybe<Array<Maybe<RoomUpsellingCheckRate>>>;
};

/** Information about the room and its associated rates. */
export type RoomUpsellingCheckRate = {
  /** List of rates associated to the room. */
  rates?: Maybe<Array<Maybe<ApiRateUpsellingCheckRate>>>;
};

/** Definition of a rate. */
export type ApiRateUpsellingCheckRate = {
  /** Number of adults requested for each room. */
  adults?: Maybe<Scalars['Int']>;
  /** Number of rooms available for a particular room type. */
  allotment?: Maybe<Scalars['Int']>;
  /** Internal board code. */
  boardCode?: Maybe<Scalars['String']>;
  /** Board name/description. */
  boardName?: Maybe<Scalars['String']>;
  /** List of cancellation policies on the rate. */
  cancellationPolicies?: Maybe<Array<Maybe<ApiCancellationPolicyCheckRate>>>;
  /** Number of children requested for each room. */
  children?: Maybe<Scalars['Int']>;
  /** Profit margin the agency takes (commissionable model). */
  commission?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to commision. */
  commissionPCT?: Maybe<Scalars['Float']>;
  /** Share of the commission corresponding to the Value Added Tax. */
  commissionVAT?: Maybe<Scalars['Float']>;
  /** Profit margin that the agency would take if it sells at that recommended price. */
  discount?: Maybe<Scalars['Float']>;
  /** Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price. */
  discountPCT?: Maybe<Scalars['Float']>;
  /** Hotel currency(for the pay at hotel model). */
  hotelCurrency?: Maybe<Scalars['String']>;
  /** Identifies if the rate price is recommended. */
  hotelMandatory?: Maybe<Scalars['Boolean']>;
  /** Gross price of the room in hotelCurrency(for the pay at hotel model). */
  hotelSellingRate?: Maybe<Scalars['Float']>;
  /** Net price of the rate. */
  net?: Maybe<Scalars['Float']>;
  /** Defines if the rate is for packaging. */
  packaging?: Maybe<Scalars['Boolean']>;
  /** Defines the type of payment accepted. */
  paymentType?: Maybe<PaymentType>;
  /** Breakdown of the rate. */
  rateBreakDown?: Maybe<ApiRateBreakDown>;
  /** Class of the rate. */
  rateClass?: Maybe<Scalars['String']>;
  /** Rate comments that contain important information. */
  rateComments?: Maybe<Scalars['String']>;
  /** Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking. */
  rateKey?: Maybe<Scalars['String']>;
  /** Determines if can booked directly (BOOKABLE) or if it needs to be checked with the â€˜CheckRateâ€™ operation (RECHECK). */
  rateType?: Maybe<RateType>;
  /** Difference between original rate price and upselling rate price. */
  rateup?: Maybe<Scalars['Float']>;
  /** Indicates if the rate is only for residents (only appears when resident rates are requested). */
  resident?: Maybe<Scalars['Boolean']>;
  /** Number of rooms requested. */
  rooms?: Maybe<Scalars['Int']>;
  /** Gross price of the room in case it is included. */
  sellingRate?: Maybe<Scalars['Float']>;
};

/** Request of CheckRate operation. */
export type CheckRateRQInput = {
  /** Language code that defines the language of the response. English will be used by default if this field is not informed. */
  language?: InputMaybe<Scalars['String']>;
  /** List of rooms to be checked/valuated. */
  rooms?: InputMaybe<Array<InputMaybe<ApiBookingRoomInput>>>;
  /** Parameter to add or remove the upSelling options node to the response. */
  upselling?: InputMaybe<Scalars['Boolean']>;
};

    }
    export type QueryBookingsSdk = {
  /** The BookingDetail operation allows to retrieve a booking with all its details from the booking reference locator.

Equivalent to GET /bookings/{bookingId} **/
  bookingDetailRS: InContextSdkMethod<BookingsTypes.Query['bookingDetailRS'], BookingsTypes.QuerybookingDetailRSArgs, MeshContext>,
  /** The booking list operation returns a list of bookings based on the search criteria. The most important information returned for each booking in the list is:

  *  Booking reference
  *  Booking holder
  *  Booking paxes
  *  Hotel, rooms and boards confirmed
  *  Booking rates
  
The results are returned in a paginated response that can be filtered with the use of parameters in the request.

Timeout for this operation is 60 seconds.


Equivalent to GET /bookings **/
  bookingListRS: InContextSdkMethod<BookingsTypes.Query['bookingListRS'], BookingsTypes.QuerybookingListRSArgs, MeshContext>,
  /** The Reconfirmation operation allows to retrieve the reconfirmation numbers (The confirmation number of the Hotel, both for the Hotelbeds product and for that of external suppliers product) of the bookings made by the client when requested in a GET call to our endpoint.

Obtaining this reconfirmation numbers from hoteliers is an __asynchronous__ service: **reconfirmation numbers are not available at the time of the booking**, and as such they can't be informed at the time of the booking, hence the need for this operation.

The Reconfirmation operation offers a wide variety of filters to help narrowing down reconfirmation number results. Only one filter can be used at the same time. Below the four possible filters you can use:

* between two cheking dates
* between two reconfirmation dates
* list of clientReference ids
* list of booking Ids

## Reconfirmation Service

Additionally we offer you the capacity to receive the reconfirmation numbers automatically in our reconformation service, designed to automatically send you the reconfirmation information as soon as is available from the hoteliers in two different ways:

* [Push Service](/documentation/hotels/booking-api/reconfirmation-service/push-service/) : The messages will be automatically sent in JSON format to an endpoint of your choice.
* [Email Service](/documentation/hotels/booking-api/reconfirmation-service/email-service/): The messages will be automatically sent in an email to an address of your choice.

Contact our support team at [apitude@hotelbeds.com]() to learn more about this features.

Equivalent to GET /bookings/reconfirmations **/
  bookingReconfirmation: InContextSdkMethod<BookingsTypes.Query['bookingReconfirmation'], BookingsTypes.QuerybookingReconfirmationArgs, MeshContext>
};

export type MutationBookingsSdk = {
  /** This method is used to request **room availability**. Some
filters and special features can be applied before sending an availability
request.

A flexible date search allows customers to retrieve available
rates for a specified number of days prior to and post check-in.

The response generated is a list of hotels with the different room types, board
types, and rates available for those hotels, but not only restricted to the
dates selected.

BookingAPI prices are final. Our rates include supplements
and discounts and no additional price calculations are required. 

It can also return cancellation fees in the availability response, providing
amounts and dates at the first step of the booking.

Timeout for this operation is 5 seconds.


Equivalent to POST /hotels **/
  availability: InContextSdkMethod<BookingsTypes.Mutation['availability'], BookingsTypes.MutationavailabilityArgs, MeshContext>,
  /** The Booking operation requests a reservation confirmation for the specified ratekey or ratekeys.

BookingAPI does not support on-request confirmations. All confirmations are instant confirmations.

Timeout for this operation is 60 seconds.

Equivalent to POST /bookings **/
  booking: InContextSdkMethod<BookingsTypes.Mutation['booking'], BookingsTypes.MutationbookingArgs, MeshContext>,
  /** BookingCancellation is used either to simulate a cancellation or to perform the actual cancellation.Cancellations always take into account day and time of the destination in order to calculate what cancellation policy should be applied.
Timeout for this operation is 60 seconds.

Equivalent to DELETE /bookings/{bookingId} **/
  bookingCancellation: InContextSdkMethod<BookingsTypes.Mutation['bookingCancellation'], BookingsTypes.MutationbookingCancellationArgs, MeshContext>,
  /** The BookingChange operation is used to change or update different values of a booking.

The changes that can be performed are:

* Change clientReference
* Change remarks
* Change holder name and surname
* Change checkIn and checkOut date
* Change board plans
* Change passengers name and surname
* Add rooms (only from the same type already in the booking)
* Remove rooms from a booking (partial cancellation)


Equivalent to PUT /bookings/{bookingId} **/
  bookingChange: InContextSdkMethod<BookingsTypes.Mutation['bookingChange'], BookingsTypes.MutationbookingChangeArgs, MeshContext>,
  /** CheckRate is an _optional_ operation used to assess and valuate the rate before the actual booking. CheckRate returns the same information as the Availability response for a hotel rate with up-to-date price, along with additional information regarding the rate: rate breakdown, rate comments and upselling options.

The CheckRate method can complement the booking process, as it returns additional information to the availability request. However, when the rateType value is 'RECHECK', the CheckRate method is mandatory.

Besides the details for the rate, CheckRate has the option to also return information of higher rates of the same hotel being checked. This is called Upselling.

Upselling returns additional room options, each with its own rate key, allowing you to upgrade the stay quality in room category and rate plan even after the CheckRate operation has been performed.

Timeout for this operation is 15 seconds.


Equivalent to POST /checkrates **/
  checkRate: InContextSdkMethod<BookingsTypes.Mutation['checkRate'], BookingsTypes.MutationcheckRateArgs, MeshContext>
};

export type SubscriptionBookingsSdk = {

};


    export namespace ContentTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  /**
   * Returns the list of available accommodation types.
   *
   * Equivalent to GET /types/accommodations
   */
  apiAccommodationsRS?: Maybe<ApiAccommodationsRS>;
  /**
   * Returns the list of available amenities.
   *
   * Equivalent to GET /types/amenities
   */
  apiAmenitiesRS?: Maybe<ApiAmenitiesRS>;
  /**
   * Returns the list of available board groups.
   *
   * Equivalent to GET /types/boardgroups
   */
  apiBoardGroupsRS?: Maybe<ApiBoardGroupsRS>;
  /**
   * Returns the list of available board types.
   *
   * Equivalent to GET /types/boards
   */
  apiBoardsRS?: Maybe<ApiBoardsRS>;
  /**
   * Returns the list of available categories.
   *
   * Equivalent to GET /types/categories
   */
  apiCategoriesRS?: Maybe<ApiCategoriesRS>;
  /**
   * Returns the list of available chains.
   *
   * Equivalent to GET /types/chains
   */
  apiChainsRS?: Maybe<ApiChainsRS>;
  /**
   * Returns the list of available countries.
   *
   * This is the higher level available in our destination tree. We do not allow search by country, but it's included for organizational reasons (to group destinations) and because the country codes returned are used in other levels of APItude (for example to define the sourceMarket in Availability operation of [Hotel Booking API](/documentation/hotels/booking-api/api-reference/).
   *
   * Equivalent to GET /locations/countries
   */
  apiCountriesRS?: Maybe<ApiCountriesRS>;
  /**
   * Returns the list of available currencies.
   *
   * Equivalent to GET /types/currencies
   */
  apiCurrenciesRS?: Maybe<ApiCurrenciesRS>;
  /**
   * Return the list of available destinations, zones and grouping zones.
   *
   * Destinations are the highest level entities in our destination tree by which availability can be searched. Please note that destination codes are not IATA codes. It is very important to understand that our 'destination' will not always only correspond with a unique city, but usually with the main city and the area surrounding the city.
   *
   * For example, the destination code NYC in the US, corresponds with the whole New York Area, so it is not limited to the city of New York, but also covers the surrounding areas, such as New Jersey and The Hamptons. Another example is BCN in Spain, which corresponds with the entire Barcelona Province; so it searches hotels located in the city of Barcelona, but also in other cities within the Province of Barcelona, such us Hospitalet de Llobregat, Terrassa and Sabadell. So when you search for availability using the destination code, you will receive results that may be located far from the main city for which you are actually searching.
   *
   * It is very important to check the locations that the search retrieves to avoid booking hotels in a different location than the one requested by your customers.
   *
   * Equivalent to GET /locations/destinations
   */
  apiDestinationsRS?: Maybe<ApiDestinationsRS>;
  /**
   * Returns the list of available facilities.
   *
   * Equivalent to GET /types/facilities
   */
  apiFacilitiesRS?: Maybe<ApiFacilitiesRS>;
  /**
   * Returns the list of available facility groups.
   *
   * Equivalent to GET /types/facilitygroups
   */
  apiFacilityGroupsRS?: Maybe<ApiFacilityGroupsRS>;
  /**
   * Returns the list of available facility typologies.Remarks: Since all fields are returned by default, there won't be any field to filter.
   *
   * Equivalent to GET /types/facilitytypologies
   */
  apiFacilityTypologiesRS?: Maybe<ApiFacilityTypologiesRS>;
  /**
   * Returns the descriptions of the different category groups.
   *
   * Equivalent to GET /types/groupcategories
   */
  apiGroupCategoriesRS?: Maybe<ApiGroupCategoriesRS>;
  /**
   * Returns all the details associated to the Hotel.
   *
   * Equivalent to GET /hotels/{hotelCodes}/details
   */
  apiHotelDetailsRS?: Maybe<ApiHotelDetailsRS>;
  /**
   * Returns the list of currently existing hotels in Hotelbeds portfolio.
   *
   * Equivalent to GET /hotels
   */
  apiHotelsRS?: Maybe<ApiHotelsRS>;
  /**
   * Returns the descriptions of the different image types.
   *
   * Equivalent to GET /types/imagetypes
   */
  apiImageTypesRS?: Maybe<ApiImageTypesRS>;
  /**
   * Repair works, facilities closed,...
   *
   * Equivalent to GET /types/issues
   */
  apiIssuesRS?: Maybe<ApiIssuesRS>;
  /**
   * Returns the list of available languages.
   *
   * The Languages operation is connected to all the operations in which a description is returned, since we return the language code in which that description has been returned.
   *
   * Equivalent to GET /types/languages
   */
  apiLanguagesRS?: Maybe<ApiLanguagesRS>;
  /**
   * Returns the list of available promotions.
   *
   * Equivalent to GET /types/promotions
   */
  apiPromotionsRS?: Maybe<ApiPromotionsRS>;
  /**
   * Returns the list of available values for the rateClass.
   *
   * Equivalent to GET /types/classifications
   */
  apiRateClassRS?: Maybe<ApiRateClassRS>;
  /**
   * Returns the descriptions of the rate comments associated with the hotel that the hotelier wants the client to read before confirming the booking with the given date.
   *
   * Equivalent to GET /types/ratecommentdetails
   */
  apiRateCommentDetailsRS?: Maybe<ApiRateCommentDetailsRS>;
  /**
   * Returns the descriptions of the rate comments associated with the hotel that the hotelier wants the client to read before confirming the booking.
   *
   * Equivalent to GET /types/ratecomments
   */
  apiRateCommentsRS?: Maybe<ApiRateCommentsRS>;
  /**
   * Returns the list of available rooms.
   *
   * Equivalent to GET /types/rooms
   */
  apiRoomsRS?: Maybe<ApiRoomsRS>;
  /**
   * Returns the list of available segments.
   *
   * Equivalent to GET /types/segments
   */
  apiSegmentsRS?: Maybe<ApiSegmentsRS>;
  /**
   * List of terminals per country/destination
   *
   * Equivalent to GET /types/terminals
   */
  apiTerminalsRS?: Maybe<ApiTerminalsRS>;
};


export type QueryapiAccommodationsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiAmenitiesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiBoardGroupsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiBoardsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiCategoriesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiChainsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiCountriesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiCurrenciesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiDestinationsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  countryCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiFacilitiesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiFacilityGroupsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiFacilityTypologiesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiGroupCategoriesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiHotelDetailsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  hotelCodes: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiHotelsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  countryCode?: InputMaybe<Scalars['String']>;
  destinationCode?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  includeHotels?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  pMSRoomCode?: InputMaybe<Scalars['Boolean']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiImageTypesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiIssuesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiLanguagesRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiPromotionsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiRateClassRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiRateCommentDetailsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  code: Scalars['String'];
  date: Scalars['String'];
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiRateCommentsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiRoomsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiSegmentsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiTerminalsRSArgs = {
  accept: Accept;
  acceptEncoding?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lastUpdateTime?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  useSecondaryLanguage?: InputMaybe<Scalars['Boolean']>;
};

/** Response of Accommodations operation. */
export type ApiAccommodationsRS = {
  /** List of accommodations. */
  accommodations?: Maybe<Array<Maybe<ApiAccommodation>>>;
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned accommodations. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned accommodations. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of accommodations matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a accommodation type. */
export type ApiAccommodation = {
  /** Code of the accommodation type. */
  code?: Maybe<Scalars['String']>;
  /** Description of the accommodation type. */
  typeDescription?: Maybe<Scalars['String']>;
  typeMultiDescription?: Maybe<ApiContent>;
};

export type ApiContent = {
  /** Text description, provided in the language defined in LanguageCode field. */
  content?: Maybe<Scalars['String']>;
  /** Code of the language in which the description is returned. */
  languageCode?: Maybe<Scalars['String']>;
};

/** Relevant internal information. */
export type ApiAuditData = {
  /** Environment where the request has been sent and processed. */
  environment?: Maybe<Scalars['String']>;
  /** Server process time in milliseconds. */
  processTime?: Maybe<Scalars['String']>;
  /** Release version identifier. */
  release?: Maybe<Scalars['String']>;
  /** IP address of the system host. */
  requestHost?: Maybe<Scalars['String']>;
  /** Server code or ID (for internal use). */
  serverId?: Maybe<Scalars['String']>;
  /** Date/time when the request has been processed (always in Spanish time). */
  timestamp?: Maybe<Scalars['String']>;
};

/** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
export type ApiHotelbedsError = {
  /** Internal token code of the error. */
  code?: Maybe<Scalars['String']>;
  /** Descriptive message of the cause of the error. */
  message?: Maybe<Scalars['String']>;
};

export type Accept =
  | 'APPLICATION_XML'
  | 'APPLICATION_JSON';

/** Response of Amenities operation. */
export type ApiAmenitiesRS = {
  /** List of amenities. */
  amenities?: Maybe<Array<Maybe<ApiAmenity>>>;
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned amenities. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned amenities. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of amenities matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

export type ApiAmenity = {
  code?: Maybe<Scalars['Int']>;
  description?: Maybe<ApiContent>;
};

/** Response of BoardGroups operation. */
export type ApiBoardGroupsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of board groups. */
  boards?: Maybe<Array<Maybe<ApiBoardGroup>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned board groups. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned board groups. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of board groups matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a board group. */
export type ApiBoardGroup = {
  /** List of the internal board codes. */
  boards?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Internal code of the board group. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
};

/** Response of Boards operation. */
export type ApiBoardsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of boards. */
  boards?: Maybe<Array<Maybe<ApiBoard>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned boards. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned boards. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of boards matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a board. */
export type ApiBoard = {
  /** Internal code of the board. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  /** Multilanguage code of the board type. */
  multiLingualCode?: Maybe<Scalars['String']>;
};

/** Response of Categories operation. */
export type ApiCategoriesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of categories. */
  categories?: Maybe<Array<Maybe<ApiCategory>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned categories. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned categories. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of categories matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on an accommodation category. */
export type ApiCategory = {
  /** Code of the type of accommodation to which the category belongs. (apartment, hotel, home, etc.). */
  accommodationType?: Maybe<Scalars['String']>;
  /** Hotel star rating based on the information provided by the hotel. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  /** Code of the group to which the category belongs. */
  group?: Maybe<Scalars['String']>;
  /** Simple category code used for filtering in [Hotel Booking API](/documentation/hotels/booking-api/api-reference/) Availability. */
  simpleCode?: Maybe<Scalars['Int']>;
};

/** Response of Chains operation. */
export type ApiChainsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of chains. */
  chains?: Maybe<Array<Maybe<ApiChain>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned chains. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned chains. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of chains matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a hotelier chain. */
export type ApiChain = {
  /** Code of the chain. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
};

/** Response of Countries operation. */
export type ApiCountriesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of countries. */
  countries?: Maybe<Array<Maybe<ApiCountry>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned countries. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned countries. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of countries matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Country information. */
export type ApiCountry = {
  /** Hotelbeds internal country code. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  /** ISO 3166-2 Country Code. */
  isoCode?: Maybe<Scalars['String']>;
  /** List of states/provinces/territories belonging to the country. */
  states?: Maybe<Array<Maybe<ApiState>>>;
};

/** State information. */
export type ApiState = {
  /** Internal code of the state. */
  code?: Maybe<Scalars['String']>;
  /** Name of the state. */
  name?: Maybe<Scalars['String']>;
};

/** Response of Currencies operation. */
export type ApiCurrenciesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of currencies. */
  currencies?: Maybe<Array<Maybe<ApiCurrency>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned currencies. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned currencies. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of currencies matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Currency. */
export type ApiCurrency = {
  /** Internal currency code. */
  code?: Maybe<Scalars['String']>;
  /** Indication for which rate type will be returned. */
  currencyType?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
};

/** Response of Destinations operation. */
export type ApiDestinationsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of available destinations. */
  destinations?: Maybe<Array<Maybe<ApiDestination>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned destinations. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned destinations. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of destinations matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a destination of the destination tree. */
export type ApiDestination = {
  /** Code of the destination. */
  code?: Maybe<Scalars['String']>;
  /** Hotelbeds code for the country */
  countryCode?: Maybe<Scalars['String']>;
  /** List of groups of zones. */
  groupZones?: Maybe<Array<Maybe<ApiGroupZone>>>;
  /** ISO Country Code. */
  isoCode?: Maybe<Scalars['String']>;
  name?: Maybe<ApiContent>;
  /** List of zones in which the destination is divided. */
  zones?: Maybe<Array<Maybe<ApiZone>>>;
};

/** Information on a group of zones */
export type ApiGroupZone = {
  /** Code of the group of zones. */
  groupZoneCode?: Maybe<Scalars['String']>;
  name?: Maybe<ApiContent>;
  /** List of zones that belong to the group. */
  zones?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** Information on the zone inside the destination where to search for hotels. */
export type ApiZone = {
  description?: Maybe<ApiContent>;
  /** Internal zone name. (only available for Hotel Detail) */
  name?: Maybe<Scalars['String']>;
  /** Internal Zone Code. */
  zoneCode?: Maybe<Scalars['Int']>;
};

/** Response of Facilities operation. */
export type ApiFacilitiesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** List of facilities. */
  facilities?: Maybe<Array<Maybe<ApiFacility>>>;
  /** Lowest value of the range of returned facilities. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned facilities. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of facilities matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a hotel facility. */
export type ApiFacility = {
  /** Code of the facility. */
  code?: Maybe<Scalars['Int']>;
  description?: Maybe<ApiContent>;
  /** Group the facility belongs to. */
  facilityGroupCode?: Maybe<Scalars['Int']>;
  /** Typology of the facility which determines the fields to receive in the hotels operation. */
  facilityTypologyCode?: Maybe<Scalars['Int']>;
};

/** Response of FacilityGroups operation. */
export type ApiFacilityGroupsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** List of groups of facilities. */
  facilityGroups?: Maybe<Array<Maybe<ApiFacilityGroup>>>;
  /** Lowest value of the range of returned facility groups. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned facility groups. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of facility groups matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a group of facilities. */
export type ApiFacilityGroup = {
  /** Code of the facility group. */
  code?: Maybe<Scalars['Int']>;
  description?: Maybe<ApiContent>;
};

/** Response of FacilityTypologies operation. */
export type ApiFacilityTypologiesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** List of classifications for facilities. */
  facilityTypologies?: Maybe<Array<Maybe<ApiFacilityType>>>;
  /** Lowest value of the range of returned facility typologies. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned facility typologies. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of facility typologies matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Classification information of facilities. */
export type ApiFacilityType = {
  /** Indicator if the ageFrom Value will be returned. */
  ageFromFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the ageTo Value will be returned. */
  ageToFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the amount Value will be returned. */
  amountFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the appType Value will be returned. */
  appTypeFlag?: Maybe<Scalars['Boolean']>;
  /** Code of the typology. */
  code?: Maybe<Scalars['Int']>;
  /** Indicator if the currency Value will be returned. */
  currencyFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the dateFrom Value will be returned. */
  dateFromFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the dateTo Value will be returned. */
  dateToFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the distance Value will be returned. */
  distanceFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the Fee Value will be returned. */
  feeFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the YesOrNo Value will be returned. */
  indYesOrNoFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the Logic Value will be returned. */
  logicFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the Number Value will be returned */
  numberFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the Text Value will be returned. */
  textFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the timeFrom Value will be returned. */
  timeFromFlag?: Maybe<Scalars['Boolean']>;
  /** Indicator if the timeTo Value will be returned. */
  timeToFlag?: Maybe<Scalars['Boolean']>;
};

/** Response of GroupCategories operation. */
export type ApiGroupCategoriesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned group categories. */
  from?: Maybe<Scalars['Int']>;
  /** List of group categories. */
  groupCategories?: Maybe<Array<Maybe<ApiGroupCategory>>>;
  /** Highest value of the range of returned group categories. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of group categories matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information of a group of categories. */
export type ApiGroupCategory = {
  /** Code of the category group. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  name?: Maybe<ApiContent>;
  /** Internal order of the category group. */
  order?: Maybe<Scalars['Int']>;
};

/** Response of HotelDetails operation */
export type ApiHotelDetailsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned hotels. */
  from?: Maybe<Scalars['Int']>;
  /** Information on a hotel. */
  hotel?: Maybe<ApiHotel>;
  /** List of returned hotels matching the parameters used in the request. */
  hotels?: Maybe<Array<Maybe<ApiHotel>>>;
  /** Highest value of the range of returned hotels. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of hotels matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a hotel. */
export type ApiHotel = {
  /** Information on a accommodation type. */
  accommodationType?: Maybe<ApiAccommodation>;
  /** Code of the type of accommodation. It will indicate the type of the hotel (apartment, hotel, home, etc.). */
  accommodationTypeCode?: Maybe<Scalars['String']>;
  address?: Maybe<ApiContent>;
  /** List of amenities. */
  amenities?: Maybe<Array<Maybe<ApiAmenity>>>;
  /** List of the internal amenity codes. */
  amenityCodes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** List of codes of board types offered at the hotel. */
  boardCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** List of boards offered at the hotel. */
  boards?: Maybe<Array<Maybe<ApiBoard>>>;
  /** Information on an accommodation category. */
  category?: Maybe<ApiCategory>;
  /** Hotel rating based on the information provided by the hotel. */
  categoryCode?: Maybe<Scalars['String']>;
  /** Information of a group of categories. */
  categoryGroup?: Maybe<ApiGroupCategory>;
  /** Group name of the category to which the hotel belongs. */
  categoryGroupCode?: Maybe<Scalars['String']>;
  /** Information on a hotelier chain. */
  chain?: Maybe<ApiChain>;
  /** Code of the chain that the hotel belongs to. */
  chainCode?: Maybe<Scalars['String']>;
  city?: Maybe<ApiContent>;
  /** Hotelbeds internal hotel code. */
  code?: Maybe<Scalars['Int']>;
  /** Defines the geolocation data. */
  coordinates?: Maybe<ApiGeoLocation>;
  /** Country information. */
  country?: Maybe<ApiCountry>;
  /** Code of the country where the hotel is located. */
  countryCode?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  /** Information on a destination of the destination tree. */
  destination?: Maybe<ApiDestination>;
  /** Code of the destination of the hotel location. */
  destinationCode?: Maybe<Scalars['String']>;
  /** Hotel e-mail address. More than one email can be returned, separated by ";" characters. */
  email?: Maybe<Scalars['String']>;
  /**
   * The value follows a qualitative scale, the number 1 being always the top priority/preferential, and the rest of the product defined by our commercial departments. As of today, the possible values are:
   *   1: Identifies preferential product with exclusive guaranteed availability.
   *   2: Identifies top hotels.
   *   3: Identifies the rest of hotels.
   *   In case new values are added in the future, a proper communication campaign will be carried out to inform you.
   *
   */
  exclusiveDeal?: Maybe<Scalars['Int']>;
  /** List of facilities, amenities and installations in the hotel. */
  facilities?: Maybe<Array<Maybe<ApiHotelFacility>>>;
  /** Giata code of the hotel. Will only be returned if the client has agreement with Giata. */
  giataCode?: Maybe<Scalars['Int']>;
  /** List of hotel pictures. */
  images?: Maybe<Array<Maybe<ApiImage>>>;
  /** List of points of interest close to the hotel. */
  interestPoints?: Maybe<Array<Maybe<ApiHotelPointOfInterest>>>;
  /** List of issues affecting the hotel. */
  issues?: Maybe<Array<Maybe<ApiHotelIssue>>>;
  /** Date of the last update in the information of the hotel. */
  lastUpdate?: Maybe<Scalars['String']>;
  /** Accommodation registration number. */
  license?: Maybe<Scalars['String']>;
  name?: Maybe<ApiContent>;
  /** List of contact phones of the hotel. */
  phones?: Maybe<Array<Maybe<ApiHotelPhone>>>;
  /** Hotel address postal code. */
  postalCode?: Maybe<Scalars['String']>;
  /** Hotelbeds internal sorting ranking (NOTE: please bear in mind is not related to hotel category). */
  ranking?: Maybe<Scalars['Int']>;
  /** List of available rooms types at the hotel. */
  rooms?: Maybe<Array<Maybe<ApiHotelRoom>>>;
  /** Health & Safety rating (NOTE: please bear in mind is not related to hotel category). */
  s2C?: Maybe<Scalars['String']>;
  /** List of the internal segment codes. */
  segmentCodes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** List of segments. */
  segments?: Maybe<Array<Maybe<ApiSegment>>>;
  /** State information. */
  state?: Maybe<ApiState>;
  /** Internal code of the state. */
  stateCode?: Maybe<Scalars['String']>;
  /** List of terminals associated to the hotel and their distance to the hotel. */
  terminals?: Maybe<Array<Maybe<ApiHotelTerminal>>>;
  /** Website URL of the hotel or the chain. */
  web?: Maybe<Scalars['String']>;
  /** List of wildcard rooms. */
  wildcards?: Maybe<Array<Maybe<ApiWildCard>>>;
  /** Information on the zone inside the destination where to search for hotels. */
  zone?: Maybe<ApiZone>;
  /** Internal zone code, where the hotel is located. */
  zoneCode?: Maybe<Scalars['Int']>;
};

/** Defines the geolocation data. */
export type ApiGeoLocation = {
  /** Latitude coordinate for geolocation search. */
  latitude?: Maybe<Scalars['Float']>;
  /** Longitude coordinate for geolocation search. */
  longitude?: Maybe<Scalars['Float']>;
};

/** Information on a hotel facility. */
export type ApiHotelFacility = {
  /** Minimum age to access the facility. */
  ageFrom?: Maybe<Scalars['Int']>;
  /** Maximum age to access the facility. */
  ageTo?: Maybe<Scalars['Int']>;
  /** Amount of the facility fee. */
  amount?: Maybe<Scalars['Float']>;
  /** Application type of the facility fee. */
  applicationType?: Maybe<Scalars['String']>;
  /** Currency of the facility fee. */
  currency?: Maybe<Scalars['String']>;
  /** Date from which the facility is available. */
  dateFrom?: Maybe<Scalars['String']>;
  /** Date until which the installation is available. */
  dateTo?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  /** Distance in meters to the facility. */
  distance?: Maybe<Scalars['Int']>;
  /** Code of the facility. */
  facilityCode?: Maybe<Scalars['Int']>;
  /** Group to which the facility belongs. */
  facilityGroupCode?: Maybe<Scalars['Int']>;
  /** Name of the facility. */
  facilityName?: Maybe<Scalars['String']>;
  /** Defines if the facility has cost or not at the establishment. */
  indFee?: Maybe<Scalars['Boolean']>;
  /** Indicates if the facility exists at the hotel. This field will be returned __only__ when the facility is at the hotel. */
  indLogic?: Maybe<Scalars['Boolean']>;
  /** Indicates in the mandatory facility exists at the hotel or not. */
  indYesOrNo?: Maybe<Scalars['Boolean']>;
  /** Numeric value of the facility. */
  number?: Maybe<Scalars['Int']>;
  /** Order of facility in case there is more than one facility at the hotel. */
  order?: Maybe<Scalars['Int']>;
  /** Time from which the facility is available. */
  timeFrom?: Maybe<Scalars['String']>;
  /** Time until which the facility is available. */
  timeTo?: Maybe<Scalars['String']>;
  /** Indicates if the use of the facility will issue a voucher. */
  voucher?: Maybe<Scalars['Boolean']>;
};

/** Describes an hotel picture. */
export type ApiImage = {
  /** Characteristic code/s of the room. */
  characteristicCode?: Maybe<Scalars['String']>;
  /** Specifies where has the picture been taken (you can see the possible values in the response of types/imagetypes operation). */
  imageTypeCode?: Maybe<Scalars['String']>;
  /** Order in which the images are shown in the web page. */
  order?: Maybe<Scalars['Int']>;
  /** Original hotel room code, directly sourced from the property */
  pMSRoomCode?: Maybe<Scalars['String']>;
  /** URL of the image. For hotel images, we do not return the full path. Note that one of the following paths must be added by the client. */
  path?: Maybe<Scalars['String']>;
  /** Identifier of the room type. */
  roomCode?: Maybe<Scalars['String']>;
  /** Internal Room type code, returned only for Unified clients. */
  roomType?: Maybe<Scalars['String']>;
  /** Information on an hotel image type. */
  type?: Maybe<ApiImageType>;
  /** Ordinal value at which the image should be presented. */
  visualOrder?: Maybe<Scalars['Int']>;
};

/** Information on an hotel image type. */
export type ApiImageType = {
  /** Code of the type of the image. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
};

/** Information on a point of interest near a hotel. */
export type ApiHotelPointOfInterest = {
  /** Distance in meters to the point of interest. */
  distance?: Maybe<Scalars['String']>;
  /** Code of the point of interest as a facility. */
  facilityCode?: Maybe<Scalars['Int']>;
  /** Group to which the point of interest belongs as a facility. */
  facilityGroupCode?: Maybe<Scalars['Int']>;
  /** Defines if there is a fee to access the point of interest. */
  fee?: Maybe<Scalars['Boolean']>;
  /** Order of the point of interest. */
  order?: Maybe<Scalars['Int']>;
  /** Name of the point of interest. */
  poiName?: Maybe<Scalars['String']>;
};

/** Information on an hotel issue (repair works, facilities closed,...). */
export type ApiHotelIssue = {
  /** Indicator if there will be an alternative due to the issue. */
  alternative?: Maybe<Scalars['Boolean']>;
  /** Date from when the issue will start. */
  dateFrom?: Maybe<Scalars['String']>;
  /** Date when the issue will end. */
  dateTo?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  /** Code of the issue. */
  issueCode?: Maybe<Scalars['String']>;
  /** Code of the type of incidence. */
  issueType?: Maybe<Scalars['String']>;
  /** Issue order, in case there is more than one. */
  order?: Maybe<Scalars['Int']>;
};

/** Information on a hotel phone line. */
export type ApiHotelPhone = {
  /** Phone number. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** Type of phone line (phonebooking, phonehotel, faxnumber...). */
  phoneType?: Maybe<Scalars['String']>;
};

/** Information of the hotel room. */
export type ApiHotelRoom = {
  /** Characteristic code/s of the room. */
  characteristicCode?: Maybe<Scalars['String']>;
  /** Description of the room. */
  description?: Maybe<Scalars['String']>;
  /** Identifier of the room type. */
  roomCode?: Maybe<Scalars['String']>;
  /** List of facilities, amenities and installations in the room of the hotel. */
  roomFacilities?: Maybe<Array<Maybe<ApiHotelRoomFacility>>>;
  /** List of the different departments in which the room is divided. */
  roomStays?: Maybe<Array<Maybe<ApiHotelRoomStay>>>;
  /** Internal room type code. Returned only for Unified clients. */
  roomType?: Maybe<Scalars['String']>;
};

/** Information on facilities and features associated to a hotel room. */
export type ApiHotelRoomFacility = {
  description?: Maybe<ApiContent>;
  /** Code of the facility. */
  facilityCode?: Maybe<Scalars['Int']>;
  /** Code of the group to which the facility belongs. */
  facilityGroupCode?: Maybe<Scalars['Int']>;
  /** Indicator if the facility has cost or not at the establishment. */
  indFee?: Maybe<Scalars['Boolean']>;
  /** Indicator if the facility exists at the hotel or not. */
  indLogic?: Maybe<Scalars['Boolean']>;
  /** Indicator if the mandatory facility exists at the hotel or not. */
  indYesOrNo?: Maybe<Scalars['Boolean']>;
  /** Numeric value of the facility. */
  number?: Maybe<Scalars['Int']>;
  /** Order of facility in case there is more than one facility at the hotel. */
  order?: Maybe<Scalars['Int']>;
  /** Indicates if the use of the facility will issue a voucher. */
  voucher?: Maybe<Scalars['Boolean']>;
};

/** Describes one of the departments in which the room is divided. */
export type ApiHotelRoomStay = {
  /** Description of the type of department. */
  description?: Maybe<Scalars['String']>;
  /** Numeric position of the department within the room. */
  order?: Maybe<Scalars['String']>;
  /** Describes facilities associated to the department. */
  roomStayFacilities?: Maybe<Array<Maybe<ApiHotelRoomStayFacility>>>;
  /** Code of the Department Type. */
  stayType?: Maybe<Scalars['String']>;
};

/** Information on facilities and features in the RoomStays. */
export type ApiHotelRoomStayFacility = {
  description?: Maybe<ApiContent>;
  /** Code of the facility. */
  facilityCode?: Maybe<Scalars['Int']>;
  /** Code of the group the facility belongs to. */
  facilityGroupCode?: Maybe<Scalars['Int']>;
  /** Number of facilities. */
  number?: Maybe<Scalars['Int']>;
};

export type ApiSegment = {
  code?: Maybe<Scalars['Int']>;
  description?: Maybe<ApiContent>;
};

/** Info of a terminal. */
export type ApiHotelTerminal = {
  description?: Maybe<ApiContent>;
  /** Distance in kilometers to the hotel. */
  distance?: Maybe<Scalars['Int']>;
  name?: Maybe<ApiContent>;
  /** Code of the terminal. */
  terminalCode?: Maybe<Scalars['String']>;
  /** Code of the type of the terminal. */
  terminalType?: Maybe<Scalars['String']>;
};

/** Information on a wildcard room. */
export type ApiWildCard = {
  /** Code of the wildcard room characteristic. */
  characteristicCode?: Maybe<Scalars['String']>;
  hotelRoomDescription?: Maybe<ApiContent>;
  /** Code of the wildcard room type. */
  roomCode?: Maybe<Scalars['String']>;
  /** Code of the wildcard room. */
  roomType?: Maybe<Scalars['String']>;
};

/** Response of Hotels operation */
export type ApiHotelsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned hotels. */
  from?: Maybe<Scalars['Int']>;
  /** List of returned hotels matching the parameters used in the request. */
  hotels?: Maybe<Array<Maybe<ApiHotel>>>;
  /** Highest value of the range of returned hotels. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of hotels matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Response of ImageTypes operation. */
export type ApiImageTypesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned image types. */
  from?: Maybe<Scalars['Int']>;
  /** List of image types. */
  imageTypes?: Maybe<Array<Maybe<ApiImageType>>>;
  /** Highest value of the range of returned image types. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of image types matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Response of Issues operation. */
export type ApiIssuesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned issues. */
  from?: Maybe<Scalars['Int']>;
  /** List of issues that can affect an hotel and its facilities. */
  issues?: Maybe<Array<Maybe<ApiIssue>>>;
  /** Highest value of the range of returned issues. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of issues matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on an issue type (repair works, facilities closed,...). */
export type ApiIssue = {
  /** Indicator if there will be an alternative due to the issue. */
  alternative?: Maybe<Scalars['Boolean']>;
  /** Code of the issue. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  name?: Maybe<ApiContent>;
  /** Code of the type of incidence. */
  type?: Maybe<Scalars['String']>;
};

/** Response of Languages operation. */
export type ApiLanguagesRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned languages. */
  from?: Maybe<Scalars['Int']>;
  /** List of languages. */
  languages?: Maybe<Array<Maybe<ApiLanguage>>>;
  /** Highest value of the range of returned languages. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of languages matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a language. */
export type ApiLanguage = {
  /** Code of the language. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  /** Name of the language on its own language. */
  name?: Maybe<Scalars['String']>;
};

/** Response of Promotions operation. */
export type ApiPromotionsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned promotions. */
  from?: Maybe<Scalars['Int']>;
  /** List of promotions. */
  promotions?: Maybe<Array<Maybe<ApiPromotion>>>;
  /** Highest value of the range of returned promotions. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of promotions matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information of a promotion that can be applied to hotels rates. */
export type ApiPromotion = {
  /** Internal Promotion code. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  name?: Maybe<ApiContent>;
};

/** Returns the list of available values for the rateClass. */
export type ApiRateClassRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** List of rateClass. */
  classifications?: Maybe<Array<Maybe<ApiRateClass>>>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned rateclass. */
  from?: Maybe<Scalars['Int']>;
  /** Highest value of the range of returned rateclass. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of rateclass matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information on a rateClass. */
export type ApiRateClass = {
  /** Code of rateClass. */
  code?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
};

/** Response of RateCommentDetails operation. */
export type ApiRateCommentDetailsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Code of the comment of the hotel. */
  code?: Maybe<Scalars['String']>;
  /** Date of the application of the rate. */
  date?: Maybe<Scalars['String']>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned rate comment details. */
  from?: Maybe<Scalars['Int']>;
  /** Code of the hotel. */
  hotel?: Maybe<Scalars['Int']>;
  /** Code of the incoming office of the hotel. */
  incoming?: Maybe<Scalars['Int']>;
  /** List of rate comment details. */
  rateComments?: Maybe<Array<Maybe<ApiRateComment>>>;
  /** Highest value of the range of returned rate comment details. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of rate comment details matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Definition of the rate comment. */
export type ApiRateComment = {
  /** Final date of application of the comment. */
  dateEnd?: Maybe<Scalars['String']>;
  /** Date from which the comment starts to apply. */
  dateStart?: Maybe<Scalars['String']>;
  /** Rate comments description and language. */
  description?: Maybe<Scalars['String']>;
};

/** Response of RateComments operation. */
export type ApiRateCommentsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned rate comments. */
  from?: Maybe<Scalars['Int']>;
  /** List of rate comments. */
  rateComments?: Maybe<Array<Maybe<ApiRateComments>>>;
  /** Highest value of the range of returned rate comments. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of rate comments matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Describes info that the hotelier wants the final passenger to read before confirming the booking. */
export type ApiRateComments = {
  /** Code of the rate comment. */
  code?: Maybe<Scalars['String']>;
  /** List of rateComments. */
  commentsByRates?: Maybe<Array<Maybe<ApiRateCommentBlock>>>;
  /** Code of the hotel. */
  hotel?: Maybe<Scalars['Int']>;
  /** Code of the incoming office of the hotel. */
  incoming?: Maybe<Scalars['Int']>;
};

/** Lists of rate comments and the rates that apply to them. */
export type ApiRateCommentBlock = {
  /** Rate comments that apply to the rates. */
  comments?: Maybe<Array<Maybe<ApiRateComment>>>;
  /** Rates for which the rate comments applies. */
  rateCodes?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** Response of Rooms operation. */
export type ApiRoomsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned rooms. */
  from?: Maybe<Scalars['Int']>;
  /** List of rooms. */
  rooms?: Maybe<Array<Maybe<ApiRoom>>>;
  /** Highest value of the range of returned rooms. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of rooms matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Information describing a room. */
export type ApiRoom = {
  /** Code of the room characteristic. */
  characteristic?: Maybe<Scalars['String']>;
  characteristicDescription?: Maybe<ApiContent>;
  /** Code of the room. */
  code?: Maybe<Scalars['String']>;
  /** Description of the room. */
  description?: Maybe<Scalars['String']>;
  /** Maximum number of adults allowed in the room. */
  maxAdults?: Maybe<Scalars['Int']>;
  /** Maximum number of children allowed in the room. */
  maxChildren?: Maybe<Scalars['Int']>;
  /** Maximum number of paxes allowed in the room. */
  maxPax?: Maybe<Scalars['Int']>;
  /** Minimum number of adults allowed in the room. */
  minAdults?: Maybe<Scalars['Int']>;
  /** Minimum number of adults allowed in the room. */
  minPax?: Maybe<Scalars['Int']>;
  /** Code of the room type. Returned only for Unified clients. */
  type?: Maybe<Scalars['String']>;
  typeDescription?: Maybe<ApiContent>;
};

/** Response of Segments operation. */
export type ApiSegmentsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned segments. */
  from?: Maybe<Scalars['Int']>;
  /** List of segments. */
  segments?: Maybe<Array<Maybe<ApiSegment>>>;
  /** Highest value of the range of returned segments. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of segments matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Response of Terminals operation. */
export type ApiTerminalsRS = {
  /** Relevant internal information. */
  auditData?: Maybe<ApiAuditData>;
  /** Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes. */
  error?: Maybe<ApiHotelbedsError>;
  /** Lowest value of the range of returned terminals. */
  from?: Maybe<Scalars['Int']>;
  /** List of terminals. */
  terminals?: Maybe<Array<Maybe<ApiTerminal>>>;
  /** Highest value of the range of returned terminals. */
  to?: Maybe<Scalars['Int']>;
  /** Total number of terminals matching the parameters used in the request (regardless of pagination/returned range). */
  total?: Maybe<Scalars['Int']>;
};

/** Info of a terminal. */
export type ApiTerminal = {
  /** Code of the terminal. */
  code?: Maybe<Scalars['String']>;
  /** Code of the country where the terminal is located. */
  country?: Maybe<Scalars['String']>;
  description?: Maybe<ApiContent>;
  name?: Maybe<ApiContent>;
  /** Code of the type of the terminal. */
  type?: Maybe<Scalars['String']>;
};

    }
    export type QueryContentSdk = {
  /** Returns the list of available accommodation types.

Equivalent to GET /types/accommodations **/
  apiAccommodationsRS: InContextSdkMethod<ContentTypes.Query['apiAccommodationsRS'], ContentTypes.QueryapiAccommodationsRSArgs, MeshContext>,
  /** Returns the list of available amenities. 

Equivalent to GET /types/amenities **/
  apiAmenitiesRS: InContextSdkMethod<ContentTypes.Query['apiAmenitiesRS'], ContentTypes.QueryapiAmenitiesRSArgs, MeshContext>,
  /** Returns the list of available board groups.

Equivalent to GET /types/boardgroups **/
  apiBoardGroupsRS: InContextSdkMethod<ContentTypes.Query['apiBoardGroupsRS'], ContentTypes.QueryapiBoardGroupsRSArgs, MeshContext>,
  /** Returns the list of available board types.

Equivalent to GET /types/boards **/
  apiBoardsRS: InContextSdkMethod<ContentTypes.Query['apiBoardsRS'], ContentTypes.QueryapiBoardsRSArgs, MeshContext>,
  /** Returns the list of available categories.

Equivalent to GET /types/categories **/
  apiCategoriesRS: InContextSdkMethod<ContentTypes.Query['apiCategoriesRS'], ContentTypes.QueryapiCategoriesRSArgs, MeshContext>,
  /** Returns the list of available chains. 

Equivalent to GET /types/chains **/
  apiChainsRS: InContextSdkMethod<ContentTypes.Query['apiChainsRS'], ContentTypes.QueryapiChainsRSArgs, MeshContext>,
  /** Returns the list of available countries.

This is the higher level available in our destination tree. We do not allow search by country, but it's included for organizational reasons (to group destinations) and because the country codes returned are used in other levels of APItude (for example to define the sourceMarket in Availability operation of [Hotel Booking API](/documentation/hotels/booking-api/api-reference/).

Equivalent to GET /locations/countries **/
  apiCountriesRS: InContextSdkMethod<ContentTypes.Query['apiCountriesRS'], ContentTypes.QueryapiCountriesRSArgs, MeshContext>,
  /** Returns the list of available currencies.

Equivalent to GET /types/currencies **/
  apiCurrenciesRS: InContextSdkMethod<ContentTypes.Query['apiCurrenciesRS'], ContentTypes.QueryapiCurrenciesRSArgs, MeshContext>,
  /** Return the list of available destinations, zones and grouping zones. 

Destinations are the highest level entities in our destination tree by which availability can be searched. Please note that destination codes are not IATA codes. It is very important to understand that our 'destination' will not always only correspond with a unique city, but usually with the main city and the area surrounding the city. 

For example, the destination code NYC in the US, corresponds with the whole New York Area, so it is not limited to the city of New York, but also covers the surrounding areas, such as New Jersey and The Hamptons. Another example is BCN in Spain, which corresponds with the entire Barcelona Province; so it searches hotels located in the city of Barcelona, but also in other cities within the Province of Barcelona, such us Hospitalet de Llobregat, Terrassa and Sabadell. So when you search for availability using the destination code, you will receive results that may be located far from the main city for which you are actually searching.

It is very important to check the locations that the search retrieves to avoid booking hotels in a different location than the one requested by your customers.

Equivalent to GET /locations/destinations **/
  apiDestinationsRS: InContextSdkMethod<ContentTypes.Query['apiDestinationsRS'], ContentTypes.QueryapiDestinationsRSArgs, MeshContext>,
  /** Returns the list of available facilities.

Equivalent to GET /types/facilities **/
  apiFacilitiesRS: InContextSdkMethod<ContentTypes.Query['apiFacilitiesRS'], ContentTypes.QueryapiFacilitiesRSArgs, MeshContext>,
  /** Returns the list of available facility groups.

Equivalent to GET /types/facilitygroups **/
  apiFacilityGroupsRS: InContextSdkMethod<ContentTypes.Query['apiFacilityGroupsRS'], ContentTypes.QueryapiFacilityGroupsRSArgs, MeshContext>,
  /** Returns the list of available facility typologies.Remarks: Since all fields are returned by default, there won't be any field to filter.

Equivalent to GET /types/facilitytypologies **/
  apiFacilityTypologiesRS: InContextSdkMethod<ContentTypes.Query['apiFacilityTypologiesRS'], ContentTypes.QueryapiFacilityTypologiesRSArgs, MeshContext>,
  /** Returns the descriptions of the different category groups.

Equivalent to GET /types/groupcategories **/
  apiGroupCategoriesRS: InContextSdkMethod<ContentTypes.Query['apiGroupCategoriesRS'], ContentTypes.QueryapiGroupCategoriesRSArgs, MeshContext>,
  /** Returns all the details associated to the Hotel.

Equivalent to GET /hotels/{hotelCodes}/details **/
  apiHotelDetailsRS: InContextSdkMethod<ContentTypes.Query['apiHotelDetailsRS'], ContentTypes.QueryapiHotelDetailsRSArgs, MeshContext>,
  /** Returns the list of currently existing hotels in Hotelbeds portfolio.

Equivalent to GET /hotels **/
  apiHotelsRS: InContextSdkMethod<ContentTypes.Query['apiHotelsRS'], ContentTypes.QueryapiHotelsRSArgs, MeshContext>,
  /** Returns the descriptions of the different image types.

Equivalent to GET /types/imagetypes **/
  apiImageTypesRS: InContextSdkMethod<ContentTypes.Query['apiImageTypesRS'], ContentTypes.QueryapiImageTypesRSArgs, MeshContext>,
  /** Repair works, facilities closed,...

Equivalent to GET /types/issues **/
  apiIssuesRS: InContextSdkMethod<ContentTypes.Query['apiIssuesRS'], ContentTypes.QueryapiIssuesRSArgs, MeshContext>,
  /** Returns the list of available languages.

The Languages operation is connected to all the operations in which a description is returned, since we return the language code in which that description has been returned.

Equivalent to GET /types/languages **/
  apiLanguagesRS: InContextSdkMethod<ContentTypes.Query['apiLanguagesRS'], ContentTypes.QueryapiLanguagesRSArgs, MeshContext>,
  /** Returns the list of available promotions.

Equivalent to GET /types/promotions **/
  apiPromotionsRS: InContextSdkMethod<ContentTypes.Query['apiPromotionsRS'], ContentTypes.QueryapiPromotionsRSArgs, MeshContext>,
  /** Returns the list of available values for the rateClass.

Equivalent to GET /types/classifications **/
  apiRateClassRS: InContextSdkMethod<ContentTypes.Query['apiRateClassRS'], ContentTypes.QueryapiRateClassRSArgs, MeshContext>,
  /** Returns the descriptions of the rate comments associated with the hotel that the hotelier wants the client to read before confirming the booking with the given date.

Equivalent to GET /types/ratecommentdetails **/
  apiRateCommentDetailsRS: InContextSdkMethod<ContentTypes.Query['apiRateCommentDetailsRS'], ContentTypes.QueryapiRateCommentDetailsRSArgs, MeshContext>,
  /** Returns the descriptions of the rate comments associated with the hotel that the hotelier wants the client to read before confirming the booking.

Equivalent to GET /types/ratecomments **/
  apiRateCommentsRS: InContextSdkMethod<ContentTypes.Query['apiRateCommentsRS'], ContentTypes.QueryapiRateCommentsRSArgs, MeshContext>,
  /** Returns the list of available rooms.

Equivalent to GET /types/rooms **/
  apiRoomsRS: InContextSdkMethod<ContentTypes.Query['apiRoomsRS'], ContentTypes.QueryapiRoomsRSArgs, MeshContext>,
  /** Returns the list of available segments. 

Equivalent to GET /types/segments **/
  apiSegmentsRS: InContextSdkMethod<ContentTypes.Query['apiSegmentsRS'], ContentTypes.QueryapiSegmentsRSArgs, MeshContext>,
  /** List of terminals per country/destination

Equivalent to GET /types/terminals **/
  apiTerminalsRS: InContextSdkMethod<ContentTypes.Query['apiTerminalsRS'], ContentTypes.QueryapiTerminalsRSArgs, MeshContext>
};

export type MutationContentSdk = {

};

export type SubscriptionContentSdk = {

};

export type BookingsContext = {
      ["Bookings"]: { Query: QueryBookingsSdk, Mutation: MutationBookingsSdk, Subscription: SubscriptionBookingsSdk },
      ["headers[\"api-key\"]"]: Scalars['ID'],
["headers[\"x-signature\"]"]: Scalars['ID'],
["fetch"]: typeof fetch
    };

export type ContentContext = {
      ["Content"]: { Query: QueryContentSdk, Mutation: MutationContentSdk, Subscription: SubscriptionContentSdk },
      ["headers[\"api-key\"]"]: Scalars['ID'],
["headers[\"x-signature\"]"]: Scalars['ID'],
["fetch"]: typeof fetch
    };

export type MeshContext = BookingsContext & ContentContext & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';

import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/Bookings/oas-schema":
      return import("./sources/Bookings/oas-schema");
    
    case ".mesh/sources/Content/oas-schema":
      return import("./sources/Content/oas-schema");
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetchFactory } from 'fetchache';
import { fetch, Request, Response } from '@whatwg-node/fetch';

import OpenapiHandler from "@graphql-mesh/openapi"
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { printWithCache } from '@graphql-mesh/utils';
export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("🕸️  Mesh");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)
const fetchFn = fetchFactory({ cache, fetch, Request, Response });
const sources = [];
const transforms = [];
const additionalEnvelopPlugins = [];
const bookingsTransforms = [];
const contentTransforms = [];
const additionalTypeDefs = [] as any[];
const bookingsHandler = new OpenapiHandler({
              name: "Bookings",
              config: {"source":"./src/BookingAPI.yml","operationHeaders":{"Api-key":"{context.headers[\"api-key\"]}","X-Signature":"{context.headers[\"x-signature\"]}","Accept":"application/json"}},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Bookings"),
              logger: logger.child("Bookings"),
              importFn,
              fetchFn,
            });
const contentHandler = new OpenapiHandler({
              name: "Content",
              config: {"source":"./src/ContentAPI.yml","operationHeaders":{"Api-key":"{context.headers[\"api-key\"]}","X-Signature":"{context.headers[\"x-signature\"]}","Accept":"application/json"}},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Content"),
              logger: logger.child("Content"),
              importFn,
              fetchFn,
            });
sources[0] = {
          name: 'Bookings',
          handler: bookingsHandler,
          transforms: bookingsTransforms
        }
sources[1] = {
          name: 'Content',
          handler: contentHandler,
          transforms: contentTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
  };
}

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));