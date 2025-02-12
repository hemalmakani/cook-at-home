import { Button } from "~/components/ui/button"
import { Bookmark } from "lucide-react"

const bookmarkedRecipes = ["Lasagna", "Caesar Salad", "Chocolate Cake", "Grilled Salmon"]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-muted p-4 overflow-auto border-r border-border">
      <h2 className="text-xl font-semibold mb-4">Bookmarked Recipes</h2>
      <ul className="space-y-2">
        {bookmarkedRecipes.map((recipe, index) => (
          <li key={index}>
            <Button variant="ghost" className="w-full justify-start">
              <Bookmark className="mr-2 h-4 w-4" />
              {recipe}
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

