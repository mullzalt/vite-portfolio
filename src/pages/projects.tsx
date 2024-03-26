import landingImage from "@/assets/vim-landing.png";
import { Link } from "react-router-dom";
function Thumbnail({
  imageSrc,
  name,
  children,
  href,
}: {
  imageSrc: string;
  name: string;
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <Link to={href}>
      <figure className="group flex flex-col items-center justify-center shadow-lg hover:shadow-2xl rounded-lg overflow-clip duration-300 transition-all">
        <img
          className="group-hover:opacity-85 opacity-100  object-cover min-h-[250px]"
          src={imageSrc}
        />
        <div className="p-4 flex flex-col w-full">
          <h3 className="text-foreground pb-2 group-hover:text-primary font-black">
            {name}
          </h3>
          {children}
        </div>
      </figure>
    </Link>
  );
}
export function Projects() {
  return (
    <div className="px-8 flex flex-col gap-8">
      <h1 className="pb-2">Projects</h1>
      <div className="grid lg:grid-cols-2 px-8">
        <Thumbnail
          imageSrc={landingImage}
          name="Vim Gamification Website"
          href="/projects/vim-gamification"
        >
          <h5 className="text-xl font-semibold">
            Personal Open-source Project
          </h5>
          <h4 className="text-muted-foreground">Website Application</h4>
        </Thumbnail>
      </div>
    </div>
  );
}
