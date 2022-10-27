/*
 * Store BACKEND_URL as a constant so we can define it in 1 place.
 * We will need to dynamically set BACKEND_URL based on the value
 * of process.env.NODE_ENV when we wish to deploy to production.
 */
export const BACKEND_URL = "http://localhost:3000";

export interface PRODUCT_MAPPING {
  [producId: string]: string;
}

export const TYPE_OF_PRODUCT: PRODUCT_MAPPING = {
  "1": "Macbook",
  "2": "iPhone",
  "3": "iPad",
  "4": "Watch",
};
