// app/about/page.tsx
import Image from "next/image";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="min-h-screen bg-center bg-fixed flex justify-center items-center pt-32">
      <Card title="About">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 font-iceland">
          <div className="space-y-2 max-w-2xl">
            <h1 className="text-5xl md:text-6xl">CHIMERA 2025</h1>
            <h2 className="text-3xl text-[#66e9fa]">
              March 1st, Ashoka University, Sonipat
            </h2>
          </div>
          <div className="w-64 h-64 relative">
            <Image
              src="/images/logo.png"
              alt="Chimera Logo"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 font-iceland text-xl text-[#98a0b3]">
          <p className="text-xl font-iceland leading-relaxed">
            IEEE Ashoka is proud to announce Chimera, an inter-university
            celebration of excellence in STEM research and innovation. Our
            objective is to showcase the work of our university&apos;s students
            across STEM fields while providing a vibrant platform for networking
            and an enjoyable weekend-long experience for all visitors. Chimera
            is especially unique because:
          </p>

          <ul className="pl-8 text-xl leading-relaxed font-iceland space-y-4">
            <li className="relative pl-6">
              <span className="absolute left-0">•</span>
              <span className="block pl-2">
                It includes a wide array of disciplines, aligned with IEEE&apos;s overall goal
              </span>
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0">•</span>
              <span className="block pl-2">
                It integrates research into the festival, drawing from Ashoka&apos;s rich research-oriented background
              </span>
            </li>

            <li className="relative pl-6">
              <span className="absolute left-0">•</span>
              <span className="block pl-2">
                Ashoka&apos;s liberal arts curriculum provides a unique,
                interdisciplinary background
              </span>
            </li>
          </ul>
        </div>

        {/* Talks and Workshops Section */}
        <div className="pt-9 font-iceland">
          <h2 className="text-5xl md:text-3xl mb-3">
            Talks and Workshops
          </h2>
          <p className="text-xl leading-relaxed text-[#98a0b3]">
            Attendees will have the opportunity to engage with professionals and
            industry leaders through enlightening talks and interactive
            workshops, gaining valuable insights into cutting-edge developments
            in the field.
          </p>
        </div>
        <div className="pt-9 font-iceland">
          <h2 className="text-5xl md:text-3xl mb-3">
            Competitions and Collaboration
          </h2>
          <p className="text-xl leading-relaxed text-[#98a0b3]">
            We will have multiple high-stakes competitions with prize money over
            2 lakhs, designed to foster hands-on problem-solving skills.
            Additionally, students will get the chance to showcase their ongoing
            research projects through presentations and exhibitions
          </p>
        </div>

        <div className="mt-4 space-y-5 font-iceland">
          <h1 className="pt-11 text-5xl md:text-5xl font-iceland">WHY CHIMERA?</h1>
          <p className="text-xl leading-relaxed text-[#98a0b3] mb-3 font-iceland">
            chimera [kahy-meer-uh]
          </p>
          <p className="text-xl leading-relaxed text-[#98a0b3] font-iceland">
            The chimera, in Greek mythology, is a creature composed of parts
            from different animals, often embodying a fantastical amalgamation
            of features. The chimera is depicted as a fire-breathing monster
            with the body of a lion, the head of a goat protruding from its
            back, and a serpent for a tail. chi·mae·ra [kahy-meer-uh] Just as
            the chimera embodies a fusion of different animal parts, STEM
            represents a mix of distinct disciplines, each contributing its
            unique strengths to create something new and impactful. This
            interdisciplinary approach fosters innovation, driving progress
            across a wide range of fields, from medicine to space exploration,
            echoing the mythical chimera&apos;s ability to transcend the
            boundaries of individual creatures. We celebrate this ideology in
            IEEE Ashoka and hope to showcase it at Chimera 2024!
          </p>
        </div>

        <div className="mt-4 space-y-5 mb-10 font-iceland">
          <h1 className="pt-11 text-5xl md:text-5xl">IEEE@Ashoka</h1>
          <p className="text-xl leading-relaxed text-[#98a0b3]">
            The IEEE Ashoka Student Branch was founded to foster holistic
            development among STEM students at Ashoka University. Our mission is
            to encourage excellence and collaboration across STEM disciplines,
            providing essential skills and leadership training for an industry
            or academia career. Through service programs and our flagship
            hands-on lab sessions, we aim to cultivate a diverse and inclusive
            STEM culture while increasing technical literacy in our local
            community. We have garnered immense positive feedback on our work
            over the years and iteratively grown our 35+ members team.
          </p>
        </div>
      </Card>
    </div>
  );
}
