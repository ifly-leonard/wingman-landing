"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";

export default function BlogImage({ src }: { src?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {src ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <div className="relative border-2 hover:border-blue-500 transition duration-300 hover:scale-105 rounded-md cursor-pointer">
              <Image
                className="rounded-md"
                src={src}
                alt="Image Alt Text"
                width={800}
                height={600}
                style={{ objectFit: "cover" }}
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-3xl p-0">
            <VisuallyHidden>
              <DialogTitle>Expanded Image</DialogTitle>
            </VisuallyHidden>
            <div className="relative rounded-md">
              <Image
                className="w-full h-auto rounded-md"
                src={src}
                alt="Expanded Image"
                width={1200}
                height={900}
              />
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <div className="text-red-500 font-bold text-center uppercase">Image not available</div>
      )}
    </>
  );
}
