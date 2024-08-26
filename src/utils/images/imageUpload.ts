export async function ImageUpload(image: File): Promise<string> {
  const formData = new FormData();

  formData.append("image", image);

  const imageFetch = await fetch("https://api.imgur.com/3/image/", {
    method: "POST",
    headers: {
      Authorization: "Client-ID 9b048ed3692bfd0",
      Accept: "application/json",
    },
    body: formData,
  });

  const response = await imageFetch.json();

  return response.data.link;
}
