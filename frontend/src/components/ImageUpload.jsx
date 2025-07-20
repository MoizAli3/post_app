import { useState } from "react";
import { useDropzone } from "react-dropzone";

function ImageUpload() {
  const [state, setState] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Filter valid file types
      const validTypes = [
        "image/svg+xml",
        "image/png",
        "image/jpeg",
        "image/gif",
      ];
      const validFiles = acceptedFiles.filter((file) =>
        validTypes.includes(file.type)
      );
      setState([...state, ...validFiles]);

      acceptedFiles.map((item) => {
        console.log(item.name);
      });
    },
  });

  // Function to remove an image from state
  const removeImage = (indexToRemove) => {
    setState(state.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      {state && state.length > 0 ? (
        <div className="grid grid-cols-2 flex-wrap items-center justify-center w-full">
          {state.map((file, index) => {
            const validTypes = [
              "image/svg+xml",
              "image/png",
              "image/jpeg",
              "image/gif",
            ];
            if (!validTypes.includes(file.type)) {
              return (
                <p key={index} className="text-red-500 text-sm">
                  Invalid file type for {file.name}. Please upload SVG, PNG,
                  JPG, or GIF.
                </p>
              );
            }
            return (
              <div key={index} className="relative p-3 inline-block">
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="w-xl"
                  onLoad={(e) => {
                    // Clean up URL after image loads
                    URL.revokeObjectURL(e.target.src);
                  }}
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                  aria-label={`Remove ${file.name}`}
                >
                  &times;
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className="flex p-3 items-center justify-center w-full"
          {...getRootProps()}
        >
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                {isDragActive ? (
                  <span className="font-semibold">Drop the files here ...</span>
                ) : (
                  <span className="font-semibold">
                    Drag 'n' drop some files here, or click to select files
                  </span>
                )}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              {...getInputProps()}
            />
          </label>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
