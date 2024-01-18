"use client"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
interface DocumentIdPageProps {
    params: {
        documentId: Id<"documents">
    }
}
const DocumentIdPage = ({params}: DocumentIdPageProps)=>{
    return(
        <div>
        document id
        </div>
    )
}

export default DocumentIdPage
