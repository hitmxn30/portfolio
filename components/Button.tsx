import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "bordered" | "text";
};

export default function Button({
  href,
  children,
  external = false,
  variant = "bordered",
}: ButtonProps) {
  const baseClassName =
    "inline-flex items-center text-sm font-medium transition-colors duration-200";
  const variantClassName =
    variant === "bordered"
      ? "border border-indigo-200 bg-indigo-50 px-4 py-2 text-indigo-700 hover:bg-indigo-100"
      : "text-gray-700 underline underline-offset-4 hover:text-indigo-700";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClassName} ${variantClassName}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClassName} ${variantClassName}`}>
      {children}
    </Link>
  );
}
