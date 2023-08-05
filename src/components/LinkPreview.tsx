import { CrawlerUrl } from "@/utils/CrawlerUrl";
import { UrlSkeleton } from "./Skeleton";
import { ErrorFallback } from "./ErrorFallback";
import { UrlLinkPreview } from "./UrlLinkPreview";

export default function LinkPreview({ url }: { url: string }) {
    const result = CrawlerUrl(url);
    const data = result.data || '{}';
    const status = result.status;
    if (status === "error") {
      return <ErrorFallback url={url} />;
    }
    if (status === "success") {
      return <UrlLinkPreview url={url} urlData={data} />;
    }
    return <UrlSkeleton />;
  }