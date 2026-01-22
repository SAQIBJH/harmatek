import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Smartphone } from "lucide-react";
import harmtekLogo from "@/assets/harmtek-logo.jpeg";
import contactPage from "@/assets/contact-page.jpg";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | HarmaTek</title>
                <meta
                    name="description"
                    content="Contact HarmaTek (Bright Solution Company) for industrial machinery maintenance and electronic cards installation. Riyadh, KSA."
                />
            </Helmet>

            <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
                <Header />

                <main className="flex-grow pt-24 pb-16">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">

                            {/* Contact Info Card */}
                            <div className="relative bg-background rounded-lg shadow-xl overflow-hidden border border-gray-700 flex flex-col">
                                {/* Diagonal Header Construction */}
                                {/* <div className="absolute top-0 right-0 w-full h-32 z-0">
                                    <div className="w-full h-full bg-[#F59E0B] transform -skew-y-6 origin-top-right translate-y-[-50%] scale-[1.5]" />
                                </div> */}

                                {/* Image Section */}
                                <div className="relative h-64 z-10 w-full clip-path-slant-bottom">
                                    <img
                                        src={contactPage}
                                        alt="Industrial Robot Arm"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay Gradient to blend if needed, but keeping it clean for now */}
                                    {/* Custom slanted shape separator */}
                                    {/* <div className="absolute bottom-0 left-0 w-full h-16 bg-background transform skew-y-6 origin-bottom-left translate-y-8"></div> */}
                                </div>

                                {/* Content Section */}
                                <div className="px-8 pb-12 pt-4 flex flex-col items-center text-center relative z-20">
                                    {/* Logo */}
                                    <div className="bg-white p-2 rounded-full shadow-lg -mt-16 mb-4 relative z-30">
                                        <img
                                            src={harmtekLogo}
                                            alt="HarmaTek (Bright Solu)"
                                            className="w-24 h-24 rounded-full object-cover"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-3xl font-bold text-white mb-6">
                                        Harma Tek
                                    </h2>

                                    {/* Phone Numbers */}
                                    <div className="flex justify-center items-center gap-3 mb-6">
                                        <Smartphone className="w-8 h-8 text-[#F59E0B] flex-shrink-0" />
                                        <div className="text-left font-bold text-white text-base leading-relaxed flex gap-4 justify-center items-center">
                                            <p className="dir-ltr">+966 55 947 1701</p>
                                            <p className="dir-ltr">+966 54 802 2461</p>
                                            <p className="dir-ltr">+966 57 046 4872</p>
                                        </div>
                                    </div>

                                    {/* Description (Arabic/English) */}
                                    <div className="space-y-2 mb-8 font-semibold text-[#D97706] text-lg">
                                        {/* <p className="font-arabic" dir="rtl">
                                            صيانة واصلاح الماكينات وتركيب خطوط الانتاج
                                        </p> */}
                                        <p className="text-white text-base">
                                            Specialized in maintaining machine production lines and installing electronic cards
                                        </p>
                                    </div>

                                    {/* Emails */}
                                    <div className="space-y-1 mb-6 text-[#4B5563] font-semibold text-lg flex flex-wrap justify-center items-center gap-12">
                                        <div className="flex items-center gap-2">

                                        <span>
                                            <Mail className="w-6 h-6 text-[#F59E0B]" />
                                        </span>
                                        <a href="mailto:sm@harmatek.sa" className="block hover:text-primary transition-colors text-white">
                                            sm@harmatek.sa
                                        </a>
                                        </div>
                                        <div className="flex items-center gap-2">

                                        <span>
                                            <MapPin className="w-6 h-6 text-[#F59E0B]" />
                                        </span>
                                        <p className="text-white">Riyadh, KSA</p>
                                        </div>
                                        
                                    </div>

                                    {/* Address */}
                                    {/* <div className="text-[#1F2937] font-bold text-lg">
                                    
                                        <p>Riyadh, KSA</p>
                                    </div> */}
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="mt-8 lg:mt-0">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Contact;
