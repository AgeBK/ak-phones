"use client"; //todo:

import ErrorMain from "../ui/errorMain";
import { errorMsg } from "@/app/lib/appData.json";

export default function Error() {
  // if db error occurs
  return <ErrorMain message={errorMsg} />;
}
