const FormattedStack = ({ stack }: { stack: string | undefined }) => {
  if (!stack) return <></>;
  const lines = stack.split("\n");
  return lines.map((line, index) => <div key={line + index}>{line}</div>);
};

function ErrorStack({ stack }: Readonly<{ stack: string | undefined }>) {
  return (
    <div className="flex flex-col gap-2 w-full lg:w-3/6 h-full">
      <h4>Stack trace</h4>
      <pre className="overflow-y-auto h-full whitespace-pre-wrap text-white bg-black p-4 rounded-xl">
        <code>{<FormattedStack stack={stack} />}</code>
      </pre>
    </div>
  );
}

export default ErrorStack;
