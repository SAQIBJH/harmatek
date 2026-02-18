import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import electronicsEquipment from "@/assets/images/electric-equipment.jpg";
import generalProfile from "@/assets/images/general-brochure.jpg";
import repairLab from "@/assets/images/repair-lab.jpg";

const brochureData = [
    {
        id: 1,
        title: "Electronics Equipment",
        image: electronicsEquipment,
        download: "/electric-equipment.pdf"
    },
    {
        id: 2,
        title: "General Profile",
        image: generalProfile,
        download: "/general-brochure.pdf"
    },
    {
        id: 3,
        title: "Lab Repair Services",
        image: repairLab,
        download: "/repair-lab.pdf"
    }
]

const Brochures = () => {
    return (
        <>
            <Helmet>
                <title>Brochures | HarmaTek</title>
                <meta
                    name="description"
                    content="Learn about Bright Solution Company (HarmaTek) - Leading industrial services and electronics maintenance provider in KSA."
                />
            </Helmet>

            <div className="min-h-screen bg-background relative overflow-hidden">
                <Header />

                <main className="relative pt-24 pb-16">
                    {/* Angular Orange Background Shapes */}
                    <div className="absolute top-40 left-0 w-32 h-64 bg-primary -skew-y-12 transform -translate-x-16 z-0" />
                    {/* Sharp diagonal shape on bottom right */}
                    <div className="absolute bottom-0 right-0 w-1/3 h-48 bg-primary transform css-clip-triangle z-0" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />


                    <div className="container mx-auto px-4 md:px-8 relative z-10">
                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
                            Download <span className="text-primary">our brochures</span>
                        </h1>

                        {/* Main Content */}


                        {/* Images and Content Grid */}
                        <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto ">
                            {/* <div className="space-y-4"> */}
                            {brochureData.map((brochure) => (
                                <div key={brochure.id} className="rounded-lg overflow-hidden shadow-lg   w-full relative group border-2 border-gray-600 hover:border-primary hover:border-2 pb-2">
                                    <img
                                        src={brochure.image}
                                        alt={brochure.title}
                                        className="w-full  object-cover transform duration-500 group-hover:scale-105 h-64 rounded-lg"
                                    />
                                    <p className="text-white mt-2 text-center text-lg font-semibold p-2">{brochure.title}</p>
                                    <div className="flex justify-center items-center">
                                        <a href={brochure.download} className="mt-2 w-3/4 text-white bg-primary text-center py-2 rounded-lg inline-flex justify-center items-center mx-auto"
                                         download>Download</a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Automation Section */}
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-12 mb-20 relative">
                            <div className="absolute -left-20 top-0 w-64 h-64 bg-primary rounded-full opacity-10 blur-xl -z-10" />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Brochures;
