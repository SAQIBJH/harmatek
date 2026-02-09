import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const PRODUCTS_PER_PAGE = 21;

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [currentPage]);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = Math.min(startIndex + PRODUCTS_PER_PAGE, totalProducts);

  return (
    <>
      <Helmet>
        <title>Our Products | HarmaTek</title>
        <meta
          name="description"
          content="Explore HarmaTek's range of forklift safety systems, collision avoidance technology, and telematics solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
        <Header />

        <main className="flex-grow pt-32 pb-24">
          {/* Page Header */}
          <div className="container mx-auto px-4 lg:px-8 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Our <span className="text-gradient-gold">Products</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover our comprehensive suite of safety and productivity solutions designed for the modern warehouse.
              </p>
            </div>
          </div>

          {/* Products Info Bar */}
          <div className="container mx-auto px-4 lg:px-8 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 bg-muted/50 rounded-lg">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{startIndex + 1}-{endIndex}</span> of{" "}
                <span className="font-semibold text-foreground">{totalProducts}</span> products
              </p>
              <p className="text-sm text-muted-foreground">
                Page <span className="font-semibold text-foreground">{currentPage}</span> of{" "}
                <span className="font-semibold text-foreground">{totalPages}</span>
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              key={currentPage}
            >
              {paginatedProducts.map((product, index) => (
                <ProductCard 
                  key={`${currentPage}-${product.title}`} 
                  {...product} 
                  index={index} 
                />
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div 
                className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Previous Button */}
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="min-w-[120px] gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {getPageNumbers().map((page, index) => (
                    page === "..." ? (
                      <span key={`ellipsis-${index}`} className="px-3 text-muted-foreground">
                        ...
                      </span>
                    ) : (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="icon"
                        onClick={() => handlePageChange(page as number)}
                        className="w-10 h-10"
                      >
                        {page}
                      </Button>
                    )
                  ))}
                </div>

                {/* Next Button */}
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="min-w-[120px] gap-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </motion.div>
            )}

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <p className="text-muted-foreground mb-6">
                Looking for a custom solution? We specialize in tailoring our technology to your specific needs.
              </p>
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg">
                Contact Sales Team
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Products;
