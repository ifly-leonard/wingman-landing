"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function BlogImage({ src }: { src?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {src ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <img
              className="border-2 hover:border-blue-500 transition duration-300 hover:scale-105 rounded-md cursor-pointer"
              src={src}
              alt="Image Alt Text"
            />
          </DialogTrigger>
          <DialogContent className="max-w-3xl p-0">
            <VisuallyHidden>
              <DialogTitle>Expanded Image</DialogTitle>
            </VisuallyHidden>
            <img className="w-full h-auto rounded-md" src={src} alt="Expanded Image" />
          </DialogContent>
        </Dialog>
      ) : (
        <div className="text-red-500 font-bold text-center uppercase">Image not available</div>
      )}
    </>
  );
}
