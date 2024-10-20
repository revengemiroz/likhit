"use client";

import {
  ChevronDown,
  ChevronUp,
  Loader2,
  RotateCw,
  Search,
} from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { useResizeDetector } from "react-resize-detector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import SimpleBar from "simplebar-react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface PdfRendererProps {
  url: string;
}

const PdfRenderer = ({ url }: PdfRendererProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [renderedScale, setRenderedScale] = useState<number | null>(null);

  const isLoading = renderedScale !== scale;

  const { width, ref } = useResizeDetector();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setRotation((prev) => prev - 90);
      } else if (event.key === "ArrowRight") {
        setRotation((prev) => prev + 90);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const CustomScaleValidator = z.object({
    scale: z.number().min(0.1).max(2.5),
  });

  type TCustomScaleValidator = z.infer<typeof CustomScaleValidator>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TCustomScaleValidator>({
    defaultValues: {
      scale: 1,
    },
    resolver: zodResolver(CustomScaleValidator),
  });

  const handleScaleSubmit = ({ scale }: TCustomScaleValidator) => {
    setScale(scale);
  };

  return (
    <div className="w-full bg-white rounded-md shadow flex flex-col items-center">
      <div className="h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2">
        <div className="flex items-center gap-1.5">
          <Button
            onClick={() => setRotation((prev) => prev - 90)}
            variant="ghost"
            aria-label="rotate left 90 degrees"
          >
            <RotateCw className="h-4 w-4" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-1.5" aria-label="zoom" variant="ghost">
                <Search className="h-4 w-4" />
                {scale * 100}%
                <ChevronDown className="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => setScale(0.5)}>
                50%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(1)}>
                100%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(1.5)}>
                150%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(2)}>
                200%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(2.5)}>
                250%
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex-1 w-full h-full max-h-screen">
        <SimpleBar
          autoHide={false}
          className="max-h-[calc(100vh-10rem)] h-full flex flex-col items-center justify-start"
        >
          <div ref={ref} className="min-h-[100vh] flex flex-col items-center">
            <Document
              loading={
                <div className="flex justify-center">
                  <Loader2 className="my-24 h-6 w-6 animate-spin" />
                </div>
              }
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              file={
                url ??
                "https://utfs.io/f/870e52ea-527e-499a-a0d0-b9766b5b200a-4xp3v0.pdf"
              }
              className="flex flex-col items-center"
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  width={width ? width : 1}
                  pageNumber={index + 1}
                  scale={scale}
                  rotate={rotation}
                  loading={
                    <div className="flex justify-center">
                      <Loader2 className="my-24 h-6 w-6 animate-spin" />
                    </div>
                  }
                  onRenderSuccess={() => setRenderedScale(scale)}
                  className="mb-4" // Add margin to separate pages
                />
              ))}
            </Document>
          </div>
        </SimpleBar>
      </div>
    </div>
  );
};

export default PdfRenderer;
