import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

export default function WorkCard(
  { description, video, important_points, name, stack, link }:
    { description: string[], video: string, important_points: string[], name: string, stack: string[], link: string }
) {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className="w-full rounded-md border-[1px] border-zinc-400 shadow-lg shadow-zinc-200 dark:shadow-zinc-950"
        >
          <video
            preload="none"
            autoPlay
            muted
            loop
            className="videoIndex w-full border-b-[1px] border-zinc-400 rounded-t-md aspect-video object-cover"
          >
            <source src={video} type="video/mp4" />
            VideoIndex no disponible
          </video>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle>
            <a href={link} className="hover:underline" target="_blank">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-300">
                # {name}
              </h2>
            </a>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea
          className="w-full rounded-md max-h-[23rem] md:max-h-[60vh] h-full"
        >
          <div className="w-full flex justify-center">
            <video
              preload="none"
              autoPlay
              muted
              loop
              className="rounded-md videoIndex aspect-video object-cover w-full max-w-md shadow-lg border-[1px] border-zinc-400"
              >
              <source src={video} type="video/mp4" />
              VideoIndex no disponible
            </video>
          </div>
          <div className="p-6 text-lg flex md:flex-row flex-col gap-y-6 items-center">
            <div className="flex-1">
              <div className="text-zinc-600 dark:text-zinc-400 flex flex-col gap-2">
                {description.map((des) => <p>{des}</p>)}
              </div>
              <div
                className="grid grid-cols-1 lg:grid-cols-3 mt-4 w-full max-w-2xl gap-y-4"
              >
                <div className="">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-300">
                    Stack
                  </h3>
                  <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400">
                    {stack.map((item) => <li>{item}</li>)}
                  </ul>
                </div>
                <div className="col-span-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-300">
                    Puntos a destacar
                  </h3>
                  <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400">
                    {important_points.map((item) => <li>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}