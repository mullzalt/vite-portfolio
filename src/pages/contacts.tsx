import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import * as React from "react";

export function Contact() {
  const INITIAL_STATE = {
    isLoading: false,
    isFailed: false,
    isSuccess: false,
    message: "",
  };

  const [status, setStatus] = React.useState({
    ...INITIAL_STATE,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ ...INITIAL_STATE, isLoading: true });
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "0df6ed8a-b448-4a19-98ec-4bb5c2e32f09");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus((prev) => ({
        ...prev,
        isLoading: false,
        isSuccess: true,
        message: "Message send successfully!",
      }));
      // @ts-ignore
      event.target.reset();
    } else {
      setStatus((prev) => ({
        ...prev,
        isLoading: false,
        isFailed: true,
        message: data.message,
      }));
    }
  };
  return (
    <div className="px-8 flex flex-col gap-8">
      <h1 className="pb-2">Contact</h1>
      <div className="lg:px-8 grid lg:grid-cols-2 gap-8">
        <form
          onSubmit={handleSubmit}
          className="rounded-md shadow-xl px-4 py-8 grid gap-4 "
        >
          <div className="flex items-baseline justify-between">
            <h3 className="my-2">Leave a message.</h3>
            <p
              className={cn(
                "text-sm",
                status.isFailed && "text-destructive",
                status.isSuccess && "text-green-400",
              )}
            >
              {status.message}
            </p>
          </div>
          <Input
            type="hidden"
            name="access_key"
            value={"0df6ed8a-b448-4a19-98ec-4bb5c2e32f09"}
          />
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" required />
          <Button type="submit" disabled={status.isLoading}>
            {status.isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
        <div className="px-4 py-8 flex flex-col gap-4 ">
          <h3>Contact Detail</h3>
          <div className="flex gap-2">
            <MapPinIcon />
            <span>Bandung, West Java, Indonesia</span>
          </div>
          <div className="flex gap-2">
            <MailIcon />
            <span>rizki.d.mulya@gmail.com</span>
          </div>
          <div className="flex gap-2">
            <PhoneIcon />
            <span>+62 821-2736-2627</span>
          </div>
        </div>
      </div>
    </div>
  );
}
