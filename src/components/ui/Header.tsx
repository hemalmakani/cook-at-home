import { Button } from "~/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="bg-background flex items-center justify-between border-b p-4">
      <div className="flex-1"></div>
      <h1 className="flex-1 text-center text-2xl font-bold">Cooking At Home</h1>
      <div className="flex flex-1 items-center justify-end">
        <ThemeToggle />
        <Button variant="outline" className="ml-2 mr-2">
          Sign In
        </Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
}
