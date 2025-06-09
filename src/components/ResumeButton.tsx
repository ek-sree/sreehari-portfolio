"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function ResumeButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume/SREEHARI-E-K.pdf"
    link.download = "SREEHARI-E-K.pdf"  
    link.click()
  }

  return (
    <div className="flex gap-2">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            View Resume
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>Resume - Sreehari E K</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <iframe
              src="/resume/SREEHARI-E-K.pdf"
              className="w-full h-96 border rounded"
              title="Resume Preview"
            />
          </div>
        </DialogContent>
      </Dialog>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button onClick={handleDownload} size="sm">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </motion.div>
    </div>
  )
}
