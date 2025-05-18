"use client";
import FormHeader from "@/app/components/dashboard/formHeader";
import SubmitButton from "@/app/components/formInputs/submitButton";
import TextArea from "@/app/components/formInputs/textArea";
import TextInputs from "@/app/components/formInputs/textInputs";
import { X, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function Units() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState();
  const onSubmit = async (data) => {
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseUrl}/api/units`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div>
      <FormHeader title="New Unit" href="/dashboard/inventory" />
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <TextInputs
            label="Unit Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Unit Abbreviation"
            name="abbreviation"
            register={register}
            errors={errors}
            className="w-full"
          />
        </div>
        <SubmitButton title="Unit" isLoading={loading} />
      </form>
    </div>
  );
}
