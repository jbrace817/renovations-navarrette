import { GripVertical } from "lucide-react";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "./image-comparison";

export function ImageComparisonCustomSlider({
  imageBefore,
  imageAfter,
  priority = false,
}: {
  imageBefore: string;
  imageAfter: string;
  priority?: boolean;
}) {
  return (
    <ImageComparison className="aspect-16/10 w-full rounded-lg border border-zinc-200 dark:border-zinc-800">
      <ImageComparisonImage
        src={imageBefore}
        alt="Before renovation"
        position="left"
        priority={priority}
      />
      <ImageComparisonImage
        src={imageAfter}
        alt="After renovation"
        position="right"
        priority={priority}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />

      {/* Before/After Labels */}
      <div className="pointer-events-none absolute inset-x-0 top-4 flex justify-between px-4">
        <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
          Before
        </span>
        <span className="rounded-full border border-white/20 bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-900 uppercase backdrop-blur-sm">
          After
        </span>
      </div>

      <ImageComparisonSlider className="w-1 bg-white/50 backdrop-blur-xs transition-colors hover:bg-white/80">
        <div className="absolute top-1/2 left-1/2 h-6 w-4.5 -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-white">
          <GripVertical className="text-muted-foreground mx-auto my-auto h-full w-full" />
        </div>
      </ImageComparisonSlider>
    </ImageComparison>
  );
}
