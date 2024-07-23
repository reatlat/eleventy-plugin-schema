import script from "./src/script";
import jsonLd from "./src/jsonLd";

/**
 * Add a shortcode to generate JSON-LD structured data.
 * @param {Object} eleventyConfig Eleventy Configuration API.
 */
export default (eleventyConfig) => {
  eleventyConfig.addShortcode("jsonLdScript", (meta, type, tags) =>
    script({ meta, type, tags })
  );
  eleventyConfig.addShortcode("jsonLd", (meta, type, tags) =>
    jsonLd({ meta, type, tags })
  );
};
