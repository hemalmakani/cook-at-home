import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import { recipes } from "~/data/recipes";

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = recipes.find((r) => r.slug === params.slug);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <Link href="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Recipes
        </Button>
      </Link>
      <div className="overflow-hidden rounded-lg bg-card shadow-md">
        <Image
          src={`/placeholder.svg?height=400&width=800&text=${recipe.name}`}
          alt={recipe.name}
          width={800}
          height={400}
          className="h-64 w-full object-cover"
        />
        <div className="p-6">
          <h1 className="mb-4 text-3xl font-bold">{recipe.name}</h1>
          <p className="text-lg">{recipe.description}</p>
          {/* Add more recipe details here */}
        </div>
      </div>
    </div>
  );
}
