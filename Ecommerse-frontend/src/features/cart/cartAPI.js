export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductByUserId(userId) {
  return new Promise(async (resolve) => {
    //todo
    const response = await fetch("http://localhost:8080/cart?user=" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    resolve({ data });
  });
}

export function deleteCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + itemId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    resolve({ data: { id: itemId } });
  });
}

export function resetCart(userId) {
  // get all items of cart and then delete them one by one
  return new Promise(async (resolve) => {
    const response = await fetchProductByUserId(userId);
    const items = response.data;

    for (let item of items) {
      await deleteCart(item.id);
    }
    resolve({ status: "success" });
  });
}
