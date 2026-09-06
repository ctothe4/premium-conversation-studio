/**
 * Live demo configuration.
 *
 * The demo experience is data-driven so additional verticals (beauty, real
 * estate, schools, retail) can be added without rebuilding the component.
 * Copy lives in the i18n dictionaries, keyed by the ids below.
 * Prices are held in the base currency (ZMW) and converted for display.
 *
 * Only the restaurant journey is polished at this stage.
 */
export type DemoType = "restaurant" | "beauty" | "realEstate" | "school" | "retail";

export interface DemoItem {
  id: string;
  /** Price in the base currency (ZMW). */
  price: number;
}

export interface DemoCategory {
  id: string;
  items: DemoItem[];
}

export interface DemoConfig {
  type: DemoType;
  /** i18n key for the demo business name. */
  categories: DemoCategory[];
  /** Whether the journey asks delivery/pickup. */
  fulfilment: boolean;
  /** Whether the journey asks for a delivery area. */
  location: boolean;
}

export const DEMOS: Partial<Record<DemoType, DemoConfig>> = {
  restaurant: {
    type: "restaurant",
    fulfilment: true,
    location: true,
    categories: [
      {
        id: "burgers",
        items: [
          { id: "classic-burger", price: 85 },
          { id: "chicken-burger", price: 95 },
          { id: "double-burger", price: 120 },
        ],
      },
      {
        id: "pizza",
        items: [
          { id: "margherita", price: 110 },
          { id: "pepperoni", price: 130 },
          { id: "veg-pizza", price: 105 },
        ],
      },
      {
        id: "drinks",
        items: [
          { id: "soda", price: 15 },
          { id: "water", price: 10 },
          { id: "juice", price: 25 },
        ],
      },
    ],
  },
};

export const getDemo = (type: DemoType = "restaurant") =>
  DEMOS[type] ?? DEMOS.restaurant!;
