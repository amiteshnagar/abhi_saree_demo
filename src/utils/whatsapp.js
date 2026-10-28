import { BUSINESS_INFO } from '../data/products';

/**
 * Format currency in Indian Rupees style (e.g. ₹8,499)
 */
export function formatINR(amount) {
  if (typeof amount !== 'number') return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Generate a single product enquiry WhatsApp link
 */
export function generateProductEnquiryUrl(product) {
  const message = [
    `Namaste Abhi Saree Collection,`,
    ``,
    `I am interested in this design from your online showcase:`,
    `• Product: ${product.name}`,
    `• Reference Code: ${product.id}`,
    `• Listed Price: ${formatINR(product.price)}`,
    ``,
    `Could you please share its current availability, color options, and real photos/videos on WhatsApp?`,
    ``,
    `Thank you!`
  ].join('\n');

  return `https://wa.me/${BUSINESS_INFO.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate an itemized Cart WhatsApp order inquiry link
 */
export function generateCartOrderUrl(cartItems, grandTotal) {
  if (!cartItems || cartItems.length === 0) return '#';

  const itemsList = cartItems.map((item, index) => {
    const lineTotal = item.price * item.quantity;
    return `${index + 1}. ${item.name} (${item.id})\n   Qty: ${item.quantity} × ${formatINR(item.price)} = ${formatINR(lineTotal)}`;
  }).join('\n\n');

  const message = [
    `Namaste Abhi Saree Collection,`,
    ``,
    `I would like to enquire about ordering the following selected items:`,
    ``,
    itemsList,
    ``,
    `----------------------------------------`,
    `Estimated Total: ${formatINR(grandTotal)}`,
    `----------------------------------------`,
    ``,
    `Please confirm if these items are currently in stock, verify final pricing, and let me know the delivery/pickup arrangements.`,
    ``,
    `Looking forward to hearing from you!`
  ].join('\n');

  return `https://wa.me/${BUSINESS_INFO.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

/**
 * General customer question link
 */
export function generateGeneralInquiryUrl(categoryName = null) {
  const topic = categoryName ? ` regarding ${categoryName}` : '';
  const message = `Namaste Abhi Saree Collection, I would like to enquire about ethnic wear options${topic} available at your boutique in Pachore.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappDigits}?text=${encodeURIComponent(message)}`;
}