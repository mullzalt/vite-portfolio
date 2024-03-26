import { cn } from "@/lib/utils";

export function Stepper({
  children,
  title,
  className,
}: {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h2>{title}</h2>
      <div className="px-4">
        <ol className="relative border-s-2 border-primary">{children}</ol>
      </div>
    </div>
  );
}

export function StepperItem({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) {
  return (
    <li className="mb-10 ms-6 last:mb-0">
      <div className="absolute -start-3 flex rounded-full p-2.5 border-2 border-primary bg-background"></div>
      <h3 className="font-medium leading-tight pb-0">{title}</h3>
      <div>{children}</div>
    </li>
  );
}
