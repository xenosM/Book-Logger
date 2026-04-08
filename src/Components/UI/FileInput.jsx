import Dropzone from "react-dropzone";

export default function FileInput() {
  return (
    <>
      <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="border-button border border-dotted p-6"
          >
            <input {...getInputProps()} />
            <p className="cursor-pointer">Click or Drag Cover Page</p>
          </div>
        )}
      </Dropzone>
    </>
  );
}
