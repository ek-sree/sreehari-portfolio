"use client"

import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ResumeButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume/SREEHARI-E-K.pdf"
    link.download = "SREEHARI-E-K.pdf"
    link.click()
  }

  return (
    <div className="flex w-full items-center gap-2">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="rounded-full">
            <Eye className="h-4 w-4" />
            <span className="hidden lg:inline">Resume</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[85vh] max-w-4xl overflow-auto">
          <DialogHeader>
            <DialogTitle>Resume — Sreehari E K</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <iframe
              src="/resume/SREEHARI-E-K.pdf"
              className="h-[70vh] w-full rounded-lg border border-border"
              title="Resume Preview"
            />
          </div>
        </DialogContent>
      </Dialog>

      <Button onClick={handleDownload} size="sm" className="rounded-full">
        <Download className="h-4 w-4" />
        <span className="hidden lg:inline">Download</span>
      </Button>
    </div>
  )
}
