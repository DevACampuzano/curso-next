import { notFound } from "next/navigation";
import { ProductGrid, Title } from "@/components";
import type { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";

const labels: Record<Category, string> = {
  men: "para hombres",
  women: "para mujeres",
  kid: "para niños",
  unisex: "para todos",
};

interface Props {
  params: Promise<{
    id: Category;
  }>;
}

const categories: Array<Category> = ["men", "women", "kid"];
const products = initialData.products;

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;

  if (!categories.includes(id)) {
    notFound();
  }

  const filteredProducts = products.filter((product) => product.gender === id);

  return (
    <>
      <Title
        title={`Articulos de ${labels[id]}`}
        subTitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={filteredProducts} />
    </>
  );
}
