import CTAButton from "./CTAButton";

interface ServiceHeroProps {
  title: string;
  description: string;
}

export default function ServiceHero({ title, description }: ServiceHeroProps) {
  return (
    <section className="relative bg-forest-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 60%, rgba(122,158,126,0.3) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-5">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-xl">
            {description}
          </p>
          <CTAButton large />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full -mb-1">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30C360 60 720 0 1080 30C1260 45 1380 55 1440 45V60H0V30Z"
            className="fill-cream"
          />
        </svg>
      </div>
    </section>
  );
}
