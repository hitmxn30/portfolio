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
    "inline-flex items-center text-sm font-medium transition-opacity hover:opacity-70";
  const variantClassName =
    variant === "bordered"
      ? "border border-gray-200 px-4 py-2 text-gray-900"
      : "text-gray-700 underline underline-offset-4";

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
