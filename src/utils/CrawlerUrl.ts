/** *****************************************************************
  | Author            : @deniprobow
  | Name              : CrawlerUrl.ts
  | Updater           : @deniprobow
  | last_change       : 2023-08-05
  | Description_update: -
  | Description       : CrawlerUrl Util Helper For Crawling Endpoint Api CrawlerUrl
  *******************************************************************/

import { useEffect, useState } from "react";

type RequestStatus = "iddle" | "loading" | "success" | "error";

type UrlData = {
  title: string;
  description: string | null;
  favicon: string | null;
  imageSrc: string | null;
};

export function CrawlerUrl(url: string) {
  const [status, setStatus] = useState<RequestStatus>("iddle");
  const [data, setData] = useState<null | UrlData>(null);

  useEffect(() => {
    setStatus("loading");

    const encoded = encodeURIComponent(url);
    fetch(`/api/crawler/?url=${encoded}`)
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setData(data);
          setStatus("success");
        } else {
          setStatus("error");
        }
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  }, [url]);

  return { status, data };
}