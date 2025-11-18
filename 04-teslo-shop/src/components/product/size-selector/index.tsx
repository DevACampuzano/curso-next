import clsx from "clsx";
import type { Size } from "@/interfaces";

interface Props {
  selectedSize: Size;
  availableSizes: Size[];
}
export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>
      <div className="flex gap-2">
        {availableSizes.map((size) => (
          <button
            type="button"
            key={size}
            className={clsx("mx-2 hover:underline text-lg cursor-pointer", {
              underline: size === selectedSize,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
