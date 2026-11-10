
"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil } from "lucide-react"
import { JobRow } from "../dashboard/recruiter/jobs/page"
import { updateJob } from "@/lib/actions/jobs"


export function EditJobDialog({job}:{job:JobRow}) {
      
    const handleSubmit = async() =>{
          const res = await updateJob(job._id)
          console.log(res);
    }
      

  return (
    <Dialog>
      <form onSubmit={handleSubmit}>
        <DialogTrigger render={<Button variant="outline"><Pencil aria-hidden className="size-4" /></Button>} />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Job Title</Label>
              <Input id="title" name="name" defaultValue={job.title} />
            </Field>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue={job.companyName} />
            </Field>
            <Field>
              <Label htmlFor="username-1">Job Type</Label>
              <Input id="username-1" type="job" name="name" defaultValue={job.jobType} />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
