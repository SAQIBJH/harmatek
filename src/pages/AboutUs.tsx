import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>About Us | HarmaTek</title>
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
                    <div className="absolute bottom-20 right-0 w-64 h-64 bg-primary rounded-full opacity-20 blur-3xl z-0" />
                    {/* Sharp diagonal shape on bottom right */}
                    <div className="absolute bottom-0 right-0 w-1/3 h-48 bg-primary transform css-clip-triangle z-0" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />


                    <div className="container mx-auto px-4 md:px-8 relative z-10">
                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
                            About us
                        </h1>

                        {/* Main Content */}
                        <div className="max-w-4xl mx-auto text-center space-y-6 text-muted-foreground font-medium leading-relaxed mb-16">
                            <p>
                               We are a specialized industrial engineering services company providing integrated solutions in the design and manufacturing of machines, production lines, and industrial , in addition to manufacturing spare parts and industrial components with high quality standards.
                            </p>
                            <p>
                                Our team combines engineering expertise with modern technologies to deliver efficient, accurate, and reliable solutions that meet our clients’ operational needs while ensuring quality, safety, and on-time delivery.
                            </p>
                        </div>

                        {/* Images and Content Grid */}
                        <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
                            <div className="space-y-4">
                                {/* Image 1 Placeholder - Circuit Board */}
                                <div className="rounded-lg overflow-hidden shadow-lg h-64 bg-gray-200 w-full relative group">
                                    <img
                                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
                                        alt="Electronic Circuit Board"
                                        className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-12">
                                {/* Image 2 Placeholder - Industrial Worker */}
                                <div className="rounded-lg overflow-hidden shadow-lg h-80 bg-gray-200 w-full relative group">
                                    <img
                                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
                                        alt="Industrial Automation"
                                        className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Automation Section */}
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-12 mb-20 relative">
                            <div className="absolute -left-20 top-0 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl -z-10" />

                            <div className="order-2 md:order-1 text-muted-foreground">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                    Automation
                                </h2>
                                <div className="space-y-4 font-medium leading-relaxed">
                                    <p>
                                        We have an integrated team specialized in modernizing
                                        machinery and production lines. Our engineers are well
                                        qualified and expert in making a machine run utilizing all the
                                        hardware that is available in the side and make machine run
                                        with efficiency. These operations include changing the PLC and
                                        all other control devices (HMI, Inverter and servo
                                        drive...etc.) according to customer requirements.
                                    </p>
                                </div>
                            </div>
                            {/* Spacer for visual balance if needed, or could add another image/graphic on the right */}
                            <div className="order-1 md:order-2">
                                {/* Potentially another image or just empty space/graphics as per design which shows text on bottom-left relative to images */}
                            </div>
                        </div>

                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default AboutUs;
