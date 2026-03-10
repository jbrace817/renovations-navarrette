import { FadeIn } from "./FadeIn";

function SectionIntro({
  heading = "Our Core Features",
  eyebrow,
  children,
  childrenClassName,
}: {
  heading: string;
  eyebrow?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
}) {
  return (
    <FadeIn>
      <div>
        <p className="text-muted-foreground text-md mb-2 leading-8 font-medium md:text-xl">
          {eyebrow}
        </p>
        <h2 className="mb-4 text-2xl leading-10 font-medium md:text-3xl">
          {heading}
        </h2>
        <p
          className={`card-muted text-muted-foreground mb-4 leading-7 ${childrenClassName}`}
        >
          {children}
        </p>
      </div>
    </FadeIn>
  );
}

export default SectionIntro;
