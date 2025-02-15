import Image from "next/image";

function SectionOne() {
  return (
    <section className="min-h-screen w-full max-w-5xl mx-auto text-left py-16 px-6">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="mb-12 max-w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-deepBlack leading-tight">
            About Us
          </h1>
          <p className="mt-3 text-base md:text-lg text-deepBlack leading-relaxed">
            We are a church dedicated to growing in Christ, serving our communities, and sharing the gospel in both word and action. Our mission is to build a Christ-centered life through worship, discipleship, and love.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-12 space-y-20">
          
          {/* The Great Commission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-vintageGold">The Great Commission</h2>
              <p className="mt-3 text-sm md:text-base text-deepBlack leading-relaxed">
                Our foundation is built on the Great Commission (Matthew 28:18-20), where every believer is called to be a disciple and to make disciples. Through prayer, Bible study, and obedience, we grow together in faith (Acts 2:42-47).
              </p>
            </div>
            <div className="flex justify-center">
              <Image 
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" 
                width={500} 
                height={350} 
                alt="The Great Commission"
                className="rounded-lg opacity-90 object-cover w-full max-w-md"
              />
            </div>
          </div>

          {/* Service & Outreach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <Image 
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" 
                width={500} 
                height={350} 
                alt="Serving the Community"
                className="rounded-lg opacity-90 object-cover w-full max-w-md"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-lg md:text-xl font-bold text-vintageGold">Service & Outreach</h2>
              <p className="mt-3 text-sm md:text-base text-deepBlack leading-relaxed">
                Jesus calls us to care for the poor, the lost, and the marginalized (Matthew 25:34-40). Our church serves both locally and globally, sharing Christ’s love through community outreach, missions, and personal connections.
              </p>
            </div>
          </div>

          {/* Worship & Community */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-vintageGold">Worship & Community</h2>
              <p className="mt-3 text-sm md:text-base text-deepBlack leading-relaxed">
                Worship and fellowship are at the heart of our faith. Through prayer, the sacraments, and small group connections, we strengthen our relationship with God and one another (Hebrews 10:24-25).
              </p>
            </div>
            <div className="flex justify-center">
              <Image 
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" 
                width={500} 
                height={350} 
                alt="Worship and Community"
                className="rounded-lg opacity-90 object-cover w-full max-w-md"
              />
            </div>
          </div>

          {/* Living Out the Gospel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <Image 
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" 
                width={500} 
                height={350} 
                alt="Living Out the Gospel"
                className="rounded-lg opacity-90 object-cover w-full max-w-md"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-lg md:text-xl font-bold text-vintageGold">Living Out the Gospel</h2>
              <p className="mt-3 text-sm md:text-base text-deepBlack leading-relaxed">
                Our calling is to live out the gospel in every aspect of life. Through our words, actions, and relationships, we aim to reflect God’s character and expand His Kingdom on Earth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SectionOne;
