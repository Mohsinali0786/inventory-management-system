"use client";
import FormHeader from "@/app/components/dashboard/formHeader";
import Imageinput from "@/app/components/formInputs/imageinput";
import SelectInput from "@/app/components/formInputs/selectInput";
import SubmitButton from "@/app/components/formInputs/submitButton";
import TextArea from "@/app/components/formInputs/textArea";
import TextInputs from "@/app/components/formInputs/textInputs";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
// import { UploadButton } from "../../../../../../lib/uploadthing";
import { X, Plus, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewItems() {
  const [imageUrl, setImageUrl] = useState("");
  const categories = [
    { value: "electronics", label: "Electronics" },
    { value: "clothes", label: "Clothes" },
  ];
  const unit = [
    { value: "kg", label: "Kg" },
    { value: "pcs", label: "Pcs" },
  ];
  const brands = [
    { value: "hp", label: "HP" },
    { value: "dell", label: "Dell" },
  ];
  const warehouse = [
    { value: "warehouseA", label: "Warehouse A" },
    { value: "warehouseB", label: "Warehouse B" },
    { value: "warehouseC", label: "Warehouse C" },
  ];
  const supplier = [
    { value: "supplierA", label: "Supplier A" },
    { value: "supplierB", label: "Supplier B" },
    { value: "supplierC", label: "Supplier C" },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState();
  const onSubmit = async (data) => {
    console.log(imageUrl, "ecixi");
    data.imageUrl = imageUrl;
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseUrl}/api/items`, {
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
      <FormHeader title="New Warehouse" href="/dashboard/inventory" />
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <SelectInput
            name="categoryId"
            label="Select the Item category"
            options={categories}
            register={register}
            className="w-full"
          />
          <TextInputs
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Item SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Item Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
            // isRequired={false}
          />
          <TextInputs
            label="Item Quantity"
            name="qty"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            name="unitId"
            label="Select the Item unit"
            options={unit}
            register={register}
            className="w-full"
          />
          <SelectInput
            name="brandId"
            label="Select the Item brand"
            options={brands}
            register={register}
            className="w-full"
          />
          <TextInputs
            label="Buying Price"
            name="buyingPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            name="supplierId"
            label="Select the Item supplier"
            options={supplier}
            register={register}
            className="w-full"
          />
          <TextInputs
            label="Selling Price"
            name="sellingPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Re-Order Point"
            name="reOrderPoint"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            name="warehouseId"
            label="Select the Item Warehouse"
            options={warehouse}
            register={register}
            className="w-full"
          />
          <TextInputs
            label="Item Weight in Kgs"
            name="weight"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Item Dimension in cm (20 X 40 X 100)"
            name="dimension"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Item Tax Rate in %"
            name="taxRate"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextArea
            name="description"
            label="Item Description"
            register={register}
            required
            errors={errors}
          />
          <TextArea
            name="notes"
            label="Item Notes"
            register={register}
            required
            errors={errors}
          />
    <Imageinput imageUrl={imageUrl} setImageUrl={setImageUrl}/>
        </div>
        <SubmitButton title="Item" isLoading={loading} />
      </form>
    </div>
  );
}
