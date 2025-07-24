import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import React from "react";

const Page = () => {
  return (
    <main className="">
      <div className="text-2xl underline">Popular Companion</div>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Random 1"
          topic="Topic 1"
          subject="science"
          duration={30}
          color="#ffda6e"
        />
        <CompanionCard 
          id="456"
          name="Random 2"
          topic="Topic 2"
          subject="language"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard 
          id="789"
          name="Random 3"
          topic="Topic 3"
          subject="english literature"
          duration={30}
          color="#bde7ff"
        />
      </section>
      <section className="home-section">
        <CompanionList />
      </section>
    </main>
  );
};

export default Page;
