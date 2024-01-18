"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { useUser } from "@clerk/clerk-react"

import { useMutation } from "convex/react"
import { MoreHorizontal, Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

interface MenuProps {
    documentId: Id<"documents">
}
export const Menu = ({documentId}: MenuProps)=>{
    const router = useRouter()
    const{user} = useUser()

    const archive = useMutation(api.documents.archive)
    const onArchive = ()=>{
        const promise = archive({id: documentId})
        toast.promise(promise,{
            loading: "Moving to trash",
            success: "succesfully moved to trash",
            error: "error moving to trash"
        })
        router.push('/documents')
    }
    return (
        <DropdownMenu>
<DropdownMenuTrigger>
<Button size="sm" variant="ghost">
    <MoreHorizontal className="w-4 h-4"/>
</Button>
<DropdownMenuContent className="w-60" align="end" alignOffset={8} forceMount>
<DropdownMenuItem className="cursor-pointer"  onClick={onArchive}>
    <Trash className="h-4 w-4 mr-2 cursor-pointer" />
    Delete
</DropdownMenuItem>
<DropdownMenuSeparator/>
<div className="text-xs text-muted-foreground p-2">
Last Edited by: {user?.fullName}
</div>
</DropdownMenuContent>
</DropdownMenuTrigger>
        </DropdownMenu>
    )
}

Menu.Skeleton = function MenuSkeleton(){
    return (
        <Skeleton className="h-10 w-10"/>
    )
}
