type Props = {
  productId: string,
}

export default function AddToCart({productId}: Props) {
  async function addToCart(formData: { get: (arg0: string) => unknown; }) {
    'use server'
    const productId = formData.get('productId')
    console.log("productId: ", productId)
  }
  return (
    <form onSubmit={async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      await addToCart(formData);
    }}>
        <input type="hidden" name="productId" value={productId} />
        <button type="submit">Add to Cart</button>
    </form>

  );
}