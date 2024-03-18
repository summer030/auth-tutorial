import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({
  message,
}: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 flex items-center rounded-md p-3 gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
