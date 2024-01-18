"use client"
import { Dialog,DialogContent,DialogHeader } from "../ui/dialog"
import { useSettings } from "@/hooks/use-settings"
import { Label } from "../ui/label"
import { ModeToggle } from "../mode-toggle"


export const SettingsModal = ()=>{
    const settngs = useSettings()
    return (
        <Dialog open={settngs.isOpen} onOpenChange={settngs.onClose}>
<DialogContent>
    <DialogHeader className="border-b pb-3">
<h2 className="text-lg font-medium">My Settings</h2>
    </DialogHeader>
    <div className="flex item-center justify-between">
<div className="flex flex-col gap-y-1">
    <Label>
        Appearance
    </Label>
    <span className="text-[0.8rem] text-muted-foreground">
        Cusomize how Jotion looks on your device
    </span>
</div>
<ModeToggle/>
    </div>
</DialogContent>
        </Dialog>
    )
}
