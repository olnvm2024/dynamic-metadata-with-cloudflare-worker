export const config = {
  domainSource: "https://www.openlogistics.network/", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/locations/[^/]+",
          metaDataEndpoint: "https://x5qd-hwnt-pvll.f2.xano.io/api:zuD90P5F/locations/metadata/{oln_location_id}"
      }
  ]
};
