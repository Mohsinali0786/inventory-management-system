"use client";
import FormHeader from "@/app/components/dashboard/formHeader";
import TransferInventoryForm from "@/app/components/dashboard/transferInventoryForm";
import {  Minus, Plus } from "lucide-react";

export default function NewAdjustments() {
  const tabs = [
    {
      title: "Add Stock",
      icon: Plus,
    },
    {
      title: "Transfer Stock",
      icon: Minus,
    },
  ];
  return (
    <div>
      <FormHeader title="New Adjustment" href="/dashboard/inventory" />
      {/* <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInputs
            type="number"
            label="Enter Amount Of Stock To Transfer"
            name="transferStockQty"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            name="receivingBranchId"
            label="Select the Branch That Will Received The Stock"
            options={selectOptions}
            register={register}
            className="w-full"
          />
          <TextArea
            name="adjustmentNotes"
            label="Adjustment Notes"
            register={register}
            required
            errors={errors}
          />
        </div>
        <SubmitButton title="Adjustment" isLoading={loading} />
      </form> */}

      {/* sm:p-6 md:p-8  */}
      <div
        className="text-sm font-medium text-center text-gray-500
       border-b 
       border-gray-200 
       dark:border-gray-700
       w-full max-w-4xl px-4 py-2
       bg-white border rounded-lg shadow 
       dark:bg-gray-800 mx-auto my-3"
      >
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {tabs?.map((item, index) => {
            const Icon = item?.icon
            return (
              <li className="me-2" key={index}>
                <button
                  href="#"
                  className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-transparent rounded-t-lg active hover:text-gray-600  hover:border-gray-300"
                  aria-current="page"
                >
                  <Icon className="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500"/>
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <TransferInventoryForm />
    </div>
  );
}
