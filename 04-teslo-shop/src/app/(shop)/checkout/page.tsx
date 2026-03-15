import Image from "next/image";
import Link from "next/link";

import { Title } from "@/components";
import { initialData } from "@/seed/seed";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>

            <Link href="/cart" className="underline mb-5">
              Editar carrito
            </Link>

            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  style={{ width: "100px", height: "100px" }}
                  className="mr-5 rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                  <button className="underline mt-3" type="button">
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded shadow p-7 h-fit">
            <h2 className="text-2xl mb-2">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Andres Campuzano</p>
              <p>Av. Siempre Viva 123</p>
              <p>Col. Centro</p>
              <p>Alcaldia Cuauhtemoc</p>
              <p>Ciudad de Mexico</p>
              <p>CP 06000</p>
              <p>+52 1234567890</p>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2"> Resumen de orden</h2>

            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 items</span>
              <span>Subtotal</span>
              <span className="text-right">$100</span>
              <span>Impuestos (15%)</span>
              <span className="text-right">$15</span>
              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$115</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                <span className="text-xs">
                  Al hacer clic en "Colocar orden", aceptas nuestros{" "}
                  <a href="/#" className="underline">
                    terminos y condiciones
                  </a>{" "}
                  y{" "}
                  <a href="/#" className="underline">
                    politicas de privacidad
                  </a>
                </span>
              </p>
              <Link
                href="/orders/123"
                className="flex btn-primary justify-center"
              >
                Colocar orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
