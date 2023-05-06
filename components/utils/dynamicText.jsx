export function DynamicText({ children, value }) {
  return <>{value && value !== "" && children}</>;
}

export function Paragraph({ text, style }) {
  return (
    <>
      {text && text !== "" && (
        <p
          dangerouslySetInnerHTML={{ __html: text }}
          className={`${style} text-paragraph`}
        ></p>
      )}
    </>
  );
}
