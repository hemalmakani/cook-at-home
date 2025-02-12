import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="flex items-center mb-6">
      <Input type="text" placeholder="Search for recipes..." className="flex-1 mr-2" />
      <Button>
        <Search className="mr-2 h-4 w-4" /> Search
      </Button>
    </div>
  )
}

