/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lCgwi0wOwqs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Component() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button variant="link" onClick={() => setOpen(true)}>
        Feedback
      </Button>
      <DialogContent className="sm:max-w-[500px] ">
        <DialogHeader>
          <DialogTitle>Give us your feedback</DialogTitle>
          <DialogDescription>
            We'd love to hear your thoughts on how we're doing. Please take a
            moment to fill out the form below.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="feedback">Feedback</Label>
            <Textarea
              id="feedback"
              className="min-h-[100px] max-h-[200px]"
              placeholder="Share your thoughts"
            />
          </div>

          <DialogFooter>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
            >
              Submit Feedback
            </Button>
            <div>
              <Button
                variant="ghost"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                }}
              >
                Close
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
