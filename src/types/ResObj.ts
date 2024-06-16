export interface RestaurantListInterface {
  info: {
    id: string;
    name: string;
    cloudinaryImageId: string;
    locality: string;
    areaName: string;
    costForTwo: string;
    cuisines: string[];
    avgRating: number;
    parentId: string;
    avgRatingString: string;
    totalRatingsString: string;
    sla: {
      deliveryTime: number;
      lastMileTravel: number;
      serviceability: string;
      slaString: string;
      lastMileTravelString: string;
      iconType: string;
    };
    availability: {
      nextCloseTime: string;
      opened: boolean;
    };
    badges: {
      imageBadges?: {
        imageId: string;
        description: string;
      }[];
    };
    isOpen: boolean;
    type: string;
    badgesV2: {
      entityBadges: {
        imageBased?: {
          badgeObject: {
            attributes: {
              description: string;
              imageId: string;
            };
          }[];
        };
        textBased: Record<string, never>;
        textExtendedBadges: NonNullable<unknown>;
      };
    };
    aggregatedDiscountInfoV3?: {
      header: string;
      subHeader: string;
      discountTag?: string;
    };
    differentiatedUi: {
      displayType: string;
      differentiatedUiMediaDetails: {
        mediaType: string;
        lottie: NonNullable<unknown>;
        video: NonNullable<unknown>;
      };
    };
    reviewsSummary: NonNullable<unknown>;
    displayType: string;
    restaurantOfferPresentationInfo: NonNullable<unknown>;
  };
  analytics: NonNullable<unknown>;
  cta: {
    link: string;
    type: string;
  };
}
