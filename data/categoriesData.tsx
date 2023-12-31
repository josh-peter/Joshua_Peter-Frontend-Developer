export const categoriesData = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=8",
        active: false,
    category:"ategory",
    stages: 2,
    boosters: 0,
    cost_per_launch: 6700000,
    success_rate_pct: 40,
    first_flight: "2006-03-24",
    country: "Republic of the Marshall Islands",
    company: "SpaceX",
    height: {
      meters: 22.25,
      feet: 73,
    },
    diameter: {
      meters: 1.68,
      feet: 5.5,
    },
    mass: {
      kg: 30146,
      lb: 66460,
    },
    payload_weights: [
      {
        id: "leo",
        name: "Low Earth Orbit",
        kg: 450,
        lb: 992,
      },
    ],
    first_stage: {
      reusable: false,
      engines: 1,
      fuel_amount_tons: 44.3,
      burn_time_sec: 169,
      thrust_sea_level: {
        kN: 420,
        lbf: 94000,
      },
      thrust_vacuum: {
        kN: 480,
        lbf: 110000,
      },
    },
    second_stage: {
      engines: 1,
      fuel_amount_tons: 3.38,
      burn_time_sec: 378,
      thrust: {
        kN: 31,
        lbf: 7000,
      },
      payloads: {
        option_1: "composite fairing",
        composite_fairing: {
          height: {
            meters: 3.5,
            feet: 11.5,
          },
          diameter: {
            meters: 1.5,
            feet: 4.9,
          },
        },
      },
    },
    engines: {
      number: 1,
      type: "merlin",
      version: "1C",
      engine_loss_max: 0,
      propellant_1: "liquid oxygen",
      propellant_2: "RP-1 kerosene",
      thrust_sea_level: {
        kN: 420,
        lbf: 94000,
      },
      thrust_vacuum: {
        kN: 480,
        lbf: 110000,
      },
      thrust_to_weight: 96,
    },
    landing_legs: {
      number: 0,
      material: null,
    },
    wikipedia: "https://en.wikipedia.org/wiki/Falcon_1",
    description:
      "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
    rocket_id: "falcon1",
    rocket_name: "Falcon 1",
    rocket_type: "rocket",
  },
];
