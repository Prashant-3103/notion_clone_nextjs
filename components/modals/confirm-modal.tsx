import e from "express"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import React from "react"

interface ConfirmModalProps{
    children: React.ReactNode
    onConfirm: ()=>void
}

export const ConfirmModal=({
children,onConfirm
}: ConfirmModalProps)=>{
    const handleConform = (e: React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
       e.stopPropagation()
       onConfirm()

    }
return (
    <AlertDialog>
        <AlertDialogTrigger onClick={(e)=>e.stopPropagation()} asChild>
            {children}
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    Are you absolutly sure ?
                </AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel onClick={(e)=>e.stopPropagation()}>
Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleConform}>
                    Confirm
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
)
}
