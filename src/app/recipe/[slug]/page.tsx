import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import { recipes } from "~/data/recipes"; // This will be removed when API is ready

// Add this when you have the API ready
// async function getRecipe(slug: string) {
//   const response = await fetch(`/api/recipes/${slug}`);
//   if (!response.ok) return null;
//   return response.json();
// }

export default async function RecipePage({
  params,
}: {
  params: { slug: string };
}) {
  // Replace this with API call when ready
  // const recipe = await getRecipe(params.slug);
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
