// Auto-generated image imports
// This file imports all product images so Vite can process them

// Import all webp images from assets folder
const imageModules = import.meta.glob("@/assets/*.webp", { eager: true, import: "default" });

// Convert to a simple lookup map: filename -> url
export const productImages: Record<string, string> = {};

for (const [path, url] of Object.entries(imageModules)) {
  // Extract filename from path (e.g., "/src/assets/vfd-elw.webp" -> "vfd-elw")
  const filename = path
    .replace("/src/assets/", "")
    .replace(".webp", "");
  
  productImages[filename] = url as string;
}

// Helper function to get image URL
export const getProductImage = (imageName: string): string => {
  // Remove .webp extension if present
  const cleanName = imageName.replace(".webp", "");
  
  // Return the image URL or a placeholder
  return productImages[cleanName] || productImages["placeholder"] || "";
};

export default productImages;
