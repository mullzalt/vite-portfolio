import vimLanding from "@/assets/vim-landing.png";
import vimPreview from "@/assets/vim-preview.png";
import vimStats from "@/assets/vim-stats.png";
import vimGame from "@/assets/vim-game.png";
import vimMaker from "@/assets/vim-maker.png";
import { Tags } from "@/components/ui/tags";

export function ProjectVim() {
  return (
    <div className="px-8 flex flex-col container gap-8">
      <div>
        <h2>Gamified Vim Learning Platform</h2>
        <h3 className="font-normal">Full-stack Development</h3>
        <div className="py-4">
          <Tags
            tags={[
              "Typescript",
              "React",
              "Node.js",
              "Prisma",
              "Postgresql",
              "Oauth",
            ]}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-8">
        <img src={vimLanding} className="object-cover rounded-lg min-h-48" />
        <img src={vimGame} className="object-cover rounded-lg min-h-48" />
      </div>
      <div className="flex flex-col gap-4">
        <h2>Overview</h2>
        <p>
          This web app was intended to help people that interested in learning
          and mastering Vim, accessible in web to make it ease to start rather
          than jump straight away to command line or terminal which could cause
          discourage to some people. The Gamification elements also implemented
          to help user get a better feedback of their improvements in navigating
          or operating the text editor. Marker is used to help user know the
          current objective in the game rather than textual instruction.
        </p>
        <p>
          The project currently archived due to my tight schedule to working on
          this project, since it was initially made for and open source project.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2>Features</h2>
        <div className="grid md:grid-cols-2 md:px-8 gap-8">
          <figure className="relative w-full h-72">
            <img
              src={vimStats}
              className="h-full w-full rounded-lg object-contain bg-slate-800/80"
            />
            <figcaption className="absolute bottom-0 left-2/4 flex flex-col w-full -translate-x-2/4 justify-between rounded-xl py-4 px-6 bg-slate-800/20">
              <p className="text-white text-lg font-black">Stats Tracker</p>
              <p className="text-white">Help visualize performance.</p>
            </figcaption>
          </figure>

          <figure className="relative w-full h-72">
            <img
              src={vimPreview}
              className="h-full w-full rounded-lg object-contain bg-slate-800/80"
            />
            <figcaption className="absolute bottom-0 left-2/4 flex flex-col w-full -translate-x-2/4 justify-between rounded-xl py-4 px-6 bg-slate-800/20">
              <p className="text-white text-lg font-black">
                Leaderboard and Game Tutorial
              </p>
              <p className="text-white">
                Implement competitive aspect to trigger user motivation.
              </p>
            </figcaption>
          </figure>

          <figure className="relative w-full h-72">
            <img
              src={vimMaker}
              className="h-full w-full rounded-lg object-contain bg-slate-800/80"
            />
            <figcaption className="absolute bottom-0 left-2/4 flex flex-col w-full -translate-x-2/4 justify-between rounded-xl py-4 px-6 bg-slate-800/20">
              <p className="text-white text-lg font-black">
                Level or Game Maker
              </p>
              <p className="text-white">Add user to create game or stage.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
