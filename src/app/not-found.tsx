import { Button, Typography } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-600 text-white">
      <Typography variant="h2">404: Page Not Found</Typography>
      <div className="text-center space-y-4">
        <div className="border-t border-accent my-5"></div>
        <Typography>
          Oops, looks like you stumbled on a page that doesn&apos;t exist yet.
        </Typography>
        <Typography>Let&apos;s bring you back home.</Typography>
        <Link href="/" className="block w-max mx-auto">
          <Button
            className="text-accent border-gray-500 mx-auto hover:bg-gray-400 mt-10"
            variant="outline"
            size="lg"
          >
            <Typography>Bring me home</Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
}
