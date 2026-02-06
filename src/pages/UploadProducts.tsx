import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import * as XLSX from "xlsx";
import { motion } from "framer-motion";
import { 
  Upload, 
  FileSpreadsheet, 
  AlertCircle, 
  CheckCircle2, 
  X,
  Download,
  Code,
  FileJson,
  Copy,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ProductData {
  title: string;
  description: string;
  features: string[];
  imageName: string;
}

const UploadProducts = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [file, setFile] = useState<File | null>(null);
  const [parsedData, setParsedData] = useState<ProductData[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const toCamelCase = (str: string): string => {
    return str
      .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
      .replace(/[^a-zA-Z0-9]/g, '')
      .replace(/^./, (chr) => chr.toLowerCase());
  };

  const toPascalCase = (str: string): string => {
    const camel = toCamelCase(str);
    return camel.charAt(0).toUpperCase() + camel.slice(1);
  };

  // Normalize column names to handle different cases (Description vs description)
  const normalizeRow = (row: any): any => {
    const normalized: any = {};
    for (const key of Object.keys(row)) {
      const lowerKey = key.toLowerCase().trim();
      // Map various column name formats to standard keys
      if (lowerKey === "title") normalized.title = row[key];
      else if (lowerKey === "description") normalized.description = row[key];
      else if (lowerKey === "features") normalized.features = row[key];
      else if (lowerKey === "imagename" || lowerKey === "images file name" || lowerKey === "image name" || lowerKey === "image filename") {
        normalized.imageName = row[key];
      }
      // Keep original keys as fallback
      else normalized[key] = row[key];
    }
    return normalized;
  };

  const validateExcelData = (data: any[]): ProductData[] => {
    const validProducts: ProductData[] = [];
    let skippedRows = 0;
    
    for (let i = 0; i < data.length; i++) {
      const rawRow = data[i];
      const row = normalizeRow(rawRow);
      
      // Skip completely empty rows
      if (!row.title && !row.description && !row.features && !row.imageName) {
        skippedRows++;
        continue;
      }
      
      // Use empty string as default for missing fields
      const title = row.title ? String(row.title).trim() : "";
      const description = row.description ? String(row.description).trim() : "";
      
      // Skip rows without at least a title
      if (!title) {
        skippedRows++;
        continue;
      }
      
      // Parse features - can be comma-separated string or array
      let features: string[] = [];
      if (row.features) {
        if (typeof row.features === "string") {
          features = row.features.split(",").map((f: string) => f.trim()).filter(Boolean);
        } else if (Array.isArray(row.features)) {
          features = row.features.map(String);
        }
      }
      
      validProducts.push({
        title: title,
        description: description,
        features: features.length > 0 ? features : [],
        imageName: row.imageName ? String(row.imageName).trim() : "",
      });
    }
    
    if (skippedRows > 0) {
      console.log(`Skipped ${skippedRows} empty or invalid rows`);
    }
    
    return validProducts;
  };

  const handleFile = async (selectedFile: File) => {
    setError(null);
    setSuccess(null);
    setCopied(false);
    
    // Validate file type
    const validTypes = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
      "text/csv"
    ];
    
    if (!validTypes.includes(selectedFile.type) && 
        !selectedFile.name.endsWith('.xlsx') && 
        !selectedFile.name.endsWith('.xls') && 
        !selectedFile.name.endsWith('.csv')) {
      setError("Please upload a valid Excel file (.xlsx, .xls) or CSV file");
      return;
    }
    
    try {
      const data = await selectedFile.arrayBuffer();
      const workbook = XLSX.read(data, { type: "array" });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);
      
      if (jsonData.length === 0) {
        setError("The Excel file appears to be empty");
        return;
      }
      
      const validatedData = validateExcelData(jsonData);
      setParsedData(validatedData);
      setFile(selectedFile);
      setSuccess(`Successfully parsed ${validatedData.length} product(s) from the file`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to parse the Excel file");
      setParsedData([]);
      setFile(null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFile(droppedFile);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  };

  const clearFile = () => {
    setFile(null);
    setParsedData([]);
    setError(null);
    setSuccess(null);
    setCopied(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const downloadTemplate = () => {
    const template = [
      {
        title: "Forklift Collision Avoidance System",
        description: "Advanced sensor technology that detects pedestrians and objects in real-time to prevent accidents.",
        features: "360° detection coverage, Real-time audio/visual alerts, Speed limiting functionality, Customizable detection zones",
        imageName: "product-fcas.webp"
      }
    ];
    
    const worksheet = XLSX.utils.json_to_sheet(template);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Template");
    XLSX.writeFile(workbook, "products-template.xlsx");
  };

  const generateDataFileContent = (): string => {
    const imports = parsedData
      .filter(p => p.imageName)
      .map(p => {
        const varName = toCamelCase(p.title);
        return `import ${varName}Image from "@/assets/${p.imageName}";`;
      });

    const uniqueImports = [...new Set(imports)];
    const importSection = uniqueImports.length > 0 
      ? uniqueImports.join("\n") + "\n\n// Add a placeholder import for products without images\nimport productPlaceholder from \"@/assets/product-placeholder.png\";\n"
      : "import productPlaceholder from \"@/assets/product-placeholder.png\";\n";
    
    const productsArray = parsedData.map(product => {
      const varName = product.imageName ? toCamelCase(product.title) : null;
      const featuresStr = product.features.map(f => `"${f}"`).join(", ");
      
      return `  {
    title: "${product.title}",
    description: "${product.description}",
    image: ${varName ? `${varName}Image` : "productPlaceholder"},
    features: [${featuresStr}],
  }`;
    }).join(",\n");

    return `// Auto-generated products data file
// Place this file in: src/data/products.ts
// Place images in: src/assets/ folder

${importSection}
export interface Product {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
${productsArray}
];

export default products;
`;
  };

  const generateSimpleDataFile = (): string => {
    const productsArray = parsedData.map(product => {
      const featuresStr = product.features.map(f => `"${f}"`).join(", ");
      
      return `  {
    title: "${product.title}",
    description: "${product.description}",
    image: "${product.imageName || "product-placeholder.png"}",
    features: [${featuresStr}],
  }`;
    }).join(",\n");

    return `// Auto-generated products data file
// Place this file in: src/data/products.ts
// Place images in: src/assets/ folder
// Then import images in your Products.tsx or this file

export interface Product {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
${productsArray}
];

export default products;
`;
  };

  const downloadDataFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/typescript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const dataFileContent = generateDataFileContent();
  const simpleDataFileContent = generateSimpleDataFile();

  return (
    <>
      <Helmet>
        <title>Upload Products | HarmaTek</title>
        <meta
          name="description"
          content="Upload products via Excel file to HarmaTek product catalog."
        />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
        <Header />

        <main className="flex-grow pt-32 pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Page Header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Upload <span className="text-gradient-gold">Products</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Import products from Excel. Images go to <code className="bg-muted px-2 py-1 rounded text-sm">src/assets/</code> folder separately.
              </p>
            </div>

            {/* Template Download */}
            <div className="max-w-2xl mx-auto mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Download className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Excel Template</h3>
                        <p className="text-sm text-muted-foreground">
                          Download the required format
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" onClick={downloadTemplate}>
                      <Download className="w-4 h-4 mr-2" />
                      Download Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upload Area */}
            <div className="max-w-2xl mx-auto mb-8">
              <Card>
                <CardContent className="p-6">
                  {!file ? (
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`
                        border-2 border-dashed rounded-xl p-12 text-center cursor-pointer
                        transition-all duration-200
                        ${isDragging 
                          ? "border-primary bg-primary/5" 
                          : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }
                      `}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".xlsx,.xls,.csv"
                        onChange={handleFileInput}
                        className="hidden"
                      />
                      <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                        <Upload className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Drop your Excel file here
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        or click to browse files
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Supports .xlsx, .xls, and .csv files
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                        <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                          <FileSpreadsheet className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="font-medium text-foreground truncate">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {parsedData.length} product(s) found
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={clearFile}
                          className="shrink-0"
                        >
                          <X className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Alerts */}
                  {error && (
                    <Alert variant="destructive" className="mt-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  
                  {success && (
                    <Alert className="mt-4 border-green-500 text-green-700 dark:text-green-300">
                      <CheckCircle2 className="h-4 w-4" />
                      <AlertDescription>{success}</AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Parsed Data & Generated File */}
            {parsedData.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-5xl mx-auto"
              >
                <Tabs defaultValue="preview" className="space-y-6">
                  <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                    <TabsTrigger value="preview">Data Preview</TabsTrigger>
                    <TabsTrigger value="generated">Generated File</TabsTrigger>
                  </TabsList>

                  {/* Data Preview Tab */}
                  <TabsContent value="preview">
                    <Card>
                      <CardHeader>
                        <CardTitle>Parsed Products ({parsedData.length})</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>#</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Features</TableHead>
                                <TableHead>Image Name</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {parsedData.map((product, index) => (
                                <TableRow key={index}>
                                  <TableCell>{index + 1}</TableCell>
                                  <TableCell className="font-medium max-w-[150px]">
                                    {product.title}
                                  </TableCell>
                                  <TableCell className="max-w-[250px] truncate" title={product.description}>
                                    {product.description}
                                  </TableCell>
                                  <TableCell>
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted">
                                      {product.features.length} features
                                    </span>
                                  </TableCell>
                                  <TableCell className="font-mono text-sm">
                                    {product.imageName || "—"}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Generated File Tab */}
                  <TabsContent value="generated">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between flex-wrap gap-4">
                          <span className="flex items-center gap-2">
                            <Code className="w-5 h-5" />
                            Generated Data File
                          </span>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard(dataFileContent)}
                            >
                              {copied ? (
                                <><Check className="w-4 h-4 mr-2" /> Copied</>
                              ) : (
                                <><Copy className="w-4 h-4 mr-2" /> Copy</>
                              )}
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => downloadDataFile(dataFileContent, "products.ts")}
                            >
                              <FileJson className="w-4 h-4 mr-2" />
                              Download .ts
                            </Button>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                          <AlertDescription className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>Next Steps:</strong>
                            <ol className="list-decimal list-inside mt-2 space-y-1">
                              <li>Put all your .webp images into <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">src/assets/</code> folder</li>
                              <li>Download or copy this file content</li>
                              <li>Create <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">src/data/products.ts</code> and paste the content</li>
                              <li>In Products.tsx, import: <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">import &#123; products &#125; from "@/data/products";</code></li>
                            </ol>
                          </AlertDescription>
                        </Alert>

                        <div className="relative">
                          <Textarea
                            value={dataFileContent}
                            readOnly
                            className="font-mono text-xs min-h-[400px] resize-none"
                          />
                        </div>

                        {/* Simple version option */}
                        <div className="pt-4 border-t">
                          <h4 className="font-medium mb-2">Alternative: Simple Version (without imports)</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Use this if you want to handle image imports manually in Products.tsx
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => downloadDataFile(simpleDataFileContent, "products-simple.ts")}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download Simple Version
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </motion.div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default UploadProducts;
