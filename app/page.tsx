import Hero from "@/components/Hero";
import LastPost from "@/components/LastPost";
import Mission from "@/components/Mission";
import ValueSection from "@/components/ValueSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueSection />
      <Mission />
      <LastPost />
    </main>
  );
}
