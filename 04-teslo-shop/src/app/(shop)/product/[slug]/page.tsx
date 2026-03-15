import { notFound } from "next/navigation";
import {
  MobileSlidershow,
  QuantitySelector,
  SizeSelector,
  Slidershow,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = initialData.products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      <div className="col-span-2 md:col-span-2">
        <MobileSlidershow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />
        <Slidershow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>
      <div className="col-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />
        <QuantitySelector quantity={3} />
        <button type="button" className="btn-primary my-5">
          Agregar al carrito
        </button>
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
