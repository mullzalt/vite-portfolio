import { Stepper, StepperItem } from "@/components/ui/stepper";
import { Tags } from "@/components/ui/tags";

export function Abouts() {
  return (
    <div>
      <h1 className="pb-2">About Me</h1>

      <div className="grid grid-cols-2 gap-8 lg:px-8">
        <Stepper title="Experience" className="col-span-2 md:col-span-1">
          <StepperItem title="Bandung Design">
            <p className="text-muted-foreground">September 2022 - April 2023</p>
            <p>
              Full-stack web development work for one of Indonesia National
              Chemistry Competition user management with Node.js and React.js
              based solutions.
            </p>
            <Tags
              tags={[
                "Javascript",
                "Node.js",
                "React JS",
                "REST API",
                "Tailwind CSS",
                "Postgresql",
                "Prisma",
              ]}
            />
          </StepperItem>
          <StepperItem title="PT. Kharisma Indotech Pratama">
            <p className="text-muted-foreground">December 2023 - Current</p>
            <p>
              Website Unit Testing and development work for Music Licencing and
              Player with Ruby on Rails based solutions.
            </p>
            <Tags
              tags={["Rspec", "Factorybot", "Ruby", "Rails", "Postgresql"]}
            />
          </StepperItem>
        </Stepper>

        <Stepper title="Education" className="col-span-2 md:col-span-1">
          <StepperItem title="Vocational Highschool - Software Engineering">
            <p className="text-muted-foreground">
              SMK Binawisata Lembang, 2016 - 2019
            </p>
            <p>
              Studies included basic understanding of building computer program
              and software modeling notations and their practice.
            </p>
          </StepperItem>
          -
          <StepperItem title="Bachelor's Degree - Software Engineering">
            <p className="text-muted-foreground">
              Indonesia University of Education, 2019 - 2024
            </p>
            <p>
              Studies included deeper understanding of fundamental computer
              software and hardware architecture, software development life
              cycle and their implementation on practice. Subject also included
              machine learning, web development and Project management.
            </p>
          </StepperItem>
        </Stepper>
      </div>
    </div>
  );
}
