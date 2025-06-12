"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MyForm from "./MyForm";
import { useState } from "react";

export function DialogDemo({ action }: { action: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className={
            action === "Ajouter"
              ? "bg-yellow-500 hover:bg-yellow-400"
              : "bg-zinc-500"
          }
        >
          {action}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mt-25 text-center text-blue-400">
            Add / Update Product
          </DialogTitle>
        </DialogHeader>
        <MyForm setOpen={setOpen} open={open} />
      </DialogContent>
    </Dialog>
  );
}
