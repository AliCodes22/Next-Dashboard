"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const formSchema = z.object({
  name_8313633293: z.string().min(1).max(50),
  name_6518654102: z.number().min(1).max(1000),
  name_2063881763: z.string().min(1).max(200),
  name_2410890255: z.boolean(),
});

export default function MyForm({
  setOpen,
  open,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-3xl mx-auto py-"
      >
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-10">
            <FormField
              control={form.control}
              name="name_8313633293"
              render={({ field }) => (
                <FormItem className="max-w-xl">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Product Title"
                      className="w-full"
                      defaultValue=""
                      type="text"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="name_6518654102"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  placeholder="Prix"
                  type="number"
                  {...field}
                  defaultValue="0"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name_2063881763"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a short description"
                  className="resize-none h-20"
                  defaultValue=""
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name_2410890255"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border-none p-4">
              <div className="space-y-1">
                <FormLabel>Out of Stock</FormLabel>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  aria-readonly
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="button"
          className="mr-10 bg-neutral text-yellow-500"
          onClick={() => {
            setOpen(false);
          }}
        >
          Cancel
        </Button>
        <Button className="bg-neutral text-yellow-500" type="submit">
          Save
        </Button>
      </form>
    </Form>
  );
}
