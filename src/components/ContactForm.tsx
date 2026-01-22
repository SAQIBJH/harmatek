import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
    className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        toast.success("Message sent successfully! We'll get back to you soon.");
        setIsSubmitting(false);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`bg-background rounded-2xl p-8 border border-border shadow-card ${className}`}
        >
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Send us a Message
            </h3>

            <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Name
                        </label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            className="bg-muted border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            required
                            className="bg-muted border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                    </label>
                    <Input
                        id="company"
                        name="company"
                        placeholder="Your company name"
                        className="bg-muted border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your safety requirements..."
                        rows={4}
                        required
                        className="bg-muted border-border focus:border-primary resize-none text-foreground placeholder:text-muted-foreground"
                    />
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full shadow-gold"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        "Sending..."
                    ) : (
                        <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                        </>
                    )}
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
