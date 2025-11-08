import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const registrationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  college: z.string().trim().max(100, "College name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  contact: z.string().trim().min(10, "Contact must be at least 10 digits").max(15, "Contact must be less than 15 digits"),
});

export const RegistrationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    college: "",
    email: "",
    contact: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      registrationSchema.parse(formData);
      setErrors({});
      
      toast({
        title: "Registration Successful!",
        description: "We'll send you payment details shortly.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        college: "",
        email: "",
        contact: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        
        toast({
          title: "Validation Error",
          description: "Please check the form for errors.",
          variant: "destructive",
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="register" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-primary">REGISTER</span>
              <span className="text-foreground"> HERE</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Be a part of <span className="text-primary font-semibold">TedXKPRCAS</span>
            </p>
          </div>

          <Card className="bg-card border-border p-8 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className={`bg-input border-border focus:border-primary ${errors.firstName ? 'border-destructive' : ''}`}
                  />
                  {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className={`bg-input border-border focus:border-primary ${errors.lastName ? 'border-destructive' : ''}`}
                  />
                  {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="college">College Name</Label>
                <Input
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Enter your college name (optional)"
                  className={`bg-input border-border focus:border-primary ${errors.college ? 'border-destructive' : ''}`}
                />
                {errors.college && <p className="text-sm text-destructive">{errors.college}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`bg-input border-border focus:border-primary ${errors.email ? 'border-destructive' : ''}`}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact *</Label>
                <Input
                  id="contact"
                  name="contact"
                  type="tel"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  className={`bg-input border-border focus:border-primary ${errors.contact ? 'border-destructive' : ''}`}
                />
                {errors.contact && <p className="text-sm text-destructive">{errors.contact}</p>}
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6"
              >
                Proceed to Register
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * Required fields
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
