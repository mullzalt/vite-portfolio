import { useCallback, useEffect, useState } from "react";
import {
  CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import illustration from "../assets/web_dev_illustrarion.png";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

function CarouselIndicator({
  count,
  current,
  onClick,
}: {
  count: number;
  current: number;
  onClick?: (selected: number) => void;
}) {
  const handleClick = useCallback(
    (selected: number) => {
      onClick && onClick(selected);
    },
    [count, current, onClick],
  );
  return (
    <div className="flex gap-4 items-center justify-center p-2">
      {[...Array(count)].map((_, i) => (
        <div
          onClick={() => handleClick(i)}
          key={i}
          className={cn(
            "cursor-pointer p-2 rounded-full",
            "bg-primary/20",
            i === current && "bg-primary",
          )}
        ></div>
      ))}
    </div>
  );
}

export function Hero() {
  const DELAY_IN_MS = 5000;

  const [api, setApi] = useState<CarouselApi>();
  const [timer, setTimer] = useState(0);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTimer((prev) => prev + 100), 100);

    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    setTimer(0);
  }, [current]);

  useEffect(() => {
    if (!api) return;

    if (timer >= DELAY_IN_MS) {
      api.canScrollNext() ? api.scrollNext() : api.scrollTo(0);
      setTimer(0);
    }
  }, [api, timer]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleClick = useCallback(
    (selected: number) => {
      if (!api) {
        return;
      }
      api.scrollTo(selected);
    },
    [api, current, count],
  );

  return (
    <Carousel setApi={setApi} className="grid grid-cols-2 gap-8">
      <div className="col-span-2 md:col-span-1 flex items-center justify-center">
        <img src={illustration} className="object-contain" />
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col justify-center lg:px-6">
        <CarouselContent>
          <CarouselItem>
            <h3>Hello!</h3>
            <h2>You can call me Mul!</h2>
            <Progress
              className="h-2 my-2"
              value={(timer / DELAY_IN_MS) * 100}
            />
            <h4 className="font-normal">
              I'am a Full-stack web developer whose happen to be GNU/Linux
              enthusiast.
            </h4>
          </CarouselItem>
          <CarouselItem>
            <h3>I'am a Full-stack</h3>
            <h2>Web developer.</h2>
            <Progress
              className="h-2 my-2"
              value={(timer / DELAY_IN_MS) * 100}
            />
            <h4>
              My main area of expertise are Typescript, Javascript, React JS,
              Node.js, and Ruby.
            </h4>
          </CarouselItem>
          <CarouselItem>
            <h3>I really love</h3>
            <h2>Prolem solving and building game.</h2>
            <Progress
              className="h-2 my-2"
              value={(timer / DELAY_IN_MS) * 100}
            />
            <h4>
              I find a lot of fun in building a program or even customizing my
              workflow in Arch Linux.
            </h4>
          </CarouselItem>
        </CarouselContent>
        <div>
          <CarouselIndicator
            onClick={handleClick}
            current={current}
            count={count}
          />
        </div>
      </div>
    </Carousel>
  );
}
