"use client";
import { useRouter } from "next/router";
import { createNewDocument } from "@/actions/action";
import { useTransition } from "react";

import { Button } from "./ui/button";

export const CreateNew = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleCreate = () => {
    startTransition(async()=>{
      const {docId } = await createNewDocument();
      router.push(`/document/${docId}`);
    })
  }


  return <Button
  onClick={handleCreate}
  className="bg-black rounded-lg text-white" disabled={!isPending}>
    {isPending ? "Creating..." : "Create New"}
  </Button>;
};
