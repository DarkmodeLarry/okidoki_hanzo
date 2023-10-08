"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import CreatePortfolioSheet from "./CreatePortfolioSheet";

function CreatePortfolioButton() {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (open: boolean) => setOpen(open);

  return (
    <div
      className="
    w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px]"
    >
      <Button
        variant={"outline"}
        className="dark:text-white dark:bg-neutral-950 w-full bg-white"
        onClick={() => setOpen(true)}
      >
        <span className="bg-gradient-to-r from-red-500 to-orange-500 hover:to-orange-800 bg-clip-text text-transparent">
          Create a New Portfolio
        </span>
      </Button>
      <CreatePortfolioSheet open={open} onOpenChange={handleOpenChange} />
    </div>
  );
}

export default CreatePortfolioButton;
