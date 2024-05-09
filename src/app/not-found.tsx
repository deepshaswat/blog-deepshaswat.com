"use client";

import { ErrorMessage } from "@/components/error-page/error-message";
import React from "react";

const Custom404: React.FC = () => {
  return <ErrorMessage code={404} />;
};

export default Custom404;
