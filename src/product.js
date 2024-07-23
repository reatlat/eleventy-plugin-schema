import offer from"./offer";
import rating from"./rating";
import review from"./review";

/**
 * Product structured data. See: https://schema.org/Product.
 * More info: https://jsonld.com/product/.
 *
 * @param {Object} param0 Context.
 * @param {Object} param0.meta Meta data.
 * @param {String} param0.meta.url Page URL.
 * @param {String} param0.meta.description Description.
 * @param {Object} param0.meta.image Meta image properties.
 * @param {String} param0.meta.image.src Image URI.
 * @param {Object} param0.meta.offers Product offers.
 * @param {Object} param0.meta.rating Product rating.
 * @param {String} param0.meta.gtin A Global Trade Item Number (GTIN).
 * @param {String} param0.meta.gtin12 The GTIN-12 code of the product.
 * @param {String} param0.meta.gtin13 The GTIN-13 code of the product
 * @param {String} param0.meta.gtin14 The GTIN-14 code of the product.
 * @param {String} param0.meta.gtin8 The GTIN-8 code of the product.
 * @param {String} param0.meta.sku The Stock Keeping Unit.
 * @param {String} param0.meta.mpn The Manufacturer Part Number of the product.
 * @param {String} param0.meta.countryOfOrigin The country of origin.
 * @param {String} param0.meta.color The color of the product.
 * @param {String} param0.meta.brand The brand(s) associated with a product.
 * @param {String} param0.meta.manufacturer The manufacturer of the product.
 * @param {String} param0.meta.material A material that something is made from.
 * @param {String} param0.meta.productID The product identifier, such as ISBN.
 * @param {String} param0.meta.productionDate The date of production.
 * @param {String} param0.meta.category A category for the item.
 * @param {String} param0.meta.identifier A identifier for the item.
 * @returns {Object}
 */
export default ({ meta }) => {
  const product = {
    "@type": "Product",
    aggregateRating: rating(meta.rating),
    offers: offer(meta.offers),
    review: review(meta.reviews),
    url: meta.url,
    description: meta.description,
    image: meta.image.src,
    name: meta.name,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": meta.url,
    },

    gtin: meta.gtin,
    gtin12: meta.gtin12,
    gtin13: meta.gtin13,
    gtin14: meta.gtin14,
    gtin8: meta.gtin8,
    sku: meta.sku,
    mpn: meta.mpn,
    countryOfOrigin: meta.countryOfOrigin,
    color: meta.color,
    material: meta.material,
    productID: meta.productID,
    category: meta.category,
    identifier: meta.identifier,
  };

  if (meta.brand) {
    product.brand = {
      "@type": "Brand",
      name: meta.brand,
    };
  }

  if (meta.manufacturer) {
    product.manufacturer = {
      "@type": "Organization",
      name: meta.manufacturer,
    };
  }

  return product;
};
