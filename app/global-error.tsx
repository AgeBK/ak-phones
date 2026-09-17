"use client";

import { useEffect } from "react";
import ErrorMain from "@/app/ui/errorMain";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorMain />;
}
