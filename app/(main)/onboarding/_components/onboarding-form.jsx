"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const onboardingForm = ({industries}) => {
  useForm({
    resolver: zodResolver
  });

  return <div>Onboardingform</div>
  
}

export default onboardingForm;