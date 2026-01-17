import { profileData, linksData, sliderData, testimonialsData } from "@/data";
import { ProfileHeader } from "@/components/profile-header";
import { LinkButtons } from "@/components/link-buttons";
import { ImageSlider } from "@/components/image-slider";
import { Testimonials } from "@/components/testimonials";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <main className="min-h-screen pb-20 overflow-x-hidden bg-gradient-to-b from-background to-muted/20">
      <ProfileHeader profile={profileData} />
      <LinkButtons links={linksData} />
      <ImageSlider images={sliderData} />
      <Testimonials testimonials={testimonialsData} />
      <ContactForm />
    </main>
  );
}
